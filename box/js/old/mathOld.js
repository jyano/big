
//


//pi=function(a){return(a<0?-1/a:a)*PI}

$M=Math
sin=Math.sin
ceil=Math.ceil
flr=Math.floor
//pow=Math.pow
//cos=Math.cos;
//sin=Math.sin;
PI= Math.PI
//asin=Math.asin
//acos=Math.acos
//atan=Math.atan
pI=parseInt
//max=_.max
//GRAV=9.81
////




//////
Math.xyDep =  function(a,x,y){

    if(U(x)){

        if(F(x)&&F(y)){
            return {x:a.x(),y: a.y()}}
        return {x:a.x,y:a.y}
    }

    if(O(x)){return xy(a,x.x,x.y) }
    y=N(y)?y:x
    if(F(x)&&F(y)){a.x(x);a.y(y)}
    else{a.x=x;a.y=y}
    return a
}
Math.XYDep =  function(a,x,y){
    var g=G(arguments)
    if(g.p){
        a.x +=x
        a.y +=N(y)? y: x
    }
    return a}
Math.xyxDep =  function xy(o,x,y){
    if(O(x)){return xy(o,x.x,x.y)};
    o.x=x;o.y=y;
    return o}


//returns abs value of num
//returns abs value of diff of two nums
Math.ab = abs=function(a,b){
    return N(b)?abs(a-b):
        Math.abs(a)
}
//returns sum of squares
Math.sq = sq=function f(a){
    var g=G(arguments),  n=0

    _.each(g, function(a){n += (a*a)})

    return n}
//returns sqroot of one num
//return sqroot of sum of squares
Math.sqr = sqr=function(a,b){
    var g=G(arguments)
    return Math.sqrt(U(b)?a: _a(sq,g))}


Math.particle=function(pos){
    var p={}

    p.p=pos
    p.v = v2(0,0)
    p.pars=alive

    p.u=function(td){
        p.p.iadd(p.v.muls(td))}
    return p}



Math.vector =vec=function(x,y){

    var v=function v(){}

    v.x= x||2

    v.y =y||2

    v.sq=function(){return sq(v.x, v.y)}

    v.abs = v.len = v.l=function(){return sqr( v.sq() )}

    v.add = v.a=function(a){var g=G(arguments)
        if(g.n){a=(inv(a))}
        v.x+= a.x;
        v.y+= a.y;
        return v}

    v.scale = v.s=function(a){
        v.x*= a;
        v.y*= a;
        return v}

    v.unit = v.u=function(){
        v.x= v.x/v.l();
        v.y=v.y/v.l() }

    v.neg = v.n=function(){v.x*=-1;  v.y*=-1}

    v.pow = v.p=function(a){
        return (v.x*a.x)+(v.y*a.y)}

    v.rotate = v.r=function(a){
        v.x=v.x*cos(a)-v.y*sin(a)
        v.y=v.x*sin(a)+v.y*cos(a)
        return v}

    v.toString=function(){
        return '('+tFx(v.x)+','+ tFx(v.y)+')'}

    v.v=v.toString

    return v
}
unit=function(vec){return {x:vec.x/vec.l(),y:vec.y/vec.l()}}
Math.vector=v2=function(x,y){

    var v={x:x,y:y}
    v.muls=function(n){return v2(v.x*n, v.y*n)}
    v.imuls=function(n){v.x*=n;v.y*=n;return v}
    v.mul=function(vv){return v2(v.x*vv.x, v.y*vv.y)}
    v.imul=function(v){v.x*=vv.x;v.y*=vv.y;return v}
    v.divs=function(n){return v2(v.x/n, v.y/n)}
    v.div=function(n){ return v2( v.x/vv.x,v.y/vv.y)  }
    v.adds=function(n){return v2(v.x+n,v.y+n)}
    v.iadds=function(n){v.x+=n;v.y+=n;return v}
    v.add=function(vv){return v2(v.x+vv.x, v.y+vv.y)}
    v.iadd=function(v){v.x+=vv.x;v.y+=vv.y;return v}
    v.subs=function(n){return v2(v.x-n, v.y-n)}
    v.isub=function(n){v.x-=n;v.y-=n;return v}
    v.sub=function(vv){return v2(v.x-vv.x, v.y-vv.y)}
    v.isub=function(v){v.x-=vv.x;v.y-=vv.y;return v}
    v.set=function(x,y){v.x=x;v.y=y}

    return v}

Math.inverse = inv=function(v){
    return Math.V(-v.x,-v.y)
}
Math.add =  function(a,b){
    return Math.V(a.x+ b.x,a.y+ b.y)}
Math.subtract =  function(a,b){
    return Math.V(a.x-b.x,a.y-b.y)}
