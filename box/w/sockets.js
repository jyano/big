
//this will be an array-hash
//socketId, username
usersArray=[]  // can also be object?




module.exports=function(io, K){
    sockets =kk=io.sockets
    
    miniSockets=function() {
        sK = function (k) {
            k.e = k.emit
            k.o = k.on
            k.j = k.join
            k.b = k.broadcast
            k.b.e = k.b.emit
            return k}

        sKK = function (kk) {
            kk.o = kk.on
            kk.i = function (a) {
                var r = kk.in(a)
                r.e = r.emit
                return r
            }
            kk.s = function (a) {
                var r = kk.socket(a)
                r.e = r.emit
                return r
            }
        }
        em = function (k, b, d, e, f) {

            if (U(b)) {
                return _.partial(em, k)
            }

            k.emit(b, d, e, f)

        }
        bc = function (k, b, d, e, f) {
            if (U(b)) {
                return _.partial(bc, k)
            }
            k.broadcast.emit(b, d, e, f)
        }

        jn = function (k, b, d) {
            if (U(b)) {
                return _.partial(bc, k)
            }
            k.join(b, d)
        }

        sKK(kk) //man=kk.manager

        
    }; miniSockets()
    
    
   // clients = sockets.clients

    
    //an array of rooms
    //they all start with a slash
    roomsArray =  sockets.manager.rooms
 


    //pass in a room NAME (string)
    //get back an array of all the users in that room
    //but you get them back by their IDs
    //you will need to convert their id's to their usernames
    //by mapping them with a function...

    getRoomMembers=function(theRoom){
       theRoom=roomsArray['/'+ theRoom]
    return  theRoom
    }



    getRoomMembersByUsername=function(theRoom){

        theRoom = roomsArray['/'+ theRoom]

        theRoom =  _.map(theRoom, function(memberId){ return usersArray[memberId]  })

        return  theRoom


    }










   //get socketId from username
     getSocketId=function(username){
         var socketId=usersArray[ username ]
         return $l(socketId)}







    sockets.on('connection',function(k){//k=sK(k)
        //ke=function(a,b,c){k.emit(a,b,c)}
        //kke=function(a,b,c){kk.emit(a,b,c)}
        //kb=function(a,b){sK(k);k.b.e(a,b)}


        var serverSocket = k
        //l('k!')
        //em(k)('l','jason')

        serverSocket.on('p', function(d, u){

            return U(u)?

            k.broadcast.emit('p', d) :

            sockets.in(u).emit('p', d)

        })





       // serverSocket.on('l',function(d){d=d||'ping';  k.emit('l', 'sent: '+l(d))})




        // kk.in(r).emit('l','frog')
        //  serverSocket.on('dpop',   function(data,n){  k.broadcast.emit('dpop',data,n) })





        serverSocket.on('e',function(d,a,b,c){ k.emit(d,a,b,c)})

        serverSocket.on('bc', function(data,a,b,c){

            k.broadcast.emit(data,a,b,c)

        })



        //   serverSocket.on('chat',function(data){
        //       k.broadcast.emit('newChat',   {    n: data.n,   m: data.m  })
        //       k.emit('youChat', {  n: data.n,  m: data.m  })    })



        //k.on('chat', function(d){  k.emit('chat', 'cool')  })




        //serverSocket.on('red',function(r,e,d){r=r||'frog';e=e||'frog';d=d||'frog';sockets.in(r).emit(e,d)})


        //serverSocket.on('x',function(m){k.emit.to('sex').emit('l',m||'sexy');sockets.in('sex').emit('l',m||'sexy')})


        ////



        joinRoomFunction=function(theRoom){

            $l('joinRoom')
            $l('joining room: " '+ theRoom + ' "' )

            k.join( theRoom )

            var r = roomsArray[   '/' + theRoom   ],



                rr =  _.map( r  , function(username){ return usersArray[ username ]  } )



            k.emit( 'inRoom',  { room: theRoom,  user: rr }      )


        }




        serverSocket.on('execute',  function(func,a,b,c){  global[func](a,b,c)  })
        serverSocket.on('broadcast',function(d,a,b,c){k.broadcast.emit(d,a,b,c)})
        serverSocket.on('upop',function(data,n){ k.broadcast.emit('upop',data,n)})
        serverSocket.on('speechBubble',   function(speech){
                k.broadcast.emit('speechBubble', speech)})





        //all users should emit this initially to list its username with its id
        serverSocket.on('id',
            function(username){

                //tell client to log its socketId
                serverSocket.emit( 'log', serverSocket.id)

                //server should also log socketId
                $l( serverSocket.id )

                //associete socketId with username
                usersArray[ serverSocket.id ] = username

                //log usersArray on server
                $l( usersArray )

                //log this user's username..
                $l( usersArray[ serverSocket.id ] )

        })



        //this is what the actual CHATROOMS execute

        serverSocket.on('sendChatMessage', function(data){

            $l(data)

            sockets.in( data.chatRoomName ).emit( 'receiveChatMessage' , data )

        })






//this is triggered within a chatroom when someone clicks on a user and 'chats' them up
//will need to update other parts to also activate this (instant messages from other parts of the site)

        //this is the real sendMessage!!!!
        serverSocket.on('sendPrivateMessage',
            function(message){

                $l('sending private message..')
                sockets.in(message.toWho).emit('receivePrivateMessage', message)

            })







        serverSocket.on('sendMessage', function(data){

            //data message blank!

            $l('...')
            $l(data)

            $l('send message')

        })

        serverSocket.on('kk',  function(data){  serverSocket.emit('res',  sockets.clients(''))   })


        serverSocket.on('j', joinRoomFunction)

        serverSocket.on('joinRoom', joinRoomFunction)



        serverSocket.on('r', function(data){  serverSocket.emit('res',  data?room[data]  : roomsArray())   })

        //serverSocket.on('who', function(username){  $l( getSocketId(username))  })







        serverSocket.on('room',  function( theRoom ){ //$l(room(theRoom))


            //$l(usersArray)

           // $l('on room')
            //k.emit( 'inRm',  {  r: theRoom, u: _.map( getRoomMembers(theRoom), getSocketId )  })


           // $l('room: '+ theRoom)

            var users = getRoomMembersByUsername( theRoom )

           // $l('--')
            //$l(users)
            //$l('--')

            k.emit( 'roomUpdate',

                {
                    room: theRoom,  users: users

                })

            })






        //this gets you a list of users in a room
        //get the room
        serverSocket.on('inRoom',  function(theRoom){ //$l(room(theRoom))

                //k.emit( 'inRm',  {   u: _.map( roomsArray['/'+theRoom]     , getSocketId), r: theRoom }  )

            serverSocket.emit( 'inRoom',

                {

                    users: _.map( roomsArray['/ '+ theRoom],  getSocketId ),

                    room: theRoom

                }  )

            })














        serverSocket.on('in', function(data){ var theRoom,  guy

                if( A( data ) ){

                    theRoom =  roomsArray[  roomName(data)  ]

                   // if(!theRoom){  $l('not room !') }  // em('res', '-')

                   // else {

                        k.emit('res', theRoom[ guy || k.id ]? true : false)
                    //}

                }

                else {

                    theRoom = roomsArray[ '/'+ data ]


                  if(!theRoom){
                     // $l('not room')

                  }// k.emit('res', '-')


                    else {

                        k.emit('res',   theRoom[ k.id ]? true: false ) }

            }
   })














        //dataUrl?
        serverSocket.on('du',  function(data){

            k.emit('im', data)

            k.broadcast.emit('im', data)

            $m.img.create({})

        })

        //CREATE AN IMAGE
        serverSocket.on('newImg', function(data){

            $m.img.create(data, function(err, image){  k.emit('newImgAck', image)   })

        })

        // io.of('/chat').on('connection',   function(d){   $l('new chatter')    })



    })


}


Rooms=function(){


    //var usernames={}, $scope.$broadcast('', );
    rooms=['Lobby']

    io.sockets.on('connection', function(k) {

        k.on('adduser', function(un) {
            k.username=un
            k.room = 'Lobby'
            usernames[un]=un
            k.join('Lobby');
            k.emit('updatechat', 'SERVER', 'you have connected to Lobby')
            k.broadcast.to('Lobby').emit('updatechat', 'SERVER',
                    un + ' has connected to this room')
            k.emit('updaterooms', rooms, 'Lobby')
        })


        k.on('create', function(room) {
            rooms.push(room)
            k.emit('updaterooms', rooms, k.room)
        })


        k.on('sendchat', function(data){

            io.sockets["in"](k.room).emit('updatechat',

                k.username, data)})




        k.on('switchRoom', function(newroom){

            var oldroom  = k.room

            k.leave(k.room)
            k.join(newroom)

            k.emit('updatechat',
                'SERVER',
                'you have connected to ' + newroom)

            k.broadcast.to(oldroom).emit('updatechat', 'SERVER', k.un + ' has left this room')

            k.room = newroom

            k.broadcast.to(newroom).emit('updatechat',  'SERVER', k.un + ' joined')

            k.emit('updaterooms', rooms, newroom)

        })


        k.on('disconnect', function(){

            delete usernames[k.un]

            io.sockets.emit('updateusers', usernames)


            k.broadcast.emit('updatechat',
                'SERVER', k.username + ' has disconnected')

            k.leave(k.room)

        })
    })


}