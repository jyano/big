jmp = true
w = $pt.w
$con = b2d.controls = {}
w.dude = w.tim =  function (n) {
	var w = this
	if (U(n)) {
		return w.ball().K('tim').bS('guy', .3)
	}
	_.t(n, function () {
		w.dude()
	})
	return w
}

w.meBod = function (sc) {
	$meHead = function (sc) {
		sc = N(sc) ? sc : 5
		
		var headF = $pF(sc * 10, sc * 20)
		
		headF.re(0).fr(.1).de(.8)
		
		headF.K('head')
		
		return headF
	}
	
	sc = N(sc) ? sc : 4
	return this.A(
			$dB(300, 200), 
			[$meHead(sc)]
	)
}

b.addFoot = function (sc) {
	sc = N(sc) ? sc : 4
	var b = this
	var fD = $pF(sc * 9, sc * 4, 0, sc * 12, '-')
	var f = b.f(fD).mS()
	f.K('foot')
	return b
}

w.footBox = function (sc) {
	return w.meBod(sc).addFoot(sc)
}

//just a basic box and foot
w.pBox = w.m = function (sc) {
	var g = G(arguments)
	var p = w.footBox(sc)
	p.K('player')
	//if(!g.n){p.nRt()}
	return p
}

w.pSpr = w.addMe = w.me = function (sc) {
	var w = this
	sc = N(sc) ? sc : 4
	var b = w.pBox(sc)
	b.bS('me', sc / 14)
	return b
}
b.setDir = function () {
	var b = this
	if (K.l || K.r) {
		b.dir(K.l && K.r ? -1 : K.l ? 1 : 0)
	}
	return b
}
b.impRunR = function (n) {
	return this.dir(0).I(M.abs(n), 0)
}
b.impRunL = function (n) {
	return this.dir(1).I(-M.abs(n), 0)
}



$oG = $onG = function () {var g = G(arguments);
	return (numLaps > 0) && ( g.p ? K.u : g.m ? K.u && jmp : true)
} //$jumping


b.con = b.cn = function (tik, enemy) {var b = this
	tik = S(tik) ? $con[tik] : tik
	if (F(tik)) {$t(function () {tik(b, enemy)})}
	return b 
}
	
b.dir = b.direction = function (dir) {
	if (U(dir)) {return this._dir}
	this._dir = dir
	return this
}

w.bobom = function (x, y) {var w = this
	x = x || M.r() * 400; y = y || M.r() * 400
	var bob = w.D(x, y, [$cF(20).re(1)]).K('bobom')
	bob.poly(25, 5, 30, 0, '-').cl(function () {
		this.B().ds()})//setDestroy()
	return bob.bS('guy')
}

 
b.jpb= b.jmpb= b.jumpable=b.isLegitJumping = function () {
	var b=this, g=G(arguments)
	return g.n? !b.cantJump:
	g.p? !b.cantJump &&   K.up:
	  b.trig.foot && K.u }
	 
b.jumpRight = function () {return this.I(50, -200)}

b.tricky = function () {
	var b = this, g = G(arguments)
	b.runOrOnG(function () {
		K.up ? b.impRun(g.f, g.s, g.t, '/') :
				b.impRun(g.fo, g.fi)
	})
	return b
}
b.runOrOnG = function (fn, leftRight) {
	leftRight = N(leftRight) ? leftRight : 1
	var b = this
	if ($oG()) {
		fn(b);
		return b
	}
	return b.impRun(leftRight)
}
b.basic = function (iY, i2x, i2y) {
	var b = this
	if ($onGAndUp()) {
		b.I(0, iY)
	}
	b.impRun(i2x, i2y)
	return b
}
b.impLinRun = function (iX, lVX) {
	var b = this
	iX = N(iX) ? iX : 4
	lVX = N(lVX) ? lVX : 40
	K.l ? (K.d ? b.I(-iX, 0) : b.lV(-lVX, 0)) :
			K.r ? (K.d ? b.I(iX, 0) : b.lV(lVX, 0)) : null
	return b
}
$con.jetpack = $con.symmetrical = $con.jumper = function (p) {
	var g = G(arguments)
	return g.p ? p.impRunUpDown(20, 20) : p.impRunUpDown(4, 22)
}//jetback/symm, jumper

$con.linJump = function (p, ht) {
	ht = -M.abs(N(ht) ? ht : 100)
	if ($onG('+')) {
		p.lV(0, ht)
	}
}
$con.playa = function (p) {
	p.isLegitJumping() ? p.lVJump() : p.impRun()
}
$con.linRun = function (p) {
	p.linRun(40, '*')
}
$con.slidey = function (p) {
	var g = G(arguments)
	g.n ? p.tricky(2, -6, -14, 10, 10) :
			!g.p ? p.tricky(2, -6, -14, 2) :
					p.tricky(0, -10, -30, 15)
}//slidey//standard//trickJump
$con.weird = function (p) {
	!G(arguments).n ? p.basic(-10, 4, 1) :
			p.basic(-14, 3)
}//getup//basic
w.p = w.player = function () {
	var w = this, g = G(arguments), o
	o = N(g.f) ?
	{sc: g.f, tk: g.s, enem: g.t} :
	{tk: g.f, enem: g.s}
	var p = w.pSpr(o.sc).re(0).fr(0).hCen()
	if (o.tk) {p.con(o.tk, o.enem)}
	if (!g.n) {p.nRt()}
	return p
}

w.playa = function () {
	return this.pSpr().fr(.4).re(.2)
			.con('playa').trig('foot')}


MARIOCANNON = MCN = function () {W({g: 500})//.footListener()
	//w.pf(800, 500, 600, 100);
	//w.pf(300, 530, 100, 100)
	//w.me().aD(10000)
	//w.box(800, 100).bS('guy')
	$.kD('u', function () {
		w.ball(200, 400, 10)
				.lV(40, -80)
	})
}


PBOX = POX = function () {
	W();
	_.e([1, 2, 3, 4, 5, 7, 8, 12, 18], function (n) {
		w.pBox(n)
	})
}
PSPR = SOX = function () {
	W()
	_.e([1, 2, 3, 4, 5, 7, 8, 12, 18], function (n) {
		w.pSpr(n)
	})
}
BOBOMTHRUST = BOB = function () {W({g: 0}).p().con('thrust')
	_.ev(2, function () {w.bobom()})
}
JPK = function () {W(100).p().con('jetpack')
}
SYM = function () {W(10).p().con('sym')
	_.in(6, function () {
		W(10).C('r').p().con('slidey')
		_.in(6, function () {
			W(10).C('w').p().con('weird')
		})
	})
}
 

IRLJ = function () {
	W(10).p().con('impRun').con('linJump')
}


b.impRun = function (x, y,y2) {var b = this, g = G(arguments);

	x = M.abs(x || 2); 
	y = -M.abs(y || 0);
	b.setDir()
	if (g.d) {var b = this
		//iX is how much left/right push when pushing up
		//iY is how much up push when pushing L/R
		//iY2 is up push giving otherwise (when no L/R!)
		return K.r ? b.I(x, y) : K.l ?
				b.I(-x, y) : b.I(0, y2) 
	}
	
	if ($oG('*')) {
		b.I(0, -440); jmp = false
		_.in(.2, function () {  jmp = true  })
		return b
	}
	
	K.r && K.l ? null  :
	K.r ? b.I(x, y) :
			K.l ? b.I(-x, y) :
					!g.n && $oG()  ?
							b.lV(0, 0) :
							null
	return b

}



$con.mar = function (p) {
	var g = G(arguments)
	if (g.p) {
		if (p.Y() > 2000) {p.XY(300, -300)}
			!$oG() ? p.impRun(10)
				: K.up ? p.jumping(180, 30)
				: p.linRun(40)
		return
	}
	
	!$oG() ? p.impRun(10, 0) :
			K.up ? p.linRun(10, -80, -90) :
					p.impLinRun(4, 40)
}

$con.imp = $con.impRun = function (p, x) {
	p.impRun(
			N(x) ? x : $oG() ? 20 : 180
	)
}

MAR = function () {
	p=W(10).p().con('mar')
}

IRJ = IRIJ = function () {

	W().G(400).planks().roof.kill()
	w.ship()
	w.p().de(1).con('imp')
}


w.planks=function(){
	var w=this
	w.plank(100, 400)
	w.plank(460, 400)
	w.plank(300, 400)
	w.plank(260, 300)
	w.plank(330, 200)
	w.plank(1030, 200)
	w.plank(700, 200).stat()
	return w
}



$level = b2d.level = function () {
	var g = G(arguments)
	W({W: 600, H: 300, g: 400, w: g.p ? null : 0})
	return p = w.playa()
}
LVL = function () {
	$level('+')
}
PLAYAS = PLS = function () {
	W()
	_.t(20, function () {
		w.playa()
	})
}
MEE = function () {W().foot()
	m = w.m()

	$.$(function () {  m.I(40, 0)  })

	$t(function () {
		if (b2d.onGround) {
			if (K.r) {m.I(1, 0)}
			if (K.l) {m.I(-1, 0)}
			if (K.u) {jump()}
		}
		else {//in air
			if (K.r) {m.I(.2, 0)}
			if (K.l) {m.I(-.2, 0)}
		}
	})
	function jump() {m.I(0, -28)
		b2d.onGround = false}
}
 
later = function () {
	b.upDown = function (up, down) {
		var b = this
		//just tell it how much
		// and (optionally) down
		// u want when pushed
		//otherwise, down defaults to up
		//if u want down to zero, set it yoursef..
		//but why u even using the 'upDown' fn bitch.. where yo 'justUp' fn at?
		up = N(up) ? up : 0
		down = N(down) ? down : up
		return K.u ? b.I(0, -up) :
				K.d ? b.I(0, down) : b
	}
	b.impRunUpDown = function (leftRight, up, down) {
		return this.impRun(leftRight)
				.upDown(up, down)
	}
	b.impDrop = function () {
		var b = this
		b.trig.foot = 'true'
		return b.I(0, 20)
	}
	b.jumpUp = function () {
		var b = this;
		b.canJump = false
		return b.p('jump').I(0, -44)
	}
	b.moveInDir = function () {
		var b = this, g = G(arguments)
		if (g.n) {
			return b.move(-b.speed)
		}
		var n = N(g.f) ? g.f : b.speed // not used?
		return b.I(b.direction() ? 3 : -3, 0)
	}
	b.mover = function () {
		var b = this
		b.dir('right')
		b.speed = 40
		return b
	}
	function toDep() {
		b2d.miniWorld = function () {
			W({g: 10, W: 500, H: 400, w: b2d.miniWalls}).p(2, 'thrust')
		}
	}
	
	alpha = function () {
		b.spd = function (s) {
			if (U(s)) {
				return this.speed
			}
			this.speed = s
			return this
		}
	}
	old = function () {
		$xImp = function () {
			return K.r && K.l ? 0 :
					K.r ? x :
							K.l ? -x : 0
		}
	}
	TESTPLAYER = function (con) {
		z()
		con = _pam.toLowerCase() || con || 'hoppy'
		W()//.random(3)
		p = w.p(con)
	}
}
b.yRt = function () {
	this.SetFixedRotation(false);
	return this
}
b._de = function () {
	var n = 1
	this.fs(function (f) {
		$l('#' + (n++) + ' de: ' + f.de())
	})
}
b.lJ = b.linJump = function (ht, y1, y2) {
	var b = this
	y1 = N(y1) ? y1 : -80
	y2 = N(y2) ? y2 : 0
	return K.r ? b.lV(ht, y2) :
			K.l ? b.lV(-ht, y2) :
					b.lV(0, y1)
}
b.linRun = function (vX, vY, vY2) {
	var b = this, g = G(arguments)
	vX = N(g.f) ? g.f : 40
	vY = N(g.s) ? g.s : g.p ? 10 : 0
	b.setDir()
	return g.m && !$oG() ? b :
			K.r ? b.lV(vX, vY) :
					K.l ? b.lV(-vX, g.n ? -vY : vY) :
							N(g.t) ? b.lV(0, g.t) :
									b
}
b.jump = function (x, y) {
	var b = this
	return b.jumpable('+') ?
			b.linRun(x, x - y, -y) : b
}
LINRUN = LUN = function () {
	W(100).db().p().con('linRun').con('linJump')
}
function plats() {
	w._pf = function () {
	}
//b.platify=function(){return this.stat().re(.3).K('plat')}
	w.pf = w.platform = function (x, y, W, H, c) {
		var w = this, g = G(arguments), b, o
		o = N(g.t) ? {x: g.f, y: g.s, w: g.t, h: g.fo, c: g.fi} :
		{x: g.f, y: g.s, c: g.t}
		if (N(g.t)) {
			b = !c ? w.A(
					$sB(x, y), $rF(W, H))
					: w.BRICK(x, y, W, H, c)
			return b.re(.3).K('plat')
		}
		else {
			c = g.t || 'e'
			return g.n ? w.pf(x, y, 160, 60, c) : //small
					!g.p ? w.pf(x, y, 200, 80, c) : //medium/normal
							w.pf(x, y, 240, 100, c) //large
		}
	}
	w.sqPf = function (x, y, l, c) {
		l = N(l) ? l : 80;
		return this.pf(x, y, l, l, c)
	}
	w.surf = w.surface = function (x, y, l, c, re, fr) {
		var w = this, g = G(arguments)
		c = c || 'h'
		var ht = g.n ? 20 : g.p ? 80 : 40
		var b = w.pf(x + l / 2, y, l, ht, c)
		if (N(re)) {
			b.re(re)
		}
		if (N(fr)) {
			b.fr(fr)
		}
		return b
	}
	w.grass = function (x, y, l) {
		return this.surf(x, y, l, 'g', .3, .3)
	}
	w.ice = function (x, y, l) {
		return this.surf(x, y, l, 'w', 0, 0)
	}
	w.rubber = function (x, y, l) {
		return this.surf(x, y, l, 'r', .7, .3)
	}
	w.ramp = function (x, y, wd, h, rt) {
		var w = this
		x = x || 300
		y = y || 300
		wd = wd || 100
		h = h || 100
		rt = rt || 10 //Math.toRadians(45)
		return w.S(x, y, $rF(wd, h))
				.fr(1).rt(rt).bS2(
				cjs.rect(wd, h, 'y')
		)
	}
	w.ramps = function () {
		var w = this
		_.e([
			[400, 350, 200, 300, 100],
			[500, 350, 300, 300, 60],
			[600, 350, 200, 300, 100],
			[700, 350, 300, 300, 60],
			[800, 350, 200, 300, 100],
			[1000, 350, 300, 300, 60],
			[1030, 350, 200, 300, 100],
			[1200, 350, 300, 300, 60]
		], function (rm) {
			w.ramp.apply(w, rm)
		})
		/*
		 this.ramp(400, 350, 200, 300, 100)
		 this.ramp(500, 350, 300, 300, 60)
		 this.ramp(600, 350, 200, 300, 100)
		 this.ramp(700, 350, 300, 300, 60)
		 this.ramp(800, 350, 200, 300, 100)
		 this.ramp(1000, 350, 300, 300, 60)
		 this.ramp(1030, 350, 200, 300, 100)
		 this.ramp(1200, 350, 300, 300, 60)
		 */
		return w
	}
	w.clouds = function (leftPt, y) {
		var w = this
		leftPt = N(leftPt) ? leftPt : 100
		y = N(y) ? y : 75
		_.t(100, function () {
			w.BUMP(
					M.r() * 400 + leftPt,
					y,
					M.r() * 30
			)
		})
		return w
	}
	w.plank = function (x, y, c) {
		var b = this.pf(x, y, c, '+').dyn()
		b.rt(M.r() * 360)
		_.in(M.r() * 2, function () {
			b.stat()
		})
		return b
	}
};
plats()
 