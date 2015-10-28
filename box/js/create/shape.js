gx=cjs.Graphics.prototype
gx.poly=function(verts, f, s,width){var that = this



    //  _.each(arguments,function(vert){that.lt(vert[0],vert[1])});this.cp()

    if(N(verts[0])){

        _.each(arguments,function(vert){
            that.lt(vert[0],vert[1])}); this.cp()
    }


    else {
        this.fs(f,s,width)
        _.each(verts,function(vert){
            that.lt(vert[0],vert[1])});
        this.cp()
    }


    return this}


gx.fs=function(f,s,width){

    this.f(O(f)?f: oO('c', f||'black'))

    this.s(O(s)?s: oO('c', s||null))

    this.ss(N(width)?width:2)

    return this
}


h =  cjs.Shape.prototype
h.circ= h.circle= function(x,y,radius,fc, sc){
    var gx=this.graphics
    if(fc){gx.f(fc)}
    if(sc){gx.s(fc)}
    gx.dc(x,y,radius)
    return this}
h.rect=  h.rectangle=function(x,y,w,h,fc,sc){
    var gx=this.graphics
    if(fc){gx.f(fc)}
    if(sc){gx.s(fc)}
    gx.dr(x,y,w,h)
    return this}
h.poly=function(verts, f, s, width){var that = this, gx = this.graphics
    if(N(verts[0])) //verts passed in directly
    {
        _.each(arguments,
            function(vert){gx.lt(vert[0],vert[1])});
        gx.cp()}


    else{this.graphics.fs(f,s,width)
        {_.each(verts,function(vert){
            gx.lt(vert[0],vert[1])
        }); gx.cp()}

    }



return this}
h.clear=function(){this.graphics.clear();return this}
h.same=function(){return cjs.shape(this)}

h.f=function(fill){
    if(S(fill)){fill = oO('c', fill)}
    this.graphics.f(fill)
    return this}
h.s=function(fill){
    if(S(fill)){fill = oO('c', fill)}
    this.graphics.s(fill)
    return this}
h.dc=function(){
    this.graphics.dc.apply(
        this.graphics, arguments)
    return this}
h.c=function(rad){
    return this.dc(0,0,rad)
}
h.dr=function(){
    this.graphics.dr.apply(
        this.graphics, arguments)
    return this}

h.fs=function(){
    this.graphics.fs.apply(
        this.graphics, arguments)

return this}

h.ef=function(){
    this.graphics.endFill.apply(
        this.graphics, arguments)

    return this}


h.rG= h.radGrad=function(cols, ratios,
                         x1, y1, r1, x2, y2, r2){

    var args = _.toArray(arguments),circs,len

    cols= _.map(cols,
        function(col){
            return oO('c',col)
        })



    circs = _.rest([1,2,3,4,5], 2)
    len = circs.len  //use switch!

    x1=0; y1=0; r1=0; x2=0; y2=0; r2=50

    if(len==1){r2 = circs[0]}

    else if(len==2){r1 = circs[0]; r2 = circs[1]}

    else if(len==3){
        x1 = x2 = circs[0]
       y1 = y1 = circs[1]
        r2 = circs[2]
    }

    else if(len==4){
        x1 = x2 = circs[0]
        y1 = y1 = circs[1]
        r1 = circs[2]
        r2 = circs[3]
    }

    else if(len==5){
        x1=circs[0]; y1=circs[1]; x2 = circs[2]; y2 = circs[3]
        r2 = circs[4]
    }

    else if(len==6){
        x1 = circs[0]; y1 = circs[1]; x2 = circs[2]; y2 = circs[3]
        r1 = circs[4]; r2 = circs[5]
    }

    this.graphics.beginRadialGradientFill( cols, ratios, x1, y1, r1, x2,y2,r2)

    return this}







h.lG= h.linGrad=function(){

    var args = _.toArray(arguments)

    args[0]= _.map(args[0], function(col){ return oO('c',col) })

    this.graphics.beginLinearGradientFill.apply(
        this.graphics, args)
    return this}


cjs.isShape=function(h){
    return O(h) && h.graphics
}

cjs.graphics= function(a){return new cjs.Graphics(a)}

cjs.isCont=function(cont){
    if(O(cont)){
        if(cont.addContainer){return true}
        else {return false }
    }
}



 cjs.circ = cjs.circle = function(radius, fc ){

     if(!N(radius)){return cjs.circ(8, radius)}

     fc =  oO('c', fc|| 'z')

     return cjs.shape().f(fc).dc(0,0,radius)
 }



cjs.diamond = function self(width, height, fc,sc){

    fc=fc||'green'
    sc=sc||'white'

    width = width || 100
    height = height || width
    halfwidth = width/2
    halfheight = height/2
    var h = new createjs.Shape()
    h.graphics.f(fc).s(sc)
        .mt(0, -halfheight)
        .lt(-halfwidth,0).lt(0,halfheight)
        .lt(halfwidth,0).lt(0,-halfheight)

    return h}



cjs.rect2   = function self(width, height, x, y, fc, sc){
    width = width || 100
    height = height || width

    x=N(x)?x:0; y=N(y)?y:0
    fc=fc||'green'
    sc=sc||'white'

    halfwidth = width/2
    halfheight = height/2
    var h = new createjs.Shape()

    h.graphics.f(fc).s(sc)
        .mt(-halfwidth+x, -halfheight+y)
        .lt(-halfwidth+x,halfheight+y)
        .lt(halfwidth+x, halfheight+y)
        .lt(halfwidth+x,-halfheight+y)
        .lt(-halfwidth+x,-halfheight+y)

    return h}

cjs.rect= function self(width, height, fc, sc){
    width = width || 100
    height = height || width
    fc=fc||'green'
    sc=sc||'white'

    halfwidth = width/2
    halfheight = height/2
    var h = new cjs.Shape()

    h.graphics.f(fc).s(sc)
        .mt(-halfwidth, -halfheight)
        .lt(-halfwidth,halfheight).lt(halfwidth, halfheight)
        .lt(halfwidth,-halfheight).lt(-halfwidth,-halfheight)

    return h}


//canon
cjs.ball=function(z,fc,sc){

    var b= cjs.circle(0,0,z,fc,sc)

    b.r=z
    b.d=z+z

    b.T=function(a){
        if(U(a)){return b.y()-b.r}
        b.y(a+ b.r);return b}
    b.B=function(a){if(U(a)){return b.y()+b.r}
        b.y(a-b.r);return b}
    b.L=function(a){if(U(a)){return b.x()-b.r}
        b.x(a+b.r);return b}
    b.R=function(a){if(U(a)){return b.x()+b.r}
        b.x(a- b.r);return b}
    b.F=1
    b.fall=function(r){b.t(function(){
        if(r){if(ballBox(b,r)){b.F=0}else{b.F=1}}
        if(b.F){b.y(10,'+')}
    })}
    return b}
cjs.circle2=function(r,z,x,y){

    graphics = new cjs.Graphics()
    if( !S( r ) ){  return circle2( 'red', r, z, x )}
    z = N(z) ? z : 32
    x = N(x) ? x : 100
    y = N(y) ? y : 100
    graphics.ss( z/8 ).f( r, 'black' ).dc( 0, 0, z )
    return cjs.shape( graphics ).XY( x || 100, y || 100 )

}
cjs.circle3 = function( x, y, r, fc, sc ){

    var shape, h

    shape = h = cjs.shape()

    if( O(x) ){

        return cir0(   x.x,    x.y,   x.r,    x.fc,   x.sc  ) }

    x = x || 0

    y = y || 0

    r = r || 8

    fc = fc || 'w'

    sc = sc || 'z'

    shape.circle( x, y, r, fc, sc )

    SL( shape )

    return shape }
cjs.box=function( w, h, fc, sc ){

    w = w||200

    h = h||w

    var b=rct(

            0 - w/2, 0-h/2, w, h, fc, sc
    )

    b.wr = w/2

    b.hr = h/2

    b.wd = w

    b.hd = h


    b.top = b.T = function( a ){

        if( U(a) ){ return b.y() - b.hr }

        b.y( a + b.hr )

        return b }


    b.bottom = b.B = function(a){

        if( U(a) ){  return b.y() + b.hr   }


        b.y( a - b.hr )

        return b
    }


    b.left =b.L = function(a){

        if( U(a) ){ return b.x() - b.wr }

        b.x( a + b.wr )

        return b
    }


    b.right =b.R = function(a){

        if(U(a)){ return b.x() + b.wr }
        b.x(a- b.wr);return b}


    b.fall=function(){

        b.t(function(){

            if(b.F){b.y(40,'+')}  //****

            if(ballBox(b,r)){b.F=0}

        })}

    return b}
cjs.ballBox=function(bl,bx,buff){ buff=buff||100
    var b= bl.bottom() >= bx.top()  && bl.top()<=bx.top()+buff  &&

        bl.x()>=bx.left()  &&   bl.x()<=bx.right()

    if(b){bl.bottom(bx.top())}

    return b}







ct = cjs.Container.prototype

cjs.shape= cjs.shp= function(x,y,f,s,width,opt){
    if(cjs.isShape(x)){return new cjs.Shape(x.graphics)}
    var h = new cjs.Shape()
    if(N(x)){h.X(x)}
    if(N(y)){h.Y(y)}

    h.fs(f,s,width)

    if(opt=='drag'){h.drag()}
    // use a switch statement here!  i love it!
    return h}







ct.shape = function(){
    return cjs.shape.apply(cjs, arguments).a2(this)
}




ct.cir=function(x,y,r,f,s,width,opt){
    return this.shape(x,y,f,s,width,opt).dc(0,0, r)}



ct.poly =function(){ // ?
    var h = this.shape()
    h.poly.apply(h, arguments)
    return h}


ct.art = function(x,y,f,s){var g=G(arguments)
    if(U(x)){alert('must at LEAST define x'); return}
    if(!N(x)){alert('x not a number! but must be, lah'); return}
    y= N(g[1])?g[1]:x
    f= S(g[2])?oO('c',g[2]):null
    s= S(g[2])?oO('c',g[3]):f
    var shp = cjs.shp(x, y, f, s)
    this.A(shp)
    if(g.p){shp.drag()}
    return shp}





cjs.cirX=function(stg,x,y,r,f,s,width,opt){
    var shp=cjs.shape(stg,x,y,f,s,width,opt) // ss = N(ss)?ss: radius/8
    shp.dc(0,0,r)
    return shp}










USINGLAYERSINEASEL=function(){Q(['me','guy'],function(q){s=cjs.S()

    me  = q.bm('me').a2(s).sXY(3)
    guy = q.bm('guy').a2(s).sXY(.5).drag()

    $.button('s.sXY(2)', function () {s.sXY(2)}).A()


    cjs.tick(function(){
        me.X( guy.x * 2.2 - 140)
        me.Y( guy.y * .2 )})

})}




SHAPES=function(){z()
    s = cjs.stage(500, 500).A()
    s.can.P('a').XY(300)

    s.bm('me', 0.2, function(bm){})

    s.A(cjs.circle(100, 'blue','green').XY(100, 100).drag())

    s.circle(100, 100, 10, 'red', 'yellow' )
        .circle(10,100,100,'black','purple')
        .circle(100, 10, 100, 'blue', 'red' )
        .circle(150,150,120,'red','blue')
        .circle(30,'brown','gray')




}



EASELART=function(){z()

    s=stage = cjs.stage(500,600).A()

    s.can.P('a').XY(300)

    s.A( h = shape = cjs.shape() )


    h.rect( 100, 200,  0, 200, 'red' )
        .rect( 100, 100,  100, 20, 'green' )
        .rect( 145, 120,  10, 80, 'orange' )
        .circ(105, 100,20,'blue')
        .circ(105, 100,8,'black')
        .circ(200, 100,20,'blue')
        .circ(200, 100,8,'black')
        .circ(100,20,100,'green')
        .rXY(100, 300).XY(100,300).drag()


    p = function(){

        shape.tweenLoop(
            [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
            [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
            [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
            [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
            [{r:25}, 200],[{r:-25},400],[{r:0}, 200],
            [{r:25}, 200],[{r:-25},400],[{r:0}, 200])

        shape.tweenLoop(
            [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
            [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
            [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
            [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
            [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
            [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
            [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200],
            [{sxy:1.5}, 200],[{sxy:.5},400],[{sxy:1}, 200]
        )}
    p()
}

CENTERSHAPE=function(){z()


    stage = cjs.stage(500,600).A()

    shape = new cjs.Shape()

    SL(shape)

    stage.A(shape)

    shape.graphics.f("orange").drawPolyStar(100, 100, 50, 5, 0.6, -90)

    shape.RECT( 0, 0,  100, 100,   'a' )

    shape.RECT( 0, -75,  25, 50,   'b' )

    shape.RECT( 0, -200,  100, 100,   'r' )

    shape.circle(100,200, 40, 'z','x')

    shape.graphics.drawRoundRectComplex(  0,0, 300,300, 20,20,30,40 )


    shape.XY(200)

    stage.bm('me', function( b ){ me=b

        me.XY(200)
        me.sXY(.4)
    })

}




GRAPHICSTEST=function(){
       stage = cjs.stage(800,500).A()


    canvas=stage.canvas


        // grab canvas width and height for later calculations:
        w = canvas.width
        h = canvas.height


   img=$.img('me', layout)[0]


    function layout() {
        var arr = [createStar, createHex, createLineTo, createRadialGradientFill,
            createEllipse, createRectGradientFill, createBitmapFill, createRoundRect]

        var padding = 5
        var _width = 155
        var _height = 155
        var cols = 4
        var space = 0


        var border = createBorder();

        _.times(arr.length, function(i){

            var tile = arr[i]()

            tile.x=    42 + (_width+padding)*(i%cols)

            tile.y=    42 + (i/cols|0)*(_height+padding)

            stage.A(tile)
        })

        stage.A(border)
        stage.update()
    }

    function createBorder(){

        var s=cjs.shape()

        s.graphics.beginBitmapStroke(img).setStrokeStyle(32).dr(20, 20, 920, 360)

        return cjs.container().A(s)
    }
    function createBitmapFill(){
        var container = createTile();
        var s = cjs.shape().XY(12,10)

        var mtx = new createjs.Matrix2D().rotate(1)
        s.graphics.beginBitmapFill(img, null, mtx).setStrokeStyle(8)
            .beginRadialGradientStroke(["#FFF", "#000"], [0, 1], 0, 0, 0, 0, 30, 130).dr(0, 0, 130, 130)

        return cjs.container().A(s)
    }
    function createRectGradientFill(){

        var s = cjs.shape().XY(12,10)

        s.graphics.beginLinearGradientFill(["#FFF", "#000"], [0, 1], 0, 0, 0, 130).dr(0, 0, 130, 130)

        return createTile().A(s)}
    function createEllipse(){

        var s = cjs.shape().XY(40,10)

        s.graphics.f(createjs.Graphics.getRGB(0, 0x66, 0x99, 0.5))
            .setStrokeStyle(4).beginLinearGradientStroke(["#F00", "#000"], [0, 1], 0, 0, 70, 140)
            .drawEllipse(0,0,70,140,8)
        return createTile().A(s)
    }
    function createRadialGradientFill(){

        var s = cjs.shape().XY(80)
        s.graphics.ss(8).beginStroke("#f0f")
            .beginRadialGradientFill(["#FFF", "#0FF"], [0, 1], 0, 0, 0, 0, 0, 40).dc(0, 0, 40)
        return createTile().A(s)}
    function createLineTo(){

        var s = cjs.shape()

        s.graphics.setStrokeStyle(16,"round","round").beginStroke("#f90")
            .moveTo(20, 10).lineTo(90, 90).lineTo(90,140)

        return createTile().A(s)}
    function createHex(){

        var s =  cjs.shape().XY(80,40)

        s.graphics.beginFill("pink")
            .drawPolyStar(0, 0, 40, 6)
            .drawPolyStar(0, 75, 40, 6)
            .drawPolyStar(45, 45, 20, 6)

        return createTile().A(s)}
    function createStar(){
        var s = cjs.shape().XY(80,85)
        s.graphics.setStrokeStyle(1).beginStroke(cjs.Graphics.getRGB(255, 255, 0))
            .beginFill("yellow").endStroke().drawPolyStar(0, 0, 80, 5, 0.9, -90)
        return createTile().A(s)
    }
    function createRoundRect(){
        var s = cjs.shape().XY(12)
        s.graphics.setStrokeStyle(6).beginStroke("red").beginFill("green").drawRoundRect(0, 0, 130, 130, 30);
        return createTile().A(s)
    }
    function createTile(){

        var bg = cjs.shape()

        bg.graphics.beginFill('#CCCCCC').dr(0, 0, 155, 155).endFill()

        bg.alpha = 0.25

        return cjs.container().A(bg)
    }
}



RADIALGRADRECT=function(){s=cjs.S()





    x1=100
    y1=150
    r1=20
    x2=100
    y2=150
    r2=100


    h=cjs.shape(10, 10).a2(s).drag()


       change= function(){

      //  h.remove()

       // h=cjs.shape(10, 10).a2(s).drag()

        h.graphics.beginRadialGradientFill(  ["red", 'blue', "yellow"],  [0, .5, 1],

            x1,
            y1,
            r1,
            x2,
            y2,
            r2


        )


        .dr(0,0,400,400)
        .endFill()
            // x--

        r1++
      r2++
}

    setInterval(change, 1000)

    change()
 }


RADIALGRADCIRC=function(){s=cjs.S()





    x1=0
    y1=0
    r1=10
    x2=0
    y2=0
    r2=100


    h=cjs.shape(10, 10).a2(s).drag()


    change= function(){

        //  h.remove()

        // h=cjs.shape(10, 10).a2(s).drag()

        h.graphics.beginRadialGradientFill(  [ 'blue', "orange"],  [0,  1],

            x1,
            y1,
            r1,
            x2,
            y2,
            r2


        )


            .dc(0, 0,100)
            .endFill()
        // x--

       // r1++
       // r2++
    }

    setInterval(change, 1000)

    change()

    n = nip()
    //h2 =cjs.shape(500,100).a2(s);h2.graphics.beginRadialGradientFill(["red","yellow"],  [0, 1],100, 100, 0, 100, 100, 50).dc(50,50, 100)
}



nip=function(){
    x1=0
    y1=0
    r1=10
    x2=0
    y2=0
    r2=100

   var h= cjs.shape(10, 10).a2(s).drag().opacity(.8)
        h.graphics.beginRadialGradientFill(  [ 'blue', "orange"],  [0,  1],
            x1,   y1,   r1,     x2,    y2,    r2   )
            .dc(0, 0,100)
            .endFill()

 return h}





EASELCONVEX=function(){s=cjs.S()
    s.poly([[-100,-10],[0,100],[100,20]],
      'red','white',10).XY(200,300)
    s.poly([[-20,-80],[-100,-200],[100,5]]).XY(300, 200)
    s.poly(
      [[-40,40],[-40,-40],[40,-40], [40,30]],
      'blue', 'white').XY(200,200)}
CONVEX=function(){
    w=b2d.W({grav:0}).debug()


    b = w.dyn(300, 300)

    f =b.convex('green', [[0,0],[0,-200],[100,0]]  )
    b.convex('blue', [[0,30],[-300,-20],[100,0]] )
    b.convex('pink', [[0,0],[0,-20],[10,0]],
        [[0,30],[-30,-20],[10,0]] )



    b2 = w.dyn(300, 300)
    b2.convex('red', [ [0,0],[0,-20],[10,0] ] )
    b2.convex([[0,30],[-30,-20],[10,0]] )

    b3 = w.dyn(300, 300)
    b3.convex( 'green',[
        [-150,0],[-120,-20],[-80, -50],[0,-30]

    ] )

    b3.convex('red',
        [ [-30,-30], [-20,10], [-10,60]
        ] )

    b3.convex('orange',
        [ [-30, -30], [-20,-50], [ 10, -20]
        ] )



    w.verts( 300, 500,
        [
            ['pink', [-20,-20],[0,-30],[10,10]],
            ['brown',[0,0],[30,-50],[50,-10]]
        ]

    )




   dot = function(){
       b.dot()
       f.dot()
   }
    //setTimeout(dot, 5000)
    //w.convex !!!!



    _.times(50, function(){
        w.circ(200, 30, 5)
    })

    b.fixedRot(true)
    cjs.tick(function(){
        b.linVel(0)
        b.angVel(0)
    })

}
VERTS=function(){w=b2d.W().debug()

    thingy = [['pink',[-20,-20],[0,-30],[10,10]],
    ['brown',[0,0],[30,-50],[50,-10]]]

    _.times(100, function(){

        w.verts(Math.random()*600, Math.random()*300+200, thingy)
    })


}

PITFALL=function(){

     b2d.levelScrollX()


    turtle = [
        ['green',[0,0],[-50,-10],[-40,-20],[0,-40],[20,-10]]

        ,  ['yellow',[10,-10],[20,-30],[50,-15], [45,-5]]

        , ['yellow',

            [-50,10],[-50,-10],[-40,-10],[-40,10]
        ]

        , ['yellow',

            [-10,10],[-10,-10],[0,-10],[0,10]
        ]
    ]



    turtle2 = [
        ['green',[0,0],[-50,-10],[-40,-20],[0,-40],[20,-10]]

        ,  ['yellow',[-60, -30], [-50,-60], [-20,-45], [-15,-35] ]



        , ['yellow',

            [-50,10],[-50,-10],[-40,-10],[-40,10]
        ]

        , ['yellow',

            [-10,10],[-10,-10],[0,-10],[0,10]
        ]
    ]




   t= w.vertsKin(400, 280, turtle).fixedRot(true)
   t2= w.vertsKin(700, 280, turtle2).fixedRot(true)


    setInterval(function(){
        t2.linVel(5,0)
        setTimeout(function(){  t2.linVel(-5,0) },1000)
    }, 2000)

}





LINGRADBG=function(){w=b2d.W()

   s = w.s


   h =  s.shape()



}

THREECANS=function(){


    c1 = $.can('a', 800, 400)

    c2 = $.can('X', 800, 400)

    c3 = $.can('X', 800, 400)




}






