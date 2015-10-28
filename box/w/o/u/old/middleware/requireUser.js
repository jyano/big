module.exports = function  (q, p, n)  { l('rU');


                d(q.s);


        if (q.s.u) {
            m.user.findOne({username: q.session.u} , function(Z, user){
                z(Z);
                if (!user) {l('!!! USER HAS SESSION USERNAME BUT NO ACCOUNT');}
                q.U = user;     n();
            })

        }




        else {     q.f('info', 'this page happens to require that you are logged in'); l('-> login'); p.d('/login')   }

        l('rU');









}