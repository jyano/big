

l=function(a){
    console.log(a);
    return a}

_e=function(a,b,c){
    a.forEach(b,c);
    return a}


uniqName=function(k){
    return k.remotePort+':'+k.remoteAddress  }
rmv=function(a,b){
    return a.splice(a.indexOf(b),1)}
des=function(a,b){
    return a[a.indexOf(b)].destroy()}
Wr=function(a){
    return a.writable}
lsn=function(a,b){a.listen(b,
    function(){l('listening.........')})}
cWS=function(a){
    return fs.createWriteStream(a)}
str=function(s){
    s.d=function(f){
    s.on('data',f);
    return s}
    s.e=function(f){
        s.on('end', f)
        return s}
    return s}

$M=Math
$J=JSON

J=$J.stringify

P=function(a,b){
    if(_.isNumber(a)){return $M.pow(a,b)}
    return $J.parse(a,b)}




