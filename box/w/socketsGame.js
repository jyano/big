
 //io.sockets.clients().forEach(function (k) {
     //so far we have access only to client sockets
 //IO.getSession(k, function (z,ss) {
 //    ss.j='hi';ss.save()})})




lLi=function(g){
    if(g){
        $l('in');return true}
    else{$l('-in')} }


Guy=function(s){
    return {
        n:s.u,m:s.m,x:_.r(0,830),y:_.r(0,300)}

}



snSM=function(){
    m.guy.find({},function(z,m){
        k.b.e('mU',m)
        k.e('mU',m)})}


move=function(a,b,d){if(d=='u'){a.y-=b};if(d=='d'){a.y+=b};
    if(d=='l'){a.x-=b};if(d=='r'){a.x+=b};return a}//Gs=[{n:'c',x:300,y:200},{n:'c',x:300,y:200}]


o('eG2',function(){
    m.guy.findOne(
        {n:s.u},function(z,g){if(!(g)){l('nP!:'+s.u+'!');
            m.guy.create(Guy(s),function(z,g){if(z){n(z)}
                k.b.e('nPlr',g)})}
            snSM()})})


Gs=[{m:'guy',u:'ii',x:140,y:140},
    {m:'chicks',u:'jj',x:140,y:240}]




o('eG',function(){console.dir(s);
    if(!(_.where(Gs,{u:s.u})[0])){
        Gs.push({m:s.m, u:s.u,x:300,y:400});
        l('nP!:'+s.u+'!');
        k.e('mp',Gs, s.u);
        //k.e('you',s.u);
    }//k.b.e('nP',Gs);
})




o('act',function(a){$d(a)})

o('mvG',function(d){
    //if(!lLi(gMp[n])){nGtSM(n)}
    m.guy.findOne({n:s.u},function(z,g){
        if(z){$d(z)}
        move(g,100,d)
        g.save(function(){snSM()})})})

})}



//function nGtSM(n){gMp[n]  ={x:_.r(0,830),y:_.r(0,300)}}
//k.on('fc',function(d){move(fc,10,d);k.e('fc',fc);k.b.e('fc',fc)})})}
//theMap=m.map.findOne({name:'gMp'},function(z,m){gMp=m.Gs;loadGame()}); // gMp=theMap.Gs;g.save(theMap)
//gMp.Gs.fred={x:3,y:3};gMp=m.map.findOne({n:'gMp'});gMp={m:{x:20,y:100},l:{x:20,y:130},c:{x:20,y:10}};
//k.on('showMap',function(){k.e('map',[{name:'a',x:200,y:200}])})
//isGuyInMap=function(p){_.e(gMp,function(g){if(g.u==p.u){l('+map');return g}});l('-m');return false}
//k.on('warp',function(g){if(!(isGuyInMap(g))){gMp.push(g);k.e('map',gMp); k.b.e('map',gMp)} else{k.e('map',gMp)}})
//fc={x:100,y:100};players=[]


