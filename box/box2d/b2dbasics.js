_.x = _.extend
base()
entityMan()
$show = function (what) {
	W()
	if (!S(what)) {
		return alert('must pass string')
	}
	fn = $eM[what]
	if (!fn) {
		return alert('$eM dont have that')
	}
	if (!F(fn)) {
		return alert('$eM have that but must be fn')
	}
	b = $eM[what]()
}
function notSureSetup(){
//shB = b2d.DD.e_shapeBit; jB = b2d.DD.e_jointBit
_sB = sB = b2d.B.b2_staticBody
_dB = dB = b2d.B.b2_dynamicBody
Joints = {};
Stuff = {}
FLAGS = {}
};notSureSetup()
function base() {
	b2d = Box2D //divide by 30 to get meters //all bx-obs have reg at center
	b2d.D = b2d.Dynamics
	b2d.C = b2d.Collision
	b2d.Cm = b2d.Common
	b2d.W = b2d.World = b2World = b2d.D.b2World
	b2d.H = b2d.Shapes = b2d.C.Shapes
	b2d.M = b2d.Math = b2d.Cm.Math
	b2d.Cxs = b2d.D.Contacts
	b2d.Cos = b2d.Co = b2d.Controllers = b2d.D.Controllers
	b2d.Js = b2d.Jts = b2d.Joints = b2d.D.Joints
	b2d.FD = b2FixtureDef = b2d.D.b2FixtureDef
	b2d.F = b2d.Fixture = b2d.fixture = b2Fixture = b2d.D.b2Fixture
	b2d.B = b2d.Body = b2Body = b2d.D.b2Body
	b2d.FixtureDef = b2d.D.b2FixtureDef
	b2d.BD = b2d.BodyDef = b2d.bodyDef = b2BodyDef = b2d.D.b2BodyDef
	b2d.PH = b2d.PolygonShape = b2PolygonShape = b2d.H.b2PolygonShape
	b2d.CH = b2d.CircleShape = b2CircleShape = b2d.H.b2CircleShape
	b2d.MD = b2d.massData = b2MassData = b2d.H.b2MassData
	b2d.CL = b2d.ContactListener = b2d.D.b2ContactListener
	b2d.Cx = b2d.Contact = b2d.D.Contacts.b2Contact
	b2d.WorldManifold = b2d.C.b2WorldManifold
	b2d.DD = b2d.DebugDraw = b2DebugDraw = b2d.D.b2DebugDraw
	b2d.Jt = b2d.joint = b2d.Joints.b2Joint
	b2d.JtD = b2d.jointDef = b2d.Joints.b2JointDef
	b2d.DJ = b2d.distanceJoint = b2d.Joints.b2DistanceJoint
	b2d.MJ = b2d.mouseJointDef = b2MouseJointDef = b2d.Dynamics.Joints.b2MouseJointDef
	b2d.AB = b2d.AABB = b2AABB = b2d.C.b2AABB
	b2d.M2 = b2d.Mat22 = b2d.M.b2Mat22
	b2d.M3 = b2d.Mat33 = b2d.M.b2Mat33
	b2d.Controller = b2d.Dynamics.Controllers.b2Controller
	b2d.CFC = b2d.ConstantForceController = b2d.Controllers.b2ConstantForceController
	b2d.GC = b2d.GravityController = b2d.Controllers.b2GravityController
	b2d.Contacts = b2d.D.Contacts
	b2d.Contact = b2d.Contacts.b2Contact
	b2d.TDC = b2d.TensorDampingController = b2d.Controllers.b2TensorDampingController
	b2d.CAC = b2d.ConstantAccellController = b2d.Controllers.b2ConstantAccelController
	b2d.BC = b2d.BuoyancyController = b2d.Controllers.b2BuoyancyController
	b2d.Contact = b2d.Dynamics.Contacts.b2Contact
	b2d.CL = b2d.ContactListener
	b2d.Vec2 = b2d.M.b2Vec2
	b2d.DebugDraw = b2d.D.b2DebugDraw
	$pt = {}
	$pt.dD = b2d.DebugDraw.prototype
	$pt.l = $pt.cL = b2d.CL.prototype
	$pt.b = b2d.Body.prototype
	$pt.f = b2d.Fixture.prototype
	$pt.cx = b2d.Contact.prototype
	$pt.w = b2d.W.prototype
	$pt.bD = bD = b2d.BodyDef.prototype
	$pt.fD = fd = b2d.FixtureDef.prototype
//shape
	$pt.bH = b2d.Shapes.b2Shape.prototype;
	$pt.cH = b2d.CircleShape.prototype
	$pt.pH = b2d.PolygonShape.prototype
//co
	$pt.co = b2d.Controller.prototype
	$pt.gCo = b2d.GC.prototype
	$pt.bCo = b2d.BC.prototype
	$pt.fCo = b2d.CFC.prototype
	$pt.aCo = b2d.CAC.prototype
	$pt.tCo = b2d.TDC.prototype
	$pt.v = b2d.Vec2.prototype
	$PT = function () {
		dD = $pt.dD
		v = $pt.v
		bH = $pt.bH;
		cH = $pt.cH;
		pH = $pt.pH
		w = $pt.w;
		fd = fD = $pt.fD;
		bD = $pt.bD;
		b = $pt.b;
		f = $pt.f
		cx = $pt.cx
		co = $pt.co;
		fCo = $pt.fCo;
		aCo = $pt.aCo;
		gCo = $pt.gCo
		tCo = $pt.tCo;
		bCo = $pt.bCo
		l = cL = $pt.l
	}
	$PT()
}
function entityMan() {
	$eM = {}
	$eM.fixts = function () {
		return w.D(100, 100, [
			[50, 200], //rect
			[100, 200, 100],  //circle shifted to the right by 100
			[100, 100, 300, 100], //rect shifted to the right by 100
			$cF(42),
			$rF(200, 100),
		])
	}
	//entity manager

	$eM.pFs = function () {
		return w.D(500, 400, [
			$pF(20, 20, -100, 50, 60),
			$pF(100, 120, 0, 0, 100),
			$pF(100, 20),
			$pF(10, 300)
		])
	}
	$eM.compound = b2d.compoundShape = function () {
		return w.A($dB(300, 200), [
			$rF(50, 10),
			$rF(60, 30, 40),//$rF(60, 30, 0, 0, 40),
			$rF(120, 30, 29),//	$rF(120, 30, 0, 0, 29),
			$rF(60, 10, 0, 50, 60),
			$rF(84, 10, 15, 80, -120)])
	}
	$eM.compound2 = b2d.compoundShape2 = function () {
		return w.A($dB(300, 200), [
			$rF(50, 10),
			$rF(20, 20),
			$rF(20, 10, 10),
			$rF(40, 10, 50, 0, 45),
			$rF(84, 10, 15, 80, -120),
			$rF(60, 10, 0, 50, 60)
		])
	}
	$eM.star = b2d.compoundStar = function () {
		return w.A(
				$dB(300, 200), [
					$rF(10, 10),
					$cF(20),
					$rF(4, 80, 300, 300, 135),
					$rF(4, 80, 45),
					$rF(4, 80, 100, 0, 90),
					$rF(4, 80, 180)]
		)
	}
//lets study how to make a circle
	BALS = function () {
		W().G(50)
		w.addTenBalls();
		w.addMe();
		w.addMe();
		w.addMe()
	}
// meet entity manager
//just for namepacing
//aF is great.. it will let u simply pass in an 
//array of arrays
// can use it with w.D.. example:
	$eM.tri = function () {
		return w.D(400, 400, [
			// this does NOT work currently: [[230, 30], [20, 140], [10, 10]]
			//must use this
			$aF([230, 30], [20, 140], [10, 10])
		])
	}
//*** NOTE: in b2dWEB use CW, not CCW
}