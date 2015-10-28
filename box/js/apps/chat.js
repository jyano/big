CHATROOMS= function(){

    chats = $.divA('bb', 200, 200).drag().left(400).WH('auto').pad(10).A().A(
        ChatButton('general'), ChatButton('fun'), ChatButton('sexy'),
        theTextInput = $.input().K('form-control'),
        $.button('PrivateChatRoomate', function(){
            $.privateChatRoom(theTextInput.val())
        }).mar(40))

    function ChatButton(name){
        return $.button(name,function(){
            $.privateChatRoom(name)
        }).mar(40)}
    }

$.privateChatRoom  = function(roomName){


    //bug.. if they CLOSE the window...this needs to TRIGGER something
    //in this case (removal from the chatRoomsObject)..
    //but more generally, i need to allow a sophisticated options obj to $win

    if(
        chatRoomsObject[ roomName ]){
        $l('already in this room') }

    else {

        $.chatRoom(roomName)

        socket.emit('j', roomName)//why cant i change this emit name to joinRoom ???
    }


}
$.chatRoom=function(title, color, id){

    title = title||'chatbox'

    color=color||'b'

    id=id||'cbo'


    var theTextInput= $.input().K('form-control'),

        theSendButton= $.button('send', function(){

            socket.emit('sendChatMessage', {

                chatRoomName: title,   username: _username,  message: theTextInput.V()

            }) }),
        thePicButton= $.button('pic', function(){ $.pop('pic select')  }),
        thePopButton= $.button('pop', function(){ socket.emit('p', theTextInput.V(), title)}),

        theMessages = $.div().id( 'cbi' ).C('u').overflow('auto'),

        usersInRoomBox= $.div()

    theWindow = $.win('chatroom: ' + title).id(id).css({'min-width':600,  'min-height':400, 'background-color': color })

    theWindow.A(

        $.row(

            $.col(8,  theMessages,   theTextInput, theSendButton,  thePopButton,  thePicButton ),

            $.col(4, $.h5('users:'), usersInRoomBox)
        )
    )

    var updateUsersDiv=function(users){

        usersInRoomBox.E()

        if(A(users)){

            _.each(users,

                function(username){

                    usersInRoomBox.A(  $.h5(username).click(  function(){ popUser(username) }  ) )

                })
        }


        else { usersInRoomBox.A( $.h5('no users'))}}

    var chatController={

        updateUsersDiv: updateUsersDiv,

        window: theWindow,

        toggle: function(){ return theWindow.toggle() },

        write:function(m){  theMessages.A( $.h5(m).col('w')  )  },

        writeBlack: function(m){  theMessages.A( $.h5(m).col('z')    )  }}

    chatRoomsObject[title] = chatController

    setInterval( function(){ socket.emit('room', title)}, 1000) //repeatedly emit 'room', which launches room user updates!

    return chatController}



$.popUser=function(username){


    $.post('/getMugByUsername', {username: username},  function(mug){
            $l('clicked '+username)
            $l(mug)


            var fullProfileButton = $.button('full', function(){

                    $l('/wap/profiles/'+ username);

                    window.location = '/wap/profiles/'+ username

                })


            $.win(

                $.div().A(

                    $.br(), $.hr(), $.h3('User: '+ username),

                    $.br(),

                    $.canvas(300).A().fit(mug),

                    theDiv = $.div(),

                    message = $.textarea().C('white','black'),

                    //$.mailButton( message, username ),

                   // $.chatButton( username, message ),

                    fullProfileButton  )
            )


            //$.status(username, theDiv)

          //  $.profile(username, theDiv)

        }

    )}



SORTY=function(){

    format()


    s1(

        $.h1('your sorts'),


        $.div().WH('auto').A(

            $.h1('new sort'),

            textInputSpan('post','/srt')

        ),

        $.h4('recent: '))


    qG('/srt',function(t){

        d1($.button(t.t,function(){sorty(t.t)}),

            $.br(2))

    },'+')

    s2(
        $.img('me'))

}