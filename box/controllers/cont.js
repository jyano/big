 
co = $pt.co
w.ACo= w.AC = function (co) {
	this.AddController(co)
	return this
}
w.RC = w.RCo = function (co) {
	this.RemoveController(co)
	return this
}
co.GBL = co.GBo= function () {return this.GetBodyList()}
co.N = co.GN= function () {return this.GetNext()}
co.W = co.GW= co.GWo= function () {return this.GetWorld()}
co.RB = co.RBo= function (b) {this.RemoveBody(b)
	return this}
co.AB= co.ABo=function(bod){
	this.AddBody(bod)
	return this
}
b.GCoL= b.GCL = function () {
	return this.GetControllerList()
}
//
w.co = function () {

	//add onOrMoreControllers
	var w = this, g = G(arguments)
	
	if(g.u){
		return w.m_controllerList
	}
	_.e(g, function (co) {
	
		w.ACo(co)
	
	})
	
	return w
}
// add on Or More Bodies? use co.A
co.A =     function () {
	var co = this, g=G(arguments)
	_.e(g, function (b) {co.AB(  b2d.tB(b)  )})
	return this
}
//co.b: get first bod
co.b = function () {
	var co = this, g = G(arguments)
	if (g.u) {
		return co.bs()[0]
//	var ed = co.ed()
//	return ed && ed.body
	}
}
// co.bs: get or iterate array of bods
co.bs = function (fn) {//get or use ARRAY of its bodies
	var co = this, b
	var arr = []
	var ed = co.GBL()
	while (ed) {
		arr.push(ed.body)
		ed = ed.nextBody
	}
	if (fn) {
		_.e(arr, fn);
		return co
	}
	return arr
}
//co.n: num of bods
co.n = co.num = co.numB = function () {
	return this.bs().length
}
// co.ed: get traversable edge cursor
co.ed =   function () {
	var co = this, g=G(arguments)
	var ed  = co.GBL()
	if (g.u) {return ed }
}
// co.eds: get or iterate array of eds
co.bEds= co.eds = function (fn) {//get or use ARRAY of its bodies
	var co = this, b
	var arr = []
	var ed = co.GBL()
	
	while (ed) {
		arr.push(ed )
		ed = ed.nextBody
	}
	if(fn){
		_.e(arr, fn); return co
	}
	return arr
}
//coEd: first co edge
b.coEd =  function (co) {var b=this, w= b.W()
	if (U(co)) {return b.GCL()}
	//	w.co(b )  // :)
	return b
}
//co: first co
b.co=function(){
	var b = this, w = b.W(), g=G(arguments)
	if (g.u) {
		
		var ed= b.GCL()
		
		return ed && ed.controller 
		
	}
	
	return b.a2.apply(b, arguments)
}
//****** WARING: b.GetContactList AND b.GetControllerList both exist *** 
//b.cos:get or use ARRAY of  bod's controllers
b.cos=function(fn){
	
	var b = this, co
	var arr = []
	var ed = b.GCL()
	while (ed) {
		arr.push(ed.controller)
		ed = ed.nextController
	}
	if (fn) {
		_.e(arr, fn);
		return co
	}
	return arr
}
//coEds: // co.eds: get or iterate array of eds
b.coEds = function (fn) {
	var b = this, co
	var arr = []
	var ed = b.GCL()
	while (ed) {
		arr.push(ed )
		ed = ed.nextController
	}
	if (fn) {
		_.e(arr, fn);
		return co
	}
	return arr
}
//co.n: num of controllers
b.nCos=function(){
	return this.cos().length
}
b.a2 = b.join = function(co){
	var b=this, g=G(arguments)
	_.e(g,function(co){
		if(O(co)){co.A( b )}
	})
	return b
}
co.rmAll=function(){
	var co=this
	co.bs(function (b) {
		co.rm(b)
	})
	return co
}
co.die = function(){  
	var co=this, w=co.W()
	w.RC(co)
	return co
}
co.rm = co.un = function (b) {
	var co = this
	var g=G(arguments)
	if(g.u){return co.rmAll()}
	g.e(function(b){
		co.RB(b)
	})
	return co
}



b.broadcast = b.bc = function (fn) {var b=this
	var origEdge, edge, nextEdge
	
	if (fn == 'kill') {
		alert('use broadcastKill')
		fn = function (b) {b.kill()}
	}
	
	origEdge = b.co()
	if (!origEdge) {return b}
	
	edge = origEdge.nextBody
	
	while (edge) {
		
		
		nextEdge = edge.nextBody
		
		fn(edge.body)
	
		edge = nextEdge
	
	}
	
	edge = origEdge.prevBody
	
	while (edge) {
		nextEdge = edge.prevBody
		fn(edge.body)
		edge = nextEdge
	}
	
	
	return b
}
b.broadcastKill=function(){
	F.run = function (methodN) {
		return function () {
			this[methodN]();
			return this
		}
	}
	
	return this.broadcast(function (b) {
		b.kill()
	})
}

b.escape = b.rmFrom=b.cancel = function (co) {var b=this
	if (O(co)) {co.rm(b)}
	else {var co = b.co()
		if(O(co)) {
		co.controller.rm(b)}}
}
b.changeCo = b.switch=b.switchTo = function (co) {
	 var b=this
	b.rmFrom()
	 if(co){co.A(b)}
	 return b
}
b.a2IfUncontrolled = function (co) {
	var b = this
	if (!b.hasCo) {
		$l('adding b to co')
		b.a2(co)
	}
	return b
}
b.hasCo = function () {
	return this.co() ? true : false
}
w.buck = w.sensorBucket = function (x, y, k) {
	var w = this//x = N(x) ? x : 320 //y = N(y) ? y : 245
	k = k || 'sensorBucket'
	Part(x, y + 95, 320)
	Part(x - 150, y - 15)
	Part(x + 150, y - 15)
	return w.rectSensor(x, y, 280, 170, 'b').K(k)
	function Part(x, y, wd) {
		return w.BRICK(x, y, wd, 20, 200, 'o')
	}
}
function proxy(){
f.cancel = function () {
	this.body().cancel()
	return this
}
f.switch=f.switchTo = function (co) {
	this.body().switchTo(co)
	return this
}


}
proxy()
//co.st = co.step = function () {this.step();return this}
//info: https://github.com/jonasz/Theory-of-Gravitation/blob/master/Box2D-2.0.2b2/Box2D/Box2D_doxygen.i
//is the body controlled by this controller
b.by = function (co) {
	var b = this
	return co && _.ct(b.cos(), co)
}
//does the controller control this body
co.do = co.does = co.controls = function (b) {
	var co = this
	return b && _.ct(co.bs(), b)
}
b.noCo = function () {
	return !this.GCoL()
}
/// control but only if body currently uncontrolled
co.try = function (b) {
	var co = this
	if (b && b.noCo) {
		co.A(b)
	}
	return co
}
b.free = function () {
	var b = this
	b.cos(function (co) {
		co.rm(b)
	})
	return b
}