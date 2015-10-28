M.lnD=M.lD= M.lineDistance
b.rotTowards = function (y) {
	var b = this
	var yX = y.X()
	var yY = y.Y()
	var bgX = b.X()
	var bgY = b.Y()
	var dX = yX - bgX, dY = yY - bgY
	var ang = -M.tD(M.atan(dX / dY))
	if (y.Y() > b.Y()) {
		ang += 180
	}
	b.rt(   M.r()*40 + ang  - 20  )
	return b
}
STAB = function () {
	W0().db();
	hits = 0
	co = w.tensor();
	_.t(10, function () {
		co.body(w.circ(400, 300, 15, 'w').lV(10, 20).lD(0))
	})
	w.rect(200, 200, 50, 260).stat();
	w.rect(140, 200, 140, 50).stat()
	w.rect(640, 200, 200, 50, 'o')
	w.circ(500, 200, 80, 'm')
	y = w.ship().K('ship').lD(5)
	bg = w.yShip('b', 500, 300).de(3).lD(2).K('bg').aD(.2)
	
	_.ev(.5, function () {
		bg.aV(0); bg.rotTowards(y) })
	$t(function () { bg.push(4) })
	
	w.beg(oB)
 	w.show(function () {return 'hits: ' + hits})

}
V.lnD=function(x,y,x1,y1){return M.lD(V(x, y), V(x1,y1))}
b.lnD=function(x,y){var b=this

	return V.lnD(x, y, b.X(), b.Y())
}
function oB(cx) {


	
	if (cx.w('ship', 'bg')) {
		
		var mf = cx.wM()
		var pt= mf.m_points[0]
		var iX = pt.x * 30
		var iY = pt.y * 30
		
		
		var isOk= y.lnD(iX, iY) > bg.lnD(iX, iY)   
		
		
		if (isOk) {dstGtr()} else {elseFn()}
	}
}
function dstGtr() {
	_.in(.1, function () {
		hits++
		w.C('g')
		bg.XY(300, 300)
		y.XY(700, 400)
	})
}
function elseFn() {
	_.in(.1, function () {
		w.C('p')
		bg.XY(700, 400)
		y.XY(100)
	})
}