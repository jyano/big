$stWa = cjs.stopWatch = function () {
	var watch = function watch() {
		var g = G(arguments)
		var time = _time() - watch.time
		if (g.d) {
			watch.reset()
		}
		return time
	}
	watch.reset = function () {
		this.time = new Date().getTime()
		return this
	}
	return watch.reset()
}
later = function () {
	b.vX = function () {
		return this.lV().x
	}
	b.aVX = function () {
		return M.abs(this.vX())
	}
}
//when a web is created it gets web.connnected=false
//when it hits certain things and forms a joint, then connnected->true
//then it just dies
//pressing DOWN should release the most recent of the connnectedWebs
//non connnected Webs can be shot off!
_time = function () {
	return new Date().getTime()
}
w.goal = function (x, y) {
	w.BOX(x - 20, y - 15, 10, 40, 'y').stat()
	w.BOX(x, y, 40, 10, 'y').stat()
	w.BOX(x + 20, y - 15, 10, 40, 'y').stat()
}
b.bulRight = function (x, y) {
	var b = this, w = b.W()
	var bul = w.BALL(b.X() + 80, b.Y() - 20, 6, 'w')
	if (N(y)) {
		bul.I(x, y)
	}
	return b
}
b.bulLeft = function (x, y) {
	var b = this, w = b.W()
	var bul = w.BaLL(b.X() - 80, b.Y() - 20, 6, 'w')
	if (N(y)) {
		bul.I(x, y)
	}
	return b
}
b.getTime = function () {
	var b = this
	var time = b.shotClock()
	b.shotClock.reset()
	return time
}
b.getForce = function () {
	var b = this
	var time = b.getTime()
	var force = (time > 2500) ? 2000 : (time > 500) ? time - 500 : 0
	force = force / 30
	return force > 66 ? 66 : force
}
b.shootRight = function () {
	var force = this.getForce(),
			iX = 100 - (force * 1.5),
			iY = -force
	//$l('time: ' + time + ' - force: ' + force.toFixed(2) + '- iX: ' + iX.toFixed(2) + ', iY: '+ iY.toFixed(2))
	this.bulRight(iX, iY)
}
b.shootLeft = function () {
	var b = this
	var force = this.getForce(),
			iX = -100 + (force * 1.5),
			iY = -force
	//$l('time: ' + time + ' - force: ' + force.toFixed(2) + '- iX: ' + iX.toFixed(2) + ', iY: '+ iY.toFixed(2))
	b.bulLeft(iX, iY)
	return b
}