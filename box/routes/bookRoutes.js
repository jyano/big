module.exports=function(){

    $a.get('/testBook',function(req, res, n){

        res.json([

            {t:'sss', iD:false},
            {t:'sfs', iD:true},
            {t:'ssass', iD:false},
        ])

    })

    //book
    $a.get('/books', $w.user, function(q,p,n){
        Book.find({author: q.I})
            .populate('author').execFind(
            function(z,bs){p.j(bs)})})
    $a.get('/chapters',$w.user,function(q,p,n){
        Chapter.find({book:q.q.b},
            function(z,ch){p.j(ch)})})
    $a.get('/pages',$w.user,function(q,p,n){
        Page.find({chapter:q.q.c},
            function(z,ch){p.j(ch)})})
    $a.post('/newBook',$w.user,function(q,p,n){$l(bk={name:q.b.n,author:q.I})
        Book.create(bk,
            function(z,b){
                $l(z)
                p.j(b)})})
    $a.post('/delBook',  $w.user,function(req, res, n){

                $l(req.body)

        Book.findByIdAndRemove(req.body.book,
            function(err, data){

                res.json(data)

        })

    })
    $a.post('/delChapter',  $w.user,  function(req,res,n){

            $l(req.body)

            Chapter.findByIdAndRemove(req.body.content,
                function(err,data){

                   res.json(data)

                })

        })
    $a.post('/newChapter',$w.user,function(q,p,n){
        $l(ch={title:q.b.t,book:q.b.b})
        Chapter.create(ch,function(z,c){p.j(c)})})
    $a.post('/newPage',$w.user,function(q,p,n){
        $l(pg={
            name:q.b.n, chapter:q.b.c
        })

        Page.create(pg,
            function(z,c){p.j(c)}
        )})


    //objects
    $a.post('/newObj', $w.user, function(q,p,n){

        var o={

            t:q.b.t,
            u:q.u,
            c:'',
            i:[]
        }


        $l(o)



        MC.connect(mUrl,
            function(z,db){if(z)throw z

                 var cl=db.collection('objs')

                 cl.insert(o,function(){})
                // {name:'rigo', game:'shmigo'},
                // {name:'jason',   game:'shmason',  kids:[{s:0},{s:1}]   },
                // cl.remove({},
                // function(z,d){
                //  cl.count(function(z,c){l('count: '+c)})
                // cl.find({  name:'jason'  })
                    // cl.update({name:'jason'}, {$set: {a:{name:'ya',game:'na'}}},function(z,r){
                   // .toArray(function(z,r){  l(r); db.close()  })
            // })
         })

    })
    $a.get('/objects',  $w.user,function(q,p,n){

        MC.connect(mUrl,
            function(z,db){if(z)throw z

                var cl=db.collection('objs')

                cl.find({u:u}).toArray(function(z,r){
                    l(r);
                    p.j(r)
                    db.close()  })
                // })
            })

    })


    //dirtpage
    $a.get('/messages', function(q,p,n){

        var topic=  q.params['topic']
        console.log(
            topic
        )


        $m['Message'].find({},

            function(err, messages){

                if(err){console.log(err)}
                console.log(messages.length)

                p.j(messages)
            })

    })
    $a.post('/messages', function(q,p,n){

        var topic=q.body.topic
        console.log(topic)

        var message=q.body.message
        console.log(message)

        $m['Message'].create(
            {topic:topic, message:message},
            function(err, message){

                p.j(message)})

    })
    $a.get('/topics/:topic', function(q,p,n){

        var topic=  q.params['topic']
        console.log(
          topic
        )


        $m['Message'].find({topic:topic},

            function(err, messages){

                if(err){console.log(err)}
                console.log(messages.length)

                p.j(messages)
            })

    })






}


