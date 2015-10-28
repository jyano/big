r = require; _ = r('./utils/underscore');  r('./utils/utils')();


MW = function (q, p, n) {
    p.l=p.locals; p.l.ss = q.s=q.session; p.r=p.render;  q.b=q.body;   q.p=q.params;     p.s=p.send;     p.d=p.redirect; q.f=q.flash;


    if (!q.s.u) {p.l.li = q.li = false} else {p.l.li = q.li = true}; n()}




MW.U = function(q,p,n) {l('MW.U');
    if (!q.s.u)  {l('guest'); p.r('guest')}
    else {m.user.findOne({username:q.s.u}, function(err,user){
        if(err){l('q.s.u?!'); d(err); n()}
        if(!user){q.s.u = null;q.s.save(function(){  n()  }   )}
        else {d(user);
                 p.l.U=q.U=user; p.l.u=q.u=q.U.username; p.l.uid=q.uid =q.U._id;

                   p.l.mugPath = q.mugPath= q.U.mugPath;


            l('MUGPATH: ') ; l(q.U.mugPath);
       //     m.image.findOne({relPath: q.U.mugPath}, function(z,mug){

         //                  if (!mug){l('no muggy')}
           //                else {l('mug');
             //                  p.l.M=q.M=mug;  p.l.mp=q.mp=q.M.relPath;  p.l.mid=q.mid=q.M._id};
                           n()
          //  })

        }})}}






MW.PIC = function(q,p,n){l('mw-PIC');

    var pic = q.params['pic'];   l(pic);

            m.pic.findById(pic, function(err,pic){
                        if(err){d(err)}
                        else{
                            if(pic){ l('found pic: ');  p.l.pic = q.pic = pic; d(q.pic);    }
                            else{'l(no pic?!!!?'}
                        }
                        n()}
            )
}







MW.PICS  = function(q,p,n){   l('mw-PICS');

            m.pic.find({user:q.uid},

                function(err,pics){

                    if (pics) { p.l.pics =  q.pics = pics}

                      else{l('no pics')}

                      n()})}













//MW.requireUser = function(q,p,n) {l('reqUser'); if (!q.s.u){q.f('info', 'this page happens to require that you are logged in');l('->login');p.d('/login')} else{n();}}




//////

MW.pamPr=function(q,p,n){l('lU');l(modl,'modl');p.l.p=q.p;p.l.pam=q.p['pam'];
    m[modl].findOne({name:q.pam},function(Z,doc){z(Z);if(!doc){l('!doc');q.l[modl]=q[modl]=null;n()}else{q.l[modl]=q[modl]=doc;}n();});n();}
MW.setPage=function(q,p,n){li('setPage'); page=q.path;if(q.s.cP==page){} else if (q.s.cP === undefined){cP= q.s.cP='root';} else {lP= q.s.lP= q.s.cP;cP= q.s.cP=page;  //p.l.cP = S.cP  ; p.l.lP = S.lP ;
l('change recognized..');l(cP,'cP');l(lP,'lP');l(q.s.cP,'q.s.cP');l(q.s.lP,'q.s.lP');  }n();}
////
module.exports = MW
//pamPluck=p.pamPluck=function(modl){var obj={}; for(var field in pams){obj[field]= pams[field]}; fOne(modl,obj);}  // makes an obj by duplicating key/values of req.params, and then calls fOne on a model you sp, passing in that obj   // (which assigns the successfully found doc to D
//   cr=create=p.cr=function(modl,object,ko,ok){ko=df(ko,function(Z){if (Z){if (Z.code == 11000){conflict();}else {n(Z);}}}); ok=df(ok, function(){});  modl.create(object,function(Z){ko(Z);ok();});}
//   po=post=p.po=function(modl,obj,face){  face=df(face,'/');  cr(modl,obj,function(){p.d(face)})}
// shortcut for posting .. sp. model and obj (as above), and also route to redirect to (on success) (uses cr's default z-handling) //specify a model and an 'instance-to-be' object, and cr instantiates a new instance and inserts it into db (auto-handles errors)
// fxn that wraps g's == findOne ==
// f1=fo=fOne=p.fo=function(modl,obj,ok,ko){df(ok,function(doc){D=q.doc=doc});df(ko,function(Z,doc){z(Z);if(!doc){notFound()}});modl.findOne(obj,function(Z,doc){ko(Z,doc);ok(doc)})}
//  p.l.fields=fields;
//  p.l.S=p.l.ss=p.l.session=q.s;
//  p.l.cP=q.s.cP;p.l.lP=q.s.lP;
// conflict =  p.cf = function(){ p.send('There was a conflict!',409)};
//  notFound = notExist = p.nf = function(){ sn('This does not exist in the db!', 404) }
// MW.lU = MW.loadUser=function(q,p,n){ l('lU'); n();}        handled by MW !!!!




///////     { var TT ; TT = true;   TEST = {test: {status: 'pass'}  };
//////////////////////////////////////////   E O F    /////////////////////////////////////////////////////////////////////

