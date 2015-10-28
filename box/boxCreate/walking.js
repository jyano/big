b.moveRight = function () {
	var b = this
	b.direction = 'right'
	b.x += b.speed
	return b
}
b.walk = function () {
	var b = this
	$t(tick)
}
msPassed = function () {
}
function tick() {
	if (b.direction === 'right') {
		b.x += b.speed
	}
}
b.stopWalking = function () {
	var b = this
	b.direction = null
	return b
}