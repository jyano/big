$PT();
// controller-edge is a body-controller pair linked both to other bodies for that controller.. and to other controllers of that body!!! 
b.eachCx = function (fn) {var b = this, otherFx, cx  //  OTHER way to check contacts !!!!!! 
	
	if (!(cx=b.cx())) {
		$l('b.eachCx : no contacts');
		return false
	}
	while (cx = cx.contact) {
		//find the fixture whose body is not b
		  otherFx = (cx.bA()==b)? cx.fB() : cx.fA()
		//and call func on IT (along with the actual cx)
		fn(otherFx, cx)
		cx  = cx.N()
	} //b.col2 = 	
}

		
w.bindCo = function () {var w=this, g=arguments
	return w.b(function (cx) {
		cx.bindCo.apply(cx, g) })  }

ACO1 = UPDOWN = UDO = function () {W0().db().C('g');     y = w.ship(300, 50).lD(5);    co1 = w.acc(0, -50);   co2 = w.acc(0, 50)
	
	w.rectSensor(250, 300, 600, 600, 'o').K('co1');   w.rectSensor(950, 300, 600, 600, 'o').K('co2');  _.t(20, function () {  w.circ(300, 300, 30, 'b')  })
	
	w.bindCo('co1', 'co2')

	w.end(function (cx) {
		if (  cx.w('co1')) { f.cancel()}
		if (  cx.w('co2')) {}
	})
	// fixt.cancel()
}
CONTLIST = CLS = function () {W({}).db().C('p');   co1 = w.acc(0, -50);   co2 = w.acc(0, -50);
	
	s1 = w.sensorBucket(320, 300, 'co1');  s2 = w.sensorBucket(700, 300, 'co2')
	
	w.circ(150, 100, 30, 'w'); w.circ(200, 100, 30, 'd');w.circ(250, 100, 30, 'r');w.circ(350, 100, 30, 'g');  w.circ(400, 100, 30, 'o');w.circ(450, 100, 30, 'w')
	
	w.bindCo('co1', 'co2')
	
	w.end(function (cx) {var f; if (f = cx.w('co2')) { f.cancel() }})
	
	_.in(.5, function () {
		y = w.ship(300, 50)
		_.ev(1, function () {
			w.circ(300, 100, 10, 'y');   w.circ(760, 100, 10, 'b'); y.broadcastKill()
		})
	})
}

 
COEDGE = CED = function () {W().db() //gives u a controller-edge 
	w.rectStat(320, 480, 640, 20); w.rectStat(320, 340, 320, 20);
	w.rectStat(170, 230, 20, 200); w.rectStat(470, 230, 20, 200);
	w.rectSensor(320, 245, 280, 170)
	co = w.buoy(0, -1, 5, 2).de(2).os(-6)
	w.$eD(function(b){b.eachCx(function (cx) {
		if (cx.aSr() && cx.bNoCo()) {cx.bBy(co)}
		if (cx.bSr() && cx.aNoCo()) {cx.aBy(co)}})
	})
	
	_.in(3, function () {b = w.circ(300, 40, 8, 'r'); c = b.cx()})     
	
}
// if(b.co()){ co.remove(b) } // if one is a sensor AND the other has no controllers  // then add the other one to the controller
