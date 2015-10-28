
exc=function(){return q('child_process').exec}
execOpts=function(o){var O={}
    if(o.t){O.timeout= o.t}
    if(o.k){O.killSignal= o.k}
    if(o.c){O.cwd=o.c}
    if(o.m){O.maxTimeout= o.m}
    if(o.e){O.encoding=o.e}
    return O}
spw=function(){return q('child_process').spawn}
tail=function(a){return spw()('tail',a)}


chOut=function(a,b,f){

var c=spw(a,b)
    c.stdout.on('data',f)
    return c
}
chErr=function(a,b,f){

    var c=spw(a,b)
    c.stderr.on('data',f)
    return c}

buf=function(a,b){
            var r=  new Buffer(a,b)
    r.l=  r.length
    r.s= r.slice
    r.c= r.copy
    r.S= r.toString
    return    r
}

res=function(){process.stdin.resume()}
pc=function(){p=process

p.a=p.arch
p.ag=p.argv
p.ab=p.abort()

p.d= p.chdir(directory)
    p.cw=p.cwd()
    p.cf=p.config


p.ep= p.execPath
p.ea= p.execArgv

    p.e=p.env

p.x=p.exit([code])


p.getgid()
p.getuid()
p.getgroups()
    p.sg=p.setgid(id)
    p.su=p.setuid(id)
    p.sgs=p.setgroups(groups)
    p.hrtime()
p.initgroups(user, extra_group)



    p.k=p.kill
    p.m=p.memoryUsage

p.mt=maxTickDepth
p.n=p.nextTick(callback)

    p.pf=p.platform
    p.p=p.pid


    p.so=p.stdout
    p.se=p.stderr
    p.si=p.stdin
    p.t=p.title

    p.um=p.umask([mask])
    p.up=p.uptime()

    p.v=p.version
    p.vs=p.versions

return p}

    nxtTk=function(f){process.nextTick(f)}

 //child_process module.

 child_process.exec.

    var childProcess = require('child_process'),ls 

ls = childProcess.exec('ls -l', function (error, stdout, stderr) {
    if (error) {
        l(error.stack);
        l('Error code: '+error.code);
        l('Signal received: '+error.signal)}

    l('Child Process STDOUT: '+stdout);
    l('Child Process STDERR: '+stderr)})



ls.on('exit', function (code) {
    l('Child process exited with exit code '+code)})



NODE PRO TIP: error.stack is a stack trace to the point that the Error object was created.

    It should be noted that the STDERR
of a given process is not exclusively reserved for error messages.
    Many programs use it as a channel for secondary data instead.
    As such, when trying to work with a program that you have not previously
spawned as a child process, it can be helpful to start out dumping both
STDOUT and STDERR, as shown above, to avoid any surprises.

    While child_process.exec buffers the output of the child process for you,

it also returns a ChildProcess object,




chPr=function(){return q(child_process)}
chi=function(){return chPr().sp()}
frk=function(){return chPr().fork()}

   sig={i:'SIGINT',t:'SIGTERM'}

pid=function(a){return a.pid}

inE=function(a){return  a.stdin.end()  }

//A Readable Stream that represents the child process's stderr.

    Example:

var sp = q('child_process').sp,
    gr  = sp('gr', ['ssh']);

    child.kill([signal])#
signal String
Send a signal to the child process.
    If no argument is given, the process will be sent 'SIGTERM'. See signal(7) for a list of available signals.

    var sp = q('child_process').sp,
    gr  = sp('gr', ['ssh']);

gr.on('close', function (code, signal) {
    l('child process terminated due to receipt of signal '+signal);
})


// send SIGHUP to process
gr.kill('SIGHUP')



child.send(message, [sendHandle])


 child_process.fork()
child.send(message, [sendHandle]) and messages are
received by a 'message' event on the child.

    For example:

    var cp = q('child_process');

var n = cp.fork(dn+'/sub.js')

oM=function(a,f){return a.on('message',f)}
oM(n , function(m) {
    l('PARENT got message:', m);
})

n.send({ hello: 'world' });
And then the child script, 'sub.js' might look like this:

om( process, function(m) { l('CHILD got message:', m)})

process.send({ foo: 'bar' });
In the child the process object will have a send() method, and process will emit objects each time it receives a message on its channel.

    There is a special case when sending a {cmd: 'NODE_foo'} message. All messages containing a NODE_ prefix in its cmd property will not be emitted in the message event, since they are internal messages used by node core. Messages containing the prefix are emitted in the internalMessage event, you should by all means avoid using this feature, it is subject to change without notice.

    The sendHandle option to child.send() is for sending a TCP server or socket object to another process. The child will receive the object as its second argument to the message event.

    Emits an 'error' event if the message cannot be sent, for example because the child process has already exited.

    Example: sending server object#

Here is an example of sending a server:

    var child = q('child_process').fork('child.js');

// Open up the server object and send the handle.
var server = q('net').createServer();
server.on('connection', function (socket) {
    socket.end('handled by parent');
});
server.listen(1337, function() {
    child.send('server', server);
});
And the child would the receive the server object as:

    process.on('message', function(m, server) {
        if (m === 'server') {
            server.on('connection', function (socket) {
                socket.end('handled by child');
            });
        }
    });
Note that the server is now shared between the parent and child, this means that some connections will be handled by the parent and some by the child.

    For dgram servers the workflow is exactly the same. Here you listen on a message event instead of connection and use server.bind instead of server.listen. (Currently only supported on UNIX platforms.)

Example: sending socket object#

Here is an example of sending a socket. It will sp two children and handle connections with the remote address 74.125.127.100 as VIP by sending the socket to a "special" child process. Other sockets will go to a "normal" process.

    var normal = q('child_process').fork('child.js', ['normal']);
var special = q('child_process').fork('child.js', ['special']);



// Open up the server and send sockets to child
var server=nt.s()



oC=function(a,b){}

server.on('connection', function (socket) {

    // if this is a VIP
    if (socket.remoteAddress === '74.125.127.100') {
        special.send('socket', socket);
        return;
    }
    // just the usual dudes
    normal.send('socket', socket);
});

lsn=function(a,b){return a.listen(b)}
lsn(server,1337)


The child.js could look like this:

oM(process, function(m, socket) {
    if (m === 'socket') {
        socket.end('You were handled as a ' + process.argv[2] + ' person')}})

                cns=function(a){return a.connections}


    child.disconnect()#
Close the IPC channel between parent and child, allowing
the child to exit gracefully once there are no other connections keeping it alive.
    After calling this method the .connected flag will be set
to false in both the parent and child, and it is no longer possible to send messages.

    The 'disconnect' event will be emitted when there are no messages
in the process of being received, most likely immediately.

    Note that you can also call process.disconnect() in the child process.

    child_process.sp(command, [args], [options])#
command String The command to run
args Array List of string arguments
options Object
cwd String Current working directory of the child process
stdio Array|String Child's stdio configuration. (See below)
customFds Array Deprecated File descriptors for the child to use for stdio. (See below)
env Object Environment key-value pairs
detached Boolean The child will be a process group leader. (See below)
uid Number Sets the user identity of the process. (See setuid(2).)
gid Number Sets the group identity of the process. (See setgid(2).)
return: ChildProcess object
Launches a new process with the given command, with command line arguments in args. If omitted, args defaults to an empty Array.

    The third argument is used to specify additional options, which defaults to:

{ cwd: undefined,
    env: process.env
}
cwd allows you to specify the working directory
from which the process is sped. Use env to specify
environment variables that will be visible to the new process.

    Example of running ls -lh /usr, capturing stdout, stderr, and the exit code:

    var sp = q('child_process').sp,
        ls    = sp('ls', ['-lh', '/usr']);

oD( ls.stdout, function (d) {
    l('stdout: ' + d)})

ls.stderr.on('data', function (data) {
    l('stderr: ' + data)})

ls.on('close', function (code) {
    l('child process exited with code ' + code)})

Example: A very elaborate way to run 'ps ax | gr ssh'

c_p='child_process'

var sp = q(c_p).sp,
    ps    = sp('ps', ['ax']),
    gr  = sp('gr', ['ssh']);


oD(ps.stdout,function(d){gr.stdin.write(d)})

pD(ps.stderr , function (d) {l('ps stderr: ' + d)})


oCl( ps , function (code) {
    if (code !== 0) {
        l('ps process exited with code ' + code)}
    gr.stdin.end()})

    
       gr=grep

   oD(gr.stdout , function (d) {l(''+d)}) 


oD( gr.stderr , function (data) {
    l('gr stderr: ' + data);
}) 

gr.on('close', function (code) {
    if (code !== 0) {
        l('gr process exited with code ' + code);
    }
}) 

        
oCl=function(a,f){return a.on('close',f)}
oD=function(a,f){return a.on('data',f)}
sp=spawn

Example of checking for failed exec:

    var sp = q('child_process').sp,
        child = sp('bad_command');

child.stderr.setEncoding('utf8');
child.stderr.on('data', function (data) {
    if (/^execvp\(\)/.test(data)) {
        l('Failed to start child process.');
    }
});
Note that if sp receives an empty options object, it will result in sping the process with an empty environment rather than using process.env. This due to backwards compatibility issues with a deprecated API.

    The 'stdio' option to child_process.sp() is an array where each index corresponds to a fd in the child. The value is one of the following:

    'pipe' - Create a pipe between the child process and the parent process. The parent end of the pipe is exposed to the parent as a property on the child_process object as ChildProcess.stdio[fd]. Pipes created for fds 0 - 2 are also available as ChildProcess.stdin, ChildProcess.stdout and ChildProcess.stderr, respectively.
'ipc' - Create an IPC channel for passing messages/file descriptors between parent and child. A ChildProcess may have at most one IPC stdio file descriptor. Setting this option enables the ChildProcess.send() method. If the child writes JSON messages to this file descriptor, then this will trigger ChildProcess.on('message'). If the child is a Node.js program, then the presence of an IPC channel will enable process.send() and process.on('message').
'ignore' - Do not set this file descriptor in the child. Note that Node will always open fd 0 - 2 for the processes it sps. When any of these is ignored node will open /dev/null and attach it to the child's fd.
Stream object - Share a readable or writable stream that refers to a tty, file, socket, or a pipe with the child process. The stream's underlying file descriptor is duplicated in the child process to the fd that corresponds to the index in the stdio array.
Positive integer - The integer value is interpreted as a file descriptor that is is currently open in the parent process. It is shared with the child process, similar to how Stream objects can be shared.
    null, undefined - Use default value. For stdio fds 0, 1 and 2 (in other words, stdin, stdout, and stderr) a pipe is created. For fd 3 and up, the default is 'ignore'.
    As a shorthand, the stdio argument may also be one of the following strings, rather than an array:

    ignore - ['ignore', 'ignore', 'ignore']
pipe - ['pipe', 'pipe', 'pipe']
inherit - [process.stdin, process.stdout, process.stderr] or [0,1,2]
Example:

    var sp = q('child_process').sp;

// Child will use parent's stdios
sp('prg', [], { stdio: 'inherit' });

// Spawn child sharing only stderr
sp('prg', [], { stdio: ['pipe', 'pipe', process.stderr] });

// Open an extra fd=4, to interact with programs present a
// startd-style interface.
sp('prg', [], { stdio: ['pipe', null, null, null, 'pipe'] });
If the detached option is set, the child process will be made the leader of a new process group. This makes it possible for the child to continue running after the parent exits.

    By default, the parent will wait for the detached child to exit. To prevent the parent from waiting for a given child, use the child.unref() method, and the parent's event loop will not include the child in its reference count.

Example of detaching a long-running process and redirecting its output to a file:

    var fs = q('fs'),
        sp = q('child_process').sp,
        out = fs.openSync('./out.log', 'a'),
        err = fs.openSync('./out.log', 'a');

var child = sp('prg', [], {
    detached: true,
    stdio: [ 'ignore', out, err ]
});

ch=function(c){
    
    c.u= c.unref
return c}


chP=function(p){
     p=p||child_process
    c.e= c.exec
    c.c= c.cwd


    timeout Number (Default: 0)
    maxBuffer Number (Default: 200*1024)
    killSignal String (Default: 'SIGTERM')
    callback Function called with the output when process terminates

    stdout Buffer
    stderr Buffer
    return p}

   
    var exec = q('child_process').exec,
    child;

child = exec('cat *.js bad_file | wc -l',
    function (error, stdout, stderr) {
        l('stdout: ' + stdout);
        l('stderr: ' + stderr);
        if (error !== null) {
            l('exec error: ' + error);
        }
    });
The callback gets the arguments (error, stdout, stderr). On success, error will be null. On error, error will be an instance of Error and err.code will be the exit code of the child process, and err.signal will be set to the signal that terminated the process.

    There is a second optional argument to specify several options. The default options are

{ encoding: 'utf8',
    timeout: 0,
    maxBuffer: 200*1024,
    killSignal: 'SIGTERM',
    cwd: null,
    env: null }
If timeout is greater than 0, then it will kill the child process if it runs longer than timeout milliseconds. The child process is killed with killSignal (default: 'SIGTERM'). maxBuffer specifies the largest amount of data allowed on stdout or stderr - if this value is exceeded then the child process is killed.

    child_process.execFile(file, args, options, callback)#
file String The filename of the program to run
args Array List of string arguments
options Object
cwd String Current working directory of the child process
env Object Environment key-value pairs
encoding String (Default: 'utf8')
timeout Number (Default: 0)
maxBuffer Number (Default: 200*1024)
killSignal String (Default: 'SIGTERM')
callback Function called with the output when process terminates
error Error
stdout Buffer
stderr Buffer
Return: ChildProcess object
This is similar to child_process.exec() except it does not execute a subshell but rather the specified file directly. This makes it slightly leaner than child_process.exec. It has the same options.

    
    cpf=function(a,b,c){

   return child_process.fork(a,b,c)

}
    
                     enc=function(a){return a||'utf8'}
exA=function(a){return a||process.execArgv}


 
   return child.send(a,b,c)}

       sp=function(){return sp()}                                                                                                                                                                                                                                                           These child Nodes are still whole new instances of V8. Assume at least 30ms startup and 10mb memory for each new Node. That is, you cannot create many thousands of them.

    eP=function(a){return a.execPath} 
 
 ncf=function(){return  NODE_CHANNEL_FD       }

 