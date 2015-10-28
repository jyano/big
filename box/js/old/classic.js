
recursiveMapFunc=rc=function self(f,a){
//recursive map function
//pass a function and array.  it maps the array,
// but if it finds another array, it recursively maps it

    if(_.isUndefined(a)){return _.partial(self, f)}

    else return _.map(a, function(a){

        if(A(a)){return self(f,a)}

        else return f(a)

    })

}

adj=function(a){

    if(O(a)){
        adj(a.x)
        adj(a.y)
        return a
    }

    return a<=10?a*=100: a
}

//logic
ff=function f(a){return new $F(
    "a","b","c","d","e","var g=G(arguments),"+
        "t=this;"+a+";return t")}
ffr=function f(a){return new $F(
    "a","b","c","d","e","var g=G(arguments);return("+a+")")}

$do=function(b,f){
    if(F(f)){f(b)}
    if(S(f)){window[f]=b}
    return b}

X=function X(c){

    if(O(c)){//if(c.name='x'){return c.x}

        if(c.canvas){return c}
        if(C(c)){return C(c).getContext('2d')}


        if(c.x){return X(c.x)}
        if(c.q){return X(c.q)}
    }

}


//advanced / low-level
pxChangeData=function(d,s){
    _.each(_d(d),

        function(v,k,l){

            vkl(s)(v,k,l)

        })}
pxChangeData2=function(d,s){

    $m(
        _d(d),

            "l[k]=" + s
    )}

el.dotsX=function(){

    x.DOTS=[]

    x.dats=[]

    x.$(function(X,Y){

        x.cir(X,Y)

        x.DOTS.push( [ X, Y ] )

        x.dats.push( pI(X) )

        x.dats.push( pI(Y) )

        x.ln( x.DOTS )

    })



    x.$$(function(X,Y){var du


        //save
        x.S()

        x.closePath()

        x.q.off()

        x.q.c('X')

        du = x.du()

        x.X()

        x.clip()
        x.fit(du)
        x.bc('w')

    })

    return x}