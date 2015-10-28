


//dep
gBd=  getBody=gBod=function(a){
    return a.GetBody()}
iPtM=function(f,m){
    f=sFx(f)
    return f.gSh().tPt(
        f.gB().gTf(), m
    )
}

//dep
gSh =getShape=function(a){
    var s=a.GetShape()
    s.tPt=s.tP=s.tp=function(a,b){return s.TestPoint(a,b)}
    return s}
//is static body?
isStat=function(a){return gTy(a)==sB}
//isnt static?? (so dynamic?)
iSB=function(f){return f.GetBody().GetType() != sB}
gTy =getType=function(a){return gBod(a).GetType()}
gTf =gTF=getTransform=function(a){return gBd(a).GetTransform()}
tPt=txPt =function(a,b){return gSh(a).tPt( getTransform(a), b)}
getBodyAtMouseOld=function(mX,mY){var selectedBody


    w.QueryAABB(



        function(f){
            if(

                f.GetBody().GetType() !=sB && f.GetShape().TestPoint(

                f.GetBody().GetTransform(),

                bV(mX,mY)


            )){ selectedBody=f.GetBody(); return false }

            return true},

        AB(mX-.001, mY-.001, mX+.001, mY+.001)


    )


    return selectedBody}





