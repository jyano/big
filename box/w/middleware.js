$l('~mw~')

var Midware = function(req, res, next){



 //   p.l  = p.locals
  //  p.r  = p.render
   // p.s  = p.send
  //  p.j= p.json
 //   p.d  = p.redirect
   // q.b  = q.body
    //q.f  = q.files
 //   q.n  = q.flash
 //   q.s  = q.session
    //q.q= q.query

   // q.p= function(a){return q.params[a]}
    //q.pm= q.params
    //q.p= q.params

    //checks session to see if user is logged in



    res.locals.loggedIn = req.loggedIn = (req.session.username)? true: false   //=  res.locals.li=  req.li

    req.username = req.session.username

   // $l('MAIN middleware says req.username = ' + req.username)

    next()
}


Midware.user =   function(req, res, next){//Midware.u =

    if( req.loggedIn){ //req.li ||

        models.user.findOne({username: req.username},

            function(err, user){

                if(err){next(err)}

                if(user){

                    req.user = res.locals.user = user   //res.locals.U = req.U =

                    req.username = res.locals.username = user.username//res.locals.u = req.u =

                    req.userId = res.locals.userId = user._id //res.locals.I = req.I =

                }

                next()

            })}




    else {
        $l('middleware says NOT logged in :(')
        res.json('guest'); return}
}//W =

 //var mP=u.mugPath;$l('mP:');$l(mP);p.l.mP=q.mP=mP;
 // $m.image.findOne({relPath:mP},function(z,d){if(!d){$l('-m')}else{$l('+m');
 // p.l.M=q.M=mug;p.l.mp=q.mp=q.M.relPath;p.l.mid=q.mid=q.M._id}n()})
 // if(!u){q.s.u=null;q.s.save(function(){p.r('guest')})}

Midware.Pics =    Midware.P = function(req, res, next){


    $m.pic.find(


        {u: req.I },


        function(err, pics){

            var array =[]

            _.each(

                pics,

                function(pic){

                    array.push(

                            _S(pic._id)  +  pic.e

                    )  // $l(    )


                })


            res.l.I = array

            next()

        })

}
Midware.pic =     Midware.p =  function(req,res,next){

    models.pic.findById(

        req.params.p,


        function(err,i){



            if(err){next(err)}



            res.locals.i =  '/'+i._id


            req.i=i


            next()

    })


}

Midware.Books =   Midware.B =function(req, res, next){

    Book.find({

            user: req.I
        },

        function(err,books){
            if(err){next(err)};
            if(!books){'no book!'}
            res.locals.books = books
            next()
        })

}

Midware.book =  Midware.book =function(req, res,next){



     models.book.findOne({

             u: req.I,

             title: req.p.t
         },


         function(err,book){ if(err){next(err)}

             res.locals.book = book

             if(req.params.n){

                 var c = res.locals.n = book.c[n]
             }

             if(res.params.h){
                 res.locals.h = c[n][h]
             }

             next()

         })
}



module.exports = Midware



