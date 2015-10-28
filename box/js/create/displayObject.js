ob = p = cjs.DisplayObject.prototype


ob.W=function(a){
    if(U(a)){ return this.getBounds().width * this.scaleX  }
    this.sX(  this.scaleX * a / this.W() )
    return this}
ob.H=function(a){

    if(U(a)){ return this.getBounds().height * this.scaleY  }

    this.sY( this.scaleY * a / this.H() )

    return this

}
ob.WH=function(w,h){return this.W(w).H(h||w)}



ob.X=function(x,duration){//can add easing :)


    var g=G(arguments)

    if(U(x)){return this.x}

    if(g.p){
        x = this.x+x }
    else if(g.n){$l('n')
        x=this.x-x}
    else if(g.m){$l('m')
        x=this.x*x}
    else if(g.d){$l('d')
        x=this.x/x}


    if(N(duration)){
        tw([this], [{x:x}, duration ])
    }

    else{this.x=x}
    return this}







ob.Y=function(y,duration){//make same same x
    var g=G(arguments)
    if(U(y)){return this.y}
    if(g.p){
        y = this.y+y }
    else if(g.n){
        y=this.y-y}
    else if(g.m){
        y=this.y*y}
    else if(g.d){
        y=this.y/y}


    if(N(duration)){
        tw([this], [{y:y}, duration ])
    }

    else{this.y=y}
    return this}

ob.tickX=function(func){var ob=this

    cjs.tick(function(){ob.X(
        func()
    )})

    return this}

ob.tickY=function(func){var ob=this

        cjs.tick(function(){ob.Y(
                func()
        )})

return this}


ob.XY=function(x,y){
    if(U(x)){return {x:this.x, y:this.y}}

    if(O(x)){
        y= x.y
        x= x.x
    }

    if(U(y)){y=x}
    return this.X(x).Y(y)
}
ob.sX=function(scaleX){this.scaleX=scaleX;return this}
ob.sY=function(scaleY){
    this.scaleY=scaleY;return this}
ob.sXY=function(x,y){if(U(y)){y=x};  return this.sX(x).sY(y)}
ob.rX=function(regX){


    var g=G(arguments), regX=g[0]

    if(U(regX)){return this.regX}

    //if(g.p){this.rX( this.regX + regX  )}

    this.regX=regX;
    return this}
ob.rY=function(regY){var g=G(arguments),regY=g[0]

    //if(g.p){this.Y( this.y + (regY - this.regY)  )}
    if(U(regY)){return this.regY}
    this.regY=regY;return this
}
ob.rXY=function(x,y){y=N(y)?y:x
    return this.rX(x).rY(y)}
ob.kX=function(skewX){
    if(U(skewX)){return this.skewX}
    this.skewX=skewX;return this
}
ob.kY=function(skewY){
    if(U(skewY)){return this.skewY}
    this.skewY=skewY;return this
}
ob.kXY=function(x,y){

    y=N(y)?y:x

    return this.kX(x).kY(y)}
ob.rt=ob.rot=function(rotation){
    var args=G(arguments);
    rotation = args[0]

    if( args.p ){rotation = N(rotation)? rotation: 1
        return this.rT( this.rotation + rotation )  }
    if( args.n ){rotation = N(rotation)? rotation: 1
        return this.rT( this.rotation - rotation )  }

    if(U(rotation)){return this.rotation}
    this.rotation = rotation
    return this}



ob.stg=function(){return this.getStage()}
ob.belowStg = function(){return this.y > this.stg().H()}


ob.hide=function(){this.visible = false;return this}

ob.$ = ob.click=function(func){

    return this.on('click', func)
}
ob.$$= ob.dblclick=function(func){

    return this.on('dblclick', func)
}

ob.remove=function(){
    this.parent.removeChild(this)
    return this}

ob.al=ob.opacity=function(alpha){
    if(U(alpha)){return this.alpha}
    this.alpha=alpha;return this}
ob.N=function(name){
    if(U(name)){return this.name}
    this.name=name;return this}

ob.drag = function(){

    SL(this)

    return this}

ob.rgc=function(){var g=G(arguments),

    x=this.W()/2,
    y=this.H()/2

    if(g[0]===0){
        if(g.p){this.rXY(0,0,'+')}
        else{this.rXY(0,0)}
    }

    else{
        if(g.p){this.rXY(x,y,'+')}
        else{this.rXY(x,y)
        }}

    return this}

ob.gTL=function(x,y){

    if(O(x)){y= x.y;x= x.x}

    return this.globalToLocal(x, y)

}

ob.grow = function(){ this.tween( [{sxy:10},10000]); return this }

ob.RT = function(){RT(this);return this}

ob.bounds=function(a,b,c,d) {
    this.nominalBounds = new cjs.Rectangle(a,b,c,d)
    return this

}
ob.transform=function(pam){

    if( O(pam) && F(pam.getTransform) ){

        pam = pam.getTransform()
    }

    if(A(pam)){
        this.setTransform.apply(this, pam)
        return this
    }

    this.setTransform.apply(

        this,  G(arguments))

    return this
}
ob.rZero=function(a){
    var g=G(arguments),

        x=this.W()/2,
        y=this.H()/2

    if(g.p){

        this.rX( 0, '+')

        //this.X(a, this.regX()-a, '+')

        this.rY( 0, '+')

    }


    else {

        this.rX( 0 )
        this.rY( 0 )   }

    return this}
ob.rCenter=function(){
    var g=G(arguments),

        x=this.W()/2,
        y=this.H()/2

    if(g.p){

        this.rX( x,  '+' )
        this.rY( y,  '+' )

    }

    else {
        this.rX( x )
        this.rY( y )
    }

    return this}

ob.tw=ob.tween = function(){

   var args = G(arguments), tween

    args.unshift(this)

    __tween = tween = cjs.tween.apply(null, args)


return tween}
ob.twL=ob.tweenLoop = function(){

   var args = G(arguments),tween

    args.unshift([this, 'l'])

    tween = __tween = cjs.tween.apply(null, args)

return tween}
ob.flash = function(){var that=this


       this.opacity(0)
        setTimeout(function(){
            that.opacity(1)}, 300)

return this}
ob.spin = function(){this.tweenLoop([{r:360}, 4000]); return this}
ob.dot=function(){
    this.getStage().dot(
        this.X(), this.Y()
    )
    return this}


ob.underMouse = function( ){

    var stage = this.getStage()
    if(stage.mouseInBounds){

        var pt = this.globalToLocal(stage.mouseX, stage.mouseY)

        return this.hitTest(pt.x, pt.y)
    }

}
ob.test=function(x,y){

    if(cjs.isDisplayOb(x)){
        return this.test(this.gTL(x))}

    if(O(x)){y= x.y;x= x.x}

    return this.hitTest(  x,y    )

}




ob.cX=ob.centerX= function(a){
    if(U(a)){return this.x + this.W()/2 }
    return this.X( a- this.W()/2)}
ob.cY = ob.centerY= function(a){
    if(U(a)){return this.y + this.H()/2 }

    return this.Y( a- this.H()/2)
}






ob.toFront = function(){

    numChildren = this.parent.children.length

    this.parent.setChildIndex(this,numChildren-1)

    return this
}

ob.bindBody=function(body){
var that=this

    cjs.tick(function(){

        body.X(that.X( ) )
         body.Y(that.Y() )

        body.rT( that.rT() )
    })

return this}
ob.getTransform=function(){

    return [
        this.x,this.y,this.scaleX,this.scaleY,
        this.rotation,this.skewX,this.skewY,
        this.regX,this.regY

    ]
}

ob.a2=function(toWhat,x,y){

    toWhat.A( this )

    if(N(x)){this.X(x)}
    if(N(y)){this.Y(y)}
return this}
ob.shad = function(color, x,y,blur){

    var shadow = cjs.shad(color, x,y,blur)
    this.shadow = shadow

return this}




//easel physics.. ugh
ob.move=function(){return this.X(this.vx||0,'+').Y(this.vy||0,'+')}
ob.accelerate=function(){
    return this.vX(this.ax||0,'+').vY(this.ay||0,'+')}
ob.jerk=function(){
    return this.aX(this.jx||0,'+').aY(this.jy||0,'+')}
ob.vX= function(a){
    var g=G(arguments);  a=g[0]

    if(g.p){
        this.vx=this.vx+a;
        return this}

    else if(g.n){
        if(N(a)){this.vx=this.vx-a}

        else{this.vx= this.vx * -1}
        return this}
    else if(U(g[0])){return this.vx}
    this.vx=a;
    return this}
ob.vY= function(a){var g=G(arguments);a=g[0]
    if(g.p){this.vy=this.vy+a;return this}
    else if(g.n){if(N(a)){this.vy=this.vy-a}
    else{this.vy= this.vy * -1}
        return this}
    else if(U(g[0])){return this.vy}

    this.vy=a
    return this}
ob.vXY=function(x,y){return this.vX(x).vY(y)}
ob.aX= function(a){
    var g=G(arguments);  a=g[0]

    if(g.p){
        this.vx=this.vx+a;
        return this}

    else if(g.n){
        if(N(a)){this.vx=this.vx-a}

        else{this.vx= this.vx * -1}
        return this}
    else if(U(g[0])){return this.vx}
    this.vx=a;
    return this}
ob.aY= function(a){var g=G(arguments);a=g[0]
    if(g.p){this.vy=this.vy+a;return this}
    else if(g.n){if(N(a)){this.vy=this.vy-a}
    else{this.vy= this.vy * -1}
        return this}
    else if(U(g[0])){return this.vy}

    this.vy=a
    return this}
ob.jX= function(a){
    var g=G(arguments);  a=g[0]

    if(g.p){
        this.vx=this.vx+a;
        return this}

    else if(g.n){
        if(N(a)){this.vx=this.vx-a}

        else{this.vx= this.vx * -1}
        return this}
    else if(U(g[0])){return this.vx}
    this.vx=a;
    return this}
ob.jY= function(a){var g=G(arguments);a=g[0]
    if(g.p){this.vy=this.vy+a;return this}
    else if(g.n){if(N(a)){this.vy=this.vy-a}
    else{this.vy= this.vy * -1}
        return this}
    else if(U(g[0])){return this.vy}

    this.vy=a
    return this}
ob.brake=function(){this.vx = this.vy = 0}
ob.toR =p.moveRight=function(num){
    num=num||20
    this.X(num,'+')
    return this}
ob.toL = p.moveLeft=function(num){
    num=num||20
    this.X(num,'-')
    return this}
ob.toU =p.moveDown=function(num){num=num||20
    this.Y(num,'-')
    return this}
ob.toD =p.moveDown=function(num){num=num||20

    this.Y(num,'+')
    return this}
ob.keyControls = function(num){
    var args=G(arguments),
        that=this

    if(args.P){
        $.kD('left', function(){that.toL(num)})
        $.kD('right', function(){that.toR(num)})}

    if(args.N){
        $.kD('up', function(){that.toU(num)})
        $.kD('down',   function(){that.toD(num)} )}
}
ob.shootBullet = function(){
    shooter = this
    s =stage = shooter.stg()

    bullet = cjs.circ(8, 'w').XY(shooter).a2(s)

    bullet.startMoving(

            (shooter.vx||1)*1.5, (shooter.vy||1) *1.5
    )

}


ob.bounce=function(n){  n=N(n)?n:0
    var that=this,

        stage = this.getStage() ,
        h=stage.H(),
        w=stage.W()

    cjs.tick(

        function(){var x=that.x, y=that.y

            if(x > w - that.W() - n  || x <(n ) ){ that.vX('-') }

            if(y> h - that.H() -n|| y<(n )){ that.vY('-')  }

        })


    return this}

ob.hitByBullet = ob.isPointInMyRectBounds =  function(bullet){var args=G(arguments), bullet=args[0],

    didHit = Math.pointInRectangle(

        bullet.cX(),  bullet.cY(),

        {x:this.cX(),
            y:this.cY(),
            w:this.W(),
            h:this.H()}

    )



    if(args.n){if(didHit){this.remove()}}

    return didHit}


//chick for hits and remove if a hit
ob.killAllIAmHitting = function(){
    var that=this,
        stage = this.getStage()

    _.each(stage.children, function(obj){

        if(that != obj){

            obj.hitByBullet(that, '-')

        }})

}
ob.makeMeAKiller =function(){
    var that = this
    cjs.tick(function(){
        that.killAllIAmHitting()
    })
    return this}



ob.within =ob.inStage =  function(){var args=G(arguments),
    x= this.x,
    y= this.y,
    stg = this.stg(),
    w= stg.W()-100,
    h= stg.H()-100,
    withinStage = x>0 && x<w && y>0 && y<h
    if(args.n){if(!withinStage){this.remove()}}
    return withinStage}

testInStage = function(){

    s = cjs.stg()

    s.bm('me', function(b){me=b

        me.startMoving(10, 10)

        cjs.tick(function(){ $l(me.inStage()) })

    })

}


ob.startMoving=function(x,y){

    if(x){this.vX(x)}
    if(y){this.vY(y)}
    var that=this
    cjs.Ticker.on('tick', function(){
        that.X(  that.X() + (that.vx ||0)  )
        that.Y(  that.Y() + (that.vy ||0)  )
    })

    return this}

ob.warpX=function(low,high,cush){var that = this,
    warp = Math.warp(low,high,cush)
    cjs.tick(function(){that.x =warp(that.x)})


    return this}
ob.warpY=function(low,high,cush){var that = this,
    warp = Math.warp(low,high,cush)
    cjs.tick(function(){that.y =warp(that.y)})
    return this}
ob.warp=function(n){n=n||0
    var stage = this.getStage()
    this.warpX(0, stage.W(), n)
    this.warpY(0, stage.H(), n)
    return this}



SETTRANSFORM=function(){

    s = cjs.stage(800).A()
    s.bm('me',function(me){

        b=me


        b.setTransform(0,0,2,.5,0,40,4,2,3)

        m = b.getMatrix()

        function tf(a,b,c,d,e,f,g,h,i){
            return this.x=a||0,
                this.y=b||0,
                this.scaleX=null==c?1:c,
                this.scaleY=null==d?1:d,
                this.rotation=e||0,
                this.skewX=f||0,
                this.skewY=g||0,
                this.regX =h||0,
                this.regY =i||0,
                this}})



}


cjs.isDisplayOb=function(ob){
    return O(ob)  &&  F(ob.getStage)
}