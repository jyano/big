ChatRoom=function(title, color, id){

    title = title||'chatbox'

    color=color||'b'

    id=id||'cbo'


    var theTextInput=$.input(),

        theSendButton= $.button('send', function(){

            socket.emit('sendChatMessage', {

                chatRoomName: title,

                username: _username,

                message: theTextInput.V() })

        }),

        thePicButton= $.button('pic',function(){  pop('pic select')  }),
        thePopButton= $.button('pop', function(){ socket.emit('p', theTextInput.V(), title)}),
        theMessages = $.div().id('cbi').css({overflow:'auto'}).C('x'),
        usersInRoomBox= $.div()


    theWindow = $.win('chatroom: '+title).id(id).css({

        'min-width':600,  'min-height':400, 'background-color': color

    })



    theWindow.A(

        $.row(

            $.col(8,

                theMessages,
                theTextInput,
                theSendButton,
                thePopButton,
                thePicButton ),

            $.col(4, $.h5('users:'), usersInRoomBox)))


    var updateUsersDiv=function(u){
        usersInRoomBox.E()
        if(A(u)){ _.each(u,


            function(username){

                usersInRoomBox(

                    $.h5(username).$(

                        function(){

                            alert('clicked '+username)

                            $.post('/mug', {u: username},

                                function(userMug){

                                    var theH1 = $.h1(),

                                        theDiv = $.div(),

                                        fullProfileButton= $.button('full', function(){
                                            $l('/wap/profiles/'+ username);
                                            window.location='/wap/profiles/'+ username
                                        })


                                    $.win(

                                        $.div.A()(

                                            $.br(), $.hr(), $h3.A('User: '+ username),

                                            $.br(),

                                            xc().w(300).h(300).fit( userMug ),

                                            theH1,

                                            theDiv,


                                            ms = $textarea().c( 'w', 'z' ),

                                            $mailButton( ms, username ),

                                            $chatButton( username, ms ),

                                            fullProfileButton  ) )




                                    showStatus(username, theDiv)

                                    makeProfile(username, theDiv) }

                            )}  )

                )})}
        else { usersInRoomBox($h5('no users'))}}

    var chatController={

        u: updateUsersDiv,
        updateUsersDiv: updateUsersDiv,


        w: theWindow,
        window: theWindow,


        t: function(){return theWindow.toggle()},
        toggle: function(){return theWindow.toggle()},

        b:function(m){  theMessages($h5(m).s({c:'w'}))  },
        write:function(m){  theMessages($h5(m).s({c:'w'}))  },


        s:function(m){  theMessages($h5(m).s({c:'z'}))  },
        writeBlack:function(m){  theMessages($h5(m).s({c:'z'}))  }}



    //old way to store rooms...
    //$w['chat_' +  title]= chatController


    //add room to client rooms list
    chatRoomsObject[title] = chatController


    //repeatedly emit 'room', which launches room user updates!
    setInterval( function(){ socket.emit('room', title)}, 1000)

    return chatController
}
ChatRoom2 =chat=function() {//uses var usr!
    $canvas = _c()



    var uni = $canvas.c('b')

    x = xx(uni).w(1200).h(1000)

    row(
        col(12, $br(40)
        )

    ).pp()

    row(

        col(1,

            dv('x', 200, 800)(
                $ul().id('users')
            )),

        col(11, uni)

    ).pp()


    var usersDiv = qq($('#users'))

    usersDiv( $li( $h3('users!'))  )

    usersDiv( $li( $h3('users!'))  )

    usersDiv(  $li( 'user1')  )


}


_pop=function(){

    var modalContent = ModalContent() // <div class="modal-content"></div>


    _.each(arguments,

        function(arg){

            modalContent( S(arg)? $div()(arg) : arg )  })


    return ModalForm(
        ModalDialog(
            modalContent
        ))

}

popX =function(message, ops){

    if( S(ops) ){ return pop(ops, { t: message } )    }

    ops = O(ops)? ops : {}

    var modalBody,

        message = message || 'pop pop',

        modalBody = ModalBody(  $h2(message) ),

        theModal =   _pop(   modalBody  )

    var titleColor= ops.tc|| 'z',
        headerColor =ops.hc||'z',
        title=ops.t


    //hide? default:false
    if( ! ops.h ){ theModal.m() }


    if(title){

        //header
        modalBody.q.prepend(
            $hr().c( headerColor  ).s({height: 2}).q)

        //title
        modalBody.q.prepend(
            $h1(title).s('c', titleColor).q)}


    //button
    if( ops.b ){ modalBody.a(  $button(ops.b)  )}

    //dragg
    if( ops.d ){  theModal.drg() }
    if( ops.drag ){  theModal.drg() }

    //opacity
    if( ops.a ){ theModal.s( {opacity: ops.a} ) }
    if(ops.opacity){ theModal.s({ opacity : ops.opacity }) }

    //text color of the MESSAGE
    if(ops.c){

        //flash like crazy
        if( ops.c == '*' ){ setInterval( function(){ modalBody.c() }, 100) }

        //color
        else { theModal.s({  c: ops.c   }) } }

    //color of background of modal itself
    if(ops.C){ modalBody.s({ C: ops.C })    }

    //this color takes over the whole screen!
    //this is the background color of the hiding body
    if(ops.bc) {  theModal.s({  C: ops.bc   })}

    return theModal

}




MOODAL=function(){z()

    var header= $.$modalHeader('title')

    var body=$.modalBody().A(  $.h3('modal body')  )

    var footer= $.modalFooter().A(
        $.button('close').K("btn").dismiss('modal'),
        $.button('save').K("btn").C('r'))

    m= $.div().K("modal fade").id("basicModal").A(
        $.modalDialog().A(
            $.modalContent().A(   header,body,footer )   )
    ).A()

}

$.$modalHeader=function(title){
    return $.modalHeader().A(
        $.button('x').K("close").dismiss("modal"),
        $.h4(title).K("modal-title").id("myModalLabel")
    )
}




PrivateChatRoom  = function(roomName){


    //bug.. if they CLOSE the window...this needs to TRIGGER something
    //in this case (removal from the chatRoomsObject)..
    //but more generally, i need to allow a sophisticated options obj to $win

    if(chatRoomsObject[ roomName ]){ $l('already in this room') }

    else {

        ChatRoom(roomName)
        socket.emit('j', roomName)//why cant i change this emit name to joinRoom ???
    }



}


$._popX=function(){

    var modalContent = $.modalContent()

    _.each(arguments,

        function(arg){  modalContent.A(

            S( arg )? $.div().text(arg) : arg

        )}
    )

    return $.modalFade().A(  $.modalDialog().A(  modalContent   ) )

}
