dD.F = dD.fl = dD.flags = function (fl) {
	var dD = this
	if (U(fl)) {
		return dD.GetFlags()
	}
	dD.SetFlags(fl)
	return dD
}
dD.sp = dD.sprite = dD.spr = function (sp) {
	//it is looking for canvas-context
	if (U(sp)) {
		return this.GetSprite()
	}
	this.SetSprite(sp)
	return this
}
dD.sc = dD.scale = dD.drawScale = dD.dS = function (sc) {
	var dD = this
	if (U(sc)) {
		return this.GetDrawScale()
	}
	this.SetDrawScale(sc)
	return this
}
dD.f = dD.fAl = dD.fillAlpha = dD.alpha = dD.fA = function (al) {
	var dD = this
	if (U(al)) {
		return this.GetFillAlpha()
	}
	this.SetFillAlpha(al)
	return this
}
dD.l = dD.lT = dD.line = dD.lineThickness = dD.lT = function (lt) {
	if (U(lt)) {
		return this.GetLineThickness()
	}
	this.SetLineThickness(lt);
	return this
}
//Get/SetXFormScale(xformScale:N)   scale used for drawing XForms
dD.al = dD.alpha = dD.fA = function (al) {
	var dD = this
	if (U(al)) {
		return this.GetAlpha()
	}
	this.SetAlpha(al)
	return this
}//Get/SetAlpha(al:N)    used for lines 
$dD = function (sp, sc) { //=DebugDraw=dbD
	var dD = new b2d.DD()
	dD.sp(sp);
	dD.sc(sc)
	return dD
} // = b2d.debugDraw
$dD.a = b2d.DD.e_aabbBit //4
$dD.h = b2d.DD.e_shapeBit //1
$dD.j = b2d.DD.e_jointBit //2
$dD.p = b2d.DD.e_pairBit //8
$dD.c = b2d.DD.e_centerOfMassBit // 10
$dD.co = b2d.DD.e_controllerBit //20 

/*
 Chapter 12 Debug Drawing

 You can implement the b2DebugDraw class to get detailed drawing of the physics world. Here are the available entities:

 •                    shape outlines
 •                    joint connectivity
 •                    broad-phase axis-aligned bounding boxes (AABBs)
 •                    center of mass



 This is the preferred method of drawing these physics entities, rather than accessing the data directly. The reason is that much of the necessary data is internal and subject to change.

 The testbed draws physics entities using the debug draw facility and the contact listener, so it serves as the primary example of how to implement debug drawing as well as how to draw contact points.


 */