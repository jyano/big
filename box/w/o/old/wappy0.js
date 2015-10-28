cL=function(a){console.log(a);return a}
cD=function(a){console.dir(a);return a}
$l=function(a,b){
    if(b){cL('{'+a+ ':' +b+'}')
        return b}
    return cL(a)}
$d=function(a,b){if(b){$l(a); return b}
    return cD(a)}

$q   =  require
_    =  $q('./us')
_e   =  _.e=_.each
S   = _.isString
U   = _.isUndefined
D   = function(a,b){return !U(a)}
H   = $q('http')
P   = $q('path')
fs  = $q('fs')
pB  =P.basename
pJ  =P.join
pE  =P.extname
pR  =P.resolve
fDS =fs.readdirSync
fR  =fs.readFile
fW  =fs.writeFile
fU  =fs.unlink
S= _.isString
A= _.isArray
O= _.isObject

cL('------- wappy --------')


db= mg = $q('mongoose')


mS = db.Schema
mM = db.model

//M  =  $q('./models')

db.connect("mongodb://localhost/brain",  function(){cL(':)')})


$e = $q('express')

$s = S$ = new($q('connect-mongo')($e))({db:'brain'})


$a = $e()


$a.s  =function(a){return $a.set(a) }
$a.g  =function(a){return $a.get(a) }
$a.p  =function(a){return $a.post(a) }
$a.u  =function(a){return $a.use(a) }
$a.l  = $a.locals

get =function(a,b){
    return b? $a.get(a,b)
        : $a.get(a)}       //use=function(a,b){$a.use(a,b)}


set =function s(a,b){
    if(O(a)){return _e(a,
        function(v,k){s(k,v)})}
        $a.set(a,b)}


$u=function u(a){
    if(A(a)){return _e(a,u)}
     $a.use(a)} //setManifest=function(){MF=[]
//mfO=function(p){return "{src:'/" + pB(p)  + "', id:'"  + pB(p).split('.')[0] + "'}"}
//_e(fDS("./p/g"), function(p){MF.push(mfO(p))})
//$a.l.mf = "["+MF.join()+"]"}
 //setManifest()
//set('port',  process.env.PORT ||4000)
//set('view engine', 'jade')
//set('views', __dirname + '/../v/')

$w=$q('./MW')



set({
  port        :   process.env.PORT || 4000,
 'view engine':  'jade',
  views       : __dirname + '/../v/'  })



E$=$e.errorHandler()
L$=$e.logger('dev')

$u(L$)

if(get('env')=="development"){
    $u(E$)}


C$ =$e.cookieParser('xyz')
B$X =$e.bodyParser
ss =$e.session
F$=$e.favicon()


$u([

    B$({keepExtensions: true,
        uploadDir: __dirname + "/p/u" }),

    C$,

    ss({store : S$,
        secret: 'xyz'}),

    $q('connect-flash')(),

    F$,

    $w ])




get('/w/:p', function(q,p,n){
    p.r('p/'
        +q.p('p'))})


_e([

    'r/ACCOUNTS',

    'r/worky',

    'WAPPY'] , function(a){$q('./../' + a)()})
$u($a.router)
_e([

    // css, fonts, js (bs, cjs, jq, string, us)
    '/p/d',

    //css
    '/p/d/css',

    //js
    'p/d/js',

    //user pics
    '/p/p',

    //graphics
    '/p/g',

    //front-end js
    '/../j',

    //shoot, shooter
    '/../j/g'], function(a){
         $u( $e.static(
                 pJ( __dirname, a)))})



Srv=function(a,b){return a.createServer(b)}
HSrv=function(a){return Srv(H,a)}

hSrv = HSrv($a)

hSrv.listen(4000,
    function(){ $l('hSrv') })



$k = $q('socket.io').listen(hSrv)   //$k.set('log level' ,1)
$K = $q('session.socket.io')



$q('./sockets')(
    new $K($k, S$, C$))





