

Y.getUsers = getUsers =  function(func){

    $.get('/users', func)

}//usrs =




//Y.getBuds = getBuds = buds=function(func){$.get('/buds', func) }


Y.removeUser = removeUser = rmU=function(a,b){

    if(S(a)){rmU({u:a},b)}
    $.post('/rmU',a,b)

}




//qGetLoadFunc=function(a,b){return function(){qJ(a,  function(d){  qi(b)(d) })}} //no idea who is using this
//make a function appends result of jGET-url-a to EL-id=b
//its like load?  it says to id-get
//something(b), and put some server data(a) in it
//lgdIntoUname=uplog=   qGetLoadFunc('/lgd','uname') // qi('uname').jLoad('/lgd')

//lgd=function(f){qJ('/lgd',f||pop)}


lgrX=function(){

    var log=function(c){
        return sp('?').id('log')
            .c(c||'g')
            .M(10).P(10)}

    dva(3).id('lgr').c('b').pp()(

        sp('log: '),

        log()

    ).o({

            $:
                function(d){  qi('log').jLoad('/loggedIn') },

            $$:logOut

        }).$()

}//depr?
lgrBarX=function(){
    di('lgr').pp().c('b').o({
        $: function(d){  qi('log').jLoad('/loggedIn') },
        $$:logOut
    })(sp('log: '),log())}//depr?


//Us =function(f){  qJ('/gU',  f||function(u){_e(u,function(u){card(u)})})}  //'with users' [show their cards]

SignUpFormX = function(){ var username, password,  submit, form

    username= $div().k('form-group')($label('uname: ','uname'),  TextInput().k('form-control').at({type:'text'})().id('uname')).f(20).nm('u')

    password= $div().k('form-group')( $label('pword: ','pword'), $password().id('pword') ).f(20).nm('p')

    submit= $input().V('sign up').type('submit').f(16)

    form = $form().c('o').P(4)( username, password, submit ).o('s', function( q, e ){  e.e.preventDefault() //pD(e.e)

        $.post('/user', {

                u: username.ch(1).V(),
                p: password.ch(1).V()
            },

            function(username){

                if(username === 'guest'){ qi('mod').m();$.pop('try again.. idiot') }

                else { renderHomePage();$.pop( 'welcome ' + username + '!' )   }  //WAPNAV() //qi('username').jLoad( '/loggedIn' )//uplog()

            })

    })

    $.pop( form ).id('mod').drg()

    //return formObject
}

// $password=function(){return $input().type('password').class('form-control')}//dep

// lc = function(a){if(D(a)){  $w.location=a  }; return $w.location}//dep


// pof=function(a,b,c){return function(){qP(a,b,c)}} //an api shortcut

// qPd=function(u,o){qP(u,o,function(da){d=da})  }// to test qP
//Y.loader = ldr = function(a){return function(){window.location='/wap/'+a }} //never called?
// fresh() ? problem?  // function(){guest()})//uplog()//qi('uname').jLoad('/lgd')

