// Imagine that you have gusts of wind blowing sideways… 
// you can add your objects to a Contoller and have them pushed sideways… 
// then when the wind passes you could remove them from that controller.
// now just add and remove bodies to the controller!!
w.aCo= w.acc = function () {var w=this
	var co = $aCo.apply($aCo, arguments)
	w.co( co )
	return co
}

$aCo= b2d.acc = function (x, y) {

	var co = new b2d.CAC()
	
	if (N(x)) {co.V(x, y)}
	
	return co
}
 
 
aCo = $pt.aCo
aCo.V = function (x, y) {var aCo=this

//getter is a waste!  counterproductive... think about it! :)
// .. but for consistency..??? nah i can do better
	//applies 'gravity' by default

	aCo.A = U(x) ? V(0, 10) : V(x, y)

	return aCo
}
 
ACC = function () {W0().C('g')
	b = w.box(300, 300, 50, 60)
	w.box(400, 300, 50, 60)
	co = w.aCo(5, 5)
	
	co.AddBody( b ) // co.A = V(x, y)

	added = true
	$t(function () {
		b.F(-10, -10)
	})
	_.ev(2,  function() {
		if (shouldChange()) {
			if (added == true) {added = false;w.C('u');co.rm(b)}
			else {added = true;  w.C('g');  co.AddBody( b )}
		}
	})
	
	function shouldChange() {return M.r() > .5}
}


ACCVSFORCE = AFO = function () {
	W0().C('e')
			.pen('blue has constForce(1,0)  red has constAcc(1,0)')
	fCo = w.fCo(1, 0)
	aCo = w.aCo(1, 0)
	b = w.circ(100, 100, 20, 'b') 
	b1 = w.circ(100, 200, 40, 'b') 
	x = w.circ(100, 300, 20, 'x') 
	x1 = w.circ(100, 400, 40, 'x') 
	_.in(2, function () {
		w.C('d');
		fCo.A(b, b1)
		aCo.A(x, x1)
	} )
}
//CHANGESCONTROLLERBASEDONSENSORBRILLIANT
//gives u a controller-edge, which is a body-controller pair
//it is linked both to other bodies for that controller..
//and to other controllers of that body!!!
//lets focus on other bodies first....
CONTROLCHANGE = CCH = function () {W().G(4)
	y = w.ship(100, 500)
	w.circ(150, 100, 10, 'w')
	w.circ(200, 100, 20, 'd')
	w.circ(250, 100, 40, 'r')
	w.circ(350, 100, 50, 'g')
	w.circ(400, 100, 30, 'o')
	w.circ(450, 100, 20, 'w')
	
	s1 = w.sensorBucket(320, 300, 's1')
	s2 = w.sensorBucket(700, 300, 's2')
	co1 = w.acc(5, -5)
	co2 = w.acc(-5, 5)
	w.b(function (cx) {var f
		if (f = cx.w('s1')) {
			var b = f.B();
			b.cancel();
			 co1.B(b)
		}
		
		if (f = cx.w('s2')) {
			var b = f.B();
			b.cancel();
			co2.B(b)
		}
	})

	_.ev(1, function () {w.circ(300, 100, 10, 'y'); w.circ(760, 100, 10, 'b')})
	_.ev(5, function () {y.broadcast(function (b) {b.kill()})})//  kills all in its 'controller-space' (except itself)
	
}
//  The easiest approach to utilize the controllers is to create sensor fixtures
// that test when a begin/end  event has occurred with a body.
// In the beginContact method, add the body to the controller.
// In the endContact method, remove the body.
SENSORCONTROL = SNC = function () {
	W({g: 3}).db()
	y = w.ship(300, 100).lD(2)
	w.rectSensor(300, 300, 340, 140, 'o')
	w.rectSensor(780, 300, 140, 340, 'o')
	aCo = w.acc(50, -50)
	w.b(function () { aCo.B( y ) })
	w.end(function () {aCo.rm(y)})

}

//  b2d.Dynamics.Controllers.b2ControllerEdge
//waterCanvas = w.s.shape().f('red',.2).dr(180,160,280,170).ef()