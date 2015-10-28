FLIP=function(){b2d.W()
    f1 = w.flippers(100,430)
    f2 =  w.flippers(100,230)
    f3=  w.flippers(300,130)
    flip = function(){f1();f2();f3()}}
PINBALL=function(){b2d.W({  walls : 'makeWallsPinball'  }) //canvas.drag()

    ballBumper = w.circStat(215,520,30,'red').den(10).rest(3).fric(0)
    topShelf = w.rectStat(215,100,100,10,'blue')
    rightWallForSomeReason = w.rectStat(420,400,20,2000, 'white')

    sunBall = w.ball(215, 90, 20).bindSprite('sun', .24)
    setInterval(function(){   sunBall.rot( sunBall.rot() + 10) }, 100)
    flip = w.flippers(100,430)
    $('body').on('keydown mousedown', tap)

    function tap(){
        var ball = w.circ(Math.random()*300+40,160, 20, 'green').den(.1).rest(.6).fric(2)
        if(oneInTenChance()){ball.bindSprite('me', .24)}
        flip()}

    function oneInTenChance(){return Math.random()>.9}}



BALLS=function(){


    b2d.W({grav: 100, walls:0})


    ramp=function(x,y,wd,h,rot){

        return w.ramp(x,y,wd,h,rot).den(1).fric(0).rest(0)
    }

    ramp(250, 700, 500, 200, -40)
    ramp(250, 640, 500, 200, -20)
    ramp(270, 620, 500, 200, -10)
    ramp(200, 600, 500, 200, 11)
    ramp(-70, 350, 500, 200, 85)
    ramp(-70, 375, 500, 200, 75)
    ramp(-70, 400, 500, 200, 65)
    ramp(-70, 425, 500, 200, 55)
    ramp(-70, 450, 500, 200, 45)
    ramp(-70, 475, 500, 200, 35)
    ramp(-70, 500, 500, 200, 25)
    ramp(-70, 525, 500, 200, 17)

    force = 0

    $.kD({
        down: function(){ if(force == 0){force = 10} },
        DOWN : function(){
            b = w.ball(20, 300, 12).den(1).fric(0).rest(0).bindSprite('me', .2)
            b.I(0, force)                   // why was it 'heavier' when i changed it to circ???
            force=0}
    })




    setInterval(function(){
        if( force != 0 ){  force *= 1.2   }
    }, 100  )








    w.rectStat(900,550, 120,15, 'white').fric(0).K('ledge')

    w.debug()

    w.begin(function(cx){
        if(cx.with('ledge')){



        if(cx.a().is('ledge')){  cx.b().linVel(0)  }

            else {cx.a().linVel(0)}
        }
    })
}





