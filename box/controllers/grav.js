gCo = $pt.gCo
gCo.gv = gCo.grv = gCo.grav = gCo.g = gCo.V = function (grav) {
	var co = this
	//applies 'gravity' by default
	co.G = N(grav, 1)
	return co
}
gCo.iSq = gCo.inv = function (inv) {
	var co = this
	if (U(inv)) {
		return co.invSqr
	}
	co.invSqr = inv ? true : false
	return co
}
gCo.r1 = gCo.iSq0 = gCo.invSq0 = function () {
	return this.iSq(0)
}
gCo.r2 = gCo.iSq1 = gCo.invSq1 = function () {
	return this.iSq(1)
} //this is default
$gCo = b2d.grav = function (a, b, c, d) {
	var co = new b2d.GC()
	return co
}
//
w.$co = function (co) {
	this.co(co)
	return co
}
w.gv = w.grv = w.grav = function (gv, fasterR1) {
	var w = this, g = G(arguments)
	var co = $gCo.apply(null, g)
	//optionally pass in gravity
	if (g.N_) {
		co.grv(g.f)
	}
	return w.$co(fasterR1 ? co.r1() : co)
}
w.gvR1 = w.gravR1 = function (grav) {
	return this.grav(grav, true)
}
//
GRAVTRAP = GVT = function () {W00().C('e').pen('welcome to grav controller')
	 
	 ship = w.yShip(300, 300).con('thrust').shootOnSpace().lD(10)
	
	w.gv().A(ship,

			w.bBa(3.2, 3, 20), w.rBa(3, 3.3, 30), w.xBa(3.4, 3, 40),

			w.cBa(3, 3.4, 50), w.lBa(3.2, 3.2, 60)
	)

}

GRAVR = GVR = function () {
	W00().C('e').pen('welcome to grav controller - top balls r1, bottom r2(default)')
	w.yShip(300, 200).con('thrust').shootOnSpace().lD(10)
	w.gv(1, true).A($$b(1, 6), $$r(2, 5), $$x(3, 4), $$c(4, 3), $$l(5, 2), $$l(6, 1))
	w.gv().A($$b(7, 6), $$r(8, 5), $$x(9, 4), $$c(10, 3), $$l(11, 2), $$l(12, 1))}
GRAVG = GVG = function () {
	W00().C('e').pen('welcome to grav controller - top has g:2, bottom has g:1 (default)')
	y = w.yShip(300, 200).con('thrust').shootOnSpace().de(1).lD(10)
	gCo = w.grav(2).A($$b(1, 6), $$r(2, 5), $$x(3, 4), $$c(4, 3), $$l(5, 2), $$l(6, 1))
	gCo2 = w.grav().A($$b(7, 6), $$r(8, 5), $$x(9, 4), $$c(10, 3), $$l(11, 2), $$l(12, 1))}
GRAVGR = GGR = function () {W00().C('e').pen(
			'welcome to grav controller - ' +
			'top has g:1,r:1, bottom has g:2,r:2 - res:' +
			'pinks move OUTWARDS only on bottom?')
	w.yShip(300, 200) // but why.. why y ship? :).con('thrust').shootOnSpace().lD(10)
	grav(w.grav(1, true), 1); grav(w.grav(4), 7)}


function mock() {
	$$B = function (x, y, c) {
		return w.BALL(x * 100, y * 100, 40, c)
	}
	$$b = function (x, y) {
		return $$B(x, y, 'b')
	}
	$$l = function (x, y) {
		return $$B(x, y, 'l')
	}
	$$x = function (x, y) {
		return $$B(x, y, 'x')
	}
	grav = function (gCo, n) {
		gCo.A($$b(n++, 6), $$l(n++, 5),
				$$x(n++, 4), $$x(n++, 3),
				$$l(n++, 2), $$b(n++, 1))
	}
	w._Ba = function (x, y, r, c) {
		return this.BALL(x * 100, y * 100, r, c || 'b')
	}
	w.bBa = w.bBall = function (x, y, r) {
		return this._Ba(x, y, r, 'b')
	}
	w.lBa = w.bBall = function (x, y, r) {
		return this._Ba(x, y, r, 'l')
	}
	w.xBa = w.bBall = function (x, y, r) {
		return this._Ba(x, y, r, 'x')
	}
	w.rBa = w.bBall = function (x, y, r) {
		return this._Ba(x, y, r, 'r')
	}
	w.cBa = w.bBall = function (x, y, r) {
		return this._Ba(x, y, r, 'c')
	}
}
$L('mock')