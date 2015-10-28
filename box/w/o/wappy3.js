q=require
_=q('./us')
S=_.isString
U=_.isUndefined
D=function(a,b){return !U(a)}
A=_.isArray
O=_.isObject


_e=_.e=_.each
l=function(a,b){
    var l=function(a){console.log(a);return a}
    if(b){l('{'+a+':'+b+'}');return b}
    return l(a)}
smile=function(){l(':)')}
ls=function(a,b,c){return c?a.listen(b,c)
    :a.listen(b)}
s=function s(kO, v){
    if(O(kO)){_e(kO,function(v,k){s(k,v)})
    return};a.set(kO,v)}
g=function g(u,f){return f?a.get(u,f):a.get(u)}
po=function(a){return a.post(a)}
u=function u(i){if(A(i)){_e(i,u)}
    a.use(i)}
l('------- wappy --------')

d=q('mongoose')
d.s=d.Schema
d.m=d.model
d.c=d.connect

//M=$q('./models')

d.c("mongodb://localhost/brain",
    smile)



h=q('http')
h.s=h.createServer

p=q('path')
p.bn=p.basename
p.j=p.join
p.en=p.extname
p.rs=p.resolve

f=q('fs')
f.rds=f.readdirSync
f.rf=f.readFile
f.wf=f.writeFile
f.ul=f.unlink


e=q('express')
e.eh=e.errorHandler
e.l=e.logger
e.cp=e.cookieParser
e.bp=e.bodyParser
e.s=e.session
e.f=e.favicon
e.st=e.static

st=new(q('connect-mongo')(e))({db:'brain'})


a=e()
a.l=a.locals
a.r=a.router

w=q('./MW')

s({'port'        :process.env.PORT||4000,
   'view engine' :'jade',
   'views'       :__dirname+'/../v/'})

u(e.l('dev'))

if(g('env')=="development"){u(e.eh())}

cp=e.cp('xyz')

u([e.bp({keepExtensions:true,
   uploadDir:__dirname+"/p/u"}),
   cp,e.s({store:st,secret:'xyz'}),
   q('connect-flash')(),e.f(),w])

g('/w/:p',function(q,p,n){p.r('p/'+q.p('p'))})

_e(['r/ACCOUNTS','r/worky','WAPPY'],function(a){q('./../'+a)()})

u(a.r)

_e(['/p/d',// css, fonts, js (bs, cjs, jq, string, us)
    '/p/d/css', //css
    'p/d/js', //js
    '/p/p',  //user pics
    '/p/g', //graphics
    '/../j', //front-end js
    //shoot, shooter
    '/../j/g'],function(a){u(e.st(p.j(__dirname, a)))})



/////////////////////////
sio=q('socket.io')
ssio=q('session.socket.io')
kk=q('./sockets')
hSv=h.s(a)
ls(hSv, 4000, smile)
kSv=ls(sio,hSv)
kSv.set('log level',1)
KK=new ssio(kSv,st,cp)
kk(KK)









//setManifest=function(){MF=[]
//mfO=function(p){return "{src:'/" + pB(p)  + "', id:'"  + pB(p).split('.')[0] + "'}"}
//_e(fDS("./p/g"), function(p){MF.push(mfO(p))})
//$a.l.mf = "["+MF.join()+"]"}
//setManifest()




//set('port',  process.env.PORT ||4000)
//set('view engine', 'jade')
//set('views', __dirname + '/../v/')


