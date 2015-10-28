guysArray  = [ ]

fetchMugByMugId = fetchMugByUserModel2 =function(user, func){ //

    $.P( '/getimagebyid' ,  user.m,  func)
}

fetchMugByUserModel =  function(user, func){ //

   // $.post( '/dudX' , {d: user.m}, func)

    $.get('/mug/' + user.m, func)
}

fetchMugByUsername =  function(username, func){

    $.post('/mug', {u: username}, function(mug){

    if(mug){ func(mug) }

    })}




SpeechBubble =  function( text, x, y ){

    var args=G(arguments)

        container= new createjs.Container()

    if( !window['uni'] ){alert('the universe is missing!');return}

    text = args[0] || 'hi!'

    //so if you don't pass in coords, it relies on 'you'
    x = args[1] || you.x
    y = args[2] || you.y

    uni.A(container)

    container.circle(x-150,y-150,100,'white')
        .circle(x-50, y-50, 30, 'white')
        .circle(x-20,y-20,10,'white')
        .text(text, "20px Arial", "blue", x-200, y-200)

    setTimeout(function(){container.remove()}, 10000)


    tw(
        container,
        [{ a:0, sxy:.1, x:x-250, y:y-250 }, 20000]
    )



    //broadcast out your speech bubble
    if(args.p){ socket.emit('speechBubble',  { t:text, x:x, y:y, u:_username } )}


    return container

}


//relies on 'you'.. actually just makes a similar object
guyLocation=function(){  if( window['you'] ){

    return {
        u:_username,
        username:_username,
        x: you.x,
        y: you.y }

}}






addGuy=function(username, bitmap){

    //add guy to guysArray
    guysArray.push({


        u: username,
        username:username,
        b: bitmap,
        bitmap: bitmap

    })

    //add guy's bitmap to universe

    bitmap.rCenter().XY(600).sXY(.4)


    // bitmap.o('$$', function(bm){   bm.XX(); socket.emit('X', _username) })

    uni.A( bitmap )

}









//get guy object by username or user.username
//guy object has {user/username, x, y}
//-- so this finds a guy in the guysArray or returns false if he aint there
getGuy=function(username){
    //get the username
    username = O(username) ? username.u: username

    //do this as a reduce

    var theGuy = false

    _.each(guysArray,  function(guy){

            if(guy.u == username){
                theGuy = guy
            }

        })

    return theGuy}





//pass in a user / username to update your image of them
//or.. pass nothing to update everyone on YOU
updateGuy =  function(user){

    if(user){

        var bitmap = getGuy( user.u ).bitmap

        if(bitmap){ bitmap.XY( user.x, user.y )  }

    }

    else {  socket.emit('bc', 'updateGuy',  guyLocation())  }}








inviteToUniverse=function(toWho){

    socket.emit('bc',
        'invite',
        {from: _username, toWho: toWho})

}





//this will have the server broadcast.emit 'accept'
 acceptUniverseInvitation =  function(toWho){

     $l(_username + ' accepts from ' + toWho)

     socket.emit('bc',  'acceptUniverseInvitation',  {from: _username, toWho: toWho})

 }










startUniverse = function(username){  $l('startUniverse with: '+ username)

    if( !window['uni'] ){

        $l('no uni  -- calling UNIVERSE()'); UNIVERSE() } else {$l('uni found. no need to call UNIVERSE')}

    var guy = getGuy( username )

    if( guy ){  $l('we have guy: ' + guy ) }

    else {  $l('no guy')

        fetchMugByUsername(username,

            function(userMug){

                Bm( userMug,  function( bitmap ){

                    addGuy(username, bitmap)

                    })

            })
    }

}








UNIVERSE=function(){z()


    uni = createjs.stage(1000, 800).tick().A().backgroundImage('/beach.jpg')


    uni.mug(

        function(b){

        you = b.rCenter().XY(600).sXY(.4).drag()


        b.on('dblclick', function(bm){

            bm.remove()

            socket.emit('X', _username)

        })

        guysArray.push({ u :_username, b :you })

        setInterval(updateGuy, 100)





            div = $.div('blue', 1000, 'auto').prependTo( $('body') )

            div.A(
                $.br(3),
                $.input('...', 'tx').id('textinput'),
                $.button('send',

                    function(){

                        SpeechBubble( $('#textinput').V(), '+')

                    })
            )


    })


    userHolder = $.div('black').A()

    $.get('/users',  function(users){


        var theRow = $.row().A()

        _.each(users,  function(user){

            if(user.mugURL){

                var img = $.img(user.mugURL).WH(100).click(function(){
                    $l(user.u)

                    inviteToUniverse( user.u )

                    })

               userHolder.A( img ) } else { alert('no mugURL!')}

            // fetchMugByMugId( user,  function(userMug){
            // theRow.A( $.thumbnail( $.span(user.u), userMug).WH(200).click(  function(){ inviteToUniverse(user.u)   }) )})

        })

    })




}






//RECIEVE speech bubble
socket.on('speechBubble', function(speech){

    if( getGuy(speech.u) ){

        SpeechBubble(speech.t, speech.x, speech.y)

    }})


socket.on('updateGuy', function(guy){ updateGuy(guy) })
socket.on('acceptUniverseInvitation', function(data){

    d = data
    //if it was YOUR invitation that was accepted

    if( _username == data.toWho){

        startUniverse(data.from)
    }

    // here u should really just be able to 'addUser'

})













socket.on('invite', function(invitation){  //dd=invitation

    $l('invite')

    inviteFunction = function(userMug){

          popInvitation = $.pop(


            $.div().A(

                $.img( userMug ).W( 200 ).H( 200 ),

                $.h1( 'chat with '+ invitation.from + '?' ),

                $.button( 'ya' , function(){

                    popInvitation.modal('hide')

                    startUniverse( invitation.from )
                    //so u are just adding them in?
                    // ah the function also supposedly takes into account the app not even being open
                    // i could nix that for now

                    acceptUniverseInvitation( invitation.from )

                }),

                $.button( 'na' , function(){ popInvitation.modal('hide')  })

            )

        )

    }



    if( _username == invitation.toWho ){


        fetchMugByUsername( invitation.from, function(data){

            $l('wooooo')

            inviteFunction(data)} )

    }


})


