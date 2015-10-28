

numCPUs=q('os').cpus().length
if(clu.isMaster){  _t(numCPUs,function(){  clu.fork()  })
        clu.on('death',function(worker){    l('worker '+worker.pid+' died') }) }

       else {  ht.Server(function(q,p){p.writeHead(200)
                                                      res.end('hello\n')

           }).listen(8000)
       }