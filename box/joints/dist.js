b2d.dJ = b2d.distJ = b2d.distDef = b2d.distanceDef = DistanceJoint = b2d.Joints.distance = dJt = function (o) {
	var jd = new b2d.Joints.b2DistanceJointDef()
	//this initialize function for distance, not revolute
	jd.init = function (b1, b2, b1V, b2V) {
		if (U(b1V)) {
			b1V = b1.worldCenter()
		}
		if (U(b2V)) {
			b2V = b2.worldCenter()
		}
		this.Initialize(b1, b2, b1V, b2V)
		return this
	}
	if (O(o)) { // ever used?
		if (o.init) {
			j.init.apply(j, o.init)
		}
		if (N(o.len)) {
			j.len(o.len)
		} else {
			j.len(1)
		}
		if (N(o.fq)) {
			j.fq(o.fq)
		} else {
			j.fq(3)
		}
		if (N(o.dmp)) {
			j.dampRat(o.dmp)
		} else {
			j.dampRat(.1)
		}
		if (o.coll) {
			j.collide(true)
		}
		else {
			j.collide(false)
		}
		return w.J(jd)
	}
// dont ever set a dJ().len(0)
	return jd
}
w.tramp = function (xloc, rest, freq, damp) {
	var bouncer, j
	xloc = N(xloc) ? xloc : 290
	rest = N(rest) ? rest : .75
	freq = N(freq) ? freq : 6
	damp = N(damp) ? damp : 0
	bouncer = this.rect(xloc, 200, 200, 20, 'pink')
			.den(0).fixedRot(true).rest(rest).fric(0)
	j = this.dist(
			this.rectStat(xloc, 280, 20, 20, 'white'), bouncer)
			.len(115).freq(freq).damp(damp)
	this.rectStat(xloc - 120, 290, 40, 300, 'blue').fric(0)
	this.rectStat(xloc + 120, 290, 40, 300, 'blue').fric(0)
	return j
}
w.dJt=w.dst=w.dist = function (a, b, b1OffV, b2OffV, len, fq, dmp) {
//location pams are optional, and be default to their center ponts
// note: if you passe them in, pass them as relative(local to body) coords
//BOX2D requires them as WORLD points - for some reason.. (but i think my way has more use cases)
//there is also distColl for 'collideConnected=true' joints
	var b1V = a.wC().m(),
			b2V = b.wC().m(),
			jd = b2d.dJ(), j
			
	if (O(b1OffV)) {b1V = b1V.add(b1OffV)}

	if (O(b2OffV)) {b2V = b2V.add(b2OffV)}

	jd.init(
	a, 
	b, 
	b1V.d(), 
	b2V.d()
	)

	j = w.J(jd)

	if (N(b1OffV)) {dmp = len;fq = b2OffV;len = b1OffV}


	if (N(len)) {j.len(len)}
	if (N(fq)) {j.fq(fq)}
	if (N(dmp)) {j.dmp(dmp)}
	return j
}
w.tightDist = function (piece, newPiece) {
	return this.dist(piece, newPiece, 1, 1000, 1000)
}
w.dJtCl=w.distColl = function (a, b, b1OffV, b2OffV) {
	var b1V = a.worldCenter().mult(),
			b2V = b.worldCenter().mult(),
			jd = b2d.dJ(), j
	if (O(b1OffV)) {
		b1V = b1V.add(b1OffV)
	}
	if (O(b2OffV)) {
		b2V = b2V.add(b2OffV)
	}
	jd.init(a, b, b1V.d(), b2V.d())//.coll( true )
	j = w.J(jd)
	return j
}
w.rod = function (a, b, len) {
	a = a || this.ball(150, 150)
	b = b || this.brick(180, 150)
	len = N(len) ? len : 200
	return this.distColl(a, b).len(len)
}
w.spring = function (a, b) {
	return this.dist(a, b).len(1).fq(2)//.dmp(.1)
}
jd = b2d.Joints.b2JointDef.prototype
j = b2d.Joints.b2Joint.prototype

j.len = function (a) {
	var g = G(arguments),
			len = this.GetLength() * 30
	if (U(a = g[0])) {
		return len
	}
	this.SetLength(
			$.update(len, a, g) / 30
	)
	return this
}
j.shrink = function () {
	this.len(0.97, '*')
	return this
}


THREEJTS =  DJ3 = function () {W()
	x = w.recStat(500, 300, 200, 200)
	w.dJt(x, w.circ(300, 400, 20, 'b'), V(-100, 100)).len(50)
 	w.dJt(x, w.circ(600, 300, 20, 'g'), V(100, -100)).len(50)
 	o = w.dJtCl(x, w.circ(300, 400, 20, 'o'), V(-100, -100)).len(50)
}
FOURJTS  = DJ4 = function () {DJ3()
	b = w.circ(300, 400, 20, 'b')
	j = w.dJt(x, b, V(100, 100)).len(50)
	cjs.t(function () {
		w.s.dot([j.a(), j.b()])
	})
	_.ev(2, function () {
		b.I(-10000, 0)
	})
//	w.dJt(x, w.circ(300, 400, 20, 'b'), V(-100, 100)).len(50)
//	w.dJt(x, w.circ(600, 300, 20, 'g'), V(100, -100)).len(50)
//	o = w.dJtCl(x, w.circ(300, 400, 20, 'o'), V(-100, -100)).len(50)
}


DISTPOINTSMORE = DPM0 = function () {W()
	// ok, so the 'points' are relative to the WORLD
	x = w.brik(550, 200, 400, 100)
	b2d.colBalls()
	// here there are no default lengths, they are set to actual distance apart at time of joint creation!!!
	
	j0 = w.dJt(b, r)     //  previously:  j0 =  w.J(   b2d.dJ().init(b,r)   )
	// i want to be able to specify how much to offset the anchor point, relative from its own center!!!!
	
	
	
	
}

DPM= function(){

	DPM0()
	_.in(1, function () {
		w.s.flash()
		j1 = w.dJt(x, o)
		j = w.dJt(x, g, x.wC(), g.wC())
		cjs.t(function () {
			w.s.dot(j.a());
			w.s.dot(j.b())
		})
	})

}

WINDUP = WUP = function () {
	var wound = false
	b2d.level()
	j = w.dJtCl(
			w.bump(450, 40, 40),
			w.box(400, 200, 20, 60), 200
	)
	k = w.dJt(
			w.bump(450, 40, 40),
			w.box(400, 200, 20, 60), 200
	)
	w.stat(0, 40, $pF(400, 300).mS().K('sensor')) //can get triggered many many times?

	w.b(function (cx) {
		if (cx.w('sensor')) {j.wind(); k.wind()}
	})
	
	// game:: density:  if u want to fit in here.. u will have to lower yourself a bit to our level.. you see, compared to you, we a really quite dense. Not dense as in stupid, but as in, we have a high mass to volume ratio.  In otherwords, we can't jump!  It's a grave grave situation.  Don't get me wrong, not grave as in bad, but grave, as in, it relates to gravity.  Additionally, it's quite bad.
}
SPRINGS3 = SP3 = function () {
	b2d.levelScroll()
	softPlat = function (x, y) {
		x = N(x) ? x : 300
		y = N(y) ? y : 60
		j = w.spring(
				w.bump(x, y, 4).sens(true),
				w.rect(x, y, 100, 30).den(1).fixedRot(true).rest(0)
		).dmp(1)
	}
	softPlat(300, 100)
	softPlat(500, 80)
	softPlat(700, 40)
	softPlat(900, 120)
}
DEMO_COLLIDE = DCL = function () {W()
	w.dJt(w.ball(200, 200, 50), w.ball(300, 200, 40))
			.len(50).fq(3).dmp(.1)
	w.dJt(w.box(200, 200, 50), w.box(300, 200, 40))
			.len(50).fq(3).dmp(.1)
	w.dJtCl(w.ball(200, 200, 50), w.ball(300, 200, 60))
			.len(50).fq(3).dmp(.1)
	j = w.dJtCl(w.rect(200, 200, 50, 50), w.rect(300, 200, 60))
			.len(50).fq(3).dmp(.1)
}

RAGD = function () {W()
	// world.Spring =
	w.J(b2d.spring(b1 = w.ball(100, 100, 30),
					w.ball(100, 200, 40))
	)
	//world.Rod =
	w.J(b2d.rod(b2 = w.box(100, 400, 30),
					w.box(100, 500, 40)))
	p = w.addMe()
	w.J(b2d.spring(b1, p ))
	w.J(b2d.spring(b2, p ))
}
 
 
//links
 
	b.rev = function (nextBody) {
		var body = this
		this.wor().rev(body, nextBody)
		return nextBody
	}
	b.dist = function (nextB) {
		var b = this, w = b.W()
		w.dist(b, nextB)
		return nextB
	}
w.link = function self(x, y) {
	var that = this, l
	l = this.rect(x, y, 4, 20).den(4).rest(2)
	l.l = function (num) {
		num = N(num) ? num : 1
		var lk
		_.times(num, function () {
			lk = self(l.X(), l.Y() + 15)
			that.rev(l, lk)
			l = lk
		})
		return l.K('leaf')
	}
	return l
}
w.vine = function (x, y, len) {
	len = len || 10
	var that = this,
			base = this.link(x, y).stat(),
			l = base.l(len)
	this.begin(function (cx) {
		if (cx.with('player', 'leaf')) {
			var j = that.rev(l, p.XY(l.X(), l.Y()))
			$.kD('down', function () {
				that.DestroyJoint(j)
			})
		}
	})
}
w.bridge = function (x, y) {
	var that = this
	x = N(x) ? x : 400
	y = N(y) ? y : 100
	var b1 = this.circStat(x, y, 10),
			b2 = wood(),
			b3 = wood(),
			b4 = wood(),
			b5 = wood(),
			b6 = wood(),
			b7 = wood(),
			b8 = wood(),
			b9 = wood(),
			b10 = this.circStat(x + 700, y, 10)
	pieces([b1, b2], [b2, b3], [b3, b4], [b4, b5], [b5, b6], [b6, b7], [b7, b8], [b8, b9], [b9, b10])
	function wood() {
		return that.rect(100, 100, 90, 60).den(1).fixedRot(true)
	}
	
	function piece(a, b) {
		that.distColl(a, b).len(6).freq(5)
	}
	
	function pieces() {
		_.each(arguments, function (arg) {
			piece(arg[0], arg[1])
		})
	}
}