old = function () {
//should deprecate!!!!!
/// shortcuts.. but each one will completely override the listener
// only for simple use cases (one type of listener, specified once)
	w.beginX = w.onBeginContact = w.oB = function (func) {//=w.contactBegin
		this.listen(b2d.listener().begin(func))
		return this
	}
	w.endX = w.onEndContact = w.oE = function (fn) {
		this.listen(b2d.listener().end(fn))
		return this
	}
	w.preX = function (fn) {
		this.listen(b2d.listener().pre(fn))
		return this
	}
	w.postX = function (func) {
		this.listen(b2d.listener().post(func))
		return this
	}
//////
}
function getWorldPoint(f) {
	ab = f.GetAABB()
	bdVars(f)
	_.ev(1, function () {
		w.st.dot('r', dx, dy)
		w.st.dot('b', ux, uy)
		w.st.dot('p', lx, ly)
	})
} 
b2d.superManifold = function (m) {
	alert('superManifold')
//used????
	m.lPN = m.m_localPlaneNormal
	m.lP = m.m_localPoint
	m.pC = m.m_pointCount
	m.p = m.m_points
	m.t = m.m_type
	return m
}
function SuperImpulses(impulses) {
	$l('SuperImpulses')
	impulses.n = impulses.nI = function () {
		return impulses.normalImpulses
	}
	impulses.t = impulses.tI = function () {
		return impulses.tangentImpulses
	}
	return impulses
}
b2d.manager = b2d.contactManager = b2d.cM = function () {//used?
	alert('b2d.manager')
	var m = new BXD.b2ContactManager
	m.c = m.cl = m.Collide
	m.a = m.aP = m.AddPair
	m.f = m.fNC = m.FindNewContacts
	m.d = m.ds = m.Destroy
	return m
}