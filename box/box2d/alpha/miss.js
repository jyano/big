bdVars = function (f) {
	ab = f.GetAABB()
	lb = ab.lowerBound
	up = ab.upperBound
	lx = 30 * lb.x
	ly = 30 * lb.y
	ux = 30 * up.x
	uy = 30 * up.y
	dx = ux - lx
	dy = uy - ly
}
markAABB = function (f, h) {
	squareDot = function (dx, dy, ux, uy, lx, ly) {
		w.st.squareDot('r', dx, dy)
		w.st.squareDot('b', ux, uy)
		w.st.squareDot('p', lx, ly)
	}
	dot = function (dx, dy, ux, uy, lx, ly) {
		w.st.dot('r', dx, dy)
		w.st.dot('b', ux, uy)
		w.st.dot('p', lx, ly)
	}
	h = h || 'circle'
	bdVars = function (f) {
		ab = f.GetAABB()
		lb = ab.lowerBound
		up = ab.upperBound
		lx = 30 * lb.x
		ly = 30 * lb.y
		ux = 30 * up.x
		uy = 30 * up.y
		dx = ux - lx
		dy = uy - ly
	}
	bdVars(f)
	fn = (h == 'circle' ? dot : squareDot)
	fn(dx, dy, ux, uy, lx, ly)
}
squareDot = function (dx, dy, ux, uy, lx, ly) {
	w.st.squareDot('r', dx, dy)
	w.st.squareDot('b', ux, uy)
	w.st.squareDot('p', lx, ly)
}
dot = function (dx, dy, ux, uy, lx, ly) {
	w.st.dot('r', dx, dy)
	w.st.dot('b', ux, uy)
	w.st.dot('p', lx, ly)
}
mVars = function (m) {
	lpn = m.m_localPlaneNormal
	lp = m.m_localPoint
	pc = m.m_pointCount
	p = m.m_points
	t = m.m_type
}
cx.vB = function () {
	var cx = this, b = cx.b(), pt = cx.pt()
	return b.lVW(pt)
}
/*
 cx.GetWorldManifold = function (worldManifold) {
 bodyA = this.m_fixtureA.GetBody();
 bodyB = this.m_fixtureB.GetBody();
 shapeA = this.m_fixtureA.GetShape();
 shapeB = this.m_fixtureB.GetShape();
 worldManifold.Initialize(
 this.m_manifold,
 bodyA.GetTransform(),
 shapeA.m_radius,
 bodyB.GetTransform(),
 shapeB.m_radius
 )
 }*/
cx.vA = function () {
	var cx = this, a = cx.a(), pt = cx.pt()
	return a.lVW(pt)
}
M.lnC = M.lineCenter
cx.cen = function () {
	return M.lnC(this.A().cen(), this.B().cen())
}
PTY = function () {
	W()
	ball = w.box(300, 300, 60, 160).de(1).rt(33).nRt()
	brick = w.brick(600, 320, 100, 200)
	time = 0
	_.ev(1, function () {
		time++
	})
	$t(function () {
		if (w.flagged('moveBrick')) {
			brick.X(brick.X() + 20)
			w.flag('draw')
		}
	})
	lastTime = -1
	change = 0
	w.b(function (cx) {
		if (lastTime != time) {
			lastTime = time;
			$l(change++)
			if (cx.w('brick')) {//w.flag('moveBrick')
				m = cx.GetManifold()
				mVars(m)
				cx.A().GetAABB()
				markAABB(cx.A(), 'square')
				markAABB(cx.B())
			}
		}
	})
	//function getWorldPoint(fixt) {}
}
COLLCENTER2 = CC2 = function () {
	W()
	ball = w.box(300, 300, 60, 160)
	brick = w.bump(600, 320)
	time = 0
	_.ev(1, function () {
		time++
	})
	lastTime = -1
	change = 0
	w.b(function (cx) {
		if (lastTime != time) {
			lastTime = time;
			$l(change++)
			if (cx.w('bumper')) {
				a = cx.A()
				b = cx.B()
				w.st.dot(b.cen())
				w.st.squareDot(a.cen())
				w.st.dot('b', cx.cen())
			}
		}
	})
}
CCR = function () {
	W()
	ball = w.ball(300, 300, 200)
	brick = w.bumper(700, 320)
	time = 0
	_.ev(1, function () {
		time++
	})
	lastTime = -1
	change = 0
	w.b(function (cx) {
		if (lastTime != time) {
			lastTime = time;
			$l(change++)
			if (cx.w('bumper')) {
				a = cx.A();
				b = cx.B()
				w.st.dot(b.cen())
				w.st.squareDot(a.cen())
				w.st.dot('b', cx.cen())
			}
		}
	})
	w.st.chalk('here you can clearly see that the center of the two fixtures',
			'is not necessarily the same as the contact point,',
			'and can only represent collision center if fixtures are similar size.',
			'..perhaps halfway between this and the actual contact point would be nice'
	)
}