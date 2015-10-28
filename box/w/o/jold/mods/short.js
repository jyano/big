

aft=after=function f(a,b){return a.slice(a.indexOf(b)+1,_z(a))}//$l(i,A,B)
aI=afterInclusive          =function f(a,b){return a.slice(a.indexOf(b),_z(a))}
aL=afterLast                =function  f(a,b){return a.slice(a.lastIndexOf(b)+1,_z(a))}
aLI=afterLastInclusive       =function f(a,b){return a.slice(a.lastIndexOf(b),_z(a))}
aft=after    =function f(a,b){return a.slice(a.indexOf(b)+1,_z(a))}//$l(i,A,B)
aI=afterInclusive          =function f(a,b){return a.slice(a.indexOf(b),_z(a))}
aL=afterLast=function  f(a,b){
    return a.slice(a.lastIndexOf(b)+1,_z(a))}
aLI=afterLastInclusive=function f(a,b){
    return a.slice(a.lastIndexOf(b),_z(a))}
a$=function f(a,b){var i=io$(a,b),A=_.z(a),B=_.z(b);return _sl(a,i+1,A)}//$l(i,A,B)
ai$=function f(a,b){var i=io$(a,b),A=_.z(a),B=_.z(b);return _sl(a,i,A)}
al$=function  f(a,b){var i=lo$(a,b),A=_.z(a),B=_.z(b);return _sl(a,i+1,A)}
ali$=function f(a,b){var i=lo$(a,b),A=_.z(a),B=_.z(b);return _sl(a,i,A)}



b4               =before     =function f(a,b){return  a.slice(0,  a.indexOf(b)  )}//$l(i,A,B)
b4i               =beforeInclusive=function f(a,b){return a.slice(0, a.indexOf(b)+_z(b))}
b4l              =beforeLast=function f(a,b){return a.slice(0, a.lastIndexOf(b))}
b4li            =beforeLastInclusive=function f(a,b){return a.slice(0, a.lastIndexOf(b)+_z(b))}


b4               =before     =function f(a,b){return  a.slice(0,  a.indexOf(b)  )}//$l(i,A,B)
b4i               =beforeInclusive=function f(a,b){return a.slice(0, a.indexOf(b)+_z(b))}
b4l              =beforeLast=function f(a,b){return a.slice(0, a.lastIndexOf(b))}
b4li            =beforeLastInclusive=function f(a,b){return a.slice(0, a.lastIndexOf(b)+_z(b))}



b$=function f(a,b){var i=io$(a,b),A=_.z(a),B=_.z(b);return _sl(a,0,i)}//$l(i,A,B)
bi$=function f(a,b){var i=io$(a,b),A=_.z(a),B=_.z(b);return _sl(a,0,i+B)}
bl$=function f(a,b){var i=lo$(a,b),A=_.z(a),B=_.z(b);return _sl(a,0,i)}
bli$=function f(a,b){var i=lo$(a,b),A=_.z(a),B=_.z(b);return _sl(a,0,i+B)}


sl=function(a,b){

    _.c=_.contains

    var not,slu,ls,sli,str='abcdefghijklmnopqrstuvwxyz',arr=[1,2,3,4,5,6,7,8,9,10]
    b=b||(arr)

    not=function(a){
        if(A(a)){
            if(a[0]=='!'){
                return _r(a)}}
        if(_f(a)=='!'){
            return a.slice(1,_z(a))}}

    slu=function(a,b){
        var a=a.split(''),n,c,
            i=false
        i=not(a)
        a=i||a
        c=a.shift()
        n=a.join('')
        n=Number(n)||1
        if(c=='l'){
            if(!i){
                r=_l(b,n)}

            else{
                r=_i(b,n)}}
        else{if(!i){
            r=_f(b,n)}
        else{r=_r(b,n)}}
        return S(b)? r.join(''):r}


    ls=function(a,b,c){
        var s1=c.slice(0,a),
            s2=c.slice(b,_z(c))
        return s1.concat(s2)}

    sli=function(a,b){var o,n1,n2,i;i=not(a)
        a=i||a
        _e(['(',')','[',']','|'], function(p){var t=a.split(p)
            if(_z(t)>1){
                o=p;n1=t[0];n2=t[1]}})
        if(o=='['){n2++}

        if(o==')'){n2*=(-1)}
        if(o==']'){n2=(n2*-1)+1}
        if(i){return ls(n1,n2,b)}
        return b.slice(n1,n2)}
    if(_.c(a,'f')||_.c(a,'l')){
        return slu(a,b)}
    else {return sli(a,b)}}






_sl=inverseSlice=function(a,b,c){
    return a.slice(0,b).concat(a.slice(c,_z(a)))}

_sh=function(a){return a.shift()}






Ss=function(a){
    return function f(b,c){
        if(U(b)){return a}
        if(F(b)){return b(a)}
        if(S(b) && U(c)) {return ss(a, b)}
        ss(a,b,c)
        return f}}




f$=function f$(a,b,c){var ;

    return o("s")?  a.slice(0, 1)
        :o("sn")? a.slice(0, b)
        :o("sns")?   f$(a,b) == c
        :o("ss")? f$(a,1, b):0}


f$=function f(a,b,c){var o=arg(arguments) //A=ag(arguments) //
    return o("s")   ?_sl(a,0,1)
        :o("s,n")   ?_sl(a,0,b)
        :o("s,n,s") ?f(a,b)==c
        :o("s,s")? f(a,1,b):0}

//ex: _f("jason",2,"ja") / true

f$=function fn(a,b,c){  eval(g$)
    var sl=_.sl
    o("s    sl(a,0,1)");
    o("sn   sl(a, 0,b)");
    o("sns  fn(a,b)==c");
    o("ss   fn(a, 1,b)")}




l$=function f($,q,r){var A=ag(arguments),z=_.z($);if(A("s")){return _sl($,z-1,z)};if(A("s,n")){return _sl($,q*-1,z)}
    if(A("s,n,s")){return f($,q)==r};if(A("s,s")){return f($,1,q)}}






l$              =function fn(a,b,c){
    var o=arg(arguments);
    if(o("s")){return a.slice(_z(a)-1,_z(a))};
    if(o("s,n")){return a.slice(b*-1,_z(a))}
    if(o("sns")){return fn(a,b)==c};
    if(o("ss")){return fn(a,1,b)}}
l$              =function fn(a,b,c){
    var o=arg(arguments);
    if(o("s")){return a.slice(_z(a)-1,_z(a))};
    if(o("s,n")){return a.slice(b*-1,_z(a))}
    if(o("sns")){return fn(a,b)==c};
    if(o("ss")){return fn(a,1,b)}}

C =function(a){
    if(O(a)){
        if(a.canvas){return a.canvas}
        if(_h('Canvas', _g(a))){
            return _g(a)}}}

Du  =function(a){return _h(a,'data:')}
E=function e(a,b,c){
    if(D(b)){
        return _.every(a,b||N,c)}
    if(O(a)){if(a.q){a=a.q}
        if(C(a)){return C(a)}
        if(_.isElement(_g(a))){return _g(a)}}}

O=function(a,b){
    return U(b)? _.isObject(a): $a(_.extend, arguments)}

Q=function q(a){if(O(a)){
    if(a.q){return a.q}
    if(E(a)){return $(E(a))}}}

R=function(a,b,c){
    return U(b)? _.isRegExp(a): N(a)? _.range(a,b,c):0}
X=function(c){
    if(O(c)){
        if(c.canvas){return c}
        if(C(c)){return C(c).getContext('2d')}
        if(c.q){return x(a.q)}}}




_a=function(a,b,c){return a.apply(c||a, b)}
_b =function(a,b,c){
    if (U(a)) {return $('body')}
    return  F(a)? _.bind(a,b,c):  _.bindAll(a,b,c)}
_c=function(a,b){
    if(U(b)){return a.clone()}
    if(!A(a)){a=[a]}
    return a.concat(b)}
_e=function(a,b,c){if(b){return _.each(a,b,c)}
    return a.empty()}
_f=function(a,b,c){return F(b)? _.find(a,b,c): _.first(a,b)}
_g =function(a){if(O(a)){
    return a.target||$(a)[0]} }

_h=function h(a, b){
    if( O(a) && F(a.height) ){
        if(U(b)){return a.height()}  //|| a.w
        if(N(b)){a.height(b)}
        return a}


    if(U(b)){return D(a.height)? a.height: a.h }  //|| a.h
    if(N(b)){return _s(a,'height',b)}


    if(A(a)){return _.contains(a,b) }
    if(O(b)){return h(_S(b),a)}
    if(S(a)){return s$(a).contains(b)}
    if(O(a)){return a.has(b)}}
_i=function(a,b){ return U(a)? new Image(): _.initial(a,b)}
_k=function(a){return a.complete}
_l= function(a,b){
    if (F(b)){$(a).load(b);return a}
    return  _.last(a,b)}
_m=function(a,b,c){return U(b)? _.min(a): _.map(a,b,c) }
_p=_.partial
_p2=pAr=function(f,B){return function(a,c){return f(a,B,c)}}
_r=function r(a,b,c,d){
    return  (F(b) && D(c))? _.reduce(a, b, c)
        :(F(a) && D(c))? _.reduceRight(a, c, b)
        :(F(a) || F(b))? r(c,a,b)
        :N(a)?_.random(a,b,c)
        :_.rest(a,b)}
_s=function(a,b,c){
    if(D(b)){a[b]=c;return a}
    var q=$('<br>')

    if(N(a)){_t(a-1,function(){q=q.add(_s())})}
    return q}
_t= function t(a,b,c){
    if(F(a)){return t(1,a)}
    if(N(a)){return _.times(a,b,c)}

    if(U(a)){return t(_b())}

    if(U(b)){
        if(S(a)){return t(_b(), a)}
        return $(a).text()
    }

    //  if(!O(a)){return t($("body"), a)}

    return $(a).text(b)
}
_w=function(a,b){
    if(F(a.width)){
        if(U(b)){return a.width()}  //|| a.w
        if(N(b)){a.width(b)}
        return a}
    if(U(b)){return D(a.width)? a.width: a.w}

    if(N(b)){return _s(a,'width',b)}}
_z=function z(a,b,c){
    return  U(b)? _.size(a)
        : N(b)? _z(a) == b
        : _z(a)== _z(b)}



_C = _.compact
_F=  _.flatten
_I=  function(a,b){return U(b)? _.invert(a)  :_a(_.intersection,arguments)}
_M=  _.max
_S=  function(a){return a.toString()}//=tS
_U=  _.union
_W=  _.where
_Z=   _.zip




r$=function f($,q,r){
    var A=ag(arguments),z=_.z($)
    if(A("s")){return _sl($,1,z)};if(A("s,n")){return _sl($,q,z)}
    if(A("s,n,s")){return f($,q)==r};if(A("s,s")){return f($,1,q)}}


_rg=function(a,b){return $R(eR(a),b)
    function eR(a){return _rp(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&",a)}}
_rG=function(a,b){return _rg(a,'g')}

rg$=function(a,b){return $R(eR$(a),b)}
rG$=function(a,b){return rg$(a,'g')}




tDU=function(a){return a.toDataURL()}
iW=function(a){return $(a).get(0).innerWidth}
iH=function(a){return $(a).get(0).innerHeight}
cL =function(a){console.log(a);return a}
clk=function(a,b,c){return  a.dblclick(b)}

clr=function(c){var x=xx(c);x.X()}


dbl=function(a,b,c){return  a.dblclick(b)}
eL =function(a,b){return s$(a).ensureLeft(b).s}
eR =function(a,b){return s$(a).ensureRight(b).s}
eW =function f(a,b){return l$(a, _z(b))==b}
fF=function(a){return f(a)? a(): a}      //?
gJ =function(a,b,c){return $.getJSON(a,b,c)}
jS =function(a){return JSON.stringify(a)}
lC =function(a){return a.toLowerCase()}
lIO=function(a,b,c){return a.lastIndexOf(b,c < 0?c+_z(a): c)}

sW = function(a,b){return s$(a).startsWith(b)}
sT =function(a,b){return setTimeout(a,b)}
tA =function(a){return O(a)? _.toArray(a): [a]}
tT=function(a){$('body').prepend(a);return a}
tB=function(a){$('body').append(a);return a}
uC =function(a){return a.toUpperCase()}
oH=function(a){return E(a) && E(a).outerHTML}
bC=function bc(a,b){return b? ss(a,'C',b):bc('body',a)}


shf=function(a){return a.shift()}
ush=function(a){return a.unshift()}
pop=function(a){return a.pop()}
psh=function(a){return a.push()}
rpl=function(a,b,c){return a.replace(b||'#', c||'')}
pre=function(a,b){return sW(a,b)?a:b+a}
ext=function(a,b){return(_h(a,'.'))?a: eR(a, b||'.png')}
def=function(d,b){return _D(d=d||{}, oO(b||''+'D'))}//dst,srcPre
inn=function(a){return {w:iW(W),h:iH(W)}}
dim=function(a,w,h){a=E(a)
    _w(a,w); _h(a,h||w)
    return a}



_io=function(a,b,c){return a.indexOf(b,c)}

io$=function(a,b,c){
    return _io(a,b,c<0?c+_z(a):c)}

_sh=function(a,b){
    if(!b){return a.shift()}
    return a.unshift.apply(a, _r(arguments))}
_cc=function(a){
    return a.concat.apply(a, _r(arguments))}
_lo=function(a,b,c){return a.lastIndexOf(b,c)}
_ca=function(a,b){return a.charAt(b)}

_sl=function(a,b,c){return a.slice(b,c)}
_sp=function(a,b,c){return a.splice(b,c)}

_rp=function(a,b,c){return a.replace(b,c)}

_s=function(a,b){
    return a.split(b||'')}


_p=function(a,b,c){if(!b){return a.pop()}
    return a.push.apply(a,_.rest(arguments))}

_jn=function(a,b){return a.join(b)}
_ps=function(a){return $J.parse(a)}
_js=function(a){return $J.stringify(a)}

//_tr=function(a){return _r(/\s\s*$/,'',_r(/^\s\s*/,'',a))}
_mh=function(a,b){return a.match(b)}
_rv=function(a){return a.reverse()}


sx$=function(a,b,c){return _cc(_sl(a,0,b), _sl(a,c,_z(a)))}//inverse slice




lO$=lo$=function f(a,b,c){
    if(c<0){c+=_z(a)}return _lo(a,b,c)};

b$=function f(a,b){
    var i=io$(a,b),A=_z(a),B=_z(b)
    return _sl(a,0,i)}//$l(i,A,B)

bI$=function f(a,b){
    var i=io$(a,b),
        A=_z(a),B=_z(b);
    return _sl(a,0,i+B)}

bL$=function f(a,b){
    var i=lo$(a,b),
        A=_z(a),
        B=_z(b)
    return _sl(a,0,i)}

bLI$=function f(a,b){
    var i=lo$(a,b),A=_z(a),B=_z(b)
    return _sl(a,0,i+B)}

a$=function f(a,b){
    var i=io$(a,b),A=_z(a),B=_z(b)
    return _sl(a,i+1,A)}//$l(i,A,B)

aI$=function f(a,b){
    var i=io$(a,b),A=_z(a),B=_z(b)
    return _sl(a,i,A)}

aL$=function  f(a,b){
    var i=lo$(a,b),A=_z(a),B=_z(b)
    return _sl(a,i+1,A)}

aLI$=function f(a,b){
    var i=lo$(a,b),A=_z(a),B=_z(b)
    return _sl(a,i,A)}


c$=function(a,b){
    return io$(a,b)!==-1}


p$=function(a,b){
    return(f$(a,b))?a:b+a}//2

e$=function(a,b){if(!b){
    return c$(a,'.')?ali$(a,'.'):false}
    if(!e$(a)){a += p$(b,'.')}
    return a}



eR$=function(a){return _rp(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&",a)}

rg$=function(a,b){return $R(eR$(a),b)}

rG$=function(a,b){return rg$(a,'g')}






eW$=function f($,q){
    var A=ag(arguments),
        z=_z(q);
    return l$($,z)==q}

io$=function f(a,b,c){return a.indexOf(b, c<0?c+_z(a):c    )}
io$HUHHHH=function f(a,b,c){
    var j=fx(JS);
    if(c<0){ c+=_z(a) };
    return j('io', arguments)}



sx$=function(a,b,c){var cc= _.cc, s= _.sl;  return cc( s(a,0,b), s(a,c,Z(a) ))}  //inverse slice//->oG("s")("do this")
lO$=lo$=function f(a,b,c){if(c<0){c+=_.z(a)}return _lo(a,b,c)};


b$=function f(a,b){
    var i=io$(a,b), A=_.z(a), B=_.z(b);

    return _sl(a,0,i)}     //$l(i,A,B)
bI$=function f(a,b){  var i=io$(a,b), A=_.z(a), B=_.z(b); return _sl(a,0,i+B)}
bL$=function f(a,b){  var i=lo$(a,b), A=_.z(a),B=_.z(b); return _sl(a,0,i)}
bLI$=function f(a,b){ var i=lo$(a,b), A=_.z(a),B=_.z(b); return _sl(a,0,i+B)}
a$=function f(a,b){   var i=io$(a,b), A=_.z(a),B=_.z(b); return _sl(a,i+1,A)}   //$l(i,A,B)
aI$=function f(a,b){  var i=io$(a,b), A=_.z(a),B=_.z(b); return _sl(a,i,A)}
aL$=function  f(a,b){ var i=lo$(a,b), A=_.z(a),B=_.z(b); return _sl(a,i+1,A)}
aLI$=function f(a,b){ var i=lo$(a,b), A=_.z(a),B=_.z(b); return _sl(a,i,A)}


c$=function(a,b){return io$(a,b)!==-1}

p$=function(a,b){return(f$(a,b))?a:b+a}

e$=function(a,b){return D(b)?(e$(a)?a :a+p$(b,'.')):c$(a,'.')?ali$(a,'.'):0}



l$=function f($,q,r){eval(g$); z=_.z($);var sl= .sl;
    if(A("s")){  x= sl($, z-1, A, z)}//s(z-1,z);
    else if(A("s,n")){  x =sl($, q*-1,z)} //s(q*-1,z)
    else if(A("s,n,s")){ x=f($, q)==r}
    else if(A("s,s"))  {  x=f($, 1, q)}; return x}
r$=function f($,q,r){eval(g$); z=_.z($);  var sl= _.sl;
    if(A("s")){x=sl($, 1,z)}
    else if(A("s,n")){x=sl($, q,z)}
    else if(A("s,n,s")){x=f($, q)==r}
    else if(A("s,s")){x=f($, 1,q)};return x}

i$=function f($,q,r){eval(g$);  z=Z($);
    if(A("s")){x= sl($,0,z-1)}
    else if(A("s,n")){x= sl($,0,z-q)}
    else if(A("s,n,s")){x= f($,q)==r}
    else if(A("s,s")){x= f($,1,q)};return x}
i$=function fn(a,b,c){
    var o=arg(arguments);
    if(o("s")){return a.slice(0,_z(a)-1)};
    if(o("sn")){return a.slice(0,_z(a)-b)}
    if(o("sns")){return fn(a,b)==c}
    if(o("ss")){return fn(a,1,b)}}


r$=function fn(a,b,c){
    var o=arg(arguments);
    if(o("s")){return a.slice(1,_z(a))};
    if(o("s,n")){return a.slice(b,_z(a))}
    if(o("sns")){return fn(a,b)==c};
    if(o("ss")){return fn(a,1,b)}}



f$=function f($,q,r){
    var A=ag(arguments)
    if(A("s")){return _sl($,0,1)}
    if(A("s,n")){return _sl($,0,q)}
    if(A("s,n,s")){return f($,q)==r}
    if(A("s,s")){return f($,1,q)}}
//ex: _f("jason",2,"ja") / true


l$=function f($,q,r){
    var A=ag(arguments),z=_z($);if(A("s")){return _sl($,z-1,z)};if(A("s,n")){return _sl($,q*-1,z)}
    if(A("s,n,s")){return f($,q)==r}
    if(A("s,s")){return f($,1,q)}}


r$=function f($,q,r){var A=ag(arguments),z=_z($)
    if(A("s")){return _sl($,1,z)}
    if(A("s,n")){return _sl($,q,z)}
    if(A("s,n,s")){return f($,q)==r}
    if(A("s,s")){return f($,1,q)}}


i$=function f($,q,r){
    var A=ag(arguments),z=_z($)
    if(A("s")){return _sl($,0,z-1)}
    if(A("s,n")){return _sl($,0,z-q)}
    if(A("s,n,s")){return f($,q)==r}if(A("s,s")){
        return f($,1,q)}}



i$=function f($,q,r){
    var A=ag(arguments),z=_.z($)
    if(A("s")){return _sl($,0,z-1)};if(A("s,n")){return _sl($,0,z-q)}
    if(A("s,n,s")){return f($,q)==r}if(A("s,s")){return f($,1,q)}}

rg$=function(a,b){return $R(eR$(a),b)}
rG$=function(a,b){return rg$(a,'g')}




eR$=function(a){

    return _rp(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&",a)}


//sW$=function f($,q){var A=ag(arguments),z=_z(q);return f$($,z)==q}
//eW$=function f($,q){var A=ag(arguments),z=_z(q);return l$($,z)==q}
