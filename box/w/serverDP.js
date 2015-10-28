
 var http=require('http')

 var fs=require('fs')

 var messages=[

     {id:'1',

         message:'awesome site',
         topic:'slogans',
         score:0
     },

     {id:'2',

         message:'is cool',
         topic:'yano',
         score:0
     },

     {id:'3',

         message:'is lame',
         topic:'yano',
         score:0
     }
 ]

 http.createServer(function(req,res){

     console.log('nodeserver ' + req.method + ' ' + req.url)


     if(req.url==='/' && req.method==='GET'){

         var file = __dirname + '/../j/g/backDP.html'
         
         console.log(' get all ' + file)

         fs.readFile(

             file,

             function(err,data){
                 if(err){throw err}
                 res.end(data)})

         return}


     
     else if(req.url.indexOf('/messages')===0){

         console.log('dirts!')//this is for json api
          
         res.writeHead(200, {'Content-Type': 'application/json'})

         if(req.method=='GET'){
             res.end(JSON.stringify(messages))
         }

         else if(req.method=='POST'){

             var body=''

             req.on('data', function(data){body+= data})

             req.on('end', function(){

                 var msg=JSON.parse(body)

                 msg.id = Math.random().toString(36).substr(2)

                 msgs.push(msg)

                 res.end(JSON.stringify(msg))

                 console.log("DIRT ADD: ", msg)

             })

         }


         else if(req.method=='DELETE'){

             var id=req.url.split('/')[2]

             console.log("DELETE CONTACT: ", id)

             for(var index in messages){
                 if(messages[index].id===id){messages.splice(index,1); break}
             }

             res.end()}

         return}


     else {

         var filename= __dirname+req.url

         fs.lstat(filename,  function(err, stats){
             if(err||!stats.isFile()){

                     if(req.url!='/favicon.ico'){console.log("404: "+filename)}
                     res.writeHead(404, {'Content-Type':'text/plain'})
                     res.write('404 Not Found\n')
                     res.end()
                     return}


                 fs.readFile(filename,
                     function(err, data){
                        res.writeHead(200, {'Content-Type': 'text/javascript'})
                        res.end(data)})


 })


 return}




 }).listen(8080)