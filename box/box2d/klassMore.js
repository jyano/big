_$klass=function(){//o._K = _.wo(o._K, k) //double protection:
	o.rpK_ = function (k, k1) {
		var o = this
		o.K().splice(o.nK(k), 1, k1)
		return o
	}
}
alpha = function () {
	_.eachSplitString = _.eW = function (str, fn) {
		if (!S(str)) {
			return
		}
		//meach(in a string) With
		var arr = _.compact(_.m(str.trim().split(' '),
				function (str) {
					return str.trim()
				}))
		if (fn) {
			_.e(arr, function (str) {
				fn(str)
			})
		}
		return arr
	}
	f.near = function (what) {
		var b = this.B()
		//return (this.K()==what) || (body.K()==what)
		// if has sibling fixture that matches, return IT!
		return false
	}
	b.hasF = function () {
		
		//if (b2d.iF(k)) {k = k.B()}
	}
	b.not = b.notAny = function (k) { //this is an AND: ALL MUST BE FALSE
		var b = this
		var not = true
		_.e(k, function (k) {
			if (b.is(k)) {
				not = false
			}
		})
		return not
	}
	b.Ks = b.showKlass = function () {
		var b = this
		var n = 1
		b.fs(function (f) {
			$l('#' + (n++) + ' k: ' + f.K())
		})
		return b
	}
	//f._compact=function(){var f = this; f._K = _.compact(f._K); return f}
//_.y = function (tru) {return tru != -1}
// g._1 (length is at least one)
}
old = function () {
//alternative f.has: //return ks.indexOf('player') != -1 // !k || _.ct(this._K || [], k.trim())
	ksA = function () {
		return [
			'rect', 'player', 'bad'
		]
	}
	f.aKPreviousVersion = function () {
		var f = this, ks = f.__K(), g = G(arguments)
		_.e(g, function (str) {
			_.eachSplitString(str, function (k) {
				if (!S(k)) {
					return
				}
				if (f.of(k)) {
					$l('f is already of ' + k + 'oh well.. it will be fixed down the line')
				}
				f.pushK(k)
			})
		})
		return f
	}
	fD.K = function (k) {
		var fD = this
		fD._K = fD._K || []
		if (U(k)) {
			return _.l(fD._K)
		}
		fD._k = k
		fD._K.push(k)
		return fD
	}
	/*
	 b.__K = function () {
	 var b = this
	 b._K = b._K || []
	 return b
	 }
	 b.K = function () {
	 var b = this.__K(), g = G(arguments);
	 if (g.u) {
	 return this._K.join(' ')
	 }
	 if (g.O) {
	 this.K(g.f.k);
	 return this
	 }
	 _.eachSplitString(g.f, function (k) {
	 if (!b.of(k)) {
	 b._K.push(k)
	 }
	 })
	 return this
	 }
	 b.hK = function (k) {
	 var b = this.__K(), g = G(arguments)
	 //this is an OR statement.  at least one must be true
	 var hK = false
	 _.e(g, function (k) {
	 if (b.K() == k) {
	 hK = true
	 }
	 })
	 return hK
	 }
	
	 b.rmK = b.removeClass = function (k) {
	 var b = this.__K()
	 if (S(k)) {
	 b._K[k] = null
	 }
	 return b
	 }
	 */
}
b.uD = b.data = b.userData = function (d) {
	if (U(d)) {
		return this.GetUserData()
	}
	this.SetUserData(d)
	return this
}
fD.uD = function (d) {
	var fD = this
	if (U(d)) {
		return this.userData
	}
	this.userData = d
	return this
}
f.SUD = function (d) {
	this.SetUserData(d);
	return this
}
f.GUD = function () {
	return this.GetUserData();
}
f.uD = function (d) {
	if (U(d)) {
		return this.GUD()
	}
	return this.SUD(d)
}