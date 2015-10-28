w.car = function () {
	var car = w.rect(150, 150, 90, 30, 'black')
	j1 = w.Rev(
			w.circ(200, 150, 30, 'red').fric(0).den(1),
			car
	)
	j1.speed(120)
	j1.EnableMotor(true)
	j1.SetMaxMotorTorque(1000000)
	j2 = w.Rev(w.circ(100, 150, 30, 'blue').fric(0).den(1), car)//.speed(-500).torque(40).motor(true)
	j2.speed(150)
	//j2.EnableMotor(true)
	j2.SetMaxMotorTorque(1000000)
	return car
}
w.roller = function () {
	var car = w.rect(250, 150, 90, 30, 'black')
	j1 = w.Rev(
			w.circ(300, 150, 30, 'red'),
			car
	)
	j1.speed(6)
	j1.EnableMotor(true)
	j1.SetMaxMotorTorque(1000000)
	j2 = w.Rev(w.circ(200, 150, 30, 'red'), car).speed(-500).torque(40).motor(true)
	return car
}
PLCAR = function () {
	W()
	player = p = w.player('standard').aD(10000)
	$t(function () {
		if (STATE.warping) {
			p.warpToTopLeft();
			STATE.warping = false
		}
	})
	w.begin(function (contact) {
		var a = contact.A(), b = contact.B()
		if (contact.pair('feet', 'tramp')) {
			p.impulse(0, -150)
		}
		if (contact.pair('feet', 'warp')) {
			STATE.warping = true
		}
	})
	makeCar()
}
ROLLERS = function () {
	b2d.levelScrollX()
	// _.times(3, function(){w.roller()})
	setInterval(function () {
		w.roller()
	}, 1000)
	p.X(1750)
}
RACE = function () {
	b2d.levelScrollX()
	car = w.car()
	w.dist(p, car).len(0)
	floor.fric(.1)
}