h1=function(){var g=G(arguments),h= qq($('<h1>'));_a(h,g);return h}
h2=function(){var g=G(arguments),h= qq($('<h2>'));_a(h,g);return h}
h3=function(){var g=G(arguments),h= qq($('<h3>'));_a(h,g);return h}
h4=function(){var g=G(arguments),h= qq($('<h4>'));_a(h,g);return h}
h5=function(){var g=G(arguments),h= qq($('<h5>'));_a(h,g);return h}
h6=function(){var g=G(arguments),h= qq($('<h6>'));_a(h,g);return h}
br=function(a){var s=sp()
    _t(a||1,function(){s($('<br>'))})
    return s}
hr=function(c,h,w){var e=qq('hr')
    if(N(c)){return hr('z',c,h)}

    e.h(h||2)
    e.c(c||'z')
    if(w){e.w(w)}

    return e}
pg=function(a){var g=G(arguments),

    p=_p()

     _e(g,function(v){

         if(A(v)){p.k(v[0])}
        else{ if(S(v)){v=sp(v)}
         p(v)}

     })

    return p

}
sp=function(){var g=G(arguments),s=_s(),str=''
    _e(g,function(v){
        if(A(v)){s.k(v[0])}
        else if(S(v)){str+=v}
        else {s.a(v)}})
    if(str){s.T(str)}
    return s}
spk=function(a,b){return _s()(a).k(b)}
sk=function(a){return _s().k(a)}
td=function(){return qq('td')}
tr=function(){return qq('tr')}
ft=function(){return qq('F')}
bo=bold=function(a,k){
    var g=G(arguments),
        h=g.p?'&nbsp;'+a:a
    return qq('B').H(h).k(k)}
dk=function(k){return _d().k(k)}
di=function(i){return _d().at({id:i})}
dv=function(r,w,h,l,t){
    if(!S(r)){return dv($r(),r,w,l,t)}
    var g=G(arguments),d=_d().P(10)
    d.s({C:r, w:w||200, nh:h||10})
    if(N(l)){d.a().drg().s({l:l,t:D(t)?t:l})}
    return d}

box=function(r,w,h,l,t){
    if(!S(r)){return box($r(),r,w,h,l)}
    var g=G(arguments),d=_d().P(10)
    d.s({C:r,w:w||100,h:h||w||100})
    if(N(l)){d.a().drg().s({l:l,t:D(t)?t:l})}
    return d}

b1=function b(r,l,t){
    if(!S(r)){return b($r(),r||100,l||100)}
    return box(r,100,100,l,t)}
b2=function b(r,l,t){
    if(!S(r)){return b($r(),r||100,l||100)}
    return box(r,200,200,l,t)}
b3=function b(r,l,t){
    if(!S(r)){return b($r(),r||100,l||100)}
    return box(r,300,300,l,t)}
b4=function b(r,l,t){
    if(!S(r)){return b($r(),r||100,l||100)}
    return box(r,400,400,l,t)}
b5=function b(r,l,t){
    if(!S(r)){return b($r(),r||100,l||100)}
    return box(r,500,500,l,t)}
b6=function b(r,l,t){
    if(!S(r)){return b($r(),r||100,l||100)}
    return box(r,600,600,l,t)}
b7=function b(r,l,t){
    if(!S(r)){return b($r(),r||100,l||100)}
    return box(r,700,700,l,t)}
b8=function b(r,l,t){
    if(!S(r)){return b($r(),r||100,l||100)}
    return box(r,800,800,l,t)}

iLi=function(a){return _h('HTMLLIElement', E(a))}
tLi=function(a){return iLi(a)?a:li(a)}
li=function(){var g=G(arguments),

        l=_e()

    _e(g,function(v){

        if(A(v)){
            l.k(v[0])}
        else {l(v)}})

    if(g.p){l.k('A')}
    if(g.n){l.k('dd')}

    return l}
lk=function(){var g=G(arguments),q=_a().at({href:g[1]||'#'})(g[0])
    if(g.n){q.at('dt','dropdown').k('ddt')}
    return g.p? _e()(q):q}
lik=function(){
    var g=G(arguments),l=li(lk(g[0],g[1]))
    if(g.p){l.k('A')}
    return l}
ul=function(o,b){var g=G(arguments),e=_u()
    _e(g,function(v){
        if(A(v)){e.k(v[0])}
        else{e(tLi(v))}})
    if(g.n){e.k('ddm')}
    if(g.p){e.k('n nbn')}
    return e}
ol=function(o,b){var g=G(arguments),e=qq('o')
    _e(g,function(v){
        if(A(v)){e.k(v[0])} else {e(v)}})
    return e}





