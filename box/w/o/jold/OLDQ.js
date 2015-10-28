

pop2=function(a,n){var g=G(arguments), a=a||'pop pop',m

    m=MFADE(MDIALOG(MCT(MBODY(h1(a)).c('r','o'))))

    if(g.N){m.m()}
    if(g.p){m.drg()}
    if(N(n)){m.s({a:n})}
    return m}




pop2=function(a,b,n){var g=G(arguments), a=a||'pop pop',m
    m=MFADE(MDIALOG(MCT(MBODY(  h3(a).s('c','b'),_hr(), h1(b)    ) )))
    if(g.N){m.m()}
    if(g.p){m.drg()}
    if(N(n)){m.s({a:n})}
    return m}

pop2=function(a,o){var g=G(arguments),
    a=a||'pop pop',

    mm=MBODY(h2(a)),

    m=MFADE(MDIALOG(MCT(  mm  )))


    o=ob(o)
    if(!o.h){m.m()}
    if(o.t){mm.a(_hr().c(o.hc||'z').s({h:2}),
        h1(o.t).s('c',o.tc||'z').q,'-')}
    if(o.b){mm.a(bt(o.b))}
    if(o.d){m.drg()}
    if(o.a){m.s({a:o.a})}
    if(o.c){if(o.c=='*'){I(function(){mm.c()}, 100)}
    else{m.s({c:o.c})}}
    if(o.C){mm.s({C:o.C})}
    if(o.bc){m.s({C:o.bc})}
    return m}


qq=function(a,b,c){

    var o=function f(b){
        if(b.q){b=b.q}
        if(F(b)){return b(f.q)}
        if(Z(b)){return f.emp()}
        if(U(b)){return f.ch()}
        if(S(b)){f.met(b)}
        if(O(b)){css(f.q, b); return f}
        return f('ap', b)}

    o.q=tQ( a,b,c )

    o.s=function(a,b){return css(o.q,a,b)}
    o.m=function(b){o.q = met('q',o.q, arguments,tQ);return o}
    o.e=function(){o.q.empty(); return o()}
    o.C=function(){return o.q.children()}
    o.w=function(w,b) {
        if(U(w)){return o.q.width()}
        if(w==='+'){return o.w( o.w()+b ) }
        if(w==='*'){return o.w( o.w()*b) }
        if(w==='%'){return o.w( o.w()*b *.01 ) }
        return o.q.width(  (w<10)?w*100:w  )}
    o.h=function(h,b) {
        if(U(h)){return o.q.height()}
        if(h==='+'){return o.h( o.h()+b ) }
        if(h==='*'){return o.h( o.h()*b) }
        if(h==='%'){return o.h( o.h()*b *.01 ) }
        return o.q.height(  (h<10)?h*100:h)}
    o.z=function(z,b) {
        if(U(z)){
            //return {    w:o.q.width(), h:o.q.height()  }
            return o.ch().size()
        }

        if(z==='+'){ o.w( o.w()+b );o.h( o.h()+b )      }
        if(z==='*'){ o.w( o.w()*b );o.h( o.h()*b )   }
        if(z==='%'){ o.w( o.w()*b * .01 );
            o.h( o.h()*b *.01 )  }
        o.h(z); o.w(z)
        return o}
    o.x=function(x) {if(!x){return o.q.offset().left}
        return parseInt( x - o.x() )}
    o.y=function(y){if(!y){return o.q.offset().top}
        return parseInt( y - o.y() )}
    o.o=function(a,b,c){
        o.q.bind(oO('e',a),b,c);
        return o
    }
    o.$=function(a){
        o.o('click',
            function(e){
                var x=e.clientX,
                    y=e.clientY;
                var t= e.target;t.e=e;
                a(qq(t), x - o.x(), y - o.y(), x, y)});
        return o}
    o.$$=function(a){
        o.o('dblclick',
            function(e){
                var x=e.clientX,y=e.clientY;   var t= e.target;t.e=e;
                a(qq(t),x - o.x(),  y - o.y(), x, y )});



        return o}
    o.t=function(a){o.q.text(a);return f}
    o.__=function(a){return o.q.hasClass(a)}
    o._=function(a){o.q.addClass(a);return o}
    return o}





qq=function(a){a=$(oB(a))

    return function f(b){

        if(U(b)){return a}

        if(F(b)){return b(a)}

        if(S(b)){


            a = a[ oO('q',b)  ].apply(a,_m(_r(arguments),ji) )

            return f}
    }
}



qCore=function(e){

    var o={}

    o.q=tQ(e)

    o.s=function(a,b){return ss(o.q,a,b)}

    o.w=function(w,b){
        if(U(w)){return o.q.width()}
        if(w==='+'){return o.w( o.w()+b ) }
        if(w==='*'){return o.w( o.w()*b) }
        if(w==='%'){return o.w( o.w()*b *.01 ) }
        return o.q.width(  (w<10)?w*100:w  )}
    o.h=function(h,b){
        if(U(h)){return o.q.height()}
        if(h==='+'){return o.h( o.h()+b ) }
        if(h==='*'){return o.h( o.h()*b) }
        if(h==='%'){return o.h( o.h()*b *.01 ) }
        return o.q.height(  (h<10)?h*100:h)}

    o.z=function(z,b){
        if(U(z)){return {
            w:o.q.width(), h:o.q.height()
        } }

        if(z==='+'){ o.w( o.w()+b );o.h( o.h()+b )      }
        if(z==='*'){ o.w( o.w()*b );o.h( o.h()*b )   }
        if(z==='%'){ o.w( o.w()*b * .01 );
            o.h( o.h()*b *.01 )  }
        o.h(z); o.w(z)
        return o}
    o.x=function(x){if(!x){return o.q.offset().left}
        return parseInt( x - o.x() )}
    o.y=function(y){if(!y){return o.q.offset().top}
        return parseInt( y - o.y() )}

    o.o=function(a,b,c){
        o.q.bind(oO('e',a),b,c);
        return o
    }

    o.$=function(a){
        o.o('click',
            function(e){
                var x=e.clientX,
                    y=e.clientY;
                var t= e.target;t.e=e;
                a(qq(t), x - o.x(), y - o.y(), x, y)});
        return o}
    o.$$=function(a){
        o.o('dblclick',
            function(e){
                var x=e.clientX,y=e.clientY;   var t= e.target;t.e=e;
                a(qq(t),x - o.x(),  y - o.y(), x, y )});



        return o}

    return Object.create(o)}
qq=function(e){

    var f=_D(function f(b){if(U(b)){return f.q.children()}
            if(b.q){b=b.q}
            if(Z(b)){f.q.empty(); return f()}
            if(F(b)){return b(f.q)}
            if(b==='c'){f(0); return $c('<',12)}
            if(b==='z'){ return f.q.children().size()}
            if(S(b)){f.q = f.q[oq(b)].apply(f.q,_m( _r(arguments), tQ));
                return f }
            return f('ap', b)} ,


        qCore(e|| $("body") ))
    f.t=function(a){f.q.text(a);return f}
    f.H=function(a){return f.q.hasClass(a)}
    f.a=function(a){f.q.addClass(a);return f}
    return f}
tQ=function(a){
    return (P(a))? ss(a): (E(a)||Q(a))? $(a): a.q
}


qq=function(jQ){
    jQ=jQ||$("body"); if(F(jQ)){jQ = jQ()}
    return function fn(met){
        if(U(met)){return jQ};
        if(F(met)){ return met(jQ) }
        var args = map(arguments, tryToInvoke);
        // $l('jQ.'+ met +' -> '+a[1]||''+' '+a[2]||''+' '+a[3]||'');
        jQ[met].apply(jQ, rest(args));
        return fn}}



qel = function(a){return dF( qq( tag(a) ) )}       //=getFromElseMakeNewEl