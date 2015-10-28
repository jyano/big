SLING = SLG = function () {
	s = cjs.S()
	startpoint = {}
	slingshot = cjs.shape().a2(s)
	onMouseDown = function (event) {
		if (ball.hitTestPoint(event.x, event.y)) {
			mouseJoint = w.J(
					b2d.createMouseJointDef(
							w.ground, //?
							ball.body,
							event.x, event.y, 100000
					)
			)
			startpoint.x = event.x
			startpoint.y = event.y
		}
	}
	onMouseMove = function (event) {
		if (mouseJoint != null) {
			mouseJoint.setTarget(event.x, event.y)
			slingshot.clear()
			slingshot.setLineStyle(5, 0xff0000, 1)
			slingshot.beginPath()
			slingshot.mt(self.startpoint.x, self.startpoint.y)
			slingshot.lt(event.x, event.y)
			slingshot.ep()
		}
	}
	onMouseUp = function (event) {
		if (mouseJoint != null) {
			w.dJ(mouseJoint)
			mouseJoint = null
			slingshot.clear()
			strength = 1
			xVect = ( startpoint.x - event.x) * strength
			yVect = ( startpoint.y - event.y) * strength
			ball.body.applyLinearImpulse(xVect, yVect, ball.getX(), ball.getY())
		}
	}
}
