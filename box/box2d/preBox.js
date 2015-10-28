_.fW = _.fWh = _.findWhere
M = Math
M.lD = M.lineDistance
M.tR = M.toRadians
M.tD = M.toDegrees
_.e = _.each
_.m = _.map
_.b = _.bind
M.r = M.random
_.ran = _.random
_.pI = parseInt
_.t = _.times
_.f = _.first
_.r = _.rest
_.i = _.initial
_.l = _.last
_.sT = setTimeout
_.rj = _.reject
_.ev = function (sec, fn) {
	return setInterval(fn, sec * 1000)
}
_.in = function (sec, fn) {
	return setTimeout(fn, sec * 1000)
}

_.ct= _.contains

M.lineDistance = function (point1, point2) {
	var xs = 0;
	var ys = 0;
	xs = point2.x - point1.x;
	xs = xs * xs;
	ys = point2.y - point1.y;
	ys = ys * ys;
	return Math.sqrt(xs + ys);
}
cjs.waitFor = function (time) {
	time = N(time) ? time : 1000
	cjs.wait = true
	setTimeout(function () {
		cjs.wait = false
	}, time)
}
$.inASec = function (func) {
	return setTimeout(func, 1000)
}
$t = function (fn) {
	cjs.t(fn)
}
$rG = $rGx = function () {
	return cjs.rect.apply(cjs, arguments)
}
$r2G = $r2Gx = function () {
	return cjs.rect2.apply(cjs, arguments)
}
$cG = $cGx = function () {
	return cjs.circ.apply(cjs, arguments)
}
_.sI = function (fn, ms) {
	return setInterval(fn, ms)
}
keyObj = {
	up: 38, u: 38,
	down: 40, d: 40,
	left: 37, l: 37,
	right: 39, r: 39,
	space: 32, s: 32,
	enter: 13, e: 13
}
$.tK = $.tKey = $toKey = keyObj.par = function (k) {
	k = k.toLowerCase()
	return keyObj[k] ? keyObj[k] : k
}
$.K = function (k, fn) {
	if (O(k)) {
		_.e(k, function (fn, k) {
			if (s$(k).isUpper()) {
				$.thisKeyup(k, fn)
			}
			else {
				_key(k, fn)
			}
		})
		return $
	}
	return $.thisKeydown(fn)
}
$.K.ob = function () {
	_.e(k, function (fn, k) {
		if (s$(k).isUpper()) {
			$.thisKeyup(k, fn)
		}
		else {
			_key(k, fn)
		}
	})
	return $
}
$.keydown = function (fn) {
	$('body').on('keydown', fn)
}
$.keyup = function (fn) {
	$('body').on('keyup', fn)
}
$.thisKeyup = function (k, fn) {
	k = $toKey(k)
	$.keyup(function (e) {
		if (e.which == k) {
			fn(e)
		}
	})
}
$.thisKeydown = function (k, fn) {
	k = $toKey(k)
	$.keydown(function (e) {
		if (e.which == k) {
			fn(e)
		}
	})
}
K = cjs.Keys = function (o) {//if (!O(o)) {return}
	if (F(o.u)) {
		$t(function () {
			if (K.u) {
				o.u(K.u)
			}
		})
	}
	if (o.U) {
	}
	if (F(o.d)) {
		$t(function () {
			if (K.d) {
				o.d(K.d)
			}
		})
	}
	if (F(o.l)) {
		$t(function () {
			if (K.l) {
				o.l(K.l)
			}
		})
	}
	if (F(o.r)) {
		$t(function () {
			if (K.r) {
				o.r(K.r)
			}
		})
	}
}
$K = function () {
	K.l = K.left = false
	K.r = K.right = false
	K.u = K.up = false
	K.d = K.down = false
	K.dir = 0
	$.kD('l', function () {
		if ($.test) {
			$l('left pressed')
		}
		K.l = K.left = true
		K.dir = 'left'
	})
	$.kU('l', function () {
		if ($.test) {
			$l('left lifted')
		}
		K.l = K.left = false
	})
	$.kD('r', function () {
		if ($.test) {
			$l('right pressed')
		}
		K.r = K.right = true
		K.dir = 'right'
	})
	$.kU('r', function () {
		if ($.test) {
			$l('right lifted')
		}
		K.r = K.right = false
	})
	$.kD('u', function () {
		if ($.test) {
			$l('up pressed')
		}
		K.u = K.up = true
	})
	$.kU('u', function () {
		if ($.test) {
			$l('up lifted')
		}
		K.u = K.up = false
	})
	$.kD('d', function () {
		if ($.test) {
			$l('down pressed')
		}
		K.d = K.down = true
	})
	$.kU('d', function () {
		if ($.test) {
			$l('down lifted')
		}
		K.d = K.down = false
	})
} //= cjs.watchKeys
_.z = _.size
$L = $load = function (metNames) {
	var $w = window,
			$l = function (a) {
				console.log(a);
				return a
			},
			F = _.isFunction
	metNames = _.isArray(metNames) ? metNames : _.toArray(arguments)
	load('_pre0')
	load('_pre')
	load('_pre1')
	load(metNames)
	load('_post0')
	load('_post')
	load('_post1')
	function load(fn) {
		if (!fn) {
			return
		}
		if (_.isArray(fn)) {
			return load.apply(null, fn)
		}
		_.each(arguments, function (fn) {
			fn = $w[fn];
			if (F(fn)) {
				fn()
			}
		})
	}
}
//s$ = S;
$A = Array;
$B = Boolean;
$N = Number;
$O = Object;
$F = Function;
$S = String;
J = $J = JSON
M = Math
U = function u(a, b) {
	if (_.isUndefined(b)) {
		return _.isUndefined(a)
	}
	// return  _.extend.apply(_.extend, arguments)
}
A = _.isArray
AA = function (a) {
	return A(a) && A(a[0])
}
B = _.isBoolean
D = function (a, b, c) {
	return _.isUndefined(b) ? !_.isUndefined(a)
			: _.defaults.apply(_.defaults, arguments)
}
F = function f(fn, dfFn) {
	return fn && _.isFunction(fn)
}
V = function (x, y) {
	return {x: x, y: y}
}
N = function (n, n2) {
	if (U(n2)) {
		return _.isNumber(n)
	}
	return _.tN(n, n2)
}//N = _.isNumber
N0 = function (n) {
	return N(n, 0)
}//N = _.isNumber
N1 = function (n) {
	return N(n, 1)
}//N = _.isNumber
/*
 PN = function (n, n2) {
 if (U(n2)) {return ( _.isNumber(n)&&n<0)||1}
 return _.tN(n, n2)
 }//N = _.isNumber
 */
O = function (a, b) {
	if (_.isUndefined(b)) {
		return _.isObject(a)
	}
	if (_.isObject(a)) {
		// return  _.extend.apply(_.extend, arguments)
	}
}
I = function (f, i) {
	var g = G(arguments), clear
	if (F(g[0])) {
		f = g[0];
		i = g[1]
	}
	else {
		f = g[1];
		i = g[0]
	}
	i = !N(i) ? 1000 : i > 5 ? i : i * 1000
	if (g.N) {
		f()
	}
	clear = setInterval(f, i)
	return function () {
		clearInterval(clear)
	}
}
S = function (a) {
	return _.isString(a)
}
$a = function (ob, met, arr) {
	var g = G(arguments)
	if (g.t) {
		return g.f[g.s].apply(g.f, g.t)
	}
	return g.f.apply(null, g.s)
}
R = function (n, n2) {
	var num
	n = N(n) ? n : 1
	n2 = N(n2) ? n2 : 0
	return M.round((M.random() * n) + n2)
	function alt(n, n2) {
		var num
		if (O(n)) {
			n = n.length
		}
		n = N(n) ? n : 1
		n2 = N(n2) ? n2 : 0
		num = (M.random() * n) + n2
		return M.floor(num)
	}
}
_.fn = _v = function (a) {
	return S(a) ? function () {
		Function(a)()
	} :
			F(a) ? a : F(a.value) ?
					a.value() : a.value
}
_.b = _.bind
_.l = _.last;
_.f = _.first;
_.i = _.initial;
_.r = _.rest
_.e = _.each;
_.m = _.map;
_.t = _.times
_.gS = function (pop) {
	//for gen
	var g = G(arguments), that = this
	return function (val) {
		if (U(val)) {
			return this[pop]
		}
		this[pop] = val
		return this
	}
}
_.jS = function (a, b, c) {
	return S(a) ? $.Gj(a, b, c) : JSON.stringify(a)
}
_.jP = function (a, b, c) {
	return S(a) ? JSON.parse(a, b) : $(a).prepend(b, c)
}
_.tFn = function (fn, fn2) {
	return F(fn) ? fn : fn2 ? fn2 : function () {
		return
	}
}
_.z = _.size
_.x = _.extend;
_.p = _.partial;
_.tA = function (a) {
	return O(a) ? _.toArray(a) : A(a) ? a : a ? [a] : []
}
_.df = _.defaults
M.tN = _.tN = function (what, aNum) {
	return N(what) ? what : aNum || 0
}
_.tF = function (a, b) {
	b = N(b, 2)
	return a.toFixed(b)
}
M.c = M.cos;
M.s = M.sin
M.tD = M.toDegrees = tDeg = function (r) {
	return r * (180 / M.PI)
}
M.tR = M.toRadians = M.toRads = tRad = rad = function (degs) {
	if (O(degs)) {
		degs = degs.rotation
	}
	return degs * M.PI / 180
}
M.av = M.avg = M.average = function self(a, b) {
	var g = G(arguments), z = _.size(g), n = 0;
	if (A(a)) {
		return _a(self, a)
	}
	if (O(a)) {
		return V(
				M.av(a.x, b.x),
				M.av(a.y, b.y)
		)
	}
	_.e(g, function (a) {
		n += a
	})
	return n / z
}
M.dst = M.distance = dst = function self(a, b) {
	M.xyz = xyz = function (a, b) {
		a = a || {};
		a.x = a.x || 0;
		a.y = a.y || 0;
		a.z = a.z || 0
		b = b || {};
		b.x = b.x || 0;
		b.y = b.y || 0;
		b.z = a.z || 0
		return sqr(a.x - b.x, a.y - b.y, a.z - b.z)
		function sqr(a, b) {
			var g = G(arguments)
			return M.sqrt(U(b) ? a
					: sq.apply(this, g))
		}
		
		function sq(a) {
			var g = G(arguments), n = 0
			_.each(g, function (a) {
				n += (a * a)
			})
			return n
		}
	}
	if (A(a) && U(b)) {
		return self(a[0], a[1])
	}
	if (U(b)) {
		return xyz(M.V({}), M.V(a))
	}
	return xyz(M.V(a), M.V(b))
}
M.lD = M.dist = M.lineDistance = function (p1, p2) {
	var xs = 0, ys = 0;
	p1 = V(p1)
	p2 = V(p2)
	xs = p2.x - p1.x;
	xs = xs * xs;
	ys = p2.y - p1.y;
	ys = ys * ys;
	return M.sqrt(xs + ys);
}
M.lC = M.lineCenter = function (x1, y1, x2, y2) {
	if (A(x1)) {
		if (N(x1[3])) {
			return center(x1[0], x1[2], x1[2], x1[3])
		}
		return center(x1[0], x1[1], y1[0], y1[1])
	}
	if (O(x1)) {
		return center(x1.x, x1.y, y1.x, y1.y)
	}
	return center(x1, y1, x2, y2)
	function center(x1, y1, x2, y2) {
		var x, y
		if (x1 > x2) {
			upperX = x1;
			lowerX = x2
		}
		else {
			upperX = x2;
			lowerX = x1
		}
		if (y1 > y2) {
			upperY = y1;
			lowerY = y2
		}
		else {
			upperY = y2;
			lowerY = y1
		}
		x = lowerX + (upperX - lowerX) / 2
		y = lowerY + (upperY - lowerY) / 2
		return V(x, y)
	}
}
M.warp = function (lowBound, highBound, cushion) {//wrp=
	cushion = cushion || 0
	return function (num) {
		return num < lowBound ? highBound - cushion
				: num > highBound ? lowBound + cushion
				: num
	}
}
_.upd = M.u = function (curr, update, g) {
	var res
	if (g.p) {
		res = curr + update
	}
	else if (g.n) {
		res = curr - update
	}
	else if (g.m) {
		res = curr * update
	}
	else if (g.d) {
		res = curr / update
	}
	else res = update
	return res
}
_.adj = function (income, tax) {
	//tax ~ deltaLimit ~ buffer
	var income = income || 0, tax = tax || 0
	if (income > 0) {
		return income > tax ? income - tax : 0
	}
	return -income > tax ? income + tax : 0
}
_.cap = function (n, m, M) {
	if (U(m)) {
		return n
	}
	if (A(m)) {
		M = m[1]
		m = m[0]
	}
	return n < m ? m
			: n > M ? M
			: n
}
_.pI = M.pI = _.tI = function (a, b) {
	if (U(b)) {
		return parseInt(a)
	}
	return parseInt(_.tN(a, b))
	//_.pI = parseInt//_.tI = function (a, b) {return parseInt(_.tN(a, b))}
}
_.sI = function (a, b) {
	return setInterval(a, b)
}
_.ev = function (n, fn) {
	setInterval(fn, n * 1000)
}
_.sT = function (fn, ms) {
	return setTimeout(fn, ms)
}
_.in = function (time, fn) {
	var g = G(arguments),
			o = F(g[0]) ? {fn: g[0]} : {s: g[0], fn: g[1]}
	o.s = N(o.s) ? o.s : 1
	o.fn = o.fn || function () {
	}
	return setTimeout(
			function () {
				if (g.m) {
					$.C($r())
				}
				o.fn()
			},
			o.s * 1000)
}
_.tU = _.tUc = _.tUC = function (a) {
	return S(a) ? a.toUpperCase() :
			A(a) ? _.m(a, function (a) {
				return S.tU(a)
			}) : a
}
_.tL = _.tLc = _.tLC = function (a) {
	return a.toLowerCase()
}
$l = function (a) {
	var g = G(arguments), v
	if (O(a) && N(a.x) && N(a.y)) {
		v = a.toFixed()
		//  $l(v.x + ' , ' + v.y)
		return a
	}
	_.e(
			g, function (a) {
				console.log(
						_.isFunction(a) ? a.toString()
								: O(a) ? JSON.stringify(a)
								: a
				)
			}
	)
	return a
}
$l = function (a) {
	console.log.apply(console, arguments)
	return a
}
$z = function (z) {
	console.error(z)
}
$d = function (o) {
	console.dir(o);
	return o
}
G = function (arg, str) {//history: conflict with N(not neg) and N(g.$ && N(g.f) ) .. resolved!
	var ag = _.tA(arguments), p, n, m, d, g
	
	function setA() {
		
		//G('k', arguments)
		if (S(ag[0])) {
			g = _.tA(ag[1])
			if (S(g[0])) {
				g[ag[0]] = g.shift()
			}
		}
		else {
			g = _.tA(ag[0])
		}
		//G(arguments, 'k')
		if (S(ag[1]) && S(_.l(g))) {
			g[ag[1]] = g.pop()
		}
		if (_.l(g) == '+') {
			p = g.pop()
		}
		else if (_.l(g) == '-') {
			n = g.pop()
		}
		else if (_.l(g) == '*') {
			m = g.pop()
		}
		else if (_.l(g) == '/') {
			d = g.pop()
		}
		_.df(g, {
			f: _.f(g), s: g[1], t: g[2],
			fo: g[3], fi: g[4], si: g[5],
			se: g[6], ei: g[7], ni: g[8], te: g[9],
			l: _.l(g), r: _.r(g), i: _.i(g),
			L: g.length, z: g.length,
			p: p, m: m, d: d, n: n
		})
	}
	
	setA()
	function numArgs() {
		g.u = U(g.f);
		g.U = !g.u
		var str = ''
		_.t(g.L, function () {
			str += '$'
		})
		g[str] = 1
	};
	numArgs()
	function gStr() {
		g.S = g.$ && S(g.f)
		g._S = S(g.l)
		g.$S = g.S_ = S(g.f)
		g.$_S = S(g.s)
	};
	gStr()
	function gNum() {
		g.N = g.$ && N(g.f)
		g.N_ = N(g.f);
		g._N = N(g.l)
		g.$N = N(g.f)
		g.$_N = N(g.s)
	};
	gNum()
	function gArr() {
		g.A = g.$ && A(g.f)
		g.A_ = A(g.f);
		g._A = A(g.l)
		g.SA = g.$$ && g.S_ && A(g.s)
	};
	gArr()
	function gFn() {
		g.F = g.$ && F(g.f);
		g.F_ = F(g.f);
		g._F = F(g.l)
	};
	gFn()
	function gOb() {
		g.O = g.$ && O(g.f)
		g.O_ = O(g.f)
		g._O = O(g.l)
		g.OO_ = O(g.f) && O(g.s)
	};
	gOb()
	function gEach() {
		g.e = function (fn, str) {
			var g = this
			if (str) {
				g.e(
						function (g) {
							fn[str](g)
						}
				)
				return fn
			}
			_.e(g, fn)
			return g
		}
		g.e0 = function (fn) {
			_.e(this[0], fn)
		}
		g.e1 = function (fn) {
			_.e(this[1], fn)
		}
		g.eR = function (fn) {
			_.eR(this, fn)
		}
		g.eF = function (fn) {
			_.e(g.f, fn)
		}
		g.eS = function (fn) {
			this.e(
					function (k) {
						if (S(k)) {
							fn(k)
						}
					}
			)
		}
	};
	gEach()
	function gAdv() {
		g.G = function (a) {
			a = _.clone(a)
			if (g.n) {
				a.push('-')
			}
			else if (g.p) {
				a.push('+')
			}
			else if (g.d) {
				a.push('/')
			}
			else if (g.m) {
				a.push('*')
			}
			return a
		}
		g.g = g.G(g)
		g.a = g.ap = function () {
			var g = this, gg = G(arguments)
			//if(g.A){
			return gg.s ?
					$a(gg.s, gg.t, g.f) :
					$a(gg.f, g.f)
		}
		g.ush = function (d) {
			var g = this,
					res
			if (U(d)) {
				d = null
			}
			g.t = g.s
			g.s = g.f
			g.f = d
			res = g.unshift(d)
			return res
		}
	};
	gAdv()
	return _g = g
}
G._ = function () {
	g = G(arguments)
	alert("$l(g.L + ' args')")
}
TXG = function () {
	doIt('haha', 4, '-')
	function doIt() {
		var g = G(arguments)
		$l(_g = g)
		console.dir(g)
	}
}

function NEWNEWNEW(){
	_.doEv = _.andThen = function (ev, fn) {
		fn()
		_.ev(ev, fn)
	}
///// new:
$l_ = function () {
	var g = G(arguments)
	if (b2d.test || w.test) {
		_.e(g, function (str) {
			$l(str)
		})
	}
	return g.f
}
_.rv = function (ar) {
	return ar.reverse()
}
_.spl = function () {
	var g = G(arguments), o
	// spl is a good function
	//...
	o = N(g.t) ? {ar: g.f, ix: g.s, numToRm: g.t, it: _.r(g, 3)} :
			N(g.s) ? {ar: g.f, ix: g.s, it: _.r(g, 2)}
					: A(g.f) ? {ar: g.f, it: g.r} : {it: g}
	o.ar = o.ar || []
	o.ix = N(o.ix, 0) //   where to add/remove items ( neg vals ~   pos from the end )
	o.numToRm = N(o.numToRm, 0)//  num items to rm
	if (g.p) {
		$l('ar before: ')
		$l(o.ar)
	}
	var res = o.ar.splice.apply(o.ar, [o.ix, o.numToRm].concat(o.it))
	if (g.p) {
		$l('spl res: ')
		$l(res)
		$l('ar after: ')
		$l(o.ar)
	}
	return res
}
_.spl.TX = SPL = function () {
	_.spl(yanofski, 2, 2, 'y', 'o', '+')
}
_.iO = function (ar, it) {
	ar = A(ar) ? ar : [ar]
	return ar.indexOf(it)
}
_.iO.TX = IXO = function () {
	i = _.iO(yA, 'a')
	$l('i: ' + i)
	i = _.iO(yA, 'f')
	$l('i: ' + i)
}
_.rm = function (ar, ix) {
	var g = G(arguments)
	ix = ix || g.n ? _.z(ar) - 1 : 0
	return _.spl(ar, ix, 1)
}
_.rmAll = function (ar, s) {
	var g = G(arguments), ix, n
	g.e(function () {
		if (_.z(ar)) {
			{
				while ((ix = _.iO(ar, s)) != -1) {
					_.spl(ar, ix, 1)
				}
			}
		}
	})
	return ar
}
_.wo = _.without
	RMV = function () {//W()
//fruits.reverse();
		//findLastIndex_.findLastIndex(array, predicate, [context])
		//Like _.findIndex but iterates the array in reverse, returning the index closest to the end where the predicate truth test passes.
		//_.findLastIndex(users, {name: 'Ted'});		//=> 3
//	 uniq_.uniq(array, [isSorted], [iteratee]) Alias: unique 
		// Produces a duplicate-free version of the array, using === to test object equality. In particular only the first occurence of each value is kept. If you know in advance that the array is sorted, passing true for isSorted will run a much faster algorithm. If you want to compute unique items based on a transformation, pass an iteratee function.
		ar = ['a', 'adsf', 'fsda', 'b', 'q']
		ri = M.floor(M.r() * _.z(ar))
		rs = ar.splice(ri, 1)
		u = _.uniq([1, 2, 1, 4, 1, 3]);
		$l('u');
		$l(u)//=> [1, 2, 4, 3]
		a = _.rmAll(['a', 'b', 'c', 'b', 'b'], 'b')
		$l(a)
	}
	_.inT = function (when, howMany, fn) {
		_.in(when, function () {
			_.t(howMany, fn)
		})
		return _
	}
}

NEWNEWNEW()