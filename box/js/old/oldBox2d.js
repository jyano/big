SuperBoxBodyX= sBdX=function(b){

    b.destroy=function(){
        this.GetWorld().destroy(this)
        return this}

    b.createFixture=b.cF   =b.f=function(a){

        a = a||fix()

        return b.CreateFixture(a)
    }

    b.mass = b.m    =b.gM  =function(m){if(U(m)){return b.GetMass()}}

    b.worldCenter = b.wC   =b.c=  b.gWC=function(){
        return b.GetWorldCenter()}

    b.awake= b.aw   =function(){
        var g=G(arguments)
        b.SetAwake(g.n?false:true)
        return b}

    b.worldPoint =b.wP   =function(x,y){

        var p= b.GetWorldPoint( b2.V(x/30,y/30) )

        return b2.V(p.x*30, p.y*30)
    }







    //use only these functions for positioning/movement
    //and.. they have no dependencies!!! :)
    b.XY= b.xy = function(x,y){

        if(x==='*'){x =Math.random()*10 }
        if(y==='*'){y =Math.random()*10 }
        if(U(x)){var pos = this.GetPosition()
            return {x:parseInt(pos.x*30), y:parseInt(pos.y*30)}}
        y=N(y)?y:x
        this.SetPosition({ x:x/30, y:y/30 })
        return this}
    b.X = b.x=function(x){
        var pos = this.XY()
        if(U(x)){return pos.x}
        return this.XY(x, pos.y)}
    b.Y = b.y=function(y){
        var pos = this.XY()
        if(U(y)){return pos.y}
        return this.XY(pos.x,y)}



    ////
    /// so then these are all dep?! :)
    b.pos = b.ps   = b.p  =function(x,y){

        var p = this.GetPosition()

        if(U(x)){
            return {x: p.x * 30, y:p.y * 30}
        }

        if(N(x)){

            x={x:x, y:(N(y)?y:p.y)}
        }

        this.SetPosition(x)

        return this}
    b.sP=function(x,y){b.SetPosition(bV(x/30, y/30))}
    b.sX=function(x){b.sP(x,b.y())}
    b.sY=function(y){b.sP(b.x(),y)}
    ///
    ////
    ////



    b.fixtureList=b.gFL=function(){return sFx(b.GetFixtureList())}


    b.T= b.ty=function(a){
        if(U(a)){return b.GetType()}
        b.SetType(a)
        return b}


    b.t=function(a){
        if(U(a)){return b.type}
        b.type=a;
        return b}

    b.tf=  function(a){

        if(U(a)){  return b.GetTransform() }

        b.SetTransform(a)
        return b}


    b.angVel=b.aV=function(a){

        if(U(a)){return b.GetAngularVelocity()}

        b.SetAngularVelocity(a)

        return b}


    b.linearVelocity=b.lV=function(n1,n2){

        if(U(n1)){return b.GetLinearVelocity()}

        if(N(n1)){a=bV(n1,n2)}
        b.SetLinearVelocity(a)

        return b}


    //set fixed rotation
    b.sFR= b.fR=function(a){b.SetFixedRotation(a)
        return b}

    //get next
    b.next = b.n= b.gN=function(){ return SuperBoxBody(b.GetNext())  }


    b.destroyFixture=b.dF=function(a){
        b.DestroyFixture(a)
        return b}


    b.angVel=b.aV=function(a){
        if(U(a)){return b.angularVelocity}
        b.angularVelocity=a;
        return b}



    b.angDamp= b.aD=function(a){
        if(U(a)){return b.GetAngularDamping()}
        b.SetAngularDamping(a)
        return b}


    b.linDamp=b.lD=function(a){
        if(U(a)){return b.GetLinearDamping()}
        b.SetLinearDamping(a)
        return b}


    //fixed rotation?
    b.fixedRot=b.fR=function(a){

        b.fixedRotation=a?true:false
        return b}

    b.rot = b.rT = b.rt=function(angle){
        if(U(angle)){return Math.toDegrees(this.GetAngle())}
        this.SetAngle(Math.toRadians(angle))
        return this}





    // get/set user data
    b.uD=function(a){
        if(U(a)){return b.GetUserData()}
        b.SetUserData(a);
        return b}

    b.is=function(userData){

        return b.uD() == userData
    }

    //user data first fixture?
    b.uDF=function(a){
        var f= b.gFL()
        if(U(a)){return f.GetUserData()}
        f.SetUserData(a);
        return b}




    //apply impulse. pass impulse as two nums, or obj
    //and pass in location, defaults to body center
    b.applyImpulse =b.aI  = function(v,c,c2){
        if(N(c)){return b.aI(bV(v,c),c2)}
        if(U(c)){c=b.c()}
        b.ApplyImpulse(v,c)
        return b}

    //apply force. pass impulse as two nums, or obj
    //and pass in location, defaults to body center
    b.applyForce = b.aF  = function(v,c,c2){

        if(N(c)){return b.aF(

            bV(v, c), c2

        )}

        if( U(c) ){ c = b.worldCenter() }

        b.ApplyForce(v, c)

        return b}

    return b}


b2.worldX = bWX = WorldX=function(a,b){


    var w = new b2.World(a, D(b)?b:false),

        world = w

    return world

    world.debugData  =w.dD=w.sDD=w.sdd=w.dDD=function(a){

        if( U(a) ){  w.DrawDebugData() }   else{  w.SetDebugDraw(a) }

        return this

    }

    w.step = w.st=function(){

        var g=G(arguments)

        _a( w.Step, g,  w )

        return this }
    w.clearForces = w.cF =w.clF=function(){  w.ClearForces(); return this }
    w.createBody = w.b  = w.cB=function(d){

        return SuperBoxBody(

            w.CreateBody( d  || BodyDef()  )

        )
    }
    w.A = w.addBody = w.add = w.a =function(b,f){

        b=w.createBody(b)

        if(f){   if(A(f)){

            _.each( f, function(f){   b.createFixture(f)   } )}

        else { b.createFixture(f) } }

        return b}

    w.destroyBody = w.destroy = w.dB=function(a){ w.DestroyBody(a); return this }

    w.destroyAllBodies=function(){
        return this.eachBody(function(b){ w.destroy(b)  })
    }

    w.getBodyList = w.bL =function(){

        return SuperBoxBody(  w.GetBodyList() )

    }


    w.eachBody = w.each =  w.e = function( func, userData ){

        //w.eB=for each body
        //can pass a cb to be run on EACH body
        //can also pass a uD to restrict cb to
        //run only on bodies with that uD

        var a = SuperBoxBody( w.GetBodyList() )

        _.times( w.GetBodyCount() - 1,

            function(){

                SuperBoxBody(a)

                if( !userData ){ func(a) }

                else { if( a.GetUserData() == userData ){ func(a) } }

                a = SuperBoxBody( a.GetNext() )

            })

        return this}

    w.getBodyCount = w.bC = w.gBC=function(){  return this.GetBodyCount()  }
    w.createJoint=w.j=w.cJ=function(a){

        var SuperJoint = sJt=function(j){


            //shared
            j.init= j.i  = j.i1=function(){


                j.Initialize.apply(j,  G(arguments))

                return j}

            j.collide = j.cC=function(a){
                j.collideConnected=a?true:false; return j
            }

            //pops
            j.target = j.sT    = function(a,b){
                if(!O(a)){a=bV(a,b)}
                j.SetTarget(a)

                return j}

            j.freq =j.f  =function(a){j.frequencyHz=a;return j}

            j.len = j.l  =function(a){
                j.length=a/30
                return j}

            j.len2 =function(len){

                if( U(len) ){ return j.GetLength() * 30 }

                j.SetLength( len/30 )

                return j

            }

            j.dampRat =j.d  =function(a){j.dampingRatio=a;return j}


            //motor
            j.maxSpeed=j.maxMotorSpeed=j.mMS=function(a){
                j.maxMotorSpeed=a
                return j}

            //motor rev



            j.mt=j.motor =j.enableMotor = j.eM = function(a){
                j.EnableMotor( a ? true : false )
                return j}

            j.speed = j.motorSpeed=j.mS=function(speed){
                if(U(speed)){return this.GetMotorSpeed()}
                this.SetMotorSpeed(speed)
                return this}

            j.torque = function(torq){
                if(U(torq)){
                    return this.GetMotorTorque()}
                this.SetMaxMotorTorque(torq)
                return this}

            j.maxTorque = j.mMT=  j.mT=function(a,b,c){
                j.SetMaxMotorTorque(a,b,c); return j}

            j.maxForce = j.mMF=  j.mF=function(a,b,c){
                j.SetMaxMotorForce(a,b,c); return j}


            j.lm= j.limits =j.setLimits = j.sL = function(a,b){

                a = N( a ) ? a : 20

                b = N( b ) ? b : 180

                j.SetLimits( tRad(a), tRad(b) )

                return j}


            j.enableLimits= j.enableLimit = j.eL=function(a){
                j.EnableLimit( a?true:false)
                return j}


            return j}


        var j=w.CreateJoint(a)

        return SuperJoint(j)

    }
    w.destroyJoint=w.dJ=w.dj=function(a){ w.DestroyJoint(a); return this}
    w.setContactFilter = w.sCF = w.SetContactFilter
    w.setContactListener = w.sCL = w.SetContactListener
    w.onBeginContact = w.oB=function(f){

        w.sCL(
            ContactListener().b(f)
        )

        return this
    }
    w.onEndContact = w.oE = function(func){

        w.setContactListener(

            ContactListener().endContact( func ) )

        return this}
    w.getGroundBody = w.gB =w.gGB=function(){  return this.GetGroundBody()  }
    w.queryAABB = w.Q =w.q =w.qAB=function(a,b){  w.QueryAABB(a,b); return this}

    w.Revolute = function(a,b, c,d, e,f){var g=G(arguments)

        //pass in body1, body2, world-bV = body1-center
        //can also pass body1, body2, world-x, world-y
        //or body1, body2, local-axis-A-x, local-axis-A-y, local-axis-B-x,local-axis-B-y


        var j= SuperJointDef( new b2.Joints.b2RevoluteJointDef() )

        var joint = j

        joint.init =joint.i = function(){
            joint.Initialize.apply(joint,  G(arguments) )
            return joint}

        //convenience functions
        joint.motor = joint.mt = function(speed, torque, enable){

            joint.speed(speed)

            joint.maxTorque( N(torque)? torque : 100)

            if( enable != '-' ){ joint.enableMotor(1) }

            return joint }


        joint.limits= joint.lm= function( lowAng, upAng, enable ){

            joint.lowAng( lowAng ).upAng( upAng )

            if( enable != '-' ){ joint.enableLimits(1) }

            return joint }


        if( U(c) ){ c = a.worldCenter() }

        if( O(c) ){  joint.init( a, b, c )}

        else if(N(e)){   joint.A(a).B(b).lAA( bV(c/30,d/30)).lAB( bV(e/30,f/30)) }

        else if(N(c)){    joint.init(a,b, bV(c/30,d/30)) }



        w.createJoint( joint )

        return joint}
    w.Rev=function(a,b,c,d){

        return world.createJoint(

            RevoluteJointDef( a, b, c, d)

        )}
    w.Prism=function(a,b,c,d,e,f,g,h){

        var joint= world.createJoint(

            PrismaticJointDef( a, b, c, d,e,f,g,h)

        )

        return SuperPrismatic(joint)}
    w.Gear=function(a,b,c){

        return world.createJoint( Gear(a,b,c) )
        function Gear(bA, bB, ratio){
            var gearJoint = new b2.Joints.b2GearJointDef()
            gearJoint.joint1 = bA
            gearJoint.joint2 = bB
            gearJoint.bodyA = bA.GetBodyA()
            gearJoint.bodyB = bB.GetBodyA()
            gearJoint.ratio = N(ratio)? ratio : 1
            return gearJoint}}
    w.FixBody=function(x,y){

        return this.addBody(  dBD(x,y),fix())
    }

    w=b2.worldPlugins(w)


    w.makeWalls=function(ops) {

        var width = this.canvas.width, height = this.canvas.height


        if (ops) {
            if (S(ops.walls)) {
                window[ ops.walls ]()
            }
            if (F(ops.walls)) {
                ops.walls()
            }
        }

        else {
            w.bii(height, width / 2, width, 40).uD('floor')
            w.bii(width / 2, 0, width, 40).uD('ceiling')
            w.bii(0, height / 2, 40, height).uD('rightWall')
            w.bii(width, height / 2, 40, height).uD('leftWall')
        }
    }


    w.getBodyAtPoint=function( x,y ){
        var selectedBody=null
        w.QueryAABB( queryFunc, AB( x-.001, y-.001, x+.001, y+.001 ) )
        return selectedBody? SuperBoxBody(selectedBody): false
        function queryFunc(fxt){
            var fixtIsStatic = SuperFixture(fxt).getType( sB )
            if( !fixtIsStatic &&  fxt.testPoint(mX, mY)){       // f.gB().gT() !=sB && f.gSh().tP(f.gB().gTf(), bV(mX,mY))
                selectedBody = fxt.gB()
                return false}
            return true}}



    return world}

b2.worldPlugins=function(w){


    w.ba  =function(x,y,r){

        x = x || 100

        y = N(y) ? y : x

        r = r || 20

        return this.addBody(

            DynamicBodyDef( x, y ),

            CircleFixture( r )

        )

    }
    w.baa =function(x,y,r){
        x=x||100
        y=N(y)?y:x
        r=r||20

        return this.addBody( StaticBodyDef(x,y), CircleFixture(r) )

    }
    w.bi  =function(x,y,W,H){//=brk=brick=

        x = N(x) ? x : 60; y = N(y) ? y : x
        W = N(W) ? W : 30; H = N(H) ? H : W

        return this.addBody(

            DynamicBodyDef(x,y),    PolyFixture(W, H).r(0))

    }
    w.bii =function(x,y,W,H){//brk2=brick=

        x=N(x)?x:60;
        y=N(y)?y:x
        W=N(W)?W:30; H=N(H)?H:W

        return this.addBody(StaticBodyDef(x,y),   PolyFixture(W, H).r(0) )

    }





    w.addRandomBody = w.randomFixture=function(){
        var body= this.A( b2.dynamicDef().xy(), b2.randomFixture() )
        return body}

    w.addRandomBodies=function(howMany){howMany=howMany||10
        _.times( howMany, function(){w.addRandomBody( b2.dynamicDef().xy(), b2.randomFixture() )})
        return this}
    w.addTenBalls=function(num){num=num||10
        _.times(num, function(i){
            this.ba(100 + (i*80), 200)
        })

        return this}

    w.addHundBalls =function(num){num=num||100
        _.times(num, function(i){
            this.ba( 100  +(i*8),  50, 10) })
        return this}


    w.addTim=function(num){
        var tim

        if(U(num)){
            var tim = w.ba().uD('tim')
            tim = bindr('guy', tim, .3)
            return tim
        }

        _.times(num, function(){
            var tim= w.ba().uD('tim')
            bindr('guy', tim,.3)
        })

        return this}

    return this}



rJtX=function(o){

    var j=SuperJointDef(new BXJ.b2RevoluteJointDef())

    j.i=function(a,b,c,d,e,f){
        var g=G(arguments)

        if(U(c)){c=a.c()}
        j.Initialize(a,b,c)

        return j}

    if(O(o)){

        if(o.i){  _a(j.i, o.i, j  )}


        if(N(o.l)){j.l(o.l)} else {j.l(1)}
        if(N(o.f)){j.f(o.f)} else {j.f(3)}
        if(N(o.d)){j.d(o.d)} else {j.d(.1)}
        if((o.c)){j.cC(1)}  else {j.cC(0)}
        if(o.lAA){j.lAA(o.lAA)}
        if(o.lAB){j.lAB(o.lAB)}
        if(o.rA){j.rA(o.rA)}
        if(o.eL){j.eL(o.eL)}
        if(o.lA){j.lA(o.lA)}

        if(o.uA){ j.uA(o.uA) }


        if(o.eM){j.eM(o.eM?true:false)}

        if(o.mS){j.mS(o.mS)}
        if(o.mMT){j.mMT(o.mMT)}

        //localAnchorA - the point in body A around which it will rotate
        //localAnchorB - the point in body B around which it will rotate
        //referenceAngle - an angle between bodies considered to be zero for the joint angle
        //enableLimit - whether the joint limits will be active
        //lowerAngle - angle for the lower limit
        //upperAngle - angle for the upper limit
        //enableMotor - whether the joint motor will be active
        //motorSpeed - the target speed of the joint motor
        //maxMotorTorque - the maximum allowable torque the motor can use

        return w.cJ(j)}

    return sJt(j)

}
