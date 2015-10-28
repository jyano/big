$(function(){



        uplog=qji('/lgd','uname')
        lgd(function(d){
            if(d&&d!='guest'){enter=function(){home()
                WAPNAV()
                uplog()}
                enter()}
            else {guest()}})


})





qji=function(a,b){
    return function(){qJ(a,function(d){

            qi(b)(d)
        }
    )}}



lgd=function(f){
    qJ('/lgd',f||function(d){
        pop(d)})}





home=function(){var g=G(arguments)

    $(function(){z('o')
        uplog();WAPNAV();uplog()    })}


log=function(c){return sp('?').id('log').c(c||'g').M(10).P(10)}

lO=function(){qJ('/lo',function(){uplog();guest()})}

fg=function(a){var g=G(arguments),d=dk('fg');_e(g,function(v){d(v)});return d}

nU=function(a,b,c){if(S(a)){return nU({u:a,p:b},c)}
    qP('/nU',a,b)}



guest=function(){z('r')

    CT(
        HD(ul().k('n np pr')(lik('home','+'),lik('About'),lik('Contact')),
            h1('wappy yo yo yo')),
        JT('Welcome to wappy','so great!',bt('log in',lI,'+'),
            sp(' '),bt('sign up',sU,'+'),'+'),
        ROW(h1('fun!'),_d()(h4('graphics'),pg('cool cool cool'),h4('social'),pg('cool cool'))),
        FT('&copy;2013')

    ).pp().drg().c('o').s('a',.9).t(100).l(100)}




shPx=function(){
    home()
    qG('/myPix', function(p){var t=80

    _e(p,function(p){dva().auto().c('b')(

            qim(p._id+p.e).w(160).h(160).o(function(q){

                chMg(p._id+p.e)

                picsBlue=function(){
                    _e($('.pic'),function(q){qq(q).c('b')})}

                picsBlue()

                q.pa().c('y')}),

            bt('X').o(function(q){

                   qP('/rmP',{_id:p._id })
                   q.pa().X()}))

    .a().l(20).t(t).P(20).k('pic')

        t+=220})})}


mgc=function(){
    Mg(function(m){
 _e($('.pic'),function(p){var q=qq(p)
       $l(crs(q.ch()[0].src))
          $l(m)

     if(crs(q.ch()[0].src)==_b(m,'.')){q.c('b')}
         else{q.c('y')}})})}

Mg=function(f){  var g=G(arguments)

    if(U(g[0])){

    if(g.p){f=function(a){qq(im(a)).a().drg()}}
      else{f=function(a){
        $l(a)
        pim(a)}}}


    qG('/gMg',f )}

chMg=function(a,f){qP('/chMg',{m:a},f)}

fU=function(){

    var fup=function(l,h){

        var ipf=function(a){return ip('f').id(a).nm('i')},
            d=fg(lb(D(l)?l:'upload file',
                'upl').k('ctl').f(20),ipf('upl'))

        if(h){d(pg(['hb'],h))}

        return d}


    pop(form().mpfd().act('/upl')(fup(''),sm('do it')),
        {t:'upload a new pic, yo'}).drg()}



//svX=function(a){ uuu(a)}




sv2=function(a){
    XH=function(){var x=new XMLHttpRequest()
        x.o=function(a,b){x.open(a,b);return x}
        x.l=function(f){x.onload=f;return x}
        x.s=function(a,b){x.send(a,b);return x}
        return x}

    FD=function(){var d=new FormData();
        d.a=function(a,b){d.append(a,b);return d};return d}

    XH().l( function(){
        $l('up')
        // shPx
    }).o(  "POST", '/upl' ).s(FD().a('png',a))


}




cut=function(){
    home()
    Mg(function(m){
    dv('o',500,200).pp()(
        br(5),
        bt('save',function(){

            x.sv()
            x.rm()

            setTimeout(ART,1000)

        }),

        (x=xx(c=_c().a().c('w').id('cut'))
            .w(700).h(700).f(m).dots()).c)})}


mugHeader=function(){

    return row(

        col(2).k('tc')(
            qim('me').Z(.7),
            h5('hi')),

        col(3)(
            h4('pics'),
            h5('place to upload'))

    ).a()()}



