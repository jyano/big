ul=q('url')
ul.p=ul.parse
ul.r=ul.resolve
ul.f=ul.format



sU=function(u){
    u.a=u.auth
    u.u=u.href   // full url
    u.H=u.hash
    u.q=u.query
    u.pc=u.protocol
    u.h=u.host
    u.hn=u.hostname
    u.p=u.port
    u.p= u.path
    u.pn= u.pathname
    u.s=u.search
    return u}