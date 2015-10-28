//You can receive contact data by implementing b2ContactListener. supports  events: begin, end, pre-solve, post-solve. 
$PT()
//Begin Contact Event : called when two fixtures begin to overlap.
//  - called for sensors and non-sensors. - can only occur inside the time step.
l.b = w.bg = function (fn) {
	this.BeginContact = fn;
	return this
}
//End Contact Event: called when two fixtures cease to overlap.
// - called for sensors and non-sensors. - may be called when a body is destroyed ( event can occur outside  time step)
l.end = l.e = function (fn) {
	this.EndContact = fn
	return this
}
l.pre = function (fn) {
	this.PreSolve = fn
	return this
}
l.po = function (fn) {
	this.PostSolve = fn
	return this
}
$cL = function () {
	var cL = new b2d.CL
	return cL
}
w.SCL = function (cL) {
	cL = cL || $cL()
	this.SetContactListener(cL)
	return this
}
w.sCL = w.lsn = function (cL) {
	return this.SCL(cL || $cL())
}
$cL.handle = function (arr) {
	return function (cx, d) {
		_.e(arr, function (fn) {
			fn(cx, d)
		})
	}
}
w._handle = w.preHandle = function () {
	var w = this
	w._l = w._l || $cL()
	w.BG = w.BG || []
	w.PRE = w.PRE || []
	w.PO = w.PO || []
	w.END = w.END || []
	return w
}
w.handle = w.wire = function () {
	var w = this.preHandle()
	w._l.BeginContact = $cL.handle(w.BG) //function (cx,d) {_.e(w.BG, function (fn) {fn(cx,d)})}
	w._l.PreSolve = function (cx, d) {
		_.e(w.PRE, function (fn) {
			fn(cx, d)
		})
	}
	w._l.PostSolve = function (cx, d) {
		_.e(w.PO, function (fn) {
			fn(cx, d)
		})
	}
	w._l.EndContact = function (cx, d) {
		_.e(w.END, function (fn) {
			fn(cx, d)
		})
	}
	return w.SCL(w._l)
}// = w.startListening

w.b = w.bg = w.beg = function () {

//ADDS one or more handlers to beginHandlers array
	var w = this, g = G(arguments)
	
	_.e(g, function (fn) {
		w.BG.push(fn)
	
	})
	
	return w

}

 
 
w.pre = function () {
	var w = this, g = G(arguments)
	_.e(g, function (fn) {
		w.PRE.push(fn)
	})
	return w
}
w.po = w.post = function () {
	var w = this, g = G(arguments)
	_.e(g, function (fn) {
		w.PO.push(fn)
	})
	return w
}
w.end = function () {
	var w = this, g = G(arguments)
	_.e(g, function (fn) {
		w.END.push(fn)
	})
	return w
}
w.bE = w.begEnd = function (bFn, eFn) {
	var w = this
	w.b(bFn)
	w.end(eFn)
	return w
}
$wM = function (cx) {
	var wM = new b2d.WorldManifold()
	if (cx) {
		cx.gWM(wM)
	}
	return wM
}
WCPT = WCP = MANIF = MNF = WORLDMANIFOLD = WMF = function () {
//WORLDCONTACTPOINT =
	W(40).st.chalk('world contact eazy')
	w.box(200, 500, 200, 50).K('x')
	w.box(200, 500, 200, 50).K('x')
	w.brick(200, 500, 200, 50).K('x')
	w.b(function (cx) {
		if (cx.w('x')) {
			w.st.dot(cx.pt())
		}
	})
	// cx.wM().m_points[0].m()
	// cx.w('x','x') works too
	//normal manifold contains all info...
	//...world manifold is helpful for getting locations	 
	// $l('num pts: ' + _.size(pts)) numPoints = 1000000; _.ev(function () {$l(numPoints)})// always 2
}
NORMAL = NML = function () {
	W({g: 0}).b(
			bgFn)
			.chalk('m:  worlManifold', 'n:  m.m_normal', 'p:  m.m_points[0].mult()')
	function bgFn(cx) {
		if (cx.w('tim', 'ball')) {
			w.dot('g', cx.wCxPt())
			worMan = cx.wM()
			norm = cx.no()
			collV = cx.V()
			w.dot('w', collV)
			//a3.I(n.x*10, n.y*10  )
			//a2.I(-n.x*20, -n.y*10  )
			//a1.I(-n.x*200, -n.y*100)
			M.abs(collV.x *= 30)
			M.abs(collV.y *= 30)
			//this gets th actual velocity of body A
			//at moment of collision !!!!!!!
			v = cx.a().lVW(cx.pt())
			$l(v)
			// w.dot(  v )
			me.lV(v.x, v.y)  // HOLY SHIT!!! me absorbs enervy of tim's collision !!!!!!
		}
	}
	
	w.bump(300, 300, 60).K('ball')
	a1 = w.bump(50, 545).K('ball')
	a2 = w.bump(1150, 50).K('ball')
	tim = w.ba(500, 300).bS('guy').K('tim').con('thrust')
	me = w.ba(700, 300).bS('me').K('me')
}
CXS = function () {
	W()
	var cenFx = $cF(80).K('cen')
	w.A($dB(500, 300), [
		cenFx,
		$rF(60, 290, 0, 40, 10).mS().K('sen1')
	]).aV(100)
	w.A($dB(700, 300), [cenFx, $rF(100, 200).mS().K('sen2')]).aV(100)
	w.cl('sen1', 'sen2', function () {
		w.ba()
	})
	//w.b(function(cx){if(cx.w('sen1','sen2')){w.flag('new')}}) 
	//w.on('new', function(){w.ball()})
}
WITH = WIT = function () {
	W()
	w.ba().K('ball')
	w.brik(500)
	w.b(function (cx) {
		if (cx.w('ball', 'brick')) {
			$l('hit')
		}
	})
}
COLL = function () {
	W().platform(400, 500, 400, 20).K('platform')
	w.roof.kill()
	w.ba(440, 100, 50).K('dot')
	w.ba(440, 200, 20).K('ball')
	w.cl('ball', 'platform', function () {
		w.box(20, 20, 20, 20).K('box')
	})
	w.cl('box', 'platform', function () {
		w.ba(300, 20).K('ball')
	})
	w.cl('dot', function (cx) {
		collX = cx.b().X()
		collY = cx.b().Y()
		w.stage.dot('r', collX, collY)
	})
	// w.collide('box', 'platform')
	//  cjs.tick(function(){if(w.flagged('boxplatform')){ $l('boxHit');w.box(300,40,20,20)}})
}
old = function () {
	w.trig = w.trg = function (k, fn) {
		alert('w.trg trig')
		var b = this
		w.begEnd(
				function (cx) {
					if (cx.w(k)) {
						b.trig[k] = true
					}
				},
				function (cx) {
					if (cx.w(k)) {
						b.trig[k] = false
					}
				}
		)
		if (F(fn)) {
			$t(function () {
				if (b.trig[k]) {
					_.b(fn, b)(b.trig[k])
				}
			})
		}
		return b
	}//alert
	b2d.levelJet = function () {
		wd = 600
		ht = 300
		W({W: 600, H: 300, g: 10, w: 0})
		w.floor = w.wall(300, wd / 2, wd * 5, 40, 'o')
		w.right = w.wall(0, ht / 2, 40, ht, 'p')
		p = w.p(2.5).con('thrust')
	}
}
function Caution() {
	
	//Do not keep a reference to the pointers sent to b2ContactListener. 
	//  (make  deep copy of cx point data into your own buffer. 
	// The example below shows one way of doing this.
	//At run-time you can create an instance of the listener and register it 
	// with w.SetContactListener. 
	// Be sure your listener remains in scope while the world object exists.
}