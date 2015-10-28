wr=function(a,b){a.write(b+'\n')}

K=[];J=[]




s=ts.createServer(function(k){
    k.n=uniqName(k)
    K.push(k)
    k.on('data', function(d){l('d: '+d)
        _e(K, function(j){if(k.n!=j.n){
            if(Wr(j)){j.write(k.n+' says '+d)}
            else {J.push(j);des(K,k)}}})})
    _e(J,function(j){rmv(K,j)})
    k.on('end',function(){rmv(K,k)})})
lsn(s,4001)


handler=function(k){


    //k.pipe(ws)
    //  var rs=require('fs').createReadStream(__dirname+'/hi.txt')

    // rs.pipe(k,{end:false})

    //k.on('data',function(d){l('d: '+d)})
    //k.on('end',function(d){})
    // k.write('sissy')

}
