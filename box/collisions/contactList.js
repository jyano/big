//  the contact class is created and destroyed by Box2D.   Contact objects are not created by the user.  (but u can access  contact class,interact with it)
b.GCxL = function () {
	return this.GetContactList()
}

b.cx = function () {
	var cxLs = this.GCxL()
	return cxLs
}
b.eachCx = function (fn) {
	var b = this
	for (var cx = b.cx(); cx; cx = cx.next) {
		if (O(cx) && O(cx.contact)) {
			fn(cx.contact)
		}
		else {
			alert('err in b.eachCo')
		}
	}
	return b
}
cx.N = cx.GN = cx.next = cx.gN = function () {
	return this.GetNext()
}
cx.IC = cx.iCn = cx.iCont = cx.continuous = cx.iC = function () {
	return this.IsContinuous()
}
//Does this contact generate TOI events for continuous simulation
cx.IT = cx.iT = cx.touching = function () {
	return this.IsTouching()
}//Is this contact touching.
// accessCxs
//to access cx: 1)  can access the contacts directly on world and body structures.  2) can  implement a contact listener.
	
	
w.cxs=function(){
	//You can iterate over all contacts in the world:
	for (cx = w.GCxL(); cx; cx = cx.GN()) {
	}

}
	 
	
	 


		
b.cxs=function(){
//	 You can also iterate over all the contacts on a body. 
// These are stored in a graph using a contact edge structure.
		//b2ContactEdge
	
		for (ce = b.GetContactList(); ce; ce = ce.next) {
		
			cx = ce.contact
		}
	//Caution : Accessing contacts off b2World and b2Body
	// may miss some transient contacts 
	// that occur in the middle of the time step.
	// Use b2ContactListener to get the most accurate results.
}
	
	 
cx.ks = function () {
	var cx = this
	var aK = cx.A().K()
	var bK = cx.B().K()
	var str = ''
	if (aK) {
		str += 'fA: ' + aK + ', '
	}
	if (bK) {
		str += 'fB: ' + bK
	}
	$l(str)
	return cx
}
 
	//contact point:  point where two shapes touch. Box2D approximates contact with a small number of points.
	function contactNormal(){
	//contact normal:unit vector that points from one shape to another. 
	//By convention, the normal points from fixtureA to fixtureB.
	//contact separation:opposite of penetration. Separation is negative when shapes overlap. 
	//It is possible that future versions of Box2D will create contact points with positive separation,
	// so you may want to check the sign when contact points are reported.
	}
	function contactManifold(){
	//contact manifold:Contact between two convex polygons may generate up to 2 contact points. 
	//Both of these points use the same normal, so they are grouped into a contact manifold,
	// which is an approximation of a continuous region of contact.
	}
	
	function normalImpulse(){
	//normal impulse: force applied at a contact point to prevent the shapes from penetrating. 
	//For convenience, Box2D works with impulses. The normal impulse is just the normal force multiplied by the time step.
	//tangent impulse: generated at a contact point to simulate friction. For convenience, this is stored as an impulse.
	}
	
	function contactId(){//contact ids
	//Box2D tries to re-use the contact force results from a time step as the initial guess for the next time step. 
	//Box2D uses contact ids to match contact points across time steps. 
	//The ids contain geometric features indices that help to distinguish one contact point from another.
	}


function chickenEgg(){
	//Contacts created when two fixture’s AABBs overlap, destroyed with the AABBs cease to overlap.
	//So you might gather that there may be contacts created for fixtures that are not touching (just their AABBs). 
	//Well, this is correct. It's a "chicken or egg" problem. 
	//We don't know if we need a contact object until one is created to analyze the collision. 
	//We could delete the contact right away if the shapes are not touching, 
	//or we can just wait until the AABBs stop overlapping. 
	//Box2D takes the latter approach because it lets the system cache information to improve performance.
	//You can get the fixtures from a contact, then the bodies: fA = cx.fA(); bA = fA.B();  actorA = Actor.bA.uD()
 
} 