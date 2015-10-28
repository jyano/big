function notWorking() {
	RODS = function () {
		
		
		// here i bind bodies with fixtures that are alredy out of line
		b2d.level()
		b2d.rod(
				w.ball(300, 100, 20),
				w.dyn(300, 150, b2d.poly(20, 20, 15, 15, 45)),
				1)
		b2d.rod(
				w.ball(350, 100, 20),
				w.dyn(350, 150, b2d.poly(20, 20, -15, -15, 300)),
				1)
		b2d.rod(
				w.ball(380, 100, 20),
				w.dyn(380, 150,
						b2d.poly(20, 20, -15, -15, 225)),
				1)
		b2d.rod(
				w.ball(400, 100, 20),
				w.dyn(400, 150, b2d.poly(20, 20, 15, 15, 225)),
				1)
		b2d.rod(
				w.ball(100, 100, 20),
				w.box(110, 120, 20, 20), 30
		)
		b2d.rod(w.bump(200, 200, 20),
				w.box(200, 200, 20, 20), 2
		)
	}
	SPRINGS = function () {
		b2d.levelScrollX()
		right.kill()
		//freq is SPEED of oscillation
		//damp is STRENGTH of oscillation
		// so bodies cant rotate if they dont have density???
		j = w.spring(
				w.circStat(200, 100, 10).sens(),
				w.rect(200, 250, 250, 10).K('rect')
		)
				.freq(3).damp(.1)
		w.spring(w.circStat(500, 100, 10).sens(),
				w.rect(500, 250, 250, 10).K('rect'))
				.freq(3).damp(1)
		w.spring(w.circStat(800, 50, 10).sens(), w.rect(800, 200, 250, 10).K('rect'))
				.freq(2).damp(50)
		w.spring(w.circStat(1200, 125, 10).sens(), w.rect(1200, 275, 250, 10).K('rect'))
				.freq(10).damp(.5)
		w.begin(function (cx) {
			f = cx.with('rect')
			if (f) {
				b = f.body()
				j = b.joint()
				w.s.pen($l('freq: ' + j.freq() + ', dampening: ' + j.damp()))
			}
		})
	}
}
function dud() {
	SPRINGINSPACE = function () {
		b2d.mW({grav: 0})
		var spring = function (bx, by) {
			var x, b, j
			bx = N(bx) ? bx : 480
			by = N(by) ? by : 300
			j = w.dist(
					x = w.brick(500, 300, 40, 200),
					b = w.bump(bx, by))
			w.s.dot(500, 300)
			w.s.dot(bx, by)
			w.s.dot('red',
					500 - ((500 - bx) / 2),
					300 - ((300 - by) / 2))
			$.dblclick(function () {
				b.dyn()
			})
			return j
		}
		//try with and without grav
		ball = w.ball(200, 200, 50) // notice it bounces off wall, but NOT off x (neither have rest by default)
		rect = w.brick(200, 250, 250, 10)
		j = spring(480, 300)
		j.freq(2).damp(1)//.len(20)
		// ok so freq is how much strngth u need to pull it??
		// as freq gets low.. u can pull it farther away
		// its the strength of the spring
	}
	BOUNCESPRING = function () {
		b2d.levelScrollX()
//default freq is 0.  but thats like freq 10000000
//freq is tightness.  the default (0) is all the way tight.
//if u want to start to loosen it.  change from 0 to a very high number!
//try 50.. then u will see that it budges just a little.
		//ok.. now keep going down..
		// eventually it is too loose to fight against gravity
		// hahaha then its just flat and usesless
		// ok all this assumed a default damp of 0.
		// now set the freq to a good oscillation (3 or 4)
		// then play with the damp
		// damp is like a tightner on your looseness
		// it makes you less stretchy?
		// just leave damp at 0 for now, and play with freq
		w.tramp(200, 0, 6)// not bouncy
		w.tramp(500, 1.2, 6)// too bouncy
		w.tramp(800, .75, 6)// mid bouncy, mid freq
		w.tramp(1100, .75, 2)//low freq
		w.tramp(1400, .75, 12)//high freq
		p.XY(285, 0)
		setInterval(function () {
			p.I(0, -150)
		}, 1000)//game:: he autojumps.  u jump to give him a double jump!
		setTimeout(function () {
			w.s.flash();
			w.addHundBalls()
		}, 30000)
	}
}
function err() {
	JOINTPROTO = JPT = function () {
		b2d.mW()
		jd = new b2d.Joints.b2DistanceJointDef()
		b = w.brick(180, 150)
		a = w.ball(150, 150)
		j = w.J(jd.AB(a, b).len(200))
	}
	SPRINGS2 = function () {
		z()
		b2d.mW()
		j1 = w.J(
				jd = b2d.distDef().init(
						w.circ(30, 200, 20, 'red'), w.box()
				).len(200).freq(5).damp(.1)
		)
		cjs.tick(function () {
			if (j1.len() > 1) {
				j1.len(j1.len() - 1)
			}
		})
		j2 = w.J(
				b2d.spring(
						w.circ(100, 300, 30, 'white'), w.box()
				).len(20).freq(5).damp(.1).coll(false)
		)
		j3 = w.J(
				b2d.spring(
						w.circ(130, 250, 30, 'blue'),
						w.brick()
				).len(120).freq(5).damp(0).coll(true)
		)
	}
	BRIDGE = function () {
		b2d.levelScrollX();
		p.XY(-100, 0)
		w.bridge(100, 10)
		setTimeout(function () {
			w.s.flash();
			p.XY(500, 0)
		}, 10000)
	}
}