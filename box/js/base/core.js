s$ = S
//
A = _.isArray
B = _.isBoolean
D = function (a, b, c) {
	return _.isUndefined(b) ? !_.isUndefined(a)
			: _.defaults.apply(_.defaults, arguments)
}
F = function f(a, b, c) {
	//if(_.isDefined(b)){return _.filter(a,b,c)}
	return _.isFunction(a)  // return a.prototype||true
}
N = _.isNumber
O = function (a, b) {
	if (_.isUndefined(b)) {
		return _.isObject(a)
	}
	if (_.isObject(a)) {
		// return  _.extend.apply(_.extend, arguments)
	}
}
//isAndGet qq ! depppppp
Qx = function Q(a) {
	if (!_.isObject(a)) {
		return
	}
	if (s$(a.toString()).contains('Window') || a[0]
			&& s$(a[0].toString()).contains('Window')) {
		return $(window)
	}
	return a.name === 'q' ? Q(a.q)
			: E(a) ? $(E(a))
			: 0
}
S = function (a, b, c) {
	return _.isUndefined(b) ? (_.isString(a) ? $.span().html(a) : 0  )
			: N(b) ? a.substr(b, c)
			: S(b) ? s$(a).startsWith(b)
			: _.some(a, b || F, c)
}
U = function u(a, b) {
	if (_.isUndefined(b)) {
		return _.isUndefined(a)
	}
	// return  _.extend.apply(_.extend, arguments)
}
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//Object.prototype.__C = function(){ return this.constructor.name }
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////
////////////////////////////////////////////////////////
I = function (func, int) {
	int = N(int) ? int : 1000
	func()
	return setInterval(func, int)
}

G = function (a) {
	if (!_.isArguments(a)) {
		return
	}
	var p, n, m, d
	a = _.toArray(a)
	if (_.last(a) === '+') {
		p = a.pop()
	}
	if (_.last(a) === '-') {
		n = a.pop()
	}
	if (_.last(a) === '*') {
		m = a.pop()
	}
	if (_.last(a) === '/') {
		d = a.pop()
	}
	return D(a, {
		z: a.length,
		f: _.first(a),
		l: _.last(a),
		r: _.rest(a),
		i: _.initial(a),
		p: p,
		P: !p,
		m: m,
		M: !m,
		d: d,
		D: !d,
		n: n,
		N: !n
	})
}
_.tA= _.toArray
_.df= _.defaults
G = function (arg, str) {//history: conflict with N(not neg) and N(g.$ && N(g.f) ) .. resolved!
	var ag = _.tA(arguments), p, n, m, d, g
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
	else if (_.l(g) == '+') {
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
		L: g.length,
		z: g.length,
		p: p, m: m, d: d, n: n
	})
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

//
$l = function (a) {
	var g = G(arguments), v
	if (O(a) && N(a.x) && N(a.y)) {
		v = a.toFixed()
		$l(v.x + ' , ' + v.y)
		return a
	}
	_.each(g, function (a) {
		console.log(
				_.isFunction(a) ? a.toString()
						: O(a) ? J(a)
						: a
		)
	})
	return a
}
_.slash = _.ensureSlash = function (str) {
	var hasSlash = str[0] == '/'
	return hasSlash ? str : '/' + str
}
String.prototype.ensureSlash = function () {
	var hasSlash = this[0] = '/'
	return hasSlash ? this : '/' + this
}
//
Utils = {}
Utils.isNested = isArrayWhoseFirstObjIsAlsoAnArray = AA = function (a) {
	return A(a) && A(a[0])
}
Utils.isDataUrl = Du = function (a) {
	return s$(a).contains('data:')
}
Utils.asElement = E = function E(a, b, c) {
	if (S(b)) {
		return s$(a).endsWith(b)
	}
	if (_.isFunction(b)) {
		return _.every(a, b, c)
	}
	if (O(a)) {
		a = O(a.e) ? a.e
				: O(a.c) ? a.c
				: a
		a = $(a)[0]
		if (_.isElement(a)) {
			return a
		}
	}
}
Utils.apply = _a = function (a, b, c, d, e) {//_.isUndefined(a)? qq('a')
	return _.isFunction(a) ? a.apply(c || a, b)
			: _.isString(a) ? a.split(b || '/').pop()// after('/')
			: 0//:a.animate(b,c,d,e)//
}
Utils.toUndefined = tUd = function () {
	_.each(G(arguments), function (g) {
		g = undefined
	})
}
Utils.URL = _u = function (a) {
	url = function (a) {
		return 'url("' + a + '")'
	}
	return url(a)
	//return _.isUndefined(a)? qq('ul'): url(a)
}
Utils.func = _v = function (a) {
	return S(a) ?
			function () {
				Function(a)()
			}
			: _.isFunction(a) ? a : _.isFunction(a.value) ? a.value() : a.value
}
Utils.extension = $.extension = _x = function (a, b) {
	//if(_.isString(a)){
	return s$(a).contains('.') ? a : s$(a).ensureRight(b || '.png').s
	//}
}
Graphics = window['Graphics'] || {}
Graphics.getCanvas = C = function (a) {
	if (_.isObject(a = E(a) || a)) {
		return a.canvas ? a.canvas :
				s$(a.toString()).contains('Canvas')
						? Q(a)[0] : 0
	}
}
_.props = Utils.props = $p = function p(i, t, kK, vf, f) {
//get: index thing key //set: index thing key value [function] //setOb: index thing ob [function]
	if (O(kK)) {
		_.each(kK, function (v, k) {
			p(i, t, k, v, vf)
		})
	}                   //setOb
	if (U(kK)) {
		return _p(p, i, t)
	}
	if (vf == "*") {
		return p(i, t, kK, $r(kK))
	} // set it randomly?!
	else if (U(vf)) {
		return t[oO(i, kK)]
	}   //get
	else {
		f = f || _s  //function(t,k,v){t[k]=v}  //set
		f(t, oO(i, kK), oO(kK, vf, 'R'))
	}
	return t
}
_.methods = Utils.methods = $m = function f(i, x, m, g) { //=met
	if (U(i)) {
		return
	}
	if (U(x)) {
		return _p(f, i)
	}
	if (U(m)) {
		return _p(f, i, x)
	}// if(U(g)){return _p(f,i,x,m)}
	if (!A(g)) {
		return _a(f, [i, x, m, _r(arguments, 3)])
	}//met('x',  c.x, 'd',  [i,0,0]     )//met('x',  c.x, 'd',   i,0,0   )
	return _a(x[oO(i, m)], g, x) || x
}
///
//xP=function(a){return Utils.props('X', X(a))}
//xM=function(a){return Utils.methods('x', X(a))}
//tf=function(){n=1;t=true;T(function(){t=false},1000);I(function(){if(t==true){co();n=n+1}else{$l(n)}},1)}
oOo = function oOo(a, b) {
	if (_.isUndefined(b)) {
		return _I(lC(V(oO(a))))
	}
	if (oOo(a)[lC(b)]) {
		return b
	}
}
Oo = _.defaults(function o(a, b) {
	if (D(b)) {
		return o[a] && ( o[a][b] || oOo(a, b))
	}
}, ooo)
oO = _.defaults(function oO(a, b, c) {
	return _.isUndefined(a) ? _.keys(f)
			: '*' == b ? $r(a)
			: D(c) ? oO(oO(c, a), b)
			: _.isUndefined(b) ? D(function (x, y) {
		return oO(a, x, y)
	}, oO[a] || {})
			: (oO[a] && oO[a][b]) ?
			oO[a][b]
			: b
}, ooo)
oC = function (c) {
	return oO('c', c)
}
oK = function (a) {
	return oO('k', a)
}
oT = function (a) {
	return oO('t', a)
}
oE = function (a) {
	return oO('e', a)
}
oI = function (a) {
	return oO('i', a)
}
oS = function (a) {
	return oO('s', a)
}
$o = function o(a, b, c) {
	return _.isUndefined(b) ? _p(o, a) : G(arguments).N ? oO(a, b, c) : Oo(a, b, c)
}
oQ = function (f, m) {
	$(function () {
		Q(m || mf, f)
	})
}
C$ = createjs
T$ = C$.Ticker
gT = withGetTest = function (url) {
	$.get('/' + url, function (aa) {
		a = aa
	})
}
$.update = function (curr, update, g) {
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
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//to core
vkl = function (a) {
	return new Function("v", "k", "l", "l[k]=" + a)
}
oO.V = values = function (a) {
	if (_.isString(a)) {
		a = oO(a)
	}
	return _.values(a)
}
Wxxxxx = function (a) {
	var g = G(arguments)
	var oW = function (a) {
		if (_.isObject(a = a || $(window))) {
			return Q(a).outerWidth()
		}
	}
	a = a || $(window);
	return N(a) ? W() / a : oW(Q(a))
}
Utils.chompRight = chompRight = function (a, b) {
	return s$(a).chompRight(b).s
}
Utils.ensureRight = ensureRight = function (a, b) {
	return s$(a).ensureRight(b).s
}
Range = function (a, b) {
	var args = G(arguments)
	return _.isNumber(b) ? _.range(a, b)
			: args.P ? _.range(a)
			: _.range(1, (a || 10) + 1)
}
scaleXandYBy = scl = function (v, a) {
	v.x *= a;
	v.y *= a;
	return v
}
//??? sub=function(a,b){return a.o('s',b)}
//should be dep? 'fsa'.toUpperCase()
Utils.toUpperCase = toUpperCase = uC = function (a) {
	return S(a) ? a.toUpperCase()
			: A(a) ? _.map(a, function (a) {
		return uC(a)
	}) : a
}
Utils.isUpper = isUpper = Uc = function (a) {
	if (_.isString(a)) { //for safety?
		return s$(a).isUpper()
	}
}
H = function (a) {
	var oH = function (a) {
		if (O(a = a || $(window))) {
			return Q(a).outerHeight()
		}
	}
	a = a || $(window);
	return N(a) ? W() / a : oH(Q(a))
}
//logic
df = function (a, b) {
	a = ob(a)
	return G(arguments).p ? D(a, oO(b || '' + 'D'))
			: D(a) ? a : b
}
//cL=function(a){console.log(a);return a}
ll = function (a, b) {
	if (_.isString(b)) {
		console.log(a + ': ' + b)
	}
	else {
		$l(a + ' ->')
		$l(b)
	}
	return b
}
lC = function (a) {
	return S(a) ? a.toLowerCase()
			: A(a) ? _m(a, function (a) {
		return lC(a)
	}) : a
}
Lc = function (a) {
	if (_.isString(a)) {
		return s$(a).isLower()
	}
}
_lX = function (a, b) {
	if (_.isFunction(b)) {
		$(a).load(b);
		return a
	}
	return _.last(a, b)
}
_mX = function (a, b, c) {
	return _.isFunction(b) ? _.map(a, b, c)
			: A(a) ? _.min(a) : function (z) {
		return z * a
	}
}
_hX = function _h(a, b, c) {
	if (_.isObject(b)) {
		return _h(b.toString(), a)
	}
	if (_.isString(a)) {
		return s$(a).contains(b, c)
	}
	if (_.isObject(a)) {
		if (_.isUndefined(b)) {
			return a.height ? (_.isFunction(a.height) ? a.height() : a.height) : _.isFunction(a.h) ? a.h() : N(a.h) ? a.h : false
		}
		if (N(b)) {
			if (_.isFunction(a.height)) {
				a.height(b);
				return a
			}
			if (N(a.height)) {
				a.height = b;
				return a
			}
			if (_.isFunction(a.h)) {
				a.h(b);
				return a
			}
			if (N(a.h)) {
				a.h = b;
				return a
			}
		}
		return A(a) ? _.contains(a, b) : _.has(a, b)
	}
	if (_.isUndefined(a)) {
		return qq($('html'))
	}
}
_IX = function (a, b) {
	return _.isUndefined(a) ? new Image()
			: _.isUndefined(b) ? _.invert(a)
			: _a(_.intersection, arguments)
}
IX = function (a, b) {
	if (N(b)) {
		return setInterval(_v(a), b)
	}
	if (_h('Image', E(a))) {
		return E(a)
	}
}
_wX = function (a, b) {
	if (_.isObject(a)) {
		var w = function (a, b) {
			if (_.isUndefined(b)) {
				return a.width
			}
			a.width = b;
			return a
		}
		if (_.isUndefined(b)) {
			return _.isFunction(w(a)) ? a.width() : w(a) ? w(a) : _.isFunction(a.w) ? a.w() : a.w
		}
		if (_.isFunction(w(a))) {
			a.width(b)
		}
		else if (w(a)) {
			w(a, b)
		}
		else if (_.isFunction(a.w)) {
			a.w(b)
		}
		else {
			a.w = b
		}
		return a
	}
}
M = nN = function (w) {
	return Boolean(Number(w))
}
Nn = _.isNan
_iX = function (a, b) {
	return _.isUndefined(a) ? qq('i') :
			A(a) ? _.initial(a, b) : pI(a)
}
//is=function(a){return function(b){return b===a}}
_.io$ = function (a, b, c) {
	return a.indexOf(b, (c < 0 ? c + _z(a) : c))
}
J = function (a, b, c) {
	if (_.isString(a)) {
		return $.getJSON(a, b, c)
	}
	;
	return JSON.stringify(a)
}
//_j=function(a,b){return(a||[]).join(b||' ')}
//K=function(a,b,c){return N(a)? I(b, a*1000): N(b)? I(a, b): _.keys(a)}
//graphics
onReady = _k = function (a) {
	return O(a) && a.complete
}
_.left = function (a, b) { //L=
	var g = G(arguments)
	return S(b) ? (g.N ? s$(a).ensureLeft(b).s
			: s$(a).chompLeft(b).s) : 0
}
obX = function (o) { // ************
	var g = G(arguments);
	return !O(o) ? {}
			: g.p ? o.clone()
			: o
}
isWindow = function (a) {//Wd=
	if (_.isObject(a)) {
		if (s$(a).contains('Window') ||
				s$(a[0]).contains('Window')) {
			return window
		}
	}
}
//fCC=function(a){ return String.fromCharCode(a) }
z = function () {
	$('body').empty()
}
$$$ = function (a) {
	$(_v(a))
}
qx = function (a) {
	return xx(qi(a))
}
//ddd=function(){return (d=_d().c('y').Z().a())}
//ccc=function(){return (c=$b($c()).drg())}
//test functions
fA = function (a) {
	return function () {
		alert(a)
	}
}
fL = function (a) {
	return function () {
		$l(a)
	}
}
//a3=function(){alert(3)}
//a4=function(){alert(4)}
//al=function(a){a=a||':)';alert(a);return a}
_S = function (a, b) {
	return b ? String(a).split(b) : a.toString()
}
_r = function r(a, b, c, d) {
	return _.isUndefined(a) ? rnd()
			: (_.isFunction(b) && D(c)) ? _.reduce(a, b, c)
			: (_.isFunction(a) && D(c)) ? _.reduceRight(a, c, b)
			: (_.isFunction(a) || _.isFunction(b)) ? r(c, a, b)
			: N(a) ? _.random(a, b, c)
			: S(a) ? a.replace(b || '#', c || '')
			: _.rest(a, b)
}
ok = function (a) {
	return a || 'ok'
}
_P = function (a, b, c) {
	return S(a) ? JSON.parse(a, b)
			: $(a).prepend(b, c)
}
P = function (a) {
	return O(a) && !_.isFunction(a) && !A(a) && !(E(a))
}
_p = function (a, b, c) {
	if (_.isUndefined(a)) {
		return qq('p')
	}
	return (c === 0) ? function (c, d) {
		return a(c, b, d)
	}
			: _.isFunction(a) ? _a(_.partial, arguments)
			: O(a) ? (G(arguments).N ? $(a).parents(f)
			: $(a).parent(f))
			: S(b) ? (S(a, b) ? a : b + a)
			: nN(a) ? a + 'px'
			: a
}
_b = function (a, b, c) {
	return _.isUndefined(a) ? qq($('body'))//--
			: _.isFunction(a) ? _.bind(a, b, c)//
			: S(a) ? a.split(b || '.')[0] //before('.')
			: _.bindAll(a, b, c)//
}
_e = function e(p, q, w) {
	var eW = function (a, b) {
		return l$(a, _z(b)) == b
	}
	if (_.isUndefined(p)) {
		return qq('li')
	}
	if (_.isUndefined(q)) {
		return p.empty()
	}
	if (_.isFunction(p)) {
		p = O(p)
	}
	return (_.isString(p) && _.isString(q)) ? eW(p, q)
			: S(q) ? e(p, function (v, k) {
		eval(q)
	}, w)
			: _.each(p, q, w)
}
_F = function (a) {
	if (A(a)) {
		return _.flatten(a)
	}
}
_f = function (a, b, c) {
	return _.isUndefined(a) ? qq('f') // need to deprecate this
			: _.isFunction(b) ? _.find(a, b, c)
			: _.first(a, b)
}
_g = function (a) {
	if (_.isArray(a)) {
		a = _.first(a)
	}
	return _.isFunction(a) ? a
			: _.isObject(a) ? (a.target ? a.target : Q(a)[0])
			: a
}
_C = function (a, b) {
	return _.isUndefined(a) ? _c()[0]
			: A(a) ? _.compact(a)//dep
			: a.connect(b)
}
_c = function (a, b) {
	if (N(a)) {
		clearInterval(a)
	}
	return _.isUndefined(a) ? qq('c').k('can')
			.at({w: 100, h: 100})
			: b ? (A(a) ? a : [a]).concat(b)
			: O(a) ? a.children()
			: 0
}
_t = function t(a, b, c) {
	return _.isUndefined(a) ? qq('t')
			: N(a) ? _.times(a, _v(b), c)
			: D(b) ? $(a).text(b)
			: S(a) ? t(_b(), a)
			: $(a).text()
}
tA = function (a) {
	return O(a) ? _.toArray(a) : [a]
}
//just returns toDataUrl() on an object, safe
tU = function (a) {
	if (
			O(a) && _.isFunction(a.toDataURL)) {
		return a.toDataURL()
	}
//tU=function(s){return  S(s)?sJ:tU(s)? tU(s)
// :s.u? s.u():iI(s)? s.src
// : s.image?s.image.src:0} //s/c/C/i/b->s sync
}
tDU = function (a) {
	return a.toDataURL()
}
_W = function (a, b) {
	if (_.isUndefined(b)) {
		return a.which
	}
	return a.which == b
} //_.without
R = function (a, b) {
	var g = G(arguments)
	return ( _.isString(a) && _.isString(b) ) ? (
			g.N ? s$(a).ensureRight(b).s
					: s$(a).chompRight(b).s    )
			: N(b) ? _.range(a, b)
			: N(a) ? (g.P ? _.range(a) : _.range(1, (a || 10) + 1)   )
			: new XMLHttpRequest()
}
_s = function s(a, b, c) {
	var g = G(arguments)
	if (D(g[1])) {
		a[b] = c;
		return a
	}
	if (_.isUndefined(a)) {
		return qq('s')
	}
	return src(a)
}
$J = JSON
$A = Array
$B = Boolean
$N = Number
$O = Object
$F = Function
$S = String
$w = window
$$w = $(window)
iW = function (a) {
	if (O(a = a || $$w)) {
		return Q(a).innerWidth()
	}
}
iH = function (a) {
	if (O(a = a || $$w)) {
		return Q(a).innerHeight()
	}
}
//will dep
_z = function z(a, b, c) {
	return U(b) ? _.size(a)
			: N(b) ? _z(a) == b
			: _z(a) == _z(b)
}
Yano.func = function () {
	$('body').C('*')
}
Yano.interval = 1000
Yano.intervalID = null
//when you call this straight:
//it checks if a Y-func is currently running (by seeing if Y.intervalID is set)
//if it is, it clears the Y-func.. (and then unsets the Y.intervalID)
// if func not running, it does setInterval, saving the returned # as Y.intervalID
// if you pass in a neg, it will only toggle(turn) off
// if you pass in a pos, it will only toggle(turn) on
Yano.toggleFunc = function self(func, interval) {
	var args = G(arguments),
			func = args[0],
			interval = args[1]
	if (Yano.intervalID) {
		if (args.P) {
			clearInterval(Yano.intervalID)
			Yano.intervalID = null
		}
	}
	else {
		if (args.N) {
			Yano.intervalID = setInterval(Yano.func, Yano.interval)
		}
	}
} //rat
Yano.setToggleFunc = function (func, interval) {
	if (func) {
		Yano.intervalFunc = func
	}
	if (interval) {
		Yano.interval = interval
	}
	Yano.setIntervalID = setInterval(Yano.intervalFunc, Yano.interval)
	return Yano.toggleFunc
}
//random
Yano.random = Yano.rand = $r = function (a, b) {
	a = a || 'c'; //cannot be 'color' ?? only abr??
	var values = _.values(oO(a))
	return Oo(a, b) || values[_.random(_.size(values) - 1)]
}
Math.toDegrees = tDeg = function (r) {
	return r * (180 / Math.PI)
}
Math.toRadians = Math.toRads = tRad = rad = function (degs) {
	if (O(degs)) {
		degs = degs.rotation
	}
	return degs * Math.PI / 180
}
Math.average = function self(a) {
	var g = G(arguments),
			z = _.size(g), n = 0;
	if (A(a)) {
		return _a(self, a)
	}
	_.each(g, function (a) {
		n += a
	})
	return n / z
}
Math.distance = dst = function self(a, b) {
	Math.xyz = xyz = function (a, b) {
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
			return Math.sqrt(U(b) ? a
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
		return xyz(Math.V({}), Math.V(a))
	}
	return xyz(Math.V(a), Math.V(b))
}
T = function (times, func) {
	var timeout
	if (N(times)) {
		return _.times(times, function (i) {
			func(i + 1)
		})
	}
	if (F(times)) {
		timeout = N(func) ? func : 100
		func = times
	}
	return setTimeout(func, timeout)
}






