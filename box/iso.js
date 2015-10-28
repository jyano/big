HANOI=function(){









}




Tile = function(){

    var that =this
    var shape = this

    this.container = new createjs.Container().drag()
    this.tile = cjs.diamond(80, 40, 'blue')

    //this.tile.graphics.s('red').f('blue').s('green').mt(0,0).lt(40,-20).lt(80,0).lt(40,20).lt(0,0)
    this.container.A(this.tile)
    this.coin = false
    this.addCoin = function(){


       this.coin = tileCoin()
        this.container.A(this.coin)

    }
    this.addBad=function(){

        this.bad= tileBad()
        this.container.A(this.bad )

    }

    this.playerTo = function(){

        if(shape.wasOn==true){location=location}//ISO()

        player.X(that.container.x )
        player.Y(that.container.y -14 )


        player.tile= shape
        player.col= shape.col
        player.row= shape.row

        if(shape.coin){shape.coin.remove()}
        if(shape.bad){location=location}
        shape.wasOn=true
        //if(isolated()){alert('!')}
    }

    this.container.on('dblclick', function(){

        h  = that
        that.tile.graphics.f('red').dc(0,0,2)
        $l('dblclicked!')
        that.playerTo()
    })

}
isoRow=function(r,howMany,x,y){
    x = x||0;
    y = y||0

    var row=[]

    _.times(howMany, function(i){

        x = x+ 40
        y = y- 20
        var t= new Tile()

        t.container.XY(x,y)

        stage.A(t.container)

        createjs.bindSlide(t.container)

        t.col= i

        t.row= r

        row.push(t)

    })

    return row}
isoGrid=function(n1,n2,x,y){ x=x||0; y=y||0

    var grid=[]

    _.times(n2,function(i){
        x=x+40
        y=y+20

        var row = isoRow(i,n1,x,y)

        grid.push(row)

    })




    return grid}

tileCoin=function(){

    return cjs.circle(15,'yellow', 'black')

     }

tileBad=function(){ return cjs.circle(15,'green', 'orange')}

tilePlayer=function(bm){
    player = bm
    player.right=function(){
        player.tile.container.remove()
        grid[player.row][player.col]=null
        grid[player.row][player.col+1]. playerTo()}
    player.left=function(){

        player.tile.container.remove()
        player.tile.exists=false
        //player.tile=null
        grid[player.row][player.col]=null
        grid[player.row][player.col-1]. playerTo()}
    player.down=function(){
        player.tile.container.remove()
        grid[player.row+1][player.col]. playerTo()}
    player.up=function(){

        player.tile.container.remove()
        grid[player.row-1][player.col]. playerTo()


    }
    player.to=function(x,y){
        grid[x][y].playerTo()
    return player}

    kD('u',function(){player.up()})
    kD('d',function(){player.down()})
    kD('l',function(){player.left()})
    kD('r',function(){player.right()})
    return player}
ISO=function(levNum){z()
    stage = createjs.stage(900,500).tick().A()
    grid = isoGrid(10,10,0,240)
    kD('s',function(){location=location})
    if(levNum){ window['lev'+levNum]()}
    else if( window['_pam']){window['lev'+ _pam]()}
    else{lev1()}
    stage.bm0('me', function(me){
        player = tilePlayer(me).sXY(.2).drag().to(5,5)})




}

killTile=function(a,b){
    grid[a][b].container.remove()
    grid[a][b].wasOn=true

}
lev1=function(){
    grid[3][5].container.remove()
    grid[4][4].container.remove()
    grid[6][6].container.remove()
    grid[7][1].container.remove()
    grid[0][3].addCoin()
    grid[1][3].addCoin()
    grid[3][4].addCoin()
    grid[5][2].addCoin()
    grid[8][8].addCoin()
}
lev2=function(){
    grid[0][0].addCoin()
    grid[0][9].addCoin()
    grid[0][3].addCoin()
    grid[1][3].addCoin()
    grid[1][6].addCoin()
    grid[2][1].addCoin()
    grid[3][4].addCoin()
    grid[3][8].addCoin()
    grid[4][7].addCoin()
    grid[5][2].addCoin()
    grid[6][5].addCoin()
    grid[6][9].addCoin()
    grid[8][8].addCoin()
    grid[8][2].addCoin()


    grid[8][4].addCoin()
    grid[9][0].addCoin()


    killTile(1,2)
    killTile(2,2)
    killTile(2,6)
    killTile(2,7)
    killTile(2,8)
    killTile(4,0)
    killTile(4,3)

    killTile(4,4)
    killTile(4,6)
    killTile(4,9)
    killTile(6,1)
    killTile(6,2)
    killTile(7,1)
    killTile(7,3)

    killTile(7,4)
    killTile(7,9)

    killTile(8,6)
    killTile(8,7)
    killTile(8,9)







}
lev3=function(){

    grid[0][0].addBad()
    grid[0][9].addBad()
    grid[0][3].addBad()

    grid[1][6].addBad()
    grid[2][1].addBad()
    grid[3][4].addBad()
    grid[3][8].addBad()

    grid[5][2].addBad()
    grid[6][5].addBad()
    grid[6][9].addBad()
    grid[8][8].addBad()
    grid[8][2].addBad()

}
lev4=function(){


    grid[2][9].addCoin()
    grid[5][0].addCoin()

    grid[2][3].addCoin()
    grid[5][6].addCoin()
    grid[9][3].addCoin()
    grid[3][1].addCoin()
    grid[4][4].addCoin()
    grid[0][8].addCoin()
    grid[6][7].addCoin()
    grid[5][8].addCoin()
    grid[9][6].addCoin()
    grid[2][2].addBad()
    grid[0][0].addBad()
    grid[0][9].addBad()
    grid[5][3].addBad()
    grid[2][6].addBad()
    grid[4][5].addBad()
    grid[9][0].addBad()
    grid[9][7].addBad()
    grid[3][8].addBad()


    grid[6][5].addBad()
    grid[6][9].addBad()

    grid[8][2].addBad()

}





isolatedBeta=function(){
    r= player.row;
    c= player.col
    if(
    //grid[r+1] &&grid[r+1][c] && grid[r+1][c].wasOn
    //&&  grid[r-1] &&grid[r-1][c] && grid[r-1][c].wasOn

        grid[r+1] &&grid[r+1][c] && grid[r+1][c].wasOn
        ){return true}
}



