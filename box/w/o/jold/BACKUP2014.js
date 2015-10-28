drg=function(d){var q=qq(E(d))

    q('a')
    q.o("md",function(q,x0,y0,x,y,e){
        var l=q.l(),
            t=q.t(),
            mx=x,
            my=y

        mm(function(Q,x,y,X,Y){
            q.l(l+X-mx)
            q.t(t+Y-my)})

        mu(function(h){h.q.off()})})

    return d}



$t=function(a,b){var g=G(arguments) // var _tag=function(a){return $('<'+ a||'' +'>'+ b||'' +'</>')}
    var t= $('<'+oO('t',a||'d')+'>'+(b||'')+'</>')
    if(g.N){cL(_o(t))}
    if(g.p){qq(t).a()}
    return t}





qq=function(e,b,c,d){
    e=e||'d'

    if(O(e)){
        if(e.name==='q'){return e}
        if(e.name==='x'){e=e.c}
        e=E(e)?E(e):$t(e.t, e.h)}

    if(S(e)&& $w['_'+e]){e=$w['_'+e]()}

    var q=function q(a,b){
        if(U(a)){return cL(q)}
        if(a==='*'){return q.c('*')}
        if(a==='x'){q.q.remove();return q }
        if(a==='e'){q.q.empty();return q }
        if(a==='a'){q.s('p', 'a');return q }
        if(a==='s'){q.s('p', 's');return q }
        if(a==='f'){q.s('p', 'f');return q }
        if(a==='r'){q.s('p', 'r');return q }
        if(Q(a)){q.a(a);return q}
        if(A(a)){
            _e(a, function(i){
                if(A(i)){i=_a(q, i)}
                q(i)})
            return q}
        if(E(a)){return q.a(E(a))}
        if(O(a)){return q.s(a)}
        if(N(a)){return q.ch(a)}
        q.res=_a(q.m, arguments)
        return q}

    q.q=Q(e)
    q.e=q.q[0]
    q.s=function(a,b){q.res=ss(q.q,a,b);return q}
    q.m=qM(q.q)

    q.o=ee(q.q)

    q.drg=function(){drg(q);return q}
    q.at=function(a,b){   // get/set attr//for,name,id,val, etc...
        q.res=aa(q.e, a, b);
        return q}
    q.a=function(a,b){

        if(a===2){
            if(U(b)){$b()}

            b=D(b)? qq( b ).q   :_b()
            q.q.appendTo(b)
            q.P('s'); return q }

        if(U(a)){return $b(q)}


        // append (changes P to static)
        if(A(a)){_e(a, q.a)}
        else {_e(arguments,
            function(a){
                q.q.append(Q(a))})}
        qq(a).P('s')



        return q}
    q.p2=function(a){return q.q.prependTo($(a||'body'))}//q.pp=q.m('pp')
    q.t=function(a){
        if(U(a)){return _i( q.s('t').res )}
        q.s('t', a)
        return q}
    q.ol=function(a){ q.s({o:tOl(a||'m')});return q}
    q.l=function(a){
        if(U(a)){return _i( q.s('l').res ) }
        q.s('l', a);
        return q}
    q.oh=function(){return _o(q)}
    q.lt=function(a){
        if(a===0){q.l(0).t(0)}
        return q}
    q.w=function(w,b){
        if(U(w)){return q.q.width()}
        if(w==='+'){return q.w( q.w()+b ) }
        if(w==='*'){return q.w( q.w()*b) }
        if(w==='%'){return q.w( q.w()*b *.01 ) }
        q.q.width((w<10)?w*100:w  )
        return q}
    q.h=function(h,b){
        if(U(h)){return q.q.height()}
        if(h==='+'){return q.h( q.h()+b ) }
        if(h==='*'){return q.h( q.h()*b) }
        if(h==='%'){return q.h( q.h()*b *.01 ) }
        q.q.height(  (h<10)?h*100:h)
        return q}
    q.z=function(z,b){//siz
        if(U(z)){return q.ch().size()}//return {    w:q.q.width(), h:q.q.height()  }
        if(z==='+'){q.w(q.w()+b); q.h(q.h()+b)}
        if(z==='*'){q.w(q.w()*b); q.h(q.h()*b)}
        if(z==='%'){q.w(q.w()*b*.01); q.h(q.h()*b*.01)}
        q.h(b||z);
        q.w(z);
        return o}
    q.k=kl(q)
    q.ct=function(a,b){return q.q.contents(b)}
    q.f=function(a,b){
        if(U(a)){return q.s('fz')}
        if(N(a)){q.s('fz', a*10);
            return q}
        return q.q.find(a)}
    q.H=function(t){
        if(t==='e'){return q.q[0]}
        if(t==='o'){return q.outerHTML}
        if(U(t)){return q.q.html() }
        q.q.html(t)//cL(q.H())
        return q}
    q.T=function(t){if(!t){return q.q.text()}
        q.q.text(t);return q}
    q.ch=function c(a){
        if(N(a)){return qq(c()[a||0])}
        return q.q.children(a)}
    q.x=function(x){if(!x){return q.q.offset().left};
        return _i(x-q.x())}
    q.y=function(y){if(!y){return q.q.offset().top};
        return _i(y-q.y())}
    q.c=function c(a,b){var g=G(arguments),s=q.s,i=is(a)
        if(i(0)){return s('c', b||'z')}
        if(i('*')){return q.c($r())}
        if(i('**')){return q.s('c', $r() )}
        if(i('***')){return q.c($r(), $r() )}
        if(U(b)){q.s('C', $r('c',a));return q}
        q.s({C:a, c:b})
        return q}
    q.P=function(a){if(U(a)){q.s('p'); return q.res }
        q.s('p', a)
        return q}
    q.D=function(a){
        if(U(a)){return q.s('d')}
        q.s('d', a);
        return q}
    q.m=function(a){q.s('m', a); return q}
    q.p=function(a,b,c,d){

        q.pl=function(a){q.s('pl',a);return q}
        q.pr=function(a){q.s('pr',a);return q}//q.pt=function(a){q.s('pt',a);return q}
        q.pb=function(a){q.s('pb',a);return q}


        if(N(a)){
            if(U(b)){q.s('p', a)
                return q}
            q.pl(a)
            q.pr(b)}

        if(N(c)){q.pt(c)}
        if(N(d)){q.pb(d)}
        return q}
    q.j=function(b,c){
        b=qs(b)
        if(N(c)){_a(q.q,b,c*1000)}
        else{_a(q.q,b)}
        return q}
    q.jj=function(a,b){
        var i=is(a),
            m=i('t')?'toggle'
                :i('s')?'hide'
                :i('h')?'show'
                :i('sd')?'slideDown'
                :i('su')?'slideUp'
                :i('fo')?'fadeOut'
                :i('fi')?'fadeIn':0
        if(m){q.q[m](b);return q}}
    q.sp=function(a,b,c){return q.a(sp(a,b,c))}
    q.dv=function(a,b,c,d){return q.a(dv(a,b,c,d))}
    if(O(b)){q.s(b)}
    if(O(c)){q.at(c)}
    if(S(d)){q.H(d)}
    if(F(d)){q.$(d)}





    return q}
