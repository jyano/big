/*
 function RayCast() {



 // You can cast a ray at a shape to get the point of first intersection 
 // and normal vector. No hit will register if the ray starts 
 // inside the shape.
 // A child index is included for chain shapes 
 // because the ray cast will only check a single edge at a time.
 transform = b2Transfrom()
 transform.SetIdentity();
 input = b2RayCastInput();
 input.p1.Set(0, 0, 0);
 input.p2.Set(0, 0, 0);
 input.maxFraction = 1;
 childIndex = 0;
 hit = shape.RayCast(output, input, transform, childIndex);
 if (hit) {
 hitPoint = input.p1 + output.fraction * (input.p2 – input.p1
 )
 }
 }
 function Overlap() {

 // You can test two shapes for overlap using this function:

 xfA =b2Transform()//  …, xfB = …;

 overlap = b2TestOverlap(shapeA, indexA, shapeB, indexB, xfA, xfB);
 //
 // Again you must provide child indices to for the case of chain shapes.
 }
 function ContactManifolds() {
 //
 // Box2D has functions to compute contact points for overlapping shapes. If we consider circle-circle or circle-polygon,
 // we can only get one contact point and normal. In the case of polygon-polygon we can get two points.
 // These points share the same normal vector so Box2D groups them into a manifold structure.
 // The contact solver takes advantage of this to improve stacking stability.
 //
 //
 //
 // Normally you don’t need to compute contact manifolds directly, however you will likely use the results produced in the simulation.
 //
 // The b2Manifold structure holds a normal vector and up to two contact points.
 // The normal and points are held in local coordinates. As a convenience for the contact solver, 
 // each point stores the normal and tangential (friction) impulses.
 //
 // The data stored in b2Manifold is optimized for internal use.
 // If you need this data, it is usually best to use the b2WorldManifold structure
 // to generate the world coordinates of the contact normal and points. You need to provide a b2Manifold and the shape transforms and radii.


 // worldManifold = b2WorldManifold ()
 worldManifold.Initialize(&manifold, transformA, shapeA.m_radius, transformB, shapeB.m_radius);

 for (  i = 0; i < manifold.pointCount; ++i){point = worldManifold.points[i];}
 // During simulation shapes may move and the manifolds may change. 
 // Points may be added or removed. You can detect this using b2GetPointStates.

 state1[2]= b2PointState()

 state2[2] = b2PointState()
 //
 b2GetPointStates(state1, state2, &manifold1, &manifold2);
 //
 if (state1[0] == b2_removeState){  process event
 }
 }
 function manual() {
 function pointText() {
 // 4.7 In Shape Point Test
 //
 // You can test a point for overlap with a shape. You provide a transform for the shape and a world point.
 //
 // b2Transfrom transform;
 //
 // transform.SetIdentity();
 //
 // b2Vec2 point(5.0f, 2.0f);
 //
 // bool hit = shape->TestPoint(transform, point);
 //
 // Edge and chain shapes always return false, even if the chain is a loop.
 //
 }

 function BilateralFunctions() {
 //
 // The Collision module contains bilateral functions that take a pair of shapes and compute some results. These include:
 //
 // ·         Overlap
 // ·         Contact manifolds
 // ·         Distance
 // ·         Time of impact
 }



 function Distance() {
 //
 // The b2Distance function can be used to compute the distance between two shapes.  The distance function needs both shapes to be converted into a b2DistanceProxy. There is also some caching used to warm start the distance function for repeated calls. You can see the details in b2Distance.h.
 //
 //
 }

 function TimeOfImpact() {
 //
 // If two shapes are moving fast, they may tunnel through each other in a single time step.
 //
 //
 //
 // The b2TimeOfImpact is used to determine the time when two moving shapes collide. This is called the time of impact (TOI). The main purpose of b2TimeOfImpact is for tunnel prevention. In particular, it is designed to prevent moving objects from tunneling outside of static level geometry.
 //
 // This function accounts for rotation and translation of both shapes, however if the rotations are large enough, then the function may miss a collision. However the function will still report a non-overlapped time and will capture all translational collisions.
 //
 // The time of impact function identities an initial separating axis and ensures the shapes do not cross on that axis. This will miss collisions that are clear at the final positions. While this approach may miss some collisions, it is very fast and adequate for tunnel prevention.
 //
 //
 //
 //
 //
 // It is difficult to put a restriction on the rotation magnitude. There may be cases where collisions are missed for small rotations. Normally, these missed rotational collisions should not harm game play.
 //
 // The function requires two shapes (converted to b2DistanceProxy) and two b2Sweep structures. The sweep structure defines the initial and final transforms of the shapes.
 //
 // You can use fixed rotations to perform a shape cast. In this case, the time of impact function will not miss any collisions.
 }

 function DynamicTree() {
 // The b2DynamicTree class is used by Box2D to organize large numbers of shapes efficiently. The class does not know about shapes. Instead it operates on axis-aligned bounding boxes (AABBs) with user data pointers.
 //
 // The dynamic tree is a hierarchical AABB tree. Each internal node in the tree can has two children. A leaf node is a single user AABB. The tree uses rotations to keep the tree balance, even in the case of degenerate input.
 //
 // The tree structure allows for efficient ray casts and region queries. For example, you may have hundreds of shapes in your scene. You could perform a ray cast against the scene in a brute force manner by ray casting each shape. This would be inefficient because it does not take advantage of shapes being spread out. Instead, you can maintain a dynamic tree and perform ray casts against the tree. This traverses the ray through the tree skipping large numbers of shapes.
 //
 // A region query uses the tree to find all leaf AABBs that overlap a query AABB. This is faster than a brute force approach because many shapes can be skipped.
 //
 //
 //
 //
 //
 // Normally you will not use the dynamic tree directly. Rather you will go through the b2World class for ray casts and region queries. If you do plan to create your own dynamic tree, you can learn how to use it by looking at how Box2D uses it.
 }

 function BroadPhase() {
 // Collision processing in a physics step can be divided into narrow-phase and broad-phase. In the narrow-phase we compute contact points between pairs of shapes. Imagine we have N shapes. Using brute force, we would need to perform the narrow-phase for N*N/2 pairs.
 //
 // The b2BroadPhase class reduces this load by using a dynamic tree for pair management. This greatly reduces the number of narrow-phase calls.
 //
 // Normally you do not interact with the broad-phase directly. Instead, Box2D creates and manages a broad-phase internally. Also, b2BroadPhase is designed with Box2D’s simulation loop in mind, so it is likely not suited for other use cases.
 }
 }
 */