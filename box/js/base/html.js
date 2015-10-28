

$.div = function(col, width, height){

    var div = $('<div>')
    if(U(col)){return div}
    if(S(col)){

        div.C(col)

        if( N ( width ) ){ div.W( width ) }

        if( N ( height ) ){ div.H( height ) }

        return div }
    if(N(col)){

        div.W(col)

        if(N(width)){div.H(width)}

        return div

    }



}
$.divA = function func(col, width, height, x,y ){

    var div = $.div().P('absolute')

    if( U(col)){ return div.C('brown') }

    if( S(col)) {  div.C(col)

        if( N(width) ){ div.W( width ) }

        if( N(height) ){ div.H( height ) }


        if( N(x) ){ div.X( x ) }

        if( N(y) ){ div.Y( y ) }

        return div }

    if(N(col)){ return  func('orange', col, width, height, x) }}
$.divD = function func(col, width, height, x,y ){

    width = N(width)? width: 200;
    height = N(height)? height: width;

    var div = $.div(200, 200).drag()

    if( U(col)){ return div.C('brown') }

    if( S(col)) {  div.C(col)

        if( N(width) ){ div.W( width ) }

        if( N(height) ){ div.H( height ) }


        if( N(x) ){ div.X( x ) }

        if( N(y) ){ div.Y( y ) }

        return div }

    if(N(col)){ return func( 'orange', col, width, height, x) }}
$.button= $.bt= function(buttonText, func){
    if(F(buttonText)){return $.button('submit', buttonText)}
    var b=$('<button>')
    b.text(buttonText)
    b.click(func)
    return b}
$.buttonL = function(buttonText, func){
    if(F(buttonText)){return $.button('submit', buttonText)}
    var b=$('<button>')
    b.text(buttonText)
    b.click(func)
    return b.K('btn-lg')}
$.buttonM = function(text, func){
    return $.button(text, func).C('blue').K("btn btn-mini" )}
$.hr=function f(color,height,width){

    if( N(color) ){  return f('z', color, height)  }

    var hr = $('<hr>').H(height||2).C(color||'z')

    if(width){ hr.W(width) }

    return hr
}
$.p=function(){

    pg = $('<p>')

    _.each(arguments,
        function(arg){ pg.A(arg) })

    return pg}
$.paragraphs=function(){

    var span = $.span()

    _.each(arguments, function(arg){
        span.A( $.p(arg) )
    })
    return span}
$.submit= $.submitButton = function(buttonText, func){
    return $.button(buttonText, func).type('submit')
}


$.buttonLarge = function(t,f,C,c){

    var g=G(arguments),

        t=g[0],f=g[1],C=g[2],c=g[3],

        t=t||'ok',

        k=  'btn-lg' ,

        C=C||'b',

        c=c||'y'


    b = qq('b').ty('b').k('btn').k('btn-lg').c(C, c)

    b(t)

    if(f){ b.o( f ) }

    if( g.n ){ b.dd() }//dropdown

    return b

}
$.submitButton=function(){

    var args=G(arguments),

        button = $button.apply(0, args)

    return button.type('submit')

}
//floating div of buttons
$.buttons=function(a,b){
    var g=G(arguments),d=dva(2)


    if(g.p){
        return bts(['start',a],['stop',b]).auto()
    }

    _.each(g,function(v){v=A(v)?v:[v]

        d(

            $button( v[0], v[1] ).k( g.p?('fc'):'' ).M(4)

        )

    })

    return d}
$.buttonRight=function(text, func){

    var b = $.button(text, func).float('right')//.display('block')

    return b}
$.buttonLeft=function(text, func){

    var b = $.button(text, func).float('left')//.display('block')

    return b}

testButtonRight=function(){z()

    d= $.div('b', 500, 500).drag()

    d.A(
        b=$.buttonRight('yes')
    )
}

$.submit2 = sm=function(a){
    var g=G(arguments)

    if(g.p){

        return $button().type('submit').k('btn btn-mini button-default').T( ok(a) )
    }

    return ip('submit').k('show').v( ok(a) )

}
$.form = function(color, action){


    var g=G(arguments),

        color = g[0],

        action =g[1],

        form= $('<form>').K('form')


    if(g.N){form.attr({ method: 'post' })}

    if(D(color)){form.C(color)}

    if(action){form.attr({ action: action})}

    return form

}
$.formGet=function(color, action){

    var g=G(arguments), color =g[0],  action =g[1],

        form = $.form().K('form').attr('method', 'get')

    if(color){form.C(color)}

    if(action){form.attr({ action: action})  }

    return form}
$.formInline=function(a,b){

    var form =  $.form().C('blue').K('form-inline form-group')
    var args=G(arguments)
    _.each(args, function(arg){form.A(arg) })
    if(args.p){  form.A( $.submit('ok') ) }


    return  form}
$.formRight=function(a,b){

    var form =  $.form().C('blue').K('form navbar-form navbar-right')
    var args=G(arguments)
    _.each(args, function(arg){form.A(arg) })
    if(args.p){  form.A( $.submit('ok') ) }


    return  form}
$.formFalse=function(a,b){

    var form = $.form().C('blue').K('form well').attr({ method: false,  action: false })
    var args=G(arguments)
    _.each(args, function(arg){form.A(arg) })
    if(args.p){  form.A( $.submit('ok') ) }


    return  form}

$.textarea = $.ta=  function(rows,cols,Cl,cl){

    var g=G(arguments),
        ta =  $('<textarea>')

    Cl=Cl||'pink'
    cl=cl||'black'

    if(g.N){
        ta.K('form-control')}

    if(N(rows)){
        ta.attr({rows: rows})}
    if(N(cols)){
        ta.attr({cols: cols})}

    return ta.C(Cl, cl)
}
$.liA= $.lIA =function(a, f){


    var anchor = $('<a>').id(a).attr('href', '#')

    if(S(a)) {anchor.html(a)} else {anchor.A(a)}

    if(F(f)){  anchor.click(f)  } else {  anchor.href( f|| '#' )}

    return $('<li>').A(anchor)
}
$.h1=function(){
    var h=$('<h1>')
    h.A.apply(h,G(arguments))
    return h}
$.h2=function(){
    var h=$( '<h2>' )
    h.A.apply(h,G(arguments))
    return h}
$.h3=function(){
    var h=$( '<h3>' )
    h.A.apply(h,G(arguments))
    return h}
$.h4=function(){
    var h=$( '<h4>' )
    h.A.apply(h,G(arguments))
    return h}
$.h5=function(){
    var h=$( '<h5>' )
    h.A.apply(h,G(arguments))
    return h}
$.h6=function(){
    var h=$( '<h6>' )
    h.A.apply(h,G(arguments))
    return h}

$.input = function(typ, val, Color, color){
    var args=G(arguments),
        input = $('<input>').type(typ||'text').val(val).C('C', Color||'red', color||'blue')
    if(args.N){  input.K('form-control') }
    return input}
$.textInput = function(widthOrPlaceHolderValue, id){

    var g=G(arguments),  input = $.input().type(type||'text')
    //first arg either sets th width or the placeholder value
    if( N(g[0])){ input.W(g[0]) }  else{ input.placeholder(g[0]) }

    //second arg sets the id
    theTextInput.id( g[1] )

    if( g.N ){ input.K( 'form-control' ) }

    return input }



$.range =  function(){return $.input().type('range')}

$.radiobox = $.rb =  function(name, val, label){
    var args=G(arguments),
        checked,
        name=args[0] || 'name',
        val=args[1],
        label=args[2]

    if(A(val)){
        val= val[0];
        checked=true
    }

    var I = name + '-' + val,
        V ='&nbsp'+ val +'&nbsp',
        rbox = $.input().type('radio').name(name).val(val).id(I)

    if(checked){
        rbox.attr({checked:'checked'})}

    return l?
        $.span().A(rbox, $.label(label,I))
        :args.p?
        $.span().A($.br(),rbox, $.label(V,I))
        :args.N?
        $.span().A(rbox, $.label( V,I))
        :rbox}
$.cbWithLb = cbl=function(val,id){
    var args=G(arguments)

    return $.span().A(

        $.checkbox(args[0],args[1],args[2],args[3])

        ,$.lb(val, id)
    )}
$.checkbox = $.cb =function(name,val,lb){
    var args=G(arguments),
        checked,
        name=args[0],val=args[1],lb=args[2]

    if(A(val)){val=val[0];checked=true}

    var I=name+'-'+ val,
        V='&nbsp'+val+'&nbsp',
        cbox = $.input().type('checkbox').name(name).val(val).id(I)

    if(checked){cbox.attr({checked:'checked'})}

    return lb? $.span().A(cbox , $.lb(l,I))
        :args.p? $.span().A( $.br(), cbox , $.lb(V,I))
        :args.N? $.span().A(cbox , $.lb(V,I) )
        :cbox }
$.checkbox2 = function self(name,val,id, makeDivWithLabel){
    var g=G(arguments)

    name =g[0]||''
    val =g[1]||''
    id =g[2]||''

    cbox= $.input().type('checkbox')
    span = $.span()

    if(A(g[0])){
        _.each(g, function(ar){
            span.A(
                self(ar[0], ar[1], ar[2], ar[3]),
                $.lb(ar[1], ar[2]))})

        return span.A($.br())

    }


    cbox.name(name).val(val).id(id)

    if(g.p){
        cbox.prop('checked', true)}

    if(makeDivWithLabel!==false){
        cbox = $.div().K('checkbox').A($.lb(name).prepend( cbox ))}

    return cbox




}

$.radioboxGroup =  function(n,v){
    var g=G(arguments),n=g[0],v=g[1],s= $.span()
    if(g.p){
        _.each(v,function(v){
            s(rb(n,v,'+'))

        })}
    else {
        _.each(v,function(v){
                s(rb(n,v))}
        )}

    return s.id(n)
}

$.checkboxGroup = CheckBoxGroup=cbg=function(n,v){var g=G(arguments),n=g[0],v=g[1],s=sp()
    if(g.p){_e(v,function(v){s(cb(n,v,'+'))})}
    else{_e(v,function(v){s(cb(n,v))})}
    return s.id(n)
}



$.password=function(){return $('<input type="password">')}

$.br=function(a){

    if (U(a) ){ return $('<br>') }

    var span = $.span()

    _.times(a,
        function(){ span.A( $('<br>') )  })

    return span

}
$.span=function(){theSpan=$( '<span>' ); _.each(arguments,   function(val){ theSpan.A( val )    }); return theSpan}
$.span2=function(c1, c2){return $('<span>').col(c1).C(c2)}
$.SEL = SEL=function(n,i){
    var g=G(arguments),

        s=_y().nm(n).id(i)

    if(g.N){s.k('form-control')}
    if(g.p){s.at({mutiple:true})}

    return s}
$.option = OP=function(){
    var g=G(arguments),
        o=_o()(g[0])
    o.V(g[0])
    if(g.p){ o.at({selected:true})}

    return o}
$.sel = sel=function(){var g=G(arguments),

    s=_s(),sl  //if(!A(g.f)){g.unshift( ['select'] )}

    if(A(g.f)){
        sl=_a(SEL,g.f)
        _e(g.r,function(v){
            if(S(v)){v=OP(v)};
            sl(v)})  }

    else{
        sl=_a(SEL)
        _e(g,function(v){
            if(S(v)){v=OP(v)};
            sl(v)})  }



    sl.V=function(v){

        if(U(v)){return sl.q.val()}
        sl.q.val(v)
        return sl}


    sl.o=function(f){f=f||alert

        sl.q.change(function(){ f(sl.V()) })
        return sl }

    return sl}
$.inputAndButton = txb=function(btText,form){
    return $.div().A(
        $.input(),
        $.bt(btText,function(){
            form.A(input.V())})).A()



}
$.label = $.lb= function lb(labelText, labelFor, name, placeholder){

    var g=G(arguments), theLabel = $('<label>'), theInput;

    if( !g[0] ){ return theLabel }

    theLabel.for(labelFor).K('control-label').html(labelText)

    if( !g[2] ){ return theLabel }

    theInput = $.input().id(labelFor).name(name).placeholder(placeholder||'...')

    if(g.N){ theInput.K('form-control')}

    return $.span().A(  theLabel,   theInput )

}
$.a= function(a,f){

    var g=G(arguments),   a=g[0],  f=g[1],l

    a=a||''

    l = $('<a>').A(a)//.id(a)

    if(F(f)){  l.click(f)  } else {  l.href( f|| '#' )   }

    // if(g.n){ l.K('dropdown-toggle').attr({ 'data-target' : 'dropdown' }) }


    //if(g.p){ l = $.li( l ) }

    //if(g.m){ l = $.li( l ).K('active') }

    return l}
$.a2 =function(a, func){

    var g=G(arguments), a=g[0], f=g[1],

        theEl=qq('a').id(a)(a)

    if(F(func)){theEl.o(func)} else {theEl.hr(func||'#')}

    if(g.n){theEl.dd()}

    //  "<div data-toggle="dropdown" class="dropdown-toggle"></div>"

    if(g.p){theEl=li(theEl)}
    if(g.m){theEl=li(theEl).k('active')}

    return theEl}
$.dropDown=function(a,f){   var l = $('<a>').id(a).A(a)
    if(F(f)){  l.click(f)  } else {  l.href( f|| '#' )}
    return   l.K('dropdown-toggle').attr({ 'data-target' : 'dropdown' })}
$.active=function(a,f){   var l = $('<a>').id(a).A(a)
    if(F(f)){  l.click(f)  } else {  l.href( f|| '#' )}
    return   l.K('active') }
$.b=function(a){
    var b= $('<b>')
    if(a){b= b.A(b)}
    return b
}
$.li=function(){var args=G(arguments),
    li = $('<li>')


    _.each(args,function(arg){li.A(arg)})

    if(args.p){li.K('active')}
    if(args.n){li.k('dropdown')}
    return li}
testForm=function(){z()

    return $.form().A(

        $.sel(
            ['single'],
            'Single',
            'Single2'),

        $.sel(
            ['multiple', '+'],
            'Multiple', 'Multiple2','Multiple3' ),

        $.cb(
            ['check','check1', 'ch1'],
            ['check', 'check2', 'ch2', '+']),

        $.rb(
            ['radio','radio1', 'r1', '+'],
            ['radio', 'radio2', 'r2'],
            '+'),

        $.submit()

    ).A()

}




$.ul =  function(pam){

    if(U(pam)){return $('<ul>')}

    var tLi=function(a){
        var iLi=function(a){return _h('HTMLLIElement', E(a))}
        return iLi(a)?a:li(a)}

    var g=G(arguments),
        e=qq('ul')
    _e(g,function(v){if(A(v)){e.k(v[0])}
    else{e(tLi(v))}})
    if(g.n){e.k('ddm')}//dropdown menu
    if(g.p){e.k('n nbn')}//navbar nav
    return e}

$.row=function(n){

    var div= $.div().addClass('row')

    _.each( G(arguments), function(arg){ div.A(arg) } )

    return div
}

$.formGroupDiv=function(){return $.div().K('form-group').fontSize(20)}
$.submitInput=function(val){

    var el = $('<input>').attr('type', 'submit').fontSize( 16 )

    if(val){  el.val(val)  }

    return el}
$.textInput=function(name){

    var el = $('<input>').attr('type', 'text')

    if(name){  el.attr({name: name, id:name})  }

    return el}
$.password =$.passwordInput=function(name){

    var el = $('<input>').attr('type', 'password')

    if(name){  el.attr('name', name)  }

    return el}


//pass in size, and then args(contents) as a list (or as an array)
$.col = function(){  var args = G(arguments),

    div= $.div().addClass( 'm' + args[0] ),

    iter = A( args[1])?  args[1] : args.r

    _.each( iter, function(v){ div.A(v) } )

    return div }




$.canvas= $.can = function(col, width, height, x,y){

    var el

    if( U ( col ) ){ return superCanvas( $( '<canvas>' ) ).C( 'blue' )   }

    if( N(col) ){ return  $.canvas( 'x', col, width,x,y   )}

    if( S(col) ){

        el = $( '<canvas>' )

        el.css( 'backgroundColor', oO( 'c' , col ) )

        if( N( width ) ){
            el.attr('width', width )
            el.attr('height', height || width)
        }

        if(N(x)){
            el.abs(x,y)
        }

        return superCanvas(el)}

    return el}





$c = function(col, width, height){

    if(!S(col)){  return $c('yellow', col, width   )}
    width = width || 500
    return $.canvas(col, width, height).A().drag().opacity(.8)

}

$.ipsum=function(len){   len = len || 1

    var str = ''
    _.times(len, function(){
        str = str +
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. '
    })

    return str}
$.ipsumP=function(len){return $.p().A($.ipsum(len) )}



$.img2 = function(img, func){

    i = $.img().src(img)

    func(i[0])

    //s$(e).contains('data:')
    return i}
$.img=function(source, func){

    var img = $( new Image() )

    //gets rid of auto-scaling quirk
    img.load(function(img){
        var img = $(img.target)
        // img.W( img.W() )
        // img.H( img.H() )
    })

    if(func){
        img.load(function(event){
            func($(event.target), event)})}

    if(source){
        img.src(src(source))
    }

    return img
}


$.hr2 =  function(c,h,w){

    var e = qq('hr')

    if( N(c) ){  return hr('z', c, h)  }

    e.h(h||2)

    e.c(c||'z')

    if(w){ e.w(w) };return e
}


$.span2 = function(){

    var args=G(arguments),
        theSpan=$('<span>'), str=''

    _.each(args,

        function(val){

            if(S(val)){ str+= val }

            else { theSpan.A( val ) }})

    if(str){ theSpan.text(str) }

    return theSpan}

$.thead=function(){return _a( qq($('<thead>')),arguments)}
$.tbody=function(){return _a( qq($('<tbody>')),arguments)}


$.strong=function(){


    var g=G(arguments),
        s=qq($('<strong>'))


    _e(g,function(g){
        s(g)
    })


return s}
$.section=function(a,b){return qq($('<section>')).id(a).s(b)}
$.aOld =function(textAndId, hrefOrFunc){

     var args=G(arguments), a=args[0], hrefOrFunc=args[1],

         theEl = qq('a').id(textAndId)(textAndId)

     if (F(hrefOrFunc)) {theEl.o(hrefOrFunc)}

     else {theEl.hr(hrefOrFunc||'#')}

     return (args.n)? theEl.k("dropdown-toggle")


         //  "<div data-toggle="dropdown" class="dropdown-toggle"></div>"


         :(args.m)? li(theEl).k('active') :(args.p)? li(theEl)

         :theEl}


$.headerHuhhhh=function(name,val){
    return $.input().type('header')
        .name(name).val(val)

}

$.header=function(){


    var header = $('<header>')


return header}



$.footer=function(){return $('<footer>')}



$.ol=function(o,b){var g=G(arguments),
    ol=$('<ol>')
    _.each(g, function(v){ol.A(v)})
    return ol}
$.td=function(){
    return $('<td>')
}
$.tr=function(){return $('<tr>')}
$.bold= function(a,k){

    var g=G(arguments),
        h=g.p?'&nbsp;'+a:a;
    return $('<bold>').H(h).k(k)

}
$.iframe=function(){

    z()
    d=dva()
    ifr=qq($('<iframe>'))
    ifr.w(1000).h(1000).c('b')
    ifr.q[0].src='http://www.playboy.com'
    d(ifr).P(30)

}
$.th=function(a){

     var h = qq($('<th>'))

     if(a){h(a)}

     return h}
$.inlineDiv=function(a,b,c){
    var theDiv = dv(a, b, c)
    theDiv.display('inline')
    return theDiv
}
$.inlineBlockDiv=function(a,b,c){

    var theDiv = dv(a, b, c)

    theDiv.display('inline-block')

    return theDiv

}
$.dva=function f(r,w,h,l,t){

//color, width, height, left, top
    var g=G(arguments),r=g[0],w=g[1],h=g[2],l=g[3],t=g[4],d
    if(!S(r)){
        return g.n?

            f($r(),r,w,h,l,'-')

            : g.p?f($r(),r,w,h,l,'+')
            : f($r(),r,w,h,l)}


    d=_d().p('a').c(r).a()

    if(g.p){
        if(w){d.l(w)}
        if(h){d.t(h)}
        d.P(16)
        return d.auto()}


    w=w||1
    h=h||w
    d.w(w*100)
    d.h(h*100)

    l=l||0
    t=t||l
    d.l(l*100)
    d.t(t*100)


    if(g.N){d.drg()}
    return d}

