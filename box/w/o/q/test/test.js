l=cL=function(a){console.log(a);return a}
dn=function(){return __dirname}
fn=function(){return __filename}
T=setTimeout
q=require
on=function(o){return function(a,f){return a.on(o,f)}}


l=function(a){l(a);return a}
dn=function(){return __dirname}
fn=function(){return __filename}
T=setTimeout




nt=function(){var n=q('net')
    n.s= n.createServer}



pc=process

ex=function(f){return pc.on('exit', f)}


l(pc.pid )

l(dn())


ex(function(){

    T(function(){l('This will not run') },0)
    l('About to exit.')})

pc.arch
pc.argv

pc.abort()

pc.chdir(directory)
pc.cwd()
pc.config


pc.execPath
pc.execArgv



pc.env
pc.exit([code])
pc.getgid()
pc.getuid()
pc.getgroups()
pc.hrtime()

pc.initgroups(user, extra_group)
pc.kill(pid, [signal])


pc.memoryUsage()
pc.maxTickDepth
pc.nextTick(callback)
pc.platform
pc.pid
pc.setgid(id)
pc.setuid(id)
pc.setgroups(groups)
pc.stdout
pc.stderr
pc.stdin
pc.title
pc.umask([mask])
pc.uptime()
pc.version
pc.versions

l('arch : ' + pc.arch)