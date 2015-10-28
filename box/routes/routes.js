$l('routes.js')

module.exports=function(){

    $a.get('/play/:app/:pam?', function(req, res){

        res.render('play', {  app: req.params.app,   pam: req.params.pam    })

    })



    $a.get('/', function(req,res){  res.send('this is a test')   })
    $a.get('/wap', function(req,res){ res.render('wap') })
    $a.get('/wap/:app/:pam?', function(req, res){

        res.render('wap', {  app: req.params.app,   pam: req.params.pam    })})



    ////////// for posting/creating a new user
    $a.post('/user', function(req,res,next){


        models.user.create(req.body, function(err, user){ if(err){

                $l(err.code==11000?'!!':'!'); $d(err)
                res.json('error'); next(err)}

            else {

                //set session u=u.u (user name= user.username)
                req.session.username= req.session.u= user.u

                //set session li=true (loggedIn=true)
                req.session.loggedIn = true

                //save session and send back a json obj of username -so a string? huh?
                req.session.save(function(){ res.json(user.u)})} })

    })


    /////////////. it gives me back {id, username, mug, status}

    $a.get('/users', function(req, res){

        models.user.find( req.body,

            function(err, users){

                if(users){

                    res.json( _.map(users, function(user){

                        return {

                            id: user.id,
                            //u: user.u,
                            username: user.username,
                            //m: user.m,
                            mug: user.mug || 'no mug',

                            status: user.status || 'no status'
                        }

                    }))

                }

            })

    })
    $a.get('/user/:username', function(req, res){

        $l('/user/:username')

        models.user.findOne({username: req.params.username},

            function(err, user){

            if(user){

                   res.json({

                        id: user.id,

                        //u: user.u,
                        username: user.username,

                        //m: user.m,
                        mug: user.mug || null,

                        status: user.status || 'no status'

                   })

                }

        })

    })

    $a.post('/login',  function(req,res,next){

        $l(req.body.username)
        $l(req.body.password)

        models.user.findOne(
            { username : req.body.username ,
              password : req.body.password
            },


            function(err, user){  if(err){next(err)}

                if(!user){

                    $l('FAIL!!')
                    res.json('guest') }


                else {  // $l('logged in: ' + user + ' !')

                    req.session.username = req.session.u = user.username

                    req.session.loggedIn = req.session.li = true

                    req.session.save(function(){

                        $l('---')
                        $l('session saved')
                        $l(req.session.username)

                        $l(user.username)
                        $l('---')
                        res.json( user.username )

                    })}  })    })
    $a.get('/logOut', $w.user, function(req,res){

        $l('logging out')

        req.session.username = req.session.u = null

        req.session.loggedIn = req.session.li = false


        req.session.save(function(){

            res.json('false')

        })})
    $a.get('/loggedIn', $w.user, function(req, res){

        $l('loggedIn?')
        $l('req.loggedIn: '+req.loggedIn)
        $l('req.username: '+req.username)

        res.json(req.username)

    })

    /////
    $a.get('/myMug', $w.user, function(req,res){

        $l('--------testing myMug--------')
        $l('req.body: ' + req.body)
        $l('req.username: ' + req.username)

        models.user.findOne({username: req.username}, function(err, data){

            $l('in findOne callback')
            $l('data: ' + data)



           res.send(data.mug)


        })



    })
    $a.get('/mugByUsername/:username', function(req, res){


        $l('req.params.username: ' + req.params.username)

        models.user.findOne(

            {username: req.params.username},

            function(err, user){

               // $l(user)
               // $l(user.mug)

                res.send(user.mug)

            })})
    $a.post('/changeMug', $w.user, function(req, res){  // could be a put?

        req.user.mug =  req.body.url

        req.user.save(

            function(err, mug){  res.send(mug)   }  // i'm i using this return data on client?

        )

    })

    ///////
    //////
    ////

    //// //// //// //// //// //// //// //// //// ////

    //// //// //// //// //// //// //// ////




    ////delete user  // does this('del') work like post or get (in terms of express)?
    $a.del('/user', function(req, res, next){

        models.user.remove(req.body, function(err,data){res.json(data)})

    })



    //upload pic
    $a.post('/pic', $w.user,  function(req, res, next){  var imgFile, ext

        if(req.files.png){  req.files.i = req.files.png   }

        imgFile = req.files.i; ext = path.extname( imgFile.path ) || '.png'

        models.pic.create(

            { user: req.userId, name: imgFile.name, size: imgFile.size, modified: imgFile.lastModifiedDate, ext: ext },

            function(err, pic){ if(err){ $l(err) }

                fs.readFile(imgFile.path,  function(err, file){

                    pic.path = path.resolve( imgFile.path, '../../pics/', pic._id.toString() )  + pic.ext

                    fs.writeFile( pic.path,  file,  function(err){

                        pic.save(  function(err){ if (err){ next(err) }  else { res.redirect('back') } }) }) } )
            })

    })



    //remove a pic
    $a.del('/pic', function(req,res){

        models.pic.remove(req.body, function(err, data){
            res.json(data)
        })

    })



    //get all pics(files) (everyone's)
    $a.get('/pics', function(req, res){
        models.pic.find(  function(err, data){  res.json(data)  })
    })


    //change to get pics?
    //find all User's pics
    $a.get('/myPics', $w.user, function(req, res){

        models.pic.find({user: req.userId},
            function(err, pics){ res.json(pics)  })

    })



    ///////////////////
    ////
    //
    //upload a dataUrl!!
    $a.post('/uplI', $w.user, function(req, res, next){

        //if(req.f.png){req.f.i= q.f.png}

        // var i=req.f.i

        models.img.create(  { u: req.userId, d: req.du },  function(err, img){ //$d(img)



            fs.readFile(img.path, function(err, file){


                fs.writeFile(

                    $d(path.resolve(img.path,'../../p/', img._id.toString())+img.e),

                    file,

                    function(err){

                        img.save(function(err){ if(err){next(err)} else {res.redirect('back')}})

                    })})

        })


    })




    //************** this is where we save new cutout-images

    $a.post('/img', $w.user,  function(req, res, next){

        models.img.create(

            {
                u: req.username,

                d: req.body.d,

                dats: req.body.dats,

                username: req.username,

                data: req.body.d,

                physicsData: req.body.dats

            },



            function(err, image){ return res.json(image)  }



        ) })  //new image

    //remove an image (by id) //cutouts?
    // $a.post('/rmI', function( req, res ){   models.img.remove(  req.body,  function(err, data){res.json(data)} )  })

    $a.del('/img', function( req, res ){

        models.img.remove(req.body, function(err, data){res.json(data)} )  })
    //find all User's images?
    $a.get('/img', $w.user, function(req, res){

        models.img.find( {u: req.username},

            function(err, data){res.json(data)}  )

    })
    //find all   images on site?
    $a.get('/allImages', $w.user, function(req, res){

        models.img.find( { },

            function(err, data){res.json(data)}  )

    })
    //get all images of a sp. user
    $a.get('/images/:username', $w.user, function(req, res){

        models.img.find({username: req.params.username },

            function(err, data){res.json(data)}  )

    })


    $a.get('/myStatus', $w.user, function(req,res){
        models.user.findOne({username: req.username}, function(err,data){
            res.send(data.status || 'no status')})})
    //** get a dataUrl from an img-ob id ++++ physics! //can dep by using oid's??
    $a.post('/getimagebyid', function(req,res,next){
        $l('dud')

        $l('req.body.data')
        $l(req.body.d)

        models.img.findById(

            //'54d4506172f7e12a05000012',
            req.body.data,

            function(err, data){

                $l('data: ')
                console.dir(data)

                res.send(data)
            })

    })
    $a.post('/dats', function(req,res){
        models.img.findById(  req.body.d, function(err, data){

            if(O(data)){ res.json(data) }

        })
    })


    $a.post('/changeStatus', $w.user, function(req, res){

        var status = req.body.status

        req.user.status= status
        req.user.save(
            function(err, user){res.json(user.status)}
        )


    })







}