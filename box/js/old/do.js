sJE=sEventObj=function(e){ return {


        P:function(){e.preventDefault()},

        R:function(){e.remove()},

        S:function(){e.stopPropagation()},

        SI:function(){e.stopImmediatePropagation()},


        t: e.type,
        b: e.bubbles,
        c: e.cancelable,
        r: e.removed,
        ts: e.timeStamp,
        n:e.nativeEvent ,
        i:e.pointerID ,
        pr:e.primary ,
        g: e.target,
        cg: e.currentTarget,
        p: e.paused,
        d: e.delta,///1000,
        dp: e.defaultPrevented,

        ph: e.eventPhase,
        ps: e.propagationStopped,
        ips: e.immediatePropagationStopped,

        //S: e.time,//1000,

        s: e.runTime,//1000,

        x:e.stageX,
        y:e.stageY ,

        X:e.rawX,
        Y:e.rawY ,

        u: function(s){return s.uP(e)}

    } }



SuperDisplayObject=Do=function(ob, func){

    //you decide the function object, or get a blank one
    var o = F(func)? func: function(){}


    //the passed on obj reached at .ob
    o.object = o.ob = ob


    //pass in a stage, and the obj will be appended to it
    o.ap=function(stage){  stage.a(o); return o}

    //custom
    //this will run one (or more) functions ON the display object
    //example: o.fn( TR )
    //return display object
    o.fn=function(){

        var args=G(arguments)

        _.each(args,  function(arg){  arg(o)  })

        return o
    }




    o.emit= o.dispatchEvent= o.dE=function(a,b,c){ o.object.dispatchEvent(a,b,c);  return a  }



    o.o= o.on=function(a,b,c,d,e){

        var g=G(arguments),
            a=g[0],b=g[1],c=g[2],d=g[3],e=g[4]

        if(O(a)&&!F(a)){
            _.each(a,function(v,k){
                o.o(k,v)})
        return o}


        if(!Oo('e', a)){
            return o.o('$',a,b,c,d)
        }


        var f=ob.on(

            oE(a),

            b.handleEvent?b
                :b.ob? b.ob
                :b.st? b.st
                :function(e,data){
                var j=sJE(e)

                    b( Do(j.g),  j//,  e

                    )

                //stop propogation
                if(g.n){
                    j.S()
                }

                //if '/', then call 'remove',
                // which nixes the listener
                // so it makes it a 'once' call?
                if(g.d){
                    j.R()}

            },c,d,o,e)

        return function(){

            o.O(a,f)

            return _p(
                o.o,
                a,b,c,d,e)

        }

    }

    o.name = o.n= o.nm=function(name){o.object.name=name;return o}

    o.set = o.s=function(a){o.ob.set(a);return o}

    o.tick= o.ticker =o.t=function(a,b,c,d){

        if(U(a)){
            Ed(T$).t(o)
            return o}

        return o.on('tick',

            a, b, c, d

        )}




    o.x=function(a){
        var g=G(arguments)
        if(U(a)){return ob.x}
        if(g.p){ ob.x = ob.x+a }
        else if(g.n){ob.x=ob.x-a}
        else if(g.m){ob.x=ob.x*a}
        else if(g.d){ob.x=ob.x/a}
        else{ob.x=a}

        return o}
    o.y=function(a){
        var g=G(arguments)
        if(U(a)){return ob.y}
        if(g.p){ob.y=ob.y+a}
        else if(g.n){ob.y=ob.y-a}
        else if(g.m){ob.y=ob.y*a}

        else if(g.d){ob.y=ob.y/a}

        else{ ob.y=a}
        return o}
    o.xy=function(a,b){
        var g=G(arguments)
        a=g[0];b=g[1]

        if(O(a)){return o.xy(a.x, a.y)}
        if(U(a)){return {x:o.x(),y:o.y()}}

        if(g.p){
            o.x(o.x()+a)
            o.y(o.y()+(N(b)?b:a))}

        else if(g.n){
            o.x(o.x()-a)
            o.y(o.y()-(N(b)?b:a))}

        else{o.x(a)
            o.y(N(b)?b:a)  }


        return o}
    o.kx=function(a){
        if(U(a)){return ob.skewX}
        ob.skewX=a
        return o}
    o.ky=function(a){
        if(U(a)){return ob.skewY}
        ob.skewY=a
        return o}
    o.kxy=function(a,b){
        if(U(a)){return {x:o.kx(),y:o.ky()}}
        o.kx(a)
        o.ky(N(b)?b:a)
        return o}
    o.sx=function(a){
        var g=G(arguments)
        if(U(a)){return ob.scaleX}
        if(g.n){ob.scaleX=ob.ScaleX-a}
        else if(g.p){ob.scaleX=ob.ScaleX+a}
        else if(g.m){ob.scaleX=ob.ScaleX*a}
        else if(g.d){ob.scaleX=ob.ScaleX/a}
        else {ob.scaleX=a}
        return o}
    o.sy=function(a){var g=G(arguments)
        if(U(a)){return ob.scaleY}
        if(g.n){ob.scaleY=ob.ScaleY-a}
        else if(g.p){ob.scaleY=ob.ScaleY+a}
        else if(g.m){ob.scaleY=ob.ScaleY*a}
        else if(g.d){ob.scaleY=ob.ScaleY/a}
        else {ob.scaleY=a}
        return o}
    o.sxy=function(a,b){
        var g=G(arguments)

        if(U(a)){return {x:o.sx(),y:o.sy()}}
        a=g[0]
        b=N(g[0])?g[0]:a
        if(g.n){o.sx(o.sx()-a);o.sy(o.sy()-b)}
        else if(g.p){o.sx(o.sx()+a);o.sy(o.sy()+b)}
        else if(g.m){o.sx(o.sx()*a);o.sy(o.sy()*b)}
        else if(g.d){o.sx(o.sx()/a);o.sy(o.sy()/b)}
        else{o.sx(a);o.sy(b)}
        return o}
    o.rx=function(a){var g=G(arguments)
        a=g[0]
        b=g[1]
        if(U(a)){return gX(ob)}

        if(g.p){

            o.x(a, o.rx()-a, '+')
        }

        gX(ob,a)


        return o}
    o.ry=function(a){ var g=G(arguments)
        a=g[0]
        b=g[1]
        if(U(a)){return gY(ob)}
        if(g.p){o.y(a, o.ry()-a,'+')}
        gY(ob,a)

        return o}


    o.rxy=function(a,b){ var g=G(arguments)
        a=g[0]
        b= g[1]


        b=N(b)?b:a

        if(O(a)){return o.rxy(a.x, a.y)}
        if(U(a)){return {x:o.rx(),y:o.ry()}}


        if(g.p){

            o.x(a, o.rx()-a, '+')

            o.y(b, o.ry()-b, '+')
        }

        o.rx(a)
        o.ry(N(b)?b:a)
        return o}

    o.rgc=function(){var g=G(arguments),
        x=o.w()/2, y=o.h()/2

        if(g[0]===0){
            if(g.p){o.rxy(0,0,'+')}
            else{o.rxy(0,0)}}

        else{
            if(g.p){o.rxy(x,y,'+')}
            else{o.rxy(x,y)
            }}

        return o}

    o.rt=function(a){
        var g=G(arguments);a=g[0]

        if(g.p){return o.rt( o.rt() + (N(a)?a:1) )  }

        if(g.n){return o.rt( o.rt() - (N(a)?a:1) )  }

        if(U(a)){return o.ob.rotation}
        o.ob.rotation=a
        return o}





    o.al=function(n){
        var g=G(arguments),
            n=g[0]

        if(U(n)){return o.ob.alpha}

        if(g.n){return o.al(o.ob.alpha-n)}
        o.ob.alpha=n;

        return o

    }


    o.w=function(a){
        if(U(a)){ return o.bn().width * o.sx() }
        o.sx(o.sx()*a/o.w())
    }


    o.h=function(a){
        if(U(a)){return o.bn().height * o.sy()}
        o.sy(o.sy()*a/o.h())}



    o.wh=function(a,b){
        if(U(a)){return {w:o.w(),h:o.h()}}
        o.w(a||0)
        o.h(N(b)?b:a)
        return o}

    o.cx=function(a){
        if(U(a)){return o.x()+o.w()/2 }
        return o.x(a-o.w()/2)}


    o.cy=function f(a){
        if(U(a)){return o.y()+o.h()/2}
        return o.y(a-o.h()/2)}
    o.cxy=function(a,b){
        if(U(a)){return {x:o.cx(),y:o.cy()}}
        o.cx(a)
        o.cy(N(b)?b:a)
        return o}

    /////



    o.off=o.O=function(t,f){var g=G(arguments),
        t=g[0],
        f=g[1]
        if(F(t)){return o.O('$',t)}
        t=oE(t)
        if(F(f)){

            if(g.p){ob.removeEventListener(t,f,true) }
            else if(g.n){ob.removeEventListener(t,f,false) }
            else {$l('removing: ' + t + ' '+ _S(f))

                ob.removeEventListener(t,f)}}
        else{
            if(S(t)){ob.removeAllEventListeners(t)}
            else {ob.removeAllEventListeners()} }

        return o}


    o.hasListener=o.hl=function(a,b){return o.ob.hasEventListener(oO('e',a))}


    o.willTriger=o.wt=function(ty){return o.ob.willTrigger(ty)}


    o.$=function(a,b,c,d){return o.o('$', a, b, c, d )}

    o.$$=function(a,b,c,d){    return o.o( '$$', a, b, c, d )     }


    o.lineTo= o.lT =o.lt=function(a,b){ o.g.lt(a,b);return o}

    o.moveTo = o.mT= o.mt=function(a,b){ o.g.mt(a,b);return o}

    o.beginStroke =o.gs=function(a){ o.g.s(a);return o}

    o.beginFill  =o.gf=function(a){ o.g.f(a);return o}

    o.strokeStyle  =o.gss=function(a,b,c){ o.g.ss(a,b,c);return o}





//to string
    o.str  =function(){return o.ob.toString()}

    //parent
    o.pa=function(n){
        var g=G(arguments),p,n=g[0]
        if(g.p){
            return St(o.ob.getStage())
        }

        p=o.ob.parent
        if(n==2){return o.pa(o.pa())}
        return iSt(p)?St(p):Ct(p)
    }



    //remove
    o.XX=function(){
        o.O()
        o.pa().ob.removeChild(o.ob)
    }


    o.MV=function(a){
        o.pa('+').M(a||10)
        return o}
    //ticker
    o.tk=function(f){
        o.o('t',
            function(g,e){

                f(o, e)

            })

        return o}




    //bounds
    o.bn=function(a,b,c,d){
        var g=G(arguments),

            a=g[0],
            b=g[1],
            c=g[2],
            d=g[3]

        if(U(a)){

            var bn= g.P? o.ob.getBounds()
                :o.ob.getTransformedBounds()

            bn.w=bn.width

            bn.h=bn.height
            return bn}

        if(O(a)){return o.bn(a.x||0, a.y||0, a.width|| a.w|| o.w(), a.height|| a.h|| o.h())}

        ob.setBounds(a,b,c,d)

        return o}


    o.vx=0
    o.vy=0
    //o.p=function(f){f=f||function(){o.mv()};var fn=o.o('t',f);return o}
    //o.P=function(){o.O('t',fn);return o}


    o.dx=function(a){var g=G(arguments);  a=g[0]
        if(g.p){o.vx=o.vx+a;return o}
        else if(g.n){if(N(a)){o.vx=o.vx-a}
            else{o.vx= o.vx * -1}
            return o}
        else if(U(g[0])){return o.vx}
        o.vx=a;return o}



    o.dy=function(a){var g=G(arguments);a=g[0]
        if(g.p){o.vy=o.vy+a;return o}
        else if(g.n){if(N(a)){o.vy=o.vy-a}
        else{o.vy= o.vy * -1}
            return o}
        else if(U(g[0])){return o.vy}

        o.vy=a
        return o}




    o.dxy=function(a,b){var g=G(arguments);a=g[0];b=g[1]
        if(O(a)){return o.dxy(a.dx(),a.dy())}
        if(U(a)){return {x:o.dx(),y:o.dy()}}
        if(g.p){o.dx(o.dx()+a);o.dy(o.dy()+(N(b)?b:a))}
        else if(g.n){o.dx(o.dx()-a);o.dy(o.dy()-(N(b)?b:a))}
        else{o.dx(a);o.dy(N(b)?b:a)}
        return o}
    o.halt=function(){
        o.vx=0
        o.vy=0}


    o.mv=function(){var g=G(arguments)
        if(g.p){ o.tk(function(){ o.mv() })}
        return o.xy( o.vx, o.vy, '+' )}



    //?
    o.ctr=function(n){

        n=N(n)?n:200
        o.st().o('sd',function(e){
            o.dxy((e.X-o.x())/n,(e.Y-o.y())/n,'+')})
        return o.mv('+')
    }


    //clone
    o.cl=function(){ return o.ob.clone() }



    //composite operation
    o.gc=function(co){if(U(co)){
        return o.ob.compositeOperation  }
        o.ob.compositeOperation=oO('g',co)
        return o}

    //id
    o.id=function(i){
        if(U(i)){return o.ob.id  }
        o.ob.id=i;return o}

    //shadow
    o.sd=function(s){
        if(U(s)){
            return o.ob.shadow}
        o.ob.shadow=s;
        return o}
    //mask
    o.ma=function(m){
        if(U(m)){return o.ob.mask}
        o.ob.mask=m;return o}


    //tickEnabled
    o.tE=function(){var g=G(arguments)
        if(g.p){o.ob.tickEnabled=true;return o}
        if(g.n){o.ob.tickEnabled=false;return o}
        return o.ob.tickEnabled}

    //mouseEnabled
    o.mE=function(){var g=G(arguments)
        if(g.p){o.ob.mouseEnabled=true;return o}
        if(g.n){o.ob.mouseEnabled=false;return o}
        return o.ob.mouseEnabled}

    //visible
    o.vs=function(){
        var g=G(arguments)
        if(g.p){o.ob.visible=true;return o}
        if(g.n){o.ob.visible=false;return o}
        return o.ob.visible}


    //cursor
    o.cu=function(cu){if(U(cu)){return o.ob.cursor  }
        o.ob.cursor=oO('u',co)
        return o}


    //cache
    o.cc=function(x,y,w,h,s){var g=G(arguments)
        if(g.n){o.ob.uncache();return o}
        if(g.p){o.ob.updateCache(g[0]);return o}
        if(g.m){return o.ob.cacheCanvas}
        if(g.d){return o.ob.cacheID}

        if(U(g[2])){return o.cc(0, 0,g[0],g[1])}
        if(N(g[2])){g[3]=g[3]||g[2]}

        w=g[2]||o.w();
        h=g[3]||o.h()

        s=g[4]

        o.ob.cache(x,y,w,h,s)

        return o}

    //filters
    o.fl=function(a){var g=G(arguments)

        o.ob.filters=o.ob.filters||[]
        if(U(g[0])){return o.ob.filters}

        if(g.p){

            _e(g,function(f){
                o.ob.filters.push(f)
            })

            return o}


        o.ob.filters=g[0]
        return o}

    CM=function (){
        var c=new createjs.ColorMatrix()
        c.b=c.adjustBrightness
        c.c=c.adjustColor
        c.C=c.adjustContrast
        c.h=c.adjustHue
        c.s=c.adjustSaturation
        c.cl=c.clone
        c.cc=c.concat
        c.m=c.copyMatrix
        c.r=c.reset
        c.A=c.toArray
        c.S=c.toString
        return c}

    o.clMF=function(a){

        var cM = new createjs.ColorMatrix()

        var g=G(arguments),
            a=g[0],

            cm= a=='a'? CM().h(-180).s(100)
            :a=='w'? CM().b(100).C(-60)
            :a=='g'? CM().h(180).s(-100)
                :a

        o.fl(clMF(cm),'+');
        if(g.p){o.cc('+')}

        return o}




    //matrix
    o.gm=function(m){ var g=G(arguments),m=g[0]
        return g.p? o.ob.getConcatenatedMatrix(m)
            :o.ob.getMatrix(m)}

    o.st=function(){
        _a(o.ob.setTransform(o),arguments)}

    o.ll=function(x,y,t){return o.ob.localToLocal(x,y, t.ob)}
    o.lg=function(x,y){return o.ob.localToGlobal(x,y)}
    o.gTL=o.gl=function(x,y){return o.ob.globalToLocal(x,y)}
    o.hT =o.ht=function(x,y){return o.ob.hitTest(x,y)}


    //bm's center goes wherever u click on the stg
    o.moo=function(){
        o.pa('+').D(function(g,e){
            o.cxy( e.X, e.Y)})}

    o.wrp=function(n){
        var dm=o.pa('+').wh(),
            n=N(n)?n:50
        o.tk(function(){
            o.x(wrp(n,dm.w-n)(o.x()))
            o.y(wrp(n,dm.h-n)(o.y()))})
        return o}


    o.cap=function(n){

        var cap=function(a,b,c){c=c||0

            return function(d){
                return d<a? a-c: d>b?b+c:d

            }},dm=o.st().dm(),n=N(n)?n:50

        o.tk(function(){
            o.x(cap(n,dm.w-n)(o.x()))
            o.y(cap(n,dm.h-n)(o.y()))})
        return o}
    //bounce
    o.bnc=function(n){

        n=N(n)?n:0

        var p=o.pa('+'),  dm=p.wh(),
            h=dm.h,
            w=dm.w

        p.t(function(){ var x=o.x(), y=o.y()

            if(x>w - o.w()-n  || x<(n ) ){ o.dx('-') }

             if(y>h - o.h()-(n)||y<(n )){  o.dy('-')  }
        })


        return o}



    //o.tw=function(){var g=G(arguments)}


    o.hyp=function(a){hyp(a,x); return o}

    o.mag=function(a){
        if(a=='k'){SK(x)}
        if(a=='c'){SC(x)}
        if(a=='r'){RT(x)}
        if(a=='l'){SL(x)}
        return o}

    return o}



WrappedDOx = function( object ){

 var superDisplayObject= SuperDisplayObject(object)

    var container = EaselContainer()

    container.a( superDisplayObject )

    container.dO=container.displayObject=superDisplayObject

    return container}




//
opopX=function(a,b){

    if(U(a)){
        _.each(p,
            function(k,v){
                ob[v]=x[k]});return ob}

    if(U(b)){ return o[p[a]] }


    if(S(a)){ o[p[a]]=b }

    if(O(a)){ o.set(a) }

    return o

}
