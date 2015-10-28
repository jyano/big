$.iconBar=function(){return $.span().K("icon-bar")}
$.caret=function(){return $.span().K("caret")}
$.fn.toggle=function(a){return this.attr("data-toggle", a)}
$.fn.target=function(a){return this.attr("data-target", a)}

Wappy = {}


// Wappy.nav makes a $.navbarCollapse and $.navbarHeader.  then it makes a $.navbar.
// it puts the navbarHeader and navbarCollapse in the navbar
//then it appends the navbar wrapped in a container

Wappy.Nav = Wappy.nav = WappyNav=function(){z()

    var navbarCollapse =

        $.navbarCollapse().A(
            $.nav(
                $.dropdown('create',[ 'upload','uploads','cutouts',  'edit', 'avatar','paint', 'filters','showcase',
                    'tween','tweenart', 'easing', 'pack','sprite','transform' ,
                    'can' ,'rub','fan' ]),
                $.dropdown('youplay',[ 'bod', 'invaders','thrust', 'starstruck', 'massvelocitytest','contactevents',  'ninjatilemap','launcher',
                    'groupvsgroup','shooty','hit','space','maggots']),
                $.dropdown('play',[ 'iso', 'connect','matrix', 'ship',  'circle','boxes','solar','canon','fullcan',
            'tangle','corners','borders','gquery','grid', 'bowl',  'gamer', 'melon','meltut'  ]),
                $.dropdown('share',[ 'universe',
            'users', 'status' , 'messages','posts','chatrooms',
            'ranky',  'profile', 'profiles','dirt','knocks', 'book','site','sorty','elements' ,'api' ,'object'   ]),
                $.dropdown('box2d',[     'box2d', 'wheel','heads', 'cups','pinball',
            'revdemo','shooter','thruster','jumper','warper' ])),
            $.navRight(
                $.liA('logged: '+ _username),
                $.liA('logout', Y.logOut)))



    $.container().A().A(
        $.navbar().A(
            $.navbarHeader('wappy', '/wap'), navbarCollapse ))

}


$.searchNavRight =  function(){

    return $.form().K("navbar-form navbar-right").A(
            $.div().K('form-group').A(

                $('<input>').K('form-control').attr('placeholder','search')

            ),    $.submitButton().A( $.glyphicon('search')))}

$.dropdownToggle = function(a){return $.a( a ).K("dropdown-toggle").toggle("dropdown").A(  $.caret()  )}

$.dropdownMenu=function(){

    var menu= $.ul().K("dropdown-menu")

    _.each(arguments,
        function(arg){
            menu.A(  liAWap(arg) )})

    return menu


    function liAWap(appName){
        return $.liA(appName,   function(){window.location='/wap/' + appName   }   )   }


}
$.dropdown=function(a,b){
    var toggle=$.dropdownToggle(a)
    var menu= $.dropdownMenu.apply(this, b)
    return  $.li().K("dropdown").A(toggle, menu)}

//this a ul element
$.nav=function(){
    var nav = $.ul().K("nav navbar-nav")
    _.each(arguments, function(arg){ nav.A( arg ) })
    return nav}

//this a ul
$.navRight=function(){
    var nav = $.ul().K("nav navbar-nav navbar-right")
    _.each(arguments, function(arg){ nav.A( arg ) })
    return nav}

// this a div
$.navbar=function(){return $.div().K("navbar navbar-default").A($.div().K("container-fluid"))}

$.navbarHeader=function(brand, link){

    var header = $.div().K("navbar-header")

    header.A(

        $.button().K("navbar-toggle collapsed").toggle('collapse').target(".navbar-collapse").A(

            $.span("Toggle navigation").K("sr-only"),

            $.iconBar(),$.iconBar(),$.iconBar()
        ),

        $.a(brand).K("navbar-brand").click(function(){

           if(link){
               window.location = link
           }

        })

    )


return header}
$.navbarCollapse=function(){return  $.div().K("navbar-collapse collapse")}






