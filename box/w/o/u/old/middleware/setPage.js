module.exports =  function (q, p, n) { var TT ; TT = true;   TEST = {test: {status: 'pass'}  }; li('setPage') ;

         S = q.session;
     page  = q.path;   if(TT){l(page,'page')}

        if (S.cP == page) {
            if (TT) { l('refresh') }
        }

        else if (S.cP === undefined) {
            cP = S.cP = 'root';     if(TT){l(cP, 'cP')}
        }

        else {
            lP = S.lP = S.cP; cP = S.cP= page;
            if(TT)  { l('change recognized..'); l(cP, 'cP');  l(lP, 'lP'); l(S.cP, 'S.cP');  l(S.lP, 'S.lP');    }
        }

        //face.cP = S.cP  ; face.lP = S.lP ;

    n();






}  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////









