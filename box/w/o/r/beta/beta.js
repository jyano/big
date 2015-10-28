module.exports = function (){        var TT ;  TT = true;   TEST = {test: {status: 'pass'}  }; li('ranky.js'); l();
///////////////////////////////////////////////////////////////

    a.g('/ranky', MW.setPage, function(q,p,n){li('ranky'); //
       m.topic.find( {} ,function (Z,D) {
            z(Z);   topics = D;    d(topics, 'topics');
            R (      'db/ranky/ranky', { js:['/sites/ranky'],  topics:topics, hideHeader:true }      )
        })
     })//

    a.g('/ranky/:pam',      MW.setPage,     // plucker('topic'),
        function(q,p,n){    if(TT){ li('/ranky/:pam');  d( q.params,'q.params'); d(q.p,'q.p');  d( pams,'pams');          }
            top = q.params['pam']  ; if(TT){l(top,'topic');  }
            m.topic.findOne( {name: top}, function ( Z, doc ) {
                z(Z);
                 if (!doc) { if(TT){l('topic new');}     m.topic.create ({name: top }  ,  function(Z, doc){    z(Z);  if(TT){d(doc, 'D');};    goto('/ranky/' + top)    })     }
                else {   if(TT){  d(doc, 'topic exists'); };   R('db/ranky/page'  , {topic: doc, js:['/sites/ranky'],hideHeader:true }) }
            })          }   )

    a.g('/ranky/:topic/:msgId',      MW.setPage,                   //plucker(),
        function(q,p,n){          if(TT){         li('/ranky/:t/:m');    d( q.params,'q.params'); d(q.p,'q.p');  d( pams,'pams');         }
            m.topic.findOne( {name: q.params['topic']}, function ( Z, doc ) {
                z(Z);
                if (!doc) { l('!doc'); }
                else {
                   topic = doc;
                   msgId = q.params['msgId'];    if (TT){l(msgId,'msgId')}
                   message = doc.messages.id(msgId);     if (TT){l(message,'message')}
                   R ('db/ranky/mPage'  , {topic: topic, message: message,js:['/sites/ranky'], hideHeader:true})
               }
            })
        })

    a.post('/ranky/message/po', function(q,p,n){   li('/ranky/message/po'); d(B,'B');
      m.topic.findOne( {name: B.topic}, function ( Z, doc ) {
            z(Z); if (!doc) {l('!doc');}
          if(TT){d(doc,'doc');}
            doc.messages.push( {value: B.message} );
            doc.save(function(Z, doc){
                if(TT){d(doc,'saved doc');}
                goto(S.cP);                                             })                           })          })

    a.post('/ranky/response/po', function(q,p,n){   li('/ranky/response/po'); d(B,'B');
        m.topic.findOne( {name: B.topic}, function ( Z, doc ) {
            z(Z);       if (!doc) {l('!doc');}
            else {
                if(TT){d(doc,'doc');}
                msg = doc.messages.id(B.msgId);       if(TT){d(msg,'msg')}
                msg.responses.push( {value: B.response} );
                msg.save(  function(){   doc.save( function(){ goto(S.cP)  } )     }  )          }                                          })          })






    a.get('/items/new', function (q, p, n) {p.r('items/new-item') })
    a.get('/items/new2', function (q, p, n) { p.r('items/new')})
    a.get('/items', function (q, p, n) {p.r('items/index') })


    a.g('/coiny',
        MW, MW.requireUser,
        function(q,p,n){ l();l();  l("U in coiny: "); d(U);
            m.user.find().sort('username').exec(function(Z, users){
                if (Z) {sn("Z!")}
                else {  R ('db/coiny/index', {users: users, nav: {"new-term": '/coiny/new', "see-terms":'/coiny'}}) } }) })


    a.g ('/coiny/new', MW, MW.requireUser, function (q, p, n) {
        l('fields: '); d(fields) ; expect(fields).to.exist;
        l('user: '); d(U);  R ('db/coiny/new' ) })


    a.post('/coiny/term/po',
        MW, MW.requireUser,   function(q,p,n){ l("this is q.s.u in coiny/term/po: ");
            m.user.findOneAndUpdate(
                {_id: q.s.u._id}, {$push: {term: q.b}},{safe: true, upsert: true},function(err, u) {
                    console.log(err);   l('user: '); d(u);u.save();  p.d('/coiny'); }); })




    a.get('/items/new', function (q, p, n) {p.r('items/new-item') })
    a.get('/items/new2', function (q, p, n) { p.r('items/new')})
    a.get('/items', function (q, p, n) {p.r('items/index') })


    a.g('/coiny',
        MW, MW.requireUser,
        function(q,p,n){ l();l();  l("U in coiny: "); d(U);
            m.user.find().sort('username').exec(function(Z, users){
                if (Z) {sn("Z!")}
                else {  R ('db/coiny/index', {users: users, nav: {"new-term": '/coiny/new', "see-terms":'/coiny'}}) } }) })


    a.g ('/coiny/new', MW, MW.requireUser, function (q, p, n) {
        l('fields: '); d(fields) ; expect(fields).to.exist;
        l('user: '); d(U);  R ('db/coiny/new' ) })


    a.post('/coiny/term/po',
        MW, MW.requireUser,   function(q,p,n){ l("this is q.s.u in coiny/term/po: ");
            m.user.findOneAndUpdate(
                {_id: q.s.u._id}, {$push: {term: q.b}},{safe: true, upsert: true},function(err, u) {
                    console.log(err);   l('user: '); d(u);u.save();  p.d('/coiny'); }); })






}///////////////////////////////////////////////////////////////////////////