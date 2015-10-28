j = jd = b2d.Joints.b2JointDef.prototype
j = b2d.Joints.b2Joint.prototype
j.target = j.sT = function (a, b) {
	if (!O(a)) {
		a = bV(a, b)
	}
	j.SetTarget(a)
	return j
}
j.target = j.sT = function (a, b) {
	if (!O(a)) {
		a = V(a, b)
	}
	j.SetTarget(a)
	return j
}

$mJt=b2d.mouseDef =   function (a, b) {//MouseJDef=b2MJD=
	var j = new b2MouseJointDef()
	j.sT = function (a, b) {//=j.tS=    j.tg=j.tgS=j.ts=
		j.target.Set(a, b)
		return j
	}
	j.cC = j.clC = j.clCn = j.cc = function (a) {
		j.collideConnected = a ? true : false
		return j
	}
	j.mF = j.mf = function (a) {
		j.maxForce = a;
		return j
	}
	j.A = function (a) {
		j.bodyA = a
		return j
	}
	j.B = function (b) {
		j.bodyB = b
		return j
	}
	if (a) {
		j.A(a)
	}
	if (b) {
		j.B(b)
	}
	return j
}
$mJ =b2d.mouseJoint =  function (body) {
	if (!body) {
		return false
	}
//create mouse joint from a body
	var mouseDef = b2d.mouseDef(w.gB(), body.awake(1))
	mouseDef.target.Set(mX, mY)
	mouseDef.maxForce = ( 300 * body.mass() )
	mouseDef.collideConnected = true
	return w.J(mouseDef)
}


