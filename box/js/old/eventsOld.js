key=function(q){var g=G(arguments)

    q.P('a')
    if(g.P){
        kD('left', function(){q.toL()})
        kD('right', function(){q.toR()})}
    if(g.N){
        kD('up', function(){q.toU()})
        kD('down',   function(){q.toD()} )}
}

$.isRight = iR=function(e){return W(e, 39)}
$.isUp= iU =function(e){return W(e, 38)}
$.isDown = iD=function(e){return W(e, 40)}
$.isLeft = iL=function(e){return W(e, 37)}


// aEL=function(a,b,c,d){return a.addEventListener(b,c,d)}

_DX=function(o,f){
    if(U(o)){return $(document)}
    return $(document).on(oE(o), _v(f))
}
sEX=function(e){

    var f=function(a){
        var g=G(arguments)
        return g.p? f.w >=a
            :g.n? f.w <=a
            :f.w == a
    }

    f.e= e

    f.w= e.which

    f.k= String.fromCharCode(f.w)

    f.A= e.altKey
    f.b= e.bubbles
    f.C= e.ctrlKey
    f.c= e.cancelable
    f.d= e.data

    f.sp= function(){ e.stopPropagation()}
    f.pd= e.preventDefault
    f.dp= e.isDefaultPrevented

    f.oe= e.originalEvent

    f.g= e.target
    f.gr= e.relatedTarget
    f.gc= e.currentTarget
    f.gd= e.delegateTarget

    f.M= e.metaKey
    f.p= e.eventPhase
    f.S= e.shiftKey
    f.t= e.type
    f.T= e.timeStamp

    f.px= e.pageX
    f.py= e.pageY
    f.ox= e.offsetX
    f.oy= e.offsetY
    f.cx= e.clientX
    f.cy= e.clientY
    f.sx= e.screenX
    f.sy= e.screenY

    return f}
eeX=function ee(element, mouseEvent, func){



    //some partial application
    if(U(mouseEvent)){ return _.partial(ee, element)}

    // can imply '$' (click)
    if( F(mouseEvent) || (S(mouseEvent)&&!(Oo('e', mouseEvent)))){  return ee( element, '$', mouseEvent )}


    //can pass an object of events
    if(O(mouseEvent)){
        _.each(mouseEvent, function(v, k){

            ee(element, k, v)})

        return element}


    _.each(mouseEvent.split(' '), function(mouseEvent){

        element.q.on( oO('e',mouseEvent),

            function(eventObject){

                var qqTarget = qq(this)

                eventObject = sE(eventObject)

                eventObject.x = eventObject.px - qqTarget.x()

                eventObject.y = eventObject.py - qqTarget.y()

                func(qqTarget, eventObject)

            })
    })

    return element}
$hX=function(a,b){
    var h=qq($('html'))
    if(D(a)){h.o(a,b)}
    return h
}




//MM=function(a){ return qq($('html')).o('mousemove', a)}
//MU=function(a){return qq($('html')).o('mouseup', a)}
//$.MU = $.mouseUp=function(func){$('html').mouseup(func)}
//$.MM = $.mouseMove=function(func){$('html').mousemove(func)}
//$.MD = $.mouseDown=function(func){$('html').mousedown(func)}
// MD=function(a){return qq($('html')).o('mousedown', a)}
