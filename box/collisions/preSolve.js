cx.iE = function () {
	return this.IsEnabled()
}
cx.en = cx.enabled = cx.sE = function (a) {
	this.SetEnabled(a ? true : false);
	return this
} // Enable/disable this this.//   
// This can be used inside the pre-solve contact listener. // The contact is only disabled for the current time step// (or sub-step in continuous collision).
cx.off = cx.disable = cx.ds = cx.d = function () {
	this.SetEnabled(false)
	return this
}
//You can disable a contact. This only works inside the b2ContactListener::PreSolve event, discussed below.
PRE = ONEWAYPLATFORM = OWP = ONE = function () {
	W(50).ball()
	p = w.p().con('thrust')
	pf = w.brick(300, 300, 500, 40).K('platform')
	$t(function () {
		p.rt(0)
	})
	
	
	//	w.pre(function (cx) {if (cx.w('platform', 'player')) {if (p.Y() > pf.Y()) {cx.disable()}}})
	w.preCl('platform', 'player', function (f1, cx) {
		if (p.Y() > pf.Y()) {cx.disable()}
	})
	

}

w.preCl=function(){
	var w=this,g=G(arguments)
	w.pre(function (cx) {cx.w.apply(cx, g)})
	return w
}



//  Both PreSolve and PostSolve give you a b2Contact pointer, so we have access to the same points and normal information we just looked at for BeginContact. PreSolve gives us a chance to change the characteristics of the contact before the collision response is calculated, or even to cancel the response altogether, and from PostSolve we can find out what the collision response was.
//     Here are the alterations you can make to the contact in PreSolve:
//SetEnabled(bool flag);//non-persistent - need to set every time step
// persists for duration of contact
//persists for duration of contact
// will disable the contact,
// meaning that the collision response that normally would have been applied will be skipped.
// You can use this to temporarily allow objects to pass through each other
// . A classic example of this is the one-way wall or platform,
// where the player is able to pass through an otherwise solid object,
// depending on various criteria that can only be checked at runtime,
// like the position of the player and which direction direction they are heading, etc.
//    It's important to note that the contact will revert back to being enabled in the next time step,
// so if you want to disable contacts like this you'll need to call SetEnable(false) every time step.
function pre() {
	/*
	 Pre-Solve Event
	 This is called after collision detection, but before collision resolution. This gives you a chance to disable the contact based on the current configuration. For example, you can implement a one-sided platform using this callback and calling b2Contact::SetEnabled(false). The contact will be re-enabled each time through collision processing, so you will need to disable the contact every time-step. The pre-solve event may be fired multiple times per time step per contact due to continuous collision detection.
	
	 void PreSolve(b2Contact* contact, const b2Manifold* oldManifold)
	
	 {
	
	 b2WorldManifold worldManifold;
	
	 contact->GetWorldManifold(&worldManifold);
	
	 if (worldManifold.normal.y < -0.5f)
	
	 {
	
	 contact->SetEnabled(false);
	
	 }
	
	 }
	
	 The pre-solve event is also a good place to determine the point state and the approach velocity of collisions.
	
	 void PreSolve(b2Contact* contact, const b2Manifold* oldManifold)
	
	 {
	
	 b2WorldManifold worldManifold;
	
	 contact->GetWorldManifold(&worldManifold);
	
	 b2PointState state1[2], state2[2];
	
	 b2GetPointStates(state1, state2, oldManifold, contact->GetManifold());
	
	 if (state2[0] == b2_addState)
	
	 {
	
	 const b2Body* bodyA = contact->GetFixtureA()->GetBody();
	
	 const b2Body* bodyB = contact->GetFixtureB()->GetBody();
	
	 b2Vec2 point = worldManifold.points[0];
	
	 b2Vec2 vA = bodyA->GetLinearVelocityFromWorldPoint(point);
	
	 b2Vec2 vB = bodyB->GetLinearVelocityFromWorldPoint(point);
	
	 float32 approachVelocity = b2Dot(vB – vA, worldManifold.normal);
	
	 if (approachVelocity > 1.0f)
	
	 {
	
	 MyPlayCollisionSound();
	
	 }
	
	 }
	
	 }
	
	
	 */
}
