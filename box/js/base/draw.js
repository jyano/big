Math.lineCenter=function(x1,y1,x2,y2) {

    if (A(x1)) {

        if(N(x1[3])){return center(  x1[0],x1[2],x1[2],x1[3]    )}
        return center(x1[0],x1[1],y1[0],y1[1])}

    if(O(x1)){return center(x1.x, x1.y, y1.x,y1.y)}

    return center(x1,y1,x2,y2)

    function center(x1,y1,x2,y2){var x,y

        if(x1 > x2){upperX = x1; lowerX = x2}
        else {upperX= x2; lowerX=x1}

        if(y1 > y2){upperY = y1; lowerY = y2}
        else {upperY= y2; lowerY=y1}

        x= lowerX + (upperX-lowerX)/2
        y = lowerY + (upperY-lowerY)/2

        return {x:x, y:y}
    }
}




Math.pointInCircle=function(x,y,circle){
    var withinX, withinY
    withinX = x < circle.x + circle.radius && x > circle.x -circle.radius
    withinY = y< circle.y+circle.radius  &&y >circle.y-circle.radius
    return withinX && withinY
}//Y.pointInCircle = pntInCir =
Math.pointInRect=Math.pointInRectangle=function(x,y,rect){var withinX, withinY

    var halfwidth = (rect.width || rect.w)/2
    var halfheight = (rect.height || rect.h)/2

    //assumes center

    withinX = x < rect.x + halfwidth && x > rect.x -  halfwidth

    withinY = y < rect.y +  halfheight  &&y > rect.y -  halfheight

    return withinX && withinY

}
Math.circlesOverlap=function(c1, c2){

    var sum, dist, rads

    sum = sqr( c1.x - c2.x  ) +   sqr( c1.y - c2.y  )

    dist = sqrt(sum)

    rads = c1.r + c2.r

    return rads < dist
}
Math.warp = function(lowBound,highBound,cushion){//wrp=
    cushion=cushion||0

    return function(num){
        return num<lowBound?highBound-cushion
            :num>highBound?lowBound+cushion
            :num
    }
}


testWarp=function(){z()
    s = stage = cjs.stage('black',500,500).tick().A()
    s.mug(function(bm){ m
         bm.sXY(.1).vXY(8,4).startMoving()
         bm.warpY(0,300,100).warpX(0,400,100)})}//easel
testWarp2=function(){z()
    s = stage = cjs.stage('black',500,500).tick().A()
    s.mug(function(bm){  b=bm
        bm.sXY(.1).vXY(8,4).startMoving()

        bm.warp()
    })}
testKillHitting=function(){

    s=cjs.stg()

    s.bm('me',0.3, function(b){b.drag().XY(100)})

    s.bm('sun',0.3, function(b){b.drag().XY(100)})

    s.bm('chicks',0.3, function(b){b.drag().XY(100)})

    s.bm('guy',0.8, function(b){guy=b
        guy.drag().makeMeAKiller()
    })





}


startStopButtons =function(){z(); var func
    b1= $.button('start!', function(){

        func = stage.on('tick', function(ev){e=ev
            mug.X(10, '+')})


    })
    b2=$.button('stop!',function(){


                stage.off('tick', func)
             })

    $.div().A(b1, b2   ).A()

    cjs.stage(600).tick().A().mug(0.2, function(bm) {mug=bm

       bm.XY(300).warp()

        SL(bm)

        // gun(  bm)

    })}

//it adds me and gives u two buttons.  just pass in a func
startStopButtonsAbstract=function(f){z()

    $.div().A(

        b1 = $.button('start!', f),


        b2=$.button('stop!',
            function(){
                bm.off(f)
            })

    ).A()

    s = cjs.stage(500).tick().A()
    s.bm('me', function(){

    })}



testShootBullet=function(){

    s = cjs.stg()

    s.mug(.2, function(b){mug=b

        mug.startMoving(5,5).warp()

        $.kD('space', function(){

           mug.shootBullet()
        })

    })

}


shootBulletTimeBased = function(shooter){

    var stage =shooter.getStage(),

        w =stage.W(),
        h =stage.H(),

        bullet = cjs.circle(8,'white').XY(shooter.x+75, shooter.y)

    stage.A(bullet)

    p.timeStamp = function(func){

        return this.tick(

            function(e){

                if(!N(j.ts)){
                    j.ts=0
                    j.lts= e.ts}


                else{
                    j.ts=e.ts-j.lts
                    j.lts=e.ts
                    func(j.ts)}

            })
    }

    bullet.fn = stage.timeStamp(bullet,
        function(t){
            b.Y(t/5 ,'-')
        })


    onTick(function(){
        if(bullet.y < 200 || bullet.y > h ){
            $l('miss')
            bullet.remove()
            bullet.fn()  // ahhh to stop the timestamping !!!!
        }})

    return bullet}
ugun=function(j){
    $.kD('space', function(){shootBulletTimeBased(j)}) }
sbul=function(shooter){

    var stage = shooter.getStage(),

        w=stage.W(),
        h=stage.H(),
        x=shooter.x,
        y=shooter.y,
        vx=shooter.vx,
        vy=shooter.vy,

    bullet = cjs.circle(8, 'red')
    stage.A(bullet)


    //start the bullet moving
    bullet.fn = stage.timeStamp(function(){
        //in thise cae i dont think i'm using the timestamp
        bullet.move()
    })


    //set bullet's velocity to same as the shooter
    bullet.vY( shooter.vy ).vX( shooter.vx )

      //the function is just returned
    /// so .on('tick', func) is called.  fn is just storing what .on returns  //not sure for what.. maybe to stop/cancel it (pause)
     //this is moving something up the screen (reverse gravity)
      bullet.fn = stage.timeStamp(   function(timeStamp){bullet.Y( timeStamp/5 ,'-')})



     return bullet}
sgun=function(j){kD('s',function(){

    sbul(j)

})}



CanvasBullet=function(x,y,dx,dy){ //oh its written for straight up canvas

    this.dx*=-5;
    this.dy*=-5;
    this.radius=8;

    this.draw=function(){
        canvas.circle(this.x,this.y,this.radius,'pink','white')
    }

    this.update=function(){this.move()}

    Bullets.push(this)
}
CanvasGuy=function(x){
    var g={ x:200,y:200,r:20,

        dx:1,dy:1, c:0, h:1000,

        draw:function(){
            var t=this;
            x.cir(t.x,t.y,t.r,'b','y')},
        update:function(){
            var t=this
            t.x=wrp(0,1200,20)(t.x+t.dx)
            t.y=wrp(0,600, 20)(t.y+t.dy)}}
    g.draw()
    return g}




//shooters
cjs.Guy=Guy=function(x,y,vx,vy, radius ){

    radius=radius||10
    x=x||300
    y=y||300
    vx=vx||1;
    vy=vy||1

     var guy = cjs.circle(radius, 'green', 'red')

     guy.XY(x,y).vXY(vx, vy)

    //cache
  //  guy.cc(-radius-10, -radius-10, radius*2+20, radius*2+20)


    guy.start =  function(){

        guy.funcRef = setInterval(function(){

            //if guy off screen, kill him
            if(guy.x<0||guy.y<0||guy.x>800||guy.y>600){
                $l('guy is going..')
                guy.remove()
                guy.stop()
                $l('guy is gone..')
            }

            else { guy.move() }

        }, 200)

        return guy}
    guy.stop =  function(){ clearInterval(guy.funcRef )}

    return guy}

GreenGuy =  function(x,y,vx,vy){

    var b= cjs.circle(40,'green').XY(x,y)
    if(N(vx)){b.vX(vx)}
    if(N(vy)){b.vY(vy)}

    return b.startMoving()
}


testGuy=function(){z() // cant set a var to 'guy' ???

    s = cjs.stage(600,300).tick().A()
    g = Guy(100,100, 4,3)
    s.A(g)
    g.start()


    s.A(
       gg= GreenGuy(200,200,1,5)
    )

    g.warp()
    gg.warp()


    // why isnt bounce working?
}
addMeWithVelocityAndIBounce = function(x,y,vx,vy,stage){

    z()

    x=x||100
    y=y||100
    vx=vx||20
    vy=vy||20

    stage = stage || cjs.stage(400,400).tick().A()

    $(stage.canvas).drag()

    stage.bm('me',function(b){me=b

        if(N(vx)){b.vX(vx)};
        if(N(vy)){b.vY(vy)}
        b.XY(x,y).bounce().startMoving()

    })
}



newAsteroid=function(){ // new Asteroid?
    var a = cjs.Asteroid();
    a.A();
    a.start()}


cjs.Asteroid = Asteroid= function(  x,y,r,vx,vy, stage){

    var _r = _.random

      stage = stage || cjs.stage(1000,1000).tick().A()


    x= x|| _r( stage.W() + 20 )  //stage.W checks bounds and error!!?
    y= y|| _r( stage.H() + 20 )

    radius= r|| _r(10)+5

    vx=vx|| _r(100)/25-2
    vy=vy|| _r(100)/25-2

    var ast = {
        circle:  cjs.circle( radius, 'white' ).XY(x,y).vXY(vx,vy),
        radius: radius,
        x: x,
        y: y}



    ast.remove = function(){ return ast.circle.remove() }
    ast.globalToLocal =function(){ return ast.circle.globalToLocal()}

    ast.add =   function(){stage.A( ast.circle )}

    ast.push =  function(){aA.push(a)}

    ast.update =  function(){

        ast.circle.move()
        ///replace all below with ast.circle.acc()
        if(ast.circle.ax){
            ast.circle.vX(a.circle.ax, '+')}
        if(ast.circle.aY){
            a.c.vY(a.c.ay,'+')} // (accelerateY accY)

        if(ast.circle.x > stage.W() || ast.circle.x < 0 ){
            ast.circle.vX('-')
            ast.circle.aX *= -1 // aX('-')
        } //so it starts accelerating the other way AND simulteanously bounces (both horizontally)

        //here it does the same with y.  ok i should demo it!
        if(a.circle.y > stage.H()|| a.circle.y <0 ){
            a.c.vY('-')
            a.c.ay *=-1
        }}  //ah, its a friction.. it probably goes opposite the velocity.  hmmmm that's friction!
    //so this is reverseDirection, which will check if it also needs to reverse any friction-acceleration direction

   // ast.circle.cache(-20,-20,40,40)

    return ast}



//uses guy
//wraps a container around guy

newAst=function(){
    var a=Asteroid(); stage.A(a.circle); a.start()   }


ASTEROIDS2 = CIRCLE2=function(){

    stage =s=createjs.stage(800,600).tick().A();



    Asteroids = []

    container =   new createjs.Container()

    stage.A(container)

     g= Guy(300, 300, 1, 1, 40, 'yellow')

    stage.A(guy)

    guy.start() //startMoving?
    guy.warp()

    stage.on('stagemousedown', function(e){

        g.vX((e.rawX - g.x)/10,'+')

        g.vY((e.rawY - g.y)/10,'+')

        if(g.vx>10){g.vX(10)}

        if(g.vy>10){g.vY(10)}

    })

    $.kD('space',function(){
        var badGuy = Guy(
            g.x, g.y, g.vx, g.vy
        )

        container.A(badGuy);
        badGuy.start() //.startMoving?
    })

    _.times(10, newAst)

    stage.tick(function(){

        _.each(Asteroids, function(ast, k){

            ast.update()

            _.each(container.children,
                function(child){
                    localChild=child.globalToLocal( ast.x ,ast.y );
                    if(child.hitTest(localChild.x, localChild.y) ){
                        ast.remove(); $l('HIT')}
                })


            localChild=guy.globalToLocal(ast.x , ast.y )


            if(guy.hitTest(localChild.x, localChild.y) ){

                $l('hit'); co()  }   })  })



}
// tt( 'f', 30 )

ASTEROIDS = CIRCLE=function(){z()

    stage =s=cjs.stage(800,600).tick().A()

    stage.A( container =   new createjs.Container() )
    stage.A(

      g = Guy(300, 300, 1, 1, 40, 'yellow')

    )

  g.start()

  g.warp()


    Asteroids = aA=[];

    _.times(10, newAst)

    stage.on('stagemousedown',
        function(e){

            var badGuy = Guy(
                g.x(),g.y(),g.dx(),g.dy())

           container.A( badGuy )

            badGuy.start()

            g.vX((e.rawX- g.x)/10, '+')
            g.vY((e.rawY- g.y)/10, '+')

            if(g.vx>10){ g.vX(10)}
            if(g.vy>10){ g.vY(10)}

        })


    stage.tick(function(){
        var gx = g.x, gy=g.y

        _.each(Asteroids,
            function(a, k){

                var ax=a.x , ay=a.y

                a.update()

                _.each(

                   container.children(),

                    function(b){
                        var bx= b.x,
                            by= b.y

                        if(ax > bx-10&& ax<bx+10&&ay>by-10&&ay()<by+10){

                            $.body().C('*')
                            a.remove();//aA[k]=null;_.compact(aA)
                        }
                    })



                if(ax>gx-40&&ax<gx+40&&ay>gy-40 && ay<gy+40){g.al(.01,'-')}




            })})
}
MEBOUNCEGAME=function(){z()

    stage=createjs.stage(500).tick().A()

    g = Guy(100, 100)

    stage.A( g )

    g.keyControls()
        g.warp()  /// gotta steal back 'ctr'.. get it :)

    addMeWithVelocityAndIBounce( 100, 100, 2, 4, stage)


    stage.on('stagemousedown', function(){
        me.shootBullet()
        g.shootBullet()
    })


}




////
/////
/////
//withBall = wB=function(f){qG('/ball',f)}

withGodzilla=function(func){ //gz anything?
    $.post('/godzilla', func)}

// wMb(function(b){SL(b.wh(60).xy(100,400),'-')},s)//  wMb(function(b){SL(b.wh(60).xy(400,100),'+')},s)

sunInACanvas=function(){

    return $.canvas('X',500).fit('sun')

}


multiGroupBall = bl=function(data, y){

    //bring back dva !!!

    ball = $w['ball']|| dva()

    var moveBallTo = function(b){ ball.XY(b.x, b.y) }

    if(U(d)){ $.get('/ball', moveBallTo) }

    else{

        if(N(data)){

            data={x:data, y:N(y)?y:data}
        }

        $.post('/ball', data, function(){

            $.get('/ball', moveBallTo)

        })}}
//gives a randomly doctored number (u pass in number and +/-/)..
//not sure why it called cage

