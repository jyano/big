///////////////////d.ln=function(a,b,c){ed[ael](a,b,c);return d}; d.lT=function(s){return d.ln('tick',s)}
//iSt = function(a){return c$(_ts(a),"Stage")}

C$=createjs; T$=C$.Ticker;

Ct$=function(a){return new C$.Container(a)}; S$=function(a){return new C$.Stage(a)}
B$=function(a){return new C$.Bitmap(a)}; Q$=function(){return new C$.LoadQueue(true)}
G$=function(){return new C$.Graphics()};H$=function(a){return new C$.Shape(a)}
J$=function(a){return new C$.Sprite(a)}; P$=SS$=sS$=function(a){return new C$.SpriteSheet(a)}
C$.w=C$.Tween;C$.w.g=C$.w.get; C$.l=C$.Timeline; C$.e=C$.Ease;  C$.$=C$.Sound; C$.f=C$.Filter; C$.m=C$.Matrix2D;//C$.u=C$.SpriteSheetUtils; C$.r=C$.SpriteSheetBuilder;


Ed = function(x){var o={obj:x},
    de="dispatchEvent",
    hl="hasEventListener",
    it="initialize",
    ts="toString",
    rl="removeEventListener",
    ral="removeAllEventListeners",

    m={
        $:'click',$$:'dblclick',d:'mousedown',
        o:'mouseout',m:'pressmove',v:'mouseover',
        u:'pressup',ro:'rollout',r:'rollover'
    };

    o.hasEventListenerl=function(a){return x[hl](a)}



    o.ts=function(){ return x[ts]() }
    o.de=function(a,b,c){ x[de](a,b,c); return a }
    o.f=x.off;
    o.F=function(a,b,c){ if(!U(b)){x[rl](a,b,c)} else{x[ral](a)} return a }
    o.o=function(a,b,c,d,e){ return x.on(a,b,c,d,e) }
    o.t=function(a,b,c,d){ return o.o('tick',a,b,c,d) };
    o.m=function(a,b,c,d){ return o.o(m[a],b,c,d) }
    o.$=function(a,b,c,d,e){ return o.m('$',b,c,d,e) }
    o.$$=function(a,b,c,d,e){ return o.m('$$',b,c,d,e) }

    return o}
Do = function(o){o=Ed(x);  var x=o.obj, ob={},
    tb="getTransformedBounds",   iv="isVisible", gs="getStage",  cdu="getCacheDataURL",
    gm="getMatrix",  cm="getConcatenatedMatrix",
    lg="localToGlobal", ll="localToLocal",  gl="globalToLocal",
    cc="cacheCanvas",   cd="suppressCrossDomainErrors",
    me="mouseEnabled",    fi="filters",   ha="hitArea",    ci="cacheID",
    al="alpha",  ma="mask",    n="name",  co="compositeOperation",     pa="parent",
    rx="regX",    ry="regY", rt="rotation",    sx="scaleX", sy="scaleY", kx="skewX",    ky="skewY",
    ot="onTick",   cu="cursor",    vs="visible",     sd="shadow",  ca="cache",
    cl= "clone",  ht="hitTest",  st="setTransform",    upc="updateCache",  uc="uncache",  tl="translate",
    omd="onMouseDown",    sb="setBounds",
    gb="getBounds",

    w="width",h="height",

    m = {tb:tb, v:iv,  s:gs,u:cdu,m:gm,  cm:cm, lg:lg, ll:ll,gl:gl},
    p = {a:al, c:cc, d:cd,  e:me,  f:fi, h:ha, i:ci,   kx:kx,  ky:ky,  m:ma,  n:n,  o:co,
        p:pa, rx:rx,  ry:ry,  r:rt, sx:sx,  sy:xy, t:ot, u:cu,  v:vs,  w:sd};

    o.vx = 0; o.vy = 0;
    o.met=function(a,b,c){
        return x[m[a]](b,c)}
    o.pop = function(a,b){
        if(U(a)){each(p,function(k,v){ob[v]=x[k]});return ob}
        if(U(b)){return x[p[a]]};
        if(S(a)){x[p[a]]=b};if(O(a)){x.set(a)}
        return o}
    o.w=function(){return o.bn()[w]*x[sx]};
    o.h=function(){return o.bn()[h]*x[sy]}
    o.x=function(a){if(U(a)){return x.x} x.x=a; return o}
    o.y=function(a){if(U(a)){return x.y} x.y=a; return o}
    o.bn=function(a,b,c,d){ if(U(a)){return x[gb]}   x[sb](a,b,c,d); return o}
    o.uca=function(a){x[uc](a);return o}
    o.mt=function(x,y){var v=$V(x,y);x.x=v.x;x.y=v.y;return o}
    o.zz=function(c){o.cent(o.w()/2,o.h()/2)}
    o.onMouseDown=function(a){x[omd]=a;return o}
    o.halt=function(){o.vx=0;o.vy=0}

    o.cent=function(X,Y){if(!x){return $V(   o.x+o.w()/2,   o.y+o.h()/2  )}
        o.x( X-o.w()/2, Y-o.h()/2 );  return o}

    o.tl=function(a,b){
        x[tl](a,b);return o}
    o.sk=function(a,b){
        x[kx]=a;
        x[ky]=b||a;
        return o}

    o.sc=function(a,b){
        x[sx]=a;x[sy]=b|a;
        return o}

    o.clone = x[cl];
    o.hitTest = x[ht];
    o.setTransform = x[st];
    o.cache = function(){var g=arguments;
        if(U(a)){x[uc]()} else if(U(b)){x[uc](a)} else {x[ca].apply(x,g)}
        return o}
    o.hyp=function(a){
        hyp(a,x);
        return o}
    o.mag=function(a){
        if(a=='k'){SK(x)};
        if(a=='c'){SC(x)};
        if(a=='r'){RT(x)};
        if(a=='l'){SL(x)};
        return o}

    tk(function(){
        o.x(o.x()+o.vx);o.y(o.y()+o.vy)
    })

    return o}
Ct = function(o){
    o=Do(o);

    var x=o.obj, ac = "addChild",  aca ="addChildAt",  nc="getNumChildren",
        ca="getChildAt",  cbn="getChildByName",  ch="children",
        gi="getChildIndex",  si="setChildIndex",
        so="sortChildren",  sw="swapChildren",  swa="swapChildrenAt",
        oup="getObjectsUnderPoint",  ct="contains",
        vs="visible",  mc="mouseChildren", rac="removeAllChildren",
        rc="removeChild", rca="removeChildAt";

    o.gc=function(a,b){
        if(O(a)){return x[gi](a)}
        if(N(b)){return x[up](a,b)}
        if(N(a)){return x[ca](a)}
        if(S(a)){return x[cbn](a)}
        if(O(a)&&N(b)){x[si](a,b)}
        return o}
    o.rm=function(a,b){if(U(a)){x[rac]()}

        if(O(a)){x[rc](a)};if(N(a)){x[rca](a)};

        return o}
    o.a=function(a,b){
        if(U(a)){return x[ca](a)}
        if(a.obj){a=a.obj}
        if(N(b)){x[aca](a,b)} else{x[ac](a)}
        return o}
    o.hide=function(){each(x[ch],function(a){a[vs]=false});return o}
    o.oup=function(a,b){return x[oup](a,b)}
    o.mc=function(a){if(U(a)){return x[mc]};x[mc]=a;return o}

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

    o.bFit=function(a,pc,f){
        pc=pc||1;
        o.b(a,
            {x:o.w()*pc,
                y:o.h()*pc},f);
        return o}

    o.bPerc=function(a,b,c){
        var b=b||1;
        o.b(a,{x:t.w()*b, y:t.h()*b}, c);
        return o};

    o.wow=function(){
        Bm(x,function(b){o.a(b);
            TR(b)});
        return o}

    return o}
Stg = function(c,z){
    var o=Ct(S$(c)), x=o.obj,

        u="update",
        cl="clear",
        ac="autoClear",
        ns="nextStage",
        tou="tickOnUpdate",
        mmo="mouseMoveOutside",

        mx="mouseX",
        my="mouseY",

        emo="enableMouseOver",   mib="mouseInBounds",
        ede="enableDOMEvents", du="toDataURL";

    o.u=function(a){
        if(U(a)){x[u]()}
        if(a==='!'){x[cl]()};
        if(a==='0'){x[ac] = false};
        if(a==='1'){x[ac] = true};
        return o}

    o.eMV=function(a){x[emo](a);return o}
    o.eMO=function(a){x[mmo](a);return o}
    o.eDE=function(a){x[ede](a);return o}
    o.nSt=function(a){if(U(a)){return x[ns]} x[ns]=a;return o}
    o.tOU=function(a){if(U(a)){return x[tou]} x[tou]=a;return o}
    o.mMO=function(a){if(U(a)){return x[mmo]} x[mmo]=a;return o}

    o.mX=function(){return x[mx]}
    o.mY=function(){return x[my]}

    o.mB=function(){return x[mib]}
    o.addShape=function(a,b,c){var h=H();
        o.a(h);
        if(S(a)){h.g.f(a)};
        if(F(a)){a(h.g,h,t)};
        if(F(b)){b(h.g,h,t)};
        return h}
    o.du=function(){return x[du]()}
    o.tt=function(){tk(o);return o};
    if(z!==false){o.tt()}
    return o}







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





Bm = function(a,z){Im(a, function(i){
    var b=Do(B$(i));
    if(F(z)){z(b,b.obj)}
    else{$w[z]=b}})}}


$(function(){///////////////////


    c = can(); s = Stg(c); me = new Image;


    $(me).load( function(){ j=B$(me); s.a(j) } )


    me.src = '/me.png';



})//j=Spr(sS$(SS))





tic=function(a){ tick = a||function(){ stg.u(); $l('hi') }}

///////////////////d.ln=function(a,b,c){ed[ael](a,b,c);return d}; d.lT=function(s){return d.ln('tick',s)}
//iSt = function(a){return c$(_ts(a),"Stage")}

C$=createjs; T$=C$.Ticker;

Ct$=function(a){return new C$.Container(a)}; S$=function(a){return new C$.Stage(a)}
B$=function(a){return new C$.Bitmap(a)}; Q$=function(){return new C$.LoadQueue(true)}
G$=function(){return new C$.Graphics()};H$=function(a){return new C$.Shape(a)}
J$=function(a){return new C$.Sprite(a)}; P$=SS$=sS$=function(a){return new C$.SpriteSheet(a)}
C$.w=C$.Tween;C$.w.g=C$.w.get; C$.l=C$.Timeline; C$.e=C$.Ease;  C$.$=C$.Sound; C$.f=C$.Filter; C$.m=C$.Matrix2D;//C$.u=C$.SpriteSheetUtils; C$.r=C$.SpriteSheetBuilder;


Ed = function(x){var o={obj:x},
    de="dispatchEvent",
    hl="hasEventListener",
    it="initialize",
    ts="toString",
    rl="removeEventListener",
    ral="removeAllEventListeners",

    m={
        $:'click',$$:'dblclick',d:'mousedown',
        o:'mouseout',m:'pressmove',v:'mouseover',
        u:'pressup',ro:'rollout',r:'rollover'
    };

    o.hasEventListenerl=function(a){return x[hl](a)}



    o.ts=function(){ return x[ts]() }
    o.de=function(a,b,c){ x[de](a,b,c); return a }
    o.f=x.off;
    o.F=function(a,b,c){ if(!U(b)){x[rl](a,b,c)} else{x[ral](a)} return a }
    o.o=function(a,b,c,d,e){ return x.on(a,b,c,d,e) }
    o.t=function(a,b,c,d){ return o.o('tick',a,b,c,d) };
    o.m=function(a,b,c,d){ return o.o(m[a],b,c,d) }
    o.$=function(a,b,c,d,e){ return o.m('$',b,c,d,e) }
    o.$$=function(a,b,c,d,e){ return o.m('$$',b,c,d,e) }

    return o}
Do = function(o){o=Ed(x);  var x=o.obj, ob={},
    tb="getTransformedBounds",   iv="isVisible", gs="getStage",  cdu="getCacheDataURL",
    gm="getMatrix",  cm="getConcatenatedMatrix",
    lg="localToGlobal", ll="localToLocal",  gl="globalToLocal",
    cc="cacheCanvas",   cd="suppressCrossDomainErrors",
    me="mouseEnabled",    fi="filters",   ha="hitArea",    ci="cacheID",
    al="alpha",  ma="mask",    n="name",  co="compositeOperation",     pa="parent",
    rx="regX",    ry="regY", rt="rotation",    sx="scaleX", sy="scaleY", kx="skewX",    ky="skewY",
    ot="onTick",   cu="cursor",    vs="visible",     sd="shadow",  ca="cache",
    cl= "clone",  ht="hitTest",  st="setTransform",    upc="updateCache",  uc="uncache",  tl="translate",
    omd="onMouseDown",    sb="setBounds",
    gb="getBounds",

    w="width",h="height",

    m = {tb:tb, v:iv,  s:gs,u:cdu,m:gm,  cm:cm, lg:lg, ll:ll,gl:gl},
    p = {a:al, c:cc, d:cd,  e:me,  f:fi, h:ha, i:ci,   kx:kx,  ky:ky,  m:ma,  n:n,  o:co,
        p:pa, rx:rx,  ry:ry,  r:rt, sx:sx,  sy:xy, t:ot, u:cu,  v:vs,  w:sd};

    o.vx = 0; o.vy = 0;
    o.met=function(a,b,c){
        return x[m[a]](b,c)}
    o.pop = function(a,b){
        if(U(a)){each(p,function(k,v){ob[v]=x[k]});return ob}
        if(U(b)){return x[p[a]]};
        if(S(a)){x[p[a]]=b};if(O(a)){x.set(a)}
        return o}
    o.w=function(){return o.bn()[w]*x[sx]};
    o.h=function(){return o.bn()[h]*x[sy]}
    o.x=function(a){if(U(a)){return x.x} x.x=a; return o}
    o.y=function(a){if(U(a)){return x.y} x.y=a; return o}
    o.bn=function(a,b,c,d){ if(U(a)){return x[gb]}   x[sb](a,b,c,d); return o}
    o.uca=function(a){x[uc](a);return o}
    o.mt=function(x,y){var v=$V(x,y);x.x=v.x;x.y=v.y;return o}
    o.zz=function(c){o.cent(o.w()/2,o.h()/2)}
    o.onMouseDown=function(a){x[omd]=a;return o}
    o.halt=function(){o.vx=0;o.vy=0}

    o.cent=function(X,Y){if(!x){return $V(   o.x+o.w()/2,   o.y+o.h()/2  )}
        o.x( X-o.w()/2, Y-o.h()/2 );  return o}

    o.tl=function(a,b){
        x[tl](a,b);return o}
    o.sk=function(a,b){
        x[kx]=a;
        x[ky]=b||a;
        return o}

    o.sc=function(a,b){
        x[sx]=a;x[sy]=b|a;
        return o}

    o.clone = x[cl];
    o.hitTest = x[ht];
    o.setTransform = x[st];
    o.cache = function(){var g=arguments;
        if(U(a)){x[uc]()} else if(U(b)){x[uc](a)} else {x[ca].apply(x,g)}
        return o}
    o.hyp=function(a){
        hyp(a,x);
        return o}
    o.mag=function(a){
        if(a=='k'){SK(x)};
        if(a=='c'){SC(x)};
        if(a=='r'){RT(x)};
        if(a=='l'){SL(x)};
        return o}

    tk(function(){
        o.x(o.x()+o.vx);o.y(o.y()+o.vy)
    })

    return o}
Ct = function(o){
    o=Do(o);

    var x=o.obj, ac = "addChild",  aca ="addChildAt",  nc="getNumChildren",
        ca="getChildAt",  cbn="getChildByName",  ch="children",
        gi="getChildIndex",  si="setChildIndex",
        so="sortChildren",  sw="swapChildren",  swa="swapChildrenAt",
        oup="getObjectsUnderPoint",  ct="contains",
        vs="visible",  mc="mouseChildren", rac="removeAllChildren",
        rc="removeChild", rca="removeChildAt";

    o.gc=function(a,b){
        if(O(a)){return x[gi](a)}
        if(N(b)){return x[up](a,b)}
        if(N(a)){return x[ca](a)}
        if(S(a)){return x[cbn](a)}
        if(O(a)&&N(b)){x[si](a,b)}
        return o}
    o.rm=function(a,b){if(U(a)){x[rac]()}

        if(O(a)){x[rc](a)};if(N(a)){x[rca](a)};

        return o}
    o.a=function(a,b){
        if(U(a)){return x[ca](a)}
        if(a.obj){a=a.obj}
        if(N(b)){x[aca](a,b)} else{x[ac](a)}
        return o}
    o.hide=function(){each(x[ch],function(a){a[vs]=false});return o}
    o.oup=function(a,b){return x[oup](a,b)}
    o.mc=function(a){if(U(a)){return x[mc]};x[mc]=a;return o}

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

    o.bFit=function(a,pc,f){
        pc=pc||1;
        o.b(a,
            {x:o.w()*pc,
                y:o.h()*pc},f);
        return o}

    o.bPerc=function(a,b,c){
        var b=b||1;
        o.b(a,{x:t.w()*b, y:t.h()*b}, c);
        return o};

    o.wow=function(){
        Bm(x,function(b){o.a(b);
            TR(b)});
        return o}

    return o}
Stg = function(c,z){
    var o=Ct(S$(c)), x=o.obj,

        u="update",
        cl="clear",
        ac="autoClear",
        ns="nextStage",
        tou="tickOnUpdate",
        mmo="mouseMoveOutside",

        mx="mouseX",
        my="mouseY",

        emo="enableMouseOver",   mib="mouseInBounds",
        ede="enableDOMEvents", du="toDataURL";

    o.u=function(a){
        if(U(a)){x[u]()}
        if(a==='!'){x[cl]()};
        if(a==='0'){x[ac] = false};
        if(a==='1'){x[ac] = true};
        return o}

    o.eMV=function(a){x[emo](a);return o}
    o.eMO=function(a){x[mmo](a);return o}
    o.eDE=function(a){x[ede](a);return o}
    o.nSt=function(a){if(U(a)){return x[ns]} x[ns]=a;return o}
    o.tOU=function(a){if(U(a)){return x[tou]} x[tou]=a;return o}
    o.mMO=function(a){if(U(a)){return x[mmo]} x[mmo]=a;return o}

    o.mX=function(){return x[mx]}
    o.mY=function(){return x[my]}

    o.mB=function(){return x[mib]}
    o.addShape=function(a,b,c){var h=H();
        o.a(h);
        if(S(a)){h.g.f(a)};
        if(F(a)){a(h.g,h,t)};
        if(F(b)){b(h.g,h,t)};
        return h}
    o.du=function(){return x[du]()}
    o.tt=function(){tk(o);return o};
    if(z!==false){o.tt()}
    return o}







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





Bm = function(a,z){Im(a, function(i){
    var b=Do(B$(i));
    if(F(z)){z(b,b.obj)}
    else{$w[z]=b}})}}


$(function(){///////////////////


    c = can(); s = Stg(c); me = new Image;


    $(me).load( function(){ j=B$(me); s.a(j) } )


    me.src = '/me.png';



})//j=Spr(sS$(SS))





tic=function(a){ tick = a||function(){ stg.u(); $l('hi') }}




///////////////////d.ln=function(a,b,c){ed[ael](a,b,c);return d}; d.lT=function(s){return d.ln('tick',s)}
//iSt = function(a){return c$(_ts(a),"Stage")}

C$=createjs; T$=C$.Ticker;

Ct$=function(a){return new C$.Container(a)}; S$=function(a){return new C$.Stage(a)}
B$=function(a){return new C$.Bitmap(a)}; Q$=function(){return new C$.LoadQueue(true)}
G$=function(){return new C$.Graphics()};H$=function(a){return new C$.Shape(a)}
J$=function(a){return new C$.Sprite(a)}; P$=SS$=sS$=function(a){return new C$.SpriteSheet(a)}
C$.w=C$.Tween;C$.w.g=C$.w.get; C$.l=C$.Timeline; C$.e=C$.Ease;  C$.$=C$.Sound; C$.f=C$.Filter; C$.m=C$.Matrix2D;//C$.u=C$.SpriteSheetUtils; C$.r=C$.SpriteSheetBuilder;


Ed = function(x){var o={obj:x},
    de="dispatchEvent",
    hl="hasEventListener",
    it="initialize",
    ts="toString",
    rl="removeEventListener",
    ral="removeAllEventListeners",
    m={$:'click',$$:'dblclick',d:'mousedown',
       o:'mouseout',m:'pressmove',v:'mouseover',
       u:'pressup',ro:'rollout',r:'rollover'};
  /////////
    o.hEL=function(a){return x[hl](a)}
    o.ts=function(){ return x[ts]() }
    o.de=function(a,b,c){ x[de](a,b,c); return a }
    o.f=x.off;
    o.F=function(a,b,c){ if(!U(b)){x[rl](a,b,c)} else{x[ral](a)} return a }
    o.o=function(a,b,c,d,e){ return x.on(a,b,c,d,e) }
    o.t=function(a,b,c,d){ return o.o('tick',a,b,c,d) };
    o.m=function(a,b,c,d){ return o.o(m[a],b,c,d) }
    o.$=function(a,b,c,d,e){ return o.m('$',b,c,d,e) }
    o.$$=function(a,b,c,d,e){ return o.m('$$',b,c,d,e) }
    return o}

Do = function(o){o=Ed(x);  var x=o.obj, ob={},
    tb="getTransformedBounds",   iv="isVisible", gs="getStage",  cdu="getCacheDataURL",
    gm="getMatrix",  cm="getConcatenatedMatrix",
    lg="localToGlobal", ll="localToLocal",  gl="globalToLocal",
    cc="cacheCanvas",   cd="suppressCrossDomainErrors",
    me="mouseEnabled",    fi="filters",   ha="hitArea",    ci="cacheID",
    al="alpha",  ma="mask",    n="name",  co="compositeOperation",     pa="parent",
    rx="regX",    ry="regY", rt="rotation",    sx="scaleX", sy="scaleY", kx="skewX",    ky="skewY",
    ot="onTick",   cu="cursor",    vs="visible",     sd="shadow",  ca="cache",
    cl= "clone",  ht="hitTest",  st="setTransform",    upc="updateCache",  uc="uncache",  tl="translate",
    omd="onMouseDown",    sb="setBounds",
    gb="getBounds", w="width",h="height",
    m = {tb:tb, v:iv,  s:gs,u:cdu,m:gm,  cm:cm, lg:lg, ll:ll,gl:gl},
    p = {a:al, c:cc, d:cd,  e:me,  f:fi, h:ha, i:ci,   kx:kx,  ky:ky,  m:ma,  n:n,  o:co, p:pa, rx:rx,  ry:ry,  r:rt, sx:sx,  sy:xy, t:ot, u:cu,  v:vs,  w:sd};
    //////////

    o.x=function(a){if(U(a)){return x.x} x.x=a; return o}
    o.y=function(a){if(U(a)){return x.y} x.y=a; return o}
    o.vx = 0; o.vy = 0; tk(function(){o.x(o.x()+o.vx); o.y(o.y()+o.vy) })
    o.halt=function(){o.vx=0;o.vy=0}

    o.cent=function(X,Y){if(!x){
        return $V(   o.x+o.w()/2,   o.y+o.h()/2  )}
        o.x( X-o.w()/2, Y-o.h()/2 );  return o}

    o.bn=function(a,b,c,d){ if(U(a)){return x[gb]}   x[sb](a,b,c,d); return o}
    o.w=function(){return o.bn()[w]*x[sx]};
    o.h=function(){return o.bn()[h]*x[sy]}
    o.mt=function(x,y){var v=$V(x,y);x.x=v.x;x.y=v.y;return o}
    o.zz=function(c){o.cent(o.w()/2,o.h()/2)}

    o.met=function(a,b,c){
        return x[m[a]](b,c)}
    o.pop = function(a,b){
        if(U(a)){each(p,function(k,v){ob[v]=x[k]});return ob}
        if(U(b)){return x[p[a]]};
        if(S(a)){x[p[a]]=b};if(O(a)){x.set(a)}
        return o}

    o.onMouseDown=function(a){x[omd]=a;return o}
    o.tl=function(a,b){x[tl](a,b);return o}
    o.sk=function(a,b){x[kx]=a;x[ky]=b||a;return o}
    o.sc=function(a,b){x[sx]=a;x[sy]=b|a;return o}
    o.clone = x[cl];
    o.hitTest = x[ht];
    o.setTransform = x[st];
    o.cache = function(){var g=arguments;if(U(a)){x[uc]()} else if(U(b)){x[uc](a)} else {x[ca].apply(x,g)}return o}
    o.unCache=function(a){x[uc](a);return o}

    o.hyp=function(a){
        hyp(a,x);
        return o}

    o.mag=function(a){
        if(a=='k'){SK(x)};
        if(a=='c'){SC(x)};
        if(a=='r'){RT(x)};
        if(a=='l'){SL(x)};
        return o}
    return o}

EaselContainer = Ct = function(o){
    o=Do(o);

    var x=o.obj, ac = "addChild",  aca ="addChildAt",  nc="getNumChildren",
        ca="getChildAt",  cbn="getChildByName",  ch="children",
        gi="getChildIndex",  si="setChildIndex",
        so="sortChildren",  sw="swapChildren",  swa="swapChildrenAt",
        oup="getObjectsUnderPoint",  ct="contains",
        vs="visible",  mc="mouseChildren", rac="removeAllChildren",
        rc="removeChild", rca="removeChildAt";

    o.gc=function(a,b){
        if(O(a)){return x[gi](a)}
        if(N(b)){return x[up](a,b)}
        if(N(a)){return x[ca](a)}
        if(S(a)){return x[cbn](a)}
        if(O(a)&&N(b)){x[si](a,b)}
        return o}
    o.rm=function(a,b){if(U(a)){x[rac]()}

        if(O(a)){x[rc](a)};if(N(a)){x[rca](a)};

        return o}
    o.a=function(a,b){
        if(U(a)){return x[ca](a)}
        if(a.obj){a=a.obj}
        if(N(b)){x[aca](a,b)} else{x[ac](a)}
        return o}
    o.hide=function(){each(x[ch],function(a){a[vs]=false});return o}
    o.oup=function(a,b){return x[oup](a,b)}
    o.mc=function(a){if(U(a)){return x[mc]};x[mc]=a;return o}

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

    o.bFit=function(a,pc,f){
        pc=pc||1;
        o.b(a,
            {x:o.w()*pc,
                y:o.h()*pc},f);
        return o}

    o.bPerc=function(a,b,c){
        var b=b||1;
        o.b(a,{x:t.w()*b, y:t.h()*b}, c);
        return o};

    o.wow=function(){
        Bm(x,function(b){o.a(b);
            TR(b)});
        return o}

    return o}

Stg = function(c,z){

    var o=Ct(S$(c)), x=o.obj,  u="update",  cl="clear",  ac="autoClear",
        ns="nextStage",  tou="tickOnUpdate", mmo="mouseMoveOutside",
        mx="mouseX", my="mouseY",
        emo="enableMouseOver",   mib="mouseInBounds",  ede="enableDOMEvents", du="toDataURL";

    o.u=function(a){
        if(U(a)){x[u]()}
        if(a==='!'){x[cl]()};
        if(a==='0'){x[ac] = false};
        if(a==='1'){x[ac] = true};
        return o}


    o.eMV=function(a){x[emo](a);return o}

    o.eMO=function(a){x[mmo](a);return o}

    o.eDE=function(a){x[ede](a);return o}

    o.nextStage=function(a){if(U(a)){return x[ns]} x[ns]=a;return o}

    o.tOU=function(a){if(U(a)){return x[tou]}; x[tou]=a; return o}

    o.mMove=function(a){if(U(a)){return x[mmo]}; x[mmo]=a;return o}

    o.mx=function(){return x[mx]}

    o.my=function(){return x[my]}


    o.mouseBounds=function(){return x[mib]}

    o.addShape=function(a,b,c){var h=H();
        o.a(h);
        if(S(a)){h.g.f(a)};
        if(F(a)){a(h.g,h,t)};
        if(F(b)){b(h.g,h,t)};
        return h}

    o.du=function(){return x[du]()}
    o.tt=function(){tk(o); return o};  if(z!==false){o.tt()}

    return o}



Bm = function(a,z){Im(a, function(i){
    var b=Do(B$(i));
    if(F(z)){z(b,b.obj)}
    else{$w[z]=b}})}


tkr = function(){
    var x=T$,
        gt="getTime", ge="getEventTime",  gf="getFPS", gi="getInterval", gp="getPaused",
        mf="getMeasuredFPS",  mt="getMeasuredTickTime",  gtk="getTicks",
        tm="timingMode",  sf="setFPS",  si="setInterval", sp="setPaused", r="reset",  it="init";
    Tk=Ed(x);
    tk=function(){x.on('tick',a)}
    tk2=function(a){if(a.obj){a=a.obj};return a.t(a)}
    getPaused=function(){return x[gp]()}
    pp=function(){x[sp](false)};
    ss=function(){x[sp](true)};
    gg=function(){if(x[gp]()){pp()} else{ss()}}
    reset=function(){x[r]()}
    ini=function(){x[it]()}
    timingMode=function(a){if(a){x[tm]=a};return x[tm]};
    time=function (){return $l({
TIME:x[gt](false),
    RUNTIME:x[gt](true),
    EVENT:x[ge](false),
    RUNEVENT:x[ge](true),
    TICKS:x[gtk](),
    RUNTICKS:x[gtk](true),
    FPS:x[gf](),
    INT:x[gi](10),
    playing:!x[gp]()})}"




   meas=function(){return {mF:x(1), mI:x[mt](10)}}


tt= function (){  if(gp()){pp()} else{ss()}}

rate =function (a,b,c){
     if(a>10){x[sf](a)}}  else {x[si](a*1000)}




}; tkr();



$(function(){///////////////////


    c = can(); s = Stg(c); me = new Image;


    $(me).load( function(){ j=B$(me); s.a(j) } )


    me.src = '/me.png';



})//j=Spr(sS$(SS))





tic=function(a){ tick = a||function(){ stg.u(); $l('hi') }}


