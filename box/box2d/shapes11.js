$L('shapes', 'circ', 'box', 'edge', 'arr', 'poly', 'rad')
function shapes() {
 
//The Collision module (usable outside of the dynamic system) contains:
// -shapes and functions that operate on them.
// -dynamic tree  (  use  for something  (in your game?) besides physics) 
// -broad-phase to acceleration collision processing of large systems.
 
//Shapes (usable independently of physics simulation) describe collision geometry  
 
	
	function hProps() {
// each shape has a type member...
		bH.GT = function () {
			return this.GetType()
		}
		bH.ty = function () {
			return b2d.iH(this)
		}
		b2d.iH = b2d.isShape = function (h) {
			if (!O(h)) {
				return
			}
			var ty = h.constructor.name
			return ty == "b2PolygonShape" ? 'p' :
					ty == "b2CircleShape" ? 'c' :
							ty == "b2AShape" ? 'a' : false
		}
		b2d.iP = b2d.iPH = function () {
			return this.iH() == 'p'
		}
		b2d.iC = b2d.iCH = function () {
			return this.iH() == 'c'
		}
		b2d.iA = b2d.iAH = function () {
			return this.iH() == 'a'
		}
//  and each type has a radius
		bH.GR = function () {
			return this.GetRadius()
		}
		bH.SR = function (rad) {
			this.SetRadius(rad);
			return this
		}
		bH.sRad = function (r) {
			var bH = this
			if (bH.ty() == 'c') {
				return bH.SR(r / 30)
			}
			bH.m_radius = r / 30
			return bH
		}
		bH.gRad = function () {
			var bH = this
			return bH.ty() == 'c' ? bH.GR() * 30 :
			bH.m_radius * 30
		}
		bH.rad = function (r) {
			var bH = this;
			return U(r) ? bH.gRad() : bH.sRad(r)
		}
	};
	hProps()
	function hCompute() {
//Box2D shape ops:
//- Test a point for overlap with the shape.
		bH.TP = function (x, y) {
		
			return this.TestPoint(x, y)
		}
		
		bH.tPt = bH.tP = bH.TP
		
		bH.tx=function(x,y){
			return this.TP(x/30, y/30)
		}
		
		
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
		bH.CSA = function () {
			var bH = this
			var area = bH.ComputeSubmergedArea()
			return area
		}
	}
	
	hCompute()
	bH.C = function () {
		return this.Copy()
	}
}
function circ() {
//Circle shapes have a position 
	cH.S = function () {
		var bH = this
		bH.Set.apply(bH, arguments)
		return bH
	}
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
	$cH = function (r, x, y) {
		r = N(r) ? r : 50
		var h = new b2d.CircleShape(r / 30)
		if (N(x) && N(y)) {
			h.XY(x, y)
		}
		return h
	}
	
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
function box() {
	pH.SAB = function (wd, ht) {
		this.SetAsBox(wd, ht);
		return this
	}
	pH.SAOB = function (wd, ht, pos, ang) {
		this.SetAsOrientedBox(wd, ht, pos, ang)
		return this
	}
	pH.sAB = function (args) {
		var pH = this, g = G(arguments), o
		o = O(g.t) ? {w: g.f, h: g.s, x: g.t.x, y: g.t.y, rt: g.fo} :
				N(g.fo) ? {w: g.f, h: g.s, x: g.t, y: g.fo, rt: g.fi} :
						N(g.s) ? {w: g.f, h: g.s, rt: g.t} :
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
		return pH.sAB.apply(pH, toArgs(g))
		function isArgs(g) {
			return g.A || _.isArguments(g.f)
		}
		
		function toArgs(g) {
			return isArgs(g) ? g.f : g
		}
	}
	$rH = $bH = function (a, b, c, d, e) {
		return $pH().box(a, b, c, d, e)
	}
	$sqH = function () {
		var g = G(arguments)
		var o = N(g.t) ?
		{sz: g.f, x: g.s, y: g.t, rt: g.fo} :
		{sz: g.f, rt: g.s}
		o.sz = o.sz || 50
		return $pH().sAB(o.sz, o.sz, o.x, o.y, o.rt)
	}
}
function poly() {
	
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
	$pH = _$pH = function () {
		var g = G(arguments)
		var p = new b2d.PolygonShape()
		p.sAB.apply(p, arguments)
		return p
	}
	//Polygons inherit a radius from b2Shape. The radius creates a skin around the polygon. The skin is used in stacking scenarios to keep polygons slightly separated.
// This allows continuous collision to work against the core polygon.
//The polygon skin helps prevent tunneling by keeping the polygons separated. This results in small gaps between the shapes. Your visual representation can be larger than the polygon to hide any gaps.
	//polygon.Set(vertices, count);
//aH can accept points passed right in as args,
//or they can be wrapped in a single outer array
//the points can held in array or object,
//and are converted to array
//and the points are scaled down here as well
	pH.SAA = function (arr, arrLen) {
		this.SetAsArray(arr, arrLen)
		return this
	}
	pH.sAA = function (arr) {
		return this.SAA(arr, arr.length)
	}
	pH.arr = function () {
		var pH = this, g = G(arguments)
		var pts = g.s ? arguments :
				g.f
		a = arr = _.m(pts, function (pt) {
			var v = V(pt)
			return V(v.x, v.y).d()
		})
		pH.sAA(arr)
		return pH
	}
	$aH = function () {
		var g = G(arguments)
		var aH = $pH()
		aH.arr.apply(aH, g)
		return aH
	}
 
}
function edge() {
// **** EDGES  ****
// edges are easy
//just call w.eg and pass in x,y of first point
// and x,y of second point
//u are specifying a line segment, thats all 
// you see that SAE takes two verts.
//that's because native SetAsEdge takes that!
	pH.SAE = function (v1, v2) {
		this.SetAsEdge(v1, v2)
		return this
	}
	$eH = function (x1, y1, x2, y2) {
		return _$pH().SAE(V(x1, y1, '-'), V(x2, y2, '-'))
	}
	// 4.5 Edge Shapes
// Edge shapes are line segments (no volume) 
//  - assist in making a free-form static environment for your game.
// major limitation:  can collide with circles and polygons, but not with themselves.
//  ( collision algorithms   require that at least one of two colliding shapes have volume)
	EDGE = function () {
		v1 = V(0, 0)
		v2 = V(40, 0)
		eH = $eH()
		eH.Set(v1, v2)
	}
	
// In many cases a game environment is constructed by:
// connecting several edge shapes end-to-end.
// warning: when a polygon slides along the chain of edges -> ghost collisions
//   ( caused   when the polygon collides with an internal vertex 
//      generating an internal collision normal )
// If edge1 did not exist this collision would seem fine.
// With edge1 present,the internal collision seems like a bug.
// But normally when Box2D collides two shapes,it views them in isolation.
//
// Fortunately, the edge shape provides a mechanism for eliminating ghost collisions
// by storing the adjacent ghost vertices.
// Box2D uses these ghost vertices to prevent internal collisions.
	GHOST = GHO = function () {
// / // This an edge shape with ghost vertices.
		eH = $eH()
		eH.Set(v1 = V(30, 8), v2 = V(0, 0));
		eH.m_hasVertex0 = true;
		eH.m_hasVertex3 = true;
		eH.m_vertex0 = v0 = V(40, 0);
		eH.m_vertex3 = v3 = V(40, 14);
	}
// In general stitching edges together this way is a bit wasteful and tedious.
// This brings us to the next shape type... chains..
	function chain() {
//
// The chain shape provides an efficient way to connect many edges together 
// to construct your static game worlds.
// Chain shapes automatically eliminate ghost collisions 
// and provide two sided collision.
		CHAIN = CHA = function () {
// // This a chain shape with isolated vertices
//
			vs = [V(30, 0), V(50, 10), V(0, 0), V(-30, 80)]
			chain = $chH()
			chain.CreateChain(vs, 4);
		}
// You may have a scrolling game world and would like to connect
// several chains together. 
// You can connect chains together using ghost vertices, 
// like we did with b2EdgeShape.
		GHOSTVERTS = GHV = function () {
// // Install ghost vertices
			chain = $chH();
			chain.SetPrevVertex(V(90, 30));
			chain.SetNextVertex(V(-60, 0))
		}
		LOOP = function () {// You may also create loops automatically.
//
// // Create a loop. The first and last vertices are connected.
//
			chain = $chainH();
			chain.CreateLoop(vs, 4);
			// Self-intersection of chain shapes is not supported.
// It might work, it might not.
// The code that prevents ghost collisions assumes there are no self-intersections
// of the chain.
// Each edge in the chain is treated as a child shape and can be accessed by index.
//
// // Visit each child edge.
//
			for (i = 0; i < chain.GetChildCount(); ++i) {
				eH = $eH();
				chain.GetChildEdge(eH, i)
			}
		}
	}
}
CIR = function () {W()
	cH = $cH(34)
	//pass a shapeDef to a fixtDef, and pass the fixtDef to b.f
	w.D(350, 200).f(
			$fD($cH(80), '-')
	  )
	//pass a shapeDef to b.fD 
	w.D(150, 300).fD($cH(30))
	// call b.cF
	w.D(450, 200).cF(80)
	//use w.ball
	w.ball(650, 300, 100).cF(100, 20, 20)
}
SAB = function () {
	W()
	//pH.sAB handles both box and oriented box!
	tx = function (x, y) {
		var b = w.D(x, y);
		b.f($fD($cH(4)))
		return function () {
			b.fD($pH().box(arguments))
		}
	}
	tx(100, 100)()
	tx(100, 200)(20)// rt
	tx(100, 300)(20, 20) //w, h (as box)
	tx(100, 370)(20, 20, 20) // w,h,r
	tx(100, 420)(20, 20, 20, 20)// w,h,x,y,rt
	tx(100, 500)(20, 20, 20, 20, 20)
	//
	//pH.sAB handles both box and oriented box!
	b = w.S(500, 400)
	b.f($fD($cH(4)))
	b.rH()
	b.rH(40)
	b.rH(200, 20)
	b.rH(200, 20, -10)
	b.rH(100, 400, 100, 0, 20)
}
SAA = function () {
	W()

	w.D(150, 200).f($fD($aH(
			[-100, 0], [0, -100], 
			[100, -20], [50, 20]
	)))
	
	w.D(240, 300).f(
			$fD( $aH( verts ) ) 

	)
	
	w.D(434, 400).f($aF((verts)))
	w.D(534, 300).aF(verts)
	w.bag(700, 200, verts, '-')
	w.rock(600, 400, verts)

}


TRI = function () {
	W()
	//long way
	
	 
	w.D(400, 400).f($fD($aH(verts)))
 
	//short way
	w.D(400, 400, $aF([-100, 0], [0, -100], [100, -20]))
	//shortest way ?
	w.arr(400, 400, [-100, 0], [0, -100], [100, -20])
	w.arr(400, 400, verts)
	
 
	w.D(200, 200, b2d.triangle3)
	//////////
	w.D(100, 200, $pF(50, 50))
	//tri =   $aF[-100,0], [0,-100 ], [100,0] )
	var h = $pH()
	h.sAA([V(-100, 0, '-'), V(0, -100, '-'), V(100, -20, '-')], 3)
	fD = $fD(h)
	b = w.D(400, 400)
	f = b.f(fD)
	// w.dyn(x,y, b2d.triangleFixt2)
	//w.dyn(x,y, b2d.triangleFixt3)
}
SAE = function () {
	W().p()
	w.eg(100, 500, 1000, 0)
	w.eg(50, 50, 100, 500)
	w.eg(0, 0, 1000, 100)
	w.cirB(410, 100, 2)
	_.in(4, function () {
		w.eg(100, 100, 500, 300)
		w.eg(100, 200, 500, 400)
		w.eg(100, 300, 500, 500)
		w.eg(1000, 100, 600, 300)
		w.eg(1000, 200, 600, 400)
		w.eg(1000, 300, 600, 500)
		w.cirB(410, 100)
	})
}
RAD = function () {
	W().G(10).roof.kill()
	n = 1
	drp()
	_.ev(1, function () {
		if (n < 300) {
			drp()
		}
	})
	function drp() {
		var b = w.D(350, 200).aV(2).lV(1, 1)
		R() ? b.fD($rH(120, 80)).rad(n *= 1.3) :
				b.fD($cH(n *= 1.3))
		$l('n:' + n)
	}
}
FRINGE = VIB = function () {
	W().G(10)
	w.D(350, 200).fD($cH(54))
	n = 1
	drp()
	_.ev(5, function () {
		drp()
	})
	function drp() {
		_.t(n++, function () {
			if (n < 10) {
				b = w.D(350, 200).fD(
						$cH(34)
				)
			}
			else {
				w.$can.C('b')
			}
		})
	}
	
	y = w.Y()
	w.D(300, 400)
	r = w.S(220, 500).f($fD($rH(20, 400)))
	l = w.S(670, 500).f($fD($rH(20, 400)))
	w.S(300, 500).f($fD($rH(40, 10)))
	w.S(400, 500).f($fD($rH(40, 10)))
	w.S(500, 500).f($fD($rH(40, 10)))
	w.S(600, 500).f($fD($rH(40, 10)))
}
