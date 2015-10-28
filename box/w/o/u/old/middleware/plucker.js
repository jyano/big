

MW.plucker = function(q,p,n) { li('plucker'); l();l(modl,'modl'); p.l.p = q.p;  p.l.pam = q.p['pam'];
    m[modl].findOne( {name: q.pam}, function ( Z, doc ) { z(Z); if (!doc) {
    l('!doc'); q.l[modl] = q[modl] = null; n()} else {
        q.l[modl] = q[modl] = doc;}  n();})
    n();}

d(q.s);



MW.requireUser = function() {
if (q.s.u) {
    m.user.findOne({username: q.session.u} , function(Z, user){
        z(Z);  if (!user) {l('!!! USER HAS SESSION USERNAME BUT NO ACCOUNT');}
        q.U = user; n(); }) }
else {  q.f('info', 'this page happens to require that you are logged in'); l('-> login'); p.d('/login')   }
}


MW.setPage =  function (q, p, n) { var TT ; TT = true;   TEST = {test: {status: 'pass'}  }; li('setPage') ;
    S = q.session; page  = q.path;   if(TT){l(page,'page')}
    if (S.cP == page) {}
    else if (S.cP === undefined) {cP = S.cP = 'root';      }
    else { lP = S.lP = S.cP; cP = S.cP= page;  //face.cP = S.cP  ; face.lP = S.lP ;
        l('change recognized..'); l(cP, 'cP');  l(lP, 'lP'); l(S.cP, 'S.cP');  l(S.lP, 'S.lP'); }

  n(); }


/////////////////////////////////////////////////////