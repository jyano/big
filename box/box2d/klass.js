_.e([fD, f, bD, b, j, co], function (o) {help(o)
	o.K = function () {
		var o = this, g = G(arguments),
				ks = o.__K()._K
		if (g.u) {return g.n ? _.f(ks) : g.p ?
				_.l(ks) : g.d ? ks.join(' ') : ks}
		g.F ? _.e(ks, g.f) :
				g.O ? o._aK(g.f.k) :
						g.n ? o._rmK(g.f) :
								o._aK.apply(o, g)
		return o.__K()}
	o.hK = function () {
		var o = this, g = G(arguments)
		if (g.u) {
			return false
		}
		return g.p ? o._hKE(g.f) :
				g.m ? o._hKA(g.f) :
						g.n ? o._hKO(g.f) :
						
								_.ct(o.K(), g.f && g.f.trim() )
	}
	o.nK = function () {
		var o = this, g = G(arguments), ks = o.K()
		return g.S ? _.iO(ks, g.f) :
				g.N ? ks[g.f] : _.z(ks)
	}
	o._of=function(k){
	
		var o=this; return !k ||
				o == k ||
				  S(k) && o.hK(k)}
	o.of=function(k){return  this._of(k)}
	o.is = function (k) {return k && this.of(k)? true: false}
	function help(o) {o.__K = function () {
			var o = this
			o._K = o._K || []
			o._K = _.compact(o._K)
			o._K = _.rv(_.uniq(_.rv(o._K)))
			return o
		}
		o.__K()
		o._aK = function () {
			var o = this, g = G(arguments)
			_.e(g, function (str) {
				if (!S(str) || !str) {
					return
				}
				_.e(str.trim().split(' '), function (k) {
					if (S(k)) {
						o._K.push(k.trim())
					}
				})
			})
		}
		o._hKA = function () {
			var f = this, g = G(arguments)
			var foundAtLeastOnce = false
			var missed = false
			_.e(g, function (k) {
				k && f.hK(k) ? foundAtLeastOnce = k :
						missed = true
			})
			return !missed && foundAtLeastOnce
		}
		o._hKE = function () {
			var f = this, g = G(arguments)
			var missed = false
			_.e(g, function (k) {
				if (k && !f.hK(k)) {
					missed = true
				}
			})
			return !missed
		}
		o._hKO = function () {
			var f = this, g = G(arguments)
			var has = false
			_.e(g, function (k) {
				if (k && f.hK(k)) {
					has = k
				}
			})
			return has
		}
		o._sK = function (newK) {
			var o = this, g = G(arguments)
			o.__K()
			o._K = g.s ? g : A(newK) ? newK : [newK]
			o.__K()
			return o
		}
		o._rmK = function (k) {
			var o = this
			o._sK(k ? _.wo(o.K(), k) : [])
			return o
		}
	}
})
f.of = function (k) {var f=this,b= f.B(); return f._of(k) || b.of(k)}
KTX = function () {W()
	b = w.A($dB(300, 300))
	f = core = b.f($cF(40)).K('core')
	f1 = b.f($pF(30, 300).mS()).K('arm')
	$l('f is the core fixtuer')
	$l('first the yes"s')
	$l('f.is(f): ' + f.is(f))
	$l('f.has("core"): ' + f.hK('core'))
	$l("f.of('core: ')" + f.of('core'))
	$l("f.is('core: ')" + f.is('core'))
	$l("f.of()" + f.of())
	$l('noos')
	$l("f.is()" + f.is())
	$l('f.is(f1): ' + f.is(f1))
	$l('f.has("arm"): ' + f.hK('arm'))
	$l("f.of('arm: ')" + f.of('arm'))
	$l("f.is('arm: ')" + f.is('arm'))
	core.K('hello neato').K('cooool')
			.K('neato', 'awesome')
	$l('ks: ',  core.K() )
	function wire(){
	w.b(function (cx) {
		//cx.ks()
		if (cx.w('arm')) {
			b.lV(10, 0);
			w.C($r())
		}
		else if (cx.w('core', 'roof')) {
			b.stat()
		}
	})
	w.roof.K('roof')
	}; wire()
}