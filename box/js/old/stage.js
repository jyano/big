stg=function(){
    var args=G(arguments)

    container=EaselContainer().fn( SL )

    stage=SuperStage(1000)( container )

    ct = ContainerDiv(stage)

    _.each(args, function(arg){ container(arg) })

    return container}

tSt=function(stage){

    if(!O(stage)){return}
    if(iSt(stage.object)){return stage}
    if(iSt(stage)){return SuperStage(stage)}
}

appendToStage=ap=function(object,stage){

    if(tSt(stage)){tSt(stage)(object)}
    if(iCt(stage)){stage(object)}

    return object}

//??
iSt=function(a){if(D(a)){return F(a.update)}}

//must be an object
//if it has an 'object' pop, see if THAT is a container (like running bj on it?)
//else, if it has the addChild func, return that
//basically, checks if something is a container(or super container), by seeing if it has 'addChild'
iCt=function(container){
    if(!O(container)){return}

    if(container.object){ return iCt(container.object) }

    return F(container.addChild)
}

EaselContainer= Ct=function(o){

    var args = G(arguments),  g=args,  o=g[0]

    if(  !iCt( o )  ){

        //if its not already a container, then make a blank container

        //(passing along the '+', which makes it slidable)

        return args.p?  EaselContainer( Ct$(), '+' ) :  EaselContainer(Ct$())

    }

    //this makes the function object one that will 'add' its arguments to the container
    var func=function o(){

        var args=G(arguments)

        _.each(args,  function(arg){

            o.a(arg)

        })

        return o}


    //now make the container, itself, a super display object!!! (before we give it additional methods)

    o = SuperDisplayObject(args.f, func  )


    o.children = o._ch = o.ob.children



    //appendTo
    //add
    o.A = o.a=function(child,location){

        var g=G(arguments),a=g[0], location=g[1]

        if( U(child) ){ o.qqC().a();  return o }
        //append canvas //hmm.. a double use for a????

        if(A(a)){

            _.each(a,  function(arg){

                o.bm(arg, function(bitmap){  SL(bitmap) })

            }) //call bm on everything in array, and also slidify them

            return o} //this is also a funny use!!

        //the real meat:

        a = bj( a ) //turn to raw object

        //either add child at a specific location
        if( N( location ) ){  o.ob.addChildAt( a , location )  }

        //or just add the child
        else { o.ob.addChild( a ) }

        return o
    }



    o.Shape=function(graphics){

        var s = Shape(graphics)
        o.A( s  )
        return s

    }

    o.Circle=function(a,b,c,d,e,f){

       return o.Shape().circle(a,b,c,d,e,f)

    }








    o.withChildren =o.wCh=o.wC=function(func){//iterates over SuperDisplayObject(children)

        var ags=arguments,   g=G(arguments),  func=g[0]



        if(  F(func) ){

            _.each( o.ch(), func )

            return o }



        if( S(func) ){

            o.withChildren(

                function(child){

            if(  D( _.rest(ags)[0] ) ){

                 child[func].apply(child, _.rest(ags))

            }

            else{ child[func]() }

                })

            return o
        }


        return o}






    //great for getting/setting a do's index
    o.index=o.ix= o.childIndex=function(dO,i){
        if(U(i)){return o.ob.getChildIndex( bj(dO) )}
        else o.ob.setChildIndex( bj(dO), i )
        return o}


    //remove all, or remove by ix# or by object itself
    o.remove= o.rm=function(object){
        if(U(object)){o.ob.removeAllChildren()}
        if(O(object)){o.ob.removeChild(bj(object))}
        if(N(object)){o.ob.removeChildAt(object)}
        return o}

    o.swap=function(a,b){
        if(N(b)){o.ob.swapChildrenAt(a,b);return o}//*** bottom-most=0
        if(O(b)){return o.ob.swapChildren(a,b)}

    }

    sortFunction = function(o1, o2, options){
        o1=SuperDisplayObject(o1)
        o2=SuperDisplayObject(o2)
        return (o1.y()>o2.y())?1 : (o1.y() < o2.y())? -1 : 0}


    o.sort=function(func){if(F(func)){o.ob.sortChildren(func); return o}}

    o.ch=function(a,b){ var g=G(arguments), a=g[0], b=g[1]

        if(U(a)){return _.map( o._ch, SuperDisplayObject)}
        if(a=='#'){return o.ob.getNumChildren()}
        if(a=='?'){return o.ob.contains( bj(b) )}
        if(N(a)){return SuperDisplayObject(o.ob.getChildAt(a))}//***
        if(S(a)){ return SuperDisplayObject(o.ob.getChildByName(a))}

        //if(N(b)){ o.ob.setChildIndex(bj(a), b) }

        //if(O(a)){ return o.ob.getChildIndex(bj(a))}

        return o}



    //get/set mouseChildren property
    o.mouseChildren=o.mCh=o.mC=function(m){
        var g=G(arguments), m=g[0]

        if(U(m)){ return o.ob.mouseChildren }
        o.ob.mouseChildren = g.n?false : true

        return o}


    //get/set tickChildren property
    o.tickChildren =o.tCh=o.tC=function(m){
        var g=G(arguments),m=g[0]
        if(U(m)){return o.ob.tickChildren}
        o.ob.tickChildren=g.n?false:true
        return o}


    o.objectsUnderPoint = o.uP = function(x, y, f){
        if(O(x)){ return o.objectsUnderPoint( x.X, x.Y ) }
            return _.map(  o.ob.getObjectsUnderPoint( x, y ),   SuperDisplayObject  )}
    o.objectUnderPoint = o.uP = function(x, y, f){
        if( O(x) ){ return o.objectUnderPoint( x.X, x.Y ) }
        var ob = o.ob.getObjectUnderPoint(x,y)
        if(ob){ return SuperDisplayObject( ob ) }}

    //add bitmap at bottom.. ?
    o.bgI=o.backgroundImage=o.bgi=function(a){var g=G(arguments)

        if(g.n){ o.rm(0); return o }

        if(o.backgroundImage){ o.rm(0)}

        o.bm(a,  function(bitmap){

            o.index(bitmap, 0)

            o.backgroundImage=bitmap


        }) //o.ob.setChildIndex(b.ob,0)

        return o}




///////////////




    o.bm = o.addBitmap= o.bitmap = o.b = function(a,b){

        var g=G(arguments),   a=g[0],  b=g[1]

        if(A(a)){

            _.each(a, function(arg){

                o.bitmap(arg, function(a){

                        if(g.p){ SL(a) }

                    }  )

            })

            return o} //funny use


        //this is for when returning the mug
        //it is a dataUrl, but for some reason,
        //i must run parseJSON on it

   //    if(S(a)){ if( a.indexOf('data') ){ a= im($.parseJSON(a)) }}



        //IF IMAGE OBJECT (LOADED)
        if( I(a) ){ //if isImage

            o.a( a = new C$.Bitmap(a) )

            return SuperDisplayObject(a)
        }


        //IF NOT IMAGE OBJECT

        //DATA URL
        //if its a data url (object with a data property) // then it becomes the dataString
        if( O(a) && S( a.d ) ){ a = a.d } // ?


        //BITMAP
        //if object, add it
        if( O(a) ){ o.a(a, b); return o }

        //if( S(a) ){ } //this is where you pass lambda? //this could be data url


        //HANDLE STRINGS
        Bm(a, function( bm ){

            //add the bm (to the stage)
            if( g.N ){ o.a( bm ) }

            //assign bm to variable
            if( S(b) ){ $w[b] = bm }

            //call fn on bm
            if( F(b) ){ b(bm) }

            // rgc bm (centerize its origin)
            if( g.p ){ bm.rgc('+') }

        })


        return o}


    o.wBm1=function(object, func){



        o.bm(object,

            function(bm){
               var container = EaselContainer();
                container.a(bm);
                container.dO = container.displayObject=bm;
                o.a(container)

                if(func){ func(container) }
            }
        )

    }

    o.wBm=function(object, func){


        Bm(object, function( bm ){

            var container = EaselContainer()

            container.a(bm)

            container.dO=bm

            o.a(container)

            if( F(func) ){ func(container) }

        })





    }

    o.bData=function(data){
       return o.b( $img(  $.parseJSON(data) ))
    }




    o.addMug = o.mug=o.mg=function(func){

        wMb(function(m){

            o.b(m)
            func(m,o)  })

        return o}

    _.each(g.r, function(v){o.b(v)})


    if(g.p){ SL(o) }
    return o

}

//stage has no size.. it is just associated with a canvas
//s.o('e', f) -> on mouse enter canvas

SuperStage = St = function(n1,n2,c){

    var g=G(arguments),

        st=iCt(g[0])?g[0]:
            C(g[0])? S$(C(g[0])):

                S$(C(_a(can,g))),

        o = EaselContainer( st )

    o.st=o.ob //o.st=st

    o.C = o.ob.canvas

    o.X = xx(o.C)

    o.qqC = o.qq = o.Q = qq( o.C )




    o.u=function(a){
        if(U(a)){st.update()}

        if(a==='!'){st.clear()}
        if(a==='0'){st.autoClear = false}
        if(a==='1'){st.autoClear = true}
        return o}


    o.du=function(){return o.ob.toDataURL()}

    o.mx=function(){return o.ob.mouseX}
    o.my=function(){return o.ob.mouseY}


    // pass nothing: if mouseInBounds (is mouse over CANVAS), get x,y. o/w get false
    // +: mouseMoveOutside=true
    // -: mouseMoveOutside=true
    // ?: is mouseMoveOutside
    // num: enableMouseOver(num)

    o.M=function(a){var g=G(arguments), a=g[0]

        if(U(a)){

            if(g.p){//error? cant be pos if undef?
                o.ob.mouseMoveOutside=true;return o}

            if(g.n){
                o.ob.mouseMoveOutside=false;return o}

            if(o.ob.mouseInBounds){
                return {x:o.mx(),y:o.my()}}

            return false}

        //if(a=='?'){return o.ob.mouseMoveOutside}

        if(N(a)){o.ob.enableMouseOver(a)
            return o}}
    o.nS=function(a){
        if(U(a)){return o.ob.nextStage}
        o.ob.nextStage=a;
        return o}

    o.tOU=function(a){if(U(a)){return o.ob.tickOnUpdate}
        o.ob.tickOnUpdate=a;return o}//x

    o.hE=function(a){if(U(a)){
        return o.ob.handleEvent}
        o.ob.handleEvent=a;
        return o}//x


    o.eDE=function(){//this is a function
        var g=G(arguments)
        o.ob.enableDOMEvents(g.n?false:true)
        return o}


    //background color
    o.c=function(c){
        if(U(c)){return o.X.bc()}
        o.X.bc(c);return o}



    o.w=function(a){if(U(a)){return o.X.w()}
        o.X.w(a)
        return o}

    o.h=function(a){if(U(a)){return o.X.h() }
        o.X.h(a)
        return o}


    o.wh=function(w,h){
        if(N(w)){o.w(w);o.h(N(h)?h:w);return o}
        return {w:o.C.width,h:o.C.height}}


    o.drg=function(){
        //this drags the canvas, not just the stage
        o.Q.drg();return o}




    o.op=function(a){o.Q.op(a);return o}

    o.hide=function(){
        _e(ob.children,
            function(a){SuperDisplayObject(a).vs('-')
            });return o}





    o.timeStamp = o.ts=function(func){

        return o.on('tick', function(e){

            if(N(cjs.timeStamp)){
                cjs.timeStamp = e.timeStamp - cjs.lastTimeStamp
                cjs.lastTimeStamp = e.timeStamp
                func(cjs.timeStamp)

            }


            else {
                cjs.timeStamp=0
                cjs.lastTimeStamp=e.timeStamp

           }

        })

    }




    o.sv=function(f){

         $.post('/img', {

            d: xx( C(o.x ) ).u(),

            dats: o.x.dats

        } )


        if(f){if(S(f)){
            f=ldr(f)};sec(f)
        };
        return o}








    //add a container to a stage, and then run function:
    //f(container, stage)
    //option: make container draggable
    o.ct=function(f){
        var g=G(arguments),
        f=g[0],

        c= EaselContainer()

        o.a(c)

        f(c,o)

        if(g.p){SL(c)}
        return o}





    o.bgi=function(a){
        o.bm(a,function(b){
        o.ob.setChildIndex(b.ob, 0)});
        return o}



    o.D=function(a,b,c,d){

        return o.o('D',a,b,c,d)

    }



    if(g.M){o.t()}

    if(g.n){z()}

    if(g.p){o.a()}

    return o}

///////////////////////////////

fromSt=function(){
         var o ={}
         o.bFit=function(a,pc,f){   pc=pc||1; o.b(a, {x:o.w()*pc,  y:o.h()*pc},f);    return o}
         o.bPerc=function(a,b,c){  var b=b||1; o.b(a,{x:t.w()*b, y:t.h()*b}, c); return o};

         o.wow=function(){  Bm(x,function(b){o.a(b); TR(b)}); return o}
         o.addShape=function(a,b,c){var h=H(); o.a(h); if(S(a)){h.g.f(a)};
             if(F(a)){a(h.g,h,t)}; if(F(b)){b(h.g,h,t)}; return h}



     }
fromCont=function(){o={}


     o.perc=function(a,b,c){
         bmFit=function(a,pc,f){pc=pc||1
             o.b(a,{x:o.w()*pc,y:o.h()*pc},f)
             return o}

         b=b||1
         o.b(a, {x:o.w()*b,y:o.h()*b}, c)
         return o}
     o.dr=function(){return o.a(_a(rct,arguments))}
     o.TR=function(b){

         o.bm(TR, b||'me')
         return o}
     o.SL=function(n,nn){
         o.bm(function(bm){$w[nn||'sb']=bm
             SL(bm.xy(n||240))
             if(nn=='r'){bm.wh(26)}})
         return o}
     o.SK=function(n,nn){
         o.bm(function(bm){$w[nn||'sb']=bm
             SK(bm.xy(n||240))
             if(nn=='r'){bm.wh(26)}})
         return o}
     o.RT=function(n,nn){
         o.bm(function(bm){$w[nn||'sb']=bm
             RT(bm.xy(n||240))
             if(nn=='r'){bm.wh(26)}})
         return o}
     o.SC=function(n,nn){
         o.bm(function(bm){$w[nn||'sb']=bm
             SC(bm.xy(n||240))
             if(nn=='r'){bm.wh(26)}})
         return o}
     o.magic=function(){
         return o.SC().SL().RT() }

     o.b1=function(a,f,v,p,FF){var g=G(arguments)

    a=a||o

    if(D(v)){ v=adj($V(v)) }


    if(p=='c'){p=[(o.w()-v.x)/2,(o.h()-v.y)/2]}



    Bm(_s(a),
        function(b,x){

            o.a(

                $do(

                    xym(b, $V(p)),f))
            o.U()
            _e(FF, function(f){b[f]()})

        },
        v)
    return o}
o.B2=function(a){
    im(a,function(i){
        o.a(b=sDo(B$(i)))})}
 }