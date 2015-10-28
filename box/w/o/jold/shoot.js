    $d=console.dir;


    //Cs=[];for(var i=0;i<10;i++){Cs.push(Coin(c))};

    //As=[];for(var i=0;i<5;i++){As.push(Alien(c))};
    Bs=[];


function shoot(){
    game=true
    g=guy=new createjs.Shape()

    g.g.f('blue').s('yellow').dc(0,0,20)
    g.x= 0
    g.y= 0
    g.dx =0
    g.dy =0
    g.h= 1000

    stage.A(g)
    stage.tick()

    stage.$(function(x,y){
        if(!game){dead()}

        else{
            g.dX+=(x-g.x)/100
            g.dY+=(y-g.y)/100
            Bullet(g)
        }})

        //$l('x:',x);$l('y:',y);$l('gx:',g.x);$l('gy:',g.y);//

    onTick(function(){
        _.each(Bs,function(b){
            b.scaleX*=1.02;b.scaleY*=1.02
        })

        g.x=warp(0, c.W(), 0)(g.x +=g.dX)

        g.y=warp(0, c.H(), 0)(g.y +=g.dY)})


    $(shoot)

    _.each(cat(Bs,Cs,As),function(a){
      a.draw()
      a.update()})

    g.draw()
    g.update()

}


function dead(){alert('game over!')
    if((e.x>450)&&(e.y>290)&&(e.x<450+textWidth)&&(e.y<290+textHeight)){
            location.reload(true)}}

Bullet=function(){

    c.bm('me',

        function(b){
        //b.g.s('yellow').f('black').dc(0,0,8);
         b.x = g.x
         b.y = g.y
         b.dX = g.dX*-1
         b.dY = g.dY*-1
         b.update=function(){
             b.x-=b.dX
             b.y-=b.dY}

         Bs.push(b)

        b.scaleX *= .1
        b.scaleY *= .1
        c.A(b)},

        1)
}


  Coin=function(C){var c=Circ(10);

      c.draw=function(){

          C.circle(c.x, c.y, c.r, 'black','yellow')};

      c.update=function(){
          c.x=warp(0,1200,20)(c.x+c.dX);
          c.y=warp(0,600,20)(c.y+c.dY)};
      return c}



   Alien=function(c){

       var alien = Circ(10)

       alien.draw=function(){

           canvas.circle(alien.x, alien.y, alien.r,'green','black')
           canvas.circle(alien.x, alien.y, 10,'orange','black')

       }

       alien.update=function(){
         alien.r *= 1.001
         alien.x=warp(0,1200,20)(alien.x + alien.dx)
         alien.y=warp(0,600,20)(alien.y + alien.dy)
     }

       return alien}





  hits=function(){
      _.each(Cs,function(c,C){
          if(xyc(c.x,c.y,g)){delete Cs[C]
              g.c+=1}})

      _.each(As,function(a,A){
         if (xyc(g.x,g.y,a)){g.h -= 1}

          _.each(Bs,function(b,B){
             if (xyc(b.x, b.y, a)){

                 delete Bs[B]
                 delete As[A]
                 As.push(new Alien)

             }})})
  }



Circ=function(r,a,b){

    return {

        x:  _.random(0, a|| 1200),
        y:  _.random(0, b|| 600),
        dx: _.random(0, 10) - 5,
        dy: _.random(0, 10) - 5,
        r:r
    }

}
