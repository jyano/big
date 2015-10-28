





designPats={

    strategy:'decouple sprites from painters',
    command: 'implement behaviors',
    flyweight: 'rep many sprites with single instance'
}


painter='obj that paints sprites with a paint(sprite, x) method'


spriteMethods={


    paint:'delegates painting to sprites painter (if it has one, and if it is visible)',
    update:'executes each of sprites behaviors in order they were added'
}


behavior='obj with execute(sprite, x,time) method'

Sprite=function(name, painter, behaviors){

     var s={
         name:name,
         painter:painter,
         behaviors:behaviors || []
     }


    s.top=0
    s.left=0
    s.w=0
    s.h=0
    s.vX=0
    s.vY=0
    s.vs=true
    s.animating=false


    s.paint=function(x){
        if(s.vs && s.painter) {s.painter.paint(s,x)}
    }

    s.update=function(x,time){
    _e(behaviors, function(b){

        b.execute(s,x,time)

    })
    }


return s}





FALLING=function(){


    s=St(1000).a()


    platHeightMets=10 //meters

    pixPerMet= s.h()-TOP/platHeightMets


    moveBall=function(){    exec: function(spr,x,time){   spr.top += spr.vY/fps  } }





}