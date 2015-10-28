//bD.XY is the key function of body def prototype
//basically, it allows you to set the position of the bodydef,
//and hence, the body
//
bDPt()
function bDPt() {
	bD.XY = function (x, y) {
		var bD = this
		var pos = bD.position
		if (U(x)) {
			return pos.m()
		}
		x = N(x) ? x : 0
		y = N(y) ? y : 0
		var vec = V(x, y, '-')
		bD.position = vec
		return bD
	}
	bD.X = function (x) {
		var bD = this
		var pos = bD.XY()
		if (U(x)) {
			return pos.x
		}
		return bD.XY(x, pos.y)
	}
	bD.Y = function (y) {
		var bD = this
		var pos = bD.XY()
		return U(y) ? pos.y :
				bD.XY(pos.x, y)
	}
	bD.rt = bD.rot = bD.ang = function (ang) {
		var bD = this
		//The world angle of the body in radians.
//should fix
//use ang for box and rot for cjs?
		if (U(ang)) {
			return bD.angle
		}
		bD.angle = ang;
		return bD
	}
	bD.fR = bD.fixedRot = function (isFixed) {
		if (U(isFixed)) {
			return this.fixedRotation
		}
		this.fixedRotation = isFixed;
		return this
	}
	bD.nRt = bD.mFR = function () {
		this.fR(true)
		return this
	}
//you also need to set its type,
//this means if it is static, dynamic or kin
	bD.ty = function (ty) {
		var bD = this
		if (U(ty)) {
			return bD.type
		}
		bD.type = ty
		return bD
	}
	bD.lD = function (damp) {
		if (U(damp)) {
			return this.linearDamping
		}
		this.linearDamping = damp;
		return this
	}
	bD.aD = function (damp) {
		if (U(damp)) {
			return this.angularDamping
		}
		this.angularDamping = damp;
		return this
	}
	bD.lV = function (vel) {
		if (U(vel)) {
			return this.linearVelocity
		}
		this.linearVelocity = vel;
		return this
	}
	bD.aV = function (vel) {
		if (U(a)) {
			return this.angularVelocity
		}
		this.angularVelocity = vel
		return this
	}
	bD.bul = bD.bull = function (isBul) {
		if (U(isBul)) {
			return this.bullet
		}
		this.bullet = isBul;
		return this
	}
	bD.mB = function () {
		this.bul(true)
		return this
	}
	bD.act = bD.setActive = function (iAct) {
		var bD = this
		bD.active = iAct ? true : false
		return bD
	}
	bD.mA = function () {
		this.act(true)
		return this
	}
	bD.sleepy = bD.aS = function (canSleep) {
		var bD = this
		bD.allowSleep = canSleep ? true : false
		return bD
	}
	bD.dS = bD.dAS = bD.mAS = function () {
		this.sleepy(true)
		return this
	}
}
/// ook we doin this shiiite with $bD..
// make just a basic bodyDef with default type (STATIC=0)
$bD = function (x, y) {
	var bod = new b2d.BodyDef()
	//  DO NOT
	bod.XY(x, y)
	// TRY TO MEREGE THESE LINES ( XY may not return bod, dummy!)
	return bod
}
// dont matter.. cause we never gonna use that..
// instead be more explicit and create bodes 
// of the specific type u want:
// this is also a fine time to pass in x and y
$dB = function (x, y) {
	return $bD(x, y).ty(2)
}//interesting that dyn comes after kin
$sB = function (x, y) {
	return $bD(x, y).ty(0)
}
$kB = function (x, y) {
	return $bD(x, y).ty(1)
}
// we will use this function to show specific shape structures