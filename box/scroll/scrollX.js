b.followX = function (x, y) {
	var b = this, w = b.W()
	$t(function () {
		w.st.X(x - b.X())
	});
	return b
}
b2d.levelScrollX = function () {
	W({W: 600, H: 300, g: 400, w: 0})
			.st.XY(300, 150).rXY(300, 150)
	p = w.playa().followX(600, 400)
}
EXPLORE = SCROLLX = GROUNDSPRITES = GSP = function () {
	b2d.levelScrollX()
	w.db()
	w.st.chalk('gravity: 1000     0r,0f   0.4r,0.4f   0.9r,1f', 'right: 0.5r,0.5f     player: 1d,23m,0.2r,0.2f')
	w.ice(30, 250, 400)
	w.grass(450, 250, 400)
	w.grass(500, 100, 4000)
	w.rubber(880, 250, 40000)
	w.rectStat(100, 270, 200, 30, 'w').re(0).fr(0) //ice
	w.rectStat(325, 270, 230, 30, 'g').re(.3).fr(.3)
	w.rectStat(550, 270, 200, 30, 'r').re(.7).fr(.3) //rubber
}
RAMPS = function () {
	b2d.levelScrollX();
	w.db()
	w.ramps()
	_.ev(3, function () {
		w.circ(50, 50, 30, 'g').re(.7).de(1)
				.fric(.5).I(200, 100)
	})
}