

oo=function(o){return _.defaults(o, ooo)}

Oo=oo(function f(a,b){return f[a] && f[a][b]})




oO=oo(function oO(a,b,c){
    if(U(a)){ return _.keys(f) }
    if('*'==b ){return $r(a)}
    if(!U(c)){var o=oO(c,a)
        return oO(o,b)}
    if(!U(b)){if(oO[a] && oO[a][b]) {return oO[a][b]}
        return b}
    var o=function(x,y){return oO(a,x,y)}
    return _.defaults(o, oO[a] || {} )})



$O=Object;
O=function(a){return typeof a ==="object"&&!F(a)&&!A(a)}
O= _.defaults(O,$O)

iO =_.isObject;
O=function(a,b){if(U(b)){if(_.isObject(a)){return gC(a)} // if its an ob, pass back its constructor. all and only obs have them, and they are always truthy
    return O(b)? $a(_.extend,arguments):false}}



oOold = oo(function f(a,b,c){
    return   U(a)   ? _K(f)
        :'*'==b ? ran(a)
        :U(b)   ? (f[a]||a)
        :!U(c)  ? f(f(c,a), b)
        :(f[a]&&f[a][b]) ? f[a][b]
        : b})
$O={a:Array,b:Boolean,d:Date,e:Error,
    f:Function,i:Infinity, j:JSON,
    m:Math,n:Number,o:Object,r:RegExp, s:String}
$O.a.c=$O.a.concat


O=function(a,b){
    if(U(b)){
        if(_.isObject(a)){return gC(a)} // if its an ob, pass back its constructor. all and only obs have them, and they are always truthy
        return O(b)?
            $a(_.extend, arguments)
            :false}}


Ob=function(a,b,c){
    var name,num,dob,
        pp=function(a){return function(b,c){return(c?b+a+c:b?b+a:a)}}
    if(O(a)){dob=a}if(O(b)){dob=b}if(O(c)){dob=c}
    if(N(a)){num=a}if(N(b)){num=b}if(N(c)){num=c}
    if(S(a)){name=a}if(S(b)){name=b}if(S(c)){name=c}

    name=name||'anon'
    num=num||0
    dob=dob||{}
    var p=pp('o_'+name)
    return defaults(dob,{
        k:'o',  t:O,  name:p(), originalName:name,
        N:null,  n:num,  a: ["item1","item2"],
        o: {firstKey:'firstValue', secondKey:'secondValue'},
        toString:function(){return p('Mock Object ')},
        f:function(){
            return 'you involved this.f : '+this.toString()},
        tree:{one:{two:{three:{leaf:{}}}}}
    })

}

obs=function(){o1=Ob(1,'o1');o2=Ob(2,'o2', {

    a:[o1,o1.a,o1.o,o1.f],

    f:function(){return [o1,o2]



    }})}oo=function(o,b){ if(U(b)){return _D(o,ooo)};
    return function(a){return o(b, a)}}
oO=oo(function f(a,b,c){
    if(U(a)){return _K(f)};
    if(b==="*"){return ran(a)}
    if(U(b)){return f[a]||a}
    if(U(c)){if(f[a]&&f[a][b]){
        return f[a][b]};
        return b}
    return f(f(c,a),b)})

Oo=oo(function f(a,b){return (!U(b))?f[a][b]:f[a]});

tion(a){return function(){eval(a)}}





//jo
oOo=function(o){ return _D(o,oo) }
oO = oOo(function f(a,b){ return (U(a))? _K(f):  (a==="*")? $r(b||'c'): jo(a,f,b)}) // get keys,result,random//safe
Oo = oOo(function f(a,b){if(a&&b){return $m(f,a,b)}})



$o=function(o){ return function(a,b){  return(Z(b))? Oo(o,a): oO(o,a)} };  oS=$o('S'); Co=$o('c'); oQ=$o('Q'); Qo=$o('q',0); oX=$o('X'); Xo=$o('x',0)



opt=function(a){return "<option>"+a+"</option>"}

ooO=function(o){return function(a){ return (U(a))? oO(o): oO(o,a)} }
Ooo=function(o){return function(a){ return (U(a))? Oo(o) : Oo(o,a)} }
oC=ooO('c');Co=Ooo('c');oQ=ooO('Q');Qo=Ooo('q');
oX=ooO('X');Xo=Ooo('x');oS=ooO('k');Os=Ooo('k')






// an oo is a fn-ob that provides dependencies in a simple and awesome way!
// oOo is an abstract class for making oo's, which lets CLIENT determine  the function of the function object made from object oo !!!
oOo=function(o){return _D(o,oo)} // two kinds of oo's : polite, rude
Oo = rude = oOo( function f(a,b){  if(a&&b){ a=fR(a,f); return nest(f,a,b)}})  //oo(a): ' Oo '- returns a match or undefined. it is preferred in most cases (strict, rude)
oO = polite = oOo(function f(a,b){
    if(a){
        a=jT(fR(a,f),f);return(b)?jT(b,a):a}
    return _K(f)})//oo(b):'oO' - gives back input on no-match,  and gives index on U(a) //oO <--- matched-val||ORIG(passed)val
iO  = function(a){return isIn(oO(),a)}




//OO=function(a,b){return Oo(a, b) ||b} //oO?
//sO=function(a,b){return oO('S',a,b)}





oo=function f(h,k {
    if(!h){return _.keys(oo)}
    if(f.M[h]){h=f.M[h]}
    if(!f[h]){return}
    else {h=f[h]};
    if(U(k)){return h};
    if( h[k] ){return h[k]}}



