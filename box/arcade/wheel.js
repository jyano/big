BILLIARDS = BILL = function () {W()
	
	w.bii(10, 300, 40, 920) //left
	w.bii(1100, 280, 40, 400)//right
	w.bii(250, 0, 800, 40)//top
	w.bii(730, 0, 800, 40)//top
	w.bii(250, 590, 800, 40)//b
	w.bii(730, 590, 800, 40)//b
	w.me()
	w.tim(15)
}


CUPS = function () {
	cup = function (x, y) {
		x = N(x) ? x : 100;
		y = N(y) ? y : x
		return w.A($dB(x, y), [
			$pF(10, 10).d(5),
			$pF(50, 20, 0, 40, 0),
			$pF(100, 20, -80, -40, 260),
			$pF(100, 20, 80, -40, -80)])
	}
	cup2 = function (x, y) {
		x = N(x) ? x : 100//300
		y = N(y) ? y : x//800
		return w.A(
				$dB(x, y), [
					$pF(10, 10).d(5),
					$pF(50, 20, 0, 40, 0),
					$pF(100, 20, -80, -40, 260),
					$pF(100, 20, 80, -40, -80),
					$pF(100)
				])
	}
	cup3 = function (x, y) {
		x = N(x) ? x : 100;
		y = N(y) ? y : x
		return w.A($dB(x, y),
				[$pF(10, 10).d(5),
					$pF(50, 20, 0, 40, 0),
					$pF(100, 20, -80, -40, 260),
					$pF(100, 20, 80, -40, -80),
					$cF(34, -80, -130),
					$cF(34, 80, -130)])
	}
	W(100)
	cup(280, 150)
	cup2(400, 150)
	cup3(700, 150)
	b2d.fluffy()
	w.ba()
	w.ba()
	w.ba()
	w.bii(150, 220, 50)
}
 
TALK  = function () {
	
	score = 0;
	shots = 0
	W({
		g: 0,
		w: 0,
		debug: false
	})
	w.addCirc = function (x, y, rad, col) {
		var w = this
		//specific to talkjs
		x = N(x) ? x : _.pI(M.r() * 2200 - 1000)
		y = N(y) ? y : _.pI(M.r() * 1600 - 1000)
		rad = N(rad) ? rad : _.ran(54) + 8
		col = oO('c', col || $r())
		w.ba(x, y, rad)
				.bS2($cGx(rad, col).XY(x, y))
				.lD(2)
	}
	p = w.me().K('player').stat().XY(500, 300)
	_.t(50, function () {
		w.addCirc()
	})
	
	$.space(function () {//can double on on shots!!!
	_.ev(.2,function () {
			p.shoot();
			shots++
		})
	})  //setTimeout(function(){$.pop(score).click(function(){window.location=window.location})}, 10000)
	w.b(function (cx) {
		if (cx.w('ball', 'bullet')) {
			score++;
			cx.destroy()
		}
	})
$t(function () {
		p.XY(500, 300)
		if (K.l) {p.rt(p.rt() - 8)}
		if (K.r) {p.rt(p.rt() + 8)}
		if (K.u) {
			w.eB(function (b) {
			if (!b.of('bul')
			
						//b.ex('bullet', 'player')
			
			) {
					
					b.I(p.vec(0, -100).d(-50))
					
				}
			})
		}
	})
	 
}
 