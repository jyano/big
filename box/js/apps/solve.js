
CONNECT=function(){z();//m$$('location=location')

    stage = createjs.stage(1000).tick().A()

    pink = cjs.circle(300, 'pink', 'purple').XY(520, 500)//.rXY(100)

    stage.A(pink)

    container = new createjs.Container()
    stage.A(container)

    green = cjs.circle( 200,'green','purple').XY(320,300)//.rXY(100)
    yellow = cjs.circle( 100,'yellow','purple').XY(250)
    red= cjs.circle( 40,'red','purple').XY(200,100)
    orange = cjs.circle( 20,'orange','purple').XY(300)

    container.A(green, yellow, red, orange )

    LS(yellow, container)
    SL(green)
    SL(green,pink)

    SL(yellow)
    SL(red,container)
    SL(orange, red)

}



//brilliant demo
MATRIX1=function(){// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')

    z()

    $.div('b', 50, 50).A()

    stage = s = cjs.stage(1600,1000).tick().A()

    // on stage enter, change background color, though you
    // cant see it here because stage fills screen
    // this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
    stage.on('e', co)

    //make a container
    stage.ct(function(c, s){

        //the little me clicks do not hit the 'big' me underneath it.  that's normal.
        //but it does hit the container.  but this example shows off 'remove', so it only hits once
        //however, it continues to propogate on to the container. hmmm..

        c.bm('me',
            function(b){
                b.sXY(.2).XY(100,80)
                b.on(click, function(){$l('lit')},'/')  //on click, log('lit'), just once (remove listener)!

        })





// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
        c.bm('me',function(bm){
            bm.sXY(.4).XY(100,180)

            bm.on('click', function(){$l('mid')}, '-')  //on click, log('mid'), and stop prop

        })






        c.bm('me',function(bm){
            bm.sXY(1.5)
            bm.on('click',function(){$l('big')})  //on click, log('big')

 })

        //on click, log('con')
        c.on('click',  function(){$l('con')})

    })



    stage.ct(   function(c){

            var vn=0,
                rvn=0,
                on=0,
                ron=0


            c.X(200)


            c.mug(
                function(b){
                    b.sXY(.8).XY(200,80)
                })


            c.mug(
                function(b){
                    b.sXY(.8).XY(100,280)
                })


            c.mg(
                function(b){
                    b.sXY(.8).XY(340,180)
                })

            //this shows over/out vs rollover/rollout
            //over/out get retriggered when switching between connected sprites
            //rollover/rollout does not because it is still touching 'something'

        c.on('mouseover',function(){c.X(10,'+');$l('v: '+vn++)})
        c.on('rollover',function(){c.X(20,'-');$l('rv: '+rvn++)})
        c.on('mouseout',function(){c.Y(10,'+');$l('o: '+on++)})
        c.on('rollout',function(){c.Y(20,'-');$l('ro: '+ron++)})

        }

    ).MV(40)





    stage.container(function(container, stage){

        container.X(700)
        container.mug(function(bm){
            bm.sXY(.8).XY(200,80)
        })

        container.mug(function(bm){
            bm.sXY(.8).XY(100,280)
        })

        container.mug(function(bm){
            bm.sXY(.8).XY(340,180)
        })

        //this example shows which sprites are acted upon with over/rollover
        //over only affects one
        //rollover affects ALL
        //if you enter a sprite from outside, they all grow (via rollover),
        //and the one sprite grows double (via over)



        container.on('mouseover',function(){$l('mouseover')
            this.sXY(.01,'+')
        })

        container.on('rollover',function(){$l('rv')
            this.sXY(.01,'+')})

        container.on('mouseout',function(){ })
        container.on('rollout',function(){ })


        // in summary,
        // rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
        // BUT, they will all recieve events separately

    }).MV(40) //??? mouse events? speed for some mouse checking thing
    stage.container(function(container,stage){

        container.x = 1400

        container.bm('me',function(bm){


            //make the little me slide the entire container
            //it acts as a handle! (for its container)
            lit = bm.sXY(.2).XY(100,80)

            SL(bm, container)

            container.bm('me',function(bm){
//big me will scale the little me
                big = bm.sXY(2).XY(100,180)

                SC(bm, lit)

                container.bm('me',function(bm){ bm.sXY(.6).XY(150,180)
                    SL(bm)
                    RT(bm, big) })
            })

        })


//guy slides stage
        container.bm('guy',function(bm){
            bm.sXY(.4).XY(100,180)
            SL(bm, stage)
        })



    })




}

MATRIX0=function(){

// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')
// SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')

    z()

    $l('matrix')

    $.div('blue', 50, 50).A()

    stage=s=createjs.stage(1600,1000).A().tick()


    // on stage enter, change background color, though you
    // cant see it here because stage fills screen
    // this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
    stage.on('mouseenter', function(){$('body').C($r())})

    stage.A( container=c=new createjs.Container()  )

    container.bm('me',  function(bm){
            //b.sxy(.2).xy(100,80)

            //b.o('$', fL('lit'), '/')  //on click, log('lit'), just once (remove listener)!

        })



    //make a container
    stage.ct(function(c, s){

        //the little me clicks do not hit the 'big' me underneath it.  that's normal.
        //but it does hit the container.  but this example shows off 'remove', so it only hits once
        //however, it continues to propogate on to the container. hmmm..



// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
        c.bm('me',function(b){
            b.sXY(.4).XY(100,180)

            //b.o('$', fL('mid'), '-')  //on click, log('mid'), and stop prop

        })


        c.b('me',function(b){
            b.sXY(1.5)
           // b.o('$',fL('big'))  //on click, log('big')

        })

        //on click, log('con')
        //c.o('$',  fL('con'))

    })

    stage.ct(  function(c){

            var vn=0,
                rvn=0,
                on=0,
                ron=0


            c.X(200)


            c.mug(
                function(b){
                    b.sXY(.8).XY(200,80)
                })


            c.mug(
                function(b){
                    b.sXY(.8).XY(100,280)
                })


            c.mg(
                function(b){
                    b.sXY(.8).XY(340,180)
                })

            //this shows over/out vs rollover/rollout
            //over/out get retriggered when switching between connected sprites
            //rollover/rollout does not because it is still touching 'something'

           // c.o('v',function(){c.x(10,'+');$l('v: '+vn++)})
            //c.o('rv',function(){c.x(20,'-');$l('rv: '+rvn++)})
           // c.o('o',function(){c.y(10,'+');$l('o: '+on++)})
          //  c.o('ro',function(){c.y(20,'-');$l('ro: '+ron++)})

        }  )//.MV(40)

    stage.ct(function(c,s){

        c.x(700)
        c.mg(function(b){b.sxy(.8).xy(200,80)})
        c.mg(function(b){b.sxy(.8).xy(100,280)})
        c.mg(function(b){b.sxy(.8).xy(340,180)})

        //this example shows which sprites are acted upon with over/rollover
        //over only affects one
        //rollover affects ALL
        //if you enter a sprite from outside, they all grow (via rollover),
        //and the one sprite grows double (via over)



        c.o('v',function(g,e){
            $l('v')
            g.sxy(.01,'+')})

        c.o('rv',function(g,e){
            $l('rv')
            g.sxy(.01,'+')})

        c.o('o',function(q,e,g){ })
        c.o('ro',function(q,e,g){ })


        // in summary,
        // rollover sees all touching sprites as just one sprite, ignoring crossing the mouse over their boundaries..
        // BUT, they will all recieve events separately

    }).MV(40)

    stage.ct(function(container,stage){

        container.X(1400)

        container.bm('me',function(bm){

            //make the little me slide the entire container
            //it acts as a handle! (for its container)
            lit=bm.sXY(.2).XY(100,80)
            SL(bm,container)





            container.bm('me',function(bm){
//big me will scale the little me
                big=bm.sXY(2).XY(100,180)

                SC(bm,lit)

                container.bm('me',function(bm){ bm.sXY(.6).XY(150,180)
                    SL(bm)
                    RT(bm, big) })
            })

        })


//guy slides stage
        container.bm('guy',function(bm){
            bm.sXY(.4).XY(100,180)
            createjs.bindSlide(bm, stage)
        })



    })




}

MATRIX=function(){// b2.o('rv',function(q,e){}  ,'-' )//c.uP(e.X, e.Y).y(10,'+')//SL(b2,ct)// SL(mid); //RT(b2,m)// gg= c.uP(e.X, e.Y,'+')

    z()

    $l('matrix')


    stage=s=createjs.stage(1600,1000).A().tick()


    // on stage enter, change background color, though you
    // cant see it here because stage fills screen
    // this lets u see, but messes other stuff up: qq(s.ob.canvas).drg()
    stage.on('mouseenter', function(){$('body').C($r())})

    stage.A( container=c=new createjs.Container()  )

    container.bm('me',  function(bm){

        bm.sXY(.2).XY(100,80)
        bm.on('click', function(){
            $l('lit')}, this, true) //just once

    })

    //make a container
    stage.container(function(container, stage){

        //the little me clicks do not hit the 'big' me underneath it.  that's normal.
        //but it does hit the container.  but this example shows off 'remove', so it only hits once
        //however, it continues to propogate on to the container. hmmm..

// the middle size me demonstrates stopPropogation
// if you click it, the container does not feel the click
        container.bm('me',function(bm){  //future: c.bm('me', .4, function(bm){})
            bm.sXY(.4).XY(100,180)

            bm.on('click', function(e){$l('mid')
                e.stopPropagation()})

        })


        container.bm('me',function(bm){
            bm.sXY(1.5)
            .on('click',function(){$l('big')})

        })

        container.on('click', function(){
            $l('con')
        })


    })



}


MOUSEENTERSTAGE=function(){z()
    stage = s = cjs.stage(500, 500).A().tick()

    s.bm('me')

    s.on('mouseenter', function(){
        $('body').prepend('once<br>')
    }, null, true)

    s.on('mouseenter', function(){
        $('body').prepend('many<br>')
    }, null, false)}



HANDLEEVENT=function(){z()

    s=createjs.stage(500, 500).A().tick()


    s.bm('me', function(b){me=b
        cb = b.on('pressmove', function(){
            this.x++
        })
    })


    s.bm('guy', function(b){

        b.handleEvent=function(){
            this.y++}

        b.on('pressmove', b)



    })



}

REMOVEEVENT=function(){z()

    s = createjs.stage(500, 500).A().tick()


    s.bm('me', function(b){me=b
        cb = b.on('pressmove', function(){this.x++})
    })


    s.bm('guy', function(b){

        b.handleEvent=function(){
            this.y++
            me.off('pressmove', cb)
        }

        b.on('pressmove', b)

    })



}


BUBBLE=function(){z()

    stage = cjs.stage(500, 500).tick().A()

    output = new createjs.Text(
            "try clicking on the background vs the label text\n\nthe background & label are both inside of a Container named 'button'",
            "13px courier").lWH(280,13).XY(190,10)


    background = new createjs.Shape().N("background")

    background.graphics.f("red").drawRoundRect(0, 0, 150, 60, 10)


   label=new createjs.Text("click me!", "bold 24px Arial", "#FFFFFF").XY(150/2, 60/2)
       .N('label')
       .tA("center")
       .tB("middle")


    button = new createjs.Container().XY(20).N('button').A(background, label)

    // setting mouseChildren to false will cause events to be dispatched directly from the button instead of its children.
    // button.mouseChildren = false;

    stage.A(button, output)

    // set up listeners for all display objects, for both the non-capture (bubble / target) and capture phases:


    _.each([stage,button,label,background], function(target){
        target.on("click", handleClick, false);
        target.on("click", handleClick, true)
    })

    stage.update()
}

function handleClick(e){

    if (e.currentTarget == stage && e.eventPhase == 1) {
        // this is the first dispatch in the event life cycle, clear the output.

        output.text = "target : eventPhase : currentTarget\n"}


    output.text += e.target.name + " : " + e.eventPhase+" : " + e.currentTarget.name+"\n";

    if (e.currentTarget == stage && e.eventPhase == 3) {
        // this is the last dispatch in the event life cycle, render the stage.
        stage.update()
    }


}

//SPACE BOWLING
BOWL=function(){


    stage = s = createjs.stage(1000,1000).tick().A()

    //append a container to the stage

    container = c = new createjs.Container()
    stage.A(container)

    plX= stage.W()/2

    plY=150

    plR=100

    plr=75 // this seems to determine the radius of the 'cluster' of balls

    oRng=8 //outer ring

    nRng=3// number of rings
//when set to three, it seems like middle ring is 3 less than outer, and inner ring is 1

    circle = cjs.circle(plX, plY, plR, 'yellow')

    container.A(circle) // cr = Hx().c(plR,'y').xy(plX,plY)


    rngSp = plr/(nRng-1)


    aA=[]


    var ast = function(x,y,r,m,f){

        return {

            x:x, y:y, radius:radius,

            m:m,  //?

            f:f,

            vX:0, vY:0, player:false}

       }


    _.times(nRng, function(r){

        var crR=0,
            ang=0,
            rngR=0

        if(r==nRng-1){crR=1}

        else{
            crR=oRng-(r*3)
            ang=360/crR
            rngR=plr-(rngSp*r)}

        _.times(crR, function(a){var x=0,y=0

            if(r==nRng-1){x=plX;y=plY}

            else{

                x=plX+(rngR*cos((ang*a)*PI/180))
                y=plX+(rngR*sin((ang*a)*PI/180))-350}

            aA.push( ast(x,y,10,5,0.95) )

            container.A(
                cjs.circle(10,'black').XY(x,y))


        })

    })
}





GRID=function(){z()

    stage = s = createjs.stage(1000,1000).tick().A()
    container = c = new createjs.Container()

    stage.A(container)



    cjs.bindSlide(container)

    rows=5;
    cols=6;
    sqP=12;
    sqS=80

    sqSP=sqS + sqP

    _.times(rows * cols, function(i){

         drawSquare(container,


                 sqSP * (i % cols),

                 sqSP * Math.floor(i/cols)
        )

    })

    function drawSquare(container,x,y){
        var rectangle = new createjs.Shape()
        container.A(rectangle)
        rectangle.graphics.beginFill($r()).drawRect(5, 5, 70, 70)
        if(x){rectangle.X(x)}
        if(y){rectangle.Y(y)}
        return rectangle}}


testShape = function(){z()

    stage = createjs.stage(600).tick().A()
    shape = new createjs.Shape()
    stage.A(shape)
    shape.graphics.f('red').s('black').dc(400,400,200).dr(100,0,200,200)

}



TANGLE=function(){z()

    a = $.divA('r',50,50).XY(50).A().pad(10)

    b = $.divA('b',100,100).XY(100).A().pad(10)

    c = $.divA('g',200,200).XY(200).A().pad(10)

    d = $.divA('y',400,400).XY(400).A().pad(10)

    y=function(aa,bb,cc,dd){


        if(aa && U(bb)){  aa.A().P('a') }

        if( bb ){ bb.A( aa.P('static') )  }

        if( dd ){ dd.A( cc.P('s') )  }

    }


}




ZX=function(){

    z()
    a = $.editDiv().A().C('a')
    b = $.editDiv().A().C('b')

}






BORDERS=function(){z()

    change=function(){



        $.qim('me', 100).A().borderColor('g').borderStyle('dashed')//.borderWidth(20)

            .J({"border-top-width": 10}, 1000)
            .J({"border-bottom-width": 10}, 1000)
            .J({"border-left-width": 10}, 1000)
            .J({"border-right-width": 10}, 1000)


            .J({"padding-top":10}, 1000)
            .J({"padding-bottom":10}, 1000)

            .J({"padding-left":10},1000)
            .J({"padding-right":10},1000)

            .J({"margin-top":10},1000)
            .J({"margin-bottom":10},1000)
            .J({"margin-left":10},1000)
            .J({"margin-right":10},1000)
            .J({"margin-top":0},1000)
            .J({"margin-bottom":0},1000)
            .J({"margin-left":0},1000)
            .J({"margin-right":0},1000)
            .J({"padding-top":0},1000)
            .J({"padding-bottom":0},1000)
            .J({"padding-left":0},1000)
            .J({"padding-right":0},1000)

            .J({"border-top-width":0},1000)
            .J({"border-bottom-width":0},1000)
            .J({"border-left-width":0},1000)
            .J({"border-right-width":0},1000)
    }


    $.$$(

        function(){
            z();
            _.times(10, change)}
    )

    _.times(10, change)
}


BORDERS1=function(){

   change=function(){

          $.img('me').WH(100).A().C( 'g' ) .bs( '-' )  //bs??

           .j({bt:40},1000)

               .j({bb:40},1000)
               .j({bl:40},1000)
               .j({br:40}, 1000)
               .j({gt:40}, 1000)
               .j({gb:40}, 1000)
               .j({gl:40},1000).j({gr:40},1000).j({mt:40},1000)
           .j({mb:40},1000).j({ml:40},1000).j({mr:40},1000)
           .j({mt:0},1000).j({mb:0},1000).j({ml:0},1000).j({mr:0},1000)
           .j({gt:0},1000).j({gb:0},1000).j({gl:0},1000).j({gr:0},1000)
           .j({bt:0},1000)
              .j({bb:0},1000).j({bl:0},1000).j({br:0},1000)
   }


    m$$(   function(){  z();   _.times(10, change)}  )

    _.times(10, change)
}



$.fn.animloop=function(){var that=this
    this.show( "slow" )
    this.animate({"marginLeft": "300px" } , 2000 )
        .animate({"marginLeft" : "0px" } , 2000 )
    this.hide( "slow", function(){that.animloop()})
}





CORNERS=function(){
    $.fn.grow = function(){

        originalWidth =  this.W()
        originalHeight = this.H()

        this.on('mousedown', function(e){


            mx = e.clientX
            my = e.clientY


            $.mouseMove(function(e){

                this.WH( originalWidth +  e.clientX - mx,
                        originalHeight +  e.clientY - my )

            })

            $.mouseUp(function(){ $(this).off() })  //mouseUp anything?
            this.children().on('mousedown', function(e){e.stopPropagation()})

        })

    }


   //  dva(2, 2, 2, 2 )


    div = $.divA(200,200).XY(200)


    div.A(

        $.divA('red', 20, 20).top(-10).left(-10),
        $.divA('yellow', 20, 20).bottom(-10).right(-10),
        $.divA('green', 20, 20).top(-10).right(-10),
        $.divA('blue', 20, 20).bottom(-10).left(-10)

    )


    i = $.divF('purple').col('white').fontSize( 20).opacity(.2).textAlign('center')
        .width('100%').top(100)


    i.H( W() + ' * ' + H() )

    Z(function(){  i.H(  W() + ' * ' + H() )  })


    $.$( function(){

        rat( function(){ co() } , 10 )

    })

    i.grow()
}














