require('./../u')();


a=e();
a.g=a.get;a.p=a.post;
a.s=a.set;a.u=a.use;
a.r=a.router;a.l=a.locals;

l('[*Wappy*]');
///
sio=r('socket.io');d(sio)
//sio.set('log level',1);

cP=e.cP('xyz');
a.s('port',process.env.PORT||4000);
a.s('view engine','jade');a.s('views',__dirname+vwS);

a.u(e.f());
a.u(e.lg('dev'));if(a.g('env')=='development'){a.u(e.eH())}
a.u(e.bP({keepExtensions:true, uploadDir:__dirname+ulS}));
a.u(e.mO());
a.u(cP);
g.cn(dbS,function(z){l('cn..')})
mS=new cM(e)({db:'brain'});a.u(e.s({store:mS}));
a.u(fl());l('\n<m>');ldM=function(M,o){for(var m in M){o[m]=g.m(m,g.s(M[m]))};return o};m=ldM(r('./models')(g),g);
l('\n<mw>');
a.u(r('./mw'));
a.u(a.r);
l('\n<r>');a.g("/w/:site",function(q,p,n){l('w/:s');p.render('pages/'+q.params['site'])});
r('./../wapps')();r('./../routes/accounts')();
rts=['/pub/bootstrap/','/pub/img/','/../javascript','/../javascript/beta',
    '/../javascript/lib','/../javascript/gx','/../javascript/utils']
_.e(rts,function(d){a.u(e.st(P.j(__dirname,d)))})
l('\n<gx>');gx=F.dirS(gS);gA=[];mf=[];_.e(gx,function(p){gA.push("{src:'/png/"+path.basename(p)+"',id:'"+ P.bn(p).split('.')[0]+"'}")});a.l.mf=d("["+gA.join()+"]");
l('\n<S>');S=H.s(a);//sio.listen(S);ssio=r('session.socket.io');IO=new ssio(sio,mS,cP);r('./socket')(IO);

S.listen(4000);






l('server listening\n-------------------------------------- play nice ---------------------------------------');l();l();l();// lll('-')(40);l('play nice');lll('-')(40)





//_.each(m,function(m){l(m.modelName)})

//connect=r('connect');
//_.e(F.dirS('./../routes'),function(f){r(P.resolve(P.j('./../routes',f)))(a)})

//vws = __dirname + '/../../skull/faces/';a.s('views', vws);  a.s('views', vws);//vws = __dirname + '/../skull/'
//sessionStore = new connect.middleware.session.MemoryStore();
//models
//uFF=function(userField){var arr=[]; uf=userField[0]; if(uf.paths){uf = uf.paths}; each (uf,function(field, index){if(index != '_id' && index!= 'stamp'){ arr.push(index)}}); return arr}
//fields = {}; each (models(mongoose).user, function(userField, index){if(_.isArray(userField)){fields[index]=uFF(userField)}});
//l('u sub-docs and fields');d(fields);  // each(m.models.user.schema, function(sm){d(sm); l();l();})  // l("  m = memory = loadIdeas( require('./../pub/thoughts/ideas')(mongoose), mongoose )")
// routes //
//var  p='./../routes/';
//var dirs = fs.readdirSync(p).map(function(dir){return path.join(p, dir)}).filter(function (file) {return fs.statSync(file).isDirectory()});d(dirs);
// _.each(dirs,function(dir){
// _.each(fs.readdirSync(dir),function(file){var controller = path.resolve(path.join(dir, file));d(controller);r(controller)(a);})})
//a.get("/y" ,function(q,p,n){console.log('w/:site');p.render('yanocode')});
//a.get("/w/y/:site"  , function(q,p,n){console.log('w/:site');p.render('yano/' +  q.params['site'])})
//a.get("/w/s/:site"  , function(q,p,n){console.log('w/:site');p.render('sites/' +  q.params['site'])})
//
// so far we have access only to client sockets// // getSession gives you an error object or the session for a given socket
//getSession = fuunction(){
//io.sockets.clients().forEach(function (socket) {sessionSockets.getSession(socket, function (err, session) {});})}
//
//d(path.resolve());
//TEST={test:{status:'pass'}};var TT=true;tx=function(s){l('test result '+s+': ')}
//H=chai=r('chai');X=expect=chai.expect;Q=request=r('superagent');N=sinon=r('sinon');
//testTT=function(){if(TT){tx('l');l('l works with one pam');l('pass', 'testing l with two pams')}}}