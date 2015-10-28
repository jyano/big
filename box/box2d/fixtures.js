b2d.iF = b2d.iFx=   function (f) {
	return f ? f.constructor.name == "b2Fixture" : false
}
// Recall  shapes  may be used independently of the physics.. so b2Fixture provided to attach shapes to bodies.
// Fixtures hold: 1 shape,  density, friction, rest , back pointer to the parent body,  user data, sensor flag,
//  collision filtering flags,  broad-phase proxies
// Fixtures are created by initializing a fixture definition 
// and then passing the definition to the parent body.
// fD = $fD(); fD.shape =  h; fD.density = 1; f = b.CreateFixture(fD)
// This creates the fixture and attaches it to the body. 
// You do not need to store the fixture pointer 
// since the fixture will automatically be destroyed
// when the parent body is destroyed. 
// You can create multiple fixtures on a single body.
// You can destroy a fixture on the parent body. 
// You may do this to model a breakable object. 
// Otherwise you can just leave the fixture alone 
// and let the body destruction 
// take care of destroying the attached fixtures (b.DestroyFixture(f))
$L('fShorts', 'fDef')
f.GB = f.GBd = function () {
	return this.GetBody()
}
f.GAB = function () {
	return this.GetAABB()
}
f.de = f.d = f.den =  function (den) {
	if (U(den)) {
		return this.GetDensity()
	}
	this.SetDensity(den)
	return this
}
f.fr = f.f = f.fric = function (fric) {
	if (U(fric)) {
		return this.GetFriction()
	}
	this.SetFriction(fric);
	return this
}
f.re = f.r = f.rest = function (re) {
	var f = this
	if (U(re)) {
		return f.GetRestitution()
	}
	f.SetRestitution(re);
	return f
}
f.iSr =  f.iS =    function (isSensor) {
 
		return this.m_isSensor
 
}

f.sr= f.sn  = f.sen =  function (isSensor) {
	if (U(isSensor)) {
		return this.m_isSensor
	}
	this.m_isSensor = isSensor ? true : false
	return this
}

f.sr1=f.s1= f.mS = f.mSn =   function () {
	this.sr(true)
	return this
}
f.sr0=f.s0=function(){
	this.SetSensor(false)
	return this
}
f.rm = f.die= function () {
	this.B().DF(this)
}

f.N =  function () {
	return this.GetNext()
}

 
FORCES = DSC = function () {
	W0()
	tri = $eM.tri()
	tri.bS('me')
	tri.constF(5, -2).$(function () {
		this.I(0, -50)
	})
	b = w.A($dB(100, 500), $pF(30, 30)).rt(2).nRt()
	b1 = w.A($dB(200, 500), $pF(30, 30)).rt(2).nRt()
	b2 = w.A($dB(300, 500), $pF(30, 30)).rt(1).nRt()
	i = function () {
		b.I(10, -30)
	}
	v = function () {
		b1.lV(10, -60)
	}
	f = function () {
		_.ev(.1, function () {
			b2.ApplyForce(V(0, -3), b2.worldCenter())
		})
	}
	_.in(1, function () {
		i()
		v()
		f()
	})
}
 
	
	
f.B = f.body =   function () {return this.GBd()}

f.ty = f.getType = f.gT = function (someType) {
		var f = this, b = f.B()
		var ty = b.GT()
		return D(someType) ? ( ty == someType) : ty
	}
	
	f.iTy = function (typ) {
		return this.ty() == typ
	}
 
  
	f.cen =  function () {
		var aBounds = this.GAB(),
				aLower = aBounds.lowerBound
				var alx = aLower.x * 30, aly = aLower.y * 30,
				aUpper = aBounds.upperBound,
				aux = aUpper.x * 30, auy = aUpper.y * 30,
				center = M.lineCenter(alx, aly, aux, auy)
		return __center = center
	}
 