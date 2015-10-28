module.exports=function(){

    //get your profile
    $a.post('/getMyProfile',  $w.user,  function(req, res){

        Profile.findOne({username: req.username },

            function(err, data){

                res.json(data)

            })

    })


    //update your profile
    $a.post('/myprofile',  $w.user, function(req, res){
        Profile.findOne(
            {username: req.username},
            function(err, profile){
                if(!profile){
                    req.body.username = req.username
                    Profile.create(
                        req.body, function(){res.send('created!')})}
                else{
                    Profile.update({username: req.username},
                        req.body, function(){res.send('updated!')})}})})


    //get someones profile

    $a.get('/profile/:username', function(req, res){

        $l('/profile/:username')

        $l('req.params.username: '+ req.params.username)

        Profile.findOne({username: req.params.username}, function(err, profile){

            res.json(profile)
        })

    })
















    $a.post('/getProfile', $w.user,
        function(req, res) {

            $l('getProfile')

            var username = req.body.username || 'a'

           Profile.findOne({
                    username: username
                },

                function (err, profile) {  $l(profile)

                   res.send('yes')
                   // res.json(profile)
                })
        })



    $a.post('/updateProfile',
        $w.user, function(req, res){

            models.profile.findOneAndUpdate(
                {username: req.body.username},
                req.body.profile
            )

        })

    $a.post('/newProfile', $w.user,
        function(req,res){

            Profile.create(
                req.body.profile)

        })





//////
    ///
    ////
    ////


    //create new status


    $a.post('/status', $w.user,   function(req, res){
        req.user.status = req.body.text
        req.user.save(function(){return 'saved!'})})









    //create new post
    $a.post('/pst', $w.user, function(req, res){

        models.post.create({
                username:req.username,
                title:req.body.title,
                content:req.body.content,
                dataURL:req.body.dataURL  },

        function(){})




    })



    //get all posts
    $a.get('/posts',  $w.user,  function(req, res){

        models.posts.find(function(err, posts){res.json(posts)})  // from most recent


    })



    //get User posts (by unsername)
    $a.get('/post', $w.user, function(req, res){

        models.posts.find({username: req.username},
            function(err, posts){res.json(posts)})  // from most recent

    })


    //User recent post(s?)
    $a.get('/userRecentPosts', $w.user, function(req,res){

        models.posts.find({username: req.query.username}, // from most recent

            function(err, posts){res.json(posts)})

    })



    //rescent post(s?)
    $a.get('/postsByTitle', $w.user,function(req,res){

        models.posts.find({title: req.query.title}, function(err, posts){

            res.json(posts)
        })

    })




    //send request from User to sp. user
    $a.post('/sendRequest', $w.user, function(req, res){

        models.req.create({
                to: req.body.to,

                fr: req.u

            },

            res
        )

    })
    $a.post('/acceptRequest',$w.user,function(q,p,n){
        (q.U.buds=q.U.buds||[]).push(q.b.u)
        f1('user',{u:q.b.u},function(z,u){(u.buds||[]).push(q.u)
            u.save()})

        q.U.save()})
    $a.get('/getRequests',$w.user,function(q,p,n){find('req',{to:q.u},p)})
    $a.get('/buds',$w.user,function(req,res,next){all('user', function(err, u){

        res.j(_.filter(u, function(u){

            return _.contains(req.U.buds, u.u)}))

    })})
    $a.post('/buds',$w.user,function(req,res){

        $m.user.findOne(req.body,

            function(err, uu){ $l(uu.u)

             models.user.find(

                 function(err, u){

                    res.json(_.filter(u, function(u){

                        return _.contains(  uu.buds,   u.u    )}))

                })

            })

    })



    //send someone an email !!!!!
    $a.post('/sendMail', $w.user, function(req, res){
       models.mail.create({

                to: req.body.to,
                from: req.username,
               text: req.body.text
           },

            function(err, data){res.json(data)}

        )})



    $a.get('/gMsg', $w.user, function(req,res,next){

        var o = {}

        o.map = function(){

            emit(this.from,  {
                text: this.text,
                datetime: this.datetime

            })
        }


        o.reduce = function(k, vals){ var d

            vals.forEach(function(v){


                if(!d){

                    d = {datetime: v.datetime,  text: v.text, from:k }  }


                else if(v.datetime > d.datetime){

                    d={  datetime: v.datetime,  text: v.text, from:k }

                } })

            return d  }


       models.mail.mapReduce(o,
            function(err, reduction){
                res.json(
                    _.map(reduction, function( val ){ return val.value }))

            })
    })




    // get mail FROM User, TO a sp. user
    $a.get('/myMailFrom', $w.user, function(req,res,next){

      models.mail.find({ to: req.username, from: req.query.username },
            function(err, data){res.json(data)})})
    //get all mail TO ===or==== FROM user
    $a.get('/myMailWith',  $w.user,  function(req, res){

       models.mail.find(
            {$or : [
                {to:req.username,from:req.query.username},
                {to:req.query.username, from:req.username}
            ]},

            function(err,data){res.send(data)})

    })


    $a.get('/sentMail', $w.user, function(req,res,next){
        $l('gMsgS')  // $m.msg.find({fr:q.u}, {sort:{dt: -1 }}).distinct('fr',  pjd(p))


        models.mail.find( {from: req.username},  function(err, data){
            res.send(data)} )

    })
    $a.get('/sentMail0',$w.user, function(req,res){

        var o = {};


        o.query = {from: req.username}

        o.map = function(){
            emit(this.to, {
                text:this.text, datetime:this.datetime, from:this.from})
        }


        o.reduce=function(k, vals){

            var data

            vals.forEach(function(val){


                if(!data){

                    data={

                        datetime: val.datetime,

                        mail: val.mail,

                        to: k,

                        from: val.from

                    }

                }



                else if(val.datetime> data.datetime){

                    data={datetime:v.datetime, from: val.from,
                        mail: val.mail,
                        to:k
                    }

                } })

            return data}



        models.mail.mapReduce(o, function(err,data){//$l(r)
            // r.find().exec(     function(z,r){   p.j(r)  })

            data= _.map(data,
                function(v){return v.value})

            data.sort({datetime:1})

            res.json(data)


        })

    })










    //create new topic
    $a.post( '/topic',    $w.user,   function(req, res){

        cre('topic', {

                u:req.u, t:req.b.c

            },


            res) })
    //get all topics

   // ALL('/topic', 'topic')
    //get topic 1 ? by t?
$a.get('/topic', function(req, res){

    Topic.get(function(err, data){
        res.json(data)
    })

})


    $a.get('/topic1', function(req, res){

    models.topic.findOne({topic: req.query.topic},    function(){


    })

    })



    //post vote
    $a.post('/vote', $w.user, function(req,res){

        f1('topic', {t:req.b.t},
            function(err, t){   // if(q.b.dr=='u'){
                //  var ti = _.map(t.i, function(i){
                //      if(O(i) && i.t==q.b.i){
                //          if(q.b.dr=='u'){i.s=i.s+1}
                //          if(q.b.dr=='d'){i.s=i.s-1}}
                //     return i})


                var ti = _.map(t.i,

                    function(i){

                        if(O(i) && i.t==req.b.i){

                            if(req.b.dr=='u'){i.s=i.s+1}

                            if(req.b.dr=='d'){i.s=i.s-1}}

                        return i
                    })

                t.i=[]

                t.i= ti;

                t.save(

                    function(err,data){


                        $l('error ob:');  $l(err)

                        $l('suc ob:');  $l(data)

                        res.j(data)

                    }


                )


            })


    })



    $a.get('/book', $w.user, function(req,res,next){

      models.post.find( {username: req.username}, function(err,data){
          res.json(data)
      }) //recent?

    })


    $a.post('/newBook', $w.user,function(req,res,next){

    models.status.create({
            username:req.username,
            title: req.body.title,
            content: req.body.content},
            function(err,data){res.json(data)})})



    //post a user's item
    $a.post('/item',$w.user,function(req,res,next){

     models.topic.findOne({topic: req.body.topic}, function(err, data){
            data.items.push({
                topic:req.body.content,
                s:0})
            data.save(function(err ,data){res.json(data)})
        })

    })



    //post a user's sort  //should refernce a parent sort?!  :)
    $a.post('/sort', $w.user, function(req, res){

        models.sort.create({
            username:req.username, t:req.body.c},  function(err, data){

            res.json(data)
        })  })




    $a.get('/sort',  $w.user,  function(req,res){

       models.sort.find({username: req.username}, function(err, data){
           res.json(data)})
    })




    ////
    ////
    ///


    $a.get('/ball', function(req, res){ res.json(ball) })


    $a.post('/ball',function(req, res){

        ball.x=Number(req.body.x)
        ball.y=Number(req.body.y)
        res.json(ball)
    })



    $a.get('/godzilla',function(req,res){

        res.json(godzilla)

    })



    $a.get('/wap/workerFile', function(req,res){

        res.send('/workerFile.js')

    })








}


