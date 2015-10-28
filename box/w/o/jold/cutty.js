


CUT=function(c){
    c.i()
    c.j()
    c.$(function(x,y){c.pp(x,y)})
    c.$$(function(x,y){c.cut()})
    $P=[]}


cutty=function(){
//good **** //extend path//restroke to show new seg
//add new pt to arr  //p gets set to FIRST pt

    //p=cl=0

    vx=[]

    c=C(400,'b')

        c.pp()({ss:'y',lw:4}).P()

    im('me',function(i){
        c.df(i)
        c.c()})

    c.$(function(x,y){
        if(cl==true){clip()}
        else{c.k(x,y).k()
            vx.push([x,y]);
            if(!p){p=[x,y]}
            else if(x<p[0]&&y<p[1]){
                cl=true}}})

    clip=function(){
        var f=_.f(vx), v=_.rs(vx)
        c._()
        c.P().k(f[0],f[1])
        _e(v,function(v){c.k(v[0],v[1])})
        x.P(0)
        x.P('!')
        x.p()}


    dst=function(a,b,c,d){
        var q=function(a){return a*a}
        return $M.q(q(a-c)+q(b-d))}

 makeDot=function(X,Y){o.dc(x,X,Y)
    Dots.push({x:X,y:Y})}
    //sy(c,'white','black',3);


o={}

    x.pp=function(a,b){return o.x.isPointInPath(a,b)}

    x.makeDot2=function(x,y){
        this.dc(x,y)
        $P.push({x:x, y:y})}

        //sy(c,'white','black',3);


    x.clPth=function(c,p){
    p1=p.shift()
    x('m',  p1.x, p1.y)
    _e(p, function(p){
        x.('l', p.x, p.y)
        x.('c')
          p=[]}) }

    x.cut=function(){
    return o.X().clPath()
        .copy().paste().Im()}}

ppa=makeDot=function(X,Y){dc(x,X,Y)
    Dots.push({x:X, y:Y} )} //sy(c,'white','black',3);


cut=function(){
    x('m', p1.x, p1.y)
    _e(p, function(p){x('l',p.x, p.y)})
    x('c')
    p=[] //o('f')?
    return X().clPath().copy().paste().Im() }


    // i have a clipping region AROUND the face; before, i set the clip region, i should copy the whole image,
    // then make the whole thing transparent
    //then clip; then redraw the image


