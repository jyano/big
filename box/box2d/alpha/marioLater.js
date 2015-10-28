function otherMeParts() {
	var rightSide = $pF(sc * 8, sc * 2, sc * 8, 0)//.K('rightSide').mS()
	var leftSide = $pF(sc * 8, sc * 2, -sc * 8, 0)//.K('leftSide').mS()
	var hat = $pF(sc * 2, sc * 6, 0, -sc * 12)//.K('hat').mS()
}
function warpzone() {
	TRAMPOLINE = WARPZONE = PLAYER3 = PL3 = function () {
		W()
		var p = w.player('jumper').aD(10000)
		//   $t(function(){  if(STATE.warping){p.XY(200,100); STATE.warping=false}})
		w.begin(function (c) {
			var a = c.A(), b = c.B()
			//  if(c.touching('feet','trampoline') ){p.I(0,-150)}
			if (c.touching('feet', 'warp')) {
				
				//  p.XY(200,100)
				//    STATE.warping=true
			}
		})
		bii(500, 600, 30, 200)
		bii(600, 600, 30, 200)
		w.A($sB(550, 580), $pF(100, 20).uD('warp'))
		w.A($dB(650, 580), $pF(100, 20).uD('trampoline'))
	}
	WARPER = WRP = function () {
		W({})
		p = w.player('jumper')//.aD(10000)
		p.warp = function () {
			this.XY(200, 100)
		}
		$t(function () {
			if (w.flagged('warping')) {
				p.warp()
			}
			p.rot(0)
		})
		w.begin(function (cx) {//bodies and fixtures both have data!!!  // $l('contact: ' +a.uD() + ' with ' + b.uD() )
			var a = cx.A().gB(), b = cx.B().gB()
			if (cx.A().uD() == 'feet') {
				if (cx.b().uD() == 'trampoline') {
					p.I(0, -150)
				}
			}
			if (cx.B().uD() == 'feet') {
				if (cx.a().uD() == 'trampoline') {
					p.I(0, -150)
				}
			}
			if (cx.A().uD() == 'feet') {
				if (cx.b().uD() == 'warp') {
					w.flag('warping')
				}
			}
			if (cx.B().uD() == 'feet') {
				if (cx.a().uD() == 'warp') {
					w.flag('warping')
				}
			}
		})
		w.brick(500, 600, 30, 200)
		w.brick(600, 600, 30, 200)
		w.brick(550, 580, 100, 20).K('warp')
		w.box(650, 580, 100, 20).K('trampoline')
		makeCar()
	}
}
function sucky() {
	TIMPLATS = OLDTIMWALLS = TIM = function () {
		W()
		bii(800, 300, 100)
		bii(260, 240, 40)
		bii(550, 250, 100)
		bii(1350, 550, 100)
		bii(300, 200, 100).bS('guy', [.4, 1.2])
		bii(300, 500, 60, 30).bS('guy', [.4, 1.2])
		bii(150, 400, 60, 30).bS('guy')
		player = p = w.player('standard').aD(10000)
		//s.sx(2).sy(2)
		// s.t(function(){  // s.x( 450-p.x()  )  //  if(s.x() > 0){s.x(0) }  // s.y( -50-p.y()  ) })
	}
}
function alpha() {
	w.nice = w.niceStart = function () {
		var w = this
		w.C('z');
		_.in(2, function () {
			w.C('u');
			w.db()
		})
		return w
	}
}
info = function () {
//people dont like to use linear impulse because
//  it is a momentary jolt.. doesnt care where it is or where its going..
// problem is u can jump while in the air
// linearVelocity is like a jetpack
//can use timer, can take off gravity
//can change it to kinetic, not affected by grvity, and move it manually
// affected by density and size of objects and friction of things its touching
}
old = function () {
	data = function (str) {
		if (U(str)) {
			str = 'data'
		}
		d.E($.h4(str))
	}
	dataDiv = function () {
		d = $.div('yellow', 500, 40).A().pad(2)
		d.data = function (str) {
			if (U(str)) {
				str = 'data'
			}
			this.E($.h4(str))
		}
	}
	eh = function () {
		v = poly.verts()
		wd = v[1].x - v[0].x
		ht = v[2].y - v[0].y
		//sq.XY(300, 100)
		cy = b.Y() + v[0].y + (ht / 2)
		cx = b.X() + v[0].x + (wd / 2)
		w.s.dot('white', cx, cy)
		//bubble = w.rectSensor(200, 200, len,len, 'green')
		//middle = w.circStat(200, 200, 8, 'orange')
		func = function () {
			bubble.kill()
			len += 2
			bubble = w.rectSensor(200, 200, len, len, 'green')
			middle.kill()
			middle = w.circStat(200, 200, 8, 'orange')
		}
	}
}
SLIDEY = JUMPER = JPR = function () {
	W()
	//side ways??
	w.platform(800, 300, 100)
	w.platform(260, 240, 40)
	w.platform(550, 250, 100)
	w.platform(1350, 550, 100)
	w.platform(300, 200, 100).bS('guy', [.4, 1.2])
	w.platform(300, 500, 60, 30).bS('guy', [.4, 1.2])
	w.platform(150, 400, 60, 30).bS('guy')
	p = w.p('slidey').aD(10000)
	w.st.bm('sun', function (sun) {
		$t(function () {
			sun.X(450 - p.X())
		})
	})
}