cjs=createjs

cjs.ticker = tt=function(a,b,c){

    var g=G(arguments),
        t=true,
        f=false,
        a=g[0],
        b=g[1],
        c=g[2]

    if(F(a)){

        return aEL(T$,'tick',
            g.N? a
                :function(e){

                if(!e.paused){ a(e) }
            })

    }



    if(O(a)){
        return aEL(T$,'tick',a)}

    if(a=='?'){return !T$.getPaused()}
    if(a=='p'){T$.setPaused(f);return tt('?')}

    if(a=='s'){T$.setPaused(t);
        return tt('?')}

    if(a=='g'){return tt(

        tt('?')? 's': 'p'

    )}


    if(a=='@'){
        return T$.init()}

    if(a=='!'){
        return T$.reset()}

    if(a=='e'){return T$.getEventTime(g.p?t:f)}

    if(a=='t'){return T$.getTime(g.p?t:f)}

    if(a=='#'){return T$.getTicks(g.n?t:f)}

    if(a=='md'){return t$.maxDelta}

    if(a=='M'){return T$.timingMode}

    if(a=='i'){
        if(N(b)){T$.setInterval(g.m?b*1000:b)
            return tt('i')}
        if(U(b)){return T$.getInterval()}}

    if(a=='f'){
        if(N(b)){T$.setFPS(b);return tt}
        if(U(b)){return T$.getFPS()}}

    if(a=='r'){if(b>10){
        tt('f',b)} else {tt('i',b,'*')}}


    if(a=='m'){
        return N(b)?T$.getMeasuredFPS(b)
            :T$.getMeasuredFPS()}

    if(a=='tk'){return Ed(T$)}

}
cjs.stop=function(){

    cjs.Ticker.removeAllEventListeners()

}
tickX=function(e){
    j.Y(e.delta/1000*100,'-' )}
timeStamp2 = function(s, j, pxPerSec){
    var fn=function(s,e){

        if(!N(j.ts)){j.ts=0;j.lts=e.ts}

        else{j.ts= e.ts-j.lts;j.lts=e.ts

            j.y((j.ts/1000) * pxPerSec,'-')  }}
    return s.t(fn)}
cjs.t=cjs.tick =function(func){func();
    cjs.Ticker.on('tick', func)}

cjs.tick2 = function(func){
    cjs.Ticker.addEventListener('tick', func)
    return cjs.Ticker
}
cjs.stopListening=function(){
    cjs.Ticker.removeAllEventListeners()}



cjs.DOMElement=function(){return cjs.DOMElement}



//EVENT DISPATCHER
p=cjs.EventDispatcher.prototype
p.init=function(){
    this.initialize.apply(this, arguments)
    return this}



cjs.shad = cjs.shadow = function(color, x,y, blur){
    if(color=='-'){return new cjs.Shadow(null,0,0,0)}
    color=S(color)?color:'a'
    blur= N(blur)?blur:10
    x=N(x)?x:0
    y=N(y)?y:0
    var shad =new cjs.Shadow( oO('c', color), x,y,blur)
return shad}


testGrow=function(){z()

    s = cjs.stage(500,500).A()
    s.bm('me', function(bm){
            b=bm
            bm.grow().drag()})

}
CJSPLUGIN=function(){}
$.dragStage=function(x,y){
    dragFrame=function(div){

        var outerDiv=  $.div('r').drag().pad(20).A()

        div = div|| $.div('y', 50, 50).mar(20)

        div.on('mousedown',  function(e){  e.stopPropagation()  })

        outerDiv.A(  div )

        return outerDiv
    }
    c = $.canvas('g', 400)
    s = new cjs.Stage( c[0]).tick()

    dragFrame( c ).A()

    return s}
FANCYEDIT=function(x,y){


    z()

    canvas = $.canvas('g', 400)
    stage = new cjs.Stage( canvas[0]).tick()
    frame = $.dragFrame( theSpan = $.span() )

    theSpan.A(

        $.button('X', function(){ frame.remove() }),
        $.button('pics',  function(){
            $.imagesDiv(stage)
        }),

        $.button('transform'),
        $.button('text'),

        $.button('paint', function(){

            _paintColor='#0FF'

            var size=10,oX=0,oY= 0,shape

            var paintStage = $.dragStage()

            // stage.a(  EaselText('finger paint', 'b', 40, 100, 10))

            paintStage.bm(

                stage.du(), //?

                function(m){


                    m.XY(40).sXY(.4)


                    stagePainter(paintStage)


                })



        }),
        $.button('cut'),

        $.button('save')   )

    theSpan.A($.br(), canvas )

    theSpan.A($.div().A(

        $.button('clear', function(){ stage.removeAllChildren() }) ,

        $.button('flat', function(){

            stage.removeAllChildren()

            stage.bm( stage.toDataURL(), function(bm){  bm.drag()   })

        }),

        $.button('clone', function(){



            var newSpan= $span()

            var newStage= dragStage( newSpan )



            newStage.bm( stage.du(), function(bm){
                SL(bm)

            })

        }),

        $.button('recur',function(){

            stage.bm( stage.du(), function(bm){

                bm.sxy(.4)
                SL(bm)

            })
        }),

        $.button('copy', function(){

            _copy=stage.du()



        }),

        $.button('paste',function(){stage.bm( _copy, function(bm){   bm.drag()  })  }),

        $.button('replace',function(){

            stage.rm()
            stage.bm( _copy, function(bm){ bm.drag() })

        })

    ))

    theSpan.dblclick(  function(){ $('button').toggle() }   )


    theSpan.A()


}
$.colorPicker= $.ColorPicker = function(){z()

    colorPicker =  $(' <input id="color" name="color" type="color">').appendTo($('body'))

    colorPicker.change(function(){
        $l(colorPicker.val())
    })

}

cjs.bulletHit = function(bullet, inWhat){

    var x=bullet.centerX(),
        y=bullet.centerY()

    var res= Math.pointInCircle(x, y, {x:inWhat.x, y:inWhat.y, radius:inWhat.H()/2})

    if(res == true){ $l('hit!') }
    return res
}
cjs.bindSlide = SL=function(b,b2){

    var g=G(arguments),

        b=g[0],  b2= g[1]||b

    return b.on('mousedown',

        function(e){
            var bx=b2.x- e.rawX, by=b2.y- e.rawY

            b.on('pressmove', function(e){

                if(g.P){b2.x=bx+e.rawX}
                if(g.N){b2.y=by+e.rawY}
            })}

    )}
cjs.bindReverseSlide = LS=function(b,b2){var g=G(arguments),
    b= g[0] ,

    b2= g[1] ,
    d=oE('d'),
    pm=oE('pm'),
    b2=b2||b

    return b.on(d, function(e){
        var bx=b2.x+ e.rawX, by=b2.y+ e.rawY

        b.on(pm, function(e){

            if(g.P){b2.x=bx- e.rawX}
            if(g.N){b2.y=by- e.rawY}

        })})}





cjs.bindRotate = RT=function(b, b2){


    //b = what the control is
    //b2 what it should control (default = itself!)
    //if(g.p){  //b.rgc( '+' )   }

    var g=G(arguments),  b =   g[0]  ,  b2 =  g[1]   || b

    return b.on(  'mousedown',

        function(e){

            var X= e.rawX,  Y= e.rawY,  r = b2.rotation

            b.on('pressmove',   function(e){


                b2.rotation =    r - (   (e.rawY - Y) / 500   ) -  (   e.rawX - X  )


            })})

}








cjs.bindRotate2 = RTT=function(b, b2){


    //b = what the control is
    //b2 what it should control (default = itself!)


    var g=G(arguments),  b =   g[0]  ,  b2 =   g[1]   || b



    if(g.p){  // b.rgc( '+' )
    }

    return b.on(  'mousedown',

        function(e){

            var X= e.rawX,  Y= e.rawY,  r = b2.rotation

            b.on('pressmove',   function(e){


                b2.rotation =    r + (   (e.rawY - Y) / 500   ) +  (   e.rawX - X  )


            })})

}
cjs.bindScale = SC=function(b,b2){
    var g=G(arguments),b= g[0] ,b2= g[1] ,
        d=oE('d'),pm=oE('pm'),b2=b2|| b,
        cp=function(n){return n<.2?.2:n>2?2:n}

    return b.on(d,

        function(e){var X= e.rawX,Y= e.rawY,
            sx=b2.scaleX,
            sy=b2.scaleY

            b.on(pm,

                function(e){if(g.n){
                    b2.sXY( cp(sx+(
                        (e.rawX-X)/200)),
                        cp(sy-((e.rawX-X)/200))
                    )

                }

                else if(g.p){
                    cXY(b2,sx+((e.rawX-X)/50),sy-((e.rawY-Y)/50))
                    cXY(b2,sy-((e.rawY-Y)/50)),sx+((e.rawX-X)/50)}

                else{ b2.sXY(sx-((e.rawX-X)/50),sy-((e.rawY-Y)/50))}})}

    )}
cjs.bindSkew = SK=function(b){var g=G(arguments),b= g[0] ,b2= g[1] ,d=oE('d'),pm=oE('pm'),b2=b2||b

    return b.on(d,
        function(e){
            var X= e.rawX,Y= e.rawY
            b.on(pm,function(e){


               b2.kXY(
                       (e.rawY-Y)*.5,  (e.rawX-X)*.5
               )

            })
        })}


cjs.bindTransform = TR=function TR(b,b2,m){

    var g=G(arguments),
        b= g[0],
        b2= g[1],

        b2=b2||b,  m=g[2]||'SL'

    if(m=='SL'){
        cjs.bindSlide(b,b2);
        m='SC'}

    else if(m=='SC'){
        cjs.bindScale(b,b2);
        m='RT'}

    else if(m=='RT'){
        cjs.bindRotate(b,b2);
        m='SL'}

    return b.on('pressup', function(e){

        b.removeAllEventListeners();

        TR(b, b2, m)

    })}
cjs.reggy = reggy=function(o,s){

    s = s||o.parent

    s.bm('me',  function(b){

        b.W(40).H(40)

        I(function(){   b.XY(  o.x + o.regX, o.y + o.regY )  },  100)

    }  )


}
cjs.bindSlideAndRotate = KK=function(b,b2){

    var g=G(arguments), b=g[0],
        b2= g[1]||b
    cjs.bindSlide(b);
    cjs.bindRotate(b,b2)
    if(g.p){

        b.rgc('+')
    }

    if(g.N){
        //    reggy(b,b2)
    }
}
cjs.bindRotateThenSkew =RK=function(b,b2,m){
    var g=G(arguments),b= g[0] ,b2= g[1] ,
        d=oE('d'),
        pm=oE('pm'),
        b2=b2|| b,
        m=g[2]||'RT'


    //if(g.p){var s=St('y',1000)
    //    _t(b||5,function(i){s.a().bm(
    //        function(bm){bm.xy(i*50);TR(bm)})});return s}

    if(m=='RT'){RT(b,b2);m='SK'}

    else if(m=='SK'){
        SK(b,b2);m='RT'}

    return b.on(oE('pu'),
        function(e){Do(b).O();
            RK(b,b2,m)})
}

testImgRegCenter=function(){
    mockStage()
    s.bm('me', function(bm){b1=bm
        bm.spin().drag()})

    s.bm('me', function(bm){b2=bm
        bm.sXY(0.5,0.3).spin().drag()})

    s.A(c = cjs.circle(4).XY(200) )

}


//important for ipad
//move this onto stage itself
touchEnable = function(s){  cjs.Touch.enable(s); return s }
cjs.HSL=function(a,b,c){
    if(U(a)){return HSL(Math.rand()*360,100,50)}
    return cjs.Graphics.getHSL(a,b,c)
}


//LOADQUEUE
cjs.loadQueue= cjs.lq=  function(mf, func){

   var q= new cjs.LoadQueue(true)

    if(A(mf)){     q.loadManifest(  cjs.mf.apply(null, mf)  ) }

    if(F(func)){

        q.complete(    function(){ func(function(img){return q.getResult(img)  })  }  )

    }


    return q
}


q=cjs.LoadQueue.prototype

q.fileload=function(func){
    this.addEventListener("fileload", func)
    return this}

q.complete=function(func){this.addEventListener("complete", func)
    return this}

q.manifest=function(manifest){
    this.loadManifest(  manifest  )
    return this}


q.mf=function(){
    this.loadManifest(  cjs.mf.apply(null, arguments)  )
return this

}


q.bm=function(img){

      img =  this.getResult(img)


     return cjs.bitmap(img)
}






cjs.handleFileLoad=function(e){
    if (e.item.type=="image"){
        images[e.item.id]=e.result}
}

cjs.mf = cjs.manifest =  function(a){
    var g=G(arguments),
        mf=[]

    _.each(g, function(v){

        mf.push({

            src: cjs.src(v),
            id: v

        })
    })

    return mf}


cjs.makeManifest =cjs.makeMan =  function(a){
    return  cjs.manifest.apply(null, _.map(a.images, function(i){
            return Graphics.fromSource(i)
        })
    )
}


Q = function(imgs, func){

    var q = cjs.lq()
    mf=[]
    _.each(imgs, function(v){

        mf.push({

            src: cjs.src(v),
            id: v

        })
    })
    q.manifest(mf)
    q.complete(function(){  func(q) })

}




MANIFEST=function(){s = cjs.S()


    Q(['me', 'guy'], function(q){



        s.A( me= q.bm('me') )

        s.A( guy = q.bm('guy') )


        guy.drag()

    })





}


WHYQ = function(){




    cjs.Keys.l = cjs.Keys.left = false
    cjs.Keys.r = cjs.Keys.right = false
    cjs.Keys.u = cjs.Keys.up = false
    cjs.Keys.d = cjs.Keys.down = false



    $.kU('l',function(){
         if($.test){$l('left lifted')}
        cjs.Keys.l = cjs.Keys.left = false
    })

    $.kD('l',function(){
        if($.test){$l('left pressed')}
        cjs.Keys.l = cjs.Keys.left = true
        cjs.Keys.dir = 'left'})





   $.kD('l',function(){
     if($.test){$l('left pressed')}
     cjs.Keys.l = cjs.Keys.left = true
     cjs.Keys.dir = 'left'})



     $.kD('r',function(){if($.test){$l('right pressed')}
       cjs.Keys.r = cjs.Keys.right = true
       cjs.Keys.dir = 'right'})

   $.kU('r',function(){if($.test){$l('right lifted')}
       cjs.Keys.r = cjs.Keys.right = false
   })



   $.kD('u',function(){if($.test){$l('up pressed')}
       cjs.Keys.u = cjs.Keys.up = true
   })
   $.kU('u',function(){if($.test){$l('up lifted')}
       cjs.Keys.u = cjs.Keys.up = false
   })

   $.kD('d',function(){if($.test){$l('down pressed')}
       cjs.Keys.d = cjs.Keys.down = true})

   $.kU('d',function(){if($.test){$l('down lifted')}
       cjs.Keys.d = cjs.Keys.down = false
   })


}

KEYUP = function(){

    $.kU('l',function(){})
}


