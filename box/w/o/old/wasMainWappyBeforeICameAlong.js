cL=function(a){console.log(a);return a}
cD=function(a){console.dir(a);return a}
$l=function(a,b){if(b){cL('{'+a+ ':' +b+'}');return b}
    return cL(a)}
$d=function(a, b){if(b){$l(a);return b}
    return cD(a)}


$q =$r=require


_  = $q('./us')
_e =  _.e=_.each
$l('------- wappy --------')

_$a=function(a){
    a.s  =a.set
    a.g  =a.get
    a.p  =a.post
    a.u  =a.use
    a.l  =a.locals
    return a}

_$p=function (p){
    p.b =p.basename
    p.j =p.join
    p.e =p.extname
    p.r =p.resolve
    return p}

_$f=function(f){
    f.ds =f.readdirSync
    f.r =f.readFile
    f.w =f.writeFile
    f.u =f.unlink
    return f}

_$g = function (g){

    g.c = g.connect
    g.s = g.Schema
    g.m = g.model

    return g}


H   =$h  = $q('http')


P   =$p  = _$p($q('path'))
M   =$m  = $q('./models')
mg  =$g  = _$g($q('mongoose'))
fs  =$f  = _$f($q('fs'))

   dbURL="mongodb://localhost/brain"
    welMsg='* play nice *'

mg.c(dbURL, function(z){cL(welMsg)})



$e = $q('express')
$s = new($q('connect-mongo')($e))({db:'brain'})


$w = $q('./MIDDLEWARE')
$a = _$a($e())



MANIFEST=[]

_e($f.ds("./p/g"),function(p){
    var str= "{src:'/"
             + $p.b(p)
             + "',id:'"
             + $p.b(p).split('.')[0]
             + "'}";

    MANIFEST.push(str)})



$a.l.mf=$d("["+MANIFEST.join()+"]")


$a.s('port',process.env.PORT||4000)
$a.s('view engine','jade')

$a.s('views',__dirname+"/../v/")



$a.u($e.logger('dev'))
if($a.g('env')=="development"){
    $a.u($e.errorHandler())}

$a.u($e.bodyParser({
    keepExtensions: true,
    uploadDir: __dirname+"/p/u"
}))




$a.u($cp = $e.cookieParser('xyz'))

$a.u($e.session({store:$s,
    secret:'xyz'}))

$a.u($q('connect-flash')())

$a.u($e.favicon())

$a.u($w)


$a.g("/w/:PAGE",function(q,p,n){
    p.r('p/'+q.params['PAGE'])})




$q('./../r/ACCOUNTS')()
$q('./../r/worky')()
$q('./../WAPPY')()
$a.u($a.router)


dirs=[
    '/p/d','/p/d/css','p/d/js',
    '/p/p','/p/g','/../j',
    '/../j/g','/../j/u']

_.e(dirs,
 function(a){
     $a.u($e.static($p.j(__dirname,a)))});

$S=$h.createServer($a)

$S.listen(4000,function(){$l('$S')})


$k=$q('socket.io').listen($S)

$k.set('log level',1)


$K = $q('session.socket.io')
$q('./sockets')(new $K($k,$s,$cp))



//$z=function(o){ if(o){ return n(o)} }

