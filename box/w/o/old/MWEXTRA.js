
//////////////////////////////////////////   E O F    /////////////////////////////////////////////////////////////////////
//MW.requireUser = function(q,p,n) {$l('reqUser'); if (!q.s.u){q.f('info', 'this page happens to require that you are logged in');$l('->login');p.d('/login')} else{n();}}
//MW.setPage=function(q,p,n){li('setPage'); page=q.path;if(q.s.cP==page){} else if (q.s.cP === undefined){cP= q.s.cP='root';} else {lP= q.s.lP= q.s.cP;cP= q.s.cP=page;  //p.l.cP = S.cP  ; p.l.lP = S.lP ; $l('change recognized..');$l(cP,'cP');$l(lP,'lP');$l(q.s.cP,'q.s.cP');$l(q.s.lP,'q.s.lP');  }n();}
//MW.lU = MW.loadUser=function(q,p,n){ $l('lU'); n();}      //  handled by MW !!!!



conflict  =function(){p.s('Yonflict!',409)};
notFound  =function(){ p.s('Yile yot yin yatabase!',404)};


cr=function(M,o,ko,ok){//M=model
    ko=df(ko,function(x){if(x){if(x.code==11000){conflict()}else{n(x)}}});
    ok=df(ok,function(){});
    M.create(o,function(x){ko(x);ok()})}
po=function(M,o,p){
    p=p||'/';
    cr(M,o,function(){p.d(p)})}
//shortcut for posting .. sp. model and obj (as above), and also route to redirect to (on success) (uses cr's default z-handling) ' + '
//specify a model and an 'instance-to-be' object, and cr instantiates a new instance and inserts it into db (auto-handles errors)
//fxn that wraps g's == findOne ==
fo=function(M,obj,ok,ko){
    ok=ok||function(d){D=q.doc=d};
    ko=ko||function(x,d){
        z(x);
        if(!d){notFound()}};
    M.findOne(o,function(x,d){ko(x,d);ok(d)})}



W.pamPr=function(q,p,n){p.l.pam=q.p['pam'];
    m[M].findOne({name:q.pam},function(x,d){z(x);
        if(!d){q.l[M]=q[M]=null;n()}
        else{q.l[M]=q[M]=d}
        n()})};



pamPluck  =function(M){var o={};   for(var f in q.p){o[f]= q.p[f]}; fo(M,o)}//f-field



// makes an obj by duplicating key/values of req.params, and then calls fOne on a model you sp, passing in that obj
// (which assigns the successfully found doc to D

// p.l.fields=fields;          p.l.S=p.l.ss=p.l.session=q.s;     p.l.cP=q.s.cP;p.l.lP=q.s.lP;
