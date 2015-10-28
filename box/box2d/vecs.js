v.a = v.add = function (x, y) {
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 1
	y = N(y) ? y : x
	var v = V(this.x + x, this.y + y)
	return v
}
v.s = v.sub = function (x, y) {
	if (O(x)) {
		y = x.y;
		x = x.x
	}
	x = N(x) ? x : 1;
	y = N(y) ? y : x
	var v = V(this.x - x, this.y - y)
	return v
}
v.tF = v.toFixed = function (n) {
	n = N(n) ? n : 2
	var v = V(
			Number(this.x.toFixed(n)),
			Number(this.y.toFixed(n)))
	return v
}
AB001 = b2d.AB0001 = function (a, b) {
	return $aB(a - .001, b - .001, a + .001, b + .001)
}
b2d.iV = b2d.isV = function (v) {
	if (v) {
		return v.constructor.name == "b2Vec2"
	}
}

$AB= $aB = b2d.AB = AABB = AB = function (a, b, c, d) {
	var ab = new b2d.AABB() // ??
	ab.lowerBound.Set(a, b)
	ab.upperBound.Set(c, d)
	return ab
}//get rectangle by two coords

V = function (x, y, x2, y2) {
	var g = G(arguments),
			x = g[0], y = g[1], x2 = g[2], y2 = g[3],
			vec
	if (A(x)) {
		y2 = x[3];
		x2 = x[2];
		y = x[1];
		x = x[0]
	}
	if (N(y2)) {
		x = (x - x2) / 2;
		y = (y - y2) / 2
	}//for dist difs?
	else if (O(x)) {
		y = F(x.Y) ? x.Y() : x.y
		x = F(x.X) ? x.X() : x.x
	}
	x = N(x) ? x : 0
	y = N(y) ? y : x
	vec = new b2d.M.b2Vec2(x, y)
	if (g.n || g.d) {
		vec = vec.div()
	}
	if (g.p || g.m) {
		vec = vec.mult()
	}
	return vec
}
v.m = v.mlt = v.mult = function (num) {
	num = N(num) ? num : 30
	var v = _.clone(this)
	v.Multiply(num)
	return v
}
v.d = v.div = function (num) {
	num = N(num) ? num : 30
	return this.mult(1 / num)
}