j = jd = b2d.Joints.b2JointDef.prototype
j = b2d.Joints.b2Joint.prototype
j.torque = function (torq) {
	if (U(torq)) {
		return this.GetMotorTorque()
	}
	this.SetMaxMotorTorque(torq)
	return this
}
j.maxTorq = j.maxTorque = j.mMT = j.mT = function (a, b, c) {
	this.SetMaxMotorTorque(a, b, c);
	return this
}
jd = joint = b2d.Joints.b2RevoluteJointDef.prototype
//just a shortcut to call initialze.  have i ever even done that?  laaaame waaah waaaaah
jd.init = joint.i = function () {
	this.Initialize.apply(this, G(arguments))
	return this
}
//convenience functions
jd.mot = jd.motor = function (speed, torque, enable) {
	this.speed(speed)
	this.maxTorque(N(torque) ? torque : 100)
	if (enable != '-') {
		this.enableMotor = true
	}
	return this
}
jd.limits = joint.lm = function (lowAng, upAng, enable) {
	this.lowAng(lowAng).upAng(upAng)
	if (enable != '-') {
		this.enableLimit = true
	}
	return this
}
j = b2d.Joints.b2RevoluteJoint.prototype
j.lim = j.limits = function (a, b) {
	var g = G(arguments);
	a = g[0], b = g[1]
	if (a === true) {
		this.EnableLimit(true);
		return
	}
	this.SetLimits(Math.toRadians(a), Math.toRadians(b))
	if (g.N) {
		this.EnableLimit(true)
	}
	return this
}
j.mot = j.motor = function (speed, torque, enable) {
	this.SetMotorSpeed(speed)
	this.SetMaxMotorTorque(N(torque) ? torque : 100000)
	if (enable != '-') {
		this.EnableMotor(true)
	}
	return this
}
 
j.maxTorque = j.mMT = function (a) {
	j.maxMotorTorque = a
	return j
}
j.lowAng = j.lA = function (a) {
	j.lowerAngle = tRad(a);
	return j
}
j.upAng = j.uA = function (a) {
	j.upperAngle = tRad(a);
	return j
}

 
REVPRISMGEAR = RPG= function () {
}
LEASH = LSH=function () {
	b2d.level()
	link = function (x, y) {
		var l = w.rect(x, y, 5, 10, 'y').den(1).rest(.5)
		l.l = function (num) {
			num = N(num) ? num : 1
			var lk
			_.times(num, function () {
				lk = link(l.X(), l.Y() + 15)
				w.Rev(l, lk)
				l = lk
			})
			return l
		}
		return l
	}
	base = link(300, 20).stat()
	l = base.l(10)
	w.Rev(l, p)
}
TRAPEZE = BABY=function () {
	b2d.level()
	link = function (x, y) {
		var l = w.rect(x, y, 5, 10, 'y').den(4).rest(2)
		l.l = function (num) {
			num = N(num) ? num : 1
			var lk
			_.times(num, function () {
				lk = link(l.X(), l.Y() + 20)
				r = w.rev(l, lk)
				r.collideConnected = true
				l = lk
			})
			return l
		}
		return l
	}
	base = link(300, 20).stat()
	l = base.l(10)
	w.rev(l, p.XY(l.X(), l.Y()))
	base = link(100, 20).stat()
	l = base.l(10)
	w.rev(l, p.XY(l.X(), l.Y()))
}
FIREFLY = function () {
	b2d.level()
	link = function (x, y) {
		var l = w.rect(x, y, 5, 10, 'y').den(4).rest(2)
		l.l = function (num) {
			num = N(num) ? num : 1
			_.times(num, function () {
				l = link(l.X(), l.Y() + 20)
			})
			return l
		}
		return l
	}
	base = link(100, 20).stat()
	l = base.l(10)
	w.rev(l, p.XY(l.X(), l.Y()))
}
WINDOWBLINDS = function () {
	b2d.level()
	link = function (x, y) {
		var l = w.rect(x, y, 50, 10).den(4).rest(2)
		l.l = function (num) {
			num = N(num) ? num : 1
			var lk
			_.times(num, function () {
				lk = link(l.X(), l.Y() + 24)
				r = w.Rev(l, lk)
				r.collideConnected = false
				l = lk
			})
			return l
		}
		return l
	}
	base = link(300, 20).stat()
	l = base.l(10)
	// w.Rev(l, p.XY(l.X(), l.Y()))
	link = function (x, y) {
		var l = w.rect(x, y, 50, 10).den(4).rest(2)
		l.l = function (num) {
			num = N(num) ? num : 1
			var lk
			_.times(num, function () {
				lk = link(l.X(), l.Y() + 24)
				r = w.Rev(l, lk)
				r.collideConnected = true
				l = lk
			})
			return l
		}
		return l
	}
	base = link(100, 20).stat()
	l = base.l(10)
	//w.Rev(l, p.XY(l.X(), l.Y()))
}
w.link = function self(x, y) {
	var that = this, l
	l = w.rect(x, y, 4, 20).den(4).rest(2)
	l.l = function (num) {
		num = N(num) ? num : 1
		var lk
		_.times(num, function () {
			lk = self(l.X(), l.Y() + 15)
			that.Rev(l, lk)
			l = lk
		})
		return l.K('leaf')
	}
	return l
}
VINE = function () {
	b2d.level()
	p.SetFixedRotation(true)
	w.vine(100, 10, 15)
	w.vine(200, 10, 12)
	w.vine(500, 10)
}
VINETRAP = function () {
	b2d.level()
	p.X(60)
	trap = function (x) {
		w.vine(x, 10, 12)
		w.vine(x + 10, 10, 4)
		w.vine(x + 20, 10, 6)
		w.vine(x + 30, 10, 8)
		w.vine(x + 40, 10, 10)
		w.vine(x + 50, 10, 12)
		w.vine(x + 60, 10, 10)
		w.vine(x + 70, 10, 8)
		w.vine(x + 80, 10, 6)
		w.vine(x + 90, 10, 4)
	}
	trap(200)
	//trap(300)
}
BOXCANNON = function () {
	w = b2d.W() // hmm.. want to matchs screen size
	a = w.bumper(300, 600, 200)
	b = w.box(300, 400, 100, 100)
	w.rev(a, b)
}
EASELCANNON = function () {
	s = cjs.S().A(
			cjs.circ(200, 'red', 'brown').rXY(100).XY(400, 700),
			rect = cjs.rect(100, 100, 'blue', 'orange').XY(300, 600).rXY(50, 250)
	)
	RTT(rect)
}
EASELBOXCANNON = function () {
	w = b2d.W()
	w.rev(
			dome = w.baa(300, 600, 200),
			cannon = w.bi(300, 400, 100, 100))
	w.s.A(
			cjs.circ(200, 'red', 'blue').rXY(100).XY(400, 700),
			rect = cjs.rect(100, 100, 'blue', 'red').XY(300, 600).rXY(50, 250)
	)
	RTT(rect)
	cjs.tick(function () {
		if (rect.rot() > 60) {
			rect.rot(60)
		}
		if (rect.rot() < -60) {
			rect.rot(-60)
		}
		cannon.aF(V(0, -420), cannon.worldCenter())
	})
}
BIONIC = function () {
	w = b2d.W().randRects()
	isHooked = false
	distJ = false
	hero = w.rect(320, 460, 20, 20, 'b')
	$can = superCanvas($(w.s.HUD.canvas))
	$can.MD(function (x, y) {
		w.QueryPoint(function (fixture) {
			var touchedBody = fixture.body()
			if (touchedBody.isStat()) {
				distJ = w.dist(hero, touchedBody, hero.GetWorldCenter(), V(x, y).div()) //collideConnected=true
				isHooked = true
			}
			return false
		}, V(x, y).div())
	}) //if(distJ){w.DestroyJoint(distJ)}
	$can.MU(function () {
		if (distJ) {
			w.DestroyJoint(distJ)
		}
	})   // if I release the mouse, I destroy the distance joint
	cjs.tick(function () {// as long as the hook is active, I shorten a bit joint distance
		if (isHooked) {
			hero.SetAwake(true) // BODY MUST BE AWAKE!!!!!!
			distJ.SetLength(distJ.GetLength() * 0.97)  //distJ.len(97,'%') //len('97%')
		}
	})
}
ROPEY = function () {
	w = b2d.W().debug()
	w.roof.kill()
	body = w.rect(255, 50, 60, 15, 'g').stat()
	link = body
	for (var i = 1; i <= 10; i++) {
		func(i)
	}
	function func(i) {
		body = w.rect(255, i * 30, 3, 15, 'w').den(1).fric(0).rest(2)
		w.rev(link, body)//, V(255,i*30-15))
		link = body
	}
	
	body = w.circ(255, 330, 20, 'd').den(1).fric(0).rest(2)
	w.rev(link, body)
}
 
BODYREVWORKS = function () {
	w = b2d.W().startKilling();
	w.floor.rest(0)
	prev = top = w.rect(255, 50, 60, 15, 'g').stat()
	_.times(10, function (i) {
		var next = link(255, (i + 1) * 30)
		prev = prev.rev(next)
	})
	//body.rev(body2) returns body2 !!!!!
	function link(x, y) {
		return w.rect(x, y, 3, 15, 'w').den(1).fric(0).rest(0)
	}
	
	w.rev(prev,
			w.circ(255, 330, 20, 'd').den(1).rest(0)
	)
	//ship
	y = w.ship().XY(400, 170).rot(265).stat()
	w.beg(function (cx) {
		var fixt
		if (fixt = cx.with('bul')) {
			if (fixt.body() != y) {
				fixt.body().setDestroy()
			}
		}
	})
}
shrink = function () {
	_.each(ropeJoints, function (j) {
		j.shrink()
	})
}
 
CATAPULT = CAT = function () {
	W()
	cat = w.A(
			$dB(350, 200), [
				$pF(125, 20, 0, 0, 0),
				$pF(20, 60, -80, -40, 200)
			])
	cat_arm = w.A($dB(210, 210), [
		$pF(150, 10, 0, 0, 0, 1),
		$pF(10, 20, -140, -30, 0, 1)
	])
	j = w.rev(cat, cat_arm, V(0, 0))
			.lAA(V(-80, -90))
	//.eM(1).eL(1).lAB(bV(60, 0)).sMS(1000).sL(-180, 60).sMMT(1)
	cannonball = w.A($dB(90, 90), $cF(10, 20))
	// s.$(fire=function(e){ the_joint.sMMT(10000)})
//  draw_box=function(px,py,w,h,d,ud):void {
//
//   ground = new dBD(px,py)
//
//ground.position.Set(px, py);
//if (d) {
//    ground.type=b2Body.b2_dynamicBody;
//}
//
//my_box = pSh().sAB(w/2, h/2)
//
//  my_fixture  = fDf(my_box)
//
//
//
//the_ground =w.cB(ground);
//
//the_ground.sUD(ud);
//the_ground.cF(my_fixture);
}