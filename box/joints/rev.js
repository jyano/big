w.Revolute = function (a, b, c, d, e, f) {
	var g = G(arguments)
	//pass in body1, body2, world-bV = body1-center
	//can also pass body1, body2, world-x, world-y
	//or body1, body2, local-axis-A-x, local-axis-A-y, local-axis-B-x,local-axis-B-y
	var j = SuperJointDef(new b2d.Joints.b2RevoluteJointDef())
	var joint = j
	joint.init = joint.i = function () {
		joint.Initialize.apply(joint, G(arguments))
		return joint
	}
	//convenience functions
	joint.motor = joint.mt = function (speed, torque, enable) {
		joint.speed(speed)
		joint.maxTorque(N(torque) ? torque : 100)
		if (enable != '-') {
			joint.enableMotor(1)
		}
		return joint
	}
	joint.limits = joint.lm = function (lowAng, upAng, enable) {
		joint.lowAng(lowAng).upAng(upAng)
		if (enable != '-') {
			joint.enableLimits(1)
		}
		return joint
	}
	if (U(c)) {
		c = a.worldCenter()
	}
	if (O(c)) {
		joint.init(a, b, c)
	}
	else if (N(e)) {
		joint.A(a).B(b).lAA(bV(c / 30, d / 30)).lAB(bV(e / 30, f / 30))
	}
	else if (N(c)) {
		joint.init(a, b, bV(c / 30, d / 30))
	}
	this.createJoint(joint)
	return joint
}
w.Rev = function (a, b, c, d) {
	return this.createJoint(
			RevoluteJointDef(a, b, c, d)
	)
}
w.rev = function (body1, body2, c, d, e, f) {
	var g = G(arguments)
	//pass in body1, body2, world-bV = body1-center
	//can also pass body1, body2, world-x, world-y
	//or body1, body2, local-axis-A-x, local-axis-A-y, local-axis-B-x,local-axis-B-y
	var joint = new b2d.Joints.b2RevoluteJointDef()
	__jd = joint
	if (U(c)) {
		c = body1.worldCenter()
	}
	if (O(c)) {
		joint.init(body1, body2, c)
	}
	else if (N(e)) {
		joint.A(body1).B(body2).lAA(V(c / 30, d / 30)).lAB(V(e / 30, f / 30))
	}
	else if (N(c)) {
		joint.init(body1, body2, V(c / 30, d / 30))
	}
	//SuperJointDef( joint )
	__joint = joint = this.J(joint)
	return joint
}
RevoluteJointDefX = revX = function (a, b, c, d, e, f) {
	var g = G(arguments)
	//pass in body1, body2, world-bV = body1-center
	//can also pass body1, body2, world-x, world-y
	//or body1, body2, local-axis-A-x, local-axis-A-y, local-axis-B-x,local-axis-B-y
	var j = new BXJ.b2RevoluteJointDef()
	var joint = j
	joint.init = joint.i = function () {
		joint.Initialize.apply(joint, G(arguments))
		return joint
	}
	//convenience functions
	joint.motor = joint.mt = function (speed, torque, enable) {
		joint.speed(speed)
		joint.maxTorque(N(torque) ? torque : 100)
		if (enable != '-') {
			joint.enableMotor = true
		}
		return joint
	}
	joint.limits = joint.lm = function (lowAng, upAng, enable) {
		joint.lowAng(lowAng).upAng(upAng)
		if (enable != '-') {
			joint.enableLimit = true
		}
		return joint
	}
	if (U(c)) {
		c = a.worldCenter()
	}
	if (O(c)) {
		joint.init(a, b, c)
	}
	else if (N(e)) {
		joint.A(a).B(b).lAA(V(c / 30, d / 30)).lAB(V(e / 30, f / 30))
	}
	else if (N(c)) {
		joint.init(a, b, V(c / 30, d / 30))
	}
	//SuperJointDef( joint )
	return joint
}

w.spinner = spinner = function (x, y, s, t) {
	x = N(x) ? x : 500
	y = N(y) ? y : 200
	s = N(s) ? s : 100
	t = N(t) ? t : 100
	dial = w.box(x, y, 200, 40)//w.a(dBD(x,y), pFx(200,40))
	rock = w.brick(x, y, 10, 10)//w.a(sBD(x,y), pFx(10,10))
	return w.rev(dial, rock).mot(s, t) // rJt({  i:[rock, dial, dial.c()],  eM:1,  mS:-10,  mMT:100  })
}
w.seesaw = seesaw = function () {
	anc = world.bi(400, 300, 60, 60)
	lev = world.bi(400, 300, 300, 20)
	world.createJoint(
			RevoluteJointDef(
					anc, lev, anc.worldCenter(), lev.worldCenter()
			).collide(0)
	)
}
makeCar = function () {
	var car = w.rect(240, 350, 90, 30)
	w.rev(w.circ(300, 400, 30), car).mot(4)
	w.rev(w.circ(200, 400, 30), car).mot(4)
	return car
}
ROULETTE = ROU = function () {
	W()
	b = w.addBody($dB(300, 300), [
		$cF(50),
		$pF(10, 80, 20, 160)
	])
	w.Rev(w.baa(300, 300, 100), b)
}
DEMO_REV = REV = function () {
	W()
	w.j(w.rev(w.baa(100, 100), w.bi(100, 100, 100, 40)).motor(5, 1))
	w.j(w.rev(w.baa(250, 100), w.bi(250, 100, 100, 40)).motor(5, 2))
	w.j(w.rev(w.baa(400, 100), w.bi(400, 100, 100, 40)).motor(5, 10000))
	w.j(w.rev(w.baa(550, 100), w.bi(550, 100, 100, 40)).mt(20, 5))
	w.j(w.rev(w.baa(700, 100), w.bi(700, 100, 100, 40)).mt(20, 10))
	w.j(w.rev(w.baa(850, 100), w.bi(850, 100, 100, 40)).mt(20, 10000))
	w.j(w.rev(w.baa(100, 220), w.bi(100, 220, 100, 40)).limits(0, 0))
	w.j(w.rev(w.baa(250, 220), w.bi(250, 220, 100, 40)).limits(0, 10))
	w.j(w.rev(w.baa(400, 220), w.bi(400, 220, 100, 40)).lm(0, 180))
	w.j(w.rev(w.baa(550, 220), w.bi(550, 220, 100, 40)).lm(-180, 0))
	w.j(w.rev(w.baa(700, 220), w.bi(700, 220, 100, 40)).lm(-360, 180))
	w.j(w.rev(w.baa(850, 220), w.bi(850, 220, 100, 40)).lm(0, 1000))
	w.j(w.rev(w.baa(100, 340), w.bi(100, 340, 100, 40)).lm(0, 0).mt(5, 1))
	w.j(w.rev(w.baa(250, 340), w.bi(250, 340, 100, 40)).lm(0, 10).mt(5, 2))
	w.j(w.rev(w.baa(400, 340), w.bi(400, 340, 100, 40)).lm(0, 180).mt(5, 10000))
	w.j(w.rev(w.baa(550, 340), w.bi(550, 340, 100, 40)).lm(-180, 0).mt(20, 5))
	w.j(w.rev(w.baa(700, 340), w.bi(700, 340, 100, 40)).lm(-360, 180).mt(20, 10))
	w.j(w.rev(w.baa(850, 340), w.bi(850, 340, 100, 40)).lm(0, 1000).mt(20, 10000))
	w.j(
			rev(w.baa(100, 460), w.bi(100, 460, 100, 40)).lm(0, 0).mt(-5, 1))
	w.j(
			rev(w.baa(250, 460), w.bi(250, 460, 100, 40)).lm(0, 10).mt(-5, 2))
	w.j(
			rev(w.baa(400, 460), w.bi(400, 460, 100, 40)).lm(0, 180).mt(-5, 10000))
	world.createJoint(
			rev(
					baa(550, 460), w.bi(550, 460, 100, 40)
			)
					.lm(-180, 0).mt(-20, 5))
	world.createJoint(
			rev(w.baa(700, 460), w.bi(700, 460, 100, 40)).lm(-360, 180).mt(-20, 10))
	world.createJoint(
			rev(w.baa(850, 460), w.bi(850, 460, 100, 40)).lm(0, 1000).mt(-20, 10000)
	)
}
CHANGELIMITS = CLM = function () {W()
	j = w.Rev(w.baa(400, 220), w.bi(500, 220, 200, 40))
	j.limits(0, 30)
	j.EnableLimit(true)
	setTimeout(function () {
		j.limits(0, 200)
	}, 2000)
}
CHANGEMOTOR = CMT = function () {
	W()
	j = w.Rev(
			w.baa(400, 280),
			w.bi(500, 280, 200, 40))
	j.speed(4).torque(1000000).motor(1)
	setInterval(function () {
		j.speed(-j.speed())
	}, 4000)
	w.player('thrustGrav')
}
car = function (x, y, wheel1, wheel2) {
	wheel1 = wheel1 || 2
	wheel2 = wheel2 || wheel1
	var car = w.box(x, y, 90, 30).bindSprite('me')
	w.rev(
			w.circ(x - 40, y + 50, 30), car).mot(wheel1)
	w.rev(
			w.circ(x + 60, y + 50, 30), car).mot(wheel2)
	return __car = car
}
CARS = function () {W()
	car(100, 350, -2, 2)
	car(440, 350, 2, -2)
	setTimeout(function () {
		car(440, 350, 4)
		car(540, 350, 2)
	}, 5000)
}
REVJOINT = RJT = function () {W()
	
	
	
	revJoint = function () {
	
		return w.rev(  w.ball(),   w.box()   )
	
	}
	
	
	
	revJoint()
	
	
	box = w.box(150, 150)

	w.rev(
			w.bump(200, 200),
			box
	)
	
	
	w.rev(box, w.ball(130, 130))
	j = w.rev(
			w.bump(400, 200, 100).den(1),
			w.box(400, 200, 100).den(1)
	)
	//j.motor(true).speed(2000)
	j.EnableMotor(true)
	j.SetMaxMotorTorque(10000000)
	j.SetMotorSpeed(-2)
	
	
	w.rev(
			
			w.rect(120, 50, 50, 50, 'yellow'),
			w.rect(100, 50, 50, 50, 'black')
	
	
	).motor(2)
	
	
	
	
	w.rev(
			w.rect(400, 30, 30, 50), 
			w.rect(400, 30, 30, 50)
			
	
	).motor(3)



	fido = w.rev(
			w.rect(400, 30, 10, 80, 'purple'),
			w.box(400, 30, 20, 160)


	).motor(10)


	w.rev(
			w.circ(400, 30, 50, 'purple'),
			w.rect(400, 30, 20, 160, 'orange')

	).motor(7)

}