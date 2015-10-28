
 var http=require('http')

 var fs=require('fs')

 var contacts=[
     {id:'1',firstName:'afsd','lastName':'afsd',
         email:'asfd',phoneNumber:'322'},
     {id:'2',firstName:'bfsd','lastName':'bfsd',
         email:'basfd',phoneNumber:'b322'}]

 http.createServer(function(req,res){console.log('nodeserver ' + req.method + ' ' + req.url)
     if(req.url==='/' && req.method==='GET'){
         var contactsFile = __dirname + '/../j/g/contacts.html'
         console.log(contactsFile)
         fs.readFile(contactsFile, function(err,data){if(err){throw err}; res.end(data)})

         return}
     else if(req.url.indexOf('/contacts')===0){console.log('contacts!')//this is for json api
          
         res.writeHead(200, {'Content-Type': 'application/json'})

         if(req.method=='GET'){res.end(JSON.stringify(contacts))}

         else if(req.method=='POST'){

             var body=''

             req.on('data', function(data){body+= data})

             req.on('end', function(){

                 var contact=JSON.parse(body)
                 contact.id = Math.random().toString(36).substr(2)
                 contacts.push(contact)
                 res.end(JSON.stringify(contact))
                 console.log("CONTACT ADD: ", contact)

             })}


         else if(req.method=='DELETE'){

             var id=req.url.split('/')[2]

             console.log("DELETE CONTACT: ", id)

             for(var index in contacts){
                 if(contacts[index].id===id){contacts.splice(index,1); break}
             }

             res.end()}

         return}
     else{

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