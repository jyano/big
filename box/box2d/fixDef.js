$fD = function (h) {
	var g = G(arguments)
	var fD = new b2d.FixtureDef()
	if (b2d.iH(h)) {
		fD.shape = h
	}
	if (g.n) {
		fD.isSensor = true
	}
	return fD.de(1)
}
$sen = $snF = $sF = function (h) {
	return $fD(h, '-')
}
fD.sen = fD.sensor = fD.iS = function (isSensor) {
	if (U(isSensor)) {
		return this.isSensor
	}
	this.isSensor = isSensor ? true : false
	return this
}
fD.s1 = fD.mS = fD.mSn = fD.mSen = fD.makeSen = function () {
	this.isSensor = true
	return this
}
fD.s0 = function () {
	this.isSensor = false
	return this
}
// The fixture density is used to compute the mass properties of the parent body. The density can be zero or positive. You should generally use similar densities for all your fixtures. This will improve stacking stability.
//
// The mass of a body is not adjusted when you set the density. You must call ResetMassData for this to occur.
//
// fixture->SetDensity(5.0f);
//
// body->ResetMassData();
fD.de = fD.den = fD.d = function (de) {
	if (U(de)) {
		return this.density
	}
	this.density = de
	return this
}
fD.fr = fD.fric = fD.f = function (fr) {
	if (U(fr)) {
		return this.friction
	}
	this.friction = fr
	return this
}
// Friction
// Friction is used to make objects slide along each other realistically. Box2D supports static and dynamic friction, but uses the same parameter for both. Friction is simulated accurately in Box2D and the friction strength is proportional to the normal force (this is called Coulomb friction). The friction parameter is usually set between 0 and 1, but can be any non-negative value. A friction value of 0 turns off friction and a value of 1 makes the friction strong. When the friction force is computed between two shapes, Box2D must combine the friction parameters of the two parent fixtures. This is done with the geometric mean:
//
// friction = sqrtf(shape1->friction * shape2->friction);
// So if one fixture has zero friction then the contact will have zero friction.
fD.re = fD.rest = fD.r = function (re) {
	if (U(re)) {
		return this.restitution
	}
	this.restitution = re
	return this
}
// Restitution is used to make objects bounce. 
// The restitution value is usually set to be between 0 and 1. 
// Consider dropping a ball on a table. A value of zero means the ball won't bounce. 
// This is called an inelastic collision. 
// A value of one means the ball's velocity will be exactly reflected. 
// This is called a perfectly elastic collision. 
// Restitution is combined using the following formula.
// restitution = b2Max(shape1->restitution, shape2->restitution);