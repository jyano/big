bCo = $pt.bCo
bCo.no = bCo.norm = function (x, y) {
	this.normal.Set(x, y);
	return this
}
bCo.os = function (os) {
	this.offset = os;
	return this
}
bCo.uDe = bCo.useDen = function (u) {
	this.useDensity = u;
	return this
}
bCo.de = bCo.den = function (d) {
	var g = G(arguments), d = g[0]
	this.density = d;
	if (g.N) {
		this.useDen(true)
	}
	return this
}
bCo.lD = bCo.linDrag = function (lD) {
	this.linearDrag = lD || 0;
	return this
}
bCo.aD = bCo.angDrag = function (aD) {
	this.angularDrag = aD || 0;
	return this
}
bCo.dg = bCo.drag = function (lD, aD) {
	return this.lD(lD).aD(aD)
}
$bCo = b2d.buoy = function (nX, nY, lD, aD) {
	var co = new b2d.BC()
	nX = N(nX) ? nX : 0;
	nY = N(nY) ? nY : -1;
	lD = N(lD) ? lD : 2;
	aD = N(aD) ? aD : 1
	return co.no(nX, nY).dg(lD, aD)
}
w.bCo = w.buoy = function () {
	var co = $bCo.apply(null, arguments)
	this.co(co)
	return co
}
B0 = function () {
	W(10)
	y = w.ship()
	w._BRICK_(320, 370, 500, 420)
	co = w.bCo(0, -25, 10, 0).os(-60)
	co1 = w.bCo(0, -30, -4, 1).os(-6)
	b = w.BALL(300, 100, 20, $r()).de(.1)
	b1 = w.BALL(320, 50, 20, $r()).de(1)
	b2 = w.BALL(320, 50, 20, $r()).de(1)
	co.A(y, b, b1)
	w.ship('b')
}
BCO = function () {
	W(10)
	y = w.ship()
	w.BRICK(320, 480, 640, 20)
	w.BRICK(320, 340, 320, 20)
	w.BRICK(170, 230, 20, 200)
	w.BRICK(470, 230, 20, 200)
	w._BRICK_(320, 245, 280, 170)
	co = w.bCo(0, -25, 10, 0).os(-60)
	co1 = w.bCo(0, -30, -4, 1).os(-6)
	b = w.BALL(300, 100, 20, $r()).de(.1)
	b1 = w.BALL(320, 50, 20, $r()).de(1)
	co1.A(y, b, b1)
}
BUOY = BOO = BOY = function () {
	W.L(40)
	y = w.ship()
	w.BRICK(320, 480, 640, 20)
	w.BRICK(320, 340, 320, 20)
	w.BRICK(170, 230, 20, 200)
	w.BRICK(470, 230, 20, 200)
	w._BRICK_(320, 245, 280, 170)
	co = w.bCo(0, -25, 10, 0).os(-60)
	co1 = w.bCo(0, -30, -4, 1).os(-6)
	n = 0
	$t(function () {
		w.eDB(function (b) {
			if (b.co()) {
				co.rm(b)
			}
			b.eachCx(function (f) {
				if (f.iSn()) {
					b.a2(co)
					//f.B().a2IfUncontrolled(co)
				}
			})
		})
		y.eachCx(function (f) {
			n++
		})
		if (n) {
			$l('y num cx: ' + n)
		}
		n = 0
	})
	_.doEv(3, function () {
		w.BALL(300, 100, M.r() * 20 + 4, $r()).de(.1)
	})
	co.AB(y)
}
_bCo = function () {
	var co = $bCo()
	co.normal.Set(0, -1);
	co.offset = -180 / 30
	co.useDensity = true;
	co.density = 2.0;
	co.linearDrag = 5;
	co.angularDrag = 2;
	return co
}
IFORCE = IFO = function () {
	W(50)
	w._BRICK_(320, 370, 500, 420)
	co = _bCo()
	w.co(co)
	b1 = w.ball(200, 100, 70).de(2)
	w.ball(300, 100, 90)
	b2 = w.ball(400, 100, 100).de(.1)
	//for each dB
	//if b  controlled, remove it from co
	//then iterate its cxs
	//for each of its cxs..
	// if one f  is a sensor,
	//..  and the other's b not controlled...
	//.. then  other's b joins  co 
 
	
	w.$eD(function fn(b) {
		b.free()

		
		for (var cx = b.GCxL(); cx; cx = cx.next) {
			
			var fA = cx.contact.fA()
			var fB = cx.contact.fB()
			if (fA.iSn()) { co.try(fB.B()) }
			if (fB.iSn()) { co.try(fA.B()) }
			
			
			
		}
		
		
	})
		
		

}
 