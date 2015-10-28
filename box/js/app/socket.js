roomsObject = { }

instantMessagesObject={ }

//connect to the socket //..need to change this on the deployment server!!!
socket = kk = io.connect()

///
///
///
/// communication
/////////////////////////////////////////////////////// instant messages

InstantMessage = function(messageObject){  //=imBox

    var theTextInput = $textInput()

    var instantMessage = $win()(

        $h3( 'instant message from ' + messageObject.from ),

        $h4( 'message: ' + messageObject.message ),

        theTextInput,

        $button( 'reply' , function(){

            socket.emit( 'sendPrivateMessage' , {

                message: theTextInput.V() ,

                toWho: messageObject.from ,

                from: _username }) }) )


    instantMessagesObject[messageObject.from]=instantMessage

    return instantMessage

}

socket.on('receivePrivateMessage',
    function(messageObject){

        var iMsg = instantMessagesObject[messageObject.from]
        if(iMsg){ iMsg.A( $.h4(messageObject.message)) } else {

            InstantMessage(messageObject)}
    })

///////////////////////////////////////////////////////   chatrooms

socket.on('receiveChatMessage', function(data){

    $l( data.username + ': ' + data.message)
    chatRoomsObject[data.chatRoomName].write( data.username+': '+ data.message)

})

socket.on('roomUpdate', function(update){

    var room = chatRoomsObject[ update.room ]

    if(room){ room.updateUsersDiv(  update.users)  }

})



//var e=function(a,b){return kk.emit(a,b)},o=function(a,b){return kk.on(a,b)}, b=function(a,b){return kk.broadcast.emit(a,b)  }
//socket.on(  'a',function(a){alert(a)})
//socket.on('l',function(d){  $l(d)  })
//socket.on('d',function(d){$l('SERVER: %j',d)})
//socket.on( 'dpop', function(d,n){ dud(d, n)  })
//socket.on( 'dudPop', function(d,n){ dud(d, n)  })
//socket.on('notice', function (d) {  $l('SERVER NOTICE: %s', d);  })
//socket.on('p',function(e){pop(e)})
//socket.on('roo',function(d){roo=d})  // ?
//socket.on('res', function(d){ res = d })  // ?
//socket.on('newImgAck', function(data){ xx().fit(data.u) })
//socket.on('im', function(image){ xx().f( image ) })
//dnm = function(d){ return  d.n+': '+ d.m }
//chaz=function(){
//var b1= $emitButton('msg', 'chat'),  b2 = $button('room', function(){var theChannel = connectChannel('chat',  ffl('chat') ) // wtf is ffl ???
//      theChannel.on('al', pop)})
//dva()(b1,b2).lt(300)}
//socket.on('newChat', function(d){ CH.b(d.n+': '+ d.m) })
//socket.on('youChat', function(d){ CH.s(d.n+': '+ d.m) })
//socket.on('frog',function(){pop('frog')})
//socket.on('upd', function(guy){ updateGuy(guy) })
//ke=function(a,b,c){ socket.emit(a,b,c) }
//sop=function(m,u){ socket.emit('p',m,u)  }
// o('popbox', function(o){poppy(o);qi('popbox').m()})
// o('v',function(d){VAR=d})
// o('user-message',function(d){$l(d);e('chat-message',d)})
//o('eG', nP)
// o('mU',function(m){uM(m)})// uM(m);
// o('map',function(m){uM(m)})
// o('fc',function(fc){xy(gx.me, fc) })
//o('map',function(gA){_e(gA,function(g){_e(sArray,function(g){c.a(p.me)})});xy(p.me,200,100);xy(p.me,f)})
//kf=function(a,b,c){return function(){socket.emit(a,b,c)}}




//socketEmit = function(a,b){ socket.emit( 'e' ,  a,  b)  } // em=





//*** ??? confusing!!!
upop=function(image,  size){

    image= X(image) ? image.u() : image

    size=size||300

    return xx().w(size).h(size).fit(image )

}



dud=function(d,n){

    $.P('/getImageById', {data: d},   function(u){   upop(u,n)  })
}

//sk-send du of your (first) can-el



du=function(){var u=c0().toDataURL();socket.emit('du',u);return u}


sendPopBox=function(){

    $('.pop').click(function(){

        socket.emit( 'pop',

            { t: qk( 'pt' ).v, b: qk( 'pb' ).v
            })
    })
}

//a button that emits!
$emitButton   =bte=function(buttonText ,toEmit){

    return $button(buttonText,

        function(){  socket.emit(toEmit || buttonText)  }

    )}


//NAMESPACE
//so this will connect you to a LOCAL channel.. maybe reason websocket not working actually
//you can also pass it a callback function (on 'connected')
connectChannel=chan=function(channel, func){

    var theChannel= io.connect('http://localhost/'+ channel)

    if(func){
        theChannel.on('connect',func)
    }

    return theChannel

}



socket.on('alert',  function(a){alert(a)})
socket.on('log',function(d){  $l(d)  })
socket.on('dir',function(d){$l('SERVER: %j',d)})
socket.on('pop',function(e){pop(e)})


//***

//this is triggered within a chatroom when someone clicks on a user and 'chats' them up
//will need to update other parts to also activate this (instant messages from other parts of the site)









//socket.on('say to someone', function(id, msg){socket.broadcast.to(id).emit('my message', msg)})
