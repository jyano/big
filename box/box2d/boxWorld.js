function units() {
	//Quoting the manual: "Box2D works with floating point numbers,
	//so some tolerances have to be used to make Box2D perform well. 
	//These tolerance have been tuned to work well with meters-kilogram-second (MKS) units.
	//In particular, Box2D has been tuned to work well with moving objects between 0.1 and 10 meters.
	//So this means objects between soup cans and buses in size should work well."
}
function Sleeping() {
// What does sleep mean? 
// Well it is expensive to simulate bodies,
// so the less we have to simulate the better. 
// When a body comes to rest we would like to stop simulating it.
// When Box2D determines that a body (or group of bodies) 
// has come to rest, the body enters a sleep state which 
// has very little CPU overhead.
// If a body is awake and collides with a sleeping body,
// then the sleeping body wakes up. 
// Bodies will also wake up if a joint or contact attached to them is destroyed.
// You can also wake a body manually.
// The body definition lets you specify whether a body can sleep
// and whether a body is created sleeping.
//
// bodyDef.allowSleep = true;
// bodyDef.awake = true;
}
b.W = function () {
	return this.GetWorld()
}
function GetWorldCenter() {
// const b2Vec2& GetWorldCenter() const;  
// const b2Vec2& GetLocalCenter() const;
}
function worldRel() {
	b.GWP = function (vec) {
		return this.GetWorldPoint(vec)
	}
	b.GWC = b._wC = b.wC = b.wCent = b.worldCenter = b.gWC = function () {
		return this.GetWorldCenter()
	}
	b.cen = b.realWC = b.cent = function () {
		var pt = this.GWC()
		return V(pt.x, pt.y).m()
	}
	b.wP = b.wPt = b.gWP = b.wPoint = function (x, y) {
		var b = this
		var pt = b.GWP(V(x, y).d())
		return V(pt.x, pt.y).m()
	}
}
function CenterOfMass() {
// You can access the center of mass position in local and world coordinates. 
// Much of the internal simulation in Box2D uses the center of mass. 
// However, you should normally not need to access it.
}
function BodyTransform() {
// Instead you will usually work with the body transform. 
// For example, you may have a body that is square.
// The body origin might be a corner of the square, 
// while the center of mass is located at the center of the square.
}
function GravityScale() {
// You can use the gravity scale to adjust the gravity on a single body.
// Be careful though, increased gravity can decrease stability.
//
// // Set the gravity scale to zero so this body will float
//
// bodyDef.gravityScale = 0.0f;
}
b.I = b.aI = function (i, pt, pt2) {

//forces:
//apply impulse. pass impulse as two nums, or obj 
// and pass in location, defaults to body center
	var b = this, g = G(arguments), o
	o = N(g.s) ? {i: V(g.f, g.s), pt: g.t} :
	{i: g.f, pt: g.s}
	return b.AI(o.i || b.vec().d(40), o.pt || b.GWC())
}
b.AF = function (v, c) {
	this.ApplyForce(v, c)
	return this
}
b.F = function (v, c, c2) {
	var b = this
	if (N(c)) {
		return b.F(V(v, c), c2)
	}
	if (U(c)) {
		c = b.cen()
	}
	return b.AF(v, c)
}
b.AI = function (i, pt) {
	this.ApplyImpulse(i, pt);
	return this
} 
w.numDB = function () {
	var w = this
	var n = 0
	w.eDB(function (b) {
		n++
	})
	return n
}
w.numDB.show = function () {
	var w = this
	var num = 0
	$t(function () {
		w.eDB(function (b) {
			var n = w.numDB();
			if (num !== n) {
				num = n;
				$l('num: ' + n)
			}
		})
	})
}
$L('worldRel')