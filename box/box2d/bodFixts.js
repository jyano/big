b.GFL = b.GFxL = function () {
	return this.GetFixtureList()
}
b.CF = b.CFx = function (fD) {
	return this.CreateFixture(fD)
}
b.DF = b.DFx = function (f) {
	this.DestroyFixture(f)
	return this
}
b2d.fxPar=   function (fxs, fn) {
	var b = this
	fxs = _.m(fxs, function (f) {
		//if its not an array,, assume is fine, and leave it as is
		if (!A(f)) {
			return f
		}
		//if (f.isSensor) {return b2d.polySens.apply(null, f)}
		return (f.length == 1 || f.length == 3) ?
				$cF.apply(null, f) :
				$pF.apply(null, f)
	})
	if (fn) {
		_.e(fxs, fn);
		return b
	}
	return fxs
}
b.fxPar =   function (f) {
// so how does that work??
// the array len determines if it is to make 
// a circle fxt ($cF) or rect fixt $pF
	 var b=this
	b2d.fxPar(f, function (fD) {
		b.f(fD)
	})
	return b
}
FPAR = DICK = BED = function () {
	W()
	w.A($dB(300, 300), guyInBed) // have to fix w.dyn
	w.D(100, 100, b2d.fxPar(guyInBed))
	w.D(400, 300, b2d.fxPar(dick)
	)
	w.D(400, 300, dick)
}
b.f = function (fD) {

//
//b.f is insteresting
// if you pass it it an array..
// it maps that through fxPar
// that's how we can pass arrays of numbers that 
// represent circle and rect fixts
//without having to instantiate them all the way ourselves!
	var b = this, g = G(arguments)
	if (g.u) {
		return b.GFL()
	}
	if (g.A_) {
		_.e(b2d.fxPar(g.f), function (fD) {
			b.f(fD)
		})
		return b
	}
	var f = b.CF(g.f)
	if (g.f.K()) {
		f.K(g.f.K())
	}
	return f
}
b.fD = b.fxD = function (fD) {
	return this.f($fD(fD))
}
b.cF = b.cFx = b.circ = function () {
	var cF = $cF.apply(null, arguments)
	return this.f(cF)
}
b.rF = b.rect = function () {
	return this.f($rF.apply(null, arguments))
}
b.rH = b.rF = function () {
	var rH = $rH.apply(null, arguments)
	return this.fD(rH)
}
b.aF = b.arrr = function () {
	return this.f($aF.apply(null, arguments))
}
b.pF = b.poly = function () {
	return this.f($pF.apply(null, arguments))
}
b.ds = function () {
	var b = this
	b.W().DB(b)
	return b
} //= b.destroy
b.dsF = b.dF = function (f) {
	this.DFx(f)
	return this
}
b.sr1 = b.s1 = b.mS = function () {
	return this.sSr(1)
}
b.sSr = function (sr) {
	var b = this
	b.fs(function (f) {
		f.sr(sr)
	})
	return b
}
b.sr = b.sens = function (sr) {
	var b = this
	if (U(sr)) {
		return b.f().iSr()
	}
	b.sSr(sr)
	return b
}
b.de = b.den = function (de) {
	var b = this//$l('b.de boxBody.js')
	if (U(de)) {
		return b.f().de()
	}
	b.e(function (f) {
		f.SetDensity(de)
	})
	this.ResetMassData()
	return this
}
b.fr = b.fric = function (fr) {
	var b = this
	return D(fr) ?
			b.fs(function (f) {
				f.SetFriction(fr)
			}) :
			b.list().GetFriction()
}
b.re = b.rest = function (re) {
	var b = this
	return D(re) ? b.fs(function (f) {
		f.re(re)
	}) :
			b.f() ? b.f().GetRestitution() : false
}
b.rad = function (r) {
	var b = this, h = b.H()
	if (U(r)) {
		return h.rad()
	}
	h.rad(r);
	return b
}
b.H = function () {
	return this.f() && this.f().H()
}
b.n = b.nFx = b.num = b.count = function () {
	return this.m_fixtureCount
}
