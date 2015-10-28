$PT()


_flag= flag = function (p) {
	_.e(FLAGS, function (v, k) {
		if (v === true) {
			flagHandlers[k](p)
			FLAGS.warp = false
			FLAGS[k] = false
		}
	})
}

$flag = function (ob) {
	alert('$flag flag.js')
	flagHandlers = ob

	$t(function () {
		_flag(p)
	})
}
f.setKill = function () {
	$l('setKill boxFixt.js')
	var that = this
	var flagNum = Math.random()
	this.B().W().flag(flagNum)
	$t(function () {
		if (w.flagged(flagNum)) {
			that.kill()
		}
	})
}
w.clXXX = function (k1, k2, flag) {
	var w = this
	var k = k1 + k2
	if (F(k2)) {
		return w.clAny(k1, k2)
	}
	w.b(function (cx) {
		if (cx.w(k1, k2)) {
			w.flag(k, cx)
		}
	})
	$t(function () {
		var cx = w.flagged(k)
		if (cx) {
			flag(cx)
		}
	})
}
w.clA = w.clAny = function (k, flag) {//can combine this with above
	var that = this
	var w = this
	w.b(function (cx) {
		if (cx.w(k)) {
			w.flag(k, cx)
		}
	})
	$t(function () {
		var cx = w.flagged(k);
		if (cx) {
			flag(cx)
		}
	})
}
b.trig = b.trg = function (k, fn) {
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
			})
	if (F(fn)) {
		$t(function () {
			if (b.trig[k]) {
				_.b(fn, b)(b.trig[k])
			}
		})
	}
	return b
}
b.my = function (k, k2, fn) {
	var b = this
	w.begEnd(
			function (cx) {
				if (cx.w(k, k2)) {
					b.trig[k + k2] = true
				}
			},
			function (cx) {
				if (cx.w(k, k2)) {
					b.trig[k + k2] = false
				}
			}
	)
	if (F(fn)) {
		$t(function () {
			if (b.trig[k + k2]) {
				_.b(fn, b)(b.trig[k + k2])
			}
		})
	}
	return b
}
w.wl1 = w.while1 = function (k, fn) {
	var w = this,
			push = false
	w.b(function (cx) {
		if (cx.w(k)) {
			push = true
		}
	})
	w.end(function (cx) {
		if (cx.w(k)) {
			push = false
		}
	})
	$t(function () {
		if (push) {
			fn()
		}
	})
	return w
}//= w.whileSensor
w.wl = w.while = function (k, k2, fn) {
	var w = this,
			push = false
	if (F(k2)) {
		return w.while1(k, k2)
	}
	w.b(function (cx) {
		if (cx.w(k, k2)) {
			push = true
		}
	})
	w.end(function (cx) {
		if (cx.w(k, k2)) {
			push = false
		}
	})
	$t(function () {
		if (push) {
			fn()
		}
	})
	return w
}//= w.while2
w.wn1 = w.when1 = function (k1, bFn, eFn) {
	var w = this
	w.begEnd(function (cx) {
				if (cx.w(k1)) {
					bFn()
				}
			},
			function (cx) {
				if (cx.w(k1)) {
					eFn()
				}
			})
	return w
}
w.wn = w.when = function (k1, k2, bFn, eFn) {
	var w = this
	if (F(k2)) {
		return w.when1(k1, bFn, eFn)
	}
	w.begEnd(function (cx) {
				if (cx.w(k1, k2)) {
					bFn()
				}
			},
			function (cx) {
				if (F(eFn)) {
					if (cx.w(k1, k2)) {
						eFn()
					}
				}
			})
	return w
}
 
w.foot = w.footListener = function () {
	b2d.onGround = false
	numLaps = 0
	delay = 0
	w.b(function (cx) {
		if (cx.w('foot')) {
			b2d.onGround = true
			numLaps++
		}
		//$l(numLaps)
	})
	$t(function () {
		delay--
	})
	w.end(function (cx) {
		if (cx.w('foot')) {
			b2d.onGround = false
			numLaps--
		}
		//$l(numLaps)
	})
	return this
}//this works but only for one mario!!!
w.startKilling = function () {
	var w = this
	$t(function () {
		w.eB(function (b) {
			if (b.is('destroy')) {
				b.K('destroyed');
				b.kill()
			}
		})
	})
	return w
}
w.flag = function (fl, v) {
	var w = this
	w.flags = w.flags || {}
	if (U(v)) {
		v = true
	}
	w.flags[fl] = v
	return w
}
w.flagged = function (fl) {
	var w = this
	w.flags = w.flags || {}
	var wasFlagged = w.flags[fl]
	if (wasFlagged) {
		w.flags[fl] = false
	}
	return wasFlagged
}
w.on = function (onWhat, fn) {
	var w = this
	//this lets you specify a function to be run,
//immediately whenever a specific flag is set
//(and it is passed the value)
	//interesting default !!!!!!!
	//func=func||function(val){val()}
	$t(function () {
		var v = w.flagged(onWhat)
		if (v) {
			fn(v)
		}
	})
	return w
}

BEGIN = BEG = function () {
	W().ba()
	w.ship()
	w.roof.kill()
	w.on('new', function () {
		w.ba(300, 100, 2)
	})
	w.b(function () {
		w.flag('new')
	})
}
FLAGTHROTTLE = THO = function () {
	W().ball(300, 300, 100)
	brick = w.brick(300, 500)
	w.st.squareDot(400, 100)
	$t(function () {
		if (w.flagged('moveBrick')) {
			brick.X(brick.X() + 20)
		}
	})
	time = 0
	lastTime = 0
	_.ev(1, function () {
		time++
	})
	w.b(function (cx) {
		if (cx.w('brick')) {
			if (lastTime != time) {
				lastTime = time;
				w.flag('moveBrick')
			}
		}
	})
}
AUTOFLAGCHECKER = AFC = FLAG = FLG = function () {
	W()
	p = w.p('hoppy')
	$flag({
		warp: function (p) {
			p.XY(200, 100)
		},
		log: function () {
			$l('haha')
		}
	})
}
VORTEX = VOX = function () {
	$l('game: get rid of balls.  u can leave nest, but must return to claim victory')
	b2d.levelJet()
	w.rectStat(200, 250, 200, 20)
	floor.kill()
	_.t(20, function () {
		w.ba(100, 100, 10).K('ball')
	})
	vort = w.stat(600, 200, $cF(200).mS()).K('vortex')
	w.while('vortex', 'player', function () {
		w.eB('ball', function (b) {
			b.tow(600, 200)
		})
	})
}
VORTEXOK = VOK = function () {
	W({W: 600, H: 300, g: 10})
	p = w.p(2.5).con('thrust')
	moveB = function () {
		b.lV(0, -5)
	}
	moveX = function () {
		bx.lV(0, -5)
	}
	b = w.ball(100, 100, 10).K('ball')
	bx = w.box(50, 100, 14)
	w.stat(600, 200, $cF(200).mS()).K('vortex')
	//this happens every RE-ENTRY into sensor (when)
	w.when('vortex', 'player', moveX)
	//this happens repeadly until sensor exited
	w.while('vortex', moveB)
	$l('right now ball goes up on coll with vortex.  but what about continued pressure?',
			'something with trig?', 'fixed.. (see code)')
}
KINGOFMES = MES = function () {
	
	//all jumping together???!
	//w= b2d.mW()
	$levelWalls()
	_.t(5, function () {
		w.me(2.5).X(400)
				.trig('foot', function () {
					this.I(20, -40)
				}).re(1)
		w.me(2.5).X(100)
				.trig('foot', function () {
					this.I(-20, -40)
				})
	})
}
HAT = function () {
	// could i automatically have body listen to their sensors?
	$levelWalls()
	w.ball().re(.3)
	p.XY(400, 150).trig('right').trig('left')
			.trig('head', function () {
				this.bS('guy')
			})
	$.space(function () {
		if (p.trig.right) {
			p.I(100, -400)
		}
		if (p.trig.left) {
			p.I(-100, -400)
		}
	})
}
// Sometimes game logic needs to know when two fixtures overlap
// yet there should be no collision response.
// This is done by using sensors.
// A sensor is a fixture that detects collision
// but does not produce a response.
// You can flag any fixture as being a sensor.
// Sensors may be static or dynamic.
// Remember that you may have multiple fixtures per body
// and you can have any mix of sensors and solid fixtures.
// Sensors do not generate contact points. 
// 2ways to get the state of a sensor:
//  b2Contact.IsTouching,    b2ContactListener.BeginContact/EndContact
