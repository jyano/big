FLOCKING = FLK = function () {
	
	//these just thrust and dont
	//otherwise apply forces to neighbors.  but what if
	//they 'SUCKED' instead of 'thrusted' ?
	//is that the same as having a gravitational inwards force?
	var w = b2d.W({g: 0})
	//  y = $ys(300, 200, 3).angDamp(0).linDamp(1)
	var n = 0
	_.times(40, function () {
		window['y' + n++] = w.yShip().chug()
	})
	y = w.yShip('o').thrustControl()
	_.times(40, function () {
		window['y' + n++] = w.yShip().chug()
	})
	I(function () {
		if (y.going()) {
			w.s.c.C('p')
		} else {
			w.s.c.C('z')
		}
	}, 100)
	w.debug()
}
TRAB = function () {
	w = b2d.W({g: 0}).debug();
	co = w.tensor();
	//  _.times(100, function(){co.body(w.circ(400,300, 15, 'w').lV(10,20).linDamp(0))})
	y = w.ship()
	rot = 45
	bg = w.yShip('blue', 500, 300).stat()
	bg.rotToVec = function (vec) {
		var wVec = bg.worldVec(vec),
				rot = vec.x / vec.y
		rot = 360 - (Math.abs(rot) * 10)
		$l(rot)
		this.rot(rot)
		return this
	}
	bg.rotTowardsShip = function () {
		var yX = y.X(), yY = y.Y(),
				bgX = bg.X(), bgY = bg.Y(),
				dX = bgX - yX,
				dY = bgY = yY,
				vec = V(dX, dY)
		this.rotToVec(vec)
	}
	cjs.tick(function () {
		bg.rotTowardsShip()
	})
}
GRAVITYRANGE = GRR = function () {
	w = b2d.W({g: 10})
	w.ball(100, 100, 50)
	w.ball(100, 200, 40)
	w.ball(100, 100, 50)
	w.ball(100, 200, 40)
	w.ball(100, 100, 50)
	w.ball(100, 200, 40)
	w.ball(100, 100, 50)
	w.ball(100, 200, 40)
	w.ball(100, 100, 50)
	w.ball(100, 200, 40)
	range = w.prism(
			w.brick(600, 300, 220, 20),
			w.box(600, 300, 20, 250).linDamp(10)
	).lm(-100, 100)
	w.show(function () {
		return 'Welcome to Gravity Range: Current gravity is ' + range.val()
	})
	y = w.yShip().thrustControl().angDamp(1).shootOnSpace()
	cjs.tick(function () {
		w.grav(range.val())
		y.linDamp(10)
	})
}
STABTRAP = function () {
	w = b2d.W({g: 0}).debug();
	co = w.tensor();
	//  _.times(100, function(){co.body(w.circ(400,300, 15, 'w').lV(10,20).linDamp(0))})
	y = w.ship()
	rot = 45
	bg = w.yShip('blue', 500, 300).stat().shootOnInt(200)
	bg.rotTowardsShip = function () {
		var yX = y.X(), yY = y.Y(),
				bgX = bg.X(), bgY = bg.Y(),
				dX = yX - bgX, dY = yY - bgY,
				ang = -Math.toDegrees(Math.atan(dX / dY))
		if (y.Y() > this.Y()) {
			ang += 180
		}
		this.rot(ang)
	}
	cjs.tick(function () {
		bg.rotTowardsShip()
	})
}