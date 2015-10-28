$.chatRoom=function(title, color, id){ title = title||'chatbox';color=color||'blue'; id=id||'cbo'

    var theTextInput= $.textInput().K('form-control'),

        theSendButton= $.buttonM('send', function(){
            $l('sending: '+theTextInput.val())
            socket.emit('sendChatMessage', {
                chatRoomName: title,
                username: _username,
                message: theTextInput.val()})
        }),

        thePicButton= $.buttonM('pic',function(){
            $.pop('pic select')}),

        thePopButton= $.buttonM('pop', function(){
            socket.emit('popMessage', theTextInput.val(), title)}),

        theMessages = $.div('x').id( 'cbi' ).overflow('auto'),

        usersInRoomBox= $.div()


    theWindow = $.win('chatroom: '+title).id(id).minW(600).minH(400).C(color)

    theWindow.A(

        $.row(

            $.col(8,

                theMessages,
                theTextInput,
                theSendButton,
                thePopButton,
                thePicButton ),

            $.col(4, $.h5('users:'),

                // "<div class="m4"><h5>users:</h5></div>"
                // class should be.. "col-md-4" ?!


                usersInRoomBox
            ))
    )


    var updateUsersDiv=function(u){

        usersInRoomBox.empty()

        if(A(u)){ _.each(u,  function(username){

            usersInRoomBox(

                $.h5(username).click(

                    function(){

                        alert('clicked '+username)

                        $.post('/mug', {u: username},

                            function(userMug){

                                var theH1 = $.h1(),

                                    theDiv = $.div(),

                                    fullProfileButton=$button('full', function(){
                                        $l('/wap/profiles/'+ username);
                                        window.location= '/wap/profiles/'+ username
                                    })


                                $.win(

                                    $.div()(

                                        $.br(), $.hr(), $.h3('User: '+ username),

                                        $.br(),

                                        $.canvas(300, 300).fit( userMug ),  theH1,   theDiv,

                                        ms = $.textarea().C('w','z'),

                                        $mailButton( ms, username ),

                                        $chatButton( username, ms ),

                                        fullProfileButton  ) )

                                showStatus(username, theDiv)

                                makeProfile(username, theDiv) }

                        )}  )

            )})}

        else { usersInRoomBox.A( $.h5('no users'))}}

    var chatController={

        u: updateUsersDiv,
        updateUsersDiv: updateUsersDiv,

        w: theWindow,
        window: theWindow,


        t: function(){return theWindow.toggle()},
        toggle: function(){return theWindow.toggle()},

        b:function(m){  theMessages.A($.h5(m).col('w'))  },
        write:function(m){  theMessages.A( $.h5(m).col('w'))  },


        s:function(m){  theMessages.A($.h5(m).col('z'))  },
        writeBlack: function(m){  theMessages.A( $.h5(m).col('z')) }}

    //add room to client rooms list
    chatRoomsObject[title] = chatController


    //repeatedly emit 'room', which launches room user updates!
    setInterval( function(){ socket.emit('room', title)}, 1000)

    return chatController
}

