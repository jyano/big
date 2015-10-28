function flippers() {
	w.rightFlipper = function (x, y) {
		var rightJoint = w.circStat(x, y, 20, 'red'),
				rightFlip = w.rect(x, y, 100, 25, 'blue')
		var flipper = __rightFlipper = w.rev(rightJoint, rightFlip, 0, 0, 40, 0).lim(-70, 30)
		flipper.flip = function () {
			rightFlip.I(-120, 0)
		}
		return flipper
	}
	w.leftFlipper = function (x, y) {
		var leftFlip = w.rect(x, y, 100, 25, 'blue'),
				leftJoint = w.circStat(x, y, 20, 'red')
		var flipper = __leftFlipper = w.rev(leftJoint, leftFlip, 0, 0, 40, 0).lim(150, 250)
		flipper.flip = function () {
			leftFlip.I(120, 0)
		}
		return flipper
	}
	w.flippers = function (x, y, x2, y2) {
		if (U(y2)) {
			y2 = y
		}
		if (U(x2)) {
			x2 = x + 230
		}
		var lf = w.leftFlipper(x, y),
				rf = w.rightFlipper(x2, y2)
		var flip = function flip() {
			lf.flip();
			rf.flip();
			return flip
		}
		flip.left = lf
		flip.right = rf
		return flip
	}
};
flippers()