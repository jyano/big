module.exports=function(q,p,n){l('wapps!!!');       // worky, ranky, gamey ! :)// put flash messaging into mw?



    a.g('/cappy',W.u,W.P,function(q,p,n){p.r('cappy')})

    a.g('/roomy',function(q,p,n){p.r('roomy')})
    a.g('/mappy/newPlayer/:uid',function(q,p,n){
        m.user.find({username: q.params['uid']},function(z,u){
            p.r('newPlayer',{user:u})})})
                        //
        a.g('/muggy',W.u,function(q,p,n){p.r('muggy')})
         a.g('/game',W.u,function(q,p,n){p.r('game')})
        a.g('/wappy',W.u,function(q,p){p.r('wappy')})
    a.g('/transform',W.u,function(q,p,n){p.r('transform')})// a.g('/transcut:p', W.u, W.p, function(q,p,n){l('transcut'); p.r('transcut')})
        a.g('/cutty',W.u,function(q,p,n){p.r('cutouts')})
    a.g('/mappy',W.u,W.P,function(q,p,n){
        p.r('mappy')})

    a.g('/pics/:s?',W.u,W.P,function(q,p,n){
        p.r('pics',{size:q.p['s']})})

    a.g('/pics/del/:p',W.u,W.p,function(q,p,n){
        F.u( q.p.fullPath, function(z){if(z)throw z;
            m.pic.remove({_id:q.p._id},function(z){
                if(!z){p.d('/pics')}else{d(z)}})})})
    a.g('/set/:p',W.u,W.p,function(q,p,n){
        q.U.mugPath=q.p.relPath;
        q.U.save(function(){p.d('back')})})
    a.g('/cutty/:p',W.u,W.p,function(q,p,n){p.r('cutty')})
    a.g('/transcut:p',W.u,W.p,function(q,p,n){p.r('transcut')})
                           //
    a.g('/transform/:p',W.u,W.P,W.p,function(q,p,n){p.r('transform')})
        a.g('/cappy/:p',W.u,W.P,W.p,function(q,p,n){p.r('toony')})
         a.g('/ZZZ/:p?',W.u,W.P,W.p,function(q,p,n){p.r('ZZZ')})
   a.g('/muggyEdit/:p?',W.u,W.P,W.p,function(q,p,n){p.r('muggyEdit')})










    a.g('/muggy/profile',W.u,function(q,p,n){
        m.profile.findOne({user: q.U._id},function(z,p){if(z){n(z)};
            if(!p){
                m.profile.create({user:q.U._id},function(z,d){if(z){n(z)};
                    p.d('/muggy/profile')})}
            else {p.d('db/muggy/profile',{profile:p,fd:p.fields})}})})

    a.g('/muggy/profile/edit',W.u,function(q,p,n){li('/muggy/profile/edit');
        d(q.U.username,'user (q.U.username)');
        m.profile.findOne({user:q.U._id},function(Z,p){z(Z);
            if(!p){m.profile.create({user:q.U._id },function(Z,d){z(Z);
                goto('/muggy/profile')})}
            else {p.r('db/muggy/editProfile',{profile:p,fd:p.fields})}})})//

    a.g('/muggy/mug/edit',W.u,function(q,p,n){
        m.profile.findOne({user:q.U._id},function(z,p){if(z){n(z)};
            if(!p){m.profile.create({user:q.U._id},function(z,d){
               if(z){n(z)};p.r('/muggy/profile')})}
            else {p=_.toArray(p.fields)};
            p.r('db/muggy/editMug',
                {profile:p.fields})})})


    a.post('/muggy/message/po',function(q,p,n){d(B,'B');
        m.topic.findOne({name:B.topic},function(Z,d){
            z(Z);if(!d){l('-d');}
            d.messages.push({value:B.message});
            d.save(function(Z, d){p.d(S.cP)})})})



a.post('/muggy/response/po',function(q,p,n){d(B,'B');
        m.topic.findOne({name:B.topic},function(z,d){
            if(z){n(z)};msg=d.messages.id(B.msgId);
            msg.responses.push({value:B.response});
            msg.save(function(){d.save(function(){p.d(S.cP)})})})})


    a.p('/cappy',W.u,function(q,p,n){
        var I=q.f.img, P=path.basename(I.path);
        m.image.create({user:q.ud,path:P,fileObject:I,originalFileName:I.name},
            function(z,d){
                if(z){n(z)}
                else{q.fl('info','file uploaded:'+P);p.d('back')}})})
    a.p('/cutty',W.u,function(q,p,n){var I =q.f.cut, P=I.path+'.png';// fs.rename(path, path + '.png', function (err){ p.d('/cutty')});
        fs.readFile(I.path,function(z,d){fs.writeFile(P,d,function(z){p.D('back')})})})




}




//a.g('/popbomb',function(q,p,n){ p.r('admin/pop',{js:['shake','roomy'],env:{notice:'nice try!',text:'helloooooooooo'},notice:'HELLZ YEA',nav:{pb:{'test':'/test','fun':'http://www.google.com'}}})})
//a.g('/chat',function(q,p,n){p.r('chat/chat',{js:['roomy'],bone:'chat',nav:{pb:{'test':'/test','fun':'http://www.playboy.com'}}})})// chat/lonelychat


/// EOF
  //  m.user.findOne({'username': q.s.u.username}, function(z,user){}
    //        user.mugPath = __dirname + '/../../../brain/mind/emotions/mugs/pathString'  + 'q.s.u'+ "-" + mug.name;
      //      user.save(function();
        //        fs.rename(mug.path, newPath, function (){
          //          p.d("/upload/pic");});})})});

      //  p.r('test/postingForms' , {js:['test/postingForms']}) ;  a.get('/postingForms', function(q,p,n) {p.r('test/postingForms' )}) ;  a.post('/postingForms',  function(q,p,n) {d(q.b);  })
     //receives uploaded image file,assigns it to ob: 'image',creates a db image ob,
    // assigning it the express image-ob  and sets 'path' = that-file's-public-URL//d(image, 'image');
   //k.emit('devObjs'   [q.s, q.files]  )
  //dN = __dirname;  pathString = "/../../../brain/mind/img/";  newPathString = dN + pathString; d(newPathString, 'newPathString')
 //oldPath = image.path;   extension = path.extname(image.path);  newPath = __dirname + pathString  + doc._id + extension; l(newPath, 'newPath') //user:U._id (should not be nec.)
//  both deprecated by upload  ?  yes

