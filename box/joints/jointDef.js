j = jd = b2d.Joints.b2JointDef.prototype
jd.A = function (a) {
	this.bodyA = a;
	return this
}
jd.B = function (b) {
	this.bodyB = b;
	return this
}
j.AB = function (a, b) {
	return this.A(a).B(b)
}
jd.init = function () {//joint.i=
	this.Initialize.apply(this, arguments)
	return this
}
jd.coll = jd.collide = jd.cC = function (a) {
	this.collideConnected = a;
	return this
}
//mouse
jd.target = j.sT = function (a, b) {
	if (!O(a)) {
		a = b2d.V(a, b)
	}
	this.SetTarget(a)
	return this
}
//distance
jd.fq = jd.frq = jd.freq = function (a) {
	if (U(a)) {
		return this.frequencyHz
	}
	this.frequencyHz = a;
	return this
}
jd.len = function (len) {
	if (U(len)) {
		return this.length * 30
	}
	this.length = len / 30
	return this
}
jd.dmp = jd.damp = function (a) {
	if (U(a)) {
		return this.dampingRatio
	}
	this.dampingRatio = a;
	return this
}
//revolute
jd.refAng = j.rA = function (a) {
	j.referenceAngle = tRad(a);
	return this
}
jd.maxTorque = j.mMT = function (a) {
	this.maxMotorTorque = a
	return this
}
jd.lowAng = j.lA = function (a) {
	this.lowerAngle = tRad(a);
	return this
}
jd.upAng = j.uA = function (a) {
	this.upperAngle = tRad(a);
	return this
}
jd.localA = j.lAA = function (a) {
	this.localAnchorA = a;
	return this
}
jd.localB = j.lAB = function (a) {
	this.localAnchorB = a;
	return this
}
jd.rat = j.r = function (a) {
	this.ratio = a;
	return this
}
jd.axis = j.lXA = function (a) {
	this.localAxisA = a;
	return this
}
//slider
jd.maxForce = j.mMF = function (a) {
	this.maxMotorForce = a;
	return this
}
//slider and revolute
jd.speed = j.mS = function (a) {
	this.motorSpeed = a;
	return this
}
jd.motor = j.eM = function (a) {
	this.enableMotor = a ? true : false;
	return this
}
jd.maxSpeed = j.mMS = function (a) {
	this.maxMotorSpeed = a;
	return this
}
//LIMITS
jd.lowTrans = j.lT = function (a) {
	this.lowerTranslation = a;
	return this
}
jd.upTrans = j.uT = function (a) {
	this.upperTranslation = a;
	return this
}
jd.limits = j.eL = function (a) {
	this.enableLimit = a ? true : false;
	return this
}