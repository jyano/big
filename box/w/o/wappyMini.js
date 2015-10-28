

//mongoose.s = mongoose.Schema
//mongoose.m = mongoose.model
//mongoose.c = mongoose.connect


//_e=_.e=_.each
//_l=_.last
//_f=_.first
//_r=_.rest
//_i=_.initial
//q = require
//l=function(a,b){var l=function(a){cL(a);return a};if(b){l('{'+a+':'+b+'}');return b};return l(a)}
//_S=function(a){return a.toString()}
//s=function s(kO,v){if(O(kO)){_.each(kO,function(v,k){s(k,v)});return};a.set(kO,v)}
//g=function g(u,f){return f?a.get(u,f):a.get(u)}
//po=function(a){return a.post(a)}
//u=function u(i){if(A(i)){_.each(i,u)}; a.use(i)}

//smile = function(){ $l(  ':)'  ) }
//gz = {health:100, x:5000,  y:5000}
//$t=require('./task')
//http.s=http.createServer
//pt.b=pt.basename
//pt.j=pt.join
//pt.e=pt.extname
//pt.r=pt.resolve
//fs.rds=fs.readdirSync
//fs.r=fs.rf=fs.readFile
//fs.w=fs.wf=fs.writeFile
//fs.ul=fs.unlink
//fs.rn=fs.rename

//ball = {x:100, y:100}

q=require
_=q('./us')

_e=_.e=_.each

F=_.isFunction
S=_.isString
U=_.isUndefined
D=function(a,b){return !U(a)}
A=_.isArray
O=_.isObject

_l=_.last
_f=_.first
_r=_.rest
_i=_.initial


G=function(a){
    if(!_.isArguments(a)){return}
    var p, n, m,d
    a=_.toArray(a)

    if(_l(a)==='+'){p=a.pop()}
    if(_l(a)==='-'){n=a.pop()}
    if(_l(a)==='*'){m=a.pop()}
    if(_l(a)==='/'){d=a.pop()}

    return D(a,{
        z: a.length,
        f: _f(a),l: _l(a),r: _r(a),i: _i(a),
        p:p,P:!p,m:m,M:!m,d:d,D:!d,n:n,N:!n


    })}



cL=function(a){console.log(a);return a}
cD=function(a){console.dir(a);return a}
$l=function(a,b){if(!b){return cL(a)} cL('{'+a+':'+b+'}');return b}
$d=function(a,b){if(!b){return cD(a)} cL(a);return cD(b)}

l=function(a,b){
    var l=function(a){cL(a);return a}
    if(b){l('{'+a+':'+b+'}');return b}
    return l(a)}

_S=function(a){return a.toString()}

smile=function(){l(':) 8080')}



ls=function(a,b,c){

    return c?
        a.listen(b,c)
       :a.listen(b)

}






s=function s(kO,v){
    if(O(kO)){
        _e(kO,function(v,k){

            s(k,v)})
    return}
    a.set(kO,v)}



g=function g(u,f){return f?a.get(u,f):a.get(u)}


po=function(a){return a.post(a)}



u=function u(i){
    if(A(i)){
        _e(i,u)}
    a.use(i)}





l('------- wappy --------')



gz={health:100, x:5000,  y:5000}



mongoose  =$g=db=d=  require('mongoose')


$g.s = $g.Schema

$g.m = $g.model

$g.c = $g.connect

models  =$m=require('./../models')

//$t=require('./task')


$g.connect("mongodb://localhost/brain",smile)

require('./../mong')

http=ht=h=require('http')


ht.s=ht.createServer

path=pt=p=require('path')
pt.b=pt.basename
pt.j=pt.join
pt.e=pt.extname
pt.r=pt.resolve


fs=f=require('fs')
fs.rds=fs.readdirSync
fs.r=fs.rf=fs.readFile
fs.w=fs.wf=fs.writeFile
fs.ul=fs.unlink
fs.rn=fs.rename


express=e=require('express')


mongoStore = st=new(require('connect-mongo')(e))({db:'brain'})


a=e()
a.l=a.locals
a.r=a.router

middleware=$w=w=require('./../MW')


s({'port'        :process.env.PORT||4000,
   'view engine' :'jade',
   'views'       :__dirname+'/../v/'})




a.use( express.logger('dev') )



if(a.get('env')=="development"){a.use(express.errorHandler())}


cookieParser =  express.cookieParser('xyz')



a.use(
    express.bodyParser(
        {
            keepExtensions:true,
            uploadDir:__dirname+"/p/u"
        }
    ))


a.use(cookieParser)

a.use(express.session({
    store:mongoStore,
    secret:'xyz'
}))


a.use(
    require('connect-flash')()
)


a.use(express.favicon())

a.use(middleware)



a.get('/w/:p', function(req, res, next){

    res.render('p/' + req.params.p)

})









require('./routes')()
require('./bookRoutes')()
require('./restRoutes')()

a.use(a.router)



_.each([

    '/p/d',// css, fonts, js (bs, cjs, jq, string, us)
    '/p/d/css', //css
    'p/d/js', //js
    '/p/p',  //user pics
    '/p/g', //graphics
    '/p/u',
    '/../j', //front-end js
    '/../j/create',
    '/../j/app',
    '/../j/apps',
    '/../j/lib',
    '/../j/base',
    '/../j/phaserjs',
    '/../j/phaser2',
    '/../j/melon',
    '/../j/mvc',
    '/../j/three',
    '/../j/box2d',
    '/../j/beta',
    '/../j/g'

], function(a){

    u(e.static(p.j(__dirname, a)))

})



httpServer = h.s(a)





httpServer.listen( 8080, smile)



ball = {x:100, y:100}


io =  require('socket.io').listen(httpServer)

io.set('log level',1)


sio = require('session.socket.io')


require('./../sockets')(
    io,
    new sio(io,st,cookieParser)
)





