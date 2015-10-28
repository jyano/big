function $l(a,b){if(!b){console.log(a);return a}else{console.log('{'+a+':'+b+'}');return b}};
function $d(a,b){if(!b){console.dir(a);return a}else{l(a);return d(b)}}


module.exports = function () {$l('worky');


//$a.g('/worky2',W.u, function(q,p,n){$m.book.find({u:q.I},function(x,b){if(x){n(x)};p.r('worky/index',{B:b})})})


    $a.g('/worky',W.u,W.B,
    function(q,p,n){
        p.r('worky/index')})


    $a.g('/worky/:t',W.u,W.B,W.b,function(q,p,n){p.r('worky/book')})
$a.g('/worky/:t/:n',W.u, W.B, W.b,function(q,p,n){q.p=q.params;
        //var c=_.find(b.c, function(c){return c.n==q.p.n});
        //if(!c){b.c.push({n:q.p.n,s:[{h:'p1',ct:'MyP'}]});b.save(function(x,d){p.d('/worky/' +b)})}
       p.r('worky/chapter')
    })


$a.g('/worky2/:t/:n',W.u, W.B, W.b,function(q,p,n){q.p=q.params;
    $m.book.findOne({t:q.p.t},
        function(x,b){if(x){n(x)};
            if(!b){$l('-b')}else{
              var c=_.find(b.c, function(c){return c.n==q.p.n});
              if(!c){b.c.push({n:q.p.n, s:[{h:'p1',ct:'MyP'}]});
                      b.save(function(x,d){p.d('/worky/' +b)})}
              else {$m.book.find({user:q.I},
                  function(x,B){
                      if(x){n(x)};$d(B);p.r('worky/c',{
                          B:B,b:b,bC:bC
                      })})}}})})
$a.g('/worky/:t/:n/:v',W.u,function(q,p,n){q.p=q.params;
    $m.book.findOne({t:(b=q.p.b)},function(x,b){
        if(x){n(x)};if(!b){$l('-b')}
    else{$l('+b',b);
                var c=_.find(b.c,function(c){return c.n== q.p.c});
                var p=_.find(c.p,function(p){return p.h==q.p.p});
                $m.book.find({u:q.I},function(x,B){if(x){n(x)};
                    p.r('worky/p',{b:b,c:c,p:p,B:B})})}})})
$a.p('/newBook',W.u,function(q,p,n){
    $m.book.create({u:q.I,t:q.b.t},function(x,b){
        if(x){n(x)};
        p.d('back')})})
$a.p('/newChapter',W.u,function(q,p,n){
        $m.book.findOne({u:q.I, t:q.b.t},
            function(x,b){if(x){n(x)};if(!b){$l('-b')}
            else{b.c.push({n:q.b.n});b.save(function(x,d){$l(d);p.d('back')})}})})
$a.p('/newPage', W.u,function(q,p,n){
        $m.book.findOne({_id:q.I, t:q.b.t},function(x,b){if(x){n(x)};
            if(!b){$l('-b')}
            else{d(b);
                bC=b.c.id(B.cId);
                bC.p.push({h:B.h,ct:B.ct})
                bk.save(function(x,b){})}})})
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

$a.p('/worky/page/updCt',function(q,p,n){
        $m.book.findOne({_id:q.b.i},
            function(z,b){if(z){n(z)};if(!b){$l('-b')}
            else{$l('+b');
                bC=b.c.id(q.b.cId);         //var c =    _.find(c, function(c){ return c.name == name; }); d(c,'c');

                cP=bC.p.id(q.b.pageId) ;

                cP.ct=q.b.ct;

                b.save(function(x,b){
                    p.d(S.cP)})}})})


    $a.p('/worky/b/del/:b', function(q,p,n){li('/worky/b/del/:b');d(B,'B');
        $m.book.findOne({t: q.params['b']}).remove(function(z,doc){
            d(doc,'removed doc');p.redirect('/worky')})})                                           //      , function ( Z, b ) {  //  z(Z); if (!b) {$l('!b');};  // if(TT) {d(b,'b');}               // b.remove( {t: b.t}, function(z, doc){  if(TT) {d(doc,'removed doc');}   p.redirect('/worky'); })
$a.p('/worky/c/del', function(q,p,n){
        t=B.bTitle;$l(t,'t'); name=B['cName'];
        li('/worky/c/del/'); d(B,'B');     $l(name,'name') ;
        $m.book.findOne({t: t},function(Z,b){z(Z); if(!b){$l('b missing')}
        d(b,'b before');
            var c=b.c ;                                                         d(c, 'c before surgery')
            var c =_.find(c, function(c){return c.name==name});         d(c,'c'); // var p = c.p  // d(p , 'p ');
            c=_.without(c, c);                                               d(c,'c after cctemy')
            b.c=c;                                                                        d(b,'b after')
            b.save(function(Z, doc){z(Z);p.d(q.s.cP)})})})                                       //   if(TT) {d(doc,'removed doc');}  p.d('/worky');      });     //      , function ( Z, b ) {  //  z(Z); if (!b) {$l('!b');};  // if(TT) {d(b,'b');}               // b.remove( {t: b.t}, function(z, doc){  if(TT) {d(doc,'removed doc');}   p.d('/worky'); })
$a.p('/worky/page/del',function(q,p,n){q.p=q.params; var c,p,ps;
$m.book.findOne({t:B.bT},
    function(x,b){if(x){n(x)};if(!b){$l('-b')};
               
        c= _.find(b.c,function(c){return c.n==B['cN']});                     //c = _.without(c, c);  d(c, 'c after cctemy')
               p       = _.find(c.p, function(p){
                                                return p.h==B['pageHeading']});
               c.p = _.without(c.p , p); b.c=c;
               b.save(function(x,b){if(x){n(x)};p.d('back')})})})

                                                          // d(b,'b before'); d(c,'c before surgery')  d(c,'c');   d(p , 'p before surgery'); d(page,'page');   d(p , 'p after pagectemy');$l('c after update: ');d(c,'c');d(b,'b after'); //   if(TT) {d(doc,'removed doc');}  p.d('/worky');      });     //      , function ( Z, b ) {  //  z(Z); if (!b) {$l('!b');};  // if(TT) {d(b,'b');}               // b.remove( {t: b.t}, function(z, doc){  if(TT) {d(doc,'removed doc');}   p.d('/worky'); })
$a.g('/worky/del/:b/:c/:p',function(q,p,n){q.p= q.params;
  $m.book.findOne({_id:q.p.b},function(x,b){
    if(x){n(x)};             
    if(!b){$l('-b')};        
    var c=_.find(b.c,function(c){return(c.n==q.p.c)});
    var p=_.find(c.p,function(p){return(p.h==q.p.p)});        
    c.p=_.without(c.p ,p);  
    b.save(function(x,b){if(x){n(x)};p.d('back')})})})                 //d(b,'b before');d(c,'c before surgery');d(p ,'p before surgery');d(c,'c');d(page,'page');d(p ,'p after pagectemy');l('c after update: ');d(c,'c');d(b, 'b after');
//if(TT) {d(doc,'removed doc');}  p.redirect('/worky');      });  //b.c = c;  //      , function ( Z, b ) {  //  z(Z); if (!b) {l('!b');};  // if(TT) {d(b,'b');}               // b.remove( {t: b.t}, function(z, doc){  if(TT) {d(doc,'removed doc');}   p.redirect('/worky'); })
}/////////////////////////