crs=function(a){return B(A(a,'/'),'.png')}
C$=createjs
T$=C$.Ticker
Ct$=function(a){return new C$.Container(a)}
S$=function(a){return new C$.Stage(a)}
B$=function(a){return new C$.Bitmap(a)}
Q$=function(){return new C$.LoadQueue(true)}
G$=function(){return new C$.Graphics()}
H$=function(a){return new C$.Shape(a)}
J$=function(a){if(a.images){a=SS$(a)}
    return new C$.Sprite(a)}

SS$=function(a){return new C$.SpriteSheet(a)}

W$=C$.Tween

Q$=function(){return new createjs.LoadQueue(true) }


Ed=function(x){
    Events={
        $:'click',$$:'dblclick',
        d:'mousedown',o:'mouseout',v:'mouseover',
        ro:'rollout',rv:'rollover',
        m:'pressmove' ,u:'pressup',
        e:"mouseenter",l:"mouseleave",
        sd:"stagemousedown",sm:"stagemousemove",su:"stagemouseup",
        de:"drawend",ds:"drawstart",
        t:'tick',te:"tickend",ts:"tickstart"}
    sEventObj=function(e){return {t: e.type,
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
    var o=function f(){
        if(f.main){return f.main.apply(f, arguments)}
        return f.obj||false}
    o.super=true
    o.o=function(a, b, c, d, e){

        if(U(b)){return x.hasEventListener(a)}

        if(Events[a]){a=Events[a]}

        if(F(b.obj)){b=b.obj()}

        if(F(b)){b=function(e){

            b(sEventObj(e),e)}}

        return x.on(a,b,c,d,o,e)}
    o.e=function(a,b,c){x.dispatchEvent(a,b,c);
        return a} // type, listener, useCapture
    o.O=function(a,b,c){
        if(!b){x.removeEventListener(a,b,c)}
        else{x.removeAllEventListeners(a)}
        return o}
    o.t=function(a,b,c,d){
        if(U(a)){return tk.t(o)}
        return o.o('t', a,b,c,d)}
    o.$=  function(a,b,c,d){return o.o('$', a,b,c,d)}
    o.$$= function(a,b,c,d){return o.o('$$',a,b,c,d)}
    o.str=function(){return x.toString()}
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

    tk=Ed(t)
    tk.main=function(a){
        if(!a){return tk.time()}
        if(N(a)){return tk.rate(a)}
        return tk.t(a)}
    tk.s=function(){t[sp](true)};
    tk.S=function(){return t[gp]()}
    tk.p=function(){t[sp](false)};
    tk.P=function(){return !tk.S()}
    tk.tog=function(){if(t[gp]()){tk.p()} else {tk.s()}}
    tk.reset=function(){t[r]()}
    tk.init=function(){t[it]()}

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
            mode:t[tm]}
        if(t[gtk]()){
            ob.mTickTime =t[mt]();
            ob.mFPS=t[mf]()}
        return cL(ob)}

    tk.rate=function(a,b,c){
        if(a>10){ t[sf](a) }
        else{t[si]( a * 1000 )}}}

Do = function(x){
    var  tb="getTransformedBounds",
        iv="isVisible",
        gs="getStage",
        cdu="getCacheDataURL",
        gm="getMatrix",
        cm="getConcatenatedMatrix",
        lg="localToGlobal",
        ll="localToLocal",
        gl="globalToLocal",
        cc="cacheCanvas",
        cd="suppressCrossDomainErrors",
        me="mouseEnabled",
        fi="filters",
        ha="hitArea",
        ci="cacheID",
        al="alpha",
        ma="mask",
        n="name",
        co="compositeOperation",
        pa="parent",rx="regX",ry="regY",
        rt="rotation",sx="scaleX",sy="scaleY",kx="skewX",ky="skewY",
        ot="onTick",cu="cursor",
        vs="visible",sd="shadow",
        ca="cache",cl="clone",
        ht="hitTest",
        st="setTransform",
        upc="updateCache",uc="uncache",
        tl="translate",
        omd="onMouseDown",
        sb="setBounds",gb="getBounds",
        w="width",h="height",
        m = {tb:tb, v:iv,  s:gs,u:cdu,m:gm,  cm:cm, lg:lg, ll:ll,gl:gl},
        p = {a:al, c:cc, d:cd,  e:me,  f:fi, h:ha, i:ci,   kx:kx,
            ky:ky,  m:ma,  n:n,  o:co, p:pa, rx:rx,
            ry:ry,  r:rt, sx:sx,  sy:sy, t:ot, u:cu,  v:vs,  w:sd}

    var o=Ed(x)

    o.obj=function(){ return(x) }
    o.ob=x
    o.x=function(a){if(U(a)){return x.x}
        x.x=a
        return o}

    o.y=function(a){if(U(a)){return x.y}
        x.y=a
        return o}

    o.mt=function(x,y){var v=$V(x,y)
        o.x(v.x)
        o.y(v.y)
        return o}

    //o.vx=0;o.vy=0
    //tk(function(){ o.x(o.x()+o.vx);  o.y(o.y()+o.vy)  })

    o.halt=function(){

        o.vx=0

        o.vy=0
    }

    o.bn=function(a,b,c,d){
        if(U(a)){return x[gb]}
        x[sb](a,b,c,d)
        return o}


    o.w=function(){return o.bn()[w]*x[sx]};

    o.h=function(){return o.bn()[h]*x[sy]}

    o.cent=function(X,Y){ var g=G(arguments)
        if(g.p){ o.cent(o.w()/2,
            o.h()/2);return o   }

        if(!x){
            return $V(
                o.x+o.w()/2,
                o.y+o.h()/2)}

        o.x(X-o.w()/2,Y-o.h()/2)

        return o}

    o.met=function(a,b,c){return x[m[a]](b,c)}

    o.pop = function(a,b){

        if(U(a)){_e(p,function(k,v){

            ob[v]=x[k]});
            return ob}

        if(U(b)){return x[p[a]]};
        if(S(a)){x[p[a]]=b}
        if(O(a)){x.set(a)}

        return o}

    o.tl=function(a,b){
        x[tl](a,b);return o}

    o.sk=function(a,b){

        x[kx]=a;
        x[ky]=b||a;
        return o}

    o.sc=function(a){

        x[sx]=x[sy]=a;

        return o

    } //working ex: Spr(SS,function(yy,zz){y=yy;z=zz},s)



    //o.onMouseDown=function(a){x[omd]=a;return o}
    //o.clone = x[cl];
    //o.hitTest = x[ht];
    //o.setTransform = x[st];
    //o.cache = function(){var g=arguments;if(U(a)){x[uc]()} else if(U(b)){x[uc](a)} else {x[ca].apply(x,g)}return o}
    //o.unCache=function(a){x[uc](a);return o}
    //o.hyp=function(a){hyp(a,x); return o}
    //o.mag=function(a){if(a=='k'){SK(x)};  if(a=='c'){SC(x)}; if(a=='r'){RT(x)}; if(a=='l'){SL(x)}; return o}
    return o}


Bm=function(a,b){// if(I(a)){return B$(a) }
    im(a,function(i){
        var g=Do(B$(i))
        if(F(b)){b(g)} else{$w[b]=g}})
    return a}


Ct=function(x){
    var ac = "addChild",  aca ="addChildAt",  nc="getNumChildren",  ca="getChildAt",
        cbn="getChildByName",  ch="children",gi="getChildIndex",  si="setChildIndex",
        so="sortChildren",  sw="swapChildren",  swa="swapChildrenAt", oup="getObjectsUnderPoint",
        ct="contains", vs="visible",  mc="mouseChildren", rac="removeAllChildren", rc="removeChild",
        rca="removeChildAt"

    x=x||Ct$()
    var o=Do(x)
    o.a=function(a, b){
        //if(U(a)){return x[ca](a)}
        //if(N(b)){ x[aca](a, b)}
        if(F(a.obj)){a=a.obj()}
        x[ac](a)
        return o}
    o.ch=function(a,b){
        if(U(a)){return x[nc]()}
        if(F(a)){x[so](a)}
        if(N(b)){x[swa](a,b)}
        if(O(b)){return x[sw](a,b)}
        if(O(a)){return x[ct](a)}
        return o}
    o.b=function(a,f,v,p,F){
        a=a||x;
        if(!U(v)){
            v=$V(v);
            if(v.x<=10){v.x*=100}
            if(v.y<=10){v.y*=100}}

        if(p==='c'){p=[($c.w()-v.x)/2, ($c.h()-v.y)/2]}
        p=$V(p)
        Bm(a, function(b,x){
            b.x(p.x);b.y(p.y)
            $do(b,f); o.a(b);
            each(F,
                function(f){b[f]()})}, v)
        return o}

    o.gCh=function(a,b){
        if(O(a)){return x[gi](a)}
        if(N(b)){return x[oup](a,b)}
        if(N(a)){return x[ca](a)}
        if(S(a)){return x[cbn](a)}
        if(O(a)&&N(b)){x[si](a,b)}
        return o}

    o.rm=function(a,b){
        if(U(a)){x[rac]()}
        if(O(a)){x[rc](a)}
        if(N(a)){x[rca](a)}
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

        ede="enableDOMEvents",  du="toDataURL", o

    x=S$(x)
    o=Ct(x)

    o.u=function(a){
        if(U(a)){x[ud]()}
        if(a==='!'){x[cl]()}
        if(a==='0'){x[ac] = false}
        if(a==='1'){x[ac] = true}
        return o}

    o.mx=function(){return x[mx]}
    o.my=function(){return x[my]}
    o.du=function(){return x[du]()}

    //if(z!==false){tk(x)}

    //o.eDE=function(a){x[ede](a);return o}
    //o.eMO=function(a){x[mmo](a);return o}
    //o.mMO=function(a){if(U(a)){return x[mmo]}; x[mmo]=a;return o}
    //o.mIB=function(){if(U(a)){return x[mib]}; return x[mib]}
    //o.eMO=function(a){x[emo](a);return o}
    //o.nS=function(a){if(U(a)){return x[ns]} x[ns]=a;return o}
    //o.tOU=function(a){if(U(a)){return x[tou]}; x[tou]=a; return o}
    //o.hE=function(a){if(U(a)){return x[he]}; x[he]=a; return o}

    return o}

Ql=function(a){

    var q=Q$()

    q.i=[]

    q.l=function(a,b,c){if(U(a)){q.load()}

        else if(A(a)){q.loadManifest(a,b,c)}

        else if(a.src){q.loadFile(a,b,c)}

        else if(S(a)){q.loadFile(_s(a),b,c)}

        else if(O(a)){
            if(a.c){q.c(a.c)}
            if(a.f){q.f(a.f)}
            if(a.m){q.l(a.m)}}

        return q}

    q.f=function(a,b,c){

        q.on('fileload', a, b, c)

        return q}

    q.f(function(e){
        if(e.item.type=="image"){
            q.i[e.item.id]=e.result}})

    q.c=function(a,b,c){q.on("complete", function(){ a(q.i)}, b, c)
        return q}

    q.gr=function(a){return q.getResult(a)}

    q.gi=function(a){return q.getItem(a)}


    if(a){q.l(a)}

    return q}

Mf=function(a){

    var g=G(arguments),mf=[]

    _e(g, function(v,k){mf.push({src:src(v), id:v})})

    return mf}


makeMan=function(a){return _a(Mf,_m(a.images, function(i){return crs(i)}))}




tkr()

