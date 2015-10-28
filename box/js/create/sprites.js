MUMMYFLIP=function(){ w = b2d.W() //spriteUrl = "/assets/sprites/metalslug_mummy37x45.png"

//sprite always assumed to start facing right (and flipping it horizontqlly is the left) - so i must draw facing right




    b = b2d.box(100,100,50,88  ).K('mummy').bindSprite2(
        cjs.sprite( Mummy ).a2(w.s).drag()
            .rXY(20,22).sXY( 2 ).XY( 200 ))

    b.coll(function(){ b.linVel(0) })

    b.sprite.p('walk')

    cjs.tick(function(){
        b.rT(0)
        if(b.direction=='right'){b.I(4, -2)}
        else if(b.direction=='left'){b.I(-4, -2) }    // direction='neither' // <-- demumify (doesnt keep walking
        //if(jumpButton is pressed){jump()}
    })


    $.kD({

        u:function(){
            //jumpButtonPressed = true
            if(b.Y()>530){b.I(0, -80)}},
        U: function(){
            //jumpButtonPressed = false
        },


        l: function(){ b.sprite.sX(-2)
            b.direction='left'},
        r: function(){ b.sprite.sX(2)
            b.direction='right'} })

}

b = cjs.SpriteSheetBuilder.prototype
b.Z=function(sc){

    if(U(sc)){return this.scale}
    this.scale=sc;return this
}
b.maxW=function(sc){
    if(U(sc)){return this.maxWidth}
    this.maxWidth=sc;return this
}
b.A=function(mc){
    this.addMovieClip(mc)
    return this}
b.complete=function(func){
    this.on("complete", func)
    return this}
b.async=function(funcNum,num){
    if(F(funcNum)){
        this.complete(funcNum)
        this.buildAsync(num)
    }

    else{this.buildAsync(funcNum)}


    return this}
cjs.builder = cjs.spriteSheetBuilder = cjs.sSB = cjs.ssB = cjs.ssb = function(mc){

    ssb = new createjs.SpriteSheetBuilder()
    if(mc){ssb.A(mc)}

    return ssb}


Sprites={ }
Sprites.char={
    framerate:24,
    images:["/char.png"],
    frames:[
        [0, 0, 256, 256, 0, -159, -138],
        [256, 0, 256, 256, 0, -159, -138],
        [512, 0, 256, 256, 0, -159, -138],
        [768, 0, 256, 256, 0, -159, -138],
        [1024, 0, 256, 256, 0, -159, -138],
        [1280, 0, 256, 256, 0, -159, -138],
        [1536, 0, 256, 256, 0, -159, -138],
        [0, 256, 256, 256, 0, -159, -138],
        [256, 256, 256, 256, 0, -159, -138],
        [512, 256, 256, 256, 0, -159, -138]],

    animations:{
        df: {"frames":[0]},
        jump: {"frames": [0, 1, 1, 2, 2, 3, 3, 3, 3], speed: 1,next:false},
        die: {"frames": [4,5], speed: .1, next:false},
        hurt: {"frames": [4,4,4,5,5,5,4,4,5,5,4,5,0], speed:.4, next:false},
        fly:{"frames":[6,6,7,8,9  ], speed:.3},
        nuts:{frames:[3,8,2,9,2,4,5,6,5,4,5,3]}

    }}
Sprites.char2={
    framerate:24,
    images:["/char2.png"],

    "frames":[
        [0, 0, 256, 256, 0, -159, -138],
        [256, 0, 256, 256, 0, -159, -138],
        [512, 0, 256, 256, 0, -159, -138],
        [768, 0, 256, 256, 0, -159, -138],
        [1024, 0, 256, 256, 0, -159, -138],
        [1280, 0, 256, 256, 0, -159, -138],
        [1536, 0, 256, 256, 0, -159, -138],
        [0, 256, 256, 256, 0, -159, -138],
        [256, 256, 256, 256, 0, -159, -138],
        [512, 256, 256, 256, 0, -159, -138]
    ],

    animations:{
        df: {"frames":[0]},
        jump: {"frames": [0, 1, 1, 2, 2, 3, 3, 3, 3], speed: 1,next:false},
        die: {"frames": [4,5], speed: .1, next:false},
        hurt: {"frames": [4,4,4,5,5,5,4,4,5,5,4,5,0], speed:.4, next:false},
        fly:{"frames":[6,6,7,8,9  ], speed:.3},
        nuts:{frames:[3,8,2,9,2,4,5,6,5,4,5,3]}

    }}

ss = cjs.SpriteSheet.prototype
ss.addFlipped=function(a, b, c){
    cjs.SpriteSheetUtils.addFlippedFrames(this,  a||true, b||false, c||false )
    return this}
cjs.spriteSheet   =function(a){return new cjs.SpriteSheet(a)}

s=cjs.Sprite.prototype
s.p = function(what){
    if(U(what)){this.play()}
    else {this.gotoAndPlay(what)}
    return this}
s.s= s.P=function(what){if(U(what)){this.stop()}
    else {this.gotoAndStop(what)};return this}
s.skip=s.adv=function(num){this.advance(num);return this}
s.cA = s.cAn = s.currAnim=function(){return this.currentAnimation}
s.cAF= currAnimFrame = function(){return this.currentAnimationFrame}
s.cF = s.cFr = s.currFrame=function(){return this.currentFrame}
s.fR = s.rate = function(rate){
    if(U(rate)){return this.framerate}
    this.framerate=rate
    return this
}
s.end=function(func){func=func||function(){n=N(window['n'])?n:0
        $l('frame! '+ n++)}
    this.on('animationend', func)
return this}

cjs.sprite=$sprite=function(spriteSheet){
//EaselSprite= J$=

    if(spriteSheet.images){

        spriteSheet=cjs.parseZoe(spriteSheet)
        spriteSheet=new cjs.SpriteSheet(spriteSheet)
    }


    return new cjs.Sprite( spriteSheet )

}

cjs.sprite100 = function(a){

    var spr = cjs.sprite(a)
    spr.rXY(50)
        .opacity(.8)
    return spr}


ZOENOANIM=function(){z()
    spr = cjs.sprite({
        "framerate":24,
        "images":["/zoetest.png"],
        "frames":[
            [0, 0, 512, 256, 0, -133, -143],
            [512, 0, 512, 256, 0, -133, -143],
            [1024, 0, 512, 256, 0, -133, -143]
        ],
        "animations": {}})
    s = cjs.stg(1000).A()
    s.A(spr)}
ZOEFRAMES=function(){z()


    spr = cjs.sprite({
        "framerate":24,
        "images":["/sprite2.png"],
        "frames":[
            [0, 0, 128, 128, 0, -176, -161],
            [128, 0, 128, 128, 0, -176, -161],
            [256, 0, 128, 128, 0, -176, -161]
        ],
        "animations":{
            "weird": {"speed": 1, "frames": [2]},
            "bald": {"speed": 1, "frames": [1, 1, 1, 1]}
        }
    })

    anis = spr.spriteSheet._animations

   // aniNames = _.keys(anis  )  // _.each(anims, function(name){  spr[name]=function(){ this.gotoAndPlay(name) }  })

    s = cjs.stg(1000).A()
    s.A( spr.drag() )
}
CHAR0=function(){showSprite(Sprites.char)

    function showSprite(sprite){z()

        s = cjs.stg(1000).A()

        spr = cjs.sprite(sprite).drag().a2(s)

    }

}
CHAR=function(){w=b2d.W().debug()

    w.begin(function(cx){
        if(cx.with('hurt')){b.p('hurt').I(100,-200)}
        if(cx.with('fly')){b.p('fly').I(-100, -200)}})

    b= w.ball(200,200,60).bindSprite2( cjs.sprite( Sprites.char ).rXY(275,220) )

    guyBrick(100).K('hurt')
    guyBrick(500).K('fly')

    function guyBrick(x){
       return w.brick(x,500,100,100).bindSprite('guy',.6)

    }

}
cjs.parseZoe=function(sprObj){


    //fix source (needs a '/')
    sprObj.images[ 0 ] = _.ensureSlash( sprObj.images[0] )

    //set next to false, on all anims
    //_.each(sprObj.animations, function(anim){anim.next = false})


    //to do: parse it! (get rid of unnecessary json strings in keys)


    return sprObj}

STICK=function(){
    w=b2d.W({grav:3})
        .chalk('spritebox example').debug()

    w.spriteBox({

        "framerate":4,

        "images":["stick.png"],
        "frames":[
            [0, 0, 512, 512, 0, -22, -2],
            [512, 0, 512, 512, 0, -22, -2],
            [1024, 0, 512, 512, 0, -22, -2],
            [0, 512, 512, 512, 0, -22, -2],
            [512, 512, 512, 512, 0, -22, -2],
            [1024, 512, 512, 512, 0, -22, -2],
            [0, 1024, 512, 512, 0, -22, -2],
            [512, 1024, 512, 512, 0, -22, -2],
            [1024, 1024, 512, 512, 0, -22, -2],
            [0, 1536, 512, 512, 0, -22, -2],
            [512, 1536, 512, 512, 0, -22, -2],
            [1024, 1536, 512, 512, 0, -22, -2]
        ],
        "animations":{
            "die": {"frames": [8, 9, 10], "speed": .1,next:false},
            "walk": {"frames": [1, 2, 3, 4], "speed": .1},
            "jump": {"frames": [5, 6, 7,0], "speed": .1,next:false}
        }
    },300,200,.25).mario()
    w.rect(600,200, 50,50 ,'p')
    w.circ(600,100,40,'b')}







//OLD
THRUSTSCROLL = function(){z()

    // s = cjs.stage('green', 1000).A()

    //spriteUrl = "/assets/sprites/metalslug_mummy37x45.png"

    w = b2.mW({grav:0})

    p = w.player('thrust')
    //sp = cjs.sprite( Mummy ).drag()

    // w.s.A( sp )

    // sp.sXY( 2 ).XY( 200 )

    //  sp.gotoAndPlay('walk')


    // sp.rXY( 20, 22 )

    // b = b2.box( 100, 100, 50, 88).uD('mummy')

    // b.bindSprite2(sp)

    direction='right'

    cjs.tick(function(){


        w.eachBody(function(body){
            if(body.uD()!='player'){

                body.X(  body.X()+ p.X()  )

            } })

    })



    tr=w.A( b2.dynamicDef(), b2.triangleFixt    )




    moveLeft=function(){

        w.eachBody(function(body){
            if(body.uD()!='player'){body.X( body.X()+10  )   } })

    }
    moveRight=function(){

        w.eachBody(function(body){
            if(body.uD()!='player'){ body.X( body.X()-10  )   } })

    }
}
moveEachBodyButGuy=function() {

    $.kD('l', function () {
        w.eachBody(function (body) {
            if (body.K() != 'guy') {    body.X(body.X()+20)   }})})


    $.kD('r', function () {
        w.eachBody(function (body) {
            if (body.K() != 'guy') {

                body.X( body.X() - 20)
            }
        })
    })


    $.kD('d', function () {
        w.eachBody(function (body) {
            if (body.K() != 'guy') {
                body.Y(body.Y() - 20)
            }
        })
    })


    $.kD('u', function () {
        w.eachBody(function (body) {
            if (body.K() != 'guy') {
                body.Y(body.Y() + 20)
            }
        })
    })

}
BUTME=function(){

    w = b2d.W({


        grav:0,   walls:[]


    })



    //p = w.player('thrust').XY(500,100)

    w.brick(100,300,200,30).rT(30)
    w.brick(400,200,400,100).rT(30)

    g= w.box(400,300, 30, 30).bindSprite('guy').K('guy')

    moveEachBodyButGuy()

    cjs.tick(function(){
        // w.each(function(b){ b.rT(  b.rT() + 10) })


        g.XY(400,300)

    })



}
BUTMEBETTER=function(){z()



    w = b2.mW({
        grav:0,
        walls:[]
    })


    //p = w.player('thrust').XY(500,100)

    w.bumper(200,200,100)
    w.bumper(600,300,100)

    g= w.box(400,300, 30, 30).bindSprite('guy').K('guy')

    moveEachBodyButGuy()

}






