module.exports=function(){$a=a;a.p=a.post;a.g= a.get;


    $a.g('/jason', function(q,p){

        p.j({j:'hello'})

    })



    $a.g('/j', function(q,p){

        p.j({j:'hello'})

    })



    $a.g('/jap',function(q,p){p.r('wap')})
    //returns username (or guest?)



    $a.g('/wap',function(q,p){p.r('wap')})
    //returns username (or guest?)





    $a.g('/lgd',  $w.u,  function(req, res){   res.json( req.u )   })

    $a.g('/loggedIn',  $w.u,  function(req, res){   res.json( req.u )   })





    //delete user
    $a.p('/rmU',function(q,p,n){$l(q.b);  $m.user.remove(q.b,function(z,u){p.j(z?z:u)})})
    //create new user
    $a.p('/nU',function(q,p,n){$l('u/p');$d(q.b)
        $m.user.create(q.b,
            function(z,u){
            if(z){if(z.code==11000){$l('!!')}
                else{$l('!')}
                $d(z);p.j('error');n(z)}

            else {

                q.s.u=u.u
                q.s.li=true
                q.s.save(function(){p.j(u.u)})}})})
    //login/security
    $a.p('/li',function(q,p,n){ $m.user.findOne({u:q.b.u, p:q.b.p },

        function(z,u){if(z){n(z)}
                if(!u){p.j('guest')} else{
                    q.s.u=u.u;
                    q.s.li=true;
                    q.s.save(function(){p.j(u.u)})}})})
    //logout
    $a.g('/lo',$w.u,function(q,p,n){$l('lo')

        q.s.u=null;
        q.s.li=false;

        q.s.save(function(){p.j('false')})})

    //sends user list
    $a.g('/gU',function(q,p,n){
        $m.user.find(function(z,u){if(u){
            p.j(_.map(u,function(u){return {
                u:u.u, m:u.m, i:u.i}}))}})})
    //find one user
    $a.g('/me',$w.u,function(q,p,n){
        $m.user.findOne({
            _id:q.I},function(z,u){
            p.j(u)})})

/////////////////////////////


    //upload pic
    $a.p('/upl',W.u,function(q,p,n){

        l('/upl')

        if(q.f.png){q.f.i= q.f.png}

        if(!q.f){l('!qf')
            p.j('no f');return}

        if(!q.f.i){
            l('!qfi')
            p.j('no i'); return}


        l('/upl')



        var i=q.f.i,
            op=i.path

        $m.pic.create({u:q.I,n:i.name,s:i.size,m:i.lastModifiedDate,e:pt.e(op)||'.png'},
            function(z,i){
                $d(i)

                i.p=pt.r(op,'../../p/',i._id.toString())+i.e;$d(i.p)
                fs.r(op,function(z,f){fs.w(i.p,f,function(z){

                    i.save(function(z){

                        if(z){

                            n(z)

                        }

                        else{
                            p.d('back')}})})})})})
    $a.p('/uplI',W.u,function(q,p,n){

        l('/upl')

        if(q.f.png){q.f.i= q.f.png}



        var i=q.f.i, op=i.path

        $m.img.create({ u:q.I,  d:q.du  },


            function(z,i){$d(i)
                i.p=pt.r(op,'../../p/',i._id.toString())+i.e;$d(i.p)
                fs.r(op,function(z,f){fs.w(i.p,f,function(z){

                    i.save(function(z){

                        if(z){n(z)}


                        else{ p.d('back')

                        }})})})})})



    //new image

    $a.p('/img',
        $w.u,
        function(q,p,n){


        $m.img.create({
                u:q.u,
                d:q.b.d
            },

            function(z,u){p.j(u)})

        })





    $a.p('/rmI',function(q,p,n){$l(q.b);$m.img.findByIdAndRemove(q.b._id,function(z,img){p.j(img)})})
    $a.p('/rmPI',function(q,p,n){$m.pic.remove(q.b,function(z,pics){})})
    $a.p('/rmP',function(q,p,n){$m.pic.remove(q.b,function(z,pics){})})


    //sends all pic objs
    $a.g('/pix',function(q,p,n){
        $m.pic.find(function(z,pp){
            p.j(pp)})})//$a.g('/pixI',function(q,p,n){$m.pic.find(function(z,pp){p.j(pp)})})

    //sends user THEIR pic objs
    $a.g('/mypix',$w.u,function(q,p,n){
        $m.pic.find({u:q.I},function(z,pp){p.j(pp)})})//$a.g('/mypixI',$w.u,function(q,p,n){$m.pic.find({u:q.I},function(z,pp){p.j(pp)})})

    //ART->  // send user THEIR image objects (including durls)
    $a.g('/img',$w.u,function(q,p,n){
        $m.img.find({u:q.u},
            function(z,i){
                p.j(i)})})



    //return user THEIR mug ob (if im) or mugID
    $a.g('/gMg',$w.u,function(q,p,n){
        p.j(q.U.m)})

    //return user THEIR mug ob


    $a.g('/gMg2',$w.u,function(q,p,n){
        $m.img.findById(
            q.U.m, function(m){p.j(m)})})

    //get a durl from an img-ob id
    $a.p('/dud',function(q,p,n){
        $m.img.findById(q.b.d,
            function(z,d){p.j(d.d)})

    })


    //update/change which pic/img is their designated mug pic/img
    $a.p('/chMg',$w.u,function(q,p,n){
        q.U.m=q.b.m
        q.U.save(function(z,u){p.j(u.m)})})


    //get a user's durl by a username id

    $a.p('/mug',function(q,p,n){
        $m.user.findOne(q.b,
            function(z,u){


                if(z){
                    l('z');l(z)}

                if(u){
                    l('u');l(u)
                    $m.img.findById(u.m,

                        function(z,d){p.j(d.d)})}



            })})




    $a.g('/users',function(q,p,n){ $m.user.find(function(z,u){  p.j(u) }) })

    l(gz.x)

    $a.g('/gz',function(q,p){

        p.j(gz)


    })






///////////
    $a.p('/nMsg',function(q,p,n){
        sis.remove(q.b, function(z,s){
            sis.find(function(z,s){
                p.j(s)})
        })})


    $a.g('/lib',function(q,p){p.r('lib')})
    $a.g('/border',function(q,p){p.r('border')}) //an animation
    $a.g('/anon',function(q,p){p.r('anon')}) //an animation
    $a.g('/barney',function(q,p,n){p.r('barney')})



}




