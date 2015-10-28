$fCo = b2d.force = function (x, y) {
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var co = new b2d.CFC()
	co.V(x, y)
	return co
}
fCo = $pt.fCo
fCo.V = function (x, y) {
	//applies 'gravity' by default
	this.F = U(x) ? V(0, 10) : V(x, y)
	return this
}
w.fCo = w.fo = w.force = function () {
	return this.co($fCo.apply(null, arguments))
}
FORCE = FRC = function () {
	W0().C('e').pen('welcome to (const) force controller')
	fCo = w.fo(1, 0)
	aCo = w.acc(1, 0)
	b = w.circ(100, 100, 20, 'b')
	b1 = w.circ(100, 200, 40, 'b')
	r = w.circ(100, 300, 20, 'r')
	r1 = w.circ(100, 400, 40, 'r')
	_.in(2, function () {
		w.C('d');
		fCo.A(b, b1)
		aCo.A(r, r1)
	})
}