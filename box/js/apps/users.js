PROFILE=function(){

    $.boot(

        $.h1('you got a profile?'),

        $.div().id('content'),

       f = $.form().C('r').WH(400).A(
            $.div().A(
                $.label('about me'),
                $.textarea().id('aboutMe')),
            $.div().A(
                $.label('i enjoy'),
                $.input().id('iEnjoy')),
            $.div().A(
                $.label('i seek'),
                $.input().id('iSeek')),

           $.submit('save profile'),




           $.button('undo', function(){
        if(p){

            $('#aboutMe').val(p.aboutMe )
            $('#iEnjoy').val(p.iEnjoy )
            $('#iSeek').val(p.iSeek )

        }

    }),



           $.button('clearr', function(){
               $('input').val('')
               $('#iEnjoy').val('')
               $('#iSeek').val('' )
           })

       ))

    $.post('/getMyProfile', function(profile){
            p = profile

            if(p){

                $('#aboutMe').val(p.aboutMe )
                $('#iEnjoy').val(p.iEnjoy )
                $('#iSeek').val(p.iSeek )

            }

        })

    $('form').submit(function(e){e.preventDefault()

        var data = {
            aboutMe: $('#aboutMe').val(),
            iEnjoy: $('#iEnjoy').val(),
            iSeek: $('#iSeek').val()
        }

        $.post('/myprofile', data, function(){

            $.post('/getMyProfile',
                function(profile){
                    p = profile})

                    $l('form data submited..')

        })

    })



}
USERS = function(){

    b= $.boot()

    i = 0

    b.h1('users')
    b.A(
        $.div('y').id('content').A('users will go here via ajax in a moment...').A($.br(2)
        ))


    $(function(){


        $.get('/users', function(users){
            $('#content').E()
            _.each(users, function(user){

                $l(i++)
                $l(user.username)

                    $('#content').A(

                        $.div().K("col-xs-6 col-sm-3 col-md-2 col-lg-2").A(

                            $.a('', function(){


                                window.location = '/wap/user/' + user.username



                            }).K('thumbnail').A(

                                $.img(user.mug || defaultMug),
                                $.h4(user.username),
                                $.h5('status: '+user.status)
                            )

                        )

                    )

                })




        })




    })

}

USER =function(a){


    //problem: click on a user.. creates a NEW USER?

    username =  _pam || a

    if(U(username)){
        $l('username undefined.  default to -> a')
        username = 'a'
    }



    $.format()

    $.get('/user/' + username, function(user){

        u = user



    s1.A(

            $.h1(user.username),
            $.img(user.mug).WH(100),
            $.h4(user.status),

        statusSpan = $.span(),
        image = $.img(),


            messageTextarea= $.textarea().C('w','z'),

            $chatButton( _pam,  messageTextarea)


    )

})





    tab1= $.tab('profile',function(){

        TABS.E();

        $.profile(_pam, TABS)

    })


    tab2= $.tab('pics',

        function(){TABS.E()

            TABS.A('hahaha')

            $.get('/images/' + _pam, function(images){

                _.each(images, function(image){  TABS.A(

                $.img(image.d).WH(100)

            ) })

       })

    })



    tab3= $.tab('blog',function(){

        TABS.E()

        qG('/pstu', {u:u},  function(i){
            blp(i, TABS, '+') },'+')
    })


    tab4= $.tab('buds',function(){ TABS.E() })

    tab5= $.tab('groups',function(){ TABS.E() })

    tab6= $.tab('email', function(){

        //TABS.E( messageTextarea=$textarea().c('w','z'),btMail(messageTextarea,u)  )


        from = _pam

        var messageTextarea = $.textarea()

        _$username = window['from'] || 'b'

        TABS.E()(

            $.h1('convo with '+u),
            $.h1('Messages'),
            $.br()

        )


        qGE( '/gMsgW', { u: _$username },


            function( message ){

                var c = $.canvas('X', 100)

                $.post('/mug', {u: m.fr}, function(mug){ c.fit(mug) })

                TABS.A(

                    $.row($.col(2,c),

                        $.col(10,

                            $.h6('from: ' + message.fr),

                            $.h4(

                                dt( message.dt ).dt()

                            ).K('pull-right'),

                            $.h5(m.m))),
                    $.hr()

                )})


        TABS.A(

            messageTextarea,

            $.button('new message', function(){

                $.post( '/sMsg' ,

                    {m: messageTextarea.V(),
                        to: from})

            }),


            $.br(2)
        )









    })



    s2.A(

        theTabs= $.tabs(tab1,tab2,tab3,tab4,tab5,tab6))

    theTabs.load()


}






$.profile = function(username, theDiv){  //=makeProfile = prof
    // if(profile.aboutMe){div.A(answer('aboutMe', profile.aboutMe)) } if(profile.iEnjoy){div.A(answer('iEnjoy', profile.iEnjoy)) } if(profile.iSeek){div.A(answer('iSeek', profile.iSeek) )}
    answer = function(question, answer){
        return $.div().A(
            $.h3(question),
            $.h4(answer))}
    username = username || 'a'

    $.get('/profile/' + username,  function(data){

        d = data

        data = {

            aboutMe: d.aboutMe,
            iEnjoy: d.iEnjoy,
            iSeek: d.iSeek

        }

        if(O(data)){

            theDiv = theDiv|| $.divA('b',300,300).A().drag()

            theDiv.A(
                $.h4('about me'),
                $.h5(data.aboutMe),

                $.h4('i enjoy'),
                $.h5(data.iEnjoy),

                $.h4('i seek'),
                $.h5(data.iSeek)
            )

        }})


}







showStatus =stat=function(user, theDiv){

    withStatus(user,

        function(status){
            theDiv($.h3('STATUS: '+ status))
        })

}



STATUS=function(){



    $.format()


    s1.A(

        $.h1('status'),

        $.input().id('statusInput'),

        $.button('update', function(){
            status = $('#statusInput').val()

            $.post('/status', {text: status}, function(){

                $l('status updated')
            })
        })


    )












}