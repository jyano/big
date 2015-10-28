 buffer=function(){



     buffer='direct allocation of memory'

     buff='fixed size'

     toAddMoreData='must clone the Buffer into a larger one'}


 pathStuff=function(){
     path=q('path')


     path.exists

     path.existsSync



 }

 stats=function(f){

     fs.stat(function(s){

         s.if=s.isFile
         s.id=s.isDirectory
         s.ibd=s.isBlockDevice
         s.icd=s.isCharacterDevice //usually under /dev directory
         s.isl=s.isSymbolicLink
         s.iff=s.isFifo        // this is a special kind of UNIX named pipe
         s.is=s.isSocket //is file a UNIX domain socket


     f(s)})}




 //f.open(filePath, flag, cb(z,fileDescripter))
 fileOpenFlags={


     r:'for reading, stream positioned at beginning of file',
     'r+':'reading and writing, stream at beginning',
     w:'truncates file to zero length or creates ext file for writing, stream at beg',
     'w+':'opens file for r/w, file created if not exist, w/ow it is truncated, stream at beg',
     a:'opens file for writing or creates it, stream pos at end, subseq writes end up at curr end of file',
     'a+':'for r/w, or creates, stream pos at end'
 }



 sStr=function(s){


     s.s=s.pause
     s.p=s.resume
     s.w=s.write

     s.e=function(f){s.on('end',f)}

     s.dr=function(f){s.on('drain',f)}



 return s}



// to run node in production:
// $ export NODE_ENV=production
configure=function(){app.configure('development',function(){

        app.use(express.errorHandler())
    })}


   //setGetter
 //defineGetter

 //to run node as a background process (like any other process on Linux), use & operator
 // and to make sure things keep running even after we log out, use nohup
 // $ nohup npm start 2>&1 >> npmout.log &
 // that command redirects stdout and stderr command to npmou.log
 //and puts npm process in background
 //another option is to run node on a long-lasting conole using 'screen' or byobu
 //to use this: start 'screen' and then run your application:
 // $ screen (-r [to connect back to server to see server output])/ $ start
 //use monit or forever





 modules=function(){

     //core modules: loaded by name, cannot be hijacked
     //noncore: use abs path or rel path to current file
     // if u load a 'folder module', node looks for a package def(package.json)
     // if it finds it: uses 'main' attr as rel path for entry point// if no package.json file, df is index.js and it loads that
     // if u laod by name(and its not core), node looks in ./node_modules/'module', if it cant find it, it looks in parents.. all the way to rot
     //modules cahched after first load (init runs only once)

 }

 nodeObjVal=function(o){
     return sys.put(sys.inspect(o))}


 // you can use path for a folder to load a module:
 // myMod=q('./myModDir')
 //if you do, node will search inside that folder
 //it will presume the folder is a package and will look
 //for a pkg def (file named package.json)
 //if folder does not contain pkg def file named package.json, then node will
 //look for file under path: ./myModDir/index.js
 //howerver, if u place file named package.json inside module dir, node will
 //parse that file to look for and use the 'main' attr as rel path for entry point
 //ex: if pkg file is {'name':'myMod','main':'./lib/myMod.js'} then..
 //node will try to load file with path ./myModDir/lib/myMod.js
 //if mod nam is not rel and is not a core mod, node will try to find it inside
 //the node_modules folder in the current dir
 //ed: q('myMod.js') -> node looks for ./node_modules/myMod.js
 //if cant find, it looks in parent, etc

 avoidCongestion=function(){
     //limit rate msgs are sent, only send when buffer empty
     I(function(){if(ws.bufferedAmount==0){ws.send(getUpdate())}},100)
 }


 paren=/\(.*\)/

 // "wow (cool) ya".search(paren)