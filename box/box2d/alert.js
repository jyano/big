b.fixtData = p.fixtListUserData = p.uDF = function (userData) {
	alert('b.fixtData worldCreate.js')
	var fixtList = this.fixtureList()
	if (U(userData)) {
		return fixtList.GetUserData()
	}
	fixtList.SetUserData(userData)
	return this
}//user data first fixture?
//b.hop=function(){return this.I(0,-30)}

 
b.camX = function (x) {
	alert('camX')
	var dx = x - this.X()
	this.W().st.X(dx)
	return this
}
b2d.levelScrollY = function () {
	alert('levelScrolY')
	b2d.level()
	w.s.XY(300, 150).rXY(300, 150)
	p.followY(600, 400)
	w.db()
	right.kill()
}
 
b.mario = function () {
	alert('b.mario')
	var b = this
	b.canJump = true
	$t(function () {
		b.rt(0)
		b.onGround = true
		if (b.onGround) {// if jumping
			if (K.u) {
				if (b.canJump == true) {
					b.jumpUp()
				}
			}
			else {
				b.impRun2()
			} // if not jumping  
		}
		else {
			b.impRunAir()
		}// if in air !!!
	})
	b.W().b(function () {
		b.canJump = true;
		b.p('walk')
	})
	return b
}
b2d.ne = b2d.neither = function (b1, b2) {
	alert('logic')
	return {
		is: function (d) {
			return !b1.is(d) && !b2.is(d)
		}
	}
}
b2d.ei = b2d.either = function (b1, b2) {
	alert('logic')
	return {
		is: function (d) {
			return b1.is(d) || b2.is(d)
		}
	}
}
b2d.ei = b2d.either = function (ob1, ob2, is1, is2) {
	alert('logic')
	return (ob1.is(is1) && ob2.is(is2)) || (ob1.is(is2) && ob2.is(is1))
}//cx.eitherIs= c.eitherBodyIs = function( u){return this.a().K() == u  || this.b().K() ==u}
makeWalls2 = function () {
	alert('makeWalls2')
	bii(10, 300, 20, 460) //left
	bii(990, 300, 20, 460)//right
	bii(250, 0, 400, 20)//top
	bii(730, 0, 400, 20)//top
	bii(250, 590, 400, 20)//b
	bii(730, 590, 400, 20)//b
} //bas in the canvas size?
makeWallsTiny = function () {
	alert('makeWallsTiny')
	bii(10, 300, 20, 600) //left
	bii(990, 300, 20, 600)//right
	bii(300, 0, 1200, 20)//top
	bii(300, 590, 1200, 20)
}
makeWallsLong = function () {
	alert('makeWallsLong')
	bii(10, 300, 20, 1200) //left
	bii(1600, 300, 20, 1200)//right
	bii(300, 0, 3000, 20)//top
	bii(300, 590, 3000, 20)//bottom
}
b.conMe = b.controlMe = function (con) {
	alert('b.conMe controlMe')
	var b = this
	con = con || 'standard'
	$t(function () {
		$con[con](b)
	})
	return b
}
b.bindKeyboard = b.moveListener = function (con) {
	alert('b.bindKeybouard moveListener')
	var b = this, w = b.W()
	con = ($con[con] || $con.trickJump )
	con()
	$t(function () {
		b.rt(0)
		w.eB(function (b) {
			if (b.is('destroy')) {
				b.destroy()
			}
		})
	})
	return b
}
b.arrowMove = function () {
	alert('b.arrowMove')
	var b = this
	$.kD({
		l: function () {
			b.dir('left').move()
		},
		r: function () {
			b.dir('right').move()
		},
		u: function () {
			if (b.dir() == 'left') {
				b.I(5, -12)
			}
			else if (b.dir() == 'right') {
				b.I(-5, -12)
			}
		}
	})
	return b
}
fd.verts = function () {
	alert('fd.verts')
	var h = this.shape
	var verts = h.m_vertices
	var vs = [
		verts[0].m(),
		verts[1].m(),
		verts[2].m(),
		verts[3].m()]
	return $l(vs)
}
makeWalls = function () {
	alert('makeWalls')
	w.bii(10, 300, 40, 600).uD('leftWall')
	w.bii(990, 300, 40, 600).uD('rightWall')
	w.bii(300, 0, 2400, 40).uD('ceiling')
	w.bii(300, 590, 2400, 40).uD('floor')
}
makeWallsFull = function () {
	alert('makeWallsFul')
	bii(10, 300, 20, 1200) //left
	bii(990, 300, 20, 1200)//right
	bii(300, 0, 3000, 20)//top
	bii(300, 590, 3000, 20)
}
b2d.fullWorld = function () {
	alert('b2d.fullWorld')
	z()
	canvas = $.canvas('z', 1200, 600).A().id('canvas')[0]
	context = canvas.getContext("2d")
	stage = new createjs.Stage(canvas)
	// stage.autoClear = false
	world = World(bV(0, 40))
	debugDraw = DebugDraw()
	debugDraw.SetSprite(context)
	debugDraw.dS(30)
	debugDraw.SetFillAlpha(.6)
	debugDraw.SetFlags(shB || jB)
	world.dD(debugDraw)
	setInterval(function () {
		world.ClearForces()
		world.Step(1 / 60, 10, 10)
		//this must clear the screen?
		//that's why i don't need the stage to autoclear
		world.DrawDebugData()
		stage.update()
		stage.HUD.update()
	}, 1000 / 60)
	world.bii(400, 400, 600, 40)
	b = world.ba()
	stage.bm('me', function (bitmap) {
		bm = bitmap.rCenter()
		createjs.Ticker.on('tick', function () {
			bm.XY(b.x(), b.y())
		})
	})
	return world
}
$.fn.getPosition = $.fn.getTotalOffset = function () {
	alert('fn.getPosition getTotalOffset')
	$l('getPos')
	var e = this, x = 0, y = 0
	while (E(e) && e.tagName) {
		y += e.offsetTop
		x += e.offsetLeft
		if (isBodyElement(e)) {
			e = 0
		}
		e = e.offsetParent || e
	}
	return {x: x, y: y}
}
//just gets the TOTAL offset of ANY element
//why not s.autoClear(0)?
_getPosition = gEP = function (e) {
	alert('_getPosition gEP')
	return $(e)._getPosition()
}
isBodyElement = function (e) {
	alert('isBodyElement')
	e = $(e)[0]
	return O(e) && uC(e.tagName) == 'BODY'
}
b2d.setupDebugDraw = function () {
	alert('b2d.setDebugDraw spaz/boxDebug.js')
	var dD = $dD(w.ctx, 30)
	dD.SetFillAlpha(.6)
	//debugDraw.SetLineThickness( 3000 )
	dD.SetFlags(shB || jB)
	w.dD(dD)
}
b2d.fl = b2d.filter = b2d.f = function () {//used?
	alert('b2d.filter fl')
	var f = new b2d.b2ContactFilter
	f.rC = f.RayCollide
	f.sC = f.ShouldCollide
	return f
}
b2d.flD = b2d.flDa = b2d.filterData = b2d.fD = function (d) {//used?
	alert('b2d.flD')
	var d = new b2d.b2FilterData
	d.gI = function (a) {
		if (U(a)) {
			return d.groupIndex
		}
		d.groupIndex = a;
		return d
	}
	d.category = d.cB = function (a) {
		if (U(a)) {
			return d.categoryBits
		}
		d.categoryBits = a;
		return d
	}
	d.mask = d.mB = function (a) {
		if (U(a)) {
			return d.maskBits
		}
		d.maskBits = a;
		return d
	}
	return d
}
b2d.levelWarp = function () {
	alert('copy b2d.levelWarp() from COIN')
}
b2d.mf = b2d.manifold = function () {
	alert('b2d.mf')
	return new b2d.Collision.b2WorldManifold()
}
//depr
warp = function (p) {
	alert('warp coinWarp.js')
	$t(function () {
		if (p.Y() < 0) {
			p.Y(300)
		}
		if (p.Y() > 300) {
			p.Y(0)
		}
		if (p.X() < 0) {
			p.X(600)
		}
		if (p.X() > 600) {
			p.X(0)
		}
	})
	return p
}
b.warpX = function (max) {
	alert('warpX')
	var b = this;
	max = max || 600
	var curX = b.X()
	var newX = curX < 0 ? max : curX > max ? 0 : curX
	if (newX !== curX) {
		b.X(newX)
	}
	return b
}
b.warpY = function (max) {
	alert('warpY')
	var b = this;
	max = max || 300
	var curY = b.Y()
	var newY = curY < 0 ? max : curY > max ? 0 : curY
	if (newY !== curY) {
		b.Y(newY)
	}
	return b
}
b.RECT2 = function (wd, ht, x, y) {
	alert('b.RECT2')
	var b = this
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var f = b.f($rF(wd, ht, x, y)) //f.de(1)
	var r = $r2G(wd, ht, x, y).XY(b.X(), b.Y())
	w.st.A(r)
	$t(function () {
		r.rt(b.rt()).XY(b.X(), b.Y())
	})
	return f
}//b.R = b.rect =b.R = b.rect =
