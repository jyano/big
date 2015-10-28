POSTSOLVE = POS = function () {
	https://www.youtube.com/watch?v=GM6s8v7_oA8
			W()//only breaks at high impulse
	b = w.A($dB(300, 400), [$cF(40)]).re(.6).de(1)
	$t(function () {
		if (w.flagged('newBall')) {
			w.BALL(200, 200, 50, 'y')
		}
	})
	
	
	w.post(
			function (cX, imp) { //second arg??
				nImps = imp.normalImpulses
				nX = nImps[0]
				nY = nImps[1]
				tImps = imp.tangentImpulses
				tX = tImps[0]
				tY = tImps[1]
				$l('normal: ' + nX + ' tangent: ' + tX)
				if (nX > 100) {
					w.flag('newBall')
				}
				else {
					//	$l('missed it by thiiiis much: ' + (100-nY))
				}
			}
	)
	
	
	//we can get the 'normal vector' of the contact btwn fixtures
}
function post() {
	
	/*
	
	 Post-Solve Event
	 The post solve event is where you can gather collision impulse results. If you don’t care about the impulses, you should probably just implement the pre-solve event.
	
	 It is tempting to implement game logic that alters the physics world inside a contact callback. For example, you may have a collision that applies damage and try to destroy the associated actor and its rigid body. However, Box2D does not allow you to alter the physics world inside a callback because you might destroy objects that Box2D is currently processing, leading to orphaned pointers.
	
	 The recommended practice for processing contact points is to buffer all contact data that you care about and process it after the time step. You should always process the contact points immediately after the time step; otherwise some other client code might alter the physics world, invalidating the contact buffer. When you process the contact buffer you can alter the physics world, but you still need to be careful that you don't orphan pointers stored in the contact point buffer. The testbed has example contact point processing that is safe from orphaned pointers.
	
	 This code from the CollisionProcessing test shows how to handle orphaned bodies when processing the contact buffer. Here is an excerpt. Be sure to read the comments in the listing. This code assumes that all contact points have been buffered in the b2ContactPoint array m_points.
	
	 // We are going to destroy some bodies according to contact
	
	 // points. We must buffer the bodies that should be destroyed
	
	 // because they may belong to multiple contact points.
	
	 const int32 k_maxNuke = 6;
	
	 b2Body* nuke[k_maxNuke];
	
	 int32 nukeCount = 0;
	
	
	
	 // Traverse the contact buffer. Destroy bodies that
	
	 // are touching heavier bodies.
	
	 for (int32 i = 0; i < m_pointCount; ++i)
	
	 {
	
	 ContactPoint* point = m_points + i;
	
	
	
	 b2Body* body1 = point->shape1->GetBody();
	
	 b2Body* body2 = point->shape2->GetBody();
	
	 float32 mass1 = body1->GetMass();
	
	 float32 mass2 = body2->GetMass();
	
	
	
	 if (mass1 > 0.0f && mass2 > 0.0f)
	
	 {
	
	 if (mass2 > mass1)
	
	 {
	
	 nuke[nukeCount++] = body1;
	
	 }
	
	 else
	
	 {
	
	 nuke[nukeCount++] = body2;
	
	 }
	
	
	
	 if (nukeCount == k_maxNuke)
	
	 {
	
	 break;
	
	 }
	
	 }
	
	 }
	
	
	
	 // Sort the nuke array to group duplicates.
	
	 std::sort(nuke, nuke + nukeCount);
	
	
	
	 // Destroy the bodies, skipping duplicates.
	
	 int32 i = 0;
	
	 while (i < nukeCount)
	
	 {
	
	 b2Body* b = nuke[i++];
	
	 while (i < nukeCount && nuke[i] == b)
	
	 {
	
	 ++i;
	
	 }
	
	
	
	 m_world->DestroyBody(b);
	
	 }
	 */
}
