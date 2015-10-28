var SS={"framerate":24,

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
$l('sprite')




function Ql(m){m=m||{};
    Q$=function(){return new createjs.LoadQueue(true) }

    var x=Q$(),o=Ed(x),

        im=[], lm="loadManifest", lf="loadFile", l="load",fl="fileload",  gr="getResult", gi="getItem", co="complete";


    o.l=function(a,b,c){
        if(U(a)){
            x[l]()}
        else if(A(a)){
            x[lm](a,b,c)}
        else {
            x[lf](a,b,c)}
        return o}


    o.f=function(a,b,c){
        o.o(fl, function(e){
            var i= e.result,ii= e.item;
            $l(fl);if(ii.type=="image"){im[ii.id]=i}
            a(i,ii)},b,c);
        return o};


    o.c=function(a,b,c){o.o(co, function(){
             $l(co);o.i=im; a(im)},b,c);
        return o}


    if(m.c){o.c(m.c)};if(m.f){o.f(m.f)};if(m.m){o.l(m.m)}

    o.gr=function(a){return x[gr](a)}
    o.gi=function(a){return x[gi](a)}
    return o}




Mf=function(a){

    var mf=[]
    each(arguments,
        function(v,k){mf.push({src:src(v),id:v}) })
    return mf
}
//mf= [{src:"/me.png", id:"m"}, {src:"/chicks.png", id:"c"}]
//a=["/guy_0.png", "/guy_1.png" ]
mf=Mf("guy_0","guy_1")


crs=function(a){return before(after(a,'/'),'.png')}





//oae="onAnimationEnd",
Spr = function(ss,b,stg){var  gts="gotoAndStop",gtp="gotoAndPlay", av="advance", ga="getAnimation", gA="getAnimations",gfb="getFrameBounds", gnf= "getNumFrames",  fr="framerate",ca="currentAnimation",  caf="currentAnimationFrame", cf="currentFrame",ae='animationend',


    sp=function(o){o=Do(o);  var x=o.obj,
            o.p=function(a){if(a){x[gtp](a)}
                  else{x.play()};return o}
            o.s=function(a,b){if(a){x[gts](a)}
                else{x.stop()};return o}
            o.av=function(a){x[av](a*1000);return o}
            o.end=function(a){o.(ae,a);return o}
            o.pa=function(a){if(!a){return x[pa]}x[pa]=a;return o}
            o.rate=function(a){
                if(!a){return x[fr]}
                x[fr]=a;return o}
            o.cf=function(a){if(!a){
                return x[cf]}x[cf]=a;
                return o}
            o.ca=function(a){
                if(!a){return x[ca]}
                x[ca]=a;return o}
            o.caf=function(a){if(!a){
                return x[caf]}
                x[caf]=a;
                return o};return o}


    li=loadSSImages=function(a,fn){
        Ql({m:Mf.apply(this,map(a.images,function(i){
            return crs(i)})),c:fn})};




        li(ss, function(i){
        var s=new C$.Sprite(new C$.SpriteSheet(ss))
        if(stg){stg.a(s)};b(sp(s),s)})}




$(function(){


    //q = Ql({m:mf,  c:function(){},  f:function(){}    });

      s=Stg(can('purple'));
     //s.a(sp)

  })
    // ss.gotoAndStop("frameName");
    //     Until gotoAndStop or gotoAndPlay is called,
    //       only the first defined frame defined in the sprite sheet will be displayed.


