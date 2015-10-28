
crs=function(a){return B(A(a,'/'),'.png')}



cjs=function (){
    C$=createjs
    T$=C$.Ticker
    Ct$=function(a){return new C$.Container(a)}
    S$=function(a){return new C$.Stage(a)}
    B$=function(a){return new C$.Bitmap(a)}
    Q$=function(){return new C$.LoadQueue(true)}
    G$=function(){return new C$.Graphics()}
    H$=function(a){return new C$.Shape(a)}
    J$=function(a){
        if(a.images){a=SS$(a)}
        return new C$.Sprite(a)}
    SS$=function(a){return new C$.SpriteSheet(a)}
    W$=C$.Tween;
    Q$=function(){return new createjs.LoadQueue(true) }
    Ed=function(x){
        var Events={
            t:'tick',
            $:'click',
            $$:'dblclick',
            d:'mousedown',
            o:'mouseout',
            v:'mouseover',
            ro:'rollout',
            rv:'rollover',
            m:'pressmove' ,
            u:'pressup',
            e:"mouseenter",
            l:"mouseleave",
            sd:"stagemousedown",
            sm:"stagemousemove",
            su:"stagemouseup",
            de:"drawend",
            ds:"drawstart",
            te:"tickend",
            ts:"tickstart"}
        var sEventObj=function(e){return {
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
            d: e.delta/1000,
            dp: e.defaultPrevented,
            ph: e.eventPhase,
            ps: e.propagationStopped,
            ips: e.immediatePropagationStopped,
            S: e.time/1000,
            s: e.runTime/1000,
            x:e.stageX,
            y:e.stageY ,
            X:e.rawX,
            Y:e.rawY}}
        var o=function rc(){
            if(rc.main){return rc.main.apply(rc, arguments)}
            return rc.obj||false}
        o.super=true
        o.o=function(a, b, c, d, e){
            if(U(b)){return x.hasEventListener(a)}
            if(Events[a]){a=Events[a]}

            if(F(b.obj)){b=b.obj()}

            if(F(b)){b=function(e){b(sEventObj(e),e)}}

            return x.on(a,b,c,d,o,e)}
        o.e=function(a,b,c){x.dispatchEvent(a,b,c); return a} // type, listener, useCapture
        o.O=function(a,b,c){
            if(!b){x.removeEventListener(a,b,c)}
            else{x.removeAllEventListeners(a)}
            return o}
        o.t   = function(a,b,c,d){
            if(U(a)){return tk.t(o)}
            return o.o('t', a,b,c,d)}
        o.$  =  function(a,b,c,d){return o.o('$', a,b,c,d)}
        o.$$  = function(a,b,c,d){return o.o('$$',a,b,c,d)}
        o.str=function(){return x.toString()}
        return o}
    Do=function(x){


        var  tb="getTransformedBounds",   iv="isVisible", gs="getStage",  cdu="getCacheDataURL",
            gm="getMatrix",  cm="getConcatenatedMatrix",
            lg="localToGlobal", ll="localToLocal",
            gl="globalToLocal",
            cc="cacheCanvas",   cd="suppressCrossDomainErrors",
            me="mouseEnabled",    fi="filters",
            ha="hitArea",    ci="cacheID",
            al="alpha",  ma="mask",    n="name",  co="compositeOperation",     pa="parent",
            rx="regX",    ry="regY", rt="rotation",
            sx="scaleX", sy="scaleY", kx="skewX",    ky="skewY",
            ot="onTick",   cu="cursor",    vs="visible",     sd="shadow",  ca="cache",
            cl= "clone",  ht="hitTest",  st="setTransform",    upc="updateCache",  uc="uncache",  tl="translate",
            omd="onMouseDown",    sb="setBounds",
            gb="getBounds", w="width",h="height",
            m = {tb:tb, v:iv,  s:gs,u:cdu,m:gm,  cm:cm, lg:lg, ll:ll,gl:gl},

            p = {a:al, c:cc, d:cd,  e:me,  f:fi, h:ha, i:ci,   kx:kx,
                ky:ky,  m:ma,  n:n,  o:co, p:pa, rx:rx,
                ry:ry,  r:rt, sx:sx,  sy:sy, t:ot, u:cu,  v:vs,  w:sd};


        var o= Ed(x);

        o.obj=function(){return(x)}
        o.x=function(a){ if(U(a)){return x.x}; x.x=a; return o}
        o.y=function(a){ if(U(a)){return x.y}; x.y=a; return o}

        o.mt=function(x,y){ var v=$V(x,y);  o.x(v.x); o.y(v.y);  return o}
        o.vx = 0;
        o.vy = 0;

        //tk(function(){ o.x(o.x()+o.vx);  o.y(o.y()+o.vy)  })

        o.halt=function(){o.vx=0;o.vy=0}
        o.bn=function(a,b,c,d){ if(U(a)){return x[gb]}; x[sb](a,b,c,d);return o}
        o.w=function(){return o.bn()[w]*x[sx]};
        o.h=function(){return o.bn()[h]*x[sy]}
        o.cent=function(X,Y){if(!x){
            return $V(o.x+o.w()/2,o.y+o.h()/2  )}
            o.x( X-o.w()/2, Y-o.h()/2 );return o}
        o.zz=function(c){o.cent(o.w()/2,o.h()/2)}
        o.met=function(a,b,c){
            return x[m[a]](b,c)}
        o.pop = function(a,b){
            if(U(a)){each(p,function(k,v){ob[v]=x[k]});return ob}
            if(U(b)){return x[p[a]]};
            if(S(a)){x[p[a]]=b};if(O(a)){x.set(a)}
            return o}

        o.tl=function(a,b){x[tl](a,b);return o}
        o.sk=function(a,b){x[kx]=a;x[ky]=b||a;return o}

        o.sc=function(a){
            x[sx]=x[sy]=a;
            return o}
        //working ex: Spr(SS,function(yy,zz){y=yy;z=zz},s)
        //o.onMouseDown=function(a){x[omd]=a;return o}
        //o.clone = x[cl];
        //o.hitTest = x[ht];
        //o.setTransform = x[st];
        //o.cache = function(){var g=arguments;if(U(a)){x[uc]()} else if(U(b)){x[uc](a)} else {x[ca].apply(x,g)}return o}
        //o.unCache=function(a){x[uc](a);return o}
        //o.hyp=function(a){hyp(a,x); return o}
        //o.mag=function(a){if(a=='k'){SK(x)};  if(a=='c'){SC(x)}; if(a=='r'){RT(x)}; if(a=='l'){SL(x)}; return o}
        return o}
    Ct=function(x){


        var ac = "addChild",  aca ="addChildAt",  nc="getNumChildren",  ca="getChildAt",
            cbn="getChildByName",  ch="children",gi="getChildIndex",  si="setChildIndex",
            so="sortChildren",  sw="swapChildren",  swa="swapChildrenAt", oup="getObjectsUnderPoint",
            ct="contains", vs="visible",  mc="mouseChildren", rac="removeAllChildren", rc="removeChild",
            rca="removeChildAt";

        x=x||Ct$();

        var o=Do(x)

        o.a=function(a, b){
            //if(U(a)){return x[ca](a)}
            //if(N(b)){ x[aca](a, b)}
            if(F(a.obj)){a=a.obj()}
            x[ac](a)
            return o}

        o.ch=function(a,b){
            if(U(a)){return x[nc]()};
            if(F(a)){x[so](a)};
            if(N(b)){x[swa](a,b)};
            if(O(b)){return x[sw](a,b)}
            if(O(a)){return x[ct](a)}
            return o}
        o.b=function(a,f,v,p,F){
            a=a||x;
            if(!U(v)){
                v=$V(v);
                if(v.x<=10){v.x*=100};
                if(v.y<=10){v.y*=100}}

            if(p==='c'){
                p=[($c.w()-v.x)/2, ($c.h()-v.y)/2]
            };
            p=$V(p);

            Bm(a, function(b,x){
                    b.x(p.x);b.y(p.y)
                    $do(b,f); o.a(b);
                    each(F,
                        function(f){b[f]()})},
                v);
            return o}
        o.gCh=function(a,b){
            if(O(a)){return x[gi](a)}
            if(N(b)){return x[oup](a,b)}
            if(N(a)){return x[ca](a)}
            if(S(a)){return x[cbn](a)}
            if(O(a)&&N(b)){x[si](a,b)}
            return o}
        o.rm=function(a,b){if(U(a)){x[rac]()}
            if(O(a)){x[rc](a)};if(N(a)){x[rca](a)};
            return o}
        //o.hide=function(){each(x[ch],function(a){a[vs]=false});return o}
        //o.oup=function(a,b){return x[oup](a,b)}
        //o.mCh=function(a){if(U(a)){return x[mc]};x[mc]=a;return o}
        //o.bFit=function(a,pc,f){   pc=pc||1; o.b(a, {x:o.w()*pc,  y:o.h()*pc},f);    return o}
        //o.bPerc=function(a,b,c){  var b=b||1; o.b(a,{x:t.w()*b, y:t.h()*b}, c); return o};
        //o.wow=function(){  Bm(x,function(b){o.a(b); TR(b)}); return o}
        //o.addShape=function(a,b,c){var h=H(); o.a(h); if(S(a)){h.g.f(a)};  if(F(a)){a(h.g,h,t)}; if(F(b)){b(h.g,h,t)}; return h}
        return o}
    St=function(x,z){

        var ud="update",  cl="clear",  ac="autoClear",
            ns="nextStage",  tou="tickOnUpdate",
            mmo="mouseMoveOutside",
            mx="mouseX", my="mouseY",  emo="enableMouseOver",
            he="handleEvent", mib="mouseInBounds",
            ede="enableDOMEvents",  du="toDataURL",o;


        x=S$(x);

        o=Ct(x);



        o.u=function(a){
            if(U(a)){x[ud]()}
            if(a==='!'){x[cl]()};
            if(a==='0'){x[ac] = false};
            if(a==='1'){x[ac] = true};
            return o}

        o.mx=function(){return x[mx]}
        o.my=function(){return x[my]}
        o.du=function(){return x[du]()}

        if(z!==false){tk(x)}

        //o.eDE=function(a){x[ede](a);return o}
        //o.eMO=function(a){x[mmo](a);return o}
        //o.mMO=function(a){if(U(a)){return x[mmo]}; x[mmo]=a;return o}
        //o.mIB=function(){if(U(a)){return x[mib]}; return x[mib]}
        //o.eMO=function(a){x[emo](a);return o}
        //o.nS=function(a){if(U(a)){return x[ns]} x[ns]=a;return o}
        //o.tOU=function(a){if(U(a)){return x[tou]}; x[tou]=a; return o}
        //o.hE=function(a){if(U(a)){return x[he]}; x[he]=a; return o}
        return o}
    tkr=function(){

        var gt="getTime",
            ge="getEventTime",
            gf="getFPS",
            gi="getInterval",
            gp="getPaused",
            mf="getMeasuredFPS",
            mt="getMeasuredTickTime",
            gtk="getTicks",
            tm="timingMode",
            sf="setFPS",
            si="setInterval",
            sp="setPaused",
            r="reset",
            it="init",
            md="maxDelta",
            t=T$

        tk = Ed(t);

        tk.main=function(a){
            if(!a){return tk.time()}
            if(N(a)){return tk.rate(a)}
            return tk.t(a)}


        tk.s=function(){t[sp](true)};
        tk.S=function(){return t[gp]()}
        tk.p=function(){t[sp](false)};
        tk.P=function(){return !tk.S()}
        tk.tog=function(){if(t[gp]()){tk.p()} else {tk.s()}}
        tk.reset  = function(){t[r]()}
        tk.init  =function(){t[it]()}
        tk.time=function(){
            var ob={
                time: t[gt](false),

                runTime: t[gt](true),

                eventTime: t[ge](false),

                eventRunTime: t[ge](true),

                ticks: t[gtk](),

                runTicks: t[gtk](true),

                FPS: t[gf](),

                interval:t[gi](10),

                paused:t[gp](),

                playing:!t[gp](),

                maxDelta: t[md] ,

                mode:t[tm]

            }
            if(t[gtk]()){
                ob.mTickTime =t[mt]();
                ob.mFPS=t[mf]()}

            return $l(ob)}
        tk.rate=function (a,b,c){if(a>10){t[sf](a)} else{t[si](a*1000)}}
    }()
    Bm=function(a,b,z){
        if(I(a)){return B$(a)}

        Im(a, function(i){

            var bm=Do(B$(i));
            if(F(b)){b(bm)}
            else{$w[b]=bm}});

        return a}
    Ql=function(a){

        var q=Q$();

        q.i=[];
        q.l=function(a,b,c){
            if(U(a)){q.load()}
            else if(A(a)){q.loadManifest(a,b,c)}
            else if(S(a)||a.src){q.loadFile(a,b,c)}
            else if(O(a)){
                if(a.c){q.c(a.c)};
                if(a.f){q.f(a.f)};
                if(a.m){q.l(a.m)}}
            return q}


        q.f=function(a,b,c){q.on("fileload",a,b,c);
            return q};

        q.f(function(e){$l("fl");
            if(e.item.type=="image"){
                q.i[e.item.id]=e.result}})

        q.c=function(a,b,c){
            q.on("complete",function(){a(q.i)},b,c);
            return q};

        //q.c(function(){alert('!')})

        q.gr=function(a){return q.getResult(a)}
        q.gi=function(a){return q.getItem(a)}

        if(a){q.l(a)}

        return q}
    Mf=function(a){

        var mf=[]
        each(arguments,
            function(v,k){
                mf.push({src:src(v),id:v})
            })
        return mf
    }
    makeMan= function(a){return Mf.apply(this,map(a.images, function(i){return crs(i)}))}
    Sp=function(ss, fun, stg){


        var spr =function(x){
            var  gts="gotoAndStop",gtp="gotoAndPlay", av="advance", ga="getAnimation", gA="getAnimations",gfb="getFrameBounds", gnf= "getNumFrames",
                fr="framerate",ca="currentAnimation",  caf="currentAnimationFrame", cf="currentFrame",
                ae='animationend';


            var o=Do(x);


            o.p=function(a){
                if(a){
                    x[gtp](a)}
                else{
                    x.play()};
                return o}


            o.s=function(a,b){
                if(a){
                    x[gts](a)}
                else{
                    x.stop()};
                return o}

            o.av=function(a){x[av](a*1000);return o}

            o.end=function(a){
                o.o(ae,a);
                return o}

            o.pa=function(a){
                if(!a){
                    return x[pa]}
                x[pa]=a;
                return o}

            o.rate=function(a){
                if(!a){
                    return x[fr]}
                x[fr]=a;
                return o}

            o.cf=function(a){
                if(!a){
                    return x[cf]}
                x[cf]=a;
                return o}

            o.ca=function(a){
                if(!a){
                    return x[ca]}
                x[ca]=a;
                return o}

            o.caf=function(a){if(!a){
                return x[caf]}
                x[caf]=a;
                return o};


            return o};






        return Ql(
            {

                m:makeMan(ss),

                c:function(i){
                    var s=J$(SS$(ss));
                    if(stg){stg.a(s)};
                    if(fun){fun(spr(s),s)}}   // ,s

            })}
    fu= function(a){
        if(F(a.obj)){a=a.obj()}
        return a}
    tw=function rc(a){

        var fn=function(a,b){W$.get(a).to(b)}

        return function r(b){
            fn(fu(a),b)
            return r
        }
    }
    y=function(a){

        return fn=function f(b){
            W$.get(a).to(b)
            return f}

    }







    $(function(){


        Bm('guy',function(gg){
            stg.a(g=gg)
            // z=tw(g)

            a=1;
            w=W$.get(g.obj(),
                {loop:true,
                    onChange:function(){a= w.position}}
            ).to({x:170},5000).to({x:0},5000)


        })


    })




//mf= [{src:"/me.png", id:"m"}, {src:"/chicks.png", id:"c"}]
//a=["/guy_0.png", "/guy_1.png" ]
//mf=Mf("guy_0","guy_1")
}





d.ln=function(a,b,c){ed[ael](a,b,c);return d};

d.lT=function(s){return d.ln('tick',s)}

iSt = function(a){return c$(_ts(a),"Stage")}



$(function(){  cjs();

    cjs();




    c=can();
    //  s = S$(c)
    stg=St(c)

    // T$.on('tick', s)
    // Bm('guy', function(i){ g=(i) })

    // Bm('me', function(i){ m=(i) })




    // cjs.Ed(T$).o('tick', function(e,ee){ z=e, y=ee   }    )
    //$l(z.t)




})


SS={"framerate":24,

    "images":["/guy_0.png", "/guy_1.png"],

    "frames":[
        [2, 2, 1024, 512, 0, 0, 0],
        [1030, 2, 1024, 512, 0, 0, 0],
        [2058, 2, 1024, 512, 0, 0, 0],
        [2, 518, 1024, 512, 0, 0, 0],
        [1030, 518, 1024, 512, 0, 0, 0],
        [2058, 518, 1024, 512, 0, 0, 0],
        [2, 1034, 1024, 512, 0, 0, 0],
        [1030, 1034, 1024, 512, 0, 0, 0],
        [2058, 1034, 1024, 512, 0, 0, 0],
        [2, 1550, 1024, 512, 0, 0, 0],
        [1030, 1550, 1024, 512, 0, 0, 0],
        [2058, 1550, 1024, 512, 0, 0, 0],
        [2, 2066, 1024, 512, 0, 0, 0],
        [1030, 2066, 1024, 512, 0, 0, 0],
        [2058, 2066, 1024, 512, 0, 0, 0],
        [2, 2582, 1024, 512, 0, 0, 0],
        [1030, 2582, 1024, 512, 0, 0, 0],
        [2058, 2582, 1024, 512, 0, 0, 0],
        [2, 3098, 1024, 512, 0, 0, 0],
        [1030, 3098, 1024, 512, 0, 0, 0],
        [2058, 3098, 1024, 512, 0, 0, 0],
        [2, 2, 1024, 512, 1, 0, 0],
        [1030, 2, 1024, 512, 1, 0, 0],
        [2058, 2, 1024, 512, 1, 0, 0],
        [2, 518, 1024, 512, 1, 0, 0],
        [1030, 518, 1024, 512, 1, 0, 0],
        [2058, 518, 1024, 512, 1, 0, 0],
        [2, 1034, 1024, 512, 1, 0, 0],
        [1030, 1034, 1024, 512, 1, 0, 0],
        [2058, 1034, 1024, 512, 1, 0, 0],
        [2, 1550, 1024, 512, 1, 0, 0],
        [1030, 1550, 1024, 512, 1, 0, 0],
        [2058, 1550, 1024, 512, 1, 0, 0],
        [2, 2066, 1024, 512, 1, 0, 0],
        [1030, 2066, 1024, 512, 1, 0, 0],
        [2058, 2066, 1024, 512, 1, 0, 0],
        [2, 2582, 1024, 512, 1, 0, 0],
        [1030, 2582, 1024, 512, 1, 0, 0],
        [2058, 2582, 1024, 512, 1, 0, 0],
        [2, 3098, 1024, 512, 1, 0, 0]
    ],


    "animations":{

        "eDoplode": {"frames": [34, 35, 36, 37, 38, 39], "speed": 0.5},

        "spin": {"frames": [25, 26, 27, 28, 29, 30, 31, 32, 33], "speed": 1},

        "jump": {

            "frames": [
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                24
            ],
            "speed": 1}}};


sEd=function(a){
    a.dE=function(a,b,c){this.dispatchEvent(a,b,c);return this}
    a.eL=function(a,b,c){var t=this;
        if(b==="undefined"){return t.hasEventListener(a)}
        else t.addEventListener(a,b,c);return t}
    a.O=function(a,b,c){this.on(a,b,c);
        return this};
    a.F=function(a,b,c){var t=this;
        if(b!=="undefined"){t.removeEventListener(a,b,c)}
        else{t.removeAllEventListeners(a)}
        return t}
    a.tS=function(){return this.toString()}
    return a}
sDo=function(o){o=sEd(o);
    o.mh=function(a,b,c){return this[dOMets[a]](b,c)}
    o._=function(a,b){var t=this,p={};
        if(iO(a)){return this.set(a)}
        if(a===undefined){_.e(dOPops,function(a,b){p[b]=t[a]});return p}
        if(b===undefined){return t[dOPops[a]]}
        if(iS(a))[dOPops[a]]=b;if(iO(a)){t.set(a)}
        return t}
    o.$=function(a){var t=this;
        t.on('click',function(){a(t)});
        return t}
    o.$$=function(a){var t=this;
        t.on('dblclick',function(){
            a(t)});return t}
    o.$$$=function(a){var t=this;t.O('tick',a);return t}
    o.oM=function(a,b){var t=this;
        if(a=='d'){t.O('mousedown',b)};
        if(a=='o'){t.O('mouseout',b)};
        if(a=='m'){t.O('pressmove',b)};
        if(a=='v'){t.O('mouseover',b)};
        if(a=='u'){t.O('pressup',b)};
        if(a=='ro'){t.O('rollout',b)};
        if(a=='r'){t.O('rollover',b)};
        return t}
    o.cl=o.clone;
    o.hT=o.hitTest;
    o.sT=o.setTransform;


    o.CC=function(){var t=this,g=arguments;
        if(a===undefined){t.uncache()}
        else if(b===undefined){t.updateCache(a)}
        else {t.cache.apply(t,g)}
        return t}
    o.bn=function(a,b,c,d){var t=this;
        if(a===undefined){return t.getBounds}
        t.setBounds(a,b,c,d);return t}
    o.X=function(a){this.updateContext(a);return this}
    o.w=function(){return this.bn().width*t.scaleX};
    o.h=function(){return this.bn().height*t.scaleY}
    o.t=function(x,y){var t=this,v=$V(x,y);t.x=v.x;t.y=v.y;return t}
    o.z=function(c){return this.c(c.w()/2,c.h()/2)}
    o.c=function(x,y){var t=this;
        if(!x){return $V(t.x+t.w()/2,t.y+t.h()/2)};
        t.t(x-t.w()/2, y-t.h()/2);return t}
    o.T=function(a,b){this.translate(a,b);return this}
    o.K=function(a,b){var t=this;t.skewX=a;t.skewY=b||a;return t}
    o.S=function(a,b){var t=this;t.scaleX=a;t.scaleY=b|a;return t}
    o.hyp=function(a){var t=this;hyp(a|c,t);return t}
    o.mag=function(a){var t=this;
        if(a=='k'){SK(t)};
        if(a=='c'){SC(t)};
        if(a=='r'){RT(t)};
        if(a=='l'){SL(t)};
        return t}
    return o}
sCt=function(c){c=sDo(c);
    c.a=function(a,b){ var t=this;
        if(iN(b)){t.addChildAt(a,b)}
        else{t.addChild(a)}
        return t}
    c.hd=function(){var t=this;
        _.e(t.children,function(b){b.visible=false});
        return t}
    c.gCh=function(a,b){var t=this;
        if(iO(a)){return t.getChildIndex(a)}
        if(iN(b)){return t.getObjectUnderPoint(a,b)}
        if(iN(a)){return t.getChildAt(a)}
        if(iS(a)){return t.getChildByName(a)}
        if(iO(a)&&iN(b)){t.setChildIndex(a,b)}
        return t}
    c.Ch=function(a,b){
        if(a===undefined){return t.getNumChildren()};
        if(iF(a)){t.sortChildren(a)};
        if(iN(b)){t.swapChildrenAt(a,b)}
        if(iO(b)){return t.swapChildren(a,b)}
        else if(iO(a)){return t.contains(a)}
        return t}
    c.rCh=function(a,b){ var t=this;
        if(a===undefined){t.removeAllChildren()}//()
        if(iO(a)){t.removeChild(a)};      //o
        if(iN(a)){t.removeChildAt(a)}  //n
        return t}
    c.oUP=function(a,b){return this.getObjectsUnderPoint(a,b)}

    c.mCh=function(a){var t=this;
        if(is===undefined(a)){return t.mouseChildren}
        t.mouseChildren=a;return t}
    return c}
sS=function(s, $c){
    s=sCt(s);

    s.u=s.toDataURL;
    s.U=function(a){var t=this;
        if(a===undefined){t.update()}
        if(a==='!'){t.clear()}
        if(a==='0'){t.autoClear=false}
        if(a==='1'){t.autoClear=true};return t}
    s.eMV=function(a){this.enableMouseOver(a);return this}
    s.eMO=function(a){this.mouseMoveOutside(a);return this}
    s.eDE=function(a){this.enableDOMEvents(a);return this}
    s.nSt=function(a){var t=this;
        if(is===undefined(a)){return t.nextStage}
        t.nextStage=a;return t}
    s.tOU=function(a){var t=this;
        if(is===undefined(a)){return t.tickOnUpdate}
        t.tickOnUpdate=a;return t}
    s.mMO=function(a){var t=this;
        if(is===undefined(a)){return t.mouseMoveOutside}
        t.mouseMoveOutside=a;return t}
    s.mX=function(){return this.mouseX}
    s.mY=function(){return this.mouseY}
    s.mB=function(){return this.mouseInBounds}
    s.aH=function(a,b,c){var t=this,h=H();
        t.a(h);
        if(iS(a)){h.g.f(a)};
        if(iF(a)){a(h.g,h,t)};
        if(iF(b)){b(h.g,h,t)};
        return h}

    s.b=function(a,f,v,p,F){var t=this;
        //a=a||t;

        if(v!==undefined){v=$V(v);if(v.x<=10){v.x*=100};
            if(v.y<=10){v.y*=100}}
        if(p==='c'){p=[($c.w()-v.x)/2,($c.h()-v.y)/2]};p=$V(p);
        B(a,function(b,t){
            b.x=p.x;b.y=p.y;$do(b,f);t.a(b);
            _.e(F,function(f){b[f]()})},v);
        return t}

    s.bF=function(a,pc,f){
        pc=pc||1//?
        var t=this;
        t.b(a,{x:t.w()*pc,y:t.h()*pc},f);
        return t
    }
    s.percent=function(a,b,c){var t=this,b=b||1;
        t.b(a,{x:t.w()*b,y:t.h()*b},c);
        return t};
    s.wow=function(){var t=this;
        B(t,function(b){t.S.a(b);
            TR(b)});
        return t}//t()
    return s}
tB=function(a){
    if(iI(a)){a=B$(a)};
    if(iB(a)){
        a=sDo(a);
        a.i=a.image};
    return a}
xB=function f(a,b,c,d){

    if(c){
        I(a,function(i){
            var c=C(c);
            c.X.fD(i);
            f(c.C,b,null,d)
        });
        return}

    if(iI(i)){
        if(i.src){
            return $do($do(tB(a),b),d)
        }}

    I(a,function(i){
        f(i,b,null,d)
    });

    return}
B=function(a,b){
    I(a,function(i){

        var bm=sDo(B$(i));

        if(iO(b)){b.addChild(b)};
        if(iS(b));W[b]=bm;
        if(iF(b)){b(bm)}

    })}
//nLoad=function(a){return !iB(tB(a))}
// a _  $ $$ bn cl c CC Ch draw em eL F gCh K h hit i-img mh mt mCh n-name O rCh S tf tk tS T u U w X x/y:(x/y), z

B2=function(a,s){
    I(a,function(i){
        b=sDo(B$(i));
        if(s){s.addChild(b)}})}



tk=function(a){
    if(iS(a)){a=new Function(a)}
    T.on('tick',a);
    return T}




advanced=function(){
    animation=function(){
        sAN=function(a,b){a=sDo(a)
            gS="gotoAndStop",gP="gotoAndPlay",sPa="setPaused",sPo="setPosition";
            a.p=function(a,b){var t=this;
                if(t[sPa]) {t[sPa](false)} else {t.play()}
                if(b!==undefined){
                    if(t[gP]) {t[gP](a)}
                    if(t[sPo]) {t[sPo](a,b)}
                    return t}}
            a.s=function(a,b){var t=this;
                if(t[sPa]) {t[sPa](true)} else {t.stop()}
                if(b!==undefined){
                    if(t[gS]) {t[gS](a)}
                    if(t[sPo]) {t[sPo](a,b)}
                    return t}}
            return t}
        sSp=function(s){s=sAN(s);
            s.gt=function(){var t=this;
                return {
                    a: t.getAnimation(),
                    A: t.getAnimations(),
                    f: t.getFrame(),
                    fb: t.getFrameBounds(),
                    nf: t.getNumFrames(),
                    fr: framerate}}
            s.$$$=function(a){t.on('complete',a)}
            return s}
        sTW=function(W){W=sAn(W)
            W.pos=function(a,b){var t=this;
                if(a===undefined){return t.position}
                setPosition(a,b);return t}
            W.iGP=function(a){var t=this,iGP="ignoreGlobalPause";
                if(a===undefined){return t[iGP]}
                t[iGP]=a;return t}
            W.dur=function(a){var t=this,d="duration";
                if(a===undefined){return t[d]}
                t[d]=a;return t}
            W.lp=function(a){var t=this;
                if(a===undefined){return t.loop}
                t.loop=a;return t}
            return W}
        sTw=function(w){w=sTW(w)
            w.cl=w.call; w.gt=w.get; w.wt=w.wait;w.st=w.set;
            w.tw=function(a){var t=this;
                if(a===undefined){return t.hasActiveTweens }
                return t}
            w.rm=function(a){
                var t=this;
                if(a===undefined){t.removeAllTweens }
                t.removeTweens(a);
                return t}
            w.tg=function(){return this.target}
            w.tk=function(a,b){this.tick(a,b);return this}
            return w}
        sTl=function(l){l=sTW(l);
            l.ad=function(a,b){var t=this;
                if(iS(a)){t.addLabel(a,b)}
                if(iO(a)){t.addTween(a,b)}
                return t}
            l.cL=function(){return t.getCurrentLabel()}
            l.lb=function(a){var t=this;
                if(a===undefined){return t.getLabels()}
                if(iO(a)){t.setLabels(a);return t}
                if(iN(a)||iS(a)){return resolve(a)}
                return t}
            l.rm=function(a){this.removeTween(a);return this}
            l.uD=function(a){var t=this;
                if(a===undefined){t.updateDuration()}
                if(iN(a)){t.tick(a)}
                return t}
            return l}
        sMc=function(m){var t=this,m=sAN(sCt(m));
            m.tl=sTl(m.timeline);
            m.lb=m.getLabels;m.cL=m.getCurrentLabel;

            m.sP=function(a){var t=this,sp="startPosition";
                if(a===undefined){return t[sp]}; t[sp]=a;return t}

            m.mo=function(a){var t=this;
                if(a===undefined){return t.mode};t.mode=a;return t}

            m.lp=function(a){var t=this;
                if(a===undefined){return t.loop};t.loop=a;return t}

            m.aR=function(a){var t=this,r="autoReset";
                if(a===undefined){return t[r]};t[r]=a;return t}

            m.aE=function(a){var t=this,e="actionsEnabled";
                if(a===undefined){return t[e]};t[e]=a;return t}

            return m}
    };animation();





    sEd=function(a){
        a.dE=function(a,b,c){this.dispatchEvent(a,b,c);return this}
        a.eL=function(a,b,c){var t=this;
            if(b==="undefined"){return t.hasEventListener(a)}
            else t.addEventListener(a,b,c);return t}
        a.O=function(a,b,c){this.on(a,b,c);
            return this};
        a.F=function(a,b,c){var t=this;
            if(b!=="undefined"){t.removeEventListener(a,b,c)}
            else{t.removeAllEventListeners(a)}
            return t}
        a.tS=function(){return this.toString()}
        return a};




    T=function f(a,b,c){

        // var iSt=function(a){return c$(_ts(a),"Stage")}
        //  var tSt=function f(a){var s; if(iSt(a)){return a};if(a['S']){return f(a['S'])};return a}

        var gT="getTime",
            gET="getEventTime",
            tM="timingMode",
            gTk="getTicks";

        if(iN(a)){
            if(a>10){T$.setFPS(a)}
            else{T$.setInterval(a*1000)}};

        if(iF(a)||iO(a)){
            T$.on('tick',a);
            $l('o')};

        //if(iS(a)&&_.z(a)>3){return f(new Function('e',"var a=arguments,t=this;"+a+";return t"))}


        if(a===undefined){T$.setPaused(false)};
        if(a==='!'){T$.setPaused(true)};
        if(a==='~'){if(f('@').p){f(0)}else{f()}};
        if(a==='*'){T$.reset()};
        if(a==='#'){T$.init()}
        if(a==='%'){if(b){T$[tM]=b};return T$[tM]};

        if(a==='@'){var o={
            TIME:T$[gT](false),
            RUNTIME:T$[gT](true),
            EVENT:T$[gET](false),
            RUNEVENT:T$[gET](true),
            TICKS:T$[gTk](),
            RUNTICKS:T$[gTk](true),
            FPS:T$.getFPS(),
            INT:T$.getInterval(10),
            playing:!T$.getPaused()}
            $l(o);
            return o} //should be default

        if(a==='@@'){f('#');
            var o={mF:T$.getMeasuredFPS(1),
                mI:T$.getMeasuredTickTime(10)}
            $l(o);return o}

        if(a==='$'){
            T.eL('tick',a)}
    };



    sDo=function(o){o=sEd(o);
        o.mh=function(a,b,c){return this[dOMets[a]](b,c)}
        o._=function(a,b){var t=this,p={};
            if(iO(a)){return this.set(a)}
            if(a===undefined){_.e(dOPops,function(a,b){p[b]=t[a]});return p}
            if(b===undefined){return t[dOPops[a]]}
            if(iS(a))[dOPops[a]]=b;if(iO(a)){t.set(a)}
            return t}
        o.$=function(a){var t=this;
            t.on('click',function(){a(t)});
            return t}
        o.$$=function(a){var t=this;
            t.on('dblclick',function(){
                a(t)});return t}
        o.$$$=function(a){var t=this;t.O('tick',a);return t}
        o.oM=function(a,b){var t=this;
            if(a=='d'){t.O('mousedown',b)};
            if(a=='o'){t.O('mouseout',b)};
            if(a=='m'){t.O('pressmove',b)};
            if(a=='v'){t.O('mouseover',b)};
            if(a=='u'){t.O('pressup',b)};
            if(a=='ro'){t.O('rollout',b)};
            if(a=='r'){t.O('rollover',b)};
            return t}
        o.cl=o.clone;
        o.hT=o.hitTest;
        o.sT=o.setTransform;


        o.CC=function(){var t=this,g=arguments;
            if(a===undefined){t.uncache()}
            else if(b===undefined){t.updateCache(a)}
            else {t.cache.apply(t,g)}
            return t}
        o.bn=function(a,b,c,d){var t=this;
            if(a===undefined){return t.getBounds}
            t.setBounds(a,b,c,d);return t}
        o.X=function(a){this.updateContext(a);return this}
        o.w=function(){return this.bn().width*t.scaleX};
        o.h=function(){return this.bn().height*t.scaleY}
        o.t=function(x,y){var t=this,v=$V(x,y);t.x=v.x;t.y=v.y;return t}
        o.z=function(c){return this.c(c.w()/2,c.h()/2)}
        o.c=function(x,y){var t=this;
            if(!x){return $V(t.x+t.w()/2,t.y+t.h()/2)};
            t.t(x-t.w()/2, y-t.h()/2);return t}
        o.T=function(a,b){this.translate(a,b);return this}
        o.K=function(a,b){var t=this;t.skewX=a;t.skewY=b||a;return t}
        o.S=function(a,b){var t=this;t.scaleX=a;t.scaleY=b|a;return t}
        o.hyp=function(a){var t=this;hyp(a|c,t);return t}
        o.mag=function(a){var t=this;
            if(a=='k'){SK(t)};
            if(a=='c'){SC(t)};
            if(a=='r'){RT(t)};
            if(a=='l'){SL(t)};
            return t}
        return o};
    sCt=function(c){c=sDo(c);
        c.a=function(a,b){ var t=this;
            if(iN(b)){t.addChildAt(a,b)}
            else{t.addChild(a)}
            return t}
        c.hd=function(){var t=this;
            _.e(t.children,function(b){b.visible=false});
            return t}
        c.gCh=function(a,b){var t=this;
            if(iO(a)){return t.getChildIndex(a)}
            if(iN(b)){return t.getObjectUnderPoint(a,b)}
            if(iN(a)){return t.getChildAt(a)}
            if(iS(a)){return t.getChildByName(a)}
            if(iO(a)&&iN(b)){t.setChildIndex(a,b)}
            return t}
        c.Ch=function(a,b){
            if(a===undefined){return t.getNumChildren()};
            if(iF(a)){t.sortChildren(a)};
            if(iN(b)){t.swapChildrenAt(a,b)}
            if(iO(b)){return t.swapChildren(a,b)}
            else if(iO(a)){return t.contains(a)}
            return t}
        c.rCh=function(a,b){ var t=this;
            if(a===undefined){t.removeAllChildren()}//()
            if(iO(a)){t.removeChild(a)};      //o
            if(iN(a)){t.removeChildAt(a)}  //n
            return t}
        c.oUP=function(a,b){return this.getObjectsUnderPoint(a,b)}

        c.mCh=function(a){var t=this;
            if(is===undefined(a)){return t.mouseChildren}
            t.mouseChildren=a;return t}
        return c};
    sS=function(s, $c){
        s=sCt(s);

        s.u=s.toDataURL;
        s.U=function(a){var t=this;
            if(a===undefined){t.update()}
            if(a==='!'){t.clear()}
            if(a==='0'){t.autoClear=false}
            if(a==='1'){t.autoClear=true};return t}
        s.eMV=function(a){this.enableMouseOver(a);return this}
        s.eMO=function(a){this.mouseMoveOutside(a);return this}
        s.eDE=function(a){this.enableDOMEvents(a);return this}
        s.nSt=function(a){var t=this;
            if(is===undefined(a)){return t.nextStage}
            t.nextStage=a;return t}
        s.tOU=function(a){var t=this;
            if(is===undefined(a)){return t.tickOnUpdate}
            t.tickOnUpdate=a;return t}
        s.mMO=function(a){var t=this;
            if(is===undefined(a)){return t.mouseMoveOutside}
            t.mouseMoveOutside=a;return t}
        s.mX=function(){return this.mouseX}
        s.mY=function(){return this.mouseY}
        s.mB=function(){return this.mouseInBounds}
        s.aH=function(a,b,c){var t=this,h=H();
            t.a(h);
            if(iS(a)){h.g.f(a)};
            if(iF(a)){a(h.g,h,t)};
            if(iF(b)){b(h.g,h,t)};
            return h}

        s.b=function(a,f,v,p,F){var t=this;
            //a=a||t;

            if(v!==undefined){v=$V(v);if(v.x<=10){v.x*=100};
                if(v.y<=10){v.y*=100}}
            if(p==='c'){p=[($c.w()-v.x)/2,($c.h()-v.y)/2]};p=$V(p);
            B(a,function(b,t){
                b.x=p.x;b.y=p.y;$do(b,f);t.a(b);
                _.e(F,function(f){b[f]()})},v);
            return t}

        s.bF=function(a,pc,f){
            pc=pc||1//?
            var t=this;
            t.b(a,{x:t.w()*pc,y:t.h()*pc},f);
            return t
        }
        s.percent=function(a,b,c){var t=this,b=b||1;
            t.b(a,{x:t.w()*b,y:t.h()*b},c);
            return t};
        s.wow=function(){var t=this;
            B(t,function(b){t.S.a(b);
                TR(b)});
            return t}//t()
        return s};
    tB=function(a){
        if(iI(a)){a=B$(a)};
        if(iB(a)){
            a=sDo(a);
            a.i=a.image};
        return a};
    xB=function f(a,b,c,d){

        if(c){
            I(a,function(i){
                var c=C(c);
                c.X.fD(i);
                f(c.C,b,null,d)
            });
            return}

        if(iI(i)){
            if(i.src){
                return $do($do(tB(a),b),d)
            }}

        I(a,function(i){
            f(i,b,null,d)
        });

        return}
    B=function(a,b){
        I(a,function(i){

            var bm=sDo(B$(i));

            if(iO(b)){b.addChild(b)};
            if(iS(b));W[b]=bm;
            if(iF(b)){b(bm)}


        })}
//nLoad=function(a){return !iB(tB(a))}
// a _  $ $$ bn cl c CC Ch draw em eL F gCh K h hit i-img mh mt mCh n-name O rCh S tf tk tS T u U w X x/y:(x/y), z


    animation=function(){

        sAN=function(a,b){a=sDo(a)
            gS="gotoAndStop",gP="gotoAndPlay",sPa="setPaused",sPo="setPosition";
            a.p=function(a,b){var t=this;
                if(t[sPa]) {t[sPa](false)} else {t.play()}
                if(b!==undefined){
                    if(t[gP]) {t[gP](a)}
                    if(t[sPo]) {t[sPo](a,b)}
                    return t}}
            a.s=function(a,b){var t=this;
                if(t[sPa]) {t[sPa](true)} else {t.stop()}
                if(b!==undefined){
                    if(t[gS]) {t[gS](a)}
                    if(t[sPo]) {t[sPo](a,b)}
                    return t}}
            return t}






        sSp=function(s){s=sAN(s);
            s.gt=function(){var t=this;
                return {
                    a: t.getAnimation(),
                    A: t.getAnimations(),
                    f: t.getFrame(),
                    fb: t.getFrameBounds(),
                    nf: t.getNumFrames(),
                    fr: framerate}}
            s.$$$=function(a){t.on('complete',a)}
            return s}


        sTW=function(W){W=sAn(W)
            W.pos=function(a,b){var t=this;
                if(a===undefined){return t.position}
                setPosition(a,b);return t}
            W.iGP=function(a){var t=this,iGP="ignoreGlobalPause";
                if(a===undefined){return t[iGP]}
                t[iGP]=a;return t}
            W.dur=function(a){var t=this,d="duration";
                if(a===undefined){return t[d]}
                t[d]=a;return t}
            W.lp=function(a){var t=this;
                if(a===undefined){return t.loop}
                t.loop=a;return t}
            return W}


        sTw=function(w){w=sTW(w)
            w.cl=w.call; w.gt=w.get; w.wt=w.wait;w.st=w.set;
            w.tw=function(a){var t=this;
                if(a===undefined){return t.hasActiveTweens }
                return t}
            w.rm=function(a){
                var t=this;
                if(a===undefined){t.removeAllTweens }
                t.removeTweens(a);
                return t}
            w.tg=function(){return this.target}
            w.tk=function(a,b){this.tick(a,b);return this}
            return w}









        sTl=function(l){l=sTW(l);
            l.ad=function(a,b){var t=this;
                if(iS(a)){t.addLabel(a,b)}
                if(iO(a)){t.addTween(a,b)}
                return t}
            l.cL=function(){return t.getCurrentLabel()}
            l.lb=function(a){var t=this;
                if(a===undefined){return t.getLabels()}
                if(iO(a)){t.setLabels(a);return t}
                if(iN(a)||iS(a)){return resolve(a)}
                return t}
            l.rm=function(a){this.removeTween(a);return this}
            l.uD=function(a){var t=this;
                if(a===undefined){t.updateDuration()}
                if(iN(a)){t.tick(a)}
                return t}
            return l}







        sMc=function(m){var t=this,m=sAN(sCt(m));
            m.tl=sTl(m.timeline);
            m.lb=m.getLabels;m.cL=m.getCurrentLabel;

            m.sP=function(a){var t=this,sp="startPosition";
                if(a===undefined){return t[sp]}; t[sp]=a;return t}

            m.mo=function(a){var t=this;
                if(a===undefined){return t.mode};t.mode=a;return t}

            m.lp=function(a){var t=this;
                if(a===undefined){return t.loop};t.loop=a;return t}

            m.aR=function(a){var t=this,r="autoReset";
                if(a===undefined){return t[r]};t[r]=a;return t}

            m.aE=function(a){var t=this,e="actionsEnabled";
                if(a===undefined){return t[e]};t[e]=a;return t}

            return m}
    };







// x.clTx=function(d){var t=this;t.p().p(100,100).t(200,100).t(150,300).p('!');return t}
//c.ppp=function(x,y){this.dc(x,y);$P.push({x:x,y:y})}//sy(c,'white','black',3);
//c.cut2=function(p){var p=p||$P,p1=p.shift(),t=this;t.P(p1.x,p1.y);_.each(p,function(p){t.k(p.x,p.y)});t.P(0);p=[];return t}//x.fill()?
//c.cut3=function(){return this.clPath().C().J().I()};
// c.id=function(o){var t=this,a=_.rs(arguments);var gp=function(c,d){return this.p(this.g(c),d)},cp2=function(y,d){return this.p(cD(y.g(),d))}
// if(o=='g'){t.dat=t.X.gd.apply(t.X,a)};if(o=='p'){t.X.pd.apply(t.X,a)}}
//c.cp=function(y,d){return this.P(cD(y.g(),d))}
//c.gp=function(c,d){return this.P(this.g(c),d)};



    $(function(){

        // s=c.s; T.p();T.o(s);
        // B('me',function(b){s.a(b);z=b},2,[400,40])

        // if(v){I(a,function(i){B(C(v).d.m(i),f,null,n)})}
        //d=c.d;$l('d!')
        //d.s('white').p().p(0,0).l(300,30).s();
        // d.s('white').p(400,0).l(300,800).s().p().p(500,0).l(600,800).s('red').s()
        //.b();d.m(0,0);d.l(300,300);d.s();
        //g=G(c);
        //g.s('blue').f('pink').drawRoundRect(10,10,400,400,10).drawRoundRectComplex (700,100,500,300,1,2,20,50).d()
        //g.s('red').f('geen').ss(10).drawPolyStar( 200,300,50, 8,10, 30).d()

    })


//o.ON=function(a,b){this.al(a,b);return this}
//o.F=function(){var t=this;t.ral();return t}
//g.pp=function(x,y){this.dc(x,y);$P.push({x:x,y:y})}//sy(c,'white','black',3);
//g.clPath=function(p){p=p||$P;var p1=p.shift(),t=this;t.g.moveTo(p1.x,p1.y);
// _.each(p,function(p){t.g.lineTo(p.x,p.y)});t.g.closePath();p=[];return t}//x.fill()?
//g.cut=function(){return this.X().clPath().C().J().I()}

//$t="tick";//function $p(a){return '/png/'+a+'.png'}
//function txt(a,x,y,z,r){c.t();var tt=new cj.Text(a||"YANO", z||"50px ariel", r||"blue");tt.textBaseline="alphabetic";tt.x=x||100;tt.y=y||100;c.a(tt);return tt}
//function sE(e){return e}
// t.m=function(a){if(a){T.timingMode=a;return this};return T.timingMode}
//t.a=o.a;
//t.o=function(r){var t=this;t.on('$t',r);return t};
//t.oT=function(f){T.a('tick',function(){f()})};
//t.tO=function(f){T$.a(f)};//if(c){t.a("tick",c.s)};
//function fS(a,f){if(!iS(a)){return a};return f(a)}


    $l('movie')



    Mc=function(m){var  o=Anim(m), x=o.x,


        mo="mode",    ae="actionsEnabled" ,

        ar="autoReset",  gcl="getCurrentLabel",

        gts="gotoAndStop",  gtp="gotoAndPlay",

        bd= "buildDate", cf="currentFrame", lp="loop",

        pa="paused",  stP="startPosition",  ind="INDEPENDENT" ,

        SF="SINGLE_FRAME",    sy="SYNCHED",tl="timeline" ;

        o.p=function(a,b){x.play();return o}
        o.s=function(a,b){x.stop();return o}

        o.tl=function(){ Tl(x[tl]);return o}

        o.lb=function(){return x[gl](); return o}

        x.cL=function(){return x[gcl]()}

        o.sP=function(a){if(U(a)){return x[sP]};
            x[sP]=a;  return o}

        o.mo=function(a){if(U(a)){return x[m]};
            x[mo]=a;  return o}
        o.lp=function(a){if(U(a)){return x[l]}; x[lp]=a;  return o}

        o.aR=function(a){ if(U(a)){return x[ar]};  x[ar]=a; return o}

        o.aE=function(a){if(U(a)){return x[ae]}; x[ae]=a; return o}
        return m}
