ht=q('http')
ht.s=ht.createServer


sP=function(p){
    p.w=p.write
    p.wh=p.writeHead
    p.e=p.end
    return p}



sQ=function(q){
    q.u=q.url
    q.e=q.setEncoding
    q.o= q.on
    q.o1= q.once
      return q}







