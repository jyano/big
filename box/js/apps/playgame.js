// ok so play and draw go together
// draw for functions
// play for apps
// duh

SPACEOLD=function(){  wMs(function(b, s){

        stage = s

    stage.wh(2000)

   stage.bgi('/space.jpg')

    b.sxy(.2)

        b.fn(RT, SL)

})}
SPACE=function(){z()

        $stage(2000, 2000).tick().A().backgroundImage('/space.jpg').mug(
            function(mug){
                mug.sXY(.2).drag().rotate()
            }
        )}

BOXES=function(){
    CT(ROW(

        stage=cjs.stage(800,600).tick(),

        $.div('yellow').pad(20).A($.h1('controls'),

            bt('fall',function(){ball.fall(box)}),
            bt('fall+',function(){
                setInterval(newBall,1000)})),

        '+' // ?????!
    ))


    kD('r',function(){box.X(10,'+')})
    kD('l',function(){box.X(10,'-')})

    stage.A(box=Box().XY(300,450))

    stage.A(ball=Ball(40,'red','orange').XY(300,100))

    newBall=function(){

        var ball = Ball(40, 'red', 'orange').XY(_r(600), 100)
        stage.A(ball)
        ball.fall(box)
    }

}
SHIP=function(){

    angleInDegrees =function self(y,x){

        if(O(y)){return self(y.vy, y.vx)}

        var d = tDeg(Math.atan(y/x))

        if(x<0){
            d = Math.abs(d)+90;
            if(y<0){d=Math.abs(d)+90}}

        return d}


    ship=function(stage){



          t = new cjs.Shape().XY(100).rY(20).vX(1).vY(1)

        t.graphics.f('o').s('z').mt(0,0).lt(0,40).lt(80,20).lt(0,0)
        kD('d',function(){t.rt(6,'+')})
        kD('u',function(){t.rt(6,'-')})
        if(stage){

            stage.A(t)

            stage.on('stagemousedown', function(event){e=event

                t.vX((e.rawX- t.x)/100, '+'  )
                t.vY((e.rawY- t.y)/100, '+'   )
                if(t.vx>10){t.vX(10)}
                if(t.vy>10){t.vY(10)}

            })}


        setInterval(function(){

            t.X(t.vx,'+').Y(t.vy,'+')
            t.rotation = angleInDegrees(t)

        }, 10)



        return t}


    PL=1;
    aA=[]

    div = $.div('yellow').pad(10)

    div.A(
        $.h1('controls'),
        b1= $.button('start',function(){PL=1;b1.hd();b2.sh()}),
        b2= $.button('stop',function(){PL=0;b2.hd();b1.sh()}).hide(),
        $.button('sgun',function(){sgun(guy)})
    )

    boot = $.boot()

    stage = createjs.stage(800,600).tick()
    boot.A(
        div,
        stage.canvas


        )

   guy = ship(stage)

   // kD('s',function(){ $l('bang')})


   // _.times(100,function(){var a=ast();a.a();a.p()})

   // stage.tick(function(){ if(PL){ _.each(aA,function(a){  a.u()  })}} )

     sgun(guy)

}



SOLAR=function(){z()


    stage = s = cjs.stage(1000,500).A().tick()


    stage.bm('guy', function(bm){guy=bm


        bm.drag()
        bm.vXY(_.random(10)+1,_.random(10)+1).XY(_.random(800),_.random(600))
        bm.startMoving()

        bm.warp()

        stage.bm('sun', 0.2, function(bm){

            sun=bm

            bm.drag().startMoving(4,10)
            bm.warp()

            setInterval(

                function(){

                    if(

                        cjs.bulletHit(sun,guy)){

                        sun.sXY( sun.scaleX + .1, sun.scaleY + .1  )

                        sun.vx += .2
                        sun.vy += .2

                    }

                }, 100)

        })

    })


    stage.mug(0.4, function(bm){mug=bm


        bm.X(400).drag().startMoving(10,10)


        bm.bounce(0)


    })

    stage.backgroundImage('/space.jpg')}






SHOOTY=function(){z()


    stage = cjs.stage(800).tick().A().drag()

    stage.mug(function(mug){m=mug
         mug.XY(100, 100).WH(150)
        SL(mug)

         key(mug, '-')
        // ugun(mug)
    })


    canvas = ghostMe().A().drag().XY(10)

function ghostMe(){// how cool.. it 'steals' the drag because its on top but looks like its below
    return $.canvas('X', 500, 500).fit('me').opacity(.1)}

}









HIT=function(){z()


    s =stage= createjs.stage(900,600).A().tick().mug(function(mug){

        mug.drag()

        stage.bm('flame', function(flame){

            flame.drag()

            flame.scaleX=.1
            flame.scaleY=.1
            flame.regX= flame.getBounds().width / 2
            flame.regY=500
            flame.x=400
            flame.y=400




        stage.on('dblclick',  function(e){

       flame.x= e.rawX;  flame.y= e.rawY  })


            stage.on('stagemousedown', function(e){

                localCoords= mug.globalToLocal(e.rawX, e.rawY)

                hit = mug.hitTest( localCoords.x, localCoords.y )


                if( $l(hit) ){ //$l('hit')
                 stage.backgroundColor('red'); //$l( e.X+ ' '+ e.Y )
                }

                else {
                $l('no hit')
                  stage.backgroundColor('yellow')
                }


            })



            stage.on('stagemousemove', function(e) {


                localCoords = mug.globalToLocal(flame.x, flame.y)

                hit = mug.hitTest(localCoords.x, localCoords.y)

                if( $l(hit)  ){  $l('HIT')


             stage.backgroundColor('red')

                $l(e.rawX+ ' '+ e.rawY)

                }

                else { $l('NO HIT')

                    stage.backgroundColor('yellow')
                }

            })
        })})

}


//beautiful demo i stole! :)
HITCIRCLES=function(){z()

    stage = cjs.stage(1000).A().drag() // look no .tick() necesary!! look below :)
    container = new createjs.Container()
    stage.A( container.XY(150) )

    _.times(25,function(){
        var shape = new createjs.Shape()
        shape.graphics.f(randomHSL()).dc(0,0,30)
        holder.A(shape.XY(randomLocation(),randomLocation()))})

    cjs.Ticker.on("tick", tick)

    function randomLocation(){return Math.random()*300-150}
    function randomHSL(){return cjs.Graphics.getHSL(Math.random()*360,100,50)}
    function tick(event){
        holder.rotation += 3
        var numChildren = holder.getNumChildren()
        _.each(holder.children, function(child){
            child.alpha = child.underMouse()? 1 : 0.1
        }) /*
        for(var i = 0; i < numChildren; i++){  //for each child

            var child = holder.getChildAt(i)
            child.alpha = 0.1
            var pt = child.globalToLocal(stage.mouseX, stage.mouseY);
            if (stage.mouseInBounds && child.hitTest(pt.x, pt.y)){
                child.alpha = 1}
        }
        */
        stage.update(event)}

}



canon=function(box, x, y){
    var vx, vy, ball
    x = x || box.x || 100
    y = y || box.y || 500

    stage.A( ball = Ball(12).XY(x,y) )

    if(box.rotation > 0){
        vx = 8 * (1 + Math.toRads(box.rotation))
        vy = 16 * (1 - Math.toRads(box.rotation))}

    else{
        vx = 8*(-1 + Math.toRads(box.rotation))
        vy = 16*(1 + Math.toRads(box.rotation))}

    stage.tick(function(){
        vy -= 0.5
        ball.X(vx, '+').Y(vy, '-')})
}
CANON=function(){
    stage = cjs.stage(1000,600).tick().A()
    box = Box(20,100).X(500).B(600)
    stage.A(box)
    kD('l',function(){box.rT(4, '-')})
    kD('r',function(){box.rT(4, '+')})
    kD('d',function(){box.rotation=0})
    kD('s',function(){ canon(box) })
   setInterval(function(){
       var degs = Math.toRads(box.rotation)
       canon(box, (500 + Math.acos(degs) * 30)+ box.x-540,
           (500 + Math.asin(degs) * 30)+ box.y -540)
   },500)



}





