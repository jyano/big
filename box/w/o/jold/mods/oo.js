



//$f=function(a){return $F("a","b","c",  g$+  "\n"+"return("+a+")")}
//$ft=function(a,b){return $F("a","b","c", g$+"\n"+a+";return t")}
//$f2=function(a){return Function("aa","bb","cc","return function fn(a,b,c){"+g$+"\n"+"return("+ a +")}")}
//fo=function(fun, scope){return   sco(scope)+fun }
//sco=function(sco){var str='';_.e(sco, function(v, k){str += "var "+k+" = " + $s(v)+ ';'}); return str}


js = function(){return JSON.stringify(a)}





           //  ap(concat, rG, fG)


jq=$f("$($f(eval(a)))")


        JS={ p:"pop",   u:"push", h:"shift",n:"unshift",
            s:"split",  l:"slice",  sp:"splice",  ts:"toString",
            j:"join",   r:"replace",   t:"trim", m:"match",  v:"reverse",
            c:"concat",  i:"indexOf", li:"lastIndexOf",   a:"charAt"};



        var j = apo( JS );

        _.a= _.range;
        _.ab = $M.abs;
        _.b= _.bind;
        _.bA =_.bindAll;
        _.c= _.contains;
        _.ch =j('a');
        _.cc =j('c');
        _.C=_.cm = _.compact;
        _.d =_.defaults;
        _.e =_.each;
        _.f =_.first;
_.F= _.filter;
_.g =_.groupBy;
        _.h =_.has;
        _.H = j('h');
        _.I =_.indexOf;
        _.ib =_.indexBy;
        _.i =_.initial;
        _.io =j('i')
        _.j =j('j');
        _.js =$J.stringify;
        _.jp =$J.parse;
        _.J =_.reject;
        _.K =_.keys;
        _.k =setInterval;
        _.l =_.last;
        _.lI =_.lastIndexOf;
        _.li =j('li');
        _.m =_.map;
        _.mx=_.max
        _.M =j('m');
        _.N =j('n');
        _.n=$f("function(b){return !(a(b))}");//$f('$f("!(ap("+a+", g))")');
        _.o =_.omit;
        _.O =_.isObject;
        _.p =_.partial;
        _.P =j('p');
        _.pi =parseInt;
        _.qr = $M.sqrt;
        _.rd =_.reduce;
        _.rv =j('v');
        _.R= _.random;
        _.r= _.rest;
        _.rp =j('r');
        _.so =_.some;
        _.S= _.sample;
        _.s= j('s');
        _.sl =j('l');
        _.sp =j('sp');
        _.t= _.times;
        _.tr =j('t');
        _.ts =j('ts');
        _.u =_.union;
        _.U = j('u');
        _.UC=$f("_.m(a, _.uc)");
        _.uc =$f("a.toUpperCase()");
        _.v =_.every;
        _.V = _.values;

        _.w =setTimeout;

        _.W =_.where;

        _.x =_.extend;

         _.y=eval;

_.Y= function(){eval(g$)};

        _.z =_.size;
        _.Z =_.zip;



ii=function fn(f){return function(a,b,c){
    if(!b){return f(a)};
    if(c==='!'){c=b;b=null}
    if(f(a)){if(b){
        $ft(b)(a, $ft(b),f,f)}}
    else if(c){$ft(c)(a, $ft(b),f,fn)}}};//z=ii(S);("alert(3)")

A=ii( _.isArray)
B=ii( _.isBoolean)
C=ii( $f('c$(_ts(a),"Canvas")'))
D=ii( $f("sW$(a,'data:')"))
E=ii( _.isElement)
F=ii( _.isFunction)
G=ii( _.isRegExp)
H=ii( _.isEmpty)

I=ii( $f('c$(_ts(a),"Image")'))

J=ii( $f('c$(_ts(a),"Sprite")'))
K=ii( _.isNull)
L=ii( $f("(iO(a)||iA(a))"))
M=ii( _.isNaN)
N=ii( _.isNumber)
O=ii(function(a){return  _.O(a) && !F(a) && !A(a) })
P=nQ=ii($f("O(a)&&!Q(a)"))
Q=ii( $f("E(a[0])"))
R=ii( _.isRegExp)
S=ii( _.isString)
T=ii( _.isDate)
U=ii( $f("a===undefined "))
V=nNn=ii($f("!(M($N(a)))"))
W=ii( $f( "a===$w" ))
X=ii( $f("_.isNumber(a) &&a >0"))
Y=ii( $f("_.isNumber(a) && a<0"))
///////

butLast=_.i;

last=_.l;

len=length=sizeOf=size=_.z;

filter=_.F;

map=_.m;
compact=_.C;
chop=function(a){return a.join('')}
hop=function(a){return a.split('')}
upper=toUpper=UPPERCASE=uppercase=_.uc;
dif=function(a,b){return a!==b};
not=_.n;
map=_.m;
zip=_.Z
every=_.v;  some= _.so;  none=not(some);  notAll=not(every)
//nO=$f("(a[0])?j(a,''):'='")




arg=function(G){

    var numPass,isNum,haveFun,squish,yes,no,qual,pQYn,

        pass,

        ALL, SOME, SOMENOT, NONE, ops,

        more,less,same,notLess,  moreOrSame, notMore, lessOrSame,

        yn,pair,lil,big,fun,sG,sQ;


    numPass=function(Q,args){
        return eval(
                            len(args)+op(butLast(Q))+last(Q)
        )

        function op(a){    return  (a[0]) ? chop(a) : '='   }
    }

    isNum=function(a){return V(last(a))}

    haveFun=function(arr){return map(arr, funny);

        function funny(lil){
                              big=upper(lil);    fun=$w[big];return(
                              (dif ( lil, big ))?  fun  :  not(fun)   )}}

    squish=function(a){
                             return filter(map(a,compact),

            function(a){return a[1]})}


    pair=function(a,b){

                           return squish( zip(a,b) )
    }

    yes=function(a){return a[1](a[0])}; no=not(yes);


    qual=function(a,b,c){return b(a,c)}

    yesNo=function(pair){return function(qual){

        return function(yesNo){

                             return   qual(  pair, qual, yesNo )   }}}

        return function(Q, doThis){

            if((Q=Q.split('/'))[1]){op=Q.shift()};

            sG=size(G); sQ=size(Q);

            more =                     (sG > sQ)
            less =                     (sG < sQ)
            same =                     (sG == sQ)
            more =                     (sG > sQ)
            notLess = moreOrSame =     (sG  >=  sQ)
            notMore = lessOrSame =     (sG  <=  sQ)

            if(isNum(Q)){pass = numPass(Q,G)}

            else {

                Q = haveFun( hop( Q[0] ) )

                yN = yesNo ( pair( G, Q ) )

                ALL =     yN( every )
                SOME =    yN( some )
                SOMENOT = yN( not( every ) )
                NONE =    yN( not( some ) )

                ops={ ex:(every(yes) && same), na:(some(not)),

                    al:(every(yes) && moreOrSame),

                    am:(every(yes) && lessOrSame)  }

                pass = ops [ op || 'ex']
            }

            if( S ( doThis )){doThis = $ft( doThis )}

            if( pass ){ l('p'); doThis() }

            else{ l( 'f' )}

        }}












      reduce= _.rd;

$cat=function(){
    return reduce(arguments,function(a,b){
        return a+$s(b)},'')}



$l=function(a){//if(U(a)){console.log('?!'); return false}
    //eval(g$);console.log( $cat.apply( rG, fG ))
    console.log(a)
    return a}





//testQualf=function(){return QUAL([["Hello", F],[3, not(N)]],some,yes)}

        $(function(){

            $l(3)

        })





$s=function(a){if(O(a)||A(a)){return JSON.stringify(a)}
    return (a).toString()}



$w=window; $(function(){$b=$("body")})
$A=Array; $B=Boolean; $F=Function; $N=Number; $O=Object; $S=String;
$R=RegExp; $D=Date; $E=Error; $J=JSON; $M=Math; $I=Infinity;

g$="var t=this,g=_.toArray(arguments), str='',arr=[], obj={},   gz=_.size(g),gf=_.first(g)," +
    "gr=_.rest(g), gl=_.last(g), gi=_.initial(g);if($w['arg']){var o=arg(g)};";

f1=$f=function(a){return $F("a","b","c",g$+"\n"+"return("+a+")")}


ft=$ft=function(a,b){
    return $F("a","b","c", g$+"\n"+a+";return t")}

f2=function(a){
    return Function("aa","bb","cc","return function fn(a,b,c){"
        +g$+"\n"+"return("+ a +")}")}

fo=function( a, scope ){


    _.e(scope, function(){

            eval(" ")
        }

    )




}



js=f1("JSON.stringify(a)");

ap=f1("a.apply(c||t,b)");

v=eval;

jj=f1("$(f(v(a)))")

apa=f2(" ap( gf[aa], gr, gf )")

apo=f1('$f("apa("+ js(a) +"[a])")')

apd=f1("function(){eval(g$); return ap(a[gf], gr,a)}")
ape=f1('$ft("var m=g.h();c=g.h();t=ap(c["+js(a)+"[m]],g,c)")')





var jS=function(){

    JS={ p:"pop",   u:"push", h:"shift",n:"unshift",
        s:"split",  l:"slice",  sp:"splice",  ts:"toString",
        j:"join",   r:"replace",   t:"trim", m:"match",  v:"reverse",
        c:"concat",  i:"indexOf", li:"lastIndexOf",   a:"charAt"};



    var j = apo(JS);

    _.a= _.range;
    _.ab = $M.abs;
    _.b= _.bind;
    _.bA =_.bindAll;
    _.c= _.contains;
    _.ch =j('a');
    _.cc =j('c');
    _.C=_.cm = _.compact;
    _.d =_.defaults;
    _.e =_.each;
    _.f =_.first;
    _.F= _.filter;
    _.g =_.groupBy;
    _.h =_.has;
    _.H = j('h');
    _.I =_.indexOf;
    _.ib =_.indexBy;
    _.i =_.initial;
    _.io =j('i')
    _.j=j('j');
    _.js =$J.stringify;
    _.jp =$J.parse;
    _.J =_.reject;
    _.K =_.keys;
    _.k =setInterval;
    _.l =_.last;
    _.lI =_.lastIndexOf;
    _.li =j('li');
    _.m =_.map;
    _.mx=_.max
    _.M =j('m');
    _.N =j('n');
    _.n=f1("function(b){return !(a(b))}");//f1('f1("!(ap("+a+", g))")');
    _.o =_.omit;
    _.O =_.isObject;
    _.p =_.partial;
    _.P =j('p');
    _.pi =parseInt;
    _.qr = $M.sqrt;
    _.rd =_.reduce;
    _.rv =j('v');
    _.R= _.random;
    _.r= _.rest;
    _.rp =j('r');
    _.so =_.some;
    _.S= _.sample;
    _.s= j('s');
    _.sl =j('l');
    _.sp =j('sp');
    _.t= _.times;
    _.tr =j('t');
    _.ts =j('ts');
    _.u =_.union;
    _.U = j('u');
    _.UC=f1("_.m(a, _.uc)")
    _.uc =f1("a.toUpperCase()");
    _.v =_.every;
    _.V = _.values;
    _.w =setTimeout;
    _.W =_.where;
    _.x =_.extend;
    _.y=eval;
    _.Y=function(){eval(g$)}
    _.z =_.size;
    _.Z =_.zip;

};jS();

ii=function fn(f){return function(a,b,c){
    if(!b){return f(a)};
    if(c==='!'){c=b;b=null}
    if(f(a)){if(b){ft(b)(a,ft(b),f,f)}}
    else if(c){ft(c)(a,ft(b),f,fn)}}};//z=ii(S);("alert(3)")



A=ii( _.isArray)
B=ii( _.isBoolean)
C=ii( f1('c$(_ts(a),"Canvas")'))
D=ii( f1("sW$(a,'data:')"))
E=ii( _.isElement)
F=ii( _.isFunction)
G=ii( _.isRegExp)
H=ii( _.isEmpty)
I=ii( f1('c$(_ts(a),"Image")'))
J=ii( f1('c$(_ts(a),"Sprite")'))
K=ii( _.isNull)
L=ii( f1("(iO(a)||iA(a))"))
M=ii( _.isNaN)
N=ii( _.isNumber)
O=ii(function(a){return  _.O(a) && !F(a) && !A(a) })
P=nQ=ii(f1("O(a)&&!Q(a)"))
Q=ii( f1("E(a[0])"))
R=ii( _.isRegExp)
S=ii( _.isString)
T=ii( _.isDate)
U=ii( f1("a===undefined "))
V=nNn=ii(f1("!(M($N(a)))"))
W=ii( f1( "a===$w" ))
X=ii( f1("_.isNumber(a) &&a >0"))
Y=ii( f1("_.isNumber(a) && a<0"))




$A=Array;
$Bl=Boolean;
$F=Function;
$N=Number;
$O=Object;
$S=String;
$R=RegExp;
$D=Date;
$E=Error;
$J=JSON;
$M=Math;
$I=Infinity;

