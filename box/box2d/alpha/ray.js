w= b2d.World.prototype

w.rayCast = function (func, v1, v2) {
	return this.RayCast(func, V(v1, '-'), V(v2, '-'))
}
rayLine = function (x1, y1, x2, y2) {
	alert('rayLine')
	x1 = N(x1) ? x1 : 0
	y1 = N(y1) ? y1 : 0
	x2 = N(x2) ? x2 : 100
	y2 = N(y2) ? y2 : 100
	if (line) {
		line.remove();
		line = null
	}
	line = cjs.shape()
	line.graphics.s('white').mt(x1, y1).lt(x2, y2)
	w.s.A(line)
}
removeDots = function () {
	alert('removeDots')
	getDots = function () {
		var arr = []
		_.each(w.s.children, function (c) {
			if (c.N() == 'dot') {
				arr.push(c)
			}
		})
		return arr
	}
	dots = getDots()
	_.each(dots, function (dot) {
		dot.remove()
	})
}
RAYCAST = RAC = function () {b2d.miniWorld()
	
	firstPoint = secondPoint = line = null
	w.brick(200, 200, 40, 20)
	
	w.st.on('stagemousedown', function (ev) {
	
	$l('stage mouse down')
		e = ev;
		x = e.rawX;
		y = e.rawY
		if (firstPoint == null) {
			firstPoint = {x: x, y: y}
		}
		else {
			if (secondPoint == null) {
				secondPoint = {x: x, y: y}
			}
			else {
				firstPoint = secondPoint;
				secondPoint = {x: x, y: y}
			}
			
			removeDots()
			w.s.dot('blue', firstPoint.x, firstPoint.y)
			w.s.dot('red', secondPoint.x, secondPoint.y)
			rayLine(firstPoint.x, firstPoint.y, secondPoint.x, secondPoint.y)
			n = 0
			w.rayCast(function (fixt) {
						n = n + 1;
						f = fixt;
						b = fixt.GetBody()
						w.s.dot(b.X(), b.Y())
					},
					firstPoint, secondPoint)
			data(n + ' guys')
		}
	})
}