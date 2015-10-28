b.spring=function(otherB){var b=this,w= b.W(); return w.spring(b, otherB) }

 
w.star = function (x, y) {
	var w = this
	var star = w.BALL(x, y, 4, 'w')
	star.de(0).re(2)
	star.K('star')
	return star
}
w.stars = function (amount) {
	var w = this
	amount = amount || 100
	_.t(amount, function () {
		var x = M.r() * 2000 - 750
		var y = M.r() * 1600 - 600
		w.star(x, y)
	})
	return w
}
b2d.levelSpace = function () {


	W({W: 600, H: 300, g: 0, w: 0}).db().stars(80)
	
	p = w.p(2.5).con( 'thrust')
	p.Y(200).hCen().aD(10000)
	return p.follow(300, 150)
}


MARIOORBIT = MOB=function () {
	W({W: 600, H: 300, g: 0, w: 0}).db().stars(80)

	p = w.p(2.5).con('thrust')
	p.Y(200).hCen().aD(10000)
	p.follow(300, 150)
	
	
	e = w.circStat(200, 200, 10, 'p')
	j = p.spring(e )
	
	j.fq(.4).dmp(.5).len(1)
}


b2d.minScDif = function (len, len2, sc) {
	return len - (len2 - len) * sc
}
 


SPOOM = function () {
	W({W: 600, H: 300, g: 0, w: 0})//.db()
			.stars(200)
	w.st.rXY(300, 150)
	p = w.p(2.5).con( 'thrust')
	p.Y(200).hCen().aD(10000)//.lD(.8)
	e =  w.bump(200, 200, 100, 'p')
	e.bS('earth', .13)
	e.de(100).re(2).K('earth')
	//j = w.dJtCl(p, e)
	//j = p.spring(e)
	j= w.dist(p,e)
	j.fq(.4).dmp(.5).len(1)//.len(50)
	$t(tk)
	function tk() {
		if (!p.sprite) {
			return
		}
		var sc = scFn()
		var x = b2d.minScDif(300, p.X(), sc)
		var y = b2d.minScDif(150, p.Y(), sc)
		w.st.sXY(sc).XY(x, y)
		w.st.alpha = scFn() * 2
		e.alpha = scFn()
	}
	//_.in(1,fun)
	function fun() {
		var eGx = e.sprite
		var pGx = p.sprite
		eGx.twL([{r: 360}, 10000])
		eGx.twL([{kx: 16}, 3000], [{kx: 0}, 3000])
		w.st.twL([{kx: 8}, 1000], [{kx: 0}, 1000], [{ky: 8}, 1000], [{ky: 0}, 1000]) // w.st.twL([{r: 360}, 10000])
		p.cl('star', function () {
			pGx.tw([{kx: 40}, 100], [{ky: 40}, 100], [{kx: 0, ky: 0}, 100])
		})
		e.cl('star', function () {
			w.st.flash()
		})
	}
	function scFn() {return b2d.invAvgDst(e, p) * 250}
	function scFnAlt() {return b2d.avgDst(e, p) * 250}
}



b2d.dx = function (b1, b2) {
	return b1.X() - b2.X()
}
b2d.dxSq = function (b1, b2) {
	var dif = b2d.dx(b1, b2)
	return dif * dif
}
b2d.dy = function (b1, b2) {
	return b1.Y() - b2.Y()
}
b2d.dySq = function (b1, b2) {
	var dif = b2d.dy(b1, b2)
	return dif * dif
}
b2d.sumSq = function (b1, b2) {
	return b2d.dxSq(b1, b2) + b2d.dySq(b1, b2)
}
b2d.avgDst = function (b1, b2) {
	return M.sqrt(b2d.sumSq(b1, b2))
}
b2d.invAvgDst = function (b1, b2) {
	return 1 / b2d.avgDst(b1, b2)
}

//$l('distance from star :'+ dst + ' - scale: ' + w.st.scaleX)
//instead of distance by diagnal distance, try just adding x and y distances
//dst =    dst * (1/300) reverses function!!!! awesome !!! (or just dont inverse)
SUNZOOM = SOOM=function () {
	W({W: 600, H: 300, g: 0, w: 0}).db()
	p = w.p(2.5).con( 'thrust').Y(200).hCen()
	p.aD(8).lD(.8)
	w.st.rXY(300, 150)
	w.st.XY(300, 150)
	_.t(10, function () {
		var x, y
		x = (M.r() * 1000) - 500
		y = (M.r() * 800) - 400
		w.BALL(x, y, 4, 'w').de(0).re(2)
	})
	var northStar = w.BUMP(300, 150, 10, 'pink').den(1).rest(.5) //stat?  why dont i collide?
	northStar.bS('sun', .2)
	_.in(.3,function () {
		northStar.sprite.tweenLoop([{r: 360}, 10000])
	} )
	w.distColl(p, northStar).freq(.2).damp(0).len(150)
	w.distColl(w.greenGuy(400, 100), northStar).freq(.1).damp(0).len(150)
	w.distColl(w.greenGuy(400, 200), northStar).freq(.1).damp(0).len(150)
	w.distColl(w.greenGuy(200, 100), northStar).freq(.1).damp(0).len(150)
	w.distColl(w.greenGuy(200, 200), northStar).freq(.1).damp(0).len(150)
	scaleFunc = function () {
		var dx, dy, dst
		dx = northStar.X() - p.X()
		dy = northStar.Y() - p.Y()
		dst = M.sqrt((dx * dx) + (dy * dy))
		//  $l('distance from star :'+ dst + ' - scale: ' + w.st.scaleX)
		dst = 150 / dst
		return dst > 2 ? 2 : dst
	}
	$t(function () {
		w.st.sXY(scaleFunc())
	
		//p.centerScale(scaleFunc())
	})
	// keepGuyCentered(scaleFunc)
	p.K('bullet')
}
 