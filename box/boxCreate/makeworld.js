_$W = function (grav, doSleep) {
	var doSleep = doSleep || U(doSleep) ? true : false
	return new b2d.W(grav, doSleep)
}
$W = function () {
	var g = G(arguments)
	var grav = g.N ? V(0, g.f) : V(g.f, g.s)
	var sleep = g.n ? false : true
	return _$W(grav, sleep)
}
$.c = $.can

W = function (o) {
	o = N(o) ? {g: o} : O(o) ? o : {}
	w = $W(o.g)
	var wd = o.W || 1200;
	var ht = o.H || 600
	if (o.z != false) {
		z()
	}
	w.$can = $.c('z', wd, ht).id('canvas')
	w.can = w.$can[0]
	w.ctx = w.can.getContext('2d')
	//
	$K()
	w.handle()
	w.startKilling()
	w.foot()
	w.st = w.stage = new cjs.Stage( w.can ).A()
	//w.st.autoClear = false
	var ps = $(w.can)._getPosition()
	w.x = ps.x;
	w.y = ps.y
	_mouseJoint = _mouseIsDown = 0
	_.sI(function () {
		if (_mouseIsDown) {
			_mouseJoint = _mouseJoint || b2d.mouseJoint(w.getBodyAtPoint(mX, mY))
			if (_mouseJoint) {
				_mouseJoint.SetTarget(V(mX, mY))
			}
		}
		else if (_mouseJoint) {
			_mouseJoint.destroy();
			_mouseJoint = null
		}
		w.ClF()
		w.step(1 / 60, 10, 10)
		
		w.st.update()
		w.draw()
			
		 
		
		if (F(o.cb)) {
			alert('see W.. o.cb');
			o.cb()
		}
		
	}, 1000 / 60)
	
	$.mousedown(function (e) {
		// *** need to change to pagex(so can scroll page?).. 
		// but i think it messes up for mobile
		var x = w.x, y = w.y
		_mouseIsDown = true
		recordMouseCoords(e)
		$.mousemove(recordMouseCoords)
		function recordMouseCoords(e) {
			mX = (e.clientX - x) / 30;
			mY = (e.clientY - y) / 30
		}
	})
	$.mouseup(function () {
		_mouseIsDown = false
	})
	touchh()
	if (o.clear !== false) {
		dD = $dD(w.ctx, 30)
		dD.fl($dD.h + $dD.a + $dD.j + $dD.c + $dD.p)
		dD.fAl(.4).al(.9).l(300)
		w.sDD(dD)
	}
	_wa = o.w 
	w.walls(o.w)
	return w
	function touchh() {
		$.touchstart(function (e) {
			_mouseIsDown = true
			recordMouseCoords(e)
			$.touchmove(recordMouseCoords)
			function recordMouseCoords(e) {
				var touch = e.originalEvent.touches[0]
				mX = (touch.clientX - w.x) / 30
				mY = (touch.clientY - w.y) / 30
			}
		})
				.touchend(function () {
					_mouseIsDown = false
				})
	}
}
WOR=function(){

	W()
	
	w.ball(300,400,20)
}


function oldGrav() {
	if (A(o.g)) {
		o.gX = o.g[0];
		o.gY = o.g[1]
	}
	else {
		o.gY = o.g
	}
	o.gX = N(o.gX) ? o.gX : 0
	o.gY = N(o.gY) ? o.gY : 0
	$l('gX: ' + o.gX + ', gY: ' + o.gY)
	w = $W(o.gX, o.gY)
}
DEB = function () {
	W()
	b = w.ball(300, 400)
	x = w.box(200, 400)
	j = b.spring(x)
}//make a world with a stage.. well with three stages!!!!
w.auCl = function (aC) {
	var w = this, st = w.st
	if (U(aC)) {
		return st.autoClear
	}
	st.autoClear = aC ? true : false
	return w
}
w.ggAuCl = function () {
	var w = this
	w.auCl(!w.auCl())
	return w
}
w.SDD = function (dD) {
	this.SetDebugDraw(dD);
	return this
}
w.sDD = w.db = w.debug = function (d) {
	var w = this;
	return U(d) ? w.ggAuCl() :
			d === w ? w.auCl(0) :
					d === false ? w.auCl(1) :
							w.SDD(d)
} //p.debugDraw  =p.dD= p.sDD=
w.dD = function () {
	return this.sDD($dD.apply($dD, arguments))
}
//initFxts // w.bD = $dB() // w.fD = fD = $fD().de(1).fr(.5).re(.8).H($pH())
$wa = {}
//the walls themselves are made with w.BOX
w.wall = function (x, y, wd, ht) {
	
	var w=this
	
	var b = w.BRICK(x, y, wd, ht, 'o')
			.stat().fr(0)
			.K('wall')

	
	return b
}

// soft brick?
// soft ball?  circle
// soft bump?
// soft box  rectangle
w.thin = function () {
	var w = this, b
	return b
}
w.flat = function () {
	var w = this, b
	return b
}
// a tall is a canvas-heighted thin 
// a long is canvas-widthed flat
w.tall =  function Side(x) {
	var ht = w.can.height
	return this.wall(x, ht / 2, 40, ht)
}
w.long =   function Flat(y) {
	var wd = w.can.width
	return this.wall(wd / 2, y, wd, 40)
}
w.walls = function (wa) {

	var w = this;
	if (wa === 0) {
		return w
	}  //if (F(wa = S(wa) ? window[wa] : wa)) {wa();return}
	w.left = w.tall(0)
	w.right = w.tall(w.can.width)
	w.roof = w.long(0)
	w.floor = w.long(w.can.height)
	return w
}


W0 = function () {
	return W({g: 0})
}
W00 = function () {
	return W({g: 0, w: 0})
}
b.$ = b.click = function (fn) {
	var b = this
	b.W().stage.on('stagemouseup', function (ev) {
		w.qPoint(
				function (f) {
					if (f.B() == b) {
						_.b(fn, b)(f)
					}
				},
				ev.rawX,
				ev.rawY
		)
	})
	return b
}
f._mD = function () {
	return this.GetMassData()
}
f.mD = function () {
	var d = this.GetMassData()
	d.c = d.center
	d.m = d.mass
	return d
}
f.mass = function () {
	return this._mD().mass
}
b.relPos = function () {
	return this.X() + this.stg().X()
}
b.dot = function (color) {
	color = oO('c', color || 'y')
	this.stg().dot(color, this.cent()) //  this.X(), this.Y()
}
b.stg = function () {
	return this.W().stage
}
//nice it tells me den when i click on bods( /fxs ? )
DENSITY = DSY = function () {
	W({g: 0, W: 600, H: 500})
	b = w.ball(100, 100, 65).de(1)
	f = b.f()
	h = f.H()
	d = f.mD()
	m = f.mass()
	x = w.box(300, 200, 30, 50).de(1)
	_.in(1, function () {
		x.BOX(200, 30).de(1)
	})
	w.b$(function (fixture) {
		var b = this
		$l('')
		$l('---- MASS ----')
		$l('total mass: ' + b.GetMass().toFixed(3))
		b._m()
		$l('_')
		$l('')
	})
}
b.onAddFxt = function () {
	this.rMD()
	return this
}
b._m = function () {
	var n = 1
	this.fs(function (f) {
		$l('#' + (n++) + ' mass: ' + f.mass())
	})
}
//debug.setsprite(canvas), .setdrawscale(30)
//debug.setflags(what to draw :: shapeBit||jointBit)
//world.setDebugDraw(debug)
//world.drawDebugdata
//if( ! o.$$ == 0 ){ makeShapeOnDblClk() }
// $.gameController().A();
//cjs.Ticker.removeAllEventListeners()
function drawMets() {
//DrawCircle(center:b2Vec2, r:N, c:b2Color) 
//DrawPolygon(vs:Arr, numVs, c)  -closed CCW poly 
//DrawSegment(p1:b2Vec2, p2:b2Vec2, c)   line segment
//DrawSolidCircle(cen:b2Vec2, rs:N, axis:b2Vec2,c) 
//DrawSolidPolygon(vs:Vector, numVs,c   )    -solid closed CCW poly 
//DrawTransform(xf:b2Transform)  
};
drawMets()
b2World.prototype.DrawDebugData = function () {
	if (this.m_debugDraw == null) {
		return;
	}
	//this.m_debugDraw.m_sprite.graphics.clear();
	var flags = this.m_debugDraw.GetFlags();
	var i = 0;
	var b;
	var f;
	var s;
	var j;
	var bp;
	var invQ = V();
	var x1 = V();
	var x2 = V();
	var xf;
	var b1 = new b2AABB();
	var b2 = new b2AABB();
	var vs = [V(), V(), V(), V()];
	var color = new b2Color(0, 0, 0);
	if (flags & b2DebugDraw.e_shapeBit) {
		for (b = this.m_bodyList;
		     b; b = b.m_next) {
			xf = b.m_xf;
			for (f = b.GetFixtureList();
			     f; f = f.m_next) {
				s = f.GetShape();
				if (b.IsActive() == false) {
					color.Set(0.5, 0.5, 0.3);
					this.DrawShape(s, xf, color);
				}
				else if (b.GetType() == b2Body.b2_staticBody) {
					color.Set(0.5, 0.9, 0.5);
					this.DrawShape(s, xf, color);
				}
				else if (b.GetType() == b2Body.b2_kinematicBody) {
					color.Set(0.5, 0.5, 0.9);
					this.DrawShape(s, xf, color);
				}
				else if (b.IsAwake() == false) {
					color.Set(0.6, 0.6, 0.6);
					this.DrawShape(s, xf, color);
				}
				else {
					color.Set(0.9, 0.7, 0.7);
					this.DrawShape(s, xf, color);
				}
			}
		}
	}
	if (flags & b2DebugDraw.e_jointBit) {
		for (j = this.m_jointList;
		     j; j = j.m_next) {
			this.DrawJoint(j);
		}
	}
	if (flags & b2DebugDraw.e_controllerBit) {
		for (var c = this.m_controllerList; c; c = c.m_next) {
			c.Draw(this.m_debugDraw);
		}
	}
	if (flags & b2DebugDraw.e_pairBit) {
		color.Set(0.3, 0.9, 0.9);
		for (var contact = this.m_contactManager.m_contactList; contact; contact = contact.GetNext()) {
			var fixtureA = contact.GetFixtureA();
			var fixtureB = contact.GetFixtureB();
			var cA = fixtureA.GetAABB().GetCenter();
			var cB = fixtureB.GetAABB().GetCenter();
			this.m_debugDraw.DrawSegment(cA, cB, color);
		}
	}
	if (flags & b2DebugDraw.e_aabbBit) {
		bp = this.m_contactManager.m_broadPhase;
		vs = [V(), V(), V(), V()];
		for (b = this.m_bodyList;
		     b; b = b.GetNext()) {
			if (b.IsActive() == false) {
				continue;
			}
			for (f = b.GetFixtureList();
			     f; f = f.GetNext()) {
				var aabb = bp.GetFatAABB(f.m_proxy);
				vs[0].Set(aabb.lowerBound.x, aabb.lowerBound.y);
				vs[1].Set(aabb.upperBound.x, aabb.lowerBound.y);
				vs[2].Set(aabb.upperBound.x, aabb.upperBound.y);
				vs[3].Set(aabb.lowerBound.x, aabb.upperBound.y);
				this.m_debugDraw.DrawPolygon(vs, 4, color);
			}
		}
	}
	if (flags & b2DebugDraw.e_centerOfMassBit) {
		for (b = this.m_bodyList;
		     b; b = b.m_next) {
			xf = b2World.s_xf;
			xf.R = b.m_xf.R;
			xf.position = b.GetWorldCenter();
			this.m_debugDraw.DrawTransform(xf);
		}
	}
}
b2Color = b2d.Cm.b2Color
TRAIL = function () {
	W0().db().pen('welcome to tensor (damping) controller')
	y = w.ship()
	co = w.tCo()
	_.t(30, function () {
		var b = w.BALL(400, 300, 20, 'w').lV(10, 20).lD(0)
		co.A(b)
	})
}
W.U = function (g) {
	W().G(g).roof.kill()
	return w
}
W.L = function (g) {
	W().G(g)
	w.roof.kill()
	w.right.kill()
	return w
}
w.$e = function (fn) {
	var w = this
	$t(function () {
		w.eB(fn)
	})
	return w
}
w.$eD = function (fn) {
	var w = this
	$t(function () {
		w.eD(fn)
	})
	return w
}

