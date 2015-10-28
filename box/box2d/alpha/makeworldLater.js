getBodyAtMouse = function (mX, mY) {
	$l('getBodyAtMouse')
	return w.getBodyAtPoint(mX, mY)
}
handleJointsAlt = 0
handleJoints = function () {
	
	//if mouse is dont.. make a new mouse joint, if there is none
	if (_mouseIsDown) {
		$l('mouseIsDown')
		if (_mouseJoint) {
			mj = _mouseJoint
			//  _mouseJoint.SetTarget(V(mX, mY))
		}
		else {
			_mouseJoint = _mouseJoint || b2d.mouseJoint(w.getBodyAtPoint(mX, mY))
		}
	}
	else {
		$l('mouseIsDown')
		if (_mouseJoint) {
			_mouseJoint.destroy();
			_mouseJoint = null
		}
	}
}
checkMouseDown = function () {
}
handleJoints2 = function () {// so far unchanged.. need to think
	if (_mouseIsDown && !_mouseJoint) {
		var b = getBodyAtMouse(mX, mY)
		bb = b
		if (b) {
			_mouseJoint = mouseJoint(b.awake(1))
		}
		else {
			bb.aI(10000, 10000)
		}
	}
	if (_mouseJoint) {
		if (_mouseIsDown) {
			
			// _mouseJoint.sT(mX,mY)
		}
		else {
			bb.aI(
					bbb.x() - MX,
					bbb.y() - MY
			)
			w.dJ(_mouseJoint)
			_mouseJoint = null
		}
	}
}
makeWallsPinball = function () {
	bii(10, 300, 20, 1200) //left
	bii(990, 300, 20, 1200)//right
	bii(300, 0, 3000, 20)//top
	// bii(300, 590, 3000, 20)//bottom
}
makeStage1 = function (X, Y, options) {
	canvas = c = $can(X, Y).a().bc('z')
	canvas.id('canvas')
	stage = s = SuperStage(canvas)
	T$.removeAllEventListeners()
	ctx = x = xx(canvas)
	stage.ob.autoClear = false
	if (options.bg) {
		stage.b(options.bg)
	}
}
setFixtures = function () {
	bD = $sB()
	fD = $fD().de(1).fr(.5).re(.8).H($pF())
}
makeShapeOnDblClk = function () {


//DEMO: add a 'fix' on $$ //DEMO: add 10 dynamic sq or cir to world
	x.$$(function (x, y) {
		world.a(
				yn() ? DynamicBodyDef(x, y) : StaticBodyDef(x, y), fix()
		)
	})
}