b2d.tB = b2d.toBody = function (fixtOrBody) {
	if (b2d.iB(fixtOrBody)) {
		return fixtOrBody
	}
	if (b2d.isFixt(fixtOrBody)) {
		return fixtOrBody.body()
	}
	return false
}
b2d.iB = function (b) {
	if (O(b)) {
		return b.constructor.name == 'b2Body'
	}
}
$PT();
$L('bodDef', 'types', 'act', 'bull', 'massD', 'posRot', 'fixts', 'world', 'velo', 'damp', 'bShorts')
//
// Bodies have position and velocity. You can apply forces, torques, and impulses to bodies.
// Bodies can be static, kinematic, or dynamic. Here are the body type definitions:
//
// b2_staticBody
// A static body has does not move under simulation and behaves as if it has infinite mass.
// Internally, Box2D stores zero for the mass and the inverse mass. 
// Static bodies can be moved manually by the user. 
// A static body has zero velocity.
// Static bodies do not collide with other static or kinematic bodies.
//
// b2_kinematicBody
// A kinematic body moves under simulation according to its velocity.
// Kinematic bodies do not respond to forces.
// They can be moved manually by the user
// , but normally a kinematic body is moved by setting its velocity.
// A kinematic body behaves as if it has infinite mass, however,
// Box2D stores zero for the mass and the inverse mass.
// Kinematic bodies do not collide with other static or kinematic bodies.
//
// b2_dynamicBody
// A dynamic body is fully simulated. They can be moved manually by the user,
// but normally
// they move according to forces. A dynamic body can collide with all body types. 
// A dynamic body always has finite, non-zero mass.
// If you try to set the mass of a dynamic body to zero, 
// it will automatically acquire a mass of one kilogram.
//
// Bodies are the backbone for fixtures. Bodies carry fixtures 
// and move them around in the world. Bodies are always rigid bodies in Box2D.
// That means that two fixtures attached to the same rigid body never move relative to each other.
//
// Fixtures have collision geometry and density.
// Normally,
// bodies acquire their mass properties from the fixtures. 
// However, you can override the mass properties after a body is constructed. This is discussed below.
//
// You usually keep pointers to all the bodies you create.
// This way you can query the body positions to update the positions of your graphical entities. 
// You should also keep body pointers so you can destroy them when you are done with them.
//
// Before a body is created you must create a body definition (b2BodyDef). 
// The body definition holds the data needed to create and initialize a body.
//
// Box2D copies the data out of the body definition; it does not keep a pointer to the body definition.
// This means you can recycle a body definition to create multiple bodies.
//
// Let’s go over some of the key members of the body definition.
//
// Body Type
// As discussed at the beginning of this chapter, there are three different body types: static,
// kinematic, and dynamic. You should establish the body type at creation
// because changing the body type later is expensive.
//
// bodyDef.type = b2_dynamicBody;
//
// Setting the body type is mandatory.
//
// Position and Angle
// The body definition gives you the chance to initialize the position of the body on creation.
// This has far better performance than creating the body at the world origin and then moving the body.
//
// Caution
//
// Do not create a body at the origin and then move it. If you create several bodies at the origin,
// then performance will suffer.
//
// A body has two main points of interest. The first point is the body's origin.
// Fixtures and joints are attached relative to the body's origin.
// The second point of interest is the center of mass.
// The center of mass is determined from mass distribution of the attached shapes 
// or is explicitly set with b2MassData. Much of Box2D's internal computations 
// use the center of mass position. For example b2Body stores the linear velocity for the center of mass.
//
// When you are building the body definition, you may not know where the center of mass is located.
// Therefore you specify the position of the body's origin. You may also specify the body's angle in radians, 
// which is not affected by the position of the center of mass. If you later change the mass properties of the body, 
// then the center of mass may move on the body, but the origin position 
// does not change and the attached shapes and joints do not move.
//
// bodyDef.position.Set(0.0f, 2.0f);   // the body's origin position.
// bodyDef.angle = 0.25f * b2_pi;      // the body's angle in radians.
function bodDef() {
 
}

// You may wish a body to be created but not participate in collision or dynamics. 
// This state is similar to sleeping except the body will not be woken by other bodies 
// and the body's fixtures will not be placed in the broad-phase. 
// This means the body will not participate in collisions, ray casts, etc.
//
// You can create a body in an inactive state and later re-activate it. bodyDef.active = true;
// Joints may be connected to inactive bodies. These joints will not be simulated. 
// *be careful when you activate a body that its joints are not distorted.
//
// User Data is a void pointer. This gives you a hook to link your application objects to bodies. 
// You should be consistent to use the same object type for all body user data.
// bodyDef= b2BodyDef(); bodyDef.userData = &myActor;
// void SetSleepingAllowed(bool flag); bool IsSleepingAllowed() const;
// void SetAwake(bool flag);  bool IsAwake() const;
// void SetActive(bool flag); bool IsActive() const;
b.SA = b.aw = b.awake = function () {
	var g = G(arguments)
	this.SetAwake(g.n ? false : true)
	return this
}
b.XY = function (x, y) {
	var newPos
	if (x === '*') {
		x = Math.random() * 10
	}
	if (y === '*') {
		y = Math.random() * 10
	}
	if (U(x)) {
		var pos = this.GetPosition()
		return pos.mult()
	} //used to parseInt.. necessary?
	y = N(y) ? y : x
	newPos = V(x / 30, y / 30)
	this.SetPosition(newPos)
	return this
}
b.X = function (x) {
	var b = this, g = G(arguments)
	var ps = b.XY()
	if (U(x = g.f)) {
		return ps.x
	}
	b.XY($.update(ps.x, x, g), ps.y)
	return b
}
b.Y = function (y) {
	var g = G(arguments), pos = this.XY()
	if (U(y = g[0])) {
		return pos.y
	}
	this.XY(pos.x, $.update(pos.y, y, g))
	return this
}
b.tf = b.transform = function (tf) {
	var b = this
	if (U(tf)) {
		return b.GetTransform()
	}
	b.SetTransform(tf)
	return b
}
// You may want a rigid body, such as a character, to have a fixed rotation.
// Such a body should not rotate, even under load. 
// You can use the fixed rotation setting to achieve this: bodyDef.fixedRotation = true;
// The fixed rotation flag causes the rotational inertia 
// and its inverse to be set to zero.
b.rt = b.rot = function (angle) {
	var b = this
	//= p.rT=p.rt=p.rotation=p.angle=p.ang
	var g = G(arguments), ang = g[0], newAng,
			currAng = M.tD(this.GetAngle())
	if (U(ang)) {
		return currAng
	}
	if (g.p) {
		newAng = currAng + ang
	}
	else if (g.n) {
		newAng = currAng - ang
	}
	else if (g.m) {
		newAng = currAng * ang
	}
	else if (g.d) {
		newAng = currAng / ang
	}
	else {
		newAng = ang
	}
	b.SetAngle(M.tR(newAng))
	return b
}
b.nR = b.nRt = function () {
	return this.SFR(true)
}
// void SetFixedRotation(bool flag);  bool IsFixedRotation() const;
b.SFR = b.fR = b.fixedRot = b.sFR = function (bool) {
	this.SetFixedRotation(bool ? true : false)
	return this
}
b.GT = function () {
	return this.GetType()
}
// void SetType(b2BodyType type);// b2BodyType GetType();
b.ty = b.type = b.T = function (a) {
	if (U(a)) {
		return this.GT()
	}
	this.SetType(a)
	return this
}
b.iD = b.isDyn = function () {
	return this.GT() == b2d.B.b2_dynamicBody
}
b.iK = b.isKin = function () {
	return this.GT() == b2d.B.b2_kinematicBody
}
b.iS = b.isStat = function () {
	return this.GT() == b2d.B.b2_staticBody
}
b.stat = function () {
	return this.ty(0)
}
b.kin = function () {
	return this.ty(1)
}
b.dyn = function () {
	return this.ty(2)
}
// Game simulation usually generates a sequence of images that are played at some frame rate.
// This is called discrete simulation. In discrete simulation, rigid bodies can move by
// a large amount in one time step. If a physics engine doesn't account for the large motion, 
// you may see some objects incorrectly pass through each other. This effect is called tunneling.
// By default, Box2D uses continuous collision detection (CCD) to prevent dynamic bodies
// from tunneling through static bodies. This is done by sweeping shapes from their old position 
// to their new positions. The engine looks for new collisions during the sweep 
// and computes the time of impact (TOI) for these collisions. Bodies are moved to their
// first TOI and then halted for the remainder of the time step.
//
// Normally CCD is not used between dynamic bodies. This is done to keep performance reasonable. 
// In some game scenarios you need dynamic bodies to use CCD. For example, you may want to shoot
// a high speed bullet at a stack of dynamic bricks. Without CCD, the bullet might tunnel through
// the bricks.
//
// Fast moving objects in Box2D can be labeled as bullets. Bullets will perform CCD with both
// static and dynamic bodies. You should decide what bodies 
// should be bullets based on your game design
//  If you decide a body should be treated as a bullet, use the following setting.
//
// bodyDef.bullet = true;
//
// The bullet flag only affects dynamic bodies.
// Box2D performs continuous collision sequentially, so bullets may miss fast moving bodies.
// void SetBullet(bool flag); bool IsBullet() const;
b.b1 = b.mBu = function () {
	var b = this
	b.SetBullet(true);
	return b
}
b.b0 = function () {
	this.SetBullet(false);
	return this
}
b.GM = function () {
	return this.GetMass()
}
// Every body has a mass (scalar), center of mass (2-vector),
// and rotational inertia (scalar). 
// For static bodies, the mass and rotational inertia are set to zero.
// When a body has fixed rotation, its rotational inertia is zero.
//
// Normally the mass properties of a body are established automatically
// when fixtures are added to the body. You can also adjust 
// the mass of a body at run-time. 
// This is usually done when you have
// special game scenarios that require altering the mass. 
// void SetMassData(const b2MassData* data);
// After setting a body's mass directly, 
// you may wish to revert to the natural mass dictated by the fixtures.
// You can do this with: / void ResetMassData();
// The body's mass data is available through the following functions:
// float32 GetMass() const;// float32 GetInertia() const; / const b2Vec2& GetLocalCenter() const; // void GetMassData(b2MassData* data) const;
b.mass = function (m) {
	if (U(m)) {
		return (this.GM() * 900) / 100
	}
}
b.RMD = b.rsM = b.rMD = function () {
	this.ResetMassData();
	return this
}
b.N = function () {
	return this.GetNext()
}
// Position and Velocity
// You can access the position and rotation of a body.
// This is common when rendering your associated game actor. 
// You can also set the position,
// although this is less common since you will normally use Box2D to simulate movement.
//
// bool SetTransform(const b2Vec2& position, float32 angle); const b2Transform& GetTransform() const; 
// const b2Vec2& GetPosition() const; float32 GetAngle() const;
// You can access the linear and angular velocity. 
// The linear velocity is for the center of mass. 
// Therefore, the linear velocity may change if the mass properties change.
b.aV = function (vel) {
	var b = this
	if (U(vel)) {
		return this.GetAngularVelocity()
	}
	this.SetAngularVelocity(vel)
	return this
}
b.lV = function (vel, n2) {
	var b = this
	if (U(vel)) {
		return this.GetLinearVelocity()
	}
	if (N(vel)) {
		vel = V(vel, n2)
	}
	this.SetLinearVelocity(vel)
	return this
}
// Damping is used to reduce the world velocity of bodies. 
// Damping is different than friction because friction only occurs with contact. 
// Damping is not a replacement for friction and the two effects should be used together.
//
// Damping parameters should be between 0 and infinity, 
// with 0 meaning no damping, and infinity meaning full damping.
// Normally you will use a damping value between 0 and 0.1.
// I generally do not use linear damping because it makes bodies look floaty.
// bodyDef.linearDamping = 0.0f; bodyDef.angularDamping = 0.01f;
// Damping is approximated for stability and performance.
// At small damping values the damping effect is mostly independent of the time step. 
// At larger damping values, the damping effect will vary with the time step. 
// This is not an issue if you use a fixed time step (recommended).
b.aD = function (damp) {
	var b = this
	if (U(damp)) {
		return this.GetAngularDamping()
	}
	this.SetAngularDamping(damp)
	return this
}
b.lD = function (damp) {
	var b = this
	if (U(damp)) {
		return this.GetLinearDamping()
	}
	this.SetLinearDamping(damp)
	return this
}
MAZE = BXD = function () {
	W()
	w.grid(maze, 100, 200, 20, 30)
	w.bump(400, 200, 10)
 
	b = w.D(200, 100)
	b.f($fD($cH(100, 200)))
	b.f($fD($pH(100, 200)))
}

b.sDs = b.setDestroy = b.sDsI = b.setDestroyIf = function (k) {
	$l('b.sDs = b.setDestroy = b.sDsI = b.setDestroyIf =')
	var b = this
	return b.of(k) ? b.K('ds destroy') : b
}
// After creating a body, there are many operations you can perform on the body.
// These include setting mass properties, accessing position and velocity,
// applying forces, and transforming points and vectors.
function _pre() {
	Array.prototype.K = function (k) {
		if (U(k)) {
			return this.klass
		}
		this.klass = k
		return this
	}
	Array.prototype.sensor = function (kind) {
		this.isSensor = kind || true
		return this
	}
}

 