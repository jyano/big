//b2d create contacts  to manage collision btwn 2 fs (If f has children (chainH),
// cxs exist for each relevant child)

cx.fA = cx.A = cx.GFA = function () {
	return this.GetFixtureA()
}
cx.fB = cx.B = cx.GFB = function () {
	return this.GetFixtureB()
}
cx.bA = cx.a = function () {
	return this.A().B()
}
cx.bB = cx.b = function () {
	return this.B().B()
}

// There are different kinds of contacts, derived from b2Contact,
// for managing contact between different kinds of fixtures
// (contact class for managing polygon-polygon collision ,  
// another contact class for managing circle-circle collision)
 

function ultimateContactReduc(){
	_.mbIn = function () {
		return function (fn) {
			var g = G(arguments)
			g.p ? fn.apply(null, g) :
					_.in(0, function () {
						fn.apply(null, g)
					})
		}
	}
//if there is a fn i'll run it, binding to b, (a, cx) and even pass in the g.o, return cx
//otherwise its sync, so just pass back array [b,a,cx,g.o]
	_.fst = function(f,s,t,fn){var  o = G(arguments).o
	if (fn) { _.b(fn,f)(s,t,o); return t }
	return [f,s,t,o]
}
cx.a$=function(){return _.fst(this.fA(),this.fB(),this, G(arguments).o)}
cx.b$=function(){return _.fst(this.fB(),this.fA(),this, G(arguments).o)}
cx.$$=function(){ var cx = this, g = G(arguments), a = cx.fA(), b = cx.fB(), o //k,fn
	
	o = F(g.t) ? {k1: g.f, k2: g.s, fn: g.t} :
			F(g.s) ? {k: g.f, fn: g.s} :
					 {k1: g.f, k2: g.s}
			
					 		 
	return o.k1?
			
			
			(
			a.of(o.k1) && b.of(o.k2)? cx.a$(o.fn) 
			: 
			b.of(o.k1) && a.of(o.k2)? cx.b$(o.fn) 
			: 
			cx
			)
			
			:
	
			(
			a.of(o.k) ? cx.a$(o.fn) 
			: 
			b.of(o.k) ? cx.b$(o.fn)
			: 
			cx
			)
			
			
			
			
}

	function moreTries() {
	cx.ab = function (k, fn) {
		var cx = this
		return function (k, fn) {
			var that = this
			if (cx.fA().of(k)) {
				if (fn) {
					_.b(fn, cx.fA())(cx.fB(), cx);
					return that
				}
				return [cx.fA(), cx.fB()]
			}
			else if (cx.fB().of(k)) {
				if (fn) {
					_.b(fn, cx.fB())(cx.fA(), cx);
					return that
				}
				return [cx.fB(), cx.fA()]
			}
		}
	}
	cx.aOrB1 = function (fn) {
		var g = G(arguments)
		//var cx = this, g = G(arguments), fA = cx.fA(), fB = cx.fB()
		return function (f) {
			if (fA.of(f)) {
				fn(f, cx)
			}
			else if (fB.of(g.f)) {
			}
		}
	}
	cx.cxFn = function (txMatFn, sucMatFn) {
		var cx = this
		var a = cx.fA()
		var b = cx.fB()
		return function (cx) {
			var cx = this
			var res = txMatFn(cx)
			if (res) {
				if (sucMatfn) {
					_.b(sucMatFn, res[0])(res[1], cx);
					return cx
				}
				return [res[0], res[1], cx]
			}
		}
	}
	cx.mbFn = function () {
		var g = G(arguments), o
		o = F(g.t) ? {a: g.f, b: g.s, fn: g.t} :
				F(g.s) ? {a: g.f, fn: g.s} :
				{a: g.f, b: g.s}
		var cx = this,
				a = cx.fA(),
				b = cx.fB()
		if (o.fn) {
			_.b(o.fn, a)(b, cx);
			return cx
		}
		return [a, b]
	}
	cx.a$ = function (fn) {
		var cx = this, g = G(arguments), a = cx.fA(), b = cx.fB()
		if (fn) {
			_.b(fn, a)(b, cx, g.o);
			return cx
		}
		return [a, b, cx, g.o]
	}
}

}

cx.this = function () {
	var cx = this, g = G(arguments), a= cx.fA(), 
			b= cx.fB(), k= g.f, fn= g.s
	
	if (a.of(k)) {
		if (F(fn)) {fn = _.b(fn, a)
			g.p ? fn(b, cx) : _.in(0, function () {fn(b, cx) })
			return cx }
		return [a, b, cx, g.o]
	}
	
	else if (b.of(k)) {
		if (F(fn)) { fn = _.b(fn, b)
			g.p ? fn(a, cx) : _.in(0, function () {fn(a, cx)})
			return cx }
		return [b, a]
	}

	 
}
cx.these = function (p1, p2, fn) {
	var cx = this, g = G(arguments), fA = cx.fA(), fB = cx.fB(), a = fA, b = fB
	if (a.of(p1) && b.of(p2)) {
		if (fn) {
			_.b(fn, a)(b, cx);
			return cx
		}
		return [a, b]
	}
	else if (b.of(p1) && a.of(p2)) {
		if (fn) {
			_.b(fn, b)(a, cx);
			return cx
		}
		return [b, a]
	}
}
cx.w = cx.of = cx.with = function () {
	var cx = this, g = G(arguments), o
	o = F(g.t) || (g.s && !F(g.s)) ? 
	{k: g.f, k1: g.s, fn: g.t} :
	{k: g.f, fn: g.s}
	return o.k1 ? cx.these(o.k, o.k1, o.fn) :
			cx.this(o.k, o.fn)
}



logic()
function logic(){
	cx.both = function () {
		var cx = this, g = G(arguments)
		var fA = cx.fA()
		var fB = cx.fB()
		if (fA.of(g.f) && fB.of(g.s)) {
			if (F(g.t)) {
				var fn = _.b(g.t, fA)
				g.p ? fn(fB, cx) :
						_.in(0, function () {
							fn(fB, cx)
						})
				return cx
			}
			return [fA, fB]
		}
		else if (fB.of(g.f) && fA.of(g.s)) {
			if (F(g.t)) {
				var fn = _.b(g.t, fB)
				g.p ? fn(fA, cx) : _.in(0, function () {
					fn(fA, cx)
				})
				return cx
			}
			return [fB, fA]
		}
		return cx
	}
	cx.wi = function () {
		var g = G(arguments), cx = this, o
		o = g.s && !F(g.s) ? {k1: g.f, k2: g.s, fn: g.t}
				: {k: g.f, fn: g.s}
		return o.k2 ? cx.both(o.k1, o.k2, o.fn, g.o) :
				cx.this(o.k, o.fn, g.o)
	}
	cx.with2 = cx.ofThese = cx.theseTwo = cx.withBoth = cx.isBetween = cx.these
	cx.nof = cx.withoutAny = cx.ex = cx.not = cx.excludes = function (u) {
		return !this.w(u)
	}
	
	cx.withBothFrom = cx.bw = cx.btwn = cx.btw = cx.between = cx.these
	cx.yesNo = function (ar1, ar2) {
	var ok = true
	_.e(ar1, function (k) { if (cx.nof(k)) {
			ok = false
		}
	})
	_.e(ar2, function (k) { if (cx.of(k)) {
			ok = false
		}
	})
	return ok
}
}

alt = function () {
	w.b0 = function (fn) {
		var w = this
		w.b(function (cx, f1) {
			var f = this
			_.in(0, function () {
				_.b(fn, f)(cx, f1)
			})
		})
		return w
	}
}
CX1 = function () {
	W()
	_.t(10, function () {
		w.ball(300, 400, 30).K('b')
		w.box(200, 400, 20, 20).K('x')
	})
	w.brick(700, 100, 90, 90, 20).K('s')
	w.b0(function (cx) {
		//cx.these('b','s', function(){this.B().stat()})
		cx.this('s', function (z) {
			var f = this, b = f.B()
			_.in(0, function () {
				b.X(40, '+')
			})
		})
		cx.this0('s0', function () {
			this.B().X(40, '+')
		})
		cx.of0('s1', function () {
			this.B().X(40, '-')
		})
	})
}

cx.exIn = cx.excludeInclude = function (no, yes) {
	return this.w(yes) && this.excludes(no)
}
cx.inEx = cx.includeExclude = function (yes, no) {
	return this.w(yes) && this.excludes(no)
}
cx.dsIf = cx.destroyIf = cx.setDestroyIf = function () {
	var cx = this
	_.e(arguments, function (k) {
		cx.a().setDestroyIf(k);
		cx.b().setDestroyIf(k)
	})
	return cx
}
cx.dsOIf = cx.destroyOtherIf = function (k) {
	var a = this.a(), b = this.b()
	if (a.is(k)) {
		b.setDestroy()
	}
	else if (b.is(k)) {
		a.setDestroy()
	}
}
cx.ds = cx.destroy = cx.destroyBoth = function () {
	this.a().K('destroy')
	this.b().K('destroy')
	return this
}
cx.sr = cx.ofSr = function (fn) {
	var cx = this
	var sr = cx.aSr() ? [cx.fA(), cx.fB()] :
			cx.bSr() ? [cx.fB(), cx.fA()] :
					false
	if (fn) {
		fn(sr);
		return cx
	}
	return sr
}
cx.aSr = function () {
	return this.fA().iSr()
}
cx.bSr = function () {
	return this.fB().iSr()
}
cx.aCo = cx.aBy = function (co) {
	var cx = this, bB = cx.bB();
	return co ? bB.a2(co) : bB.hasCo()
}
cx.bCo = cx.bBy = function (co) {
	return co ? this.bA().a2(co) : this.bA().hasCo()
}
cx.aNoCo = function () {
	return !this.aBy()
}
cx.bNoCo = function () {
	return !this.bBy()
}
cx.bCo = cx.bindCo = function () {
	var cx = this//if any fixt collides with a certain kind
// switch to the controller with that name
	G(arguments).e(function (k) {
		cx.w(k, function () {
			f.switchTo(window[k])
		})
	})
}

function zero(){
	cx.ofThis = cx.anyWith = cx.in = cx.inc = cx.includes = cx.includes = cx.eitherOf = function (k, fn) {
		var cx = this
		var a = cx.fA()
		var b = cx.fB()
		if (a.of(k)) {
			if (fn) {
				_.b(fn, a)(b, cx);
				return cx
			}
			return [a, b]
		}
		if (b.of(k)) {
			if (fn) {
				_.b(fn, b)(a, cx);
				return cx
			}
			return [b, a]
		}
	}
	cx.ofThese0 = cx.these0 = function (p1, p2, fn) {
		$l('these0')
		var cx = this
		var a = cx.fA()
		var b = cx.fB()
		if (a.of(p1) && b.of(p2)) {
			if (fn) {
				_.in(0, function () {
					_.b(fn, a)(b, cx)
				})
				return cx
			}
			return [a, b]
		}
		if (b.of(p1) && a.of(p2)) {
			if (fn) {
				_.in(0, function () {
					_.b(fn, b)(a, cx)
				})
				return cx
			}
			return [b, a]
		}
	}
	cx.f1 = function () {
		return function () {
		}
	}
	cx.ofThis0 = cx.this0 = function (k, fn) {
		// a lot:$l('this0')
		var cx = this
		var a = cx.fA()
		var b = cx.fB()
		var g = G(arguments)
		if (!a || !b) {
			$l('!a || !b');
			return cx
		}
		if (a.of(g.f)) {
			if (F(g.s)) {
				_.in(0, function () {
					_.b(g.s, a)(b, cx)
				})
				return cx
			}
			return [a, b]
		}
		else if (b.of(g.f)) {
			if (g.s) {
				_.in(0, function () {
					_.b(g.s, b)(a, cx)
				})
				return cx
			}
			return [b, a]
		}
	}
	cx.of0 = cx.w0 = cx.with0 = function () {
		var cx = this,
				g = G(arguments), o
		o = F(g.t) || g.s && !F(g.s) ?
		{k: g.f, k1: g.s, fn: g.t} : {k: g.f, fn: g.s}
		return o.k1 ? cx.these0(o.k, o.k1, o.fn) :
				cx.this0(o.k, o.fn)
	}
	CXW = CX0 = function () {
		W()
		_.t(10, function () {
			w.ball(300, 400, 30).K('b')
			w.box(200, 400, 20, 20).K('x')
		})
		w.brick(700, 100, 90, 90, 20).K('s')
		w.brick(750, 300, 100, 100, -20).K('s0')
		w.brick(700, 500, 100, 100, 40).K('s1')
		w.b(function (cx) {
			//cx.these('b','s', function(){this.B().stat()})
			cx.this('s', function (z) {
				var f = this, b = f.B()
				_.in(0, function () {
					b.X(40, '+')
				})
			})
			cx.this0('s0', function () {
				this.B().X(40, '+')
			})
			cx.of0('s1', function () {
				this.B().X(40, '-')
			})
		})
	}
}