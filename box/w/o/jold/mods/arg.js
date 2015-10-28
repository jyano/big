

arg=function(G){


    return function(Q, doThis){

        $l(Q)

        Q = Q.split('/');
        $l(Q)

        if(Q[1]){ mop = Q.shift()||'ex' }  //;return op;


        $l(mop);  $l(Q)



        if(isNum(Q)){

            pass = numPass(Q, G)}

        else {

            Q=hop(Q[0]);  Q=haveFun(Q)

            rel=REL(G,Q); pair = makePair(G,Q)

            var o = yesNo (pair);



            ops={

                x: o(every)(yes) && rel.same,

                xf: o(every)(no) && rel.same,

                z: o(some)(no),


                //  one:a,

                //  oneWrong:,

                //  oneMissing:,


                s: o(every)(yes) && rel.notLess,
                m:      o(every)(yes) && rel.more,
                nm: o(every)(yes) && rel.notMore  }


            //return ops



            mop = mop|| 'x';

            pass = ops [mop]
        }



        if( pass ){ $l('p'); doThis() }

        else{ $l( 'f' )}

    }}





args2=function(ag){return function(spec, op, tD){
    if(!tD){ tD=op; op='pass'}
    var pairUp = function(a,b){return filter(map(zip(a,b),compact),function(a){if(_z(a)>1){return true}})},
        hydrate=function(a){return map(p0(a),function(a){if(iUp(a)){return not($w[tUp(a)])}return $w[tUp(a)]})},
        makeTest=function(a,s){return pairUp(a, hydrate(s))},
        ARGS = _z(ag), SPECS = _z(spec),more = ARGS > SPECS,less = ARGS < SPECS,theSame = ARGS == SPECS,
        notLess = ARGS >= SPECS,notMore = ARGS <= SPECS,different=!theSame,nada=ARGS== 0,
        o=function(fl, it){return bool(fl(makeTest(ag, spec), it))},
        OPS={
            pass:        o(all, beTrue).and(theSame)(),
            orLess:       o(all,beTrue).and(notMore)(),
            orMore:        o(all, beTrue).and(notLess)(),
            noFail:       o(all, beTrue)(),
            somePass:       o(some, beTrue)(),
            nonePass:       o(all, beFalse)(),
            someFail:     o(some, beFalse)(),
            fail:          o(some, beFalse).or(different)(),
            antiPass:    o(all, beFalse).and(theSame)(),
            mix:          o(some, beTrue).and( o(some,beFalse)())()}
    if(OPS[op]){tD()}}}

