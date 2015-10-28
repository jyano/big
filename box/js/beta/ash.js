ASH1=function(){


    z()

    a={}

    ash=function(){return JSON.stringify(a)}

    t=txb('ash',function(n){a[n]=[];ashy()}

    )
}
ashy1=function(a){

    a=a||$w['a']||[]

    d=_d()(br(3))

    _e(a,


        function(v,k){


            d(
                h3(k),
                br(2),
                dd=_d(),
                txb('b',function(aa){
                    a[k].push(aa)}))

            _e(v,
                function(v){

                    dd(
                        _d()(h4(v).c('r','w')).o(function(){

                            ashy(a[k])

                        })

                    )
                })



        })

    w=win(d)
}


ASH=function(){z()

    a=aaa()

    //ash=function(){return JSON.stringify(a)}

    t=txb('ash',
        function(n){
            a.c.push(aaa(n))
            ashy()
        })}

ashy=function(a){

    a=a||$w['a']||[]

    d=_d()(br(3))

    _e(a,


        function(v,k){


            d(
                h3(k),
                br(2),
                dd=_d(),
                txb('b',function(aa){

                    a[k].push(aa)

                }))

            _e(v,
                function(v){

                    dd(
                        _d()(h4(v).c('r','w')).o(function(){

                            ashy(a[k])

                        })

                    )
                })



        })

    w=win(d)
}

//_.find(a,function(a){return a.a==2})

as=function(t){
    var o=O(t)?t:{
        t:t||'test',
        c:[]
    }

    o.j=function(){$l(jS(o));return o}


    o.n=function(a){


        _e(G(arguments),function(a){
            o.c.push(as(a))
        })

        return o}



    o.a=function(a,b){
        var z=o.g(a)
        if(z){
            z.c.push(as(b))}
        return o}


    o.g=function(a){

        if(S(a)){
            return as(_.find(o.c,function(c){
                return c.t==a }))}

        var g=G(arguments),
            ar=o.g(g.f)
        _e(g.r,function(a){if(ar){ar=ar.g(a)}})}




    o.l=function(){

        d=_d().a()(
            h1(o.t),

            txb('new',function(a){ o.n(a) }),
            br(3))

        _e(o.c,

            function(c){
                d(h3(c.t))
                _e(c.c,function(c){
                    d(h4(c.t))})
                d(br(2))})


        w=win(d)}

    return o

}

