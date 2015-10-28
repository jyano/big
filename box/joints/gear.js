w.Gear = function (a, b, c) {
	return this.createJoint(Gear(a, b, c))
	function Gear(bA, bB, ratio) {
		var gearJoint = new b2d.Joints.b2GearJointDef()
		gearJoint.joint1 = bA
		gearJoint.joint2 = bB
		gearJoint.bodyA = bA.GetBodyA()
		gearJoint.bodyB = bB.GetBodyA()
		gearJoint.ratio = N(ratio) ? ratio : 1
		return gearJoint
	}
}

DEMO_GEAR = DMG = function () {
	W().Gear(
			w.rev(w.baa(100, 220, 40), w.bi(100, 220, 100, 20)),
			w.rev(w.baa(250, 220), w.bi(250, 220, 100, 20)),
			.5
	)
}
