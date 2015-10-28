
SuperFixture=sFx=function(f){

    f.den=f.d=function(a){f.density=a;return f}
    f.fric = f.f=function(a){f.friction=a;return f}
    f.rest= f.r=function(a){
        f.restitution=a;
        return f}



    f.gB=  f.bd=function(){

        return  f.GetBody()

    }

    f.sh= f.s=function(a){
        f.shape=a;
        return f}


    f.gSh=function(){
        return SuperShape(f.GetShape())
    }



    f.sSAP  =f.sP=f.setShapeAsAPoly=function(){return f.s(pSh())}
    f.set=function(x,y){
        f.shape.Set(x,y)
        return f
    }
    f.sAB=function(a,b,p,A){

        if(!p){f.shape.SetAsBox(a/30,b/30)}

        else{ f.shape.SetAsOrientedBox(a/30,b/30,p,A)}
        return f}


    f.testPoint= f.tP=function( m, y ){

        if( N(y) ){ m = bV(m, y) }

        return  SuperShape( f.GetShape() ).tPt(

            f.GetBody().GetTransform(),

            m

        )
    }




    f.getType = f.gT=function(someType){

        var thisType =  this.GetBody() .GetType()

        return  D(someType)?  (thisType == someType) : thisType

    }





    f.gI=function(a){
        if(U(a)){return f.filter.groupIndex}
        f.filter.groupIndex=a; return f}

    f.category = f.cB=function(a){
        if(U(a)){return f.filter.categoryBits}
        f.filter.categoryBits=a; return f}

    f.mask = f.mB=function(a){
        if(U(a)){return f.filter.maskBits}
        f.filter.maskBits=a; return f}


    f.gI=function(a){
        if(U(a)){return f.filter.groupIndex}
        f.filter.groupIndex=a; return f}


    f.sensor = f.iS= function(a){
        if(U(a)){
            return f.isSensor
        }

        f.isSensor =a? true: false

        return f}




    f.userData=f.uD=function(a){
        if(U(a)){return f.GetUserData() }
        f.SetUserData(a);return f}
    return f
}


SuperFixtureDef =sFxD=function(fixture){
    var f=fixture


    fixture.den =fixture.d=function(density){
        fixture.density = density;
        return fixture}

    fixture.fric =f.f=function(a){f.friction=a;return f}
    fixture.rest =f.r=function(a){f.restitution=a;return f}


    fixture.getBody =fixture.gB =function(){

        return  fixture.GetBody()

    }


    fixture.setShape =fixture.sh= fixture.s=function(shape){
        fixture.shape=shape;
        return fixture}


    fixture.getShape =fixture.gSh=function(){

        return SuperShape(fixture.GetShape())
    }

    fixture.sSAP  =fixture.sP=f.setShapeAsAPoly=function(){

        return fixture.s(PolyShape())

    }


    f.set=function(x,y){
        f.shape.Set(x,y)
        return f
    }

    f.sAB=function(a,b,p,A){

        if(!p){f.shape.SetAsBox(a/30,b/30)}

        else{ f.shape.SetAsOrientedBox(a/30,b/30,p,A)}
        return f}


    fixture.tP = fixture.txPt=function( m, y ){

        if( N( y ) ){ m = bV(m,y) }

        return sSh( fixture.GetShape() ).tPt(

            fixture.GetBody( ).getTransform(),

            m

        )}




    f.getType=f.gT=function(a){

        var t= f.GetBody() .T()

        if( D(a) ){return t==a}

        return t}





    f.gI=function(a){
        if(U(a)){return f.filter.groupIndex}
        f.filter.groupIndex=a; return f}

    f.category=f.cB=function(a){
        if(U(a)){return f.filter.categoryBits}
        f.filter.categoryBits=a; return f}
    f.mask=f.mB=function(a){
        if(U(a)){return f.filter.maskBits}
        f.filter.maskBits=a; return f}

    f.gI=function(a){
        if(U(a)){return f.filter.groupIndex}
        f.filter.groupIndex=a; return f}

    f.sensor= f.iS=function(a){
        if(U(a)){return f.isSensor}
        f.isSensor =a?true:false
        return f}

    f.uD=function(a){
        if(U(a)){return f.userData }
        f.userData=a;return f}
    return f
}

