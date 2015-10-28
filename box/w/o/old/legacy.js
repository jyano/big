//oo
//1) pass a func, and give it oo pops
//2)


oo=function(o,b){
    if(U(b)){return _D(o,ooo)}
    return function(a){
        return o(b,a)}}

oO=oo(function f(a,b,c){
    if(!U(c)){return f(b,c)}
    if(!U(b)){return (f[a])?f[a][b]||b:b }
    if(U(a)){return _K(f)}
    else {return (a==="*")? $r(b||'c'):
        f[a]||a }})

Oo=oo(function f(a,b){return (!U(b))?f[a][b]:f[a]})

oC=oo(oO,'c')
oS=oo(oO,'S'); oQ=oo(oO,'Q'); oX=oo(oO,'X');
Qo=oo(Oo,'q'); Xo=oo(Oo,'x')









to change config of skio, use set mh in conf mh's cb-handler:
     io.configure(['environment'], ()->{io.set(pop,val)})

 namespace_socket=socket.of(namespace)

 socket.join(room) -will create new room if needed

 socket.broadcast.in(room).send(msg) .. .emit(event, event-data)
 socket.leave(room)

 server events: io.sockets.on('connection', (socket)->{})
     ('msg' (msg,ack_cb)->{})

 //////
 client
 conn: socket=io.connect(uri) <-server uri to connect to, can be abs or rel
 if not '/'(or equiv), it will connect to namespace
 sk.on(event, (e-data, ack-cb)->{})
 emit event: same as server
 send msg: same as server

 events:
 sk.on(connect, cb), connecting, disconnect, connect_failed, error, reconnect, reconnecting,reconnection-failed,
     sk.on('msg',(msg, ack_cb)->{}, emited on receipt of msg sent with secket.send())


 //server//

 io.sockets.on('connection', function(sk){

     sk.on('join',function(name){


         sk.nickname=name
         sk.broadcast.emit('announcement', name + ' just joined')})

     sk.on('text', function(msg){ sk.broadcast.emit('text',socket.nickname, msg) })

 })

 //client

 $(function(){



     sk=io.connect()

     sk.on('connect', sk.emit('join', prompt('what is your nickname?')))

     $('#chat').css('display','black')
     sk.on('announement', function(msg){li=doc.createEl('li')

     li.innherHTML=msg;
         $('#messages').appendChild(li)

     })



     addMessage=function(from,txt){


         li=doc.createEl('li')

         li.className='message'
         li.innHTML='<b>'+from+'</b>' + text
         $('#messages').append(li)
     }

     input=$('#input')
     $('#form').onsubmit=addMessage('me',input.value);
     sk.emit('text',input.value);

     input.value=' ';
     input.focus();return false

     socket.on('text',addMessage)

 })