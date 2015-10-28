
$a.g('/sis',function(q,p,n){
    sis.find(function(z,s){p.j(s)})})

$a.g('/wappy', function(q,p){p.r('wappy',{$n:q.n('n')})})


$a.g('/cappy',$w.u,function(q,p,n){p.r('cappy')})
$a.p('/cappy',$w.u,function(q,p,n){
    var I=q.f.img, P=path.basename(I.path);
    $m.image.create({user:q.ud,path:P,fileObject:I,originalFileName:I.name},
        function(z,d){if(z){n(z)}
        else{q.f$l('info','file uploaded:'+P);p.d('back')}})})


$a.g('/transform',$w.u,function(q,p,n){p.r('transform')})// $a.g('/transcut:p', $w.u, $w.p, function(q,p,n){$l('transcut'); p.r('transcut')})
$a.g('/pics/:i?', $w.u,$w.P, function(q,p,n){q.p=q.params;p.r('pics',{s:q.p.i})})

$a.g('/pics/del/:p',$w.u,$w.p,function(q,p,n){
    F.u( q.p.fullPath, function(z){if(z)throw z;
        $m.pic.remove({_id:q.p._id},function(z){
            if(!z){p.d('/pics')}else{d(z)}})})})


$a.g('/set/:i',$w.u,function(q,p,n){q.p=q.params;q.U.m='/'+q.p.i;q.U.save(function(){p.d('back')})})

$a.g('/cut',$w.u,function(q,p,n){p.r('cut')})

$a.g('/transform/:i',$w.u, $w.P, function(q,p,n){
    var i=q.params.i;p.r('transform',{i:i})})

$a.g('/cappy/:i',$w.u,$w.P,function(q,p,n){p.r('toony',{i:i})})

$a.g('/mappy',$w.u,$w.P,function(q,p,n){p.r('mappy')})

$a.g('/mappy/newPlayer/:uid',function(q,p,n){
    $m.user.find({username: q.params['uid']},function(z,u){
        p.r('newPlayer',{user:u})})})







$a.g('/muggy',$w.u,function(q,p,n){p.r('muggy')})



$a.g('/muggy/profile',$w.u,function(q,p,n){
    $m.profile.findOne({user: q.U._id},function(z,p){if(z){n(z)};
        if(!p){$m.profile.create({user:q.U._id},function(z,d){if(z){n(z)};
            p.d('/muggy/profile')})}
        else {p.d('db/muggy/profile',{profile:p,fd:p.fields})}})})




$a.g('/muggy/profile/edit',$w.u,function(q,p,n){li('/muggy/profile/edit');
    d(q.U.username,'user (q.U.username)');
    $m.profile.findOne({user:q.U._id},function(Z,p){z(Z);
        if(!p){$m.profile.create({user:q.U._id },function(Z,d){z(Z);
            goto('/muggy/profile')})}
        else {p.r('db/muggy/editProfile',{profile:p,fd:p.fields})}})})//

$a.g('/muggy/mug/edit',$w.u,function(q,p,n){
    $m.profile.findOne({user:q.U._id},function(z,p){if(z){n(z)};
        if(!p){$m.profile.create({user:q.U._id},function(z,d){
            if(z){n(z)};p.r('/muggy/profile')})}
        else {p=_.toArray(p.fields)};
        p.r('db/muggy/editMug',{profile:p.fields})})})

$a.post('/muggy/message/po',function(q,p,n){d(B,'B');
    $m.topic.findOne({name:B.topic},function(Z,d){
        z(Z);if(!d){$l('-d');}
        d.messages.push({value:B.message});
        d.save(function(Z, d){p.d(S.cP)})})})

$a.post('/muggy/response/po',function(q,p,n){d(B,'B');
    $m.topic.findOne({name:B.topic},function(z,d){
        if(z){n(z)};msg=d.messages.id(B.msgId);
        msg.responses.push({value:B.response});
        msg.save(function(){d.save(function(){p.d(S.cP)})})})})



