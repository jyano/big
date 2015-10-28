
png=function(a){return e$(a,'png')}

iDu=function(a){return sw$(a,'data:')}

tDu=function(a){if(a.toDataURL){
    return a.toDataURL()}
    if(iF(a.u)){return a.u()}
    return a}
tP=function(a){if(iS(a)&&!iDu(a)){return p$(png(a),'/')};return a}
tI=function(a){if (a){return(iB(a))?f(a.image):a} }
tU=function f(a){
    if(a){return(I(tI(a)))?
        a.src
        :tP(tDu(a))}}



u$ = src = function f(e){
    var s=function(a){return pre(ext(a),'/') } //s/c/C/i/b->s sync
    e=e||'guy'
    if(Q(e)){e=e[0]}
    if(e.image){e=e.image}
    if(e.canvas){e=e.canvas}
    if(I(e)){e=e.src}
    if(C(e)){e=e.toDataURL()}
    return D(e)?e:S(e)?s(e):false}




imgBox=function f(a){
    var b= qq({C:'p',w:700,h:700});
    b._('p');
    //b.$$(function(e){ e(qq(  {C:'y', w: e.w()/2, h:e.h()/2}) )})
    return b}
ig=function(a){
    var i = new Image()
    i.src=src(a||'me')
    p(i)}


Im=function(s){var i= new Image()
    i.s=function(a){
        if(U(a)){return i.src}
        i.src=src(a)
        return i}
    i.r=function(a){
        $(i).load( function(e){a(e.target)})
        return i}
    //  i.r(function(im){i.w=im.width;i.h=im.height})
    // if(!U(s)){i.s(s)}
    return i}

$i=im=function f(a,b){
    var i=Im()
    if(U(a)){return i}
    if( rd(a) ){if(F(b)){b(a)}
        if (S(b)){$w[b]=a}
        return a}
    if(U(b)){if(F(a)){return i.r(a)} return i.s(a)}
    if(F(b)){return i.r(b).s(a)}
    if(S(b)){return i.r(function(i){$w[b]=i}).s(a)}
    return i}


images=function(){
    tU=function(a){var u="toDataURL";
        if(a===undefined){return}
        if(iB(a)){a=a.image.src}
        if(iI(a)){a=a.src}
        if(a[u]){a=a[u]()}
        else if(iF(a.u)){a=a.u()};
        if(iS(a)&&!iDu(a)){
            a=p$(png(a),'/')};
        function png(a){return e$(a,'png')}
        return a}
    tI=function(a){if(a){return(iB(a))?f(a.image):a} }
    sI=function(i){i=i||new Image();

        i.a=function(a){var t=this;
            t.addEventListener('load',a);
            return t}

        i._s=function(a){this.src=tU(a);return this}
        i.d=function(a){return $do(this,b)};
        i.s=function(a){var t=this;
            if(!a){return t.src}
            else{return t._s(a)}};
        i.r=function(f){return this.a(function(i){f(i.target)})};
        i.r(function(i){i.w=i.width;i.h=i.height});
        return i}
    sI2=function(i){
        i=sEl(i||new Image());
        i.a=function(a){var t=this;
            t.addEventListener('load',a);
            return t}
        i.s=function(a){var t=this;
            if(a===undefined){return t.src}
            else{t.src=tU(a)};
            return t};
        i.r=function(F){
            return this.a(
                function(i){var g=i.target;
                    F(g,sEl(g))})};
        i.r(function(i){
            i.w=i.width;i.h=i.height});
        return i}
    I=function(a,b){if(!(a=tI(a))){return sI()};
        if(!b){if(iI(a)){return sI(a)};
            if(iF(a)){return sI().r(a)};
            if(iS(a)){return sI().s(a)}}
        else{if(iI(a)){return $do(sI(a),b)};
            if(iS(b)){return I().r(function(i){$W[b]=i}).s(a)};
            if(iF(b)){return I().r(b).s(a)}}}
    I2=function(a,b){//if(a!=tI(a)){;
        if(b===undefined){return sI()}
        if(b===undefined){
            if(iF(a)){return sI().r(a)};
            if(iS(a)){return sI().s(a)}
            $l('!');return}

        if(iS(b)){
            return I().r(function(i){
                $W[b]=i
            }).s(a)};

        if(iF(b)){
            return I().r(b).s(a)
        }}
}



images=function(){


    tU=function(a){
        var u="toDataURL";
        if(U(a)){return}
        if(B(a)){a=a.image.src}
        if(I(a)){a=a.src}
        if(a.u){a=a.u()}
        else if(F(a.u)){a=a.u()};
        if(S(a)&&!D(a)){
            a=p$(png(a),'/')};
        function png(a){
            return e$(a,'png')}
        return a}
    tI=function(a){if(a){
        return(B(a))?f(a.image):a} }


    sI=function(i){i=i||new Image();
        i.a=function(a){var t=this;
            t.addEventListener( 'load' , a);
            return t}
        i._s=function(a){this.src=tU(a);
            return this}
        i.d=function(a){return $do(this, b)};
        i.s=function(a){var t=this;
            if(!a){return t.src}
            else{return t._s(a)}};
        i.r=function(f){return this.a(function(i){
            f(i.target)})};
        i.r(function(i){i.w=i.width;
            i.h=i.height});
        return i}

    sI2=function(i){
        i=sEl(i||new Image());
        i.a=function(a){var t=this;
            t.addEventListener('load',a);
            return t}
        i.s=function(a){var t=this;
            if(a===undefined){return t.src}
            else{t.src=tU(a)};
            return t};
        i.r=function(F){
            return this.a(
                function(i){var g=i.target;
                    F(g,sEl(g))})};
        i.r(function(i){
            i.w=i.width;i.h=i.height});
        return i}
    I=function(a,b){if(!(a=tI(a))){return sI()};
        if(!b){if(iI(a)){return sI(a)};
            if(F(a)){return sI().r(a)};
            if(S(a)){return sI().s(a)}}
        else{if(iI(a)){return $do(sI(a),b)};
            if(S(b)){return I().r(function(i){$W[b]=i}).s(a)};
            if(F(b)){return I().r(b).s(a)}}}
    I2=function(a,b){//if(a!=tI(a)){;
        if(b===undefined){return sI()}
        if(b===undefined){
            if(F(a)){return sI().r(a)};
            if(S(a)){return sI().s(a)}
            $l('!');return}

        if(S(b)){
            return I().r(function(i){
                $W[b]=i
            }).s(a)};

        if(F(b)){
            return I().r(b).s(a)
        }}
}





tU=function(a){var o=arg(arguments);if(U(a)){return}
    if(F(a)){a=a()}
    if(F(a.toDataURL)){a = a.toDataURL()}
    if(F(a.u)){a=a.u()}
    if(I(a)){a=a.src}
    if(S(a)){a=prefix(png(a),'/')}
    return a}

var iU=function(){


}

//tI=function(a){if(a){return(B(a))? f(a.image):a} }


ag= "var o=args(arguments);";

sIm=function(im){

    im=im||new Image();

    var i=function(){eval(ag);

        if(tU())){im.src=    }

        return im}


    i.a=function(a){im.addEventListener('load', a); return i}

    i.s=function(a){im.src = tU(a); return i}

    i.u=function(a){if(!a){return im.src} else {return i.s(a)}};

    i.r=function(f){return i.a(function(i){f(i.target)})};

    i.w=function(a){if(!a){return im.width} else{im.width=a; return i}};

    i.h=function(a){if(!a){return im.height} else{im.height=a; return i}};

    i.r(function(i){i.w = im.width; i.h = im.height});

    return i}





Im=function(a,b){var o=arg(arguments)

    if(o("I")){return sIm(tU(a))}

    if(o("i")){ return sIm(a) }

    if(o("f")){return sIm(a).r(a)}
    if(o("s")){return sIm(a).s(a)}
    if(o("iU")){return $do(sI(a),b)}
    if(o("Us")){return I().r(function(i){$W[b]=i}).s(a)}
    if(o("Uf")){return I().r(b).s(a)}}



images=function(){
    tU=function(a){var u="toDataURL";
        if(a===undefined){return}
        if(iB(a)){a=a.image.src}
        if(iI(a)){a=a.src}
        if(a[u]){a=a[u]()}
        else if(F(a.u)){a=a.u()};
        if(S(a)&&!iDu(a)){
            a=p$(png(a),'/')};
        function png(a){return e$(a,'png')}
        return a}
    tI=function(a){if(a){return(iB(a))?f(a.image):a} }
    sI=function(i){i=i||new Image();

        i.a=function(a){var t=this;
            t.addEventListener('load',a);
            return t}

        i._s=function(a){this.src=tU(a);return this}
        i.d=function(a){return $do(this,b)};
        i.s=function(a){var t=this;
            if(!a){return t.src}
            else{return t._s(a)}};
        i.r=function(f){return this.a(function(i){f(i.target)})};
        i.r(function(i){i.w=i.width;i.h=i.height});
        return i}
    sI2=function(i){
        i=sEl(i||new Image());
        i.a=function(a){var t=this;
            t.addEventListener('load',a);
            return t}
        i.s=function(a){var t=this;
            if(a===undefined){return t.src}
            else{t.src=tU(a)};
            return t};
        i.r=function(F){
            return this.a(
                function(i){var g=i.target;
                    F(g,sEl(g))})};
        i.r(function(i){
            i.w=i.width;i.h=i.height});
        return i}
    I=function(a,b){if(!(a=tI(a))){return sI()};
        if(!b){if(iI(a)){return sI(a)};
            if(F(a)){return sI().r(a)};
            if(S(a)){return sI().s(a)}}
        else{if(iI(a)){return $do(sI(a),b)};
            if(S(b)){return I().r(function(i){$W[b]=i}).s(a)};
            if(F(b)){return I().r(b).s(a)}}}
    I2=function(a,b){//if(a!=tI(a)){;
        if(b===undefined){return sI()}
        if(b===undefined){
            if(F(a)){return sI().r(a)};
            if(S(a)){return sI().s(a)}
            $l('!');return}

        if(S(b)){
            return I().r(function(i){
                $W[b]=i
            }).s(a)};

        if(F(b)){
            return I().r(b).s(a)
        }}
}


images=function(){
    tU=function(a){var u="toDataURL";
        if(a===undefined){return}
        if(iB(a)){a=a.image.src}
        if(iI(a)){a=a.src}
        if(a[u]){a=a[u]()}
        else if(F(a.u)){a=a.u()};
        if(S(a)&&!iDu(a)){
            a=p$(png(a),'/')};
        function png(a){return e$(a,'png')}
        return a}
    tI=function(a){if(a){return(iB(a))?f(a.image):a} }
    sI=function(i){i=i||new Image();

        i.a=function(a){var t=this;
            t.addEventListener('load',a);
            return t}

        i._s=function(a){this.src=tU(a);return this}
        i.d=function(a){return $do(this,b)};
        i.s=function(a){var t=this;
            if(!a){return t.src}
            else{return t._s(a)}};
        i.r=function(f){return this.a(function(i){f(i.target)})};
        i.r(function(i){i.w=i.width;i.h=i.height});
        return i}
    sI2=function(i){
        i=sEl(i||new Image());
        i.a=function(a){var t=this;
            t.addEventListener('load',a);
            return t}
        i.s=function(a){var t=this;
            if(a===undefined){return t.src}
            else{t.src=tU(a)};
            return t};
        i.r=function(F){
            return this.a(
                function(i){var g=i.target;
                    F(g,sEl(g))})};
        i.r(function(i){
            i.w=i.width;i.h=i.height});
        return i}
    I=function(a,b){if(!(a=tI(a))){return sI()};
        if(!b){if(iI(a)){return sI(a)};
            if(F(a)){return sI().r(a)};
            if(S(a)){return sI().s(a)}}
        else{if(iI(a)){return $do(sI(a),b)};
            if(S(b)){return I().r(function(i){$W[b]=i}).s(a)};
            if(F(b)){return I().r(b).s(a)}}}
    I2=function(a,b){//if(a!=tI(a)){;
        if(b===undefined){return sI()}
        if(b===undefined){
            if(F(a)){return sI().r(a)};
            if(S(a)){return sI().s(a)}
            $l('!');return}

        if(S(b)){
            return I().r(function(i){
                $W[b]=i
            }).s(a)};

        if(F(b)){
            return I().r(b).s(a)
        }}
}
im=function(a, b){var o=arg(arguments);

    var i=new Image()

    if(o('s')){   }







}



images=function(){


        tU=function(a){ var o=arg(arguments)
            var u="toDataURL";
            if(U(a)){return}
            //if(B(a)){a=a.image.src}
            if(I(a)){a=a.src}
            if(F(a.u)){a = a.u()};
            o('sD',function(){a=p$(png(a),'/')}
            function png(a){return e$(a, 'png')}
            return a}

   e$=function(a,b){if(!b){
            return c$(a,'.')?ali$(a, '.'):false};
            if(!e$(a)){a += p$(b,'.')};return a}



        tI=function(a){if(a){
            return(B(a))?f(a.image):a} }


        sIm=function(im){

            im = im||new Image();

            var i={}

            i.a=function(a){im.addEventListener( 'load' , a);return i}
            i.s=function(a){im.src = tU(a);return i}
            i.u=function(a){if(!a){return im.src} else {return i.s(a)}};
            i.r=function(f){return i.a(function(i){f(i.target)})};
            i.w=function(a){if(!a){return im.width} else{im.width=a; return i}};
            i.h=function(a){if(!a){return im.height} else{im.height=a; return i}};

            i.r(function(i){i.w=im.width;i.h=im.height});



            return i}





ssI=function(i){
    i=i||new Image()
    i.a=function(a){var t=this;
        t.addEventListener('load',a);
        return t}
    i.s=function(a){var t=this;
        if(U(a)){return t.src}
        t.src = tU(a);return t}
    i.r=function(F){
        return this.a(
            function(i){var g=i.target;
                F(g,sEl(g))})};
    i.r(function(i){
        i.w=i.width;i.h=i.height});
    return i}


        Im=function(a,b){if(!(a=tI(a))){return sI()};
            if(!b){if(I(a)){return sI(a)};
                if(F(a)){return sI().r(a)};
                if(S(a)){return sI().s(a)}}
            else{if(I(a)){return $do(sI(a),b)};
                if(S(b)){return I().r(function(i){$W[b]=i}).s(a)};
                if(F(b)){return I().r(b).s(a)}}}


        I2=function(a,b){//if(a!=tI(a)){;
            if(U(a)){return sI()}
            if(U(b)){
                if(F(a)){return sI().r(a)};
                if(S(a)){return sI().s(a)}
                 }

            if(S(b)){
                return I().r(function(i){
                    $w[b]=i
                }).s(a)};

            if(F(b)){
                return I().r(b).s(a)
            }}
    }






tU=function(a){var u="toDataURL";
    if(a===undefined){return}
    if(iB(a)){a=a.image.src}
    if(iI(a)){a=a.src}
    if(a[u]){a=a[u]()}
    else if(F(a.u)){a=a.u()};
    if(S(a)&&!iDu(a)){
        a=p$(png(a),'/')};
    function png(a){return e$(a,'png')}
    return a}

tI=function(a){if(a){return(iB(a))?f(a.image):a} }
sI=function(i){i=i||new Image();

    i.a=function(a){var t=this;
        t.addEventListener('load',a);
        return t}

    i._s=function(a){this.src=tU(a);return this}
    i.d=function(a){return $do(this,b)};
    i.s=function(a){var t=this;
        if(!a){return t.src}
        else{return t._s(a)}};
    i.r=function(f){return this.a(function(i){f(i.target)})};
    i.r(function(i){i.w=i.width;i.h=i.height});
    return i}



sI2=function(i){
    i=sEl(i||new Image());
    i.a=function(a){var t=this;
        t.addEventListener('load',a);
        return t}
    i.s=function(a){var t=this;
        if(a===undefined){return t.src}
        else{t.src=tU(a)};
        return t};
    i.r=function(F){
        return this.a(
            function(i){var g=i.target;
                F(g,sEl(g))})};
    i.r(function(i){
        i.w=i.width;i.h=i.height});
    return i}



I=function(a,b){if(!(a=tI(a))){return sI()};
    if(!b){if(iI(a)){return sI(a)};
        if(F(a)){return sI().r(a)};
        if(S(a)){return sI().s(a)}}
    else{if(iI(a)){return $do(sI(a),b)};
        if(S(b)){return I().r(function(i){$W[b]=i}).s(a)};
        if(F(b)){return I().r(b).s(a)}}}



I2=function(a,b){//if(a!=tI(a)){;
    if(b===undefined){return sI()}
    if(b===undefined){
        if(F(a)){return sI().r(a)};
        if(S(a)){return sI().s(a)}
        $l('!');return}

    if(S(b)){
        return I().r(function(i){
            $W[b]=i
        }).s(a)}

    if(F(b)){  return I().r(b).s(a) } }







sI4=function(i){i=i||new Image();
    var w="width",s="src",h="height",t="target",l="load";
    i._a=i.addEventListener;
    i._s=function(a){this[s]=tU(a);return this}
    i.a=function(a){t._a(l,a);return this}
    i.d=function(a){return $do(this,a)};
    i.s=function(a){return(!a)?t[s]:t._s(a)};
    i.r=function(f){return this.a(function(i){f(i[t])})};
    i.r(function(i){i.w=i[w];i.h=i[h]});
    return i}
sI2=function(i){i=i||new Image();
    i.a=function(a){var t=this;t.addEventListener('load',a);return t}
    i._s=function(a){this.src=tU(a);return this}
    i.d=function(b){if(iF(b.d)){b.d(this)};
        if(iO(b.d)){b.d.d(this)};
        return sr(sI(this),b)};
    i.s=function(a){var t=this;
        if(!a){return t.src}
        else{return t._s(a)}};
    i.r=function(f){return this.a(function(i){f(i.target)})};
    i.r(function(i){i.w=i.width;i.h=i.height});
    return i}

I3=function(a,b){
    if(!a){return sI()};
    if(!b){
        if(iI(a)){return sI(a)};
        if(iF(a)){return sI().r(a)};
        if(iS(a)){return sI().s(a)}}
    else{
        if(iI(a)){return sr(sI(a),b)};
        if(iS(b)){return I().r(function(i){$w[b]=i}).s(a)};
        if(iF(b)){return I().r(b).s(a)}}}




sI=function(i){i=i||new Image();
    i.a=function(a){var t=this;t.addEventListener('load',a);return t}
    i._s=function(a){this.src=tU(a);return this}
    i.d=function(a){return $do(this,b)};
    i.s=function(a){var t=this;
        if(!a){return t.src}
        else{return t._s(a)}};
    i.r=function(f){return this.a(function(i){f(i.target)})};
    i.r(function(i){i.w=i.width;i.h=i.height});
    return i}


I=function(a,b){if(!(a=tI(a))){return sI()};
    if(!b){if(iI(a)){return sI(a)};
        if(iF(a)){return sI().r(a)};
        if(iS(a)){return sI().s(a)}}
    else{if(iI(a)){return $do(sI(a),b)};
        if(iS(b)){return I().r(function(i){$W[b]=i}).s(a)};
        if(iF(b)){return I().r(b).s(a)}}}




///////////////////////////
I4=function f(a,b){
    if(!(a=tI(a))){$l('!');   return sI()};

    if(!b){ $l('!b')
        if(iI(a)){return sI(a)};
        if(iF(a)){return sI().r(a)};
        if(iS(a)){return sI().s(a)}}

    if(iI(a)){return sI(a).d(b)};

    return I().r(function(i){i.d(b)}).s(a)}





