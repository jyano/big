
sta=function(a){return (a||'')+(new Date()).getTime()}


wh=function(w,h){var g=G(arguments),w=g[0],h=g[1]
    var o={width:w,height:h}
    if(g.p){o.keyTracker=true}
    return o}


sP=function(a,w,h,p){
    var a={
        animation:a,
        width:w,
        height:h
    }
    if(p){
        a.posx=p}
    return a}



gQA=function(a){return new $.gQ.Animation({imageURL:'/'+a+'.png'})}

fpw=function(a){
    return ($("#"+a).x()- fps- pw )
        %
        (-2*pw)
        +
        pw

}




cpw=function(a){return ($("#"+a).x()- cps - pw )%(-2*pw)+pw}

$.gq=$.gameQuery




GQUERY=function(){z()

    d=dv('z',700,250).a().id('playground').a()

    d.c('z','r').f(18)


    Enemy=function(n,v){
        var e={value:v,speed:5,node:n}

        e.update=function(){e.node.x(-e.speed,true)}

        return e}


    Player=function(){return {value:10,number:1}}

    functionEval=function(e,sym,m){//enemyValue,missileValue

        switch(sym){
            case '+':return e+m
            case '-':return e-m
            case '*':return e*m
            case '/':return e/m
            case '%':return e%m
            case '|':return e|m
            case '&':return e&m
            case '<<':return e<<m
            case '>>':return e>>m}}



    pw=PLAYGROUND_WIDTH=700;ph=PLAYGROUND_HEIGHT=250
    rr=REFRESH_RATE=15;fps=farParallaxSpeed=1;cps=closeParallaxSpeed=3
    eh=enemyHeight=30;ew=enemyWidth=60;esr=enemySpawnRate=1000
    plh=playerHeight=60;plw=playerWidth=120
    missileSpeed=10

    Sy=["+","-","*","/","%","|","&","<<",">>"]//symbols

    sIx=0   //symbolIndex

    bg1=gQA('bg1');bg2=gQA('bg2');bg3=gQA('bg3');bg4=gQA('bg4')

    pG=$('#playground')
    pG.p=pG.playground
    pG.ag=function(){
        var g=_a(
            pG.addGroup,
            G(arguments),
            pG)

        g.as=g.addSprite
    return g}

    pG.p(wh(pw,ph,'+'))

    pG.ag('background', wh(pw,ph,'+')).as('bg1',sP(bg1,pw,ph))
        .as('bg2',sP(bg2,pw,ph,pw)).as('bg3',sP(bg3,pw,ph)).as('bg4',sP(bg4,pw,ph,pw))
    pG.ag('enemies',
        wh(pw,ph))
    pG.ag('player',{
        posx: 0,
        posy: ph/2,
        width: plw,
        height: plh})
        .as('playerBody',{
            animation:'',posx:0,posy:0,
            width:plw,height: plh})
    pG.ag('playerMissileLayer',wh(pw,ph))


    pl=$('#player')[0]
    pl.player=Player()
    $('#playerBody').html("<span class='value'>"+pl.player.value
            +"</span><br>(<span class='symbol'>"
            +Sy[sIx]+"</span>) <span class='number'>"
            +pl.player.number +"</span>")
    $.pg=$.playground()
    $.pg.cb=$.pg.registerCallback



    $.pg.cb(function(){
        $("#bg1").x(fpw('bg1'))
        $("#bg2").x(fpw("bg2"))
        $("#bg3").x(cpw('bg3'))
        $("#bg4").x(cpw('bg4'))

        $(".enemy").each(function(){
            var t=this
            t.enemy.update()

            if(($(t).x()+ew)<0){$(t).remove()}

            else{var c=$(t).collision("#playerBody,."+$.gQ.groupCssClass) //collided
                if(_z(c)>0){
                    $("#player")[0].player.value+=$(t)[0].enemy.value
                    $("#player")[0].player.number=$(t)[0].enemy.value
                    $("#player .value").html($("#player")[0].player.value)
                    $("#player .number").html($("#player")[0].player.number)
                    $(t).remove()}}})
        $(".playerMissiles").each(function(){var t=this,posx=$(t).x()
            if(posx > pw){$(t).remove()}
            else{$(t).x(missileSpeed,true)
                var c=$(t).collision(".enemy,."+$.gQ.groupCssClass) //collided
                if(_z(c)>0){c.each(function(){ var t=this //var possible_value = Math.round(eval($(this)[0].enemy.value + " " + Sy[sIx] + " " + $('#player')[0].player.number));
                        var v=Math.round(functionEval($(t)[0].enemy.value,  //possible_value
                            Sy[sIx], $('#player')[0].player.number))
                        if(v<10000&&v>-10000){en=$(t)[0].enemy //thisEnemy
                            en.value=v
                            $(en.node[0]).text(en.value)}})
                    $(t).remove()}}})
        var p=$("#player")
        $.gq.kt=$.gq.keyTracker
        if($.gq.kt[37]){var n=p.x()-5;if(n>0){$("#player").x(n)}} //nextpos
        if($.gq.kt[39]){var n=p.x()+5;if(n<pw-plw){p.x(n)}}
        if($.gq.kt[38]){var n=p.y()-5;if(n>0){p.y(n)}}
        if($.gq.kt[40]){var n=p.y()+5;if(n<ph-plh){p.y(n)}}},rr)


    $.pg.cb(function(){
        var v=$M.ceil(
                rnd()*21
            )-11, //enemyValue

            n=sta('enemy_')

        $("#enemies").addSprite(
            n,
            {
                animation:'',

            posx: pw,
            posy:rnd()*ph*0.9,

                width:ew,
                    height:eh});

        var e=$('#'+n)   //enemyElement
        e.addClass("enemy")
        e[0].enemy=Enemy(e,v)
        e.text(v)

    },
        esr)








    $(document).keydown(function(e){

        if(e.keyCode===32){$l('kc 32')// on 'f'


            var p=$("#player"),
                plX=p.x(),
                plY=p.y(),
                n=sta('playerMissile_')


            $("#playerMissileLayer").addSprite(n,
                {posx:plX+plw,
                 posy:plY,
                 width:plw/2,
                 height:plh/2})

            nn=$('#'+n)

            nn.addClass("playerMissiles")

            nn.html("<div>"+  p[0].player.number  +"</div>")}


        else if(e.keyCode===70){
            $l('kc 70')
            sIx=(sIx+1)%_z(Sy)

            $("#player .symbol").text(Sy[sIx])}


    })



    pG.startGame()}





