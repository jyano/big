//is this file even being used?
testy = 1000

tw=function rc(a){

    fu=function(a){
        return F(a.obj)?a.obj
        :a}

    var fn=function(a,b){W$.get(a).to(b)}

    return function r(b){
        fn(fu(a), b)
        return r}
}


tweeny=function(a){  return fn=function f(b){W$.get(a).to(b); return f}}



//EaselSpriteSheet = SpriteSheet= jssX = function(spriteSheet){ return J$(  SS$( spriteSheet || ss )  ) }



 sprr=spr = function(x){

    var gts="gotoAndStop",
        gtp="gotoAndPlay",
        av="advance",
        ga="getAnimation",
        gA="getAnimations",
        gfb="getFrameBounds",
        gnf= "getNumFrames",
        fr="framerate",
        ca="currentAnimation",
        caf="currentAnimationFrame",
        cf="currentFrame",
        ae='animationend',

        o=Do(x)

    o.p=function(a){
        if(a){x[gtp](a)}
        else{x.play()}
        return o}

    o.s=function(a,b){
        if(a){x[gts](a)}
        else{x.stop()}
        return o}

    o.av=function(a){x[av](a*1000)
        return o}

     o.end=function(a){o.o(ae, a)
        return o}

     o.pa=function(a){
        if(!a){return x[pa]}
        x[pa]=a
        return o}
    o.rate=function(a){
        if(!a){return x[fr]}
        x[fr]=a;
        return o}
    o.cf=function(a){
        if(!a){return x[cf]}
        x[cf]=a
        return o}
    o.ca=function(a){
        if(!a){return x[ca]}
        x[ca]=a
        return o}
    o.caf=function(a){
        if(!a){
            return x[caf]}
        x[caf]=a
        return o}

    return o}



EaselSprite   = sprX

    Sp=function(ss, f, stage){

    return Ql({

        m: makeManifest(ss),

    c:function(i){

        var s=jss(s)

        if(stage){ stage.A(s) }

        if(f){

                f( spr(s), s )

            }

    }})

    }








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
            "speed": 1}}}


//  s = S$(c)

// T$.on('tick', s)
// Bm('guy', function(i){ g=(i) })
// Bm('me', function(i){ m=(i) })
// cjs.Ed(T$).o('tick', function(e,ee){ z=e, y=ee   }    )
//$l(z.t)
//d.ln=function(a,b,c){ed[ael](a,b,c);return d};
// d.lT=function(s){return d.ln('tick',s)}

//iSt=function(a){return c$(_ts(a),"Stage")}

//mf=[{src:"/me.png", id:"m"}, {src:"/chicks.png", id:"c"}]
//a=["/guy_0.png", "/guy_1.png" ]
//mf=Mf("guy_0","guy_1")