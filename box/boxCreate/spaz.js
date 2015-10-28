b.bS=b.bindSprite = function (img, scale, startingRotation) {
	var body = this, stage = body.GetWorld().stage
	//img is an image name
	//rotation is in degerees!
	scale = scale || .4
	startingRotation = N(startingRotation) ? startingRotation : 6
	stage.bm(img, function (bm) {//b=bm  //bm.rCenter('+')
		if (A(scale)) {
			bm.sXY(scale[0], scale[1])
		} else {
			bm.sXY(scale)
		}
		body.sprite = bm
		updateSprite()
		cjs.tick(updateSprite)
		function updateSprite() {
			bm.XY(body.X(), body.Y())
			bm.rotation = body.rot() + startingRotation
		}
	}, '-')
	return body
}
b.bS2=b.bindSprite2 = function (obj, startingRotation, x, y) {
	
	//takes any display object.  right now, just used for shapes
	//because bindSprite fetches the bm's by string.
	//but when i set up preloader, then i would use this i suppose :)
	x = N(x) ? x : 0;
	y = N(y) ? y : 0
	var body = this,
			stage = body.GetWorld().stage
	//  stage.A( displayObject = obj )
	startingRotation = N(startingRotation) ? startingRotation : 0
	body.sprites = body.sprites || []
	body.sprites.push(obj)
	body.sprite = obj
	body.sprite.a2(stage)
	//updateSprite() //update: now cjs.tick does do an autocall (automatically - automatically automatic!):) //needed to prevent a pause in the graphics until the NEXT tick?  //could have tick+, that calls once before setting up the listener!
	cjs.tick(function () {
		if (!body.sprite) {
			return
		}
		_.each(body.sprites, function (sprite) {
			sprite.XY(
					body.X() + (x || 0),
					body.Y() + (y || 0)
			)
			sprite.rotation = body.rot() + startingRotation
		})
	})
	return body
}
//sheets (sprite)
b.p = function (a, b, c, d) {
	if (O(this.sprite)) {
		this.sprite.p(a, b, c, d)
	}
	return this
}
b.s = function (a, b, c, d) {
	if (O(this.sprite)) {
		this.sprite.s(a, b, c, d)
	}
	return this
}
 

w.spB=w.spriteBox = function (data, x, y, scale) { //for 400 x 400 flash squares !!!
	x = N(x) ? x : 300;
	y = N(y) ? y : x //weird defaults - not intuitive
	var sprite = cjs.sprite(data).rXY(200).sXY(.5).a2(this.st)
	if (N(scale)) {
		sprite.sXY(scale)
	}
	return this.box(x, y, 100, 100).bindSprite2(
			sprite
	)
}
w.ch=w.chalk = function () {
	this.st.chalk.apply(this.st, arguments)
	return this
}
w.sh=w.show = function (showWhat) {
	var world = this, what
	I(function () {
		what = F(showWhat) ? showWhat(world) : window[showWhat]
		what = F(what) ? what() : what
		w.pen(what)
	}, 200)
	TEST = function () {
		w = b2d.W()
		num = 0
		w.show(function () {
			return num
		})
	}
}
w.dot = function () {
	this.s.dot.apply(this.st, arguments)
	return this
}
w.pen = function () {
	this.st.pen.apply(this.st, arguments)
	return this
}
w.fl=w.flash = function () {
	this.st.flash.apply(this.st, arguments)
	return this
}
w.bH=w.bindShape = function (shape, spr) {
	this.stage.A(shape)
	$t(
			function () {
				shape.XY(spr.X(), spr.Y())
			}
	)
}
w.C = function (color) {var w=this

	$(w.st.canvas).C(color)

	return w
}


b.thrustify = function () {
	var b = this.aD(.5)
	//takes a spritebox!
	//uses cjs.watchKeys()
	K({
		l: function () {b.rt(8, '-')},
		r: function () {b.rt(8, '+')},
		d: function () {b.push(.2).p('thrust')},
		u: function () {b.p('shoot')}
	})
	return b
}
LOOKNOVARS = SHIPSPRITE = SSP = function () {

	W({g: 1})

	//w.chalk('spritebox example')
	
	sp=	w.spriteBox({
				"framerate": 24,
				"images": ["thrusty.png"],
				"frames": [
					[0, 0, 512, 512, 0, -53, -36],
					[512, 0, 512, 512, 0, -53, -36],
					[1024, 0, 512, 512, 0, -53, -36],
					[0, 512, 512, 512, 0, -53, -36],
					[512, 512, 512, 512, 0, -53, -36],
					[1024, 512, 512, 512, 0, -53, -36],
					[0, 1024, 512, 512, 0, -53, -36],
					[512, 1024, 512, 512, 0, -53, -36],
					[1024, 1024, 512, 512, 0, -53, -36],
					[0, 1536, 512, 512, 0, -53, -36],
					[512, 1536, 512, 512, 0, -53, -36]],
				"animations": {
					"die": {"speed": 1, "frames": [8, 9, 10], next: false},
					"shoot": {"speed": 1, "frames": [1, 2, 3, 4, 0], next: false},
					"thrust": {"speed": 1, "frames": [5, 6, 7, 0], next: false}
				}
			})
			
	
	sp.thrustify()
	
	sp.con('thrust')
	 
}
 
//w.circ(200,130, 6).stat()
//w.circ(100,200, 6).stat()
//iceGround(  800   )
// grassGround(  300   )
/// 0:1,  300:1.1, 600:1.2
//  cjs.Tween.get(w.s).to({scaleX:1.3,scaleY:1.3}, 2000).to({scaleX:.7,scaleY:.7}, 6000).to({scaleX:1,scaleY:1}, 3000)
//cjs.Tween.removeAllTweens()
// w.st.tween(  [{x: p.dif().x},  000]   )
// w.st.tween(  [{y: p.dif().y},  1000]   )
//  cjs.Tween.get(w.s, {override:true}).to({y: p.dif().y}, 5000)
// cjs.Tween.get(w.s , {override:true}  ).to({  y: p.dif().y * w.st.scaleY }, 2000)
