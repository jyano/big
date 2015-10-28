$PT()
b.GWV = function (vec) {
	return this.GetWorldVector(vec)
}
b._shootEv=b.shootOnInt = function (n, k) {var b = this
	n = N(n) ? n : 1000
	_.sI(function () {
	if (b.IsActive()) {
		b.shoot(k)}
	}, n)
	return b
}
b.shootEv = function (secs, k) {
	return this._shootEv(secs * 1000, k)
}

b.shootOnSpace = function (k) {
	var y = this
	$.space(function () {
		y.shoot(k)
	})
	return this
}
b.aboveGlobally =b.aboveMeGlobally = b.aboveMe =  b.above = function () {
	return this.wPt(0, -100)// -p.sprite.H()/2
}
b.webGuyShoot = function (k) {
	var y = this;
	k = k || 'bul'
	var dist = y.dir().m(100)
	var bul = w.BALL(y.X() + dist.x, y.Y() + dist.y, 6, 'w')
	bul.K(k)
	var v = y.GetWorldVector(V(0, -100))
	bul.I(v.x / 4, v.y / 4)
	_.in(.4, function () {
		bul.kill()
	})
	return bul
}

b.shoot = function () {var b = this, w = b.W(), g=G(arguments)
	var pt = b.GWV( V(0, -100) )
	var pel = w.pellet( b.aboveGlobally() )
			.I(pt.x / 20, pt.y / 20)
	if(g.m){pel.bS('me', 0.15)}
	return pel 
}

w.pel=w.pell= w.pellet=w.bullet = function (x, y, r) {
	var w = this,g=G(arguments),o
	//p.bullet = function(x,y){return this.ball(x,y,10).K('bullet')}
	// can pass in (x,y,r) | ({x:x,y:y},r )
	 o = O(g.f)? {x: g.f.x, y: g.f.y, r: g.s}: 
	 {x: g.f, y: g.s, r: g.t}
	o.x = N(o.x) ? o.x : 0
	o.y = N(o.y) ? o.y : 0
	o.r = N(o.r) ? o.r : 10
	var  bul  = w.BALL(o.x, o.y, o.r, 'w').de(.3)
	// to do: set as isBullet true!!! duh! (its the nominal use case ;) )
	bul.K('bul')
	return bul
}

b.gWV = function (vec) {
	return this.GetWorldVector(vec || V(0, -1))
}
b.vec=b.wVec = b.wV = b.worVec = b.worldVec = function (v, y) {
	y= N(y) ? V(v, y) : v
	return this.gWV(y)
}
b.fly = function (n) {return this.I(this.wVec()
				.d(N(n)?-n:-20))}
b.push = function (n) {return this.I(this.wVec()
				.m(N(n)?n:.1))}
b.steer = b.turnRot = b.turnRt = function (rt) {
	var b = this
	rt = rt || 15
	if (K.l) {b.rt(rt, '-')}
	if (K.r) {b.rt(rt, '+')}
	return b
}
b.impFly = function (u, d) {
	var b = this
	u = N(u) ? u : 20;
	d = N(d) ? d : u
	if (K.u) {
		b.fly(u)
	}
	if (K.d) {
		b.fly(d)
	}
	return b
}
b.turnFlyImp = function (rot, up, down) {
	return this.steer(rot).impFly(up, down)
}
$con.thrustGrav = function (p) {
	p.turnFlyImp(8, 20, 100)
			.impRun(5)
}
$con.thrust = function (p) {
	p.turnFlyImp(15, -.1, 100).nRt()
}
w.killTim=function(){
	this.b(function (cx) {var a = cx.a(), b = cx.b()   // if either a or b is a bullet..
		// and neither is the guy (if a bullet hits a non-guy...) 
		// destroy the bullet, and if it hit tim, destroy tim too
		if (cx.w('bul') && b2d.neither(a, b).is('guy')) {
			if (a.is('bul')) {a.setDestroy();
				b.setDestroyIf('tim')
			}
			
			else {b.setDestroy();
				a.setDestroyIf('tim')
			}
		}
	})}
w.playerVsTim = function () {

 
	this.b(function (cx) {
		
		if (cx.btwn('player', 'tim')) {cx.setDestroyIf('player')}

		if (
		
				
				cx.exIn('player', 'bul')) {

			cx.setDestroyIf('tim', 'bul')
		
		}
	})
	 
	return w
}
w.shipTri = w.yShip = function () {
	//can pass: col x,y,sc OR x,y,sc
	//this returns JUST a coloroed physics body with no actions
	var w = this, g = G(arguments), o
	o = S(g.f) ? {col: g.f, x: g.s, y: g.t, sc: g[3]} :
	{x: g.f, y: g.s, sc: g.t}
	o.col = o.col || 'y'
	var base = N(o.sc) ? o.sc * 8 : 32
	var hB = base / 2
	var y = this.D(o.x, o.y)

	y.POLY(o.col, [[-hB, hB], [0, -base * 2], [hB, hB]])
	return y.de(.5)
}
w.Y = w.y = w.ship = function () {
	var y = this.yShip.apply(this, arguments)
	y.con('thrust')
	y.shootOnSpace()
	return y
}
 

b.chug = function (n) {
	var b = this
	_.ev(.1, function () {
		b.push(n)
	})
	return b
}
b.going = function () {
	var lv = this.lV(), x = lv.x, y = lv.y, a = this.aV()
	return (M.abs(x) > 0.5) || (M.abs(y) > 0.5) || ( M.abs(a) > 0.5)
}
MINIWALLS = BIRDCAGE = THRUSTPLAYER = BCG = function () {
//gotta make guy heavier
//thrust is good with grav 10 !!!!
// , walls:b2d.miniWalls
	W({
		g: 10, W: 500, H: 400, w: function () {
			w.brick(200, 50, 300, 20) //top
			w.brick(200, 360, 300, 20) //bottom
			w.brick(60, 240, 20, 260) //left
			w.brick(340, 320, 20, 100)
		}
	})
	
	w.p(2).con('thrust')
	
	w.ball(300, 100, 12)
	g = b.bS('guy', .2).aD(.8)
	$t(function () {g.rt(0)}
	)
}
TAPSHOOT =   TAP = function () {W(0).tim(7)
		p = w.me().X(50)
		
		$.$(function (e) {   //  po= p.wP(0, -75)
			
			var bul  = p.shoot()
			
			if(M.r()*5 <1){bul.bS('sun', .2)}
			
			var dx = e.pageX - p.X()
			var dy = e.pageY - p.Y()
			//thrust ship
			p.I(dx / 20, dy / 20)
			//rotate ship
			p.rt(M.tD(M.atan(dy / dx)) + (dx > 0 ? 90 : 270))
		})
		
		w.playerVsTim()	
}
KILLTIM = PSYCHOTHRUSTER = NOCLEAR = PSY = function () {
	W({g: 0, clear: false}).db()//false is needed
	p = w.p().con('thrust').aD(10000)
	w.dude(3)
	w.killTim()
	$.kD('s', function () {
		var pt = p.wPt(0, -75)
		var b = w.ba(pt.x, pt.y, 10).bS('me', 0.1)
		var v = p.vec()
		b.I(v.x / 40, v.y / 40)
	})
	_.ev(3, function () {w.st.clear()})
}
 
THRUST = THR = function () {
	W0().tim(3).playerVsTim()
			.p('thrust').XY(300)
			.shootOnSpace().aD(10000)
}
WAR = function () {
	x = 50
	y = 50
	W0()
	y = w.yShip('b', 100, 200, 6).aD(1).lD(1).re(0).fr(1).K('guy')
			.shootOnSpace('guyBul')
			.con('thrust')
			
	_.t(10, function () {
		w.yShip(x += 30, Y += 60, 3).chug(4).K('bad').shootEv(1, 'bul').rt(45)
	})
	w.b(function (cx) {
		if (cx.w('bul', 'bad')) {cx.destroyBoth()}
		if (cx.w('badBul', 'guy')) {cx.destroyBoth()}
	})
}// cx.w(k,k) destroyBoth
YIP=SHIP = STUMBLE = STUM = function () {W({g:3});
	
	
	b = w.BOX(200, 200, 150, 150).de(1) 
	
	w.b(function (cx) {
	
		if (cx.w('bul', 'bad')) {
			cx.a().K('destroy');
			cx.b().K('destroy')
		}
		
		else if (cx.w('bul') && !cx.w('yip')){
			cx.destroyIf('bul')
		}
		
	})
	
	
	y = w.yShip('b', 100, 200, 6).con('thrust').K('yip')
	y.aD(1).lD(1).re(0).fr(1)
	y.shootEv(1)
	
	 y = w.ship().XY(500, 300).K('yip')

	_.t(5,stumble)
	function stumble(){
	
var	stum = w.yShip('r', 300, 400, 3).K('bad')
	_.ev(.05, function () {
		var v = stum.gWV(V(0, 90))
		stum.I(0, v.y / 10).rt(3, '+')
	})
	}
	
	
}
YELLOWSHIP = YEL=function () {
	W({g: 3})
	yellow()
	_.in(5, function () {
		w.C('v')
		_.ev(1, yellow)
	})
	function yellow() {
		y = w.yShip(300, 400, 3).rt(90)
		y1 = w.yShip(600, 400, 3).rt(90)
		_.in(.5, onTime)
	}
	
	function onTime() {
		y.I(0, -4);
		y1.I(4, 0)
	}
	
	function onInt() {
		y.I(0, -.7).rt(4, '+');
		y1.lV(0, -3).rt(4, '+')
	}
	
	
}
 
  