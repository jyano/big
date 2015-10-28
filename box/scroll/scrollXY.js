b.diff = function (x, y) {
	//alert('diff')
	var b = this
	x -= b.X()
	y -= b.Y()
	return {x: x, y: y}
}
b.cam = function (x, y) {
	//alert('cam')
	var b = this
	b.W().st.XY(b.diff(x, y))
	return b
}
b.follow = function (x, y) {
	//alert('follow')
	var b = this
	$t(function () {
		if (O(b.sprite)) {
			b.cam(x, y)
		}
	})
	return b
}
b2d.levelScroll = function () {
	//alert('levelScroll')
	b2d.level()
	w.s.XY(300, 150).rXY(300, 150)
	p.follow(600, 400)
	w.db()
}
SCROLLINGLEVEL = SLL = function () {
	b2d.levelScroll()
	p.Y(0)
	w.grass(300, 280, 500)
	w.ice(1300, 280, 1000)
	w.clouds().clouds(500, -200).clouds(1000, -200).clouds(-500, -200)
	slide = w.rect(900, 30, 1200, 40, 'blue').de(1).fr(.5).re(.5)
}