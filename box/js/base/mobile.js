
//prevent iphone/ipad default scrolling

$(function(){

    $('body').on('touchmove', function(e){ e.preventDefault() })


})

MOBILECENTER=function(){
    z()
    $('body').C('u')
    d = $.div('o', 400, 200).A().drag().pad( 20 ).A(
        dd = $.div( 'u',  200 , 100 ).xCenter(),
        $.div( 'g',  100 , 80).xCenter( )
    ).P('r')}


MOBILETIPS=function(){

    z()

    $('body').C('u')

    $.div('b', 10, 10).drag()
    $.div('b', 10, 10).drag()
    $.div('b', 10, 10).drag()


    d = $.div('o', 400, 200).A().drag().pad( 20 )

    d.A(  $.h3( 'mobile tips').C( 'x' , 'w' )  )

    d.A(  $.h4( 'tip1:  First and foremost, screen sizes can vary greatly between different device categories as can screen resolutions and aspect ratios ').C( 'x', 't' )  )

    d.A(  $.h4( 'tip2:  If you want your HTML5 games to work well on mobile devices, you should make sure they either support multiple resolutions or don’t exceed the WVGA frame size of 800x480.').C( 'x', 't' )  )

    d.A(  $.h4( 'tip3: ').C( 'x' , 't' )  )

    d1 = $.div('p', 400, 200).A().drag().pad( 20 )

    d1.A(  $.h3( 'mobile devices  zoom and pan -  counterproductive for games. term them off with: viewport meta tag' ).C( 'x' , 'w' )  )

    d1.A(  $.h4(   "ex: cause your game’s viewport to occupy all of the available horizontal screen real estate.").C( 'x', 't' )  )

    d1.A(  $.h4(  "ex: cause your game’s viewport to occupy all of the available horizontal screen real estate.").C( 'x', 't' )  )

    d1.A(  $.h4( '<meta name="Viewport"content="width=device-width; user-scaleable=no; initial-scale=1.0" />').C( 'x' , 't' )  )

    d1.A(  $.h4(    '[ user-scaleable = no ] ->  disables pinch-zooming'  ).C( 'x' , 't' )  )

    d2 = $.div('g', 400, 200).A().drag().pad( 20 )

    d2.A(  $.h3( 'mobile tips').C( 'x' , 'w' )  )

    d2.A(  $.h4( 'tip1: ').C( 'x', 't' )  )

    d2.A(  $.h4( 'tip2: ').C( 'x', 't' )  )

    d2.A(  $.h4( 'tip3: ').C( 'x' , 't' )  )


}



H1=function(){
    z()

    rule = "h1 {  font-size: 40px;  margin-bottom: 20px;  margin-left: 20px; }"

    $.addStyle(rule)
    // HTML5.CSSRule(rule)
    $.h1('this is a big font').A()

}

H12=function(){
    z()


    rule = "h1 {  font-size: 22px; margin: bottom 10px;  @media (min-width:@screen-tablet) {font-size: 40px;   margin-bottom: 20px;   margin-left: 20px; } }"

    addStyle(rule)

    $h1('this is a small font').A()

}
BREAK=function(){z()


    addStyle( "h1 { @media (min-width:400px) {font-size: 10px;} }" )
    addStyle( "h1 { @media (max-width:400px) {font-size: 20px;} }" )
    // addStyle( "h1 { @media (min-width:1281px) {font-size: 40px;} }" )

    $.h1('afsdfdsasdf').A()
}
BREAK2=function(){


    // @media screen and (min-width: 600px) { .sixhundredminwidthclass {  width: 30%;  float: right;  } }

    //  @media screen and (max-width: 600px) {.sixhundredmaxwidth {  clear: both; font-size: 1.3em; } }

}
BREAK3=function(){z()
//works

    $.addStyle(

        "@media all and (min-width: 960px) { body {font-size: 80px;}  }",
        "@media all and (max-width: 959px) and (min-width: 600px) {body{font-size: 40px;}}",
        "@media all and (max-width: 599px) and (min-width: 320px) {body{font-size: 20px;}}"
    )

    $.addStyle(

        "@media all and (min-width: 960px) { body {color:blue;}  }",
        "@media all and (max-width: 959px) and (min-width: 600px) {body{color:red;}}",
        "@media all and (max-width: 599px) and (min-width: 320px) {body{color:yellow;}}"
    )


    $.span('fasd').A()

    $.h1('fasd').A() //doesnt respond
}





touchDrg=function(element){

    var q= $b( qq(element).q ).css({ position: 'absolute' }).on('touchstart',

        function(e){ $l('touchstart')

            var offset = $(this).offset(),
                deltaX = e.originalEvent.touches[0].pageX- offset.left,
                deltaY = e.originalEvent.touches[0].pageY - offset.top


            $l(deltaX + ' : ' + deltaY)

            $('html').on( 'touchmove' , function( e ){ $l('touchmove')

                q.css({ left: e.originalEvent.touches[0].pageX - deltaX , top: e.originalEvent.touches[0].pageY - deltaY }) })
                .on( 'touchend' , function(){ $l('touchstop'); $(this).off() })

        })

    return qq(element)

}
TOUCHSTART=function(){

    z()

    div = $.div('red', 100,200).A()

    touchDrg( div )
}
EASELTOUCH=function(){z()

    stage = cjs.stage(500).tick().A()

    //this lets it work on apple !!
    createjs.Touch.enable( stage  )

    stage.bm('me', SL)
    stage.bm('me', SL)
    stage.bm('me', SL)
    stage.bm('me', SL)
    stage.bm('me', SL)

    $.div('red',10000,10).A()

}




MOBILEHEADERS=function(){



}
