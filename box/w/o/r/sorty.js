/// fix pet site and user login.. fix navbar and incorporate them   // set up redics connect per great stack overflow page
/ / how to get session ids  // track by session username


module.exports = function () {

    a.g('/pets',function(q,p,n){
        m.user.find().sort('username').exec(function(z,d){
            p.r('pets/index',{
                docs:docs,
                nav:{"new-pet":'/pets/new',"see-pets":'/pets'},
                messages:q.flash('info')})})})


    a.post('/pets/po',function(q,p,n){
        m.user.findOneAndUpdate(
            {_id: q.s.u._id},
            {$push:{pets:q.b}},
            {safe:true,upsert:true},
            function(z,d){})
    })


    // q.s.u.save()  //q.s.u.pets.push({name:"george"})  // q.s.u.pets.push(q.b)




} module.exports = function () {

    a.get('/object',   function (q, p, n) {

        p.r('db/object/object',
            {js:['sites/object'], user: q.u}  )})



    a.get('/object/delSort/*', function (q, p, n) {

        l('deleting sort: '); d(q.u.object[q.params.sort]);
        l('from: ') ;   d(q.u.object);
        l(delete q.u.object[q.params.sort])  ;
        l('is it gone? lets see: ') ; d(q.u.object); ; d(q.u.object[q.params.sort]);
        // ob[current].content = q.b.content;
        m.user.update( {_id: q.u._id}, {$set: { object: q.u.object }}, {upsert: true}, function ( z ) { if (z){d(z)}
        })  })


    a.get('/object/*',   function (q, p, n) {
        l('q.params: '); d(q.params)   ;
        pathArray = q.params[0].split('/');
        pop = pathArray.pop()
        l('highleted: '); d(pop) ; pathArray.push(pop)
        var content; var ob = q.u.object;
        _e(pathArray, function(path){content = ob[path].content;
            ob = ob[path].object;
            obName = path } )
        p.r('db/object/subobject',
            {nav:{"home":'/object'}, content:content, user: q.u,
                object: ob, obName: obName, obPath: q.params[0],  sub:pop
            })    })




    a.post('/object/po', MW.requireUser, function (q, p, n) {   /////////////////////////////////////////////////////////////////
        l('IN /OBJECT/PO');  l('user: '); d(q.u); l('session data: '); d(q.s);

        ob = q.u.sorty.object; l('ob: '); d(ob);
        d(q.b);

        SPA = q.u.sorty.SPA

        l('SPA: ');  d(SPA);

        leaf = q.b.leaf

        l('leaf to add: '); l(leaf);

        each(SPA, function(path){ob = ob[path].object;  l(path);    } )
        l('ob: '); d(ob);


        ob[leaf] = {object: {}, content:null}

        obj = q.u.sorty.object

        l('is it there? lets see: ') ; d();  d(ob[leaf]);

        m.user.update( {_id: q.u._id}, {$set: { sorty: obj }}, {upsert: true},
            function ( z ) { if (z){d(z)} l('wow'); p.d('/object/' + q.u.sorty.SPA) } )                    })



    a.post('/object/update/po', MW.requireUser, function (q, p, n) { l('IN /OBJECT/UPDATE/PO');  l('ob path: ') ; d(pathArray); d(q.b.obPath);    /////////////////////////////////////////////////////////////////
        current = pathArray.pop();                                                                          l('new patharay: '); d(pathArray); l('curr:'); d(current)
        var ob = q.u.object;       each(pathArray, function(path){ ob = ob[path].object; } )                ;l('OB: '); d(ob);
        ob[current].content = q.b.content;                                                                  l('OB: '); d(ob);
        m.user.update( {_id: q.u._id}, {$set: { object: q.u.object }}, {upsert: true},
            function ( z ) { if (z){d(z)}p.d('/object/' + q.b.obPath) } )                    })




    a.post('/object', MW.requireUser, function (q, p, n) {l('IN POST /OBJECT') ;   l('q.s.currentPage: ');  d(q.s.currentPage);   /////////////////////////////////////////////////////////////////
        SPA = q.b.SPA.split(",");  l('SPA: ');  d(SPA);
        var content;
        var ob = q.u.object;

        each(SPA, function(path){
            //content = ob[path].content;
            ob = ob[path].object; obName = path
        }) ;
        l('ob: '); d(ob);
        p.r('db/object/sort', {nav:{"home":'/object'},  user: q.u,  obPath: q.params[0],
            SPA:  SPA,    object: ob, obName: obName, js:['sites/object']                      })    })


    a.post('/sort/del',  function (q, p, n) {

        SPA = q.b.SPA.split(",");


        leaf = q.b.leaf

        var ob = q.u.object;  _e(SPA, function(path){ob = ob[path].object;      } )

        l('we will delete from this: '); d(ob);
        l('we will delete this: '); d(ob[leaf]);

        l(delete ob[leaf]);

        l('is it gone? lets see: ') ; d(q.u.object); ; d(ob[leaf]);

        // ob[current].content = q.b.content;

        m.user.update( {_id: q.u._id}, {$set: { object: q.u.object }}, {upsert: true}, function ( z ) { if (z){d(z)}

        })   })   //p.d('/object')


}

sortPathToSort   = function(sortPath, sorty) {  l('sortPathToSort function starting....');  l('sortPath: ');   d(sortPath); l('sorty: ');   d(sorty)  ;

    var sort = sorty; each(sortPath, function(node){sort = sort[node].sorty})
  l('sortPathToSort function ending and returning this: '); d(sort); return sort}


module.exports = function () { a.get('/sorty', MW.setPage, MW.requireUser, function (q, p, n) { l('IN GET SHORTY....')

        if (!q.s.sortyPath) {q.s.sortyPath = []}
        l('q.s.sortyPath: ');d(q.s.sortyPath); sP = _.clone(q.s.sortyPath)

        cookieHeads = sessPath =  q.s.sortyPath ;cookieTail = sessPath.pop() ;
        if (!cookieTail) {l('cookieTail is false'); cookieHeads = false; preSorty = false ; SORT = false}
 else {l('cookieTail is true');
            preSorty =  sortPathToSort(q.s.sortyPath, U.sorty ); l('returned to GET SHORTY from function');l('preSorty: ') ; d(preSorty) ;
                 l('cookieTail: ') ; d(cookieTail);   SORT = preSorty[cookieTail]; l('SORT: '); d(SORT) ;  }
        sorty = sortPathToSort(q.s.sortyPath, U.sorty); if (sorty == U.sorty){root = true}else{root = false}
 l('SORT2: '); d(SORT) ; p.r('db/sorty/sorty', {user: U, sorty: sorty, root:root, preSorty: preSorty, sort: SORT, cookie: sP, cookieTail:cookieTail, cookieHeads:cookieHeads }) })


    a.get('/sorty/clear', MW.requireUser, function (q, p, n) { if (!q.s.sortyPath) {q.s.sortyPath = []}
        l('in sorty/clear') ;q.u.sorty = {}; q.u.save(function(z,d){q.s.sortyPath = [];q.s.save(function(){  p.d('/sorty') }) }   ) })   ;

    a.get('/sorty/:sort', function (q, p, n) { l('IN SORTY/:SORT')
        var sort = q.params.sort          ;l('sort: '); d(sort); l('old session: '); d(q.s);  q.s.sortyPath.push(sort);    l('new session: '); l(q.s);
        q.s.save(function(){ p.d('/sorty') }) })

    a.post('/sorty/po/sub', function (q, p, n) {       l('in sorty/po') ; l('q: '); d(q.u) ; d(q.b); sorty = q.u.sorty
                sort =  sortPathToSort(q.s.sortyPath, sorty );sort[q.b.sub].sorty[q.b.name] = {item:'', sorty:{} }
           m.user.findOneAndUpdate( {_id: q.s.u._id}, {$set: {sorty: sorty}},  {safe: true, upsert: true}, function(err, model) {
             if (err) {console.log (err);} else {console.log (model)} p.d('/sorty') })  })


    a.post('/sorty/po', function (q, p, n) {       l('in sorty/po') ; l('q: '); d(q.u) ; d(q.b)
 sorty = q.u.sorty;  sort =  sortPathToSort(q.s.sortyPath, sorty );  sort[q.b.name] = {item:'', sorty:{} }

        m.user.findOneAndUpdate( {_id: q.s.u._id}, {$set: {sorty: sorty}},  {safe: true, upsert: true}, function(err, model) {
            if (err) {console.log (err);} else {console.log (model)}
            p.d('/sorty') }) })

  a.post('/sorty/viewSort', function (q, p, n) {       l('in sorty/po') ; l('q: '); d(q.u) ; d(q.b)
        d(q.s.sortyPath);     q.s.sortyPath.push(q.b.name); d(q.s.sortyPath);  q.s.save(function(){p.d('/sorty')})})

    a.post('/sorty/po/root', function (q, p, n) {       l('in sorty/po') ; l('q: '); d(q.u) ; d(q.b)

     sort =  q.u.sorty ; l('soooort: ');  d(sort);
        sort[q.b.name] = {item:'', sorty:{} }; l('again.');d(sort); d(q.u);  sorty = q.u.sorty
        m.user.findOneAndUpdate( {_id: q.s.u._id}, {$set: {sorty: sorty}},  {safe: true, upsert: true}, function(err, model) {
            if (err) {console.log (err);} else {console.log (model)};  p.d(q.s.lastPage)  })  })


    a.post('/sorty/updateSort', function (q, p, n) {       l('IN SORTY UPDATESORT') ;

        l('COOKIE PATH: ') ;  cookiePath = _.clone(q.s.sortyPath) ;
 tail = cookiePath.pop();     ; l('the tail is: '); d(tail); sort =  sortPathToSort(cookiePath, q.u.sorty );
 l('sort is: '); d(sort);sort[tail]['item'] = q.b.item; sorty = q.u.sorty

       m.user.findOneAndUpdate( {_id: q.s.u._id}, {$set: {sorty: sorty}},  {safe: true, upsert: true}, function(err, model) {
            if (err) {console.log (err);} else {console.log (model)}
  l('COOKIE PATH AT VERY END OF UPDATESORT FUNCTION: ') ; d(q.s.sortyPath) ;  p.d('/sorty')  })  })


    a.post('/sort/del', function (q, p, n) {
        m.user.findOneAndUpdate( {_id: q.s.u._id},{$pull: {sorty: q.b }} , function(err, model) {  if (err) {console.log (err);} else {console.log (model)}
                l('deleting sort.....') ;  p.d('/sorty')  }  )}) // var newdoc = parent.children.create({ name: 'Aaron' });


    a.post('/sorty/po/:sort', function (q, p, n) {   l('sorty/po/:sort : ' + q.body.text)
        ob = {};  ob.text = q.params.sort;    ob._id = q.params.sort;  if (!ob.contents) {ob.contents = []}; ob.contents.push( q.b );
  m.user.findOneAndUpdate( {_id: q.s.u._id}, {$push: {sorty: ob}},  {safe: true, upsert: true}, function(err, model) {
                if (err) {   console.log (err); } else {console.log (model) };  p.d(q.s.lastPage) }  ) })






 ////////////////////////////////////////////

  l('teachy');
    a.g('/teachy'  , MW.setPage, MW.requireUser , function (q,p,n){
        m.book.find( {user: q.U._id} , function (Z, books) { z(Z);         d(books, 'books');      R ( 'db/teachy',   {js:['/sites/ranky'], books:books} );})})


    a.g('/teachy/:book',   MW.setPage,
        function(q,p,n){     if(TT){ li('/teachy/:book');  d( q.params,'q.params'); d(q.p,'q.p');  d( pams,'pams');          }
            bk = q.params['book'];  l(bk,'bk');   m.book.findOne( {title: bk}, function ( Z, book ) {
                z(Z); if (!book) { l('new book');  m.book.create ({title: bk, user: q.U._id }  ,  function (Z, b){   if(Z) {d(Z)};  d(b, 'b'); p.d('/teachy') })  }
                else {    d(book, 'book was found');  m.book.find( {user: q.U._id} , function (Z, books) {
                    z(Z);         d(books, 'books');     p.r( 'db/teachy/book',   {js:['/sites/ranky'], book:book, books:books} ); })  }  })  })
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    a.g('/teachy/:book/:page',   MW.setPage,   function(q,p,n){       li('/teachy/:book/:page');  d( q.params,'q.params');
        bk = q.params['book']; pg = q.params['page'];  l(bk,'bk');l(pg,'pg');  k not found');} } else { if(TT){ d(book, 'book found in t/b/p'); }; // if book found ...
        bookPage = _.find(book.pages, function(page){ return page.name == pg; }); d(bookPage,'bookPage');
        if (!bookPage)   {  newPage = {name: pg,   sections:  [   { heading: 'sectionOne', content:'My first section..'}]};  book.pages.push(newPage);
            book.save(  function(Z,doc){p.d('/teachy/' + bk)}  );  }
        else     { m.book.find( {user: q.U._id} , function (Z, books) {  d(books, 'books');
            z(Z);  R ( 'db/teachy/page',   {js:['/sites/ranky'], book:book, bookPage: bookPage, books:books} );         }) }  }}) })
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

a.post('/teachy/section/po', function(q,p,n){   li('/teachy/page/po'); d(B,'B');
    m.book.findOne( {_id: B.bookId}, function ( Z, bk ) {   z(Z);       if (!bk) {l('!bk');} else {  if(TT) {d(bk,'bk');}
        bookPage = bk.pages.id(B.pageId); bookPage.sections.push({heading: B.heading, content: B.content   })
        bk.save(function(Z, doc){  d(doc,'saved doc'); p.d(S.cP); }) }  }) })

a.post('/teachy/page/po', function(q,p,n){   li('/teachy/page/po'); d(B,'B');
    m.book.findOne( {name: B.book}, function ( Z, bk ) {  z(Z); if (!bk) {l('!bk');}d(bk,'bk');
        bk.pages.push( {name : B.name} );  doc.save(function(Z, doc){d(doc,'saved doc');    p.d(S.cP);   })})})

a.post('/teachy/book/del/:book', function(q,p,n){   li('/teachy/book/del/:book'); d(B,'B');
    m.book.findOne( {title: q.params['book']}).remove(function(z, doc){  d(doc,'removed doc');  p.d('/teachy');      });  })                                           //      , function ( Z, book ) {  //  z(Z); if (!book) {l('!book');};  // if(TT) {d(book,'book');}               // book.remove( {title: book.title}, function(z, doc){  if(TT) {d(doc,'removed doc');}   p.redirect('/teachy'); })



a.post('/teachy/page/del', function(q,p,n){   li('/teachy/page/del/'); d(B,'B');
    title = B.bookTitle;   l(title, 'title') ; name = B['pageName'];     l(name, 'name') ;
    m.book.findOne( {title: title}, function(Z,book){ z(Z); if (!book){l('book missing')} else {
        d(book, 'book before'); var pages =   book.pages ;  d(pages, 'pages before surgery')
        var page =    _.find(pages, function(page){ return page.name == name; }); d(page,'page');  // var sections = page.sections  // d(sections, 'sections');
        pages = _.without(pages, page);  d(pages, 'pages after pagectemy'); book.pages = pages;
        d(book, 'book after'); book.save(function(Z, doc){z(Z) ;p.redirect(q.session.cP)  })  }})  })


a.post('/teachy/section/del', function(q,p,n){   li('/teachy/section//del/'); d(B,'B');  //   if(TT) {d(doc,'removed doc');}  p.redirect('/teachy');      });  //      , function ( Z, book ) {  //  z(Z); if (!book) {l('!book');};  // if(TT) {d(book,'book');}               // book.remove( {title: book.title}, function(z, doc){  if(TT) {d(doc,'removed doc');}   p.redirect('/teachy'); })
    title = B.bookTitle;   l(title, 'title') ;  name = B['pageName'];     l(name, 'name') ;
    m.book.findOne( {title: title}, function(Z,book){ z(Z); if (!book){l('book missing')} else {  d(book, 'book before');d(pages, 'pages before surgery')
        var pages =   book.pages ; var page =    _.find(pages, function(page){ return page.name == name; }); d(page,'page');
        pages = _.without(pages, page);  d(pages, 'pages after pagectemy')
        book.pages = pages; d(book, 'book after');
        book.save(function(Z, doc){z(Z) ;p.redirect(q.session.cP)  })  }})    })

//   if(TT) {d(doc,'removed doc');}  p.redirect('/teachy');      });  //      , function ( Z, book ) {  //  z(Z); if (!book) {l('!book');};  // if(TT) {d(book,'book');}               // book.remove( {title: book.title}, function(z, doc){  if(TT) {d(doc,'removed doc');}   p.redirect('/teachy'); })









}