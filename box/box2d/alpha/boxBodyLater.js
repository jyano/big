function dud() {
	FORCES = function () {
		w = b2d.mW({
			grav: 0
		})
		b = w.box(400, 400, 200, 200).bindSprite('me')
		f = function () {
			b.I(0, -400, b.GetWorldPoint(b2d.V(100 / 30, -100 / 30)))
		}
		f2 = function () {
			cjs.tick(f)
		}
		w.player('thrust')
	}
	LINVEL3 = function () {
		w = b2d.mW({
			//grav:0
		})
		b = w.box(400, 400, 200, 200).bindSprite('me')
		f = function () {
			b.SetLinearVelocity(b2d.V(-1, -1))
		}
		f2 = function () {
			cjs.tick(f)
		}
		//  w.player('thrust')
	}
	TESTBODY = function () {
		b2.mW()
		m = w.ba()
	}
}
function err() {
	LINVEL = function () {
		w = b2d.mW({
			g: 0
		})
		_.times(10, function () {
			w.ball()
		})
		f = function () {
			w.each(function (body) {
				body.SetLinearVelocity(b2d.V(0, 20))
			})
		}
		setInterval(f, 1000)
		//cjs.tick(function(){})
	}
}