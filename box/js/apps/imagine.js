QUEUE=function(){z()

    s= cjs.stage(500).tick().A()

    queue = new createjs.LoadQueue()

    queue.on("complete", handleComplete, this)

    queue.loadManifest(

        [{id:"myImage", src:"/me.png"}, {id:"guyImage", src:"/guy.png"}])

    function handleComplete(){

        image = queue.getResult("myImage")

        s.A(   cjs.bm(image)   )

    }

}

QUEUEMUG=function(){z()

    s = cjs.stage(500, 500).tick().A()

    qu = Ql().c(graphics, this).l([
        {id:"mug", src:"/getMug" },
        {id:"me", src:"/me.png"}

    ])

    ////// ok, this is what i thought.. its how i can preload someone's mug as 'mug' !
    function graphics(){

       // mug= s.bData( qu.gR("mug") ).drag()

        me = cjs.bm( qu.gR("me") ).drag()
        s.A( me )


    }

}


//// ***
mugCont=function(stage){



      qu= new cjs.LoadQueue().complete(onMug).manifest([{id:"mug", src:"/myMug" }  ])

    cont= cjs.container()

    cont.flame=function(){
        cont.desuit()
        cont.A(

            cont.suit = cjs.container().bm('flame', function(flame){  })
        )
    }

    cont.uni=function(){
        cont.desuit()
        cont.A(

            cont.suit= cjs.container().bm('uni', function(uni){
                uni.x(200).y(200)
                cont.mug.sxy(.2).x(300)

            }))}
    cont.guy=function(){cont.desuit()
        cont.A(

            cont.suit= cjs.container().bm('guy', function(guy){

                guy.spin()
                cont.spin()

            })
        )}

    cont.desuit=function(){

        cont.mug.sXY(1).XY(200)
        if(cont.suit){
            cont.suit.remove()
            cont.suit=null
        }
    }


    function onMug(){

        mug = qu.getResult("mug")

        // cont.bData( mug )//.rgc('+')


        cont.A( cont.mug = cjs.bm(mug))



    }

    return cont}


CONTMUG=function(){z()

    s= cjs.stage(1000).A()

    s.A(  m = mugCont()  )//.rgc('+')

   // SL(m)

}
//// ***





Cycle1=function(){

    var cont=new createjs.Container()

    cont.mug(function(mug){

        mug.sXY(.4)

        cont.bm('uni', function(bitmap){

            bitmap.sX(-.8).X(-20).Y(200).rX(240).rY(80)
                bitmap.name='uni'
                createjs.bindTransform(mug, cont)
                createjs.bindRotate(bitmap, cont)

        })

    })

    return cont}


Cycle2=function(){

    var cont= new createjs.Container()

    var qu =  new createjs.LoadQueue().complete( graphics ).manifest([

        {id:"mug", src:"/getMug" },
        {id:"uni", src:"/uni.png"}

    ])

    function graphics(){


        cont.bm(
            qu.getResult("uni"),
            function(b){bitmap = b.sX(-.8).X(-20).Y(200).rX(240).rY(80)
                bitmap.name=('uni')

            })

        cont.bm(
            $.img($.parseJSON(qu.getResult("mug"))),
              function(b){mug =b.sXY(.4)
              })

        SL(mug, cont)

       cjs.tween([mug,'l'],   [{y:-10},200],   [{y:10},200],  [{y:0},200])

    }


    return cont}


CYCLE=function(){z()
    s= $stage(800, 800).A().tick()
   c1=Cycle1()
    c2=Cycle2()
    s.A( c1, c2 )}

Flame1=function(){
    var c=new cjs.Container().drag()
    c.bm('flame', function(b){

             tweens.shakeY(b)

            c.mug(function(b){

                b.rCenter()

                tweens.shakeX( tweens.rott(b) )

                    c.bm('flame', tweens.shakeX)

                })

            c.on('dblclick',function(){

                c.bm('flame',
                    function(b){
                        b.sXY(.2)
                        tweens.prod1(b)})

                c.bm('flame',

                    function(b){
                        b.sXY(.2)
                        tweens.prod2(b)



                    })})

        })
    return c}


FLAME=function(){
    s= $stage(800, 800).A().tick()
    f=Flame1().X(300)
    s.A(  f )
}



Bod2=function(){

    var c1=new createjs.Container(),

        cL=new createjs.Container()


    c1.mug(function(m){

        SL(m, c1)

        m.sXY(.4)

       // c1.cI(m, 0)

    })


    c1.bm('arm',function(b){//arm=b;
        b.name = 'arm';
        b.sX(-.8).X(140).Y(100).rX(200).rY(80)

        RT(b)

        b.on('dblclick',function(){tweens.rpunch(b)})})

    cL.bm('uparm',
        function(b){//lu=b
            b.name=('lu')
            RT(b, cL)
            b.sX(.8).X(80).Y(180).rX(200).rY(80)

            cL.on('dblclick',
                function(){
                    tweens.lpunch(cL)})

            cL.X(140).Y(100).rX(100).rY(100)
        })



    cL.bm('forearm',

        function(b){//lf=b
            b.name = ('lf')

            b.sX(.8).X(-100).Y(140).rX(20).rY(120)

            RT(b)

        })


    return c1.A(cL) }


Bod1=function(){

    var  outerCont = new createjs.Container().drag()

    var  innerCont= new createjs.Container()


    outerCont.A( innerCont )

    outerCont.mug(

        function(m){
            m.sXY(.4)

           createjs.bindSlide(m, outerCont)


            outerCont.bm('arm', function(b){

                b.name = 'arm'

                b.sX(-.8).XY(140,100).rXY(200,80)

                createjs.bindRotate(b)

                b.on('dblclick',function(){  tweens.rpunch(b)  })

            })

            innerCont.XY(40, 120).rXY(40, 100)

            innerCont.bm('uparm', function(b){

                b.name  = 'lu'

                b.sX(.8).XY(80,180).rXY(200, 80)

               createjs.bindRotate(b, innerCont)})

            innerCont.bm('forearm',  function(b){

                b.name='lf'

                b.XY(-100,140).sX(.8).rXY(20,120)

                createjs.bindRotate(b)


                innerCont.on('dblclick', function(){tweens.lpunch(b)


                })


            })

        }  )

    return b=outerCont}


BODS=function(){ z()
    createjs.stage(800, 800).A().tick()
        .A( Bod1(),  Bod2() )
}




BOD=function(){z()

    s= createjs.stage(800, 800).A().tick()

    var b1=Bod1(), b2=Bod2().XY(300),

        f=Flame1().XY(300,500),

        cyc=Cycle1().X(400), cyc2=Cycle2().X(500)

    s.A(b1, f, b2, cyc, cyc2)

}