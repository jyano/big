$spriteSheet=function(ss){
   return new createjs.SpriteSheet(ss)}




Sp=function(ss, func, stage){

    return Ql({

        m: makeManifest(ss),

        c:function(i){
            var sprite= EaselSprite(  new createjs.SpriteSheet(s ))

        if(stage){stage.A(sprite)}

        if(func

            ){

        func( SuperSprite(sprite), sprite )

    }}})}
SuperSprite =  function(x){

    var o = Do( x )

    o.ob = x

    o.sS = o.ss = o.ob.spriteSheet

    o.numFrames=o.nF=function(){return o.sS.getNumFrames()}

    o.getAnim=o.gA=function(a){

        return U(a)? o.sS.getAnimations()
            :
            o.sS.getAnimation(a) }




    //set/get NEXT animation on an animation
    o.next=o.gAN =function(anim1, nextAnim){

        var g=G(arguments),  anim1 =g[0],  nextAnim=g[1],

            theAnim=o.gA(anim1)



        //if you just pass in the anim1 string
        if(U(nextAnim)){

            //set its next to itself
            if(g.p){theAnim.next= theAnim; return o}

            //set its next to false
            if(g.n){theAnim.next=false; return o}

            //get its next
            return theAnim.next}

        theAnim.next = nextAnim

        //loop the TWO anims
        if(g.p){  o.gA(nextAnim).next=anim1  }

        return o}


    o.play =o.p=function( a, b ){

        var g=G(arguments),
            a=g[0],
            b=g[1],
            l=g.f,
            n

        if(U(a)){ o.ob.play(); return o }

        if(U(b)){

            if(g.n){o.next(a, false)}

            if(g.p){o.next(a, a)}

            o.ob.gotoAndPlay(a)

            return o
        }

        _.each(g.r, function(a){
            o.next( l, a )
            l=a
        })

        o.next( g.l, g.isPlaying ? false : g.f )

        o.play( g.f )

    }


    o.stop= o.s=function(a){ if(D(a)){ o.ob.gotoAndStop(a)}else{o.ob.stop()};return o}

    o.isPlaying= o.P=function(){return !o.ob.paused}

    o.frame= o.currentFrame=o.cF = o.cf=function(num){

        var args=G(arguments),   num=args[0]


        if(args.p){
            return o.frame(
                    o.frame() + ( N(num) ? num : 1 )
            )}


        if(args.n){
            return o.frame(
                    o.frame() - ( N(num) ? num : 1 )
            )}


        if( U(num) ){ return o.ob.currentFrame }


        $l(num)

        return o.isPlaying()? o.play(num) : o.stop(num)
    }

    o.anim =o.cA = o.ca = function(a){ return U(a)?

        o.ob.currentAnimation :

        o.isPlaying()? o.play( a ) : o.stop(a)

}

    o.advance= o.av=function(a){ o.ob.advance(a); return o }

    o.oC= o.cm=function(a){ o.ob.on('complete',a) }

    //will run each loop
    o.oAe= o.ae=function(a){ o.o('animationend',a);return o }

    o.rate =o.fR= o.frameRate=o.fr=function(a){var g=G(arguments),a=g[0]
        if(g.p){return o.fr(o.fr()+(N(a)?a:1))}
        if(g.n){return o.fr(o.fr()-(N(a)?a:1))}
        if(g.m){return o.fr(o.fr()*(N(a)?a:2))}
        if(g.d){return o.fr(o.fr()/(N(a)?a:2))}

        if(U(a)){return o.ob.framerate}
        $l(a)
        o.ob.framerate=a;
        return o}


    o.cAF= o.caf=function(a){
        if( U(a) ){
            return o.ob.currentAnimationFrame
        }
    }

    return o
}

