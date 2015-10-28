
_ee2=function d(v,a,f){a=a||'$'//if(F(a)){return d(v,'$',a)}

    if(S(f)){
        return d(v,a,function(q,x,y,e){eval(f)})}

    f=f||function(q,x,y,e){ss(q,{C:$r('c')})}

    fn=function(e){e=sE(e)

        f(qq(this),q.l()+e.x,q.t()+e.y,e.x,e.y,e)}

    return qq(v).q[oO('e',a)](fn)}

drg2=function(d){
    var q=qq( E(d)).p('a')
    q.o("md",function(q,x0,y0,x,y,e){
        var l=q.l(),t=q.t(), mx=x, my=y
        mm(function(Q,x,y,X,Y){
            q.l(l+X-mx)
            q.t(t+Y-my)})
        mu(function(h){h.q.off()})})
    return d}




$t=function(a,b){var g=G(arguments),
    t= $('<'+oO('t', a||'d')+'>'+(b||'')+'</>')

    return t}

el=function(e){return (S(e)&& $w['_'+e])?$w['_'+e]():e}
