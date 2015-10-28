w.Prism = function (a, b, c, d, e, f, g, h) {
	var joint = this.J(b2d.prism(a, b, c, d, e, f, g, h))
	return joint
}
w.prism = function (a, b, x, y, rot) {
	var jd = new b2d.Joints.b2PrismaticJointDef(), j
	if (A(a)) {
		jd.bodyA = a[0]
		if (O(a[1])) {
			jd.localAnchorA = a[1]
		}
		else if (N(a[1])) {
			jd.localAnchorA = V(a[1] / 30, (a[2] || 0) / 30)
		}
	}
	else {
		jd.bodyA = a
	}
	if (A(b)) {
		jd.bodyB = b[0]
		if (O(b[1])) {
			jd.localAnchorB = b[1]
		}
		else if (N(a[1])) {
			jd.localAnchorB = V(b[1] / 30, (b[2] || 0) / 30)
		}
	}
	else {
		jd.bodyB = b
	}
	if (N(x)) {
		jd.localAxisA.Set(x, y || 0);
		jd.localAxisA.Normalize()
		if (rot) {
			jd.referenceAngle = Math.toRadians(rot)
		}
	}
	if (O(x)) {
		jd.localAxisA.Set(x.x || 0, x.y || 0);
		jd.localAxisA.Normalize()
		if (y) {
			jd.referenceAngle = Math.toRadians(y)
		}
	}
	__joint = j = this.J(jd)
	return j
}
/*
 localAxisA - the axis (line) of movement (relative to bodyA)
 referenceAngle - the angle to be enforced between the bodies


 localAnchorA - a point in body A to keep on the axis line
 localAnchorB - a point in body B to keep on the axis line


 enableLimit - whether the joint limits will be active
 lowerTranslation - position of the lower limit
 upperTranslation - position of the upper limit

 enableMotor - whether the joint motor will be active
 motorSpeed - the target speed of the joint motor
 maxMotorForce - the maximum allowable force the motor can use
 */
pJ = b2d.Joints.b2PrismaticJoint.prototype
//pj.limits = function(low, up){this.SetLimits(low/30, up/30); this.enableLimit(true); return this }
pJ.lm = function (lowerLimit, upperLimit) {
	var g = G(arguments), l = g[0], u = g[1]
	this.SetLimits(l / 30, (u + 1) / 30)
	if (g.N) {
		this.EnableLimit(true)
	}
	return this
}
pJ.val = function (val) {
	if (U(val)) {
		return parseInt(this.GetJointTranslation() * 30)
	}
}
pd = b2d.Joints.b2PrismaticJointDef.prototype
//pd.i=function(){this.Initialize.apply(this, G(arguments));return this}
NEWPRISM = function () {
	w = b2d.mW({grav: 5})
	x = w.brick(400, 300, 40, 40).den(1).fric(1)
	b = w.box(500, 200, 200, 40).den(1).K('box')
	jd = new b2d.Joints.b2PrismaticJointDef()
	jd.collideConnected = true
	//jd.motorSpeed=100
	//jd.maxMotorForce=1000
	jd.bodyA = x
	jd.bodyB = b
	jd.referenceAngle = .5
	// jd.localAxisA= V(1,1)
	//jd.upperTranslation=20
	j = w.prism([x, -30, 2], b, V(1, -2), 45)
	//j =  w.J(jd)
	//j.EnableMotor(true)
	p = w.player('thrust').den(1).fric(1)
	var speed = 10
	j.mot(speed)
	w.begin(function (cx) {
		if (cx.with('box')) {
			speed *= -1
		}
		j.mot(speed)
	})
}
MARIOELEVATOR = function () {
	b2d.levelScrollX()
	w.elev(200)
	w.elev(400)
	w.elev(600)
	w.elev(750)
	w.elev(900)
	w.elev(1000)
	w.elev(1100)
	w.elev(1200)
	w.elev(1300)
	w.elev(1400)
	w.elev(1500)
	w.elev(1600)
	w.elev(1700)
	w.elev(1800)
	w.elev(1900)
	w.elev(2000)
	//these fall into the abyss when there is no floor (or ceiling)
	w.elev(2100)
	w.elev(2200)
	w.elev(2300)
	w.elev(2400)
	w.elev(2500)
	w.elev(2600)
	w.elev(2700)
	w.elev(2800)
	w.elev(2900)
	w.elev(2000)
}
b2d.prism = b2d.prismDef = function (b1, b2, lXA, lAA, lAB, rA) {//b2d.prismaticJointDef = PrismaticJointDef = prJt=
	var j = new b2d.Joints.b2PrismaticJointDef()
	j.mt = function (a, b, c) {
		j.mS(a)
		j.mMF(N(b) ? b : 100)
		if (c != '-') {
			j.eM(1)
		}
		return j
	}
	j.lm = function (lT, uT, enableLimit) {
		j.lT(lT).uT(uT)
		if (enableLimit != '-') {
			j.eL(true)
		}
		return j
	}
	if (D(b1)) {
		j.A(b1)
	}
	if (D(b2)) {
		j.B(b2)
	}
	//local direction A ? the angle of the actual slider joint
	j.lXA(D(lXA) ? lXA : V(0, 1))
	//local axis A
	j.lAA(D(d) ? lAA : b1.worldCenter())
	//local axis B
	j.lAB(D(e) ? lAB : b2.worldCenter())
	// something with rotation
	if (D(rA)) {
		j.rA(rA)
	}
	return j
}
PRISM = function () {
	b2d.W()
	cart = w.box(500, 200, 20, 20)
	ride = w.brick(540, 150, 180, 90)
	rC = ride.worldCenter()
	cC = cart.worldCenter()
	jd = b2d.prism(
			ride,
			cart,
			V(1, .3), //.Normalize()
			V(rC().x, rC.y + 5),
			cC,
			5)
	jd.mS(-100000).lT(-12).uT(12.5).eL(true).eM(true).mMF(10)//works
	j = w.J(jd)
}
PRISM2 = CHANGEPRISMLIMANDMOTOR = function () {
	world = b2d.W()
	cart = world.box(500, 200, 20, 20)
	ride = world.brick(540, 150, 180, 90)
	j = w.Prism(
			ride,
			cart,
			V(1, .3), //.Normalize()
			V(ride.worldCenter().x, ride.worldCenter().y + 5),
			cart.worldCenter(),
			5
	)
	j.maxForce(10000).speed(-100).motor(1)
	setTimeout(function () {
		j.motor(false)
	}, 2000)
	setTimeout(function () {
		j.motor(true)
	}, 5000)
}
//makes random shaped prismatic joint
RandomPrismPair = sPrJ = function (x, y) {
	x = N(x) ? x : 100
	y = N(y) ? y : x
	var firstBody = w.FixBody(x, y)
	var secondBody = w.FixBody(x, y)
	j = world.Prism(firstBody, secondBody, b2.V(1, 0), firstBody.worldCenter(),
			secondBody.worldCenter()).limits(-100, 100)  //j.maxForce(1).speed(100).motor(1)
	return j
}
BUMPER = function () {
	w = b2d.mW()
	var circle = w.ball(600, 500, 40).K('ride').bindSprite('me')
	j1 = w.prism(
			w.brick(200, 500, 40).K('ride'),
			w.brick(200, 500, 40, 40).K('cart')
	)//.limits(-30, 60).speed(-100).motor(1).maxForce(1000)
	j2 = w.prism(
			w.ball(400, 500, 40).K('ride'),
			w.brick(400, 500, 40, 40).K('cart')
	)//.limits(-30, 60).speed(-100).maxForce(1000).motor(1)
	w.prism(circle, w.brick(600, 500, 40, 40).K('cart')
	).limits(-30, 60).speed(-100).motor(1).maxForce(1000)
	w.begin(function (contact) {
		if (contact.with('cart')) {
			w.each(
					function (b) {
						if (b.is('ride')) {
							b.I(0, -1000)
						}
					}
			)
		}
	})
	w.ball(200, 200, 100)
}
PRISMLIMITS = function () {
	w = b2d.mW({grav: 5})
	x = w.brick(400, 300, 40, 40).den(1).fric(1)
	b = w.box(500, 200, 200, 40).den(1).K('box')
	jd = new b2d.Joints.b2PrismaticJointDef()
	//jd.collideConnected=true
	jd.bodyA = x
	jd.bodyB = b
	jd.referenceAngle = .5
	// jd.localAxisA= V(1,1)
	// jd.upperTranslation=-200
	//  jd.lowerTranslation=200
	// j = w.prism([x,-30,2], b, V(1,-2), 45)
	j = w.J(jd)
	//  j.EnableLimit(true)
	p = w.player('thrust').den(1).fric(1)
	p.den(0)
	var speed = 10
	// j.mot(speed)
	j.U = function (u) {
		if (U(u)) {
			return this.GetUpperLimit() * 30
		}
		this.SetLimits(this.L(), u / 30)
		return this
	}
	j.L = function (l) {
		if (U(l)) {
			return this.GetLowerLimit() * 30
		}
		this.SetLimits(l / 30, this.U())
		return this
	}
	j.UL = function (u, l) {
		return this.U(u).L(l)
	}
	j.LU = function (l, u) {
		return this.L(l).U(u)
	}
	j.LU(-100, 300)
	//j.SetLimits(-50,10)
	j.EnableLimit(true)
}
function JointGetJointTranslation() {
	var axis = this.m_bodyA.GetWorldVector(this.m_localXAxis1),
			p1 = this.m_bodyA.GetWorldPoint(this.m_localAnchor1),
			p2 = this.m_bodyB.GetWorldPoint(this.m_localAnchor2)
	return axis.x * (p2.x - p1.x) + axis.y * (p2.y - p1.y)
}//box2d source
w.elev = w.elevator = function (x) {
	var elev = {}
	elev.plat = this.rect(x, 100, 100, 10).den(1).K('elev')
			.coll(function () {
				elev.flip()
			})
			.collWithKind('player', function (p) {
				p.linVel(0)
			})
	elev.base = this.brickSensor(x, 150, 1, 100).den(1).fric(100)
	elev.j = this.prism(elev.plat, elev.base, V(0, 1))
	elev.speed = 2
	elev.j.mot(elev.speed)
	elev.flip = _.throttle(function () {
		this.j.mot(this.speed *= -1)
	}, 200, {trailing: false})
	return elev
}