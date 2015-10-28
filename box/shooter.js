st=cjs.Stage.prototype
st.cannonBall=function(x,y){return this.art(x,y,'+').rG(['a', 'z'],  [0, 1], 0,0,0,  0,0,18 ).dc(0, 0, 18).ef()}
st.basketBall=function(x,y){return this.art(x,y,'+').rG(['w', 'o'],  [0, 1],0,0,0,  0,0,18 ).dc(0, 0, 18).ef()}
st.beachBall=function(x,y){return this.art(x,y,'+').rG(['b','r'],   [0, 1],  0,0,0,  0,0,18 ).dc(0, 0, 18).ef()}
st.snowBall=function(x,y){return this.art(x,y,'+').rG(['a','w'],  [0, 1],  0,0,0,  0,0,18 ).dc(0, 0, 18).ef()}


RADIANTBALLS=RDB=function(){s=cjs.S('a')
    b1=s.cannonBall(100,200)
    b2=s.basketBall(100,100)
    b3=s.beachBall(50,50)
    b3=s.snowBall(50,300)}
DIRTYBALLS=DTB=function(){w=b2d.W({  grav:0 })

    w.dirtyBall=function(x,y,stop1,stop2){
       return  this.gradBall(x, y, 60,'z','w',  stop1, stop2 )
    }



    w.gradBall(200,100,60,'z','w'  )

    w.dirtyBall(350,100,  0,  .9 )

    w.gradBall(500,100,60,'z','w',  0,  .6 )
    w.gradBall(650,100,60,'z','w',  0,  .3 )
    w.gradBall(800,100,60,'z','w',  0,  .1 )
    w.gradBall(350,300,60,'z','w',  .3,   1 )

    w.dirtyBall(500,300,  .6,   1 )
    w.dirtyBall(650,300,    .9,   1 )

    w.dirtyBall(800,300 ,  1,   1 )



}
STATUSBALL=STB=function(){w=b2d.W({  grav:0 })

   b = w.ball(500,300,60).bindSprite2( w.s.shape(500,300)  )


    num = 0
    dif = .1

    shape = b.sprite

        shape.rG(['r','y'],[0, num],
          0,0,0,0,0,60)
        .dc(0, 0, 60)

    setInterval(function(){

        num += dif

        if(num>=1){ num=.9; dif= -.1 }

        if(num<=0){ dif = .1 }

        $l(num)
        shape.rG(['r','y'],[0, num],
            0,0,0,0,0,60)
            .dc(0, 0, 60)

    }, 100)
}
SWITCHBALL=SWB=function(){w=b2d.W({g:0})

    b = w.ball(500,300,60).bindSprite2( w.s.shape(500,300)  )


    b.draw=function(frame){

        this.sprite.rG(['r','y'],
            [frame[0],frame[1]],
            0,0,0,0,0,60)
            .dc(0,0, 60)
    }



   frames=[
       [0,.1],
       [0,.3 ],
       [0,.6],
       [0,.9],
       [0,1],
       [.3,1],
       [.6,1],
       [.9,1],
       [1,1]]

    curr=0


    I(function(){

        $l(curr)
           b.draw( frames [curr] )

        curr++

        if(curr == 9){curr=0}


        }, 1000)








}
HEALTHBALL =HEB=function(){w=b2d.W({g:0})
    w.badGuy(500,300)}
SWITCHBALLWORKSBUTTOOCOMPLICATED=function(){w=b2d.W({  grav:0 })

    advanceN=function(n, dif){
        n += dif
        if(n>=1){n=.9; dif*= -1}
        if(n<=0){n=0; dif*= -1}
        return {n:n, dif:dif}}


    switchBall1=function(x,y){var  dif=.1,n1=0,n2= 0,
        b=w.ball(x,y, 60).bindSprite2( w.s.shape(x,y) )

        I(function(){n2 = advanceN(n2); drawGrad()}, 100)
        function drawGrad(){
            b.sprite.rG(['r','y'],[n1, n2],  60 ).dc(0, 0, 60)}

        function advanceN(n2){

            n2 += dif
            if(n2>=1){n2=.9; dif*= -1}
            if(n2<=0){n2=0; dif*= -1}; return n2}

    }


    switchBall2=function(x, y){
        var   ball= w.ball(x,y, 60).bindSprite2( w.s.shape(x,y) )



        ball.drawGrad = function(n1,n2 ){return this.sprite.rG(['r','y'],
            [n1, n2],  60 ).dc(0, 0, 60)}

        ball.animGrad1=function(){

            var that=this,
                dif=.1,  n2=1,  n1=0

            I(function(){
                    var res = advanceN(n1, dif)

                    dif = res.dif

                    n1 = res.n

                    that.drawGrad(n1,n2)},

                300)}


        ball.animGrad2=function(){

            var that=this,  dif=.1

            I(function(){
                    var res = advanceN(n1, dif)
                    dif = res.dif
                    n1 = res.n
                    that.drawGrad(n1)},
                300)

        }


        ball.animGrad1()




    }




     switchBall1(100,100)


     switchBall2(300,100)



    w.s.back.linGrad('u','p')
    w.s.HUD.bm('me', function(bm){  me= bm.sXY(.3).XY(1150, 550).drag()  })




}
TRIPLESTAGE= TTS=function(){w=b2d.W({  grav:0 })

    b = w.ball(500,300,60)
    b.bindSprite2( w.s.shape(500,300)  )

    num = 0
    dif = .1

    shape = b.sprite

    shape.rG(['r','y'],[0, num], 60)
        .dc(0, 0, 60)



    w.s.HUD.bm('me', function(b){   b.XY(300).drag()   })


    w.s.back.bm('guy', function(b){   b.XY(200).drag()  })




    w.s.back.linGrad('b','z')






 }

RADIANT=RDT=function(){b2d.levelWarp()

    p.linDamp(1).warp()

    $.space(function(){p.polyBul()})

    badGuy=w.badGuy(400, 200).warp().den(.1)
    I(function(){w.s.pen('badGuy health: ' + badGuy.health)}, 200)}


SHOOTERCAN=SHC=function(){




    function startGame (){z()


        game=true
        Coins=[]
        Aliens=[]
        Bullets=[]
        can = $.canvas('yellow', 900, 500).A()

        shooter = new Shooter()

        shooter.draw()

     //   _.times(10,function(){Coins.push(Coin())})
     //   _.times(15,function(){Aliens.push(Alien())})


        setInterval(function(){

            shooter.update()


            can.clear()
            shooter.draw()
        }, 400)
    }

    function Shooter(){
        this.x= 100
        this.y= 200
        this.vx = 2
        this.vy = 2
        this.radius = 20

        this.update =  function(){
            this.x = this.x + this.vx
            this.y = this.y + this.vy}

        this.draw =function(){

            can.circle(this.x, this.y, this.radius, 'blue')

        }
    }

    updateScreen=function(){



        can.clear()

        shooter.draw()
    }
    updateGame=function(){

        shooterUpdate()

    }

    updateGameX=function(){

        if(game){
            shooter.vx += cap(-5,5)( (e.x - shooter.x)/300 )
            shooter.vy += cap(-5,5)( (e.y - shooter.y)/300 )
            Bullet(shooter.x, shooter.y, shooter.vx, shooter.vy)
        }  else {

            alert('game over!')

            if((e.x>450)&&(e.y>290)

                &&(e.x<450 + textWidth)

                &&(e.y<290 + textHeight)){reload()}}

        can = $.canvas(800, 600)
        can.click(function(x,y){
            shooter.vx+= cap(-5,5)((x-shooter.x)/300)
            shooter.vy+= cap(-5,5)((y-shooter.y)/300)
            Bullet(shooter.x, shooter.y, shooter.vx, shooter.vy)
        })


        b= bad(x).d()
        c= coin(x).d()
        g= guy(x)

        I(function(){

            x.X();
            b.update().draw();
            g.update().draw()

        }, 30)




       // _.each(cat(Bullets, Coins, Aliens), function(a){a.draw(); a.update()})
    }

    startGame()

}
function Alien(x,n,n1){

    if(N(n1)){var a=[]
        _.times(n1,function(){
            a.push(Bad(x,n))})
        return a}

    if(N(n)){return Bad(x).du(n)}

    var b={
        x: _.random(1200),
        y: _.random(600),
        radius: _.random(15),
        vx: _.random(10)-5,
        vy: _.random(10)-5
    }

    b.draw=function(){
        //x.cir(b.x,b.y,b.r, 'rgba(124,252,0,0.5)' ,'z')
        x.circ(b.x,b.y, b.r,'g','z')
        x.circ(b.x,b.y, 15,'o','z')

        return b}


    b.update=function(){

        b.radius *= 1.005

        b.x = warp(0,1200,20)(b.x+b.dx)

        b.y = warp(0,600,20)(b.y+b.dy)

        return b}


    b.drawUpdate = b.du=function(n,n2){
        if(N(n)){
            return setInterval(function(){  b.du() },  n)
        }

        return b.draw().update()
    }

    return b}
function Coin(x,n,n1){

    if(N(n1)){
        var a=[];
        _.times(n1,function(){
            a.push( Coin(x, n) )});
        return a
    }

    if(N(n)){

        return Coin(x).du(n)
    }

    var c={
        x: _.random(1200),
        y: _.random(0,600),

        radius: 10,

        vx: _.random(0,10)-5,
        vy: _.random(0,10)-5}

    c.draw=function(){
        x.circle(this.x, this.y, this.radius, 'b', 'y')
        return this
    }

    c.update=function(){
        c.x= warp(0,1200,20)(this.x + this.vx)
        c.y= warp(0,600,20)(this.y+this.vy)
        return c}

    c.drawUpdate=function(n,n2){
        if(N(n)){return setInterval(function(){c.drawUpdate()}, n)}
        return c.draw().update()}

    return c}
//bluecircle game function //never used
coinHits=function(){

    _.each(CoinsArray,

        function(coin, coinId){

            //??? hitTest?
            if( xyc( coin.x, coin.y, game )){

                delete CoinsArray[coinId]

                game.coinScore += 1
            }
        })




    _.each(
        As,function(a,A){

            if (
                xyc(g.x,g.y,a)){
                g.h-=1}

            _.each(Bs,function(b,B){

                if (xyc(b.x,b.y,a)){
                    delete Bs[B]

                    delete As[A]

                    As.push(bad())}})

        })

}
SHADOW=function(){b2d.levelWarp()
      p.linDamp(1).warp()
      setTimeout(function(){
           p.sprite.shad("y", 0, 150, 300)
          badGuy.sprite.shad('o', 40, 40, 40)
      },100)

    $.space(function(){p.polyBul()})

    badGuy=w.badGuy(400, 200).warp().den(.1)
    I(function(){w.s.pen('badGuy health: ' + badGuy.health)}, 200)

    $(w.s.back.canvas).C('p')
    s= w.s.back
    s.bm('me' , function(bm){

        bm.drag().shad('blue', 125,  125,  50).XY(100,100).sXY(.6)

    })

    s.bm('guy', function(bm){

        bm.drag().shad('r', 100,100,10).XY(300,200).sXY(.6)
    })

    s.bm('me' , function(bm){
        bm.drag().shad("z", 25, 25, 50).XY(500,100).sXY(.6)
    })
}
w.badGuy = function (x, y) {
	var w = this
	var that = this
	var b = w.ball(x, y, 60).bS2(this.st.shape(x, y))
	b.draw = function (frame) {
		this.sprite
				.rG(['r', 'g'], [frame[0], frame[1]], 60)
				.dc(0, 0, 60)
	}
	b.health = 100
	b.coll(function () {
		b.health--
	})
	b.K('badGuy')
	funcId = I(update, 300)
	function update() {
		b.draw(frameByHealth(b))
		if (b.health <= 0) {
			clearInterval(funcId)
			b.kill()
		} //$l('dead')
		function frameByHealth(b) {
			if (b.health < 0) {
				b.health = 0
			}
			if (b.health > 100) {
				b.health = 100
			}
			if (b.health < 50) {
				return [1 - ((b.health / 50)), 1]
			}
			else {
				return [0, 1 - ((b.health - 50) / 50)]
			}
		}
	}
	
	return b
}


