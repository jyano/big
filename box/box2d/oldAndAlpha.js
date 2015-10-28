old = function () {
	b2d.platform = function () {
		alert('b2d.platform')
		w.bii(300, 300, 200, 20)
		w.bii(300, 300, 20, 80)
	}
	b2d.ba = ba = function (x, y, rad) {
		x = x || 100
		y = N(y) ? y : x
		rad = rad || 20
		return w.A($dB(x, y), $cF(rad))
	}
	b2d.ball = function (x, y, radius) {
		alert('b2d.ball')
		return b2d.ba(x, y, radius).K('ball')
	}
	b2d.bumper = function (x, y, radius) {
		alert('b2d.bumber')
		return b2d.baa(x, y, radius).K('bumper')
	}
	b2d.brick = function (x, y, w, h) {
		alert('b2d.brick')
		return b2d.bii(x, y, w, h).K('brick')
	}
	b2d.box = function (x, y, w, h) {
		alert('b2d.box')
		return b2d.bi(x, y, w, h).K('box')
	}
	b2d.baa = baa = function (x, y, r) {//=ba2
		x = x || 100
		y = N(y) ? y : x
		r = r || 20
		return w.A($sB(x, y), $cF(r))
	}
	b2d.bi = bi = function (x, y, W, H) {//=brk=brick=
		x = N(x) ? x : 60;
		y = N(y) ? y : x
		W = N(W) ? W : 30;
		H = N(H) ? H : W
		return w.A($dB(x, y), $pF(W, H).re(0))
	}
	b2d.bii = bii = function (x, y, W, H) {
		x = N(x) ? x : 60;
		y = N(y) ? y : x
		W = N(W) ? W : 30;
		H = N(H) ? H : W
		return w.A($sB(x, y), $pF(W, H).re(0))
	}
	b2d.testBounceFrict = function () {
		b2d.bouncy()
		b2d.bouncy()
		b2d.bouncy()
		b2d.fricky()
		b2d.fricky()
		b2d.fricky()
	}
	b2d.somePolyFixt = function () {
		return b2d.AFixt([-100, 0], [0, -100], [100, 0], [60, 50])
	}
	b2d.testSomePolyFixt = function (x, y) {
		W()
		x = N(x) ? x : 400
		y = N(y) ? y : 400
		w.A($dB(x, y), b2d.somePolyFixt())
	}
	b2d.randomCircleFixture = function () {
		return $cH(M.r() * 50 + 8)
	}
	b2d.randomPolygonFixture = function () {
		var fixt, width, height
		width = M.r() * 100 + 14
		height = M.r() * 100 + 14 //12000/width
		return $pH(width, height)
	}
	b2d.randomFixture = fix = function () {
		return fD.setShape(
				_.random(1) ? b2d.randomPolygonFixture()
						: b2d.randomCircleFixture()
		)
	}
	SuperBodyDef = function (a) {
		return a || b2d.bodyDef()
	}
	//ran = function () {return M.r() * 600}
}
alpha = function () {
	bD.i = bD.ine = bD.inertia = function (ine) {
		var bD = this
		if (U(ine)) {
			return bD.insertiaScale
		}
		bD.insertiaScale = ine
		return bD
	}
}