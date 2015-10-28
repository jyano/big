$sclLev = function (fn) {
	 
	$levelWalls()
 
	p = w.playa()
	
	w.right.kill();
	w.left.kill()
	w.st.XY(300, 150).rXY(300, 150)
	w.clouds(500, -200).clouds(1000, -200).clouds(-500, -200)
	w.ice(800, 280, 10000);
	w.rubber(50, 100, 300);
	w.rubber(-400, 100, 300)
	w.rect(1200, 30, 600, 4).stat();
	if (fn) {$t(fn)}
	st = w.st
}



getScale = function (y) {
	return 1 - ((y - 300) / 300) * .1
}
b.dif = function () {
	var b = this
	return {x: 600 - b.X(), y: 400 - b.Y()}
}
b.getScrollXScale = function () {
	return getScale(this.X())
	
}
SCROLLSCALE = WAY1 = function () {
	$sclLev(function () {
		if (!O(p.sprite)) {
			return
		}
		st.sXY(p.getScrollXScale())
		var sc = st.scaleX
		var x = 600 - p.X()
		x = sc > 1 ? x / (sc * .9) : sc < 1 ? x * sc : x
		var y = 400 - p.Y()
		y = sc > 1 ? y / (sc * 1.1) : sc < 1 ? y * sc : y
		st.XY(x, y)
	})
	function scNum(sc, num, ratio) {
		sc > 1 ? num / (sc * ratio) : sc < 1 ? num * sc : num
	}
	w.db()
}

SCROLLSCALECENTER = WAY2 = function () {
	W({W: 600, H: 300, g: 400}).G(400)
	p = w.playa().nRt()
	w.right.kill();
	w.left.kill()
	w.st.XY(300, 150).rXY(300, 150)
	w.clouds(500, -200).clouds(1000, -200).clouds(-500, -200)
	w.ice(800, 280, 10000);
	w.rubber(50, 100, 300);
	w.rubber(-400, 100, 300)
	w.rect(1200, 30, 600, 4).stat();
	st = w.st
	w.db()
	x = w.st.W() / 2
	y = w.st.H() / 2
	$l('x: ' + x + ', y: ' + y)
	$t(function () {
		sc = p.getScrollXScale()
		st.sXY(sc)
		st.XY(
				x * sc + x - p.X() * sc,
				y * sc + y - p.Y() * sc
		)
	})
}
 
 