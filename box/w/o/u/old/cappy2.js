module.exports=function (){li('cappy.js'); //receives uploaded image file,assigns it to ob: 'image',creates a db image ob, assigning it the express image-ob  and sets 'path' = that-file's-public-URL//d(image, 'image');
//cappy

    var cty = '/sites/cutty';
    var cpy = '/sites/cappy';

//sea all imgs  (template/user gets all his image objects from the db
// AND the path to a 'selected ' image FILE)

    a.g('/cappy',MW.lU,function(q,p,n){l('cpy');d(U);p.r(cpy, {imgs:imgs})})

    a.g('/cappy/:imgPath',  MW.lU, MW.lI, function(q,p,n){l('cappy/:iP');d(U);//focus on one img                                                                        //   - template/user gets all his image objects from the db AND the path to a 'selected ' image FILE
            p.r(cpy + '/img', {imgs:imgs, imgPath:q.params['imgPath']})})

    a.g('/cutty',MW.lU,MW.lI,function(q,p,n){li('cty');    p.r(cty,{imgs:imgs})})

    a.g('/cutty/:imgP', MW.lU, MW.lI  function(q,p,n){l('cty/:iP');
            p.r(cty + '/img',{imgs:imgs , imgP:q.params['imgP']})})

    a.p('/cutty', MW.lU, function(q,p,n){l('cty.p');    // *** receives cutouts
            var img = q.files.image;
            var pth = path.basename(img.path)
            m.image.create({  user: q.ud,fileObject:img,
                              originalFileName:img.name,
                              path:pth},                   function(err,img){if(err){d(err)};
                                                           p.d("/cutty/" + pth)})})

    a.p('/cappy', MW.lU, function(q,p,n){l('p.cpy');d(q.s);d(q.files);  // upload handler
        var img = q.files.image;
        var imgObj={user:u,    path:path.basename(img.path),    fileObject:img,originalFileName:img.name};  d(imgObj);
        m.image.create(imgObj,function(err,doc){
            if(err){d(err);n(err)}
            else{p.d("/cappy",
                {msg:'file stored at path: ' + path})}})})///










        //receives uploaded image file,assigns it to ob: 'image',creates a db image ob,
        // assigning it the express image-ob  and sets 'path' = that-file's-public-URL//d(image, 'image');


        // k.emit('devObjs'   [q.s, q.files]  )





        // cutty

        //: finds all of the user's images  and passes them to template,
        //  if optional imagePath set by URL, this also is passed back ( -> images, imagePath )
        // so user gets all his image objects from the db AND the path to a ' selected ' image FILE
        //: finds all of the user's images  and passes them to template,     if optional imagePath set by URL, this also is passed back ( -> images, imagePath )
        // so user gets all his image objects from the db AND the path to a ' selected ' image FILE






        //  js: ['/test/cutty'],


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
        // l();l('path setup:'); dN = __dirname; pathString = "/../../../brain/mind/img/";  newPathString = dN + pathString; d(newPathString, 'newPathString')
        // l(); l('image upload:')    //  l();l('model creation:')     //   oldPath = image.path;  l(oldPath, 'old (current) path');  extension = path.extname(image.path); d(extension, 'extension');
        // var n = n;  // this wont work !/// l(q.s.u, 'q.s.u');  d(q.s.U, 'q.s.U') ;  d(q.U, 'q.U');   /////////////////////////////////////////////////////////////////
        // not needed? var newPath = __dirname + pathString  + doc._id + extension; l(newPath, 'newPath') //user:U._id (should not be nec.)
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // a.g('/cappy', setPage(), requireUser(), function(q,p,n)   {li ('cappy'); m.image.find(           {user: q.U._id},             function(z, images){R(         'social/cappy/index',   {user:q.s.U,  images:images,  imagePath:false}                  )})})//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




        //  js: ['/test/cappy'],




    }///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
// l();l('path setup:'); dN = __dirname; pathString = "/../../../brain/mind/img/";  newPathString = dN + pathString; d(newPathString, 'newPathString')
// l(); l('image upload:')    //  l();l('model creation:')     //   oldPath = image.path;  l(oldPath, 'old (current) path');  extension = path.extname(image.path); d(extension, 'extension');
// var n = n;  // this wont work !/// l(q.s.u, 'q.s.u');  d(q.s.U, 'q.s.U') ;  d(q.U, 'q.U');   /////////////////////////////////////////////////////////////////
// not needed? var newPath = __dirname + pathString  + doc._id + extension; l(newPath, 'newPath') //user:U._id (should not be nec.)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// a.g('/cappy', setPage(), requireUser(), function(q,p,n)   {li ('cappy'); m.image.find(           {user: q.U._id},             function(z, images){R(         'social/cappy/index',   {user:q.s.U,  images:images,  imagePath:false}                  )})})//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


