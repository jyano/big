 $a.get( '/pinball', function(req,res){  res.render('pinball')   })


// huh?
$a.get('/game/:app/:pam?', function(req, res){

    res.render('game', {  app: req.params.app,   pam: req.params.pam    })

})


$a.get('/ui/:app/:pam?', function(req, res){

    res.render('ui', {  app: req.params.app,   pam: req.params.pam    })})


////////////////
//////
////
///

$a.get('/things',    function(req,res,next){  res.render('things')   })

$a.get('/thing',    function(req,res,next){

    console.log('get thing')

    models.thing.find({},

        function(err, things){

            console.log('err: ', err)

            if(things){
                console.log('things')
                console.log(things)
                res.json( things ) }

        })   })

$a.get('/thingAdd',    function(req,res,next){

    console.log('get thing')

    models.thing.create({name:'helloAgain', age:4}, function(err, things){

        if(things){
            console.log('things')
            console.log(things)
            res.json( things ) }

    })

})

$a.post('/thing',    function(req,res,next){

    console.log('get thing')

    models.thing.create(req.body, function(err, things){

        if(things){
            console.log('things')
            console.log(things)
            res.json( things ) }

    })  })








//need to deprecate
//get a durl from an img-ob id
$a.post('/dud',   function(req,res,next){
    $l('dud')

    $l('req.body.d')
    $l(req.body.d)

    models.img.findById(

        //'54d4506172f7e12a05000012',
        req.body.d,

        function(err, data){

            $l('data: ')
            console.dir(data)

            res.send(data)
        })

})


jD=pjd=function(res, str){

    return function(err, data){

        S(str)? res.json(data[str])   : res.json(data)
    }

}


pjdX=function(res ){

    return function(err, data){  res.json(data)  }

}


find=function(m,o,f){

    if( !F(f) ){ f=pjd(f) }

    models[m].find(o, f)
}





create=function(model, req, res){

    models[model].create(

        {
            username: req.username,
            content: req.body.content
        },

        function(err, data){res.json(data)}

    )

}



createP=function(a){

    $a.post( '/'+a, $w.u,   function(q,p){

        create(a,q,p)


    })

}





cre=function(model, o, f){

    if(!F(f)){f=pjd(f)}


    models[model].create(o,f)

}

//it performs a find on a model, and returs results sorted by 'dt:-1'
//date time from most recently stamped

rec=function(model,criteria,func){ // **** making errors ******

    func= F(func)  ?func  :function(err,data){

        func.j(data) }



    models[model].find(criteria)
        .sort({dt:-1})
        .execFind(func)

}


rec1=function(a,b,f){  models[a].findOne(b).sort({dt:-1}).execFind(f)}

f1=function(m,o,f){

    if(!F(f)){f= function(err, data){  f.json(data)  }}

    models[m].findOne(o,f)
}



fById=function(m,o,f){

    $m[m].findById(o,  F(f)? f:  pjd(f)  )}

ALL=function(route, model){

    $a.get(route,   function(req, res){


        models[model].find(function(err, data){return res.json(data)})

    })
}

rmById=function(m,i,f){

    if(O(i)){i= i._id}

    if(!F(f)){f=pjd(f)}

    models[m].findByIdAndRemove(

        i,

        f
    )
}

remove=function(m,o,f){ models[m].remove(o,f) }



all=function(m, f){

    if(!F(f)){

        f=  function(err, data){  f.json(data)  }

    }

    models[m].find(f)

}
//$N=Number

//  gU= agU= function(u,f){ $a.get(u, $w.u ,f)  }
// pU= apU= function(u,f){  $a.post(u, $w.u ,f) }
//qU=qu= function(q){  return {u: q.u} }
//   qqU=function(q){return {u: q.q.u}}
//   qbu=function(q){return {u: q.b.u}}
//    qI=function(q){return  {u: q.I}}
//pjd0=function(res){return function(err, data){res.json(data[0])}}
//quc=function(q){return {u: q.u, c: q.b.c }}
