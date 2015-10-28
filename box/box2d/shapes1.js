//The Collision module contains shapes and functions that operate on them. 
// The module also contains:
// -dynamic tree 
// -broad-phase to acceleration collision processing of large systems.
//The collision module is designed to be usable outside of the dynamic system. 
// For example, you can use the dynamic tree 
// for other aspects of your game besides physics. 
b2d.iH = b2d.isShape = function (h) {if (!O(h)) {return}
	var	ty = h.constructor.name
	return ty == "b2PolygonShape" || ty == "b2CircleShape" || ty == "b2AShape"
}
//Shapes describe collision geometry and may be used 
// independently of physics simulation. 
// each shape has a type member and a radius.
bH.GT = function () {
	return this.GetType()
}
bH.ty = bH.GT
bH.GR = function () {
	return this.GetRadius()
}
bH.SR = function (rad) {
	this.SetRadius(rad);
	return this
}
bH.rad = function (r) {
	var bH = this;
	return U(r) ? bH.GR() * 30 : bH.SR(r / 30)
}
//Box2D shape ops:
//- Test a point for overlap with the shape.
bH.TP = function (x, y) {
	return this.TestPoint(x, y)
}
bH.tPt = bH.tP = bH.TP
//-Perform a ray cast against the shape.
bH.RC = function (fn, p1, p2) {
	return this.RayCast(fn, p1, p2)
}
//-Compute the shape's AABB.
bH.CAB = function (v1, v2) {
	var bH = this;
	return bH.ComputeAABB()
}
//-Compute the mass properties of the shape.
bH.CM = function (mass) {
	var bH = this;
	return bH.ComputeMass()
}
bH.C = function () {
	return this.Copy()
}
bH.CSA = function () {
	var bH = this
	var area = bH.ComputeSubmergedArea()
	return area
}
cH.S = function () {
	var bH = this
	bH.Set.apply(bH, arguments)
	return bH
}
//Circle shapes have a position 
cH.GLP = function () {
	return this.GetLocalPosition()
}
cH.SLP = function (vec) {
	this.SetLocalPosition(vec);
	return this
}
cH.XY = function (x, y) {
	if (U(x)) {
		return this.GLP().m()
	}
	var vec = V(x, y).d()
	return this.SLP(vec)
}
//  A polygon must have 3 or more vertices.
//You must create polygons with a counter clockwise winding (CCW). 
// We must be careful because the notion of CCW is 
// with respect to a right-handed coordinate system 
// with the z-axis pointing out of the plane. 
// This might turn out to be clockwise on your screen, 
// depending on your coordinate system conventions.
// you should use initialization functions to create a polygon. 
// The initialization functions create normal vectors and perform validation.
// You can create a polygon shape by passing in a vertex array. 
// The maximal size of the array is controlled by b2_maxPolygonVertices 
// which has a default value of 8. 
//This is sufficient to describe most convex polygons.
//The radius creates a skin around the polygon.
// The skin is used in stacking scenarios to keep polygons slightly separated. 
// This allows continuous collision to work against the core polygon.
//The polygon skin helps prevent tunneling by keeping the polygons separated. 
// This results in small gaps between the shapes. 
// Your visual representation can be larger than the polygon to hide any gaps.
$cH = function (r, x, y) {
	r = N(r) ? r : 50
	var h = new b2d.CircleShape(r / 30)
	if (N(x) && N(y)) {
		h.XY(x, y)
	}
	return h
}
pH.SAB = function (wd, ht) {
	this.SetAsBox(wd, ht);
	return this
}
pH.SAOB = function (wd, ht, pos, ang) {
	this.SetAsOrientedBox(wd, ht, pos, ang)
	return this
}
pH.sAB = function (args) {
	
	
	
	var pH = this, g = G(arguments),o
	o = O(g.t) ? {w: g.f, h: g.s,x: g.t.x, y: g.t.y, rt: g.fo} :
					N(g.fo)? {w: g.f, h: g.s, x: g.t, y: g.fo, rt: g.fi} :
							N(g.s)? {w: g.f, h: g.s, rt: g.t} :
							 {rt: g.f}
	o.w = (o.w || 100) / 60
	o.h = (o.h || 100) / 60
	o.x = N(o.x, 0)
	o.y = N(o.y, 0)
	o.v = V(o.x, o.y).d()
	o.rt = M.tR(o.rt || 0)
	return o.v ? pH.SAOB(o.w, o.h, o.v, o.rt) :
			pH.SAB(o.w, o.h)

}
pH.box = function () {
	var pH = this, g = G(arguments)
	return pH.sAB.apply( pH, toArgs(g)  )
	function isArgs(g) {
		return g.A || _.isArguments(g.f)
	}
	function toArgs(g) {
		return isArgs(g) ? g.f : g
	}
}

SAB=function(){
	W()
	
	
	//pH.sAB handles both box and oriented box!
	tx= function(x,y){
		
		var b = w.D(x,y);
		
		b.f($fD($cH(4)))
		
		return function(){
		
			   
			b.fD($pH().box(arguments)) 
			
			  
		}
	}
	
	tx(100, 100)()
	tx(100, 200)(20)// rt
	tx(100, 300)(20,20) //w, h (as box)
	tx(100, 370)(20, 20, 20) // w,h,r
	tx(100, 420)(20, 20, 20,20)// w,h,x,y,rt
	tx(100, 500)(20, 20, 20, 20,20)
}
$pH = _$pH = function () {return new b2d.PolygonShape()}
$rH = $bH= function (a,b,c,d,e) {
	return  $pH().box(  a,b,c,d,e )
}
b.fD=function(fD){return this.f($fD(fD))}
b.rH = function () {
	var rH = $rH.apply(null, arguments)
	return this.fD(rH)
}
RH = function () {W()
	//pH.sAB handles both box and oriented box!
	b = w.S(100, 400)
	b.f($fD($cH(4)))
	b.rH()
	b.rH(40)
	b.rH(200,20)
	b.rH(200, 20,-10)
	b.rH(100, 400, 100, 0, 20)
	
}

pH.SAA = function (arr, arrLen) {
	this.SetAsArray(arr, arrLen)
	return this
}
pH.sAA = function (arr) {
	return this.SAA(arr, arr.length)
}
// you see that SAE takes two verts.
//that's because native SetAsEdge takes that!
pH.SAE = function (v1, v2) {
	this.SetAsEdge(v1, v2)
	return this
}

$pH = function (wd, ht, xy, ang, ang2) {
	var p = _$pH()
	if (U(wd)) {
		return p
	}
	p.sAB(wd, ht, xy, ang, ang2)
	return p
}

//aH can accept points passed right in as args,
//or they can be wrapped in a single outer array
//the points can held in array or object,
//and are converted to array
//and the points are scaled down here as well
$aH = function () {
	var g = G(arguments)
	var pts = g.s ? arguments :
			g.f
	var arr = _.m(pts, function (pt) {
		return V(pt[0], pt[1], '-')
	})
	return _$pH().sAA(arr)
}
// whats up with _$pH? (will become $pH, rectangles should shift to $rH)
//$H is call sAA, which passes in arr lenght for you
//sAA just calls SetAsArray direct
//the above example started with w.D to make a dynamic body
// heres another example to show it again
//here lets look at $cF and $pF in a sec
//but first notice that w.D takes an x and y
// and then an array of fixture 'specs'
// based on how many nums in the array,
// it knows if it is a circle or rect
// we will come back to that shortcut soon and look at w.D..
// but really those shapes are converted to fixtures and it can be seen that
// it takes fixtures directly, probably it's main way to handle things..
//$cF makes a fixt from a $cH
//pass '-' to get a sensor!
//$cH can take radius and x,y position as well..
//radius defaults to 50, and x,y default to 0,0  (of course)
$sqH = function () {
	var g = G(arguments)
	var o = N(g.t) ?
	{sz: g.f, x: g.s, y: g.t, rt: g.fo} :
	{sz: g.f, rt: g.s}
	o.sz = o.sz || 50
	return $pH().sAB(o.sz, o.sz, o.x, o.y, o.rt)
}
// **** EDGES  ****
// edges are easy
//just call w.eg and pass in x,y of first point
// and x,y of second point
//u are specifying a line segment, thats all 
$eH = function (x1, y1, x2, y2) {
	return _$pH().SAE(V(x1, y1, '-'), V(x2, y2, '-'))
}