/*
 You can access the raw contact manifold:
 b2Manifold* GetManifold();
 const b2Manifold* GetManifold() const;
 You can potentially modify the manifold,
 but this is generally not supported and is for advanced usage.
 There is a helper function to get the b2WorldManifold:
 void GetWorldManifold(b2WorldManifold* worldManifold) const;
 This uses the current positions of the bodies to compute world positions
 of the contact points.
 */
cx.lPN = cx.lcPN = function () {
	return this.gM().m_localPlaneNormal
}
cx.ptC = cx.numPts = cx.pointCount = cx.pC = function () {
	return this.gM().m_pointCount
}
cx.gM = function () {
	return this.GetManifold()
}
cx.ty = cx.type = cx.t = function () {
	return this.gM().m_type
}
cx.lPt = cx.lcPt = cx.lP = function () {
	return this.gM().m_localPoint
}
cx.pts = cx.p = function () {
	return this.gM().m_points
}
worMan()
function worMan() {
	cx.gWM = function () {
		return this.GetWorldManifold()
	}
	cx.wM = function () {
		return $wM(this)
	}
	cx.wCxPt = cx.wPt = cx.cxPt = cx.pt = function () {
		return $wM(this).m_points[0].m()
	} //cx.point
	cx.no = cx.norm = function () {
		return $wM(this).m_normal.toFixed(2)
	}
	cx.pt = cx.V = function () {
		return this.wM().m_points[0].m()
	}
}
//Sensors dont create manifolds; 
// for them use:  touching = cx.IsTouching(); (fn also works for non-sensors)
cx.iS = cx.Sn = function () {
	return this.IsSensor()
}
cx.sn = cx.sensor = cx.setSensor = cx.sS = function (a) {
	this.SetSensor(a ? true : false);
	return contact
}
cx.mS = function () {
	this.sS(true)
	return this
}