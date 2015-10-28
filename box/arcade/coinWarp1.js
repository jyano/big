GREENGUY = GGG = function () {
	W({g: 0}).db()
	w.gG(100, 100)
	w.gG(200, 200)
	w.gG(300, 300)
	w.circ(100, 100, 30).K('bullet')
}

b.warping = function () { 
	var b = this
	
	$t(function () {
		
		var y = b.Y()
		if (y < 0) {b.Y(300) }
		if (y > 300) {b.Y(0) }
		
		var x= b.X()
		if (x < 0) {b.X(600)}
		if (x > 600) {b.X(0)}
	})
	
	return b
} //=b.marioWarping

w.coin = function (x, y) {var w=this
	// random coords on the screen
	x = N(x) ? x : M.r() * 600
	y = N(y) ? y : M.r() * 300
	//make coins
	var coin = M.r() <.8? w.BALL(x, y, 6, 'y') :
			w.BALL(x, y, 10, 'o')
	//give coin impulse
	coin.I(M.r() - .5, M.r() - .5)
	return coin.warping().K('coin')
}
cx.aOf=cx.fAOf = function (k) {return this.A().of(k)}
cx.bOf=cx.fBOf = function (k) {return this.B().of(k)}
cx.bAOf=function(k){return this.a().of(k)}
cx.bBOf = function (k) {return this.b().of(k)}
cx.nW=function(a,b,c){return !this.w(a,b,c)}
CONWARP = COIN = function () {
	score = 0
	badScore = 0
	W({W: 600, H: 300, g: 0, w: 0}).db()
	function thrustP(){
		return w.p(2.5).hzCen().Y(200)
				.lD(5).aD(10)
				.warping().con('thrust')}
	p = thrustP()
	function gG(){w.gG(M.r() * 600).warping()}
	_.t(2, gG)
	w.b(function (cx) {
	
	
		var withCoin
		if (withCoin = cx.w('coin')) { cx.setDestroyIf('coin')
		if (cx.fAOf( 'coin' )) {
			if (cx.fBOf('player')) {score++}
			else if (cx.fBOf('gG')) {badScore++}
		}
		else {
		
			if (cx.fAOf('player')) {score++}
			else if (cx.fAOf('gG')) {badScore++}
		}}
	})
	
	
	
	
	
	_.ev(1, function () {w.coin()
		w.st.pen(score+'/'+badScore)
	})
}
w.gG=w.greenGuy = function (x, y) {
	x = N(x) ? x : 100;
	y = N(y) ? y : 100
	var w = this
	var gG = w.D(x, y)
	
	gG.size= 20
	gG.core = gG.K('gG').rect(20, 25).re(2)
	
	gG.shrivel = function () {var gG = this
			gG.size = 20//; gG.lV(0).aV(0)
	}
	
	gG.makeShel=function(){var gG=this; if(gG.shel){gG.shel.kill()}

			gG.shel = gG.rectSensor(gG.size, gG.size)
	}
	
	gG.growSize =function(){this.size += 4; return this}
	_.ev(.5, function () { gG.growSize().makeShel() })
	gG.core.cl('player', function () {gG.shrivel()})
	
	return gG
	
}
 
 