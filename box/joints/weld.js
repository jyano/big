//weld seems to hurt mouse drag.  but sJt is ok?!
//makeWeldJointOnDblClick=mWJ=function(){x.$$(SuperWeldJoint)}
SuperWeldJoint = sWJ = function (x, y) {
	x = N(x) ? x : 100
	y = N(y) ? y : x
	var b11 = world.addBody(b2d.dynamic(x, y), b2d.fixt())
	var b22 = world.addBody(b2d.dynamic(x, y), b2d.fixt())
	var joint = wJt(b11, b22, bV(-.5, -.5), V(.5, .5), 9)
	w.createJoint(joint)
}
WeldJoint = wJt = function (a, b, c, d, e) {
	var j = new b2d.Joints.b2WeldJointDef()
	j.i = function () {
		var g = G(arguments)
		_a(j.Initialize, g, j)
		return j
	}
	if (a) {
		j.bodyA = a
	}
	if (b) {
		j.bodyB = b
	}
	if (c) {
		j.localAnchorA = c
	}
	if (d) {
		j.localAnchorB = d
	}
	if (N(e)) {
		j.referenceAngle = tRad(e)
	}
	return j
}
b2d.weldJoint = b2d.weld = Welding = weld = function (a, b, c, d, e, f, g) {
	c = c || 0;
	d = d || 0;
	e = e || 0;
	f = f || 0
	return WeldJoint(a, b, V(c / 30, d / 30), V(e / 30, f / 30), g || 10)
}
WELD = function () {
	W()
	w.J(
			b2d.weld(
					w.bumper(100, 100),
					w.ball(100, 100), 0, 0
			)
	)
	w.J(b2d.weld(w.circStat(200, 100), w.ball(200, 100), 0, 10))
	w.J(b2d.weld(w.bumper(300, 100), w.ball(300, 100), 0, -10))
	w.J(
			b2d.weld(w.bumper(400, 100), w.ball(400, 100), 10, 10)
	)
	w.J(weld(baa(500, 100), ba(500, 100), 10, -10))
	w.J(weld(baa(600, 100), ba(600, 100), 10, -20))
	w.J(weld(baa(700, 100), ba(700, 100), 10, -30))
	w.J(weld(baa(800, 100), ba(800, 100), -10, -40))
	w.J(weld(baa(900, 100), ba(900, 100), -10, -50))
	w.J(weld(baa(100, 200, 10), bi(100, 200), 0, 0)) //
	w.J(weld(baa(200, 200), bi(200, 200), 0, 10))
	w.J(weld(baa(300, 200), bi(300, 200), 0, -10))
	w.J(weld(baa(400, 200), bi(400, 200), 10, 10))
	w.J(weld(baa(500, 200), bi(500, 200), 10, -10))
	w.J(weld(baa(600, 200), bi(600, 200), 10, -20))
	w.J(weld(baa(700, 200), bi(700, 200), 10, -30))
	w.J(weld(baa(800, 200), bi(800, 200), -10, -40))
	w.J(weld(baa(900, 200), bi(900, 200), -10, -50))
	w.J(weld(ba(100, 500), bi(100, 500), 0, 0))
	w.J(weld(ba(200, 500, 10), bi(200, 500), 0, 10)) //
	w.J(weld(ba(300, 500), bi(300, 500), 0, -10))
	w.J(weld(ba(400, 500), bi(400, 500), 10, 10))
	w.J(weld(ba(500, 500), bi(500, 500), 10, -10))
	w.J(weld(ba(600, 500), bi(600, 500), 10, -20))
	w.J(weld(ba(700, 500), bi(700, 500), 10, -30))
	w.J(weld(ba(800, 500), bi(800, 500), -10, -40))
	w.J(weld(ba(900, 500), bi(900, 500), -10, -50))
}