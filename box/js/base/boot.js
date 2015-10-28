//fixed width
$.container =function(){return $.div().K('container')}

//full width
$.containerFluid =function(){return $.div().K('container-fluid')}


// -rows must be placed within a .container(-fluid) for proper alignment and padding

$.glyph=$.glyphicon=function(glyph, a){

    var s = $.span(a).K("glyphicon glyphicon-" + glyph)

    return s}

// -only columns may be immediate children of rows
// -Columns create gutters (gaps between column content) via padding.
 //   That padding is offset in rows for the first and last column via negative margin on .rows
$.imgResponsive=function(s,f){
    return $.img(s,f).K('img-responsive')
}
$.imgCircle=function(s,f){
    return $.img(s,f).K('img-circle')
}
$.imgRounded=function(s,f){
    return $.img(s,f).K('img-rounded')
}
$.imgThumbnail=function(s,f){
    return $.img(s,f).K('img-thumbnail')
}


$.boot = function(){z()

    var row = $.row()

    _.each(arguments, function(arg){
        row.A(arg)
    })

   return cont = $.container().A(row).A()}



$.row= function(n){
    var theDiv= $.div().K('row')
    _.each(arguments,
        function(arg){ theDiv.A(arg) })
    return theDiv}

//pass in size, and then args(contents) as a list (or as an array)

$.col = function(){var args=G(arguments),

    theDiv= $.div().K('col-md-' + args[0]),

    iter = A(args[1])?  args[1] : args.r

    _.each(iter, function(v){theDiv.A(v)})

    return theDiv}

$.row2=function(a,b){
    return $.row(
        $.col(6, a),
        $.col(6,b)
    )
}
$.row3=function(a,b,c){
    return $.row(
        $.col(4,a),
        $.col(4,b),
        $.col(4,c)
    )}
$.row4=function(a,b,c,d){
    return $.row(
        $.col(3,a),
        $.col(3,b),
        $.col(3,c),
        $.col(3,d))}
$.row84=function(a,b){return $.row($.col(8,a),$.col(4,b))}

$.row48=function(a,b){return $.row($.col(4,a), $.col(8,b))}//
$.row39=function(a,b){return $.row($.col(3,a), $.col(9,b))}//

$.row210=function(a,b){return $.row($.col(2,a),$.col(10,b))}//
$.row111=function(a,b){return $.row($.col(1,a),$.col(11,b))}//

//row48([4],[ 8 ]) //row39([3],[ 9 ])

$.push4=function(a){return $.row48([],a)}
$.push3=function(a){return $.row39([],a)}
$.push2=function(a){return $.row210([],a)}
$.push1=function(a){return $.row111([],a)}

$.row93=function(a,b){return $.row($.col(9,a),$.col(3,b))}
$.row363=function(a,b,c){
    return $.row(
        $.col(3,a),
        $.col(6,b),
        $.col(3,c)
    )}
$.ROW=function(a,b,c,d){

    var g=G(arguments),  z=g.z


    if(z==1){return $.row($.col(12,a))}

    if(z==2){
        return g.p?$.row93(a,b)
            :g.n? $.row39(a,b)
            :$.row2(a,b)
    }


    if(z==3){return g.n?$.row363(a,b,c):$.row3(a,b,c)}

    if(z==4){return $.row4(a,b,c,d)}

}

testRows=function(){z()

    $.row(

        $.colX(2, $.img('me') ),

        $.colX(6, $.img('me')),

        $.colX(4, $.img('me'))

    ).A()

}
testRows2=function(){z()

    $.row(



        $.div().K('col-xs-12 col-sm-6').A($.img('me') ),

        $.div().K('col-xs-6 col-lg-4').A($.img('me') )

    ).A()

}
testRows3=function(){z()

    $.row(

        $.div().K('col-xs-6 col-sm-4').A( $.img('me') ),

        $.div().K('col-xs-6 col-sm-4').A( $.img('guy')).C('o'),

        $.div().K('col-xs-6 col-sm-4').A( $.img('sun') )

    ).C('b').A()

}
testRows4=function(){z()

    $.row(

        $.div().K('col-xs-6 col-sm-4').A($.span('me') ),

        $.div().K('col-xs-6 col-sm-4').A($.span('guy')).C('o'),

        $.div().K('col-xs-6 col-sm-4').A($.span('sun') )

    ).C('b').A()

}



$.xs = $.phones = function self(color, num){

    if(N(color)){return self(null,color)}

        var div = $.div()

    if(color){div.C(color)}

     div.K('col-xs-'+num)

    return div}
$.sm = $.tablets = function self(color, num){

    if(N(color)){return self(null,color)}

    var div = $.div()

    if(color){div.C(color)}

    div.K('col-sm-'+num)

    return div}
$.md = $.desktops = function self(color, num){

    if(N(color)){return self(null,color)}

    var div = $.div()

    if(color){div.C(color)}

    div.K('col-md-'+num)

    return div}
$.lg = $.largeDesktops =function self(color, num){

    if(N(color)){return self(null,color)}

    var div = $.div()

    if(color){div.C(color)}

    div.K('col-lg-'+num)

    return div}

/*

 The following table summarizes how the Bootstrap grid system works across multiple devices:

 Extra small devices
 Phones (<768px)	Small devices
 Tablets (>=768px)	Medium devices
 Desktops (>=992px)	Large devices
 Desktops (>=1200px)
 Grid behaviour	Horizontal at all times	Collapsed to start, horizontal above breakpoints	Collapsed to start, horizontal above breakpoints	Collapsed to start, horizontal above breakpoints
 Container width	None (auto)	750px	970px	1170px
 Class prefix	.col-xs-	.col-sm-	.col-md-	.col-lg-
 Number of columns	12	12	12	12
 Column width	Auto	~62px	~81px	~97px
 Gutter width	30px (15px on each side of a column)	30px (15px on each side of a column)	30px (15px on each side of a column)	30px (15px on each side of a column)
 Nestable	Yes	Yes	Yes	Yes
 Offsets	Yes	Yes	Yes	Yes
 Column ordering	Yes	Yes	Yes	Yes


                                                                                                                    ~97px




 */

exampleStackedToHoriz=function(){z()


    cont = $.container().A(

        $.h1('Hello World!'),

        $.row(

            $.sm('red', 6).ipsumP(1, 2),

            $.sm('blue', 6).ipsumP(4)
        )

    ).A()




}
exampleStackedToHorizFluid=function(){z()

    $.containerFluid().A(

        $.h1('Hello World!'),

        $.row(
            $.sm('red',6).ipsumP(2,1),
            $.sm('blue',6).ipsumP(3)
        )

    ).A()


}
example25Percent=function(){z()


     $.containerFluid().A(

        $.h1('Hello World!'),

        $.row(

             $.sm('r', 3).ipsumP(3),
             $.sm('b', 9).ipsumP(3)

        )

   ).A()

}
exampleMedium=function(){z()

    //on xs, u get one column only
    //on small devices, u get two columns ( 25% / 75% )
    //but on medium, u get a 50/50 split


    $.containerFluid().A(
        $.h1('Hello World!'),

        $.row(
            $.div('r').sm(3).md(6).ipsumP(3),
            $.div('b').sm(9).md(6).ipsumP(4)
        )


    ).A()


}
exampleLarge= function(){z()

    $.containerFluid().A(

        $.h1('Hello World!'),

        $.row(
            $.div('y').K("col-sm-3 col-md-6 col-lg-4").ipsumP(2,2),
            $.div('y').K("col-sm-9 col-md-6 col-lg-8").ipsumP(1,1,1,1)
        )

    ).A()

}
exampleThreeEqualColumns=function(){z()
 //The following example shows how to get a three equal-width columns
 // starting at tablets and scaling to large desktops. On mobile phones, the columns will automatically stack:

     cont = $.container().A()
     cont.A(

         $.row(


             $.div('red').K("col-sm-4").A('.col-sm-4').ipsumP(1),

             $.div('blue').K("col-sm-4").A('.col-sm-4').ipsumP(2,2),
             $.div('yellow').K("col-sm-4").A('.col-sm-4').ipsumP(3,3,3)

         )
     )

 }
exampleThreeUnequalColumns= function(){z()
    // The following example shows how to get a three various-width columns
    // starting at tablets and scaling to large desktops:

         cont = $.container().A()

     cont.A(
         $.row(

             $.div('red').K("col-sm-3").A('.col-sm-3').ipsumP(1),

             $.div('blue').K("col-sm-6").A('.col-sm-6').ipsumP(2,2),
                 $.div('yellow').K("col-sm-3").A('.col-sm-3').ipsumP(3,3,3)


     )

  )
  }
exampleTwoUnequalColumns= function(){z()
  cont = $.container().A()
  cont.A(

      // The following example shows how to get two various-width columns starting at tablets and scaling to large desktops:

       $.row(
           $.div('r').K('col-sm-4').A('.col-sm-4').ipsumP(10),
           $.div('y').K('col-sm-8').A('.col-sm-8').ipsumP(20)

       )


  )
  }
exampleTwoColumnsWithTwoNestedColumns= function(){z()
     //The following example shows how to get two columns starting at tablets
     // and scaling to large desktops, with another two columns (equal widths) within the larger column (at mobile phones, these columns and their nested columns will stack):

     cont = $.container().A()

     cont.A(


         $.row(

             $.div('a').K("col-sm-8").A(

                 $.span('.col-sm-8'),

                 $.row(
                      $.div('x').K("col-sm-6").A('.col-sm-6').ipsumP(5),
                      $.div('z').K("col-sm-6").A('.col-sm-6').ipsumP(5)
                 )
             ),

             $.div('b').K("col-sm-4").A('.col-sm-4').ipsumP(5)
         )




  )}
exampleMixedMobileAndDesktop= function(){z()
     //The Bootstrap grid system has four classes: xs (phones), sm (tablets),
     // md (desktops), and lg (larger desktops).
     // These classes can be combinated to create more dynamic and flexible layouts.
       //  Tip: Each class scales up, so if you wish to set the same widths
       // for xs and sm, you only need to specify xs.


     cont = $.container().A()

     cont.A(
         $.row(
              $.div('r').K("col-xs-12 col-md-8").A('col-xs-12 .col-md-8'),
             $.div('b').K("col-xs-6 col-md-4").A('col-xs-6 col-md-4')
         ),


       $.row(

       $.div('a').K("col-xs-6 col-md-4").A('.col-xs-6 .col-md-4'),
       $.div('b').K("col-xs-6 col-md-4").A('.col-xs-6 .col-md-4'),
       $.div('c').K("col-xs-6 col-md-4").A('.col-xs-6 .col-md-4')



 ),



   $.row(
       $.div('g').K("col-xs-6").A('.col-xs-6'),

     $.div('o').K("col-xs-6").A('.col-xs-6')


     )



  )
  }
exampleMixedMobileTabletAndDesktop= function(){z()
     // Note	Tip: Remember that grid columns should add up to twelve for a row. More than that, columns will stack no matter the viewport.

     cont = $.container().A()
     cont.A(
         $.row(
             $.div('r').K("col-xs-12 col-sm-6 col-lg-8").A($.span( '.col-xs-12 .col-sm-6 .col-lg-8' )),
             $.div('b').K("col-xs-6 col-lg-4").A($.span('.col-xs-6 .col-lg-4'  ))
       ),
         $.row(
             $.div('n').K("col-xs-6 col-sm-4").A($.span('.col-xs-6 .col-sm-4') ),
             $.div('g').K("col-xs-6 col-sm-4").A($.span('.col-xs-6 .col-sm-4') ),
             $.div('o').K("col-xs-6 col-sm-4").A($.span('.col-xs-6 .col-sm-4') )

)


  )}
exampleClearFloats= function(){z()
  //(with the .clearfix class) at specific breakpoints to prevent strange wrapping with uneven content:

     cont = $.container().A()
  cont.A(
      $.row(

          $.div('g').K(' col-xs-6 col-sm-3' ).A(
              $.span('Column 1'),
              $.br(),
              $.span('Resize the browser window to see the effect.')
         ),

          $.div('u').K("col-xs-6 col-sm-3").A($.span('Column 2')),
          //$.span('<!-- Add clearfix for only the required viewport -->'),
          $.div('o').K("clearfix visible-xs"),
          $.div('y').K("col-xs-6 col-sm-3").A($.span('Column 3')),
          $.div('b').K("col-xs-6 col-sm-3").A($.span('Column 4'))

        )
  )
  }
exampleOffsettingColumns= function(){z()
     //Move columns to the right using .col-md-offset-* classes. These classes increase the left margin of a column by * columns:

     cont = $.container().A()
  cont.A(


      $.row(

          $.div('r').K('col-sm-5 col-md-6').A('col-sm-5 col-md-6').ipsumP(4),

          $.div('b').K('col-sm-5 col-sm-offset-2 col-md-6 col-md-offset-0').A(
              'col-sm-5 col-sm-offset-2 col-md-6 col-md-offset-0'

          ).ipsumP(4)

  )

  )
  }
examplePushAndPull = function(){z()
     //- Change Column Ordering
     //Change the order of the grid columns with .col-md-push-* and .col-md-pull-* classes:
     cont = $.container().A()

     cont.A(

         $.row(


             $.div('r').K("col-sm-4 col-sm-push-8").ipsumP(2,2,2),
             $.div('p').K("col-sm-8 col-sm-pull-4").ipsumP(22)

     )


 )}

//

exampleJumbo = function(){  $.boot(

        $.jumbo(
            'My first Bootstrap website!',
            $.p('This page will grow as we add more and more components from Bootstrap...')),

        $.paragraphs(
            'This is another paragraph',
            'This is a paragraph',
            'This is another paragraph')

        )}

$.well = function(){
    var d = $.div().K('well')

    _.each(arguments, function(arg){
        d.A(arg)
    })

    return d
}

exampleImgResponsive=function(){$.boot(

    $.sm(3).A(

        $.well(

            $.imgResponsive('chicks')

        )
    )

)

}
exampleResponsive=function(){

    $.boot(

         $.md(2).A(

            $.imgResponsive('me')  ,
            $.imgResponsive('chicks')  ,
            $.imgResponsive('me')

        )


    ).C('r')



   }
exampleImages=function(){$.boot(


    $.imgCircle('chicks').C('y'),
    $.imgRounded('guy').C('y'),
    $.imgThumbnail('sun').C('y')



)}


//"<div class="form-group"></div>"
FormGroup=formGroup=fg=function(a){

    return _a(  $div().k('form-group'),  G(arguments))

}

$.footer = FT=function(){

    var args = G(arguments),

        theDiv = $div().k('footer')


    _.each(args,  function(arg){

        theDiv(

            S(arg)?  pg(arg): arg

        )})

    if(args.p){theDiv.cen()}
    return theDiv.id('footer')

}


$.headerDiv=function(){


    var div= $.div().K('header').K('text-center').id('header')
        .css('margin-bottom-width', 40).C('y')

    return div
}

$.jumbo = $.jumbotron = function( ){

   var div = $.div().K('jumbotron').K('text-center').id('jumbo')

    _.each(arguments,
        function(arg){

            if(S(arg)){arg = $.h1(arg)}

            div.A( arg )
    })

    return div}

$.caption = function(cap){
    return $.div().K("caption").A(
        $.h4(cap)
    )

}


// all thumbnails must be within a col
// can be a class on an anchor
// or can be on a div (for more control)

$.thumbA = $.thumbnailClick=function(img, func){

    func = func || function(){
        alert('you clicked a thumbnail')
        i=this}

    var a = $.a('',func).K('thumbnail').A(
        $.img(img))

return a}
$.thumbD = $.thumbnailDiv = function(a) {

    var div = $.div().K('thumbnail')

    _.each(arguments,

        function (arg) {

            div.A(arg
                //  S(arg)? $.img(arg): arg
            )

        })

return div}
$.colThumbA=function(clas, img, func){
    return $.div().K(clas).A(
        $.thumbA(img, func)
    )}
$.thumbnail = function(a){

    var div = $.div().K('thumbnail')

    _.each(arguments,

        function(arg){

       div.A( S(arg)? $.img(arg): arg  )

    })


    return div

}
$.thumbnailRow =  function(g){z()

    var theRow = $.row()

    _.each(G(arguments),
        function(a){
            theRow.A($.thumbnail(a))
        })

    return theRow.A()
}
$.thumbnailTimes = function(num){
    var arr=[]
    _.times(num||20,
        function(){
            arr.push('me')})
    _a(thumbnail,arr)
}


exampleThumb =function(){z()

    var wrap = function(img){

        if(S(img)){img = $.img(img)}

       return $.div().K("col-xs-4 col-sm-3 col-md-2 col-lg-1").A(

           $.a('').K('thumbnail').A(

               img,
               'hi'
           )

       )
    }

    $.boot(

            wrap('me'),
            wrap('guy' ),
            wrap('chicks'),
            wrap( 'me' ),
            wrap( 'guy') ,
            wrap( 'chicks' ),
            wrap( 'me' ),
            wrap( 'guy' ),  wrap( 'chicks' ),
            wrap( 'me' ),   wrap( 'guy' ), wrap( 'chicks' ),
            wrap( 'me' ),   wrap( 'guy' ), wrap( 'chicks' )

        )





}



exampleThumbContent =function(){z()

    var wrap = function(img){

        return $.div().K(  "col-xs-4 col-sm-3 col-md-2 col-lg-1"  ).A(

            $.a('').K('thumbnail').A( img  )

        )}

    $.container().A(

        $.row(

                $.thumbnail().K("col-sm-6 col-md-2").A(
                    $.img('me'),
                    $.caption('Thumbnail label')
                ),


                $.thumbnail().K("col-sm-6 col-md-2").A(
                    $.img('guy'),
                    $.caption('Thumbnail label')
               ),


                $.thumbnail().K("col-sm-6 col-md-2").A(
                    $.img('me'),
                    $.caption('Thumbnail label')

                )


        )

    ).A()


}



exampleThumbnails = function(){z()

    // <div class="row">
    // <div class="col-xs-6 col-md-3">
    // <a id="" href="#" class="thumbnail">
    // <img src="/me.png">
    // </a>
    // </div>
    // </div>


    return $.container().A(
        $.row(

            $.div().K("col-xs-6 col-md-3").A(

                $.a('').K("thumbnail").A(  $.img('me')  )


            ) )

    ).A()



}

exampleThumbnailsCustomContent = function(){z()
    cont = $.container().C('r')


    thumbnail = $.thumbnail().C('g').A(

        $.p('first thing in green thumbnail'),
        $.img('me'),

        $.div().K("caption").A(
            $.h3('Thumbnail label'),
            $.p('...'),
            $.p().A(
                $.button('Button').K("btn btn-primary"),
                $.button('Button').K("btn btn-default")))
    )



    cont.A(  $.row(
        $.div().K("col-sm-6 col-md-4").A(

            $.p('before thumbnail'),
            thumbnail
        )



    ))


    return cont.A()}








//pils
Pill=pil=function(o){var g=G(arguments),p=ul();p.k('n np');p.c('y')
    if(O(o)){_e(o,function(v,k){var l=A(k)?lik(k[0],'+'):lik(k);l.o('$',v);p(l)})}
    else{_e(g,function(v){if(A(v)){p(lik(v[0],'+'))} else{p(lik(v))}})};return p}

//login pils
LoginPill=logi=function(){pil({'log in':lI,'log out':lO}).pp()}

Glyph=Glyphicon=glyphicon=gl=function(){var g=G(arguments),str,
    s=_s().k('glyphicon').k('glyphicon-'+oO('gl',g[0]))
    if(O(g[1])){s.a(g[1])}
    if(S(g[1])){s(g[1])}
    if(g.n){s.pp(_s().T('-'))}
    return s}





$.modalFooter=function(){
    var theDiv= $.div().K('modal-footer')
    _.each( arguments, function(arg){theDiv.A(arg)})
    return theDiv}
$.modalBody =   function(){
    var theDiv = $.div().K('modal-body')
    _.each( arguments, function(arg){theDiv.A(arg)})
    return theDiv}
$.modalHeader =   function(){

    var theDiv = $.div().K('modal-header')

    _.each( arguments,
        function(arg){theDiv.A(arg)})

    return theDiv}
$.modalContent = function(){
    var theDiv= $.div().K('modal-content')

    _.each(
        arguments,
        function(arg){theDiv.A(arg)})

    return theDiv}
$.modalDialog=function(){
    var theDiv= $.div().K('modal-dialog')
    _.each(arguments,function(arg){theDiv.A(arg)});
    return theDiv}
$.modalFade  = function(){
    var theDiv= $.div().K('modal fade')
    _.each(arguments,function(arg){theDiv.A(arg)});
    return theDiv}
$.modal=function(a,b, contents){

    var footer= $.modalFooter(

        $.button('close').attr({  type:'submit',  'data-dismiss':'modal'  })

    )

    if(contents){ footer.A(contents) }

    return $.modalForm(

        $.modalDialog(

            $.modalContent(

                $.modalHeader(
                    $.button('ooo').K('close').attr({'data-dismiss':'modal'}),
                    $.h4(a).K('modal-title')   ),

                $.modalBody(b),

                footer

            ))
    )}

