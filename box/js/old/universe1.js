guysArray  = [ ]

fetchMugByUserModel2 =fetchMugByMugId= function(user, func){ //

    $.post( '/dud' , {d: user.m}, func)

}


fetchMugByUserModel =  function(user, func){ //

   // $.post( '/dud' , {d: user.m}, func)

    $.get('/mug/' + user.m, func)
}






fetchMugByUsername =  function(username, func){

    $.post('/mug', {u: username}, function(mug){

    if(mug){ func(mug) }

    })}






SpeechBubble =  function( text, x, y ){

    var g=G(arguments),args= g,  c=EaselContainer(), container=c//Ct$()

    if( !$w['uni'] ){alert('the universe is missing!');return}

    text = g[0] || 'hi!'

    //so if you don't pass in coords, it relies on 'you'
    x = args[1] || you.x()

    y = args[2] || you.y()

    uni.a(container)

    container.a(EaselCircle(x-150,y-150,100,'w'))
    container.a(EaselCircle(x-50,y-50,30,'w'))
    container.a(EaselCircle(x-20,y-20,10,'w'))
    container.a(EaselText(text).x(x-200).y(y-200))  //c=Do(c)


    setTimeout(function(){container.X()},10000)
    EaselTween(container,[{ a:0, sxy:.1, x:x-250, y:y-250 }, 20000])

    //broadcast out your speech bubble
    if(g.p){ socket.emit('speechBubble',  { t:text, x:x, y:y, u:_username } )}

    return container}




//relies on 'you'.. actually just makes a similar object
guyLocation=function(){

    if( $w['you'] ){

        return { u:_username,  x: you.x(), y: you.y()} }}






addGuy=function(username, bitmap){

    //add guy to guysArray
    guysArray.push(

        { u: username, username:username,  b: bitmap,  bitmap:bitmap}
    )

    //add guy's bitmap to universe

    bitmap.rgc().xy(600).sxy(.4)

    bitmap.o('$$', function(bm){   bm.XX(); socket.emit('X', _username) })

    uni.a(bitmap)
}




//get guy object by username or user.username
//guy object has {user/username, x, y}
//-- so this finds a guy in the guysArray or returns false if he aint there
getGuy=function(username){

    var theGuy=false

    //get the username
    username = O(username)? username.u: username


    _.each(guysArray,

        function(guy){
            if(guy.u == username){theGuy = guy}})

    return theGuy}





//pass in a user / username to update your image of them
//or.. pass nothing to update everyone on YOU
updateGuy =  function(user){

    if(user){

        var bitmap = getGuy( user.u ).bitmap

        if(bitmap){ bitmap.x( user.x ).y( user.y )  }

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










startUniverse = function(username){

    $l('startUniverse with: '+ username)

    if( !$w['uni'] ){

        $l('no uni  -- calling UNIVERSE()'); UNIVERSE() } else {$l('uni found. no need to call UNIVERSE')}

    var guy = getGuy( username )

    if( guy ){  $l('we have guy: ' + guy ) }

    else {  $l('no guy')

        fetchMugByUsername(username,

            function(userMug){

                Bm( userMug,

                    function( bitmap ){  addGuy(username, bitmap)  }  )  })
    }

}








UNIVERSE=function(){z()



    var onMugReady=function(b, s){

        uni = s

        b.rgc().xy(600).sxy(.4);

        b.o('$$', function(bm){   bm.XX(); socket.emit('X', _username)})

        you = b.fn(SL)

        guysArray.push( {u:_username, b:you} )

        setInterval(updateGuy, 100)

        getUsers(  function(users){

            var theRow = row().a()

                _.each(users,  function(user){

                    fetchMugByMugId( user,

                        function(userMug){

                            theRow( Thumbnail(   $pg(user.u),  $br(), userMug)
                                .$(  function(){ inviteToUniverse(user.u)   })  )

            })   })

        })

//bubble txt
        dv('b', 1000, 'auto').pp()(  $br(3),  $textInput('...', 'tx'),    $button('send', function(){ SpeechBubble(  qi('tx').V(),   '+')  }))


    }

    wMs(onMugReady,   1000,    800,  '/beach.jpg')



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

    if( _username == data.toWho){  startUniverse(data.from)   }

    // here u should really just be able to 'addUser'

})













socket.on('invite', function(invitation){  //dd=invitation

    inviteFunction = function(userMug){

        var popInvitation = pop(


            $div()(

                $img( userMug ).w( 200 ).h( 200 ),

                $h1( 'chat with '+ invitation.from + '?' ),

                $button( 'ya' , function(){

                    popInvitation.m( )

                    startUniverse( invitation.from )  //so u are just adding them in?  // ah the function also supposedly takes into account the app not even being open // i could nix that for now

                    acceptUniverseInvitation( invitation.from )

                }),

                $button( 'na' , function(){ popInvitation.m()  })

            )

        )}



    if( _username == invitation.toWho ){


        fetchMugByUsername( invitation.from, inviteFunction )

    }


})


