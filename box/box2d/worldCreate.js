$PT()
 
b._BOX_ =   function (wd, ht, x, y) {
	var b = this
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var f = b.f($rF(wd, ht, x, y)).mS().de(.00000001)
	var r = f.sprite = $r2Gx(wd, ht, x, y)
			.XY(b.X(), b.Y()).al(.3).a2(w.st)
	$t(function () {
		r.rt(b.rt()).XY(b.X(), b.Y())
	})
	return f
}//b.rSn = b.recSen = b.rectSensor = b.RECTSEN =
w.BUMP = function (x, y, r, c) {

	var w = this, 
			g = G(arguments)
	//	var wd = w.st.W(), ht = w.st.H()
	//x = N(x) ? x : _.pI(M.r() * (wd - 100)) + 60
	//y = N(y) ? y : 50
	//r = N(r) ? r : _.ran(14) + 8
	c = oO('c', c || 'y')
	return w.bump(x, y, r, g.o).bS2( $cGx(r, c) )
			
}// = w.circStat = w.cSt
w.BALL  = function (x, y, r, c) {var w=this
	return w.ball(x, y, r).bS2(w.st.cir(x, y, r, c))
} //= w.circ = w.circColor
w.BOX=   function (x, y, wd, ht, c) {
	var w = this, g=G(arguments), b, i, o
	b = w.box(x,y,wd,ht)
	b.lD(2)
	if (g.n || g.m) {b.mS()}
	if (g.p || g.m) {b.mBu()}
	i = $rGx(wd, ht, oO('c', c || 'y'))
	i.XY(g.f, g.s)
	w.st.A(i)
	b.bS2( i )
	return b
}//w.REC= w.rect = w.rectCol  =
w.BRICK=  function (x, y, wd, ht, col) {
 
	var w = this
	x = N(x) ? x : 200
	y = N(y) ? y : 50
	wd = N(wd) ? wd : 50
	ht = N(ht) ? ht : wd
	col = oO('c', col || $r())
	return w.brick(x, y, wd, ht)
	
			.bS2(
			
			$rGx(wd, ht, col).XY(x, y)
			
	).lD(2)
}//w.rSt = w.recStat = w.rectStat =w.rSt = w.recStat = w.rectStat = 
w._BRICK_ =  function (x, y, wd, ht, col) {
	var w = this
	col = oO('c', col || $r())
	return w.brick(x, y, wd, ht, '-').bS2(
			$rGx(wd, ht, col).XY(x, y).al(.5)
	).lD(2)
}//w.BRICKSENSOR =  w.rectSensor = w.rSn = w.recSen = 
w.POLY =  function (x, y, arrs) {
	alert('w.poly verts vs  worldcreate.js')
	var w = this
	var b = w.D(x, y)
	_.e(arrs, function (arr) {
		b.POLY(arr[0], _.r(arr))
	})
	return b
} //w.poly = w.verts = w.vs =
b.POLY=  function (c, arr) {
	
	var b = this, w = b.W(), g = G(arguments), o
	o = S(g.f) ? {c: g.f, arr: g.s} : {arr: g.f}
	o.c = o.c || 'y'
	var f = b.f($aF(o.arr))
	b.bS2(
	
	w.st.poly(o.arr, o.c, o.c))
	return f
}//w.CONVEX = b.vex = b.conv = b.vex =
//specific to talkjs
 


COL = function () {
	W(2)
	//
	//
	//w.BUMP(100,200,25)
	//w.BRICK(700, 200, 25)
	//w.BALL(100,100, 25)
//	w.BOX()
//	w.BOX(100)
//	w.BOX(700, 300)
//	b=	w.BOX(700, 300, 25)
//	w.BOX(700, 300, 25)
//	w.BOX(700, 300, 25, 25)
	//w.BUMP(100, 200, 25, 'r')
	//w.BRICK(700, 200, 25, 'r')
	//w.BALL(100, 100, 25, 'r')
	//w.BOX(700, 100, 25,'r')
}
w.gradBall = function (x, y, r, col1, col2, stop1, stop2) {
	stop1 = N(stop1) ? stop1 : 0
	stop2 = N(stop2) ? stop2 : 1
	col1 = oO('c', col1);
	col2 = oO('c', col2)
	return this.ball(x, y, r).bS2(
			this.s.shape(x, y).rG([col1, col2], [stop1, stop2],
					0, 0, 0, 0, 0, r).dc(0, 0, r))
}


w.vsK = w.vertsKin = function (x, y, arrs) {
	var b = this.kin(x, y)
	_.e(arrs, function (arr) {
		b.convex(arr[0], _.r(arr))
	})
	
	return b
}
//w.FixBody=function(x,y){return this.addBody(  dBD(x,y),fix())}
 
 
 
w.K = w.kin = function (x, y, fD) {
	if (O(x)) {
		fD = y;
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 500;
	y = N(y) ? y : 250
	return w.A($kB(x, y), fD)
}
w.isBul = w.bul = function (x, y) {
	var def = $dB(x, y)
	def.bullet = true
	var body = this.body(def)
	return body
}


	
w.pBul = w.polyBul = function (x, y, wd, ht, c) {
		alert('w.pBul polyBul worldcreate.js')
		var w = this
		var bul = w.bul(x, y)
		bul.poly(wd, ht)
		if (c) {
			bul.bS2($rGx(wd, ht, oO('c', c))
					.XY(x, y).a2(w.s))
		}
		return bul
	}
f.sp = function (sp) {
	var f = this
	if (U(sp)) {return f.sprite}
	f.sprite = sp
	return f
}


f.Sp = function (sp) {
	var f = this
	f.sprite = sp
	return sp
}

 

	
	w.rnRecs=w.randRects = function () {
		var that = this
		_.t(30, function (i) {
			that.BRICK(
					M.r() * 1100 + 20,
					M.r() * 150 + 40,
					M.r() * 30 + 15,
					M.r() * 30 + 15
			).K('rR randomRect')
		})
		return this
	}
		
	w.rnF=w.randFx = function () {
		return this.dynamic(M.r() * 1000, 100,
				b2d.randomFixture())
		 
	}
	w.random = w.addRandomBodies = function (howMany) {
		var w = this
		_.t(howMany || 10, function () {
			w.addRandomBody()
		})
		return w
	}
	w.addTenBalls = function (n) {
		var w = this
		_.t(n || 10, function (i) {
			w.ball(100 + (i * 80), 200)
		})
		return w
	}
	w.addHundBalls = function (n) {
		var w = this
		_.t(n || 100, function (i) {
			w.BALL(100 + (i * 8), 50, 10)
		})
		return w
	}
 
 
w.arr = function () {
	var g = G(arguments)
	var b = this.D(g.f, g.s)
	b.f($fD($aH.apply($aH, g.fo ? g.r : g.t)))
	return b
}
w.eg = w.edge = function (a, b, c, d) {
	var w = this
	var eg = w.A($sB(0, 0))
	eg.f($eF(a, b, c, d))
	return eg
}
//
// Bodies are created and destroyed using a body factory provided by the world class.
// This lets the world create the body with an efficient allocator
// and add the body to the world data structure.
//
// Bodies can be dynamic or static depending on the mass properties.
// Both body types use the same creation and destruction methods.
//
// b2Body* dynamicBody = myWorld->CreateBody(&bodyDef);
//
// ... do stuff ...
//
// myWorld->DestroyBody(dynamicBody);
//
// dynamicBody = NULL;
//
// Caution
//
// You should never use new or malloc to create a body. 
// The world won't know about the body and the body won't be properly initialized.
//
// Static bodies do not move under the influence of other bodies.
// You may manually move static bodies, but you should be careful 
// so that you don't squash dynamic bodies between two or more static bodies. 
// Friction will not work correctly if you move a static body.
// Static bodies never collide with static or kinematic bodies. 
// It is faster to attach several shapes to a static body 
// than to create several static bodies with a single shape on each one. 
// Internally, Box2D sets the mass and inverse mass of static bodies to zero.
// This makes the math work out so that most algorithms don't need to treat
// static bodies as a special case.
// Box2D does not keep a reference to the body definition or any of the data it holds
// (except user data pointers). So you can create temporary body definitions
// and reuse the same body definitions.
//
// Box2D allows you to avoid destroying bodies by deleting your b2World object, 
// which does all the cleanup work for you. 
// However,
// you should be mindful to nullify body pointers that you keep in your game engine.
//
// When you destroy a body, 
// the attached fixtures and joints are automatically destroyed.
// This has important implications for how you manage shape and joint pointers.
// 