module.exports = function () {     // a IS APPLICATION, WHICH WRAPS AROUND (AND HANDLES) THE ROUTER
 //   HTTP-SERVER : REGEX ROUTE HANDLING - FIRST  -- INSTALLS/CONFIGURES PATHWAYS (PROVIDES ROUTER WITH PATHS)

    l('routes');


    a.use(a.router);
    plucker = r('./wappy/plucker')     ;  setPage = r('./wappy/setPage')      ;  requireUser = r('./wappy/requireUser')
    var  p = './pathways/pathways/' ;
    var dirs = fs.readdirSync(p).map(function(dir){return path.join(p, dir)}).filter(function (file) {
        return fs.statSync(file).isDirectory()}); d(dirs) ;
    _.each(dirs, function(dir){
        _.each( fs.readdirSync(dir),  function(file){
            var controller = path.resolve(path.join(dir, file))
             d(controller);r(controller)(a);
        })
    })
    a.get("/y"  , function(q,p,n){console.log('w/:site');p.render('yanocode')})
    a.get("/w/y/:site"  , function(q,p,n){console.log('w/:site');p.render('yano/' +  q.params['site'])})
    a.get("/w/g/:site"  , function(q,p,n){console.log('w/:site'); p.render('graphics/' +  q.params['site'])})
    a.get("/w/s/:site"  , function(q,p,n){console.log('w/:site');p.render('sockets/' +  q.params['site'])})


    _.each(['/../mind/emotions/', '/../mind/img/', '/../mind/emotions/mugs', '/../mind/emotions/art/',
            '/../development/', '/../development/client/' ,
            '/../../pathways/' ,  '/../../pathways/dendrites/',  '/../../wapps/lib/javascript/'],
            function(dir){a.use(e.static(path.join(__dirname, dir)));}
    )
    httpServer = http.createServer(a)
    io = sio.listen(httpServer);   io.set('log level', 1);
    ioio = new SessionSockets(io, mongoStore, cookieParser);







}