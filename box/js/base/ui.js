$.gameController=function(){

    return $.div().A(

        $.button('left').id('left'),
        $.button('right').id('right'),
        $.button('jump').id('jump')

    )
}

$.dragFrame=function( ob){

    var outerDiv=  $.div('r').pad(10).A().drag()

    innerDiv= $.div('y')
        .on('mousedown',  function(e){  e.stopPropagation()  })

    outerDiv.A(  innerDiv )

    return innerDiv.A( ob )

}

$.imagesDiv=function(stage) {

    $.getJSON('/img',  function(img){

        theDiv = $.div().A().drag().C('y')

        _.each(img, function(img){

            theDiv.A(

                $.canvas(100, 100).fit(img.d).click(function () {

                    stage.bm(img.d, function (bm) {  bm.sXY(.4).drag() } )

                })
            )


        })})










}

chatRoomsObject={}


 //makes auto top-spacing (for navbar not to block)
 $.containerDiv =  function(){

     var args = G(arguments),
        theDiv = $.div().K('container')

     if(args.N){ theDiv.A( $.br(4) ).A() }

     _.each(arguments, function(v){

         theDiv.A(v)
     })

     return theDiv
 }

 $.format=function(){

     section1 =s1 = $.span()

     section2 =s2 = $.span()

    $.containerDiv(

        $.row(

            $.xs(3).A(section1),

            $.xs(9).A(section2)


        )
    )

}

testFormat=function(){
    z()

    $.format()

    s1.A($.imgResponsive('chicks') )

    s2.A($.img('me'), $.img('guy'))

}



$.userCard3  =function(){z()

    return $.row(

        $.col(2).K('text-center').A(

            $.img('me').WH(70),
            $.h5('hi')
        ),


        $.col(3).A(

            $.h4('pics'),
            $.h5('place to upload'))


    ).A()

}


$.messageDiv = function(messageText){//Message =
    return $.div('pink').K('msg').col('black').mar(10).pad(10).bor(0)
        .fontSize(20).text(messageText||'messageText goes here')}


//pass in container(div?).. can empty it
//pass in each arg as a 'msg', spacing them out with br's
//could be feed i was looking for, except if it gets
// an obj it passes in its 'n' pop???


addX=function rc( messagesArray, a ){

    var args=G(arguments)

    if(args.n){ messagesArray.E() }

    if( A(a) ){

        _.each(a,
            function(v){
                rc( O(v) ?v.n :v) })}

    else { _.each(

        args,

        function(v){messagesArray($br(),
            msg(v))
        }

    )}
}

//fetches JSON, and takes the 'n.pop' from list and passes those
//in as messages?
// on dblclick of .msg,// post its text to newMessage and run gMsgs?

getMessages = gMsgs=function rc(u,M){
    qJ(u,
        function(d){
            add(M,d)

        all('msg', function(m){

            m.$$(pof('/nMsg',{n:m.T()},rc))

        })

        })}

// get value from an input el OR two input els
// if one, creates {c:?}
// if two, creates {t:?,c:?}
dataValueX=  dVX=function self(title, content){

    if( U(content) ){return self(null, title)}

    var data = {}

    data.c = data.content = data.message = content.V()

    if(title){
        data.t = data.title = data.topic = title.V()
    }

    return data
}

// ob is for adding more pops to post-ob,
// or just pass function early

textInputSpan  =ip0= function(   buttonText,  url,  ob,  func ){

    url=url||'/'

    if(F(ob)){func=ob;  ob={}}

    func=func||home


    var theSpan = $.span(),
        theTextInput= $.input(),

        theButton= $.button(buttonText,

            function(){

               $.post(
                   url,
                    _.defaults( dataValue(theTextInput),  ob),
                    func  )
            })


    //return a span with the tx and a $button
    //when u click the $button, get the value and post it to a url

    return theSpan.A(theTextInput, theButton)


}

//this makes a span with a textarea and a button
//pass button text, url(/), and function
//when button clicked:
//      the  value of the text area
//      will be posted to the url
//      (passing the function)

$.textAreaDataObj = function(buttonText,url,func){

    url=url||'/';

    func=func||home

    var span= $.span(),
        textArea= $.ta(),

       button= $.button(buttonText, function(){
            $.post(url, {content:textArea.val()}, func)
       })

    return span.A(theTextArea, theButton)

}






$.textTextarea = textAndTextAreaSpanX =ip2=function(buttonText,url,func){

    url=url||'/'; func=func||home

    var span= $.span(),
        textInput=$.input(),
        textarea= $.ta(),
        button= $.button(buttonText,function(){$.post( url, {
                title:textInput.val(),
                content:textarea.val()
            },

            func)


        })

    return span.A(textInput, textarea, button)}

 inputBox1=function(ob){
    ob=ob||{}

    var func= ob.func,
        url         =   ob.url || '/',
        boxTitle    =  ob.boxTitle,
        inputType   =  ob.inputType,
        defaults    =   ob.defaults||{},
        buttonText  =   ob.buttonText || 'submit',
        inputType   =     ob.inputType||'text'

    var div = $.div(40).WH('auto')

    if(boxTitle){
        div.A($.h1(boxTitle))}

    if(inputType == 'text') {

        var input=$.input()

        div.A(input)

        div.A(

            $.button(buttonText, function(){
                $.post(url, _.defaults({title: input.val()},defaults), func)
            }))}

    if(ob.inputType == 'textArea') {

        var textarea = $.ta()

        theDiv.A(

            theTextAreaInput,
            $.button(buttonText, function () {
                $.post(url,
                    _.defaults(
                        {content: textarea.val()},

                        defaults), func)})
        )}

    if(ob.inputType == 'textAndTextArea') {

        var input = $.input(),
            textarea = $.ta()

        div.A(input, textarea)

        div.A(

            $.button(buttonText, function () {

                $.post(url,
                    _.defaults(
                        {title: input.val(), content: textarea.val()},

                        defaults),
                    func)}))}


    //z(); theDiv.a()

    return div}






joinSelf = function(){

    socket.emit( 'joinRoom',  _username )

} //unnecessary
sendMessage =iMsg=function( toWho, message ){


    $l('toWho: '+ toWho)

    $l('message: '+ message)

    socket.emit(  'sendMessage',  {  m: message,  t:toWho,  f:_username  }  )

}



$.win = $.window=function(  a, c,  id ){

    var size,
        theWindow,
        text,
        moreButton,
        lessButton,
        closeButton,
        w


    moreButton = $.buttonRight('>', function(){
        w.WH(700)
        lessButton.show()
        moreButton.hide()
        })


    lessButton = $.buttonRight('<', function(){
        w.WH('auto')
        moreButton.show()
        lessButton.hide()
    }).hide()

    closeButton = $.buttonLeft('X',function(){ w.remove() })


    w = $.divA('blue', size||400).WH('auto')
        .opacity(.9).overflow('auto').pad(10).borderWidth(4).borderStyle('dashed')


    w.A(
                moreButton,
                lessButton.hide(),
                closeButton
            ).drag().A()


    if(S(a)){ text= a }

    if(N(a)){ size= a }

    if(O(a)){ w.A( a ) }


    if(text){

        w.A(

            $.p(text).fontSize(24).K('text-center').C('X').marHor(10).padHor(30), //horizontel
            $.hr().col(c||'z').fontSize(10)

        )}


    if(id){ theWindow.id(id) }

    return theWindow

}




$.pop=function(message, ops){

    if( S(ops) ){ return $.pop(ops, { title: message } )    }

    ops = O(ops)? ops : {}


        message = message || 'pop pop'


        modalBody = $.modalBody().A( $.h2( message ) )

        theModal =  $.modalFade().A(  $.modalDialog().A(

            $.modalContent().A( modalBody)

        ) )


    if(!ops.hide){ theModal.modal() }
    if(ops.title){


        modalBody.prepend(
            $.h1(ops.title).col(ops.titleColor||'z'),

            $.hr().C( ops.headerColor||'z'  ).css('height', 2)



        )
    }
    if(ops.button ){ modalBody.A( $.button( ops.button )  )}
    if(ops.drag ){  theModal.drag() }
    if(ops.opacity ){ theModal.opacity( ops.opacity ) }


    //text color of the MESSAGE
    if(ops.col){  theModal.col( ops.col)}

    //color of background of modal itself
    if(ops.C){
        //flash like crazy
        if( ops.C == '*' ){ setInterval( function(){ modalBody.C( $r() ) }, 100) }

        else { modalBody.C( ops.C ) }
    }



    //this color takes over the whole screen!
    //this is the background color of the hiding body
    if(ops.backgroundColor) {  theModal.C( ops.backbroundColor)  }
    return theModal}

$.dangMessage=function(msg){


    form = $.span().delButton()

        form.A(   $.h2(msg).K('alert alert-danger')  )

    return form.prependTo('body')
}


$.floatingInput=function(text, func){

    var args=G(arguments),

        theForm=$.form().K('text-center').C('o').fontSize(20).drag().minW(200 )

    theForm.A(

        $.button(text).type('submit'),
        $.input()

    )

    if( F(func) ){ theForm.submit(func) }


    return theForm}
$.editDiv=function(words){

    ta =input = $.textarea().mar(4)

    span = $.span().C('black')

    spanFunc = function () { span.text( input.val() ) }

    div = $.divA().C('brown', 'yellow').pad(8).A()

    div.zIndex(0)



    canMove=true

    xButton= $.button('', function(){

        div.remove()

    }).WH(4).C('red')


     changeLocation=true
    inputMove=true

     mouse = 'up'

    appendSensorDiv= $.div('yellow',16, 12).textAlign('center').mar('0 auto').click(function(){
        $(this).parent().free()
    })

    div.mousedown(function(){
        inputMove = false

        mouse='div'
    })

    div.mouseup(function(){mouse='up'})

    div.mousedown(function(){

        $.editDiv.TOP++

        $(this).zIndex( $.editDiv.TOP  )
    })


    ta.mousedown(function(e){
        $.editDiv.TOP++
        $(this).parent().zIndex(  $.editDiv.TOP  )
        location={top: div.Y(), left: div.X()}

        inputMove = true
        mouse='input'
        e.stopPropagation()})
    ta.mousemove(function(e){
        if(inputMove){
            e.stopPropagation()
            div.XY(location.left, location.top)
        }
    })

    if(U(words)) {

        return div.A( xButton, $.br(), span.hide(), input,

            appendSensorDiv

        ).dblclick(function(e){
                e.stopPropagation()

                span.text( input.val() )
                xButton.toggle();
                input.toggle()
                span.toggle()

            }).drag()

    }

    else {

        input.val(words)

        div.A( xButton, $.br(), span, input.hide() )

        span.text( input.val() )


        div.dblclick(function(e){e.stopPropagation()

            span.text( input.val() )

            xButton.toggle();
            input.toggle(); span.toggle()

        })


        return div.A().drag() }

}

$.editDiv.TOP=0

$.editDiv2=function(a){


    var div=$.editDiv(a),

        range= $.range()


    range.on('mousedown',function(e){
        e.stopPropagation()

    })

    range.on('input', function(){



        div.find( $('span')).fontSize( $(this).val()  )
        div.find( $('textarea')).fontSize( $(this).val()  )

    })


    div.prepend( range  )

    return div
}


testEditDiv=function(){z()

    $.editDiv()
    $.editDiv()
    $.editDiv()
    $.editDiv()
    //$.editDiv2().A()


}



$.img100=function(){
    return $.img('me')
        .XY(300,200).C('y').opacity(.9).WH(100)}

