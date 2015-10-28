eG=function(){ke('eG')}
mG=function(){ke('mG')}
testGuys={moe:{x:20,y:100},larry:{x:20,y:130},curly:{x:20,y:10}}




moveGuy=function(){
    qi.o(function(){ke('guy','up')})
    qi.o(function(){ke('guy','down')})
    qi.o(function(){ke('guy','left')})
    qi.o(function(){ke('guy','right')})
    qi('up').o(function(){ke('mG','u')})
    qi('down').o(function(){ke('mG','d')})
    qi('left').o(function(){ke('mG','l')})
    qi('right').o(function(){ke('mG','r')})}




mapGuys=function(sGs){

    upsert=function(g,s,f){Gs=$w['Gs']||[]

        var G=_W(Gs,{u:g.u})[0]
        if(G){xy(G,g)} else {c.b(g.m,
            function(b){
                b.u=g.u
                xy(g,b)
                if(b.u==s){p=b;sxy(b,1.5);b.T()}
                b.$$(function(g){alert(g.u)})
                Gs.push(b)
                if(f){f(b)}},1)}
        return G}

    upsert({n:'woah',x:1,y:1})
    upsert({n:'weirdo',x:30,y:40})
    upsert({n:'moe',x:0,y:0});


    _e(mGs, function(g){if(!sGs[g.un]){c.s.rmvCh(g)}})


    _e(sGs,function(g){if(mGs[g.un]){mGs[g.un]}})

    _e(m,function(c,n){upsert({n:n,x:c.x,y:c.y})})}


Guys=function(){


    Gs=Gs||Gs=[]
    makeGuy=function(n,x,y){

        n=n||'larry'
        x=N(x)?x:10
        y=N(y)?y:x

        return{n:n,x:x,y:y} }

    Gs.push(makeG('bob',100))
    Gs.push(makeG('sal',20,30))

    return GS}


l('heads');

guys = {}; gone = lopper(guys);
// m =  {   moe: { x: 20, y: 100}    ,  larry:    { x: 20, y: 130}    ,
// curly:  { x: 20, y: 10}        };

updateMap = function(m){
    li('updateMap');
}

d(m); //2step process for client to update map based on server new-map push

var upsert=function(guy){
    if(guys[guy.name]){guys[guy.name].x = guy.x;
        guys[guy.name].y = guy.y}
    else {guys[guy.name]=plop('me',guy.x, guy.y)}}
_.e (guys, function(c,name,l) {if(!m[name]){gone(name);
    l('removed:' + name)}})
_.e(m, function(c, name){
    upsert({name: name, x: c.x, y: c.y })})}
//  upsert({name: 'woah', x:1, y:1})  // updateMap(m);
k.on('mapUpdate', function(m){updateMap(m)})

$('#up').click(function(){k.emit('moveGuy','up')});
$('#down').click(function(){k.emit('moveGuy','down')});
$('#left').click(function(){k.emit('moveGuy','left')});
$('#right').click(function(){k.emit('moveGuy','right')});
moveGuy=function(){k.emit('moveGuy')}
// k.on('face', function(face){     })
//  gx.me.x = face.x;  gx.me.y = face.y // k.emit('face')

k.emit('enterGame');




guys = {};  gone = lopper(guys); // m =  {   moe: { x: 20, y: 100}    ,
// larry:    { x: 20, y: 130}    ,   curly:  { x: 20, y: 10}        };




upsert = function(guy){   if (guys[guy.name]){
    guys[guy.name].x = guy.x; guys[guy.name].y = guy.y }
else { guys[guy.name] = plop( 'me' , guy.x, guy.y)  } }


function updateMap(m){         //c=coords, l=l  m=guysM


    _.e(guys, function (c, n, l) {
        if (!m[n]) {$l('removing:'
            + n); gone(n)  }   }   )

    _.e(m, function(c, n){
        upsert({n:n, x:c.x,y:c.y   }); })}


//  upsert({name: 'woah', x:1, y:1})






k.on('mapUpdate', function(m){updateMap(m)})// updateMap(m);

enterGame = function(){ k.emit('enterGame') }  ;
enterGame(); //k.on('enterGame', enterGame);
$('#up').click(   function(){k.emit('moveGuy','up')});
$('#down').click(function(){
    k.emit('moveGuy','down')})//moveGuy = function(){k.emit('moveGuy')}
$('#left').click(function(){k.emit('moveGuy','left')});
$('#right').click(function(){k.emit('moveGuy','right')})



 isGuyInMap = function(g,m){
     _e(m,
         function(player){
             if(g.name==player.name){

                 $l('yes in map'); return guy}})

     $l(guy.name + ': not in map');

     return false}


_e(guys,
    function(player){
    if (!(isGuyInMap(player, map))){
        stage.removeChild(guys[player])}})}


k.on('m', function(d){updateMap(d)})
  upsert({name: 'weirdo', x: 30, y: 40}) ;
 upsert({name: 'moe', x: 0, y: 0})     ;
  function map (sGuys){
   _.e(mGuys, function(guy){
  if (!sGuys[guy.username]){stage.removeChild(guy)}    })
   _.e(sGuys, function(guy){
  if (mGuys[guy.username]){mGuys[guy.username]}  }) }

 //myGuys is an array of 'guy objects' ... username: '',  x,  y



// guys
$('#up').click(function(){k.emit('move',{dir: 'up', un: un}));
    $('#down').click(function(){
        k.emit('move',{dir: 'down', un: un})})
    $('#left').click(function(){k.emit('move',{dir: 'left', un: un})});
    $('#right').click(function(){k.emit('move',{dir: 'right', un: un})})
    k.emit('warp')


   //client receives guysArr
    k.on('map', function(guysArr){

        _.e(guysArray, function(guy){

            remove/make non-visbile all guys from myarray that are not in guysArray

            for _.e guy in guysArray,
        if he is in myarray, update his position/make visible
        if not, addhim to myarray


    })
        stage.addChild(p.me);
        p.me.x = 200
        p.me.y = 100

    })
