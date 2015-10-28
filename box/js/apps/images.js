

Graphics.fromSource = crs=function(a){
    //it's the opposite of 'src' !
//it strips '/me.png' -> 'me'
//why would i need this?
    return a.split('/').pop().split('.png')[0] }


cjs.src = Graphics.toSource = src=function f(e){

    var _src=function(a){ a = $.extension(a)

        return s$(a).startsWith('/')? a : '/'+ a }


    //if(Q(e)){$l('q');e=$(e)[0]}

    if( e.image ){ e=e.image}

    if( C(e) ){ e = C(e) }

    if( e.src ){ e = e.src}

    if( e.toDataURL ){  e=tDU(e) }

   return s$(e).contains('data:')?  e

        :  S(e) ?  _src(e)

            : 0}



Graphics.isDataURL=function(d){
    if(U(d)){return false}
    return s$(d).contains('data:')
}
$.fit = fit=function(a,b,c){
    return $.canvas( c||'r', b||700, b||700).A().fit(a||'me')  }



$fileUpload = fup=function(labelText, text){

    var theFormGroup = fg(
        $label(  D(labelText) ? labelText  : 'upload file',  'upl'  ).k('ctl').f(20),
        ip('file').id('upl').nm('i'))

    if(text){

        theFormGroup(

            pg(['help-block'], text) )}

    return theFormGroup }

$.fileUpload =  function(labelText, text){

    var theFormGroup =  $.div().K("form-group").A(

        $.label(  D(labelText) ? labelText  : 'upload file',  'upl'  ).K('control-label').fontSize(20),

        $.input().type('file').id('upl').name('i')

    )


    if(text){

        theFormGroup.A(   $.p(text).K('help-block')   )}

    return theFormGroup }
//<div class="form-group">
//      <label style="font-size: 20px;" class="control-label" for="upl">
//              upload file
//      </label>
//      <input name="i" id="upl" type="f">
// </div>

sv=function( x, func ){  $.post('/img', {

        d: xx( C( x ) ).u(),

        dats: x.dats

    }, func ) }

cut=function(m){ z()

    $.format()

    // x =   xx(  $.canvas().id('can').W(100).H(100)  ).bc('w').Z(7).fit(m||'me')

    x =     $.canvas('r', 500, 500).A().fit(m||'me')

    // x.dots()
    // x.copy()

    s1.A($.button('save sprite',function(){

            x.snap()

            //fresh()

            EDIT()

        }),


        $.br(2),

        $.button('start cut',function(){
            //x.copy()
            x.dots()
        }),

        $.br(2),

        $.button('restart cut',function(){cut(m)}), $.br(2),

        $.button('file uploads',
            function(){window.location='/wap/uploads' }


        ))


    s2.A($.h2('click to start cut-out..'), x

        //   , dv('o',500,200).pp()(x)

    )
}
//old // does something :)
card=function(a,b){ //to see a users profile

    if( O(a) ){return card( a.u,  a.m)  }

    var d = $.divA('y', 300)//.cen()


    d.dblclick( function(){  $(this).remove() } )

    d.A(  $.h3(a||'anon'),  $.img (b||'me' ).WH(200)  )

    d.el().A()


    return d
}

shUcards=function(){

    z();

    var t=100

    usrs(function(u){

        _.each(u,function(u){


            $.P(


                '/getImageById',  u.m,


                function(m){


                _d().p('a').lt(t).c('r').a().drg()(


                    h2( u.u ),


                    im( m ).w( 200 ).h( 200 )

                )

                    t+=20



                })})})

}

UPLOAD=function(){

    form =  $.form().attr({
        method:'post',

        enctype: 'multipart/form-data',

        action: '/pic'

    }).A(

        $.fileUpload(''),
        $.input().K("show").type('submit').val('ok')
    )


    $.pop(form,


        {title: 'upload a new pic'}



    ).drag()

}
UPLOADS=function(){
    $.format()
    var top = 80
    s1.A(
        $.h4('You have uploaded these pics. Click to make a sprite, or hit the x to delete..')
    )

    $.get('/myPics',  function(pics){

            _.each(pics, function(pic){

            var fileName = pic._id + pic.ext


               picDiv = function(top){

                   return $.divA('blue', 100, 100).WH('auto').K('pic')
                       .XY(200, top).pad(16).drag()

               }



                $.delete=function(url, data, func){


                }


                var theButton = $.button('delete', function( element ){

                    $.ajax({type: 'DELETE',
                        data: pic,
                        url: '/pic',
                        success: function (result){
                            $(element.target).closest('div').remove()}})

                })





              var  theImg =  $.img(fileName).W(120).H(120).click(function(){

                  cut(fileName)

              })

                var thePicDiv=  picDiv(top).A(theImg,   theButton   )

                  $('body').A(thePicDiv  )

            top += 220

        })

        })

}
CUTOUTS=function(){

    $.format()

    section1.A(
        $.h4('click a pic to select it as your mug, or the x to delete it'))

    $.getJSON('/img', function(cutouts){

        var top = 80

        _.each(cutouts, function(cutout){

            var imgDiv = $.divA('b',100, 100).left(top).top(200).K('pic').drag()

            imgDiv.A(

                $.img(cutout.d).WH(100).click(function(q){


                    $l('changemug')

                    $l(cutout.d)

                    $.post('/changeMug', {

                        url: cutout.d

                    })


                    ////






                    $('.pic').each(function(index){  $(this).C('b')  })

                    $(this).parent().C('y')



                }),

                $.button('X', function(){

                    var that=this

                    $.ajax({

                        data: cutout,

                        url: '/img',

                        type: 'DELETE',

                        success: function (result){

                            $(that).parent().remove()

                        }})})

            )

            top += 220

        })})}
moveInACircle=function(){}

