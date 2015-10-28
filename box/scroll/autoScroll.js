w = b2d.World.prototype
//sets b2d.onGround setter
//requires a body that has userData 'feet',
// and it simply see if it is colliding with anything
// if make this local, graphics dissapear!?
TESTKEYBOARD = TKB = function () {
	W({debug: true})
	//cjs.watchKeys()
	//w.footListener()
	//  p = w.addMe().controlMe('standard')
	b = w.ba().bS('guy')
	b.controlMe('basic')
}
 
w.goomba = function (x, y) {
	return this.box(x, y).bS('guy')
}
b.foot = function () {
	var b = this, w = b.W(), f
	w.b(function (cx) {
		if (f = cx.w('feet')) {
			f.B().trig.onGround = true
		}
	})
	w.end(function (cx) {
		if (cx.w('foot')) {
			b.trig.onGround = false
		}
	})
	return b
}
//b.feetListener =function(){return this.listener('feet')}
BOSS = function () {
	W({g: 500})
	p = w.addMe().aD(10000).con('mar')
	w.pf(800, 500, 600, 100);
	w.pf(300, 530, 100, 100)
	w.box(800, 100).bS('guy')
}

b2d.levelAutoScroll = function (num) {
	W({W: 600, H: 300, g: 400, w: 0}) 
	num = num || 4
 
	p = w.playa().nRt()
	
	setup()
	$t(function () {
		w.st.X(num, '-')//.pen(score++)
		if (p.relPos() < -100) {
			p.Y(0)
			p.X(p.X() - 200)
		}
	})
	
	function setup() {
		score = 0
		p.XY(350, 100)
		p.lV(0, 0)
		w.st.XY(0, 0)
	}
}
CASTLE= CAS= function () {
	W({g: 500, w: 0}).gv(500)//.db()
	//b2d.levelAutoScroll(1)
	//w.G(100)
	//b2d.levelAutoScroll(1)
	
	p = w.me().XY(300, -300)
			.aD(10000).con('mar2')
			
	num = 4 
	$t(function () {
		w.st.X(num, '-')
	})
	
	w.BRICK(800, 500, 600, 100,'r')
	w.BRICK(300, 530, 100, 100)
	w.BRICK(1400, 300, 600, 100)
	w.brick(1800, 500, 1000, 100)
	w.BRICK(1900, 200, 600, 100)
	w.foot()
	w.me().XY(700,100)
	//w.addTim(600, 100)
	w.goomba(800, 100)
}
LEV = function () {
	b2d.levelAutoScroll(1)
	 
	p.X(300)
	w.BRICK(200, 200, 100, 100, 'yellow')
	w.BRICK(240, 150, 180, 30)
	w.BRICK(420, 30, 180, 30)
	w.BRICK(560, 150, 300, 30)
	w.BRICK(600, 100, 180, 30)
	w.goomba(800).fric(0)
}

DUNGEON = DNG= RAMPS2 = function () {
	b2d.levelAutoScroll();
	w.ramps()
	
}