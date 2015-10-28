boo=function(f){
    var fn =function r(a){if(U(a)){
        return r.a}
        return r}
    fn.a=$B(fac)
    fn.and=function(f){var t=this;t.a=$B(f&&t.a);return t}
    fn.or=function(f){var t=this;t.a=$B(f||t.a);return t}
    fn.nor = function(f){var t=this;t.a=$B(!f&&!t.a);return t}
    fn.nand = function(f){var t=this;t.a=$B(!f||!t.a);return t}
    return fn}


arg=function(ag){return function(spec, op){

    var bT=function(a){return a[1](a[0])},
        bF=function(a){return !(a[1](a[0]))}
    pU=function(a,b){return F(_m(Z(a,b),_C), function(a){return _z(a)>1})},  //pairUp
        hy=function(a){return _m(p0(a),function(a){if(iUp(a)){return not($w[tUp(a)])}
            return $w[tUp(a)]})},//hydrate
        mT=function(a,s){return pU(a,hy(s))},//makeTest
        ARGS = _z(ag), SPECS = _z(spec),
        more = ARGS > SPECS,
        less = ARGS < SPECS,
        theSame = ARGS == SPECS,
        notLess = ARGS >= SPECS,
        notMore = ARGS <= SPECS,
        different=!theSame,
        nada=ARGS== 0,

        o=function(fl, it){return boo(fl(mT(ag, spec), it))},

        OPS={
            pass:        o(E, bT).and(theSame)(),
            orLess:       o(E,bT).and(notMore)(),
            orMore:        o(E, bT).and(notLess)(),
            noFail:       o(E, bT)(),
            somePass:       o(some, bT)(),
            nonePass:       o(E, bF)(),
            someFail:     o(some, bF)(),
            fail:          o(some, bF).or(different)(),
            antiPass:    o(E, bF).and(theSame)(),
            mix:          o(some, bT).and( o(some,bF)())()}

    if(OPS[op||'pass']){return true}

}

}
arg.tx=function(){

    var ag=arg(arguments)
    if(ag("n,n,n",a)){alert('exactly 3 numbers')}
    if(ag("n",a,'l')){alert('starts with number')}
    if(ag("n",a,'n')){alert('no numbers')}
    if(ag("n",a,'s')){alert('at LEAST 1 number')}
    if(ag("n",a,'a')){alert('all numbers')}
    if(ag("n",a,'m')){alert('one number')}}




$f=function $f(a, b){

    tFo=function rc(a){var F,W,S, Z
        _tFo=function(a){
            a=(a||'').split('/');
            var s=_p(a[0])
            if(a[1]){s+='/'+_p(a[1])}// add optional lineheight value
            return s}

        _e(a.split(' '),
            function(p){
                if(nN(p[0])){Z=_tFo(p)}
                if(Oo('ff',p)){F=Oo('ff',p)}
                if(Oo('fw',p)){W=Oo('fw',p)}
                if(Oo('fs',p)){S=Oo('fs',p)}})

        return   [
            S||'oblique',
            W||'800',
            Z||_p(50),
            F||'fantasy'].join(' ')}


    if(U(a)){return tFo()}

    if(!O(a)){
        return $f(_b(), tFo(a)) }

    ss(a, {f:b})

}

evl=function(){
    var g=G(arguments)
    return F(g.f)? g.f
        :g.N? function(a,b,c){ eval(g.f) }
        :function(){ eval(g.f) }}

aB=function(){return $('<button>')}
ap2=function(a,b){return a.appendTo(b)}
tT=function(a){_b().prepend(a);return a}

//jquery

even=function(a,b){return $(a||'*'+':even')}
jFil=function(a,b){return $(a).filter(b)}
isAnim=function(a){return $(a).is(':animated')}
jContains=function(a,b){return $(a).contains(b)}


_sl=function(a,b,c){return a.slice(b,c)}

// for dynamic method calling!!
// you can pass it a string and the obj
//met-key@, met-ob, pam,pam...  (applied to met-ob)

$a=function $a(a,b,c){var g=G(arguments)

    return U(b)? _p($a,a)
        :F(a)?_a(a,b,c)
        :_a(b[a],_r(g,2),b)}  //_a(a[b], _r(g,2), a)  ?

//$a('fillRect', x, 0,0,100,100)



a0=function a0(a,b,o){var g=G(arguments)
    return   (F(a) &&  A(b)&&  !(U(o)||O(o)))?
        _a(a, b, o):D(b)?   a0(a,_r(g)):0}
$$a = function(m, gA, o){var g=G(arguments)
    return S(m)?$a(m, gA, o)
        :a0(m,gA,o)||G(m)||m}


mta=function(){return _m(arguments,tA)}
cc=function(a,b,c){var g=G(arguments)
    return _a(_$A.concat, tA(a), g.r)}



openCv=function(c){$w.open(tDU(c),'new_window','width=310,height=30')}

run=function(n){
    if(F($w[n])){
        $w[n]( ipV(n) )}}


fF=function(a){return f(a)? a(): a}

ipV=function(a){return _v(  _f(_ch(_pa(idq(a),'div')   )  ))}


gC=function(a){return $w[a]=xx($('#'+a)[0])}

d3={m:10, pd:10,  d:Ol("b 200 r"),bc:'y',  c:'@', w:50,  h:50, y:'ib'}

mapQ=function(){return _m(G(arguments),Q)}

tra=function(a,b,c){

    var sel = N(b)? a+':eq('+b+')'
        :b=='n'?  z:0

    //select 2nd li el: 'li:eq(1)'
//then.. li:eq(1).next() | prev | nextAll |
// prevAll | parent | parent().children()


}

sibs=function(a){return $(a).parent().children()}
// to return to PREVIOUS wrapper set, use 'end'
// using 'andSelf' is handy!
// 'destrutive methods' change the wrapped set
qSet=function(q){q=$(q)}
//add, andSelf, children, closes, filter, find, map
// next, nextAll, not, parent, parents, prev, prevAll,
//siblings, slice, clone, appendTo, prependTo, insertBefore,
//  insertAfter, replaceAll



//elExist=function(a){return _l($(a))}



osDemo=function(){
    _t(20, function(){
        em('d',{w:50, h:50, C:$r()})})
    var d=_d().eq(3)
    fO(d)
    fI(d)
    bw.o(d, {t:100, l:300})
    return bw.o(d)}

allTdWithNumVal=function(){
    return $('td').filter(function(){
        return this.innerHTML.match(/^\d+$/)})}
togCl=function(a,b){return $(a).toggleClass(b) }
attrib=function(){
//$('img[alt],img[title]') ~ $('img[alt]').add('img[title]').. but better
//b/c it creates NEW wrapped set.. can be useful with use of 'end'
//add vs not/filter
//slice, has, map
//atts again:  cellspacing, class, colspan, cssFloat, float, for, frameborder,
//maxlength, readonly, rowspan, styleFloat, tabindex, usemap
//'$(elem)', takes *ATTS*ob as 2nd pam.. so:
// $('<img>',{
// src, alt, title,... even 'click'
// }).css({}).appentTo('body)
//atts that can be set: val,css,html,text,data,w,h,offset
}
h3=function h(a,b){
    return  S(b)? a.H(h(b))
        : S(a)? $('<h3>'+a +'</h3>')
        :O(a)? _p(h,a ):0 }
border=function(a,b){

    b=ob(b)

    return ss(

        qq(a||'body').q,

        {
            ds: b.s||'s',
            dc: $r('c', b.c),
            dw: D(b.w)? b.w : 10
        }


    )}
rmAt=function(a,b){return $(a).removeAttr(b)}
attr=function(a,b){return  a.attr(b)}
atts=function(a){var t=attr

    return {action:t('action'),
        src:t('src'),
        w:t('width'),
        h:t('height'),
        tg:t(target)}}
txt=function t(a,b){

    return  U(a)?   t('sijj')
        :S(a)?          t(_b(), a)
        :a.text(b)}
qi=function(a){return $('#'+ a)}//brilliant getter/setter for SCROLL BAR POSITION!
dH=function(a,b){return qq(a).H(b||'')}
dib=function(a){
    a=Q(a)
    a.css('display', 'inline-block')
    return a.css('display')}
c$=function(a,b){
    var a=Q(a).clone()
    if(O(b)){ss(a, b)}
    return a}
id=function(t,k){return pp(t,'i',k)}
nam=function(t,k){return pp(t,'n',k)}
sb=function(a){var d= _D()
    d.s = d.scrollTop
    return D(a)? d.s(a)
        :d.s()}
bwc=function(w, n){return W()/2 - w/2}
bP=function(l){return l*100/W()

//give it a w, and it tells u what percentage,
// that with is,// -- of the screen size
//give it a w, gives u the L pos to place it at for it
//to be centered (rel to CURRENT screen size)
}
dbl=function(a,b,c){return  a.dblclick(b)}
rgba=function(a,b){
    var rgbStr=function f(r,g,b,a){
            if(O(r)){
                return f(r.r||0,r.g||0,r.b||0,r.a||1)}
            return 'rgba('+tA(arguments).join()+')'},
        getColor=function(a){
            return ss(ss($('<div>'),
                {c:a}),'c').replace(/[^\d,]/g,'').split(',')}
    a=getColor(a)
    return rgbStr({r:pI(a[0]),
        g:pI(a[1]),b:pI(a[2]),a:b||1})}


crazy=function(q,a){
    o=tT(bx().z(200).c('b','o').p(10,10).m(50).a(

        i=bx('jas').z(50).c('o','b').p(10,10).m(20).q,

        j=bx('fred').z(50).c('r','y').p(10,10).m(20).q).q)

    _e([j,i,o,'body'], function(v){
        var k=a||'m',
            j=anim,
            ob={k: G(arguments).N?  200: -200}
        j(v, ob, 10)
        ob[k]=0
        j(v, ob, 10)})}
mod=function(){

    z()

    img=ig('/me.png')
    qq(img).k()
    qq(img).at('T','jason')

    span=sp('module caption')

    body=qi()
    body.c('r')
    body.k('body')
    body.H('ajjajjajaajjajajaja')

    caption=qi()
    caption.k('caption')
    caption([span, img])

    module=qi()
    module.k('module')
    module([caption, body])

}



fad=function(q,o,i){

    fO(qq(q).q,o)
    fI(qq(q).q,i||o)
       return q}


rx=function(){x();n=0;return rat("n++; r1(n)",600)}

sii=function(){  si("ss($('body'),{C:$r()});lt()", 1500)    }


shw=function s(q){var w=_w(q.q), h=_h(q.q)

    anim(q.q, {w:(w+10)*10, h:(h+10)*10},1)
    fad(q,1000)
    anim(q.q, {w:w,h:h},1)
    return q}

dbl=function(a){$('html').dblclick( tF(a) ) }




custDataAtr=function(a,b,c){a=$(a)
    if(U(c)){return a.attr('data-'+b)}
    a.attr('data-'+b,c)
    return  a}



pad=function p(el,a,b,c,d){
    var s=ss(el)
    if(U(a)){return {
        t:s('pt'),
        b:s('pb'),
        l:s('pl'),
        r:s('pr')}}
    if(U(b)){return s('p', a)}
    if(U(c)){
        s('pl', a)
        s('pr', b)
        return s}
    if(U(d)){
        s('pl', a)
        s('pr', b)
        s('pt', c);
        s('pb',c);
        return s}
    s('pl',a)
    s('pt',b)
    s('pb',c)
    s('pr',d)
    return s}


fZ=function z(a,b){return U(a)?z(50):N(a)?z(_b(),a):ss(a,{fz:b||50})}
fC=function r(a,b){return U(a)?r($r())
    :S(a)?r(_b(),co(a))
    :ss(a,{c:b})}


focusOnSecondText=function(){
    $('html').click(function(){
        eq(':text',1).focus()})}

hT=function(a){return tT(a, "head")}

grid=function(){
    corner=function(n){
        n-=1
        d1(n,n)
        return n},
        edge=function(n){
            var nn=n

            corner(n)

            _t(n,   function(){

                d1(n,nn)
                d1(nn,n)
                nn -=1
            })}



    MX=function(n){
        XX()
        n=n||3;
        _e(_R(n),function(n){
            edge(n+1)});
        return DV()}


    memoryGame=function(){ bC('z')

        faces=[
            ':)',
            ':/',
            '8-p',
            '8>',
            ";)",
            ":o)",
            '%-}',
            ':)',
            ':/',
            '8-p',
            '8>',
            ";)",
            ":o)",
            '%-}',
            ':0^',
            ':0^']

        MX(4);ar=[];l='*';m={}
        _e($('div'), function(d){
            ss(d=$(d),{fz:50,  ta:'c'})
            d.h=(faces.pop())
            ar.push(d)
            // d.html(d.h)
        })
        _e(ar, function(a){a.click(function(){
            var q=$(this)
            if(a.h===l){
                $(a).remove();$(m).remove()}
            $('div').html('')
            q.html(a.h);l=a.h; m=a})})}}

tv=function tv(a){
    return U(a)? $('.tv')
        :O(a)? _e(tv(),function(e){ss(e, a)})
        :qq(_dv(),{w:150,h:30,C:a,m:50,ta:'c'})
        .H(hi(a)+$r('c',a)).kl('tv').a()}

disableSubmit=function(){
    qq($(':submit')).at('d',true)}

bd=border=function(a){
    ss(a,{dw:20, dc:'r', dw:100, ds:"solid"})}

mouse=function(){

    colorPick=function(){
        d.q.mousemove(function(e){
            var c=$r('c')
            ss(d,'C',c)
            d2(c)})}

    rg=function(q){ee(qq(q),'me',
        function(e){
            var o=eq(e,q)
            ee(e,'mm',
                "q.L(o.l+x-o.x);q.T(o.t+y-o.y)"
            )})}}


ww=function(w){
    var h=qh()
    if(S(w)){
        h.c($r('c',w)
        )}
    return h}

ww.c=function(c){ww(c||'*')}

qClick=function(a){
    q.o('click',function(e){var x=clX(e),y=clY(e),
        g=_g(e),t=this,j=$(this);q=qq(j);q.ev=g
        a(g,x-q.x(),y-q.y(),x,y)}
    return q}


r1=function(a){
    a=a*a
    return dv(a,a,a,a)}



dib=function(a){qq(a).s('d','ib')
    return qq(a).s('d') }

$z=siz=function(a,b,c){
    a=qe(a);
    var e=(a)[0]

    if(C(e)){
        var u=e.toDataURL()
        e.width=b;
        e.height=c;
        im(u,function(i){
            fit(gX(e), i)})
        return a}

    if(U(b)){return wh(_w(a)/40, _h(a)/40)}
    var d=wh(_r(arguments))

    w(a, d.w*40)
    _h(a,d.h*40)

    return a}


wh=z$=function f(a,b,c,d){
    a=nm(a)
    var e=eE(a)
    if(C(e)||I(e)){return {w: _w(eE(a)), h:_h(eE(a))}}
    if(O(a)){
        var w=a.w||0, h=b;
        if(U(a.h)){a.h=w}
        return {w:w,h:a.h}}
    return A(a)? $a(f,a):
        N(d)? f((a-c)/2,(b-d)/2) :
            f({w:a,h:b})    }


iWh=function(a){return {w:$($w).get(0).innerWidth(),h:$($w).get(0).innerHeight()} }

wh=function wh(a,b,c,d){
    if(N(a) && N(b) && N(c) && N(d)){
        return wh((a-c)/2, (b-d)/2)}
    a = G(a) || E(a) || a
    if(A(a)){return _a(wh,a)}

    //if just an el, give back a w/h pop-obj

    if(E(a)){if(U(b)){
        return {w:_w(a), h:_h(a)}}


        _w(a, _w(b,c))
        _h(a, _h(b,c))}


    if(O(a)){return {
        w:_w(a)||0,
        h:_h(a)|| _w(a)||0}  }

    return wh({w:a, h:b})}

siz=function(el, b, c){
    var g=G(arguments),
        q=Q(el),
        e=(q)[0],
        n=40

    if(C(e)){
        var u=tDU(e)
        aaWH(b, c)
        im(u, function(i){
            fit(X(e),i)})
        return q}// canvas resizing :)

    if(U(b)){
        return wh(
            _w(a)/n,
            _h(a)/n)}

    var z=wh(_r(g))
    _w(a, z.w*n)
    _h(a, z.h*n)
    return a} //setting



zWh=function(a){ return a? qq(a).w()/2:sZ().w/2}
cW=function(d){qq(d).l(zWh()-zWh(d));return d}




ind=function ind(a,b){

    if(U(b)){return _z(a)}
    var i=b.indexOf(a)
    if( ! (i==-1) ){return i}}

$cat=function(){ var g=G(arguments); return(

    _r(   g,
        function(a,b){return a + _S(b)},
        ''                                   ))}

oB=function(a){return $(a?a:$b())}


c$=function(a,b){return io$(a,b)!==-1 }




cc=function(da){return {

    da:da||[],

    cl:function(p){
        var t=this, m=mD(p,t.da); t.lr=m.p
        return m.l},

    cch:function(){
        return tH(this.lr) }

}}






_e=function(a,b){if(!b){
    return _r(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&",a)}
    return _R(_e(a),b)}



f=function(a){return Function("a","b","c", g$ + "\n" + a)}

ff=function f(a){
    return f[a]?f(f[a]):S(a)?f._f(a):0}



ff._f=function(a,b,c,d,e){
    return new $F("a", "b", "c", "d", "e",
        "var g =G(arguments) , t =this;"+a+"; return t")}



ff._f=function(a,b,c,d,e){
    return new $F("a", "b", "c", "d", "e", "var g =G(arguments),t=this;"+a+";return t")}

_U=function(a,b,c){
    if(U(a)){b=ff(b); return b(b)}
    if(!U(c)){ff(c)(a,c)}}
_U.t=function(a){return _U(a,"t={j:5}","alert(a)")}


eR$=function(a){return _rp(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&",a)}











fa=function(args){
    var o={}, _Fo=function(a,b){
        return _I(_F(_I(a),b))}
    _e(BA,function(b){o[tL(b)]=fi(args,$w[b])})
    return _Fo(o,_n(U))}


fa.toString=function(){
    return "-fa-\n-> arguments\n<- a very interesting object." +
        "\nevery letter of the alphabet is a popKey.\nits value is " +
        "the FIRST arg that was true\n(for that letter as a bool func)."}

g$="var t=this,"+
    "g= _.toArray(arguments),"+
    "str='', arr=[], obj={}, "+
    "zG=_.size(g), "+
    "fG=_.first(g),"+
    "rG=_.rest(g), "+
    "lG=_.last(g), "+
    "iG=_.initial(g);"
    + "if($w['arg']){var o = arg(g)};"


$g=function g(a){  return G(a)? _m(tA(a),g)  :a  }


_$gl=function(a,b){return eval(eq(a,b))}


gg=function f(a,b,c,d){

    a=ji(a)


    if(O(b)){_e(b,function(v,k){f(c,k,v,a)})
        return a}

    if(U(b)){

        return function(b){
        return function(c,d){
            return f(b,a,c,d)}}

    }



    if(U(c)){return f(a,{},b)}

    if(!U(d)){$i(a,b,c,d)}

    return a[oO(oO(b),c)]

}


$g=ag=function(b){return function(a,c){c=c||'e'

    var s=a.split(','),
        S=_z(s),
        B=_z(b)

    if(c=='e'){return aE(b)}
    if(c=='m'){return aM(b)}
    if(c=='l'){return aL(b)}
    if(c=='n'){return aN(a,b)}
    if(c=='s'){return aS(a,b)}
    if(c=='a'){return aA(a,b)}
    function ck(a){return is(a[0],a[1])}
    function ab(a){return function(b){return is(a,b)}}
    function aE(b){if(S==B){return E(Z(s,b),function(a){
        return ck(a)})}}
    function aM(b){b=Z(s,b)
        if(S>=B){return E(b,function(a){
            return !a[1]||ck(a)})}}
    function aL(b){if(S<=B){
        return E(Z(s,b),function(a){
            return !a[0]||ck(a)})}}
    function aA(a,b){return E(b,ab(a))}
    function aN(a,b){return !aS(a,b)}
    function aS(a,b){return S(b,ab(a))}}}

gE=function(a){return $(oO('t', a||'d'))}

get=function(a,b){return $($(a).get(b))}

ii=function ii(f){
    return function(a,b,c){
        if(!b){return f(a)}
        if(c==='!'){c=b;b=null}
        if(f(a)){
            if(b){b (a,b,f,ii)}}
        else if(c){c (a,b,f,ii)}}}


$lst=function(a,b){return(b)?ind(a,b)==_l(b)-1:a[_l(a)-1]}
oScr=function(a){$$w.scroll(a)}
$s=function(a){return O(a)?J(a):_S(a)}
sW=ff("_f(a,_z(b))==b")
inverseSlice=function(a,b,c){return _cc(_sl(a,0,b),  _sl(a, c, _z(a))  )}
tS=function(a){return(iO(a))?_js(a):_ts(a)}
bC=function bC(a,b){return b?ss(a,'C',b):bC('body',a)}
num=function(n,a){return n<0?n+_z(a):n}




io$=function f(a,b,c){return _io(a,b,num(c,a)}
lo$=function f(a,b,c){return _lo(a,b,num(c,a))}
p$=function(a,b){return(f$(a,b))?a:b+a}

    e$=function(a,b){if(!b){return c$(a,'.')?
        ali$(a,'.'):false}
        if(!e$(a)){a+=p$(b,'.')}
        return a}
    sel=function(a){var b=''
        _e(_r(arguments),function(v){b+=opt(v)})
        return $("<select name="+a+">"+b+"</select>")}

nO=$f("(a[0])?j(a,''):'='")//[[1,2],[0],[3]]->[[1,2]]

cm=function(x,b,c){
    var x=X(x)
    x[oO('X',b)]=oO(b,'X','R')
    cL(x[oO('X', b)])}


pre=function(a,b){return sW(a,b)?a:b+a}
gJ=function(a,b,c){return $.getJSON(a,b,c)}


po=function(r,g,b){
    p16=function(a){
        return _i(a,16)
    }}


hr=function(r){

    var f=$M.floor, n=256, v=p16(rr(r))

    return new po(f((v/(n*n))%n),
        f((v/n)%n),
        f(v%n))}


nP=function(a){return a.replace("#","")}
rgr=function(r){return r[0]+r[0]+r[1]+r[1]+r[2]+r[2]}


z3=function(a){return _z(a)==3}


if(S(r)){
    if(z3(a=nP(a))){a=rgr(a)}
    var v=p16(a)
    b=mf(v%256)
    g=mf((v/256)%256)
    r=mf((v/(256*256))%256)
}
return Po(r,g,b)}


poi=function(url,cb){ var A=[]

    gJ(  url,function(P){
        _e(P,function(p){
            A.push(Po(p.x, p.y, p.z, p.l))})
        cb(A)})}


P=_p=function(a,b){
    if (U(b)){
        return O(a)&&!Q(a)&&!E(a)? gP(a): false}
    return  F(a)? _p(a):  false}


    (a):  false}



pT=pp=function(a,b,c){
    b=b||"body";
    if(!ne(c)){
        a=$(a)
        b=$(b)}
    return $(a).prependTo(b)}


P=function(a){return O(a) &&!Q(a) &&!E(a)}//plain?//oButNotQ=nQ=




_removeBeforeFirstIndexOf=function(a,b){
    return _sl(ind(a,b),
        _l(b),
        b)}



regexEscape=function(a){return _r(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&",a)}




Srt=function f(s, n){
    if(!U(s)){s=[s]}
    return {
        n:n||'',
        c:s||[],
        a:function(a, b){
            this.c.push(a);
            this[a]=f(b,a)}}}


$s=function(a){if(O(a)||A(a)){
    return JSON.stringify(a)}
    return (a).toString()}


sel=function(a){
    var b=''
    each(_r(arguments),function(v){

        b+=opt(v)})
    return $("<select name="+a+">"+b+"</select>")}




_sliceAfterIndex=function(a,b){
    return b.slice(
        b.indexOf(a),
        b.length))}


tag=function(a,b,c){return "<"+oO('t', a||'d')+" "+(b||'')+">"+ (c||'')+ "</>"}



url="http://gauth.fr/wp-content/uploads/2011/09/color_classif/dataset.js";

ul=function(a){var g=G(arguments), arr=(A(a)?a:g)

    if(g.p){
        return tag('ul',
            {"class":"list", html:a||''})}



    var l=tag('ul', {"class":"list"} )

    _e(g, function(i){
        l.append(li(i))})

    return l}



TF=[
    ['a:xsc', 'c:xsk', 'e:xtr'],
    ['b:ysk',
        'd:ysc',
        'f:ytr'],
    [0,0,1]]    //cant change bottom row vals


scaleSingleShape=function(x,px,py,s){
    var x=xx(x)
    x('S')
    x('tr' ,px, py)
    x('sc',s)
    x('fr',0,0,100,100)
    x('R')
    return x}



transAndRot=function(x,px,py,s){var x=xx(x)
    x('S')
    x('tr' ,px, py)
    x('rt',s)
    x('fr',0,0,100,100)
    x('R')
    return x}



//maxWidth, measureText ( text)



m1=[[10,0],[19,19],[10,9],[9,9],[0,19],[9,0]]
m2= [[19,19],[10,119],[19,10]]
m3=[[[10,0],[19,19],[10,9],[9,9],[0,19],[9,0]] ,
    [[19,19],[10,119],[19,10]] ]



$(function(){

    h=cBox();
    r=rang();
    brk();

    //o('sc', o.w/ 1000, o.h/1000)


    gr(o,[[200,200],100,200], {
        r:0,
        b:1,
        o:2,
        p:4,
        p:7,
        g:10},300,600)

    cur(x,10,300, 900, 0)
    cur(x,10,300, 0, 500)
    cur(x,10,3000, 400, -1000)



    gr(bx, [0,100,500,100],{'0':0,W:5,r:10})

    sun(bx,200,250,2)//bx is q[c]

    sun(cx,160,270)



// drawimage can take actual canvas elements, but it cant take a dataURL.  if you only have the dataURL, you need to filter it through an image element...
// image elements are also taken by canvas elements

// canvas invoked to its dataURL .. sources an image .. which is drawn  onto canvas  (but needs to load first..)



    pT( _s().text('jason') )



    sty({rb:{C:'g',c:'w',fw:'+'},
        rg:{C:'o',c:'r',fw:'+'},
        cool:{ C:'b',c:'o',fw:'*9'}})


    ldv=function(T){
        return dv({C:'z',c:'w', ta:'c',
            w:200,h:120,
            L:650,T:T||10})}




    rem=function(a){return $(a).remove()}

  bns=function bn(o){
       rem('button')

        $(function(){

            _t(26,

                function(i){o=ob(o)

                    var w=_f(W()/26),
                        b=qq(BTN,
                            {w: o.z||w, h: o.z||w,
                                c: o.c||$r('c'),
                                C: o.C||$r('c')})
                    b.ht(i)
                    b.$(o.f||function(e){
                        ss(e,{C:$r('c')})})
                    b.pt()})})}

 ico=function(){
        var z=mF(W()/26)
        $('img').remove()
        im('me',function(i){
            _t(50, function(){
                picBox.ae( clo(i,{h:z,w:z,m:4}) )})})}



  simp=function s(q,c,w,h,t){ var g=G(arguments)
       if(!A(q)){return ap2( ss(q,{C:c, w:w, h:h}),t) }

      _e(g,function(a){_a(s,a)})}







  al=function al(){var b=_dv()
        ss(b, {C:'gr', w:500, p:50, h:550})
        simp([_dv(),'C',400,400, b],
            [_ip('t'),'y',350, 50, b],
            [ab(), 'b',50,50, b])
        return tT(b)}









    pS                      =$p(' ');
    pj                      =$p('/');
    p$                      =$p('|');
    p0                      =$p();
    p_                      =$p('_')




    ss=function(a,b,c){


        var cc =function f(a,b,c){

            if(O(b)){

                _e(b, function(k, v){ f(a, v, k) }); return a}

            if(U(c)){

                return  a.css( oO('S',b) )};

            a.css( oO('S',b),  oO(jo(b,oO('R')), c)     );

            return a}



        var ss=function(a){a=$(oB(a));

            return function f(b,c){if(U(b)){return a}

                if(F(b)){return b(a)}

                if(S(b) && U(c)) {return cc(a,b)}

                cc(a,b,c);return f}}



        if(U(b)){return ss(a)}

        return cc(a,b,c)}




    rad=function(){
        _e(['r','c','b','i',
            'R','t','p','s','f'] ,
            function(v, k){

                bR(2)

                var i=inp(v)

                val(i,v)
                chk(i,true)
                siz(i,3)
                $w[v]=i})}

    replacePic   = function (a, b)  { a.parentNode.replaceChild(a,  b )}
    replaceFirstWithSecond = function (){  a = document.getElementsByTagName('img')[0];  b = document.getElementsByTagName('img')[1];
        switchPics(a,b)}  //document.location.href
    pngLoaded = function(png, fxn){
        return setPNGSource(      imLoaded(im(),fxn) ,        png)}
    plopPng = function(nam, png){w[nam]=pngLoaded(png); }
    PNG = function(img){plopPng(img,img)}




    Stg = function(can) {return new createjs.Stage(can)}
    Ctx = function(can){return can.getContext('2d');}
    jCan = function(canId){return $('#' + canId)}
    Can = function(canId){return CanJ(canId)[0]}
    Can2 = function(can) {return document.getElementById(can)}
    cCanC = function(clsNm){if (cls) {return $("canvas ." + clsNm)} else  { return $('canvas')}}
    xCan = function(canId){return Ctx(Can(canId))}
    sCan = function(canId){return Stg(Can(canId))}


    CAN=function(canId){
        canId = canId || 'can';
        c  =  {};  can = c.c = Can(canId);
        c.j = jCan(canId);
        c.x = xCan(canId);

        stg = c.s =  sCan(canId);
        c.w = c.c.width;    c.h = c.c.height;
        c.col = function(col){this.jq.css('backgroundColor', col)}
        c.u = c.c.toDataURL;
        window[canId] = c;
        return c}



    jq = function(fn){ $(function(){fn();}); }
    def = function(fn){l(fn.toString());}


    Con =  function(){return new createjs.Container}
    tkr = T = Ticker = createjs.Ticker;
    tk = tickStage = function(stage){stage = stage || stg; Ticker.addEventListener("tick", stage); return stage}

    Lq = function(){return new createjs.LoadQueue(true)}
    makeBlock = function (blockStr){
        readyBlock = "manReady = function(){l('READY');" + blockStr + ";}";
        l(readyBlock); return readyBlock;}
    mfReady = function(man, block){ eval(block); man.addEventListener("complete", manReady);}
    Ready = function(fn, manifest){ $(function(){
        manifest = manifest || mf;
        mf =  Lq();
        mf.addEventListener(fn);
        mf.loadManifest(manifest);
    })
    }
    READY = function(blockStr, manifest){

        $(function(){
            manifest = manifest || mf;
            man =  Lq();
            mfReady(man, makeBlock(blockStr));
            man.loadManifest(manifest);
        })

    }
    MAN = function(manifest){
        manifest = manifest || mf;
        mf =  Lq();
        mf.loadManifest(manifest);
        return mf;
    }



    INIT = function(){CAN(); MAN(); tk(stg) }

    Bm =   function(im){bm = new createjs.Bitmap(im); return bm}
    BmS =  function (src) {   Im(function(e){Bm( e.target )}).src = src }
    BmM = function(imStr, manLoader){
        manLoader = manLoader || man;
        window[imStr] = bm = Bm(manLoader.getResult(imStr));
        return bm;}
    add = function(bm,stage){
        stage = stage || stg;
        stage.addChild(bm); stage.update(); return bm  }
    plop = function (im, x, y) {  // gotta fix plop! if (!x) {return ploop(image)}// if (!y) {return ploop(image, x)}}             // works great

        bm.x = x || 0; bm.y = y  || 0;
        add(bm);
        return bm;}

    xy = function(bm, x, y){ bm.x = x; bm.y = y; }
    width = function (bm){ return bm.getBounds().width  * bm.scaleX   }
    height = function (bm){ return bm.getBounds().height  * bm.scaleY   }
    halfWidth =  function(bm){return width(bm)/2 }
    halfHeight =  function(bm){return height(bm)/2 }
    xCenter = function(bm){ return  halfWidth(bm) + bm.x  }
    yCenter = function(bm){ return  halfHeight(bm) + bm.y  }
    centerAt = function(bm, x,y){bm.x = x - halfWidth(bm);bm.y = y - halfHeight(bm)}
    center = function(bm, stg) {var c= stg.canvas; var x = c.width/2; var y = c.height/2;  centerAt(bm,x,y) ; return bm}






/////








    getDataURL=function() {
        canvas = $('#myCanvas'); ctx = canvas.get(0).getContext('2d');
        d(ctx); ctx.fillRect(10,10,10,10);
        dataURL=canvas.get(0).toDataURL();
        canvas.click(function(){            alert(dataURL);  })}

    ctxToPng=function(ctx, nam){
        ctx.canvas.toBlob(function(blob)  {
            saveAs(blob, nam + ".png")    })}

    ctxToImage=function(c){
        var i = new Image();  i.src = c.canvas.toDataURL("image/png");
        return i;}

    pingy=function(ctx){
        ctx.canvas.toBlob(function(blob){       saveAs(blob, nam +".png")           })}

    CANVAS = function(dimm, coll, namm){
        var dim = dimm * 100;
        var nam = namm || coll || 'ctx';  var col = coll || 'yellow';
        var  canvasHtml = "<canvas id= " + nam + " width = " + dim + " height = " + dim + " style ='background-color: " + col + "' class='canvas'></canvas>" ;
        j = $(canvasHtml);
        $("body").append(j);  window[nam] =  miniCtx(j[0].getContext('2d')); return  window[nam]}



    CLR = clearCanvas = function(ctx){ctx.clearRect(0, 0, ctx.w, ctx.h)}
    reset = resetCanvas = function(c){c.canvas.width = c.canvas.width}
    changeData = function(d, str){var f = new Function("v","k","l","l[k]=" + str);ea(d.data, function(v,k,l){f(v,k,l);})}
    changeData2 = function (d, str){var s = "l[k]=" + str; $m(d.data, s) }
    gD = getData = function(c){ return c.getImageData(0,0, c.w, c.h) }
    pD = putData = function (data, c) {c.putImageData(data, 0, 0)}
    gcp = getChangePut = function(c1, str, c2){var d = gD(c1);cD(d, str);pD(d,c2);}
    DD = copyPasteData = getPutData = function (c,d){pD(gD(c),d)}
    dit = function (d, str){  var s = "l[k]=" + str; $m(d.data, s)   }
    cD = function(d, str){    var f = new Function("v","k","l","l[k]=" + str)
        _e(d.data, function(v,k,l){f(v,k,l) })}


    setStyles = function (C, fillStyle, strokeStyle, lineWidth) {C.strokeStyle = strokeStyle;C.fillStyle = fillStyle;C.lineWidth = lineWidth;}
    circ = function(ctx,x,y,radius){ctx.beginPath()

        ctx.arc(x, y, radius, 0, 2 * Math.PI, false)

        ctx.fill()
        ctx.stroke()}


    TenArr = function(){return [1,2,3,4,5,6,7,8,9,10]}
    rad = function (deg) {
        var rads = deg * (Math.PI / 180) }
    return rads}



// getting img/canvas/ctx


//getCtx = function(ctx) {var can =  document.getElementsByClassName(ctx)[0];return can.getContext('2d'); }
//CTX=function(ctxName){window[ctxName]=miniCtx(getCtx(ctxName))}




//draw300 = function(ctx, pic){ctx.drawImage(pic, 0,0,300,300,0,0,300,300  )}




//imgOnCv = function(img, ctx){ctx.drawImage(img, sx,sy,sw,sh,dx,dy,dw,dh)} // Draw 1






// canvasClick = function(ctx, fxn){//works// ctx.canvas.onclick = function(e){var X = e.clientX, Y = e.clientY; var left = ctx.canvas.offsetLeft; var top = ctx.canvas.offsetTop;  var x = X - left; var y = Y - top; fxn(e, x, y, X, Y);} }





//clearVertices = function(ctx,x,y){VX=[]; resetCanvas(ctx)}




//genPath = function(ctx){ var start = VX.shift(); ctx.moveTo(start.x, start.y); ea(VX, function(vertex, index, list){ctx.lineTo(vertex.x,vertex.y)}); c.closePath();}
//makeCut = function(ctx){ctx.save(); clearCanvas(ctx); genPath(ctx);  ctx.clip(); dO(me,c)};// c.restore();} //G = function() {dat= getData(c) };P = function() {putData(dat,c) }

//getCut = function(ctx){ l('getCut');  var copy = gD(ctx); CLR(ctx); var start = VX.shift() ;  ctx.moveTo(start.x, start.y);  _.each(VX, function(vx, index, list){ctx.lineTo(vx.x, vx.y)});  ctx.closePath();  ctx.clip(); pD(copy, ctx)}

//pathToSrc= function(path){return "http://localhost:4000/" + path}        // *

//imgSrc = function(img, src){img.src = src}   //setSRC = function(src,img){ if (src) { if (img){SRC(img,src)} else {SRC()}   }}

//getCtxOld=function(id){return $('#' + id).get(0).getContext('2d')}

//getCtxMini=function(name,id){w[name]=miniCtx(getCtx(id))}

//CTX2=function(id){window[id]=miniCtx(getCtx(id))}

//canvasClick(ctx, function(e,x,y){dVX(c, x, y); VX.push( {x:x,y:y})})}
//canvasClick(clr, function(e,x,y){reset(c);VX=[]})
//canvasClick(cut, function(){clr(c); getCut(c);})                       // and then: "t()"    ??? wtf



//dI = getData(c);da=dI.data;
// s1 = stamp(chicks,c);s2 = stamp(chicks,cc);
// t = function(){s1(0,0)}; tt = function(){ c.drawImage(chicks,0,0)}; ttt = function(){ cc.drawImage(chicks,20,20)};



// 1 make circles on canvas  2 make them in response to mouse click         /
// 3 store them in an array     4 gen path from array  5 use outside of path as clipping region
// 6 apply transparency to clipping region, 7 get imageData of new canvas  8 save it as a cutty!
//make clipping region from a circle?a

// my2y = CUT(My)(0,0)(My.w, My.h)(blue)(My.w,My.h)// onY = cutY = function(what){what(img,yellow, 10,10)}  // onB = cutB = function(what){what(img,blue, 10,10)}
//ii.src = "http://localhost:4000/" + imagePath;
//var can = document.getElementById('canvas'); canvas = $('#can'); can = canvas.get(0); ctx = can.getContext('2d');
////////////////////
// f = function(def){return new Function(def)}
// bigger:f(img,"ctx.scale(1.3,1.3);  ctx.drawImage(I, 0, 0, img.width, img.height)")
// can.width = img.width;   can.height = img.height;
//src = '/0cf14fee2317209e455ed59feb89a8c8.jpg'
//$('#invert').click(   invert   ); $('#grayscale').click(
//function flipY () {ctx.translate(img.width-1, img.height-1);    ctx.rotate(Math.PI);    ctx.drawImage(img, 0, 0, img.width, img.height);}
/*
 / This is the canvas where you want to draw
 var canvas = document.getElementById('your-canvas');
 var ctx = canvas.getContext('2d');
 // I'll use a skyblue background that covers everything
 // Just to demonstrate - ctx.fillStyle = "skyblue"; ctx.fillRect(0, 0, canvas.width, canvas.height);
 // Create a canvas that we will use as a mask
 var maskCanvas = document.createElement('canvas');
 // Ensure same dimensions - maskCanvas.width = canvas.width; - maskCanvas.height = canvas.height;
 var maskCtx = maskCanvas.getContext('2d');
 // This color is the one of the filled shape
 maskCtx.fillStyle = "black";
 // Fill the mask - maskCtx.fillRect(0, 0, maskCanvas.width, maskCanvas.height);
 // Set xor operation - maskCtx.globalCompositeOperation = 'xor';
 // Draw the shape you want to take out - maskCtx.arc(30, 30, 10, 0, 2 * Math.PI);  maskCtx.fill();
 // Draw mask on the image, and done !  - ctx.drawImage(maskCanvas, 0, 0);​*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////



l('easel');
SRC=function(s){if(s.toDataURL){s=s.toDataURL(); l('dataURL');}return s} // turns returns src-str from both src-str and canvas el (via dataToURL)
I=function(S,R){var i=new Image();
    i.s=function(s){if(!s){return this.src} else {this.src=SRC(s); return this}}; i.sp=function(p){this.s('/png/'+p+'.png');return this};
    i.r=function(f){this.addEventListener('load',f);return this}; i.r(function(e){this.w=e.target.width;this.h=e.target.height});
    if(S){if(R){i.r(R);i.s(S)} else{S=SRC(S);l(S); if(typeof S=='string'){i.src=S} else{i.r(S)}}} return i}
B=function(i,onB,bd){
    l('received i'); var B=function(i,bd){var b=new createjs.Bitmap(i);l('b(i)=');d(b);
        bd=bd||'BM'; W[bd]=b; l('i -> b(i) = d(W[' + bd + ']) ='); return b}
    if(!onB){l('returning b'); return B(i);}
    else {l('recieved sr'); I(i,function(e){onB(B(e.target, bd))})}}// works: !!  Bm('/png/guy.png', function(b){bg.s.a(b); bg.s.u();})
gC=genCan=function(d,w,h,r,l){d=d||'CV';w=w||960;h=h||450;r=r||'blue';var c,iS,rS,lS,S;//var q = $(str);  var can = q[0];
    iS=" id='"+d+"'"; if(!l){lS=''}else{lS=" class='"+l+"' "};if(!r){rS=''} else{rS="style='background-color:"+r+"' "};
    S=("<canvas "+iS+lS+rS+"  height="+h+" width="+w+"></canvas>");
    c=$(S)[0]; W[d]=c; return c}
qId=function(cid){return $('#' + cid)};
mB=MugBox=function(z,r,d){r=r||'pink'; d=d||'MUG'; z=zToD(z||'medium');  return gC(d,z,z,r)}
cI = canId=function(d){d=d||'CANNY';var c= qId(d)[0]; W[d]=c; return c}

C=sC=SUPERCAN=function(canvasEl){var c={};                       // (accepts/requires any canvas element)
    c.c=canvasEl;c.e=c.c.outerHTML;c.q=$(c.c);c.q.s=c.q.css;c.x=c.c.getContext('2d');c.x.d=c.x.drawImage;
    c.p=function(){$("body").append(this.q);return this};c.u=function(){return this.c.toDataURL()};c.bg=function(cl){this.q.css('backgroundColor', cl)};
    c.w=function(w){var c=this;if(w){c.c.width = w};return c.c.width};c.h=function(h){var c=this;if(h){c.c.height = w};return c.c.height};
    c.bo=function(S,C,Y){var c=this;if(S==undefined){S=10}; S=" "+S+"px "; Y=Y||"solid";Y=" "+Y+" "; C=C||"blue ";C=" "+C+" "; var str=S+Y+C; l(str); c.q.s('border', str)};
    c.r =c.solid=function(n1,n2,n3,n4){if(!n2){style=n1;} else{style="rgba("+n1+","+n2+","+n3+","+n4+")"}; l(style);c.x.save();c.x.fillStyle=style; this.x.fillRect(0,0,this.w(),this.h()); c.x.restore()};
    c.s=new createjs.Stage(c.c);c.s.a=c.s.addChild;c.s.u=c.s.update;c.tk = function(){createjs.Ticker.addEventListener("tick", this.s)};
    c.kt = function(){createjs.Ticker.removeEventListener("tick", this.s)};createjs.Ticker.setFPS(1); //c.tk();//stg.autoClear = false;
    c.d=function(sr,x,y){var c=this;  x=x||0;y=y||0;sr=SRC(sr); // if(src.u != undefined){src=src.u()};
        if(typeof src != 'string'){c.x.d(sr,x,y); return c} else{l('@');I(sr,function(e){c.x.d(e.target,x,y)})}}
    c.fit=function(sr){l('c.fit'); var c=this;
        sr=SRC(sr);
        if(typeof sr != 'string'){
            l('-@'); c.x.d(sr,0,0,c.w(),c.h())}
        else{l('@'); I(sr, function(e){c.x.d(e.target,0,0,c.w(),c.h())})}}
    c.a=function(ch){var ch=SRC(ch); c=this; var add=function(bm){c.s.addChild(bm); c.s.update(); return bm;}
        if(typeof ch !="string"){return add(ch)} else {B(ch,add)}}
    c.bm=function(i,z,onB,bd){var m,x,w,h,c=this;
        z=z||'medium';bd=bd||'bitmap';
        onB=onB||function(b,c){c.s.a(b);c.s.u()};
        m=superMugBox(z,'pink','temp');
        I(i,function(e){ m.fit(e.target); I(m,function(e){var b=Bm(e.target); onB(b,c);W[bd]=b})})};  // x=mugCan.getContext('2d');w=m.width; h=m.height; x.drawImage(e.target,0,0,w,h);// add: function(b){bg.s.a(b); bg.s.u()}
    return c}


sci=superCanId=function(d){l('sci');W[d]=sC(cI(d));return W[d]}

sgc=superGenCan=function(d,w,h,r,r){l('sgc');return sC(gC.apply(null, arguments))}

sM=smb=superMugBox=function(z,r,d){l('sM');return sC(mB(z,r,d))}

the=$$$=function(e){return e.target}
Spr=onBmSz=function($,onB,z){I($,function(i){var w,h,x,u,m=sM(z); m.fit(the(i)); I(m.c,function(i){onB(B(the(i)))})})}
SPR = function(C, $, z){Spr($,function(b){C.a(b)},z)}










c.g={};  c.g=createjs.Graphics;
c.shape = function(gx){gx = new createjs.Shape(gx);  return gx;}
c.g.b=function(fn){this.c.toBlob(fn);}  //  c.sv = function(nm){ this.bb(  function(b){ saveAs(bl, nm +".png")  }) }
c.g.p=function(c, nm){this.bb(function(b){saveAs(b, nm + ".png")})}
c.g.urlToIm = function(c){return new Im(this.u("image/png"))}






// c.l=c.q.offset().left; c.mx =function(x){return parseInt(x - c.l)}; c.t=c.q.offset().top; c.my = function(y){return parseInt(y - c.t + pageYOffset)}
// c.x.gD=function(){var x= this;return x.getImageData(x.canvas.width, x.canvas.height)};
// c.x.pD=function(d){var x=this; x.putImageData(d, 0, 0)};
// c.x.DD=c.x.copyPasteData=c.x.getPutData=function(c,d){var x=this; x.pD(x.gD(c),d)}; //c.x.gcp = x.getChangePut = function(x, str){var d = x.gD(); d = cD(d, str); this.pD(d);}
// c.x.t=c.x.translate; c.x.r=c.x.rotate; c.x.s=c.x.scale; c.x.cID=c.x.createImageData; c.x.gID=c.x.getImageData; c.x.pId=c.x.putImageData;




// ,0,0,m.w(),m.h());
// (typical of a pattern)














X=function(can){return can.getContext('2d')};
Stg=function(can) {return new createjs.Stage(can)};
clr=function(c){c.canvas.width = c.canvas.width};
CLR=function(c){c.x.clearRect(0,0,c.w(),c.h())};// rst=function(c){c.w(c.w())};


//testMug = function(){stg = mCan.s;  src='/png/berlin.jpg';  onMug = function(mug,stg){alert('onMug,baby!');   l('mug: '); d(mug);   stg.addChild(mug)}; l(src); def(onMug); d(stg);l('about to call: Mug(src, onMug, stg)');  Mug(src, onMug, stg)}
//SrcToStageMug = function(src, stg){srcToMug(src, function(m){stg.addChild(m)})}
//bmTo=function(b,x,y){b.x=x||0;bm.y=y||0;return b}
//BM=function(s, onB, bd){ else {l('@');if(s.u != undefined){s=s.u()};                       // c -> dURL -> i(->bm (+onB), on load) I(function(e){var b=bm(e.target); if(onB){onB(b)};if(bd){W[bd]=b}})(s)}}


add=function(b,c){c.s.a(b);   c.s.u();  return b}
Add = function(src, stg){Mug(src, function(m,s){s.addChild(m); TRANS(m)}, stg )}
Pop = function(stg){return function(src){Mug(src,       function(m,s){s.a(m);m.scaleX=.5},     stg)}}
mugFns = {Tiny: function(m,s){s.a(m); m.scaleX=.2;m.scaleY=.2; TRANS(m)} }

Lq = function(){return new createjs.LoadQueue(true)}
BmM = function(imStr, manLoader){manLoader = manLoader || man;  W[imStr]=bm=Bm(manLoader.getResult(imStr)); return bm};
plop = function (im, x, y) {add(BmM(im));    bm.x = x || 0; bm.y = y  || 0;    return bm;}// gotta fix plop! if (!x) {return ploop(image)}// if (!y) {return ploop(image, x)}}             // works great
T = createjs.Ticker;//tk = tickStage = function(stage){stage = stage || mCan.s; Ticker.addEventListener("tick", stage); return stage}
makeBlock = function (blockStr){readyBlock = "manReady = function(){l('READY');" + blockStr + ";}";l(readyBlock); return readyBlock;}
mfReady = function(man, block){ eval(block); man.addEventListener("complete", manReady);}
Ready = function(fn, manifest){ $(function(){ manifest = manifest || mf; mf =  Lq(); mf.addEventListener(fn);mf.loadManifest(manifest)})}
READY = function(blockStr, manifest){  $(function(){ manifest = manifest || mf;man =  Lq();mfReady(man, makeBlock(blockStr)); man.loadManifest(manifest)})}
MAN = function(manifest){manifest = manifest || mf; man =  Lq(); man.loadManifest(manifest); return man}
INIT = function(){CAN(); MAN(); tk(mCan.s);}
Con =  function(){return new createjs.Container}



snap = function(can, cb){can = can || mCan; cb = cb || function(){};  I.m(cb, can.u())}
Save = function(can){can = can || can; can.toBlob(function(blob){var formData = new FormData();
    var oReq = new XMLHttpRequest();formData.append("pic", blob); oReq.open("POST", "http://localhost:4000/upload"); oReq.send(formData)})}




//compare to Bm//should it be leveraging Bm??
// loads image i so that when it get src'ed, it makes a bm from itself and passes it to onB
// the bm fxnality is wrapped by the process...
// createjs.Ticker.addEventListener('tick', c.s);
//  c.addSrc = function(bid, src){var c = this;var bmRdy = function(b){c.addBm(b)}; c.BM(bid, bmRdy, src)}
// d(c);
// step 1: draw img AT 'standard' S  // when THAT one loads, make a Bitmap out of it// finally, pass the new Mug into onMug f
//var X = {}
//X.dit = function (d, str){ var s = "l[k]=" + str; $m(d.data, s);  }
//X.changeData = function(d, str){ var f = new Function("v","k","l","l[k]=" + str); ea(d.data, function(v,k,l){f(v,k,l);})};
//X.changeData2 = function (d, str){var s = "l[k]=" + str; $m(d.data, s);}
//X.cD = function(d, str){var f = new Function("v","k","l","l[k]=" + str);  ea(d.data, function(v,k,l){f(v,k,l) })}



--


    l('EASEL'); jq = function(fn){ $(function(){fn()})};  def = function(fn){l(fn.toString())};

t = temp = {};
t.e = {};



replacePic   = function (a, b)  { a.parentNode.replaceChild(a,  b )}
replaceFirstWithSecond = function (){  a = document.getElementsByTagName('img')[0];  b = document.getElementsByTagName('img')[1];
    switchPics(a,b)}  //document.location.href



// images
miniIm = wh = function(im){ im.w = im.width;im.h = im.height;
    im.p = function(png){this.src = '/png/' + png + '.png'; return this};
    return im;}


Im = function (cb, src) {t.i = new Image();
    t.i.l = function(cb){this.addEventListener('load', cb); return this}
    t.i.l( function(evt){t.e.e=evt;  t.e.t= t.e.e.target;  t.e.c= t.e.e.currentTarget;  t.e.o= t.e.e.originalTarget; d(t.e)} )
    t.i = miniIm(t.i);
    if (cb){t.i.l(cb)};
    t.i.s = function(src){if (src){this.src = src;}; l(this.src); return this}
    if (src){t.i.s(src);}
    return t.i}


IM = function (cb, src) {
    var i = new Image();


    i.l = i.loaded = function(cb){
        this.addEventListener('load', cb); return this
    }


    // i.l(function(evt){ i.e=evt;  t.e.t= t.e.e.target;  t.e.c= t.e.e.currentTarget;  t.e.o= t.e.e.originalTarget;   d(i.e)} )
    i = miniIm(i);
    if (cb){i.l(cb)};
    i.s = function(src){if (src){this.src = src;}; l(this.src); return this}
    if (src){i.s(src);}
    return i}


// pngLoaded = function(png, fxn){return setPNGSource(      imLoaded(im(),fxn) ,        png)}
//plopPng = function(nam, png){w[nam]=pngLoaded(png); } //PNG = function(img){plopPng(img,img)}





//canvas
miniCtx=function(C){
    C.c=C.canvas;    C.w=C.c.width; C.h=C.c.height;
    C.l=$(C.c).offset().left;  C.t = $(C.c).offset().top;
    C.mx=function(x){return parseInt(x - this.l)};C.my = function(y){return parseInt(y - this.t + pageYOffset)}
    C.T=C.translate;
    C.R=C.rotate;
    C.S=C.scale;
    C.D=C.drawImage;
    C.cid=C.createImageData;
    C.gid=C.getImageData;
    C.p =   C.pid=C.putImageData;   return C}
Stg = function(can) {return new createjs.Stage(can)}
jCan = function(canId){return $('#' + canId)}
Can = function(canId){return (jCan(canId)[0])}
Can2 = function(can) {return document.getElementById(can)}
cCanC = function(clsNm){if (cls) {return $("canvas ." + clsNm)} else  { return $('canvas')}}
Ctx = function(can){return can.getContext('2d');}
xCan = function(canId){return Ctx(Can(canId))}
sCan = function(canId){return Stg(Can(canId))}
function CAN(canId){l('CAN');canId = canId || 'can'; l(canId);c  =  {};
    c.q = jCan(canId);
    can = c.c = Can(canId);
    ctx = c.x = miniCtx(xCan(canId));  //d(c.x);
    stg = c.s =  sCan(canId); //stg.autoClear = false;
    c.w = function(w){if(w){c.c.width = w;}; return c.c.width;}
    c.h = function(h){if(h){c.c.height = w;}; return c.c.height;}
    c.g = new createjs.Graphics();
    c.shape = function(g){gx = new createjs.Shape(g);  return gx;}
    //c.c.width;    c.h = c.c.height;
    c.b = function(size, color, style){

        if(size==undefined) {size = 10;}
        size = " " + size + "px ";
        style = style || "solid";

        style = " " + style + " ";

        color = color || "pink "; color = " "  + color + " ";
        var str = size + style + color; l(str);

        c.q.css('border', str);}

    c.l = c.col = function(col){this.jq.css('backgroundColor', col)}
    c.u = c.c.toDataURL;

    c.solid = function(n1,n2,n3,n4){ if (!n2) {style = n1;} else {


        style = "rgba(" + n1 + "," + n2 + "," + n3 + "," + n4+ ")" ;};

        l(style);


        c.x.save(); c.x.fillStyle = style; this.x.fillRect(0,0,this.w(),this.h());c.x.restore();

    }



    return c}







Shp = function(){s = new createjs.Shape(); s.g = s.graphics;  g = s.g;  return g;  }

blue = function(){

    var shape =  Shp();

    shape.f('blue').drawCircle(100,100,50);  return shape;
}




Con =  function(){return new createjs.Container}
tkr = T = Ticker = createjs.Ticker;

tk = tickStage = function(stage){stage = stage || stg; Ticker.addEventListener("tick", stage); return stage}
kt = function(stage){
    stage = stage || stg;
    Ticker.removeEventListener("tick", stg)}


Lq = function(){return new createjs.LoadQueue(true)}
makeBlock = function (blockStr){
    readyBlock = "manReady = function(){l('READY');" + blockStr + ";}";
    l(readyBlock); return readyBlock;}
mfReady = function(man, block){ eval(block); man.addEventListener("complete", manReady);}
Ready = function(fn, manifest){ $(function(){
    manifest = manifest || mf;
    mf =  Lq();
    mf.addEventListener(fn);
    mf.loadManifest(manifest);
})
}
READY = function(blockStr, manifest){

    $(function(){
        manifest = manifest || mf;
        man =  Lq();
        mfReady(man, makeBlock(blockStr));
        man.loadManifest(manifest);
    })

}
MAN = function(manifest){
    manifest = manifest || mf;
    man =  Lq();
    man.loadManifest(manifest);
    return man;
}
INIT = function(){CAN(); MAN(); tk(stg);}

Bm =   function(im){bm = new createjs.Bitmap(im); return bm}


BmS =  function (src, nam) {
    Im(function(e){var bm = Bm( e.target );  if (nam) {window[nam] = bm}; l('got it!')}).src = src
}


BmM = function(imStr, manLoader){
    manLoader = manLoader || man;
    window[imStr] = bm = Bm(manLoader.getResult(imStr));
    return bm;}


add = function(bm, stage){
    stage = stage || stg;
    stage.addChild(bm); stage.update(); return bm ;}

plop = function (im, x, y) {  // gotta fix plop! if (!x) {return ploop(image)}// if (!y) {return ploop(image, x)}}             // works great
    add(BmM(im));
    bm.x = x || 0;
    bm.y = y  || 0;
    return bm;}


moveBm = function (x, y) {  // gotta fix plop! if (!x) {return ploop(image)}// if (!y) {return ploop(image, x)}}             // works great

    bm.x = x || 0;
    bm.y = y  || 0;
    return bm;
    stg.update();}


xy = function(bm, x, y){ bm.x = x; bm.y = y; }


width = function (bm){ return bm.getBounds().width  * bm.scaleX   }


height = function (bm){ return bm.getBounds().height  * bm.scaleY   }
halfWidth =  function(bm){return width(bm)/2 }
halfHeight =  function(bm){return height(bm)/2 }
xCenter = function(bm){ return  halfWidth(bm) + bm.x  }
yCenter = function(bm){ return  halfHeight(bm) + bm.y  }
centerAt = function(bm, x,y){bm.x = x - halfWidth(bm);bm.y = y - halfHeight(bm)}
center = function(bm, stage) {
    stage = stage || stg;

    var c = stage.canvas;

    var x = c.width/2;
    var y = c.height/2;
    centerAt(bm,x,y) ; return bm}



function pathToSrc(p){return "http://localhost:4000/"+p}


drawIm = function(c){$(i).load(function(){this.simpleD(i)})}


/////








getDataURL=function() {
    canvas = $('#myCanvas'); ctx = canvas.get(0).getContext('2d');
    d(ctx); ctx.fillRect(10,10,10,10);
    dataURL=canvas.get(0).toDataURL();
    canvas.click(function(){            alert(dataURL);  })}

ctxToPng=function(ctx, nam){
    ctx.canvas.toBlob(function(blob)  {
        saveAs(blob, nam + ".png")    })}

ctxToImage=function(c){
    var i = new Image();  i.src = c.canvas.toDataURL("image/png");
    return i;}

pingy=function(ctx){
    ctx.canvas.toBlob(function(blob){       saveAs(blob, nam +".png")           })}


CANVAS = function(dimm, coll, namm){
    var dim = dimm * 100;
    var nam = namm || coll || 'ctx';  var col = coll || 'yellow';
    var  canvasHtml = "<canvas id= " + nam + " width = " + dim + " height = " + dim + " style ='background-color: " + col + "' class='canvas'></canvas>" ;
    j = $(canvasHtml);
    $("body").append(j);  window[nam] =  miniCtx(j[0].getContext('2d')); return  window[nam]}






////
CLR = clearCanvas = function(ctx){ctx.clearRect(0, 0, ctx.w, ctx.h)}
reset = resetCanvas = function(c){c.canvas.width = c.canvas.width}
changeData = function(d, str){var f = new Function("v","k","l","l[k]=" + str);ea(d.data, function(v,k,l){f(v,k,l);})}
changeData2 = function (d, str){var s = "l[k]=" + str; $m(d.data, s);}
gD = getData = function(c){ return c.getImageData(0,0, c.w, c.h) }
pD = putData = function (data, c) {c.putImageData(data, 0, 0)};
gcp = getChangePut = function(c1, str, c2){var d = gD(c1);cD(d, str);pD(d,c2);}
DD = copyPasteData = getPutData = function (c,d){pD(gD(c),d)}
dit = function (d, str){  var s = "l[k]=" + str; $m(d.data, s);  }
cD = function(d, str){    var f = new Function("v","k","l","l[k]=" + str);  ea(d.data, function(v,k,l){f(v,k,l) })}


setStyles = function (C, fillStyle, strokeStyle, lineWidth) {C.strokeStyle = strokeStyle;C.fillStyle = fillStyle;C.lineWidth = lineWidth;}
circ = function(ctx,x,y,radius){ctx.beginPath(); ctx.arc(x, y, radius, 0, 2 * Math.PI, false); ctx.fill(); ctx.stroke();}
TenArr = function(){return [1,2,3,4,5,6,7,8,9,10]}
rad = function (deg) {var rads = deg * (Math.PI / 180);   return rads}

///


























// getting img/canvas/ctx


//getCtx = function(ctx) {var can =  document.getElementsByClassName(ctx)[0];return can.getContext('2d'); }
//CTX=function(ctxName){window[ctxName]=miniCtx(getCtx(ctxName))}




//draw300 = function(ctx, pic){ctx.drawImage(pic, 0,0,300,300,0,0,300,300  )}

















//genPath = function(ctx){ var start = VX.shift(); ctx.moveTo(start.x, start.y); ea(VX, function(vertex, index, list){ctx.lineTo(vertex.x,vertex.y)}); c.closePath();}
//makeCut = function(ctx){ctx.save(); clearCanvas(ctx); genPath(ctx);  ctx.clip(); dO(me,c)};// c.restore();} //G = function() {dat= getData(c) };P = function() {putData(dat,c) }

//getCut = function(ctx){ l('getCut');  var copy = gD(ctx); CLR(ctx); var start = VX.shift() ;  ctx.moveTo(start.x, start.y);  _.each(VX, function(vx, index, list){ctx.lineTo(vx.x, vx.y)});  ctx.closePath();  ctx.clip(); pD(copy, ctx)}

//pathToSrc= function(path){return "http://localhost:4000/" + path}        // *

//imgSrc = function(img, src){img.src = src}   //setSRC = function(src,img){ if (src) { if (img){SRC(img,src)} else {SRC()}   }}

//getCtxOld=function(id){return $('#' + id).get(0).getContext('2d')}

//getCtxMini=function(name,id){w[name]=miniCtx(getCtx(id))}

//CTX2=function(id){window[id]=miniCtx(getCtx(id))}

//canvasClick(ctx, function(e,x,y){dVX(c, x, y); VX.push( {x:x,y:y})})}
//canvasClick(clr, function(e,x,y){reset(c);VX=[]})
//canvasClick(cut, function(){clr(c); getCut(c);})                       // and then: "t()"    ??? wtf



//dI = getData(c);da=dI.data;
// s1 = stamp(chicks,c);s2 = stamp(chicks,cc);
// t = function(){s1(0,0)}; tt = function(){ c.drawImage(chicks,0,0)}; ttt = function(){ cc.drawImage(chicks,20,20)};



// 1 make circles on canvas  2 make them in response to mouse click         /
// 3 store them in an array     4 gen path from array  5 use outside of path as clipping region
// 6 apply transparency to clipping region, 7 get imageData of new canvas  8 save it as a cutty!
//make clipping region from a circle?a

// my2y = CUT(My)(0,0)(My.w, My.h)(blue)(My.w,My.h)// onY = cutY = function(what){what(img,yellow, 10,10)}  // onB = cutB = function(what){what(img,blue, 10,10)}
//ii.src = "http://localhost:4000/" + imagePath;
//var can = document.getElementById('canvas'); canvas = $('#can'); can = canvas.get(0); ctx = can.getContext('2d');
////////////////////
// f = function(def){return new Function(def)}
// bigger:f(img,"ctx.scale(1.3,1.3);  ctx.drawImage(I, 0, 0, img.width, img.height)")
// can.width = img.width;   can.height = img.height;
//src = '/0cf14fee2317209e455ed59feb89a8c8.jpg'
//$('#invert').click(   invert   ); $('#grayscale').click(
//function flipY () {ctx.translate(img.width-1, img.height-1);    ctx.rotate(Math.PI);    ctx.drawImage(img, 0, 0, img.width, img.height);}
/*
 / This is the canvas where you want to draw
 var canvas = document.getElementById('your-canvas');
 var ctx = canvas.getContext('2d');
 // I'll use a skyblue background that covers everything
 // Just to demonstrate - ctx.fillStyle = "skyblue"; ctx.fillRect(0, 0, canvas.width, canvas.height);
 // Create a canvas that we will use as a mask
 var maskCanvas = document.createElement('canvas');
 // Ensure same dimensions - maskCanvas.width = canvas.width; - maskCanvas.height = canvas.height;
 var maskCtx = maskCanvas.getContext('2d');
 // This color is the one of the filled shape
 maskCtx.fillStyle = "black";
 // Fill the mask - maskCtx.fillRect(0, 0, maskCanvas.width, maskCanvas.height);
 // Set xor operation - maskCtx.globalCompositeOperation = 'xor';
 // Draw the shape you want to take out - maskCtx.arc(30, 30, 10, 0, 2 * Math.PI);  maskCtx.fill();
 // Draw mask on the image, and done !  - ctx.drawImage(maskCanvas, 0, 0);​*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////




css2=function f(q,b,c){

    var s1=function(q,b,c){var k=oO('S',b)
            if(U(c)){return q.css(k)}
            q.css(k,oO(b,c,'R'))
            return q},

        s2=function(q,ob){_e(ob,function(k,v){

            s1(q,v,k)})
            return q}

    if(O(b)){return s2(q,b)} return s1(q,b,c)}
font=function rc(a){var f,w,s,z,S;
    each(parse(a), function(p){
        if(oF(p)){f=oF(p)}
        if(oFw(p)){w=oFw(p)}
        if(oFs(p)){s=oFs(p)}
        if(V(p[0])){z=p.split('/');S=z[0]+'px';
            if(z[1]){S+='/'+z[0]+'px'}}})
    return $l([(s||oFs('n')),(w||oFw('n')),
        (z||100)(f||of('f'))].join(' ') )}

gg=function f(a,b,c,d){a=ji(a)

    if(O(b)){
        _e(b,function(v,k){
            $i(c,k,v,a)});
        return a}


    if(U(c)){return f(a,{},b)}

    if(!U(d)){$i(a,b,c,d)}

    return a[oO(oO(b),c)]

}




gG=function(a){
    return function(b){
        return function(c,d){
            return gg(b,a,c,d)}}}


o.pop=function(a,b,c,d){
    if(U(a)){o.x(0,0,o.w(),o.h());return o}
    if(N(a)){o.x(a,b||a,c||200,d||c)}
    if(!b){return t[xPops[a]]};
    t[xPops[a]]=b;
    return o}



oldTr=x.translate;oldR=x.rotate;oldS=x.scale;oldaf=function(a,b,c,d){      //transformations
    if(a=='t'){x[tl](a,b,c,d)};
    if(a=='r'){x[rt](a,b,c,d)};
    if(a=='s'){x[sc](a,b,c,d)};
    if(a=='k'){x[sk](a,b,c,d)};
    return o}



DObjectM={u:"getCacheDataURL",
    cm:"getConcatenatedMatrix",
    m:"getMatrix",
    s:"getStage",
    tb:"getTransformedBounds",
    v:"isVisible",
    lg:"localToGlobal",
    ll:"localToLocal",
    gl:"globalToLocal"}
DObjectP={
    a:"alpha",
    c:"cacheCanvas",
    d:"suppressCrossDomainErrors",
    e:"mouseEnabled",
    f:"filters",
    h:"hitArea",
    i:"cacheID",
    kx:"skewX",
    ky:"skewY",
    m:"mask",
    n:"name",
    o:"compositeOperation",
    p:"parent",
    rx:"regX",
    ry:"regY",
    r:"rotation",
    sx:"scaleX",
    sy:"scaleY",
    t:"onTick",
    u:"cursor",
    v:"visible",
    w:"shadow"}

BooColor=['black','white','blue','green','yellow','red','orange','pink','purple']
math={p:2*Math.PI}
Url={u:"http://localhost:4000/upload"}
Vector={ipad:[960,450]}
BooAlert={b:'primary',g:'success',t:'info',o:'warning',r:'danger',l:'link'};
BooSize={b:'lg',s:'sm',t:'xs'}




o.bn=function(a,b,c,d){if(U(a)){return o.getBounds}
    o.setBounds(a,b,c,d);return o}
o.cache=function(){var g=arguments;
    if(U(a)){o.uncache()}
    else if(U(b)){o.updateCache(a)}
    else {o.cache.apply(stg,g)}
    return o}
o.X=function(a){o.updateContext(a);return o}
o.w=function(){return o.bn().width*o.scaleX};
o.h=function(){return o.bn().height*o.scaleY}
o.t=function(x,y){var v=$V(x,y);
    o.x=v.x;o.y=v.y;
    return o}
o.z=function(c){return o.c(o.w()/2,o.h()/2)}
o.c=function(x,y){if(!x){
    return $V(o.x+o.w()/2,o.y+o.h()/2)};
    o.t(x-o.w()/2, y-o.h()/2);
    return o}
Mouse={
    a3:"onclick",
    af:"ondblclick",
    aad:"onkeydown",
    ada:"onkeypress",
    aa:"onkeyup",
    az:"onmousedown",
    af4:"onmousemove",
    afd:"onmouseout",
    asfd:"onmouseover",
    asd:"onmouseup",
    aj:"onresize",
    ak:"onsubmit",
    a6:"onscroll",
    a4:"onselect",
    a7:"onblur",
    ad:"onchange",
    ads:"onfocus",
    as:"onload",
    adf:"onunload"}







y=function y(){var A= _.toArray(arguments);var a={}; a.y=cp(A.shift());a._=function(){var t=this,A=arguments,a=y(t.y);
    return a[_.first(A)].apply(a,_.rest(A)).y}
    a.a=function(a,b){var t=this;if(iN(t.y)&&!a){t.y=Math.abs(t.y)};if(iN(t.y)&&iF(a)){t.y=_.after(t.y,a)};
        if(iS(t.y)&&iN(a)){t.y=t.y.charAt(a)};if(iL(t.y)&&!a){t.y=_.toArray(t.y)};
        if(iL(t.y)&&iF(a)){t.y=_.every(t.y,a,b)};if(iF(t.y)&&iN(a)){t.y=_.after(a,t.y)};
        if(iF(t.y)&&!iN(a)){t.y=Function.apply.apply(t.y,arguments)};return t}
    a.b=function(a,b,c){var t=this;if(iO(t.y)&&iS(a)){t.y=_.bind.apply(t,arguments)}
        if(iO(t.y)&&iF(a)){t.y=_.bind(t,a,b)};if(iF(t.y)&&iN(a)){t.y=_.debounce(t.y,a,b,c)};
        if(iF(t.y)&&iO(a)){t.y=_.bind(t.y,a,b)};return t}
    a.c=function(a,b){var t=this;if(!a){return cp(t.y)}
        if(iA(t.y)&&iA(a)){t.y=t.y.concat.apply(t.y,arguments)};if(iL(t.y)&&iS(a)){t.y=_.invoke.apply(t.y,arguments)};
        if(iL(t.y)&&iF(a)){t.y=_.countBy(t.y,a,b)};if(iF(t.y)){t.y=_.compose.apply(t.y,arguments)};return t}
    a.d=function(a,b,c){var t=this;if(iN(t.y)){t.y= Math.floor(t.y)};if(iA(t.y)){t.y= _.difference.apply(t.y,arguments)};
        if(iF(t.y)&&!a){_.defer(t.y,a,b)};if(iF(t.y)&&a){_.delay(t.y,a,b,c)};return t}
    a.e=function(a,b,c){var t=this;if(iL(t.y)&&iF(a)){t.y=_.each(t.y,a,b)};if(iF(t.y)&&iL(a)){t.y=_.each(a,t.y,b)};return t}
    a.f=function(a,b){var t=this;
        if(iSA(t.y)&&!a){t.y=_.first(t.y)};if(iSA(t.y)&&iS(a)){t.y=_.first(t.y==a)};
        if(iSA(t.y)&&iNp(a)){t.y= _.first(t.y,a); if(iS(a));t.y=t.y.join('')};if(iSA(t.y)&&iNn(a)){t.y= _.initial(t.y,Math.abs(a))};
        if(iL(t.y)&&iF(a)){t.y= _.filter(t.y,a,b)};if(iL(t.y)&&iO(a)){t.y= _.where(t.y,a)};return t}
    a.F=function(a,b){var t=this;if(iA(t.y)&&!a){t.y=_.flatten(t.y)};return t}
    a.g=function(a,b){var t=this,g=function(t){return {c:_.compact(t),fl:_.flatten(t),f:_.first(t),l:_.last(t),i:_.initial(t),r:_.rest(t)}}
        if(iF(t)){t.y=_.groupBy(t,a,b)};if(!a){t.y=g(t.y)};return t}
    a.h=function(a,b,c){var t=this;if(iL(t)){t.y=_.contains(t,b)};return t}
    a.i=function(a,b,c){var t=this;//if(iU(a)){t.y=issy(t.y)}
        if(iS(t.y)&&iN(a)&&iU(b)){if(iNn(a)){a=t._('z')+a}t.y=t.y.charAt(a)}
        if(iA(t.y)&&iN(a)&&iU(b)){if(iNn(a)){a=t._('z')+a}t.y=t.y[a]}
        if(iA(t.y)&&iS(a)&&iU(b)){t.y=_.i(t.y,a)}
        if(iS(t.y)&&iS(a)&&iU(b)){t.y=t.y.i(a)}
        if(iSA(t.y)&&iN(a)&&iS(b)&&!c){t.y=(_.i(t.y,b)==a)}
        if(iSA(t.y)&&iN(a)&&iS(b)&&iN(c)){t.y=(_.i(t.y,b,c)==a)}
        if(iSA(t.y)&&iS(a)&&iN(b)&&iU(c)){if(b==0){t.y=_.lastIndexOf(t.y,a)}else if(iNn(b)){t.y=_.lastIndexOf(t.y,a,b*-1)}else{t.y=_.indexOf(t.y,a,b)}}
        if(iSy(a)){var z=y(b,'z'),i=t._('i',b,c),Z=(z+i).toString();if(a=='['){t.sl('f'+ Z)};if(a==')'){t.sl('!f'+ Z)};if(a=='('){t.sl('f'+i)};if(a==']'){t.sl('!f'+i)}}
        if(iL(t.y)&&iF(a)){t.y=_.indexBy(t.y,a,b)};return t}
    a.j=function(a){var t=this;if(iS(t.y)&&iA(a)){t.y=a.join(t.y)}
        if(iA(t.y)&&iS(a)){t.y=t.y.join(a)};return t}
    a.J=function(a){var t=this;if(iL(t.y)&&(!a||iF(a)||iA(a))){t.y=JSON.stringify(a)}
        if(iS(t.y)&&(!a||iF(a))){t.y=JSON.parse(a)};return t}
    a.I=function(a,b,c){var t=this;if(iA(t.y)){t.y= _.intersection.apply(t.y,arguments)};return t};
    a.l=function(a,b,c){var t=this;
        if(iSA(t.y)&&!a){t.y=_.last(t.y)};
        if(iSA(t.y)&&iS(a)){t.y=_.last(t.y==a)};
        if(iA(t.y)&&iPN(a)){t.y=_.last(t.y,a)};
        if(iA(t.y)&&iNN(a)){t.y=_.rest(t.y,Math.abs(a))}
        return t}
    a.L=function(a,b,c){var t=this;
        if(iSA(t.y)&&!a){t.y=t.y.length}
        if(iS(t.y)&&!a){t.y=t.y.toLowerCase()}
        if(iL(t.y)){t.y=_.lastIndexOf(t.y,a,b,c)}
        return t};
    a.m=function(a,b){var t=this;
        if(iS(t.y)&&iO(a)){t.y= t.y.match(a)}
        if(iL(t.y)&&!a){t.y= [_.min(t.y), _.max(t.y)]}
        if(iL(t.y)&&iF(a)){t.y=_.map(t.y,a,b)}
        if(iF(t.y)&&iL(a)){t.y=_.map.apply(t.y,arguments)}
        return t}
    a.M=function(a,b){var t=this;if(iF(t.y)&&iL(a)){t.y=_.memoize.apply(t.y,arguments)};return t}
    a.o=function(a,b,c){var t=this;if(iF(t.y)){t.y=_.once(t.y)};if(iA(t.y)){t.y=_.object.apply(t.y,arguments)};return t}
    a.p=function(a,b,c){var t=this;if(iL(t.y)&&iS(a)&&(!b)){t.y=_.pluck(t.y,a)};
        if(iA(t.y)&&!a){t.y.pop()};if(iA(t.y)&&a){t.y.push.apply(t.y,arguments)}
        if(iF(t.y)){t.y=_.partial.apply(t.y,arguments)};return t}
    a.q=function(a,b){var t=this;if(iA(t.y)&&!a||iB(a)){t.y= _.unique(t.y,a,b)};return t}
    a.r=function(a,b){var t=this;if(!a){t.y= t.y.reverse()};if(iF(a)){t.y= _.reduce(t.y,a,b)};if(iN(a)){t.y= _.rest(a,b)}
        if(iN(t.y)){t.y= Math.round(t.y)};if(iS(t.y)&&b){t.y= t.y.replace(a,b)};return t}
    a.R=function(a){if(!a){var t=this;return _.shuffle(t.y)};if(iN(a)){t.y= _.sample(t.y,a)};return t}
    a._s=function(a,b,c){var t=this; if(iA(t.y)){t.y=t.y.sort(a)};return t}
    a.s=function(a,b,c){var t=this;
        if(iA(t.y)&&!a){t.y= t.y.shift()}
        if(iS(t.y)){t.y.split(a)}
        if(iA(t.y)&&iF(a)){t.y= _.sortby(t.y,a,b)};
        if(iA(t.y)&&iN(a)){t.y= t.y.slice(a,b)};return t}
    a.sl=function(a,b){var t=this; t.y=sl(a, t.y);  return t}
    a.S=function(a,b){var t=this;if(!a){t.y= t.y.toString()};if(iS(t.y)&&a){t.y.search(a)};if(iA(t.y)&&iN(a)&&iN(b)){t.y= t.y.splice(a,b)};
        if(iL(t.y)&&a&&(!b||iF(b))){t.y= t.y.sortedIndex(a,b)};return t}// if(!a)){t.y= _.shuffle(t.y)};if(iN(a)){t.y= _.sample(t.y,a)}
    a.t=function(a,b){var t=this;if(iS(t.y)&&!a){t.y= t.y.trim()};if(iA(t.y)&&!a){t.y=_.compact(t.y)};
        if(iF(t.y)){t.y= _.throttle(t.y,a,b)};return t}
    a.u=function(a,b,c){var t=this;if(iN(t.y)){t.y=Math.ceiling(t.y)};if(iA(t.y)){t.y= t.y.unshift.apply(t.y,tA(arguments))}
        if(iS(t.y)&&iN(a)){t.y= t.y.charCodeAt(a)};if(iS(t.y)&&!a){t.y= t.y.toUpperCase()};return t}
    a.U=function(a,b,c){var t=this;return _.union.apply(t.y,arguments);return t}
    a.w=function(a,b,c){var t=this;return t}
    a.x=function(a,b){if(iA(t.y)){t.y=_.without.apply(t.y,arguments)};if(iL(t.y)&&iF(a)){t.y= _.reject(t.y,a,b)};return t}
    a.z=function(a,b,c){var t=this;if(iSL(t.y)&&!a){t.y=_.size(t.y)};if(iA(t.y)&&iA(a)){t.y=_.zip.apply(t.y,arguments)};return t};if(!iE(A)){return a._.apply(a,A)}
    return a}// YANO TIME!!





//1 make circles on canvas  2 make them in response to mouse click
// /3 store them in an array     4 gen path from array
// 5 use outside of path as clipping region 6 apply transparency to clipping region,
// 7 get imageData of new canvas  8 save it as a cutty!make clipping region from a circle?a

//document.location.href


// alt key!!! ≈≈∂ƒ˜©˙∆˚¥¨∫˜≤åß∂∑œ˜˜∫√˙˙√√√√√√√√ΩΩΩΩ≈≈ßß∂∂∑∆∂µ∆ß


function fll(a){
    var m=mask=C();
    a.x.fillStyle="skyblue";
    a.x.fillRect(0,0,a.w()),a.h());
    m.x.fillStyle="black";
    m.w(c.w());
    m.h(c.h());
    m.x.fillRect(0,0,m.w(),m.h());
    m.x.globalCompositeOperation='xor';m.x.arc(30,30,10,0,2*Math.PI);m.fill();
    m.x.drawImage(m,0,0)}
// I'll use a skyblue background that covers everything. Just to demonstrate -
// Create a canvas that we will use as a mask// Ensure same dimensions - // T
// his color is the one of the filled shapeFill the mask - // Set xor operation - //
// Draw the shape you want to take out -  Draw mask on the image, and done !  -




///
users upload files, but they dont have direct access to the files. on upload,
    this this the only time they access their file.
    and it is to crop/edit it within a fixed size canvas, and then to 'snap' a photo of it,
    which is stored as a 400x400 square png img;
so all you should have to do is define mfRdy as a block
that gets run, when it is ready to be run,
    i.e., (whatever that means),
when manfiest has completed pre-loading the images.
    only when the
qloader fires the 'complete' event,
    can you feel safe calling the Bm constructor to fetch the images
listed/identified in the manifest itself
-make a new canvas 400 by 400.. draw image on it to make it fit, then SNAP to new im.. (or same)..
i initially did auto-conversion of all pics to CJS display objects (type 'bitmap')");  pic = image.id;
var b = new createjs.Bitmap(qu.getResult(pic)); p[pic] = b;
// p[pic] = b;
//console.log(mf.join())
// for each id name,
//    -set a pop on g (by that name)to the B(im)
//    -add it to st (and run assoc. js

//makeSTAGE();ADD(CENTER(getBM(e)));ctx.drawImage(loadedImg,0,0,w,h)
function snap(c,function(i){Sv(mug((i)))})}
LAUNCH = function(rdyFn){$(function(){cj.lq(); Q.al("complete", rdyFn);Q.lm(mf)})}
function graphicsReady(){l('graphicsReady!');ch=BM('chicks');tickStage(stg);stg.addChild(ch)
    ch.ON("tick",function(){ch.alpha=ch.alpha*.9999})}//img = $('#i')[0]
function mfRdy(){l('mfRdy');ch.ON("tick",function(){ch.alpha=ch.alpha*.99})}//requires stage
CAN();READY("me=Bm('me');add(me);");
$(function(){qu=new createjs.LoadQueue(true);
    qu.ON("complete", graphicsReady);
    qu.loadManifest(mf)});



script.
    VX=[];
canvasClick(ctx, addVX);
canvasClick(clr, clrVX);
canvasClick(cut, makeCut);
canvasClick(go, function(){  var copy=getData(c);clearCanvas(c);makePath(c);putData(copy,c) })





mixin func(name, def, pam)
if pam
    script.
        var #{name} = function(#{def}){#{pam}}
else
    script.
        var #{name} = function(){#{def}}


mixin local(def, name)
mixin J("var " + name + " = function(a,b,c,d,e){" + def + "}}  ")

mixin f(def, name)
script.
    #{name} = function(a,b,c,d,e){#{def}}
mixin F(n,d)
mixin f(d,n)


mixin ff(a,b,c)
script.
    #{a} = function(){#{b}();#{c}()}

mixin set(k,v, noStringsAttached)
if (noStringsAttached)
    script.
        #{k} = #{v}
else
    script.
        #{k} = "#{v}"


mixin monad(arr, initNum)
if initNum
    script.
        var x = #{initNum};
each fn in arr
script.
    x = #{fn}(x)
script.
    alert(x)
else
each fn in arr
script.
    #{fn}()

