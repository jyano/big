$l('tween')

 W$=C$.Tween
tw=W$.get








W$= function(a){
    if(a.obj){a= a.obj}
    return createjs.Tween.get(a)
}

//ww = createjs.Tween(job.obj)



//function(){   return new createjs.Tween.get(a)    }//Tween.get(target)
//tw=  function(o,b,c,d){return W$.get(o,b,c,d)}




tw=function(dO, b, c){

    var x=function(){return W$(dO)};

    x.obj=dO;

    var o=function rc(a,b,c,d){
        x().to(a,b,c,d);

        rc};

    o.obj = x;

       return o
    var  sp="setPaused", pa="pause", p="play", sP="setPosition",  ps="position";

    o.s=function(){x[ps]();return o}

    o.p=function(){x[p]();return o}

    o.pa=function(a){x[pa](a); return o}

    o.ps=function(a,b){if(U(a)){return x[ps]};x[ps](a,b);return o}

    o.sp= function(vl,aM){ x[sP](vl,aM);return o}

    o.w=function(ms){x.wait(ms*1000);return o}

    o.c=function(cbF,pamsA,sco){x.call(cbF,pamsA,sco);return o}


    return o}




//  o.igp=function(a){  if(U(a)){return x[igp]}  x[igp]=a;  return o}

    //o.dur=function(a){  if(U(a)){return x[dn]} x[dn]=a;  return o}

    //o.lp=function(a){  if(U(a)){return x[l]} x[l]=a; return o}

    //o.tw=function(a){  if(U(a)){return x[hat]};  return o}

   // o.rm=function(a){ if(U(a)){return x[rat]};  x[rt](a); return o}

   // o.tg=function(){return x[tg]}

    //o.tk=function(a,b){x[tt](a,b); return o}




    //            0.NONE: runs no actions.
    //
    //      df=>> 1.LOOP: if new position < old :
    //                run all actions btwn old and duration,
    //                then all actions between 0 and new.
    //
    //      //reversable?      2.REVERSE   - if n ps < o ps, run all actions btwen them IN REVERSE



    // val: position to seek to in milliseconds (or ticks if useTicks is true).
   // actionsMode :how actions are handled (   CALL    SET    PLAY    PAUSE  )
    //  Returns:Boolean: Returns true if the tween is complete (ie. the full tween has run & loop is false).







    //Queues an action to call the specified function.
    //if pamsA omitted, then the function will be called with one pam: instance of the tween
    // If sco is omitted, it will be called in the target's scope.
        //would call myFunction() after 1s. myTween.wait(1000).call(myFunction);
                                         // o.w(1).c(myF)






Tl=function(o){o=Tw(o);

    var x= o.obj,
        pa="setPaused", at="addTween", al="addLabel", gtp="gotoAndPlay",
        gts="gotoAndStop", rs="resolve",gcl="getCurrentLabel",sl="setLabels",
        gl="getLabels" , rt="removeTween", ud="updateDuration",tic=tick,rat="removeAllTweens";

    o.a=function(a,b){
        if(S(a)){x[al](a,b)}
        if(O(a)){x[at](a,b)}
                return o}
    o.pa=function(a){x[pa](a);return o}
    o.p=function(a){x[gtp](a);return o}
    o.s=function(a){x[gts](a);return o}
    o.rs=function(a){return x[rs](a)}
    o.cl=function(){return x[gcl]()}

    o.lb=function(a){
        if(U(a)){return x[gl]()}
        if(O(a)){x[sl](a);return o}
        if(N(a)||S(a)){return x[rs](a)}
        return o}

    o.rm=function(a){
        if(a){x[rt](a)} else{x[rat]()}
        return o}
    o.uD=function(a){
        if(U(a)){x[ud]()}
        if(N(a)){x[tic](a)};
        return o}

    return o}





Tw2=function(a,b,c,d){var d=Anim(Ed(createjs.Tween.get(a,b,c,d))), x=d.x;
    d.pos=function(a,b){if(U(a)){return x[ps]} x[sP](a,b);return d}
    d.igp=function(a){if(U(a)){ return x[igp]}  x[igp]=a; return d}
    d.dur=function(a){if(U(a)){ return x[d]} x[d]=a; return d}
    d.lp=function(a){if(U(a)){return x[l]} x[l]=a; return d}
    d.c=bind(x.call,x);
    d.g=bind(x.get,x);
    d.w=bind(x.wait,x);
    d.s=bind(x.set,x);
    d.tw=function(a){if(U(a)){return x[hat]}; return d}
    d.rm=function(a){if(U(a)){return x[rat]}  x[rt](a); return d}
    d.tg=function(){return x[tg]}
    d.tk=function(a,b){x[tt](a,b); return d}

    return d}

Tl2=function(d){d=Tw(d); var x= d.x;

    d.ad=function(a,b){
        if(S(a)){x[al](a,b)}   //add label
        if(O(a)){x[at](a,b)}
        return d}        //add tween

    d.cL=function(){return x[gcl]()}           //getcurrentlabel

    d.lb=function(a){
        if(U(a)){return x[gl]()}
        if(O(a)){x[sl](a)
            return d}
        if(N(a)||S(a)){
            return resolve(a)}
        return d}

    d.rm=function(a){
        x[rt](a);
        return d}      //remove tween

    d.uD=function(a){
        if(U(a)){x[ud]()} //updateduration
        if(N(a)){x[tt](a)};
        return d}       //tick
    return d}


$(function(){
    //me=new Image;



 Bm('me', function(b){




    // stg = Stg(can()); j=b; stg.a(j);

   // o= tw(j)({x:100},1000);

     //({x:20}, 4000)


    // ww = createjs.Tween.get(job.obj).to({x:100})

    // ww.to({skewX:50})


 });


    //.to({x:100}).wait(3000).to({x:0})


    //  me.src = '/me.png';



})//j=Spr(sS$(SS))

     // createjs.Tween.get(j.obj).to({x:40})