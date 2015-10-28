require('./m')

port=pc.v[2] &&
    parseInt(pc.v[2],
        10)||8080


ht.s(function(q,p){
    q=sQ(q)
    p=sP(p)
    var body=''
    q.e('utf8')
    q.o('data',function(d){
        body+=d})
    q.o1('end',
        function(){
        p.e(J(P(P(body),
            2)))})}).listen(port,
    function(){
        l('squaring server on port %d',
            port)})



//rq.post({uri:'http://localhost:8080',body:'5'}, function(z,p,b){zz=z;pp=p;bb=b })-> bb -> '25'