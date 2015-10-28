ip=function(t,v,C,c){
    var g=G(arguments),i=_i().at({t:t||'t',v:v})
    if(g.p){i.k('fc')}
    if(C){i.s('C',C)}
    if(c){i.s('c',c)}
    return i}
bt=function(){var g=G(arguments)

    g[0]=g[0]||'ok'

    var b=_n().k('b').ty('b').c('b','y')
        .k(g.p?'bl':'bm')(g[0])

    if(g.n){
        b.k('ddt')
        b.at({'data-toggle':'dropdown'})}

    if(g[1]){b.o(g[1])}

    return b}
bts=function(){var g=G(arguments),

    d=b2().P(10)
    _e(g,function(v){v=A(v)?v:[v]
        d(bt(v[0],v[1]).k(g.p?('fc'):'').M(4))})
    return d}
ctr=function(a,b){return bts(['start',a],['stop',b]).auto()}
btg=function(){var g=G(arguments),

    bg=dk('bg')

    _e(g,function(v){
        if(S(v)){v=bt(v)}
        bg(v)})

    return bg}
btv=function(){var g=G(arguments),d=dk('bgv')
    _e(g,function(v){if(S(v)){v=bt(v)}
        d(v)})


    return d}
dropb=function(a){
    return bt('-')((a||'menu')
        +' ',car())}
btd=function(a){

    var g=G(arguments),
        b=btg()(dropb(a)),
        u=ul('-')

    _e(g.r,function(v){if(S(v)){v=lik(v)}
        u(v)})
    return b(u)}
_form=function(){var g=G(arguments),

    f=_f().k('f').at({r:'form'})
    if(g.N){f.at({m:'post'})}
     if(g[0]){f.at({a:g[0]})}
return f}
fg=formgroup=function(a){var g=G(arguments),d=dk('fg')
    _e(g,function(v){d(v)})
    return d}
fo=function(){var g=G(arguments),f=_form()
    _e(g,function(v){
        if(A(v)){f.k(v[0])}
        else{f(v)}})
    if(g.p){f(sm().v('ok'))}
    return f.c('b')}
inlineForm=function(){return fo(['fi fg'])}
iF=function(){return fo(['w']).at({m:false,a:false})}
nbfo=navbarRight=function(){return fo(['nbf nbr'])}
fc=formcontrol=function(a){return ip(a).k('fc')}
rg=function(){return ip('g')}
ta=function(r,c){
    var _ta=function(){return qq($('<textarea>'))},g=G(arguments),t=_ta()
    if(g.N){t.k('fc')}
    if(N(r)){t.at({R:r})}
    if(N(c)){t.at({C:c})}


    return t.c('x','z')}
lb=function lb(l,f,n,p){var g=G(arguments),sl=_l(),st
    if(!g[0]){return sl}
    sl.at({for:f}).k('ctl').H(l)
    if(!g[2]){return sl}
    st=tx().at({id:f, n:n, ph:p||'...'})
    if(g.N){st.k('fc')}
    return sp()(sl,st)}
uname=function(){return  fg(lb('uname: ','uname'), fc('e').id('uname')) }
pword=function(){return  fg(lb('pword: ','pword'),fc('p').id('pword')) }
upl=function(){

    return fg(lb('file','input'),
    ip('f').id('input'))}
fup=function(l,h){
    ipf=function(a){return ip('f').id(a)}
    var d=dk('fg')(lb(l||'file input','upl').k('ctl'), ipf('upl'))
    if(h){d(pg(['hb'],h))}
    return d}
sm=function(a){return ip('s').k('s').v(ok(a))}
smb=function(a){return _n().ty('s').k('b bdf').T(ok(a))}
tx=function(){var g=G(arguments),
        t=ip(g.n?'p':'t')
    t.ph(g.f)
    if(g.N){t.k('fc')}
    return t}
pw=function(p){return tx(p||'password','-')}
cb=function(n,v,i){
    if(g.n){return dk('cb')(lb()(n).pp(cb()))}
    var g=G(arguments),
    c=ip('c').id(i).nm(n).v(v)
    if(g.p){c.po('c',true)}
    return c}
cbl=function(n,v,i){var g=G(arguments),
        l=lb(v,i), s=sp()(_a(cb,g),l)
    return s}
cbls=function(){var g=G(arguments),s=_s()
    _e(g,function(ar){
        s(_a(cb,ar))
        s(lb(ar[1],ar[2]))})
    s(br())
    return s}
rb=function(n,v,i){
    var g=G(arguments),
        r=ip('r').at({
            name:n, v:v, id:i})
    if(g.p){r.at({checked:'checked'})   }
    return r}
rbl=function(n,v,i){var g=G(arguements)
    return sp()(_a(rb,g),lb(v,i))}
rbls=function(){var g=G(arguments),s=_s()

    _e(g,function(ar){
        s(_a(rb,ar))
        s(lb(ar[1],ar[2]))})
    s(br())

    return s}
rbd=function(n,B){var g=G(arguments), d=_d()

    _e(g.r, function(v){
        d(rb(n,v))
        d(sp('&nbsp'+v))
        d($('<br>'))})
    return d}
rbf=function(n,B){

    var g=G(arguments),
        f=fo()

    _e(g.r, function(v){
        f(rb(n,v))
        f(sp('&nbsp'+v))
        f($('<br>'))
    })

    f(sm())
    return f}
sel=function(name,i){var g=G(arguments),

    s=_y().at({n:name,i:i})
    if(g.N){s.k('fc')}
    if(g.p){s.at({mutiple:'multiple'})}

    return s}
sels=function(){
    var g=G(arguments),s=_s(),sl= _a(sel,g.f)

    _e(g.r, function(v){if(S(v)){v=op(v)};sl(v)})

    s(sl)
    s(br())

    return s}
op=function(){var g=G(arguments),o=_o()(g[0])

    if(g.p){o.at({selected:'selected'}) }

    return o}
hdx=function(n,v){return ip('h',v).nm(n)}


fom=function(){var f={}
    f.f=fo()
    f.s=sm()
    f.u=tx().nm('u')
    f.p=tx().nm('p')
    f.f(f.u,f.p,f.s).Z(3).c('b')
    f.v=function(){return {u:f.u.v(),p:f.p.v()}}
    f.f.o('s',function(q,e){pD(e.e)
        y=f.v()
        qP('/sec',f.v(),function(d){yy=d})})
    return f}
tform=function(){
  return b3()(_form()(
       uname(),pword(),fup(),
       ch('checking this does nothing','-'),
       smb()))}
testForm=function(){return _f()(
    sels(['single'],'Single','Single2'),
    sels(['multiple','+'],op('Multiple','+'),'Multiple2',op('Multiple3','+')),
    cbls(['check','check1','ch1'],['check','check2','ch2','+']),
    rbls(['radio','radio1','r1','+'],['radio','radio2','r2']),
    sm())}