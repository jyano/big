_time = function () {
	return new Date().getTime()
}
cjs.stopWatch = function () {
	var watch = function self(reset) {
		var res = _time() - self.time
		if (reset == '/') {
			self.reset()
		}
		return res
	}
	watch.reset = function () {
		this.time = new Date().getTime()
		return this
	}
	return watch.reset()
}

 

b = $pt.b

webLev = function () {
	w.roof.kill();
	w.right.kill();
	w.left.kill()
	block(400, 100)
	block(800, 0)
	block(1100, -50)
	block(1300, -200)
	function block(x, y) {
		return w.rect(x, y, 50, 50, 't').stat().K('randomRect')
	}
	w.goal(1800, 0)
}
b.up100=b.up100From=function(p){
	var b=this
	b.XY(p.X(), p.Y() - 100)
	return b
}
b.vX= function(){
	return this.lV().x
}
b.aVX=function(){
	return M.abs(this.vX())
}
b.makeWebTossBall=function(iX,iY){
	var b=this
	var web = b.web(3000)
	if(A(iX)){iY=iX[1];iX=iX[0]}
	web.ball.up100(b).I(iX,iY)
	return web
}
b.shootWeb = shootWeb = function () {

	//var p=this
	 
	if (p.canWeb) {if (p.oneWebCn()) {
			var n =  p.aVX() * 2
			p.makeWebTossBall(K.r ? n : K.l ? -n : 0, -30)}
		else if (p.noWebs() ) {
			p.makeWebTossBall(K.l ? [-30, -40] : K.r ? [30, -40] : [0, -70] )
		}
		
	}
		
		
		
	p.canWeb = false
}


b.firstWeb=function(){return this.webs && _.f(this.webs)}
b.noWebs=function(){
	return !this.webs || !this.webs[0]
}
b.oneWebCn=function(){
	return	this.iCn() && !this.webs[1]
}
b.lessThanTwoWebs=b.hasOneOrLessWebs = function () {
	var b = this
	return !b.webs || !b.webs[1]
}
webKey = function () {
	cjs.K = cjs.Keys
	
	$.key({
		
		right: function () {
			
			if (cjs.K.down) {
				p.didShoot = true
				if (!F(p.shotClock)) {p.shotClock = cjs.stopWatch()}}
			
			else {
				if (p.iCn()) {p.F(100, 0)}  else {p.I(8, 0)}
			}
			
			
		},
		left: function () {
			
			if (cjs.Keys.down) {
				p.didShoot = true
				if (!F(p.shotClock)) {p.shotClock = cjs.stopWatch()}
			}
			
			
			if (p.iCn()) {p.F(-250, -50)} else {p.I(-8, 0)}
		},
		up: shootWeb,
		
		RIGHT: function () {
			if (A(p.webs) && p.webs[1]) {
				p.webs[1].die()
			}
			if (cjs.Keys.down) {
				p.shootRight()
			}
		},
		LEFT: function () {
		
			if (A(p.webs) && p.webs[1]) {p.webs[1].die()}
			
			if (cjs.Keys.down) {p.shootLeft()}
			
		
		},
		
		
		UP: function () {
			var connected = _.rj(
					p.webs, function (wb) {return !wb.connected })
			if ( A(connected) && connected.length > 1) {
				_.f(connected).die()
			}
			p.canWeb = true
			p.shotForce = 0
		
		},
		
		
		
		
		DOWN: function () {
			if (!p.didShoot) {  if (p.webs[0]) {_.f(p.webs).die()}  }
			p.didShoot = false
			
		}
		
		
		
		
	})
}
b.iCn=b.isConnected = function () {
	return A(this.webs) ? !!_.fW(this.webs, {connected: true}) : false
}
b.bulRight = function (x, y) {
	var b = this, w = b.W()
	var bul = w.circ(b.X() + 80, b.Y() - 20, 6, 'w')
	if (N(y)) {
		bul.I(x, y)
	}
	return b
}
b.bulLeft = function (x, y) {
	var b = this, w = b.W()
	var bul = w.circ(b.X() - 80, b.Y() - 20, 6, 'w')
	if (N(y)) {
		bul.I(x, y)
	}
	return b
}

b.getTime = function () {var b = this
	var time = b.shotClock()
	b.shotClock.reset()
	return time
}
b.getForce = function () {
	var b = this
	var time = b.getTime()
	var force = (time > 2500) ? 2000 : (time > 500) ? time - 500 : 0
	force = force / 30
	return force > 66 ? 66 : force
}
b.shootRight = function () {
	var force = this.getForce(),
			iX = 100 - (force * 1.5),
			iY = -force
	//$l('time: ' + time + ' - force: ' + force.toFixed(2) + '- iX: ' + iX.toFixed(2) + ', iY: '+ iY.toFixed(2))
	this.bulRight(iX, iY)
}
b.shootLeft = function () {
	var b=this
	var force = this.getForce(),
			iX = -100 + (force * 1.5),
			iY = -force
	//$l('time: ' + time + ' - force: ' + force.toFixed(2) + '- iX: ' + iX.toFixed(2) + ', iY: '+ iY.toFixed(2))
	b.bulLeft(iX, iY)
	return b
}
w.webMe = function (x, y) {var w = this
	
	sw = cjs.stopWatch()
	
	return w.addMe(4).K('player')
			//.re(0).de(.1).fr(100)
			.XY(x, y).nRt()
	 
}
b.web = function (shouldKill) {var b = this, w = b.W()
	b.webs = b.webs || []
	var web = Web(b, shouldKill)
	
	b.webs.push ( web )
	var y = b.Y() - 100
	var x = b.X()

	var piece = web.addPiece(b, web.Piece(x, y))   //add first piece to player

	_.t(9, function (i) {
		piece = web.addPiece( piece,  web.Piece(x, y - i)  ) })  //add rest to each other
	web.addPiece(piece, web.ball = w.webBall(x, y))
	
	return web
}

w.webBall=function(x,y){
	return this.BALL(x, y - 100, 10, 'w')
			.K('webBall').fr(100)
}

w.webPiece=w.ropePiece = w.distLink = function (x, y) {
	return w.rect(x, y, 3, 5, 'y')
	.aD(10).K('webPiece')
}


function Web(p, shouldKill) {

	var web = {

		player: p, 
		p:p,
		connected: false,
		iCn:false, 
		pieces: [],
		
		attach: function (toWhat) {var wb=this
			wb.connected = true
			w.tightDist(toWhat, wb.ball)
			return wb
		},
		addPiece: function (toWhat, newPiece) {
		
		var wb=this
		
			w.tightDist(toWhat, newPiece)
			wb.pieces.push(newPiece)
		
			return newPiece
		
		},
		
		Piece: function (x, y) {var wb=this, web = this
			
			var piece = w.webPiece(x, y)
			piece.add = function (newPiece) { return web.addPiece(this, newPiece) }
			return piece
		},
		
		delPieces: function () {var wb=this 
		_.e(wb.pieces, function (b) {
			b.kill()});
			wb.pieces = []
			return wb
		},
		die: function () {var wb = this
			wb.delPieces()
			wb.p.webs = _.rj(wb.p.webs,
			 function (web) {return wb === web})
		}
	}
	
	
	if (shouldKill) {
		shouldKill = N(shouldKill) ? shouldKill : 1000
		shouldKill /=  1000
		_.in(shouldKill, function () {
			if (!web.connected) {web.die()}
		})
	}
		
	return web
}

//when a web is created it gets web.connnected=false
//when it hits certain things and forms a joint, then connnected->true
//then it just dies
//pressing DOWN should release the most recent of the connnectedWebs
//non connnected Webs can be shot off!
w.goal = function (x, y) {

	w.rect(x - 20, y - 15, 10, 40, 'y').stat()
	w.rect(x, y, 40, 10, 'y').stat()
	w.rect(x + 20, y - 15, 10, 40, 'y').stat()
}


WEBMAN = WEB = function () {
	W({g:80}).db();
	webLev();
	webKey()
	p = w.webMe(300, 300).de(.14).fr(1)
	p.canWeb = true
	/*
	w.b(function (cx) {
	
		var f = cx.w('webBall', 'randomRect')

		if (f) {    
			//p.canWeb=true

			var ball = f[0].B()

			var rect = f[1].B()

			var web = _.findWhere(p.webs, {ball: ball})

			if (!web.connected) { web.attach(rect) }
			
		}
	})
	*/
	
	w.cl( 'webBall', 'randomRect', function(rec, cx){
		
		
		var web = _.findWhere(p.webs, {ball: this.B() })

		if (!web.connected) {
			web.attach(rec.B())
		}
	
	})
	 
	 
	
	
	
	
	
	w.st.tickX(function () {
		return 600 - p.X()
	})
	w.st.tickY(function () {
		return 510 - p.Y()
	})
}


POPTART=WEBO1 = WB1=function () {
	 W(100).randRects()
	p = w.rect(400, 500, 40, 40, 'o')
	.rest(0).den(.1).fric(100)
	.fixedRot(true).K('player')
	p.hanging = false
	
	
	p.makeWeb = function () {
		
		var piece
		var p = this, y = this.Y() - 1, x = this.X()
		
		w = this.W()
		p.ropePieces = []
		piece = w.ropePiece(x, y)
		w.tightDist(p, piece)
		p.ropePieces.push(piece)
		T(9, function (i) {var newPiece
			newPiece = w.ropePiece(x, y - i)
			w.tightDist(piece, newPiece)
			p.ropePieces.push(newPiece)
			piece = newPiece
		})
		p.web = w.circ(x, y - 10, 10, 'd').K('web').de(1).re(0).fr(100)
		w.tightDist(piece, p.web)
		return p
	}
	p.destroyWeb = function () {
		var p = this
		p.web.kill()
		_.each(p.ropePieces, function (piece) {
			piece.kill()
		})
	}

	$.kD({
		left: function () {
			p.I(-100, 0)
		},
		right: function () {
			p.I(100, 0)
		},
		down: function () {
			if (p.hanging) {
				p.destroyWeb()
				p.hanging = false
			}
		},
		up: function () {
			if (!p.hanging) {
				p.makeWeb()
				p.web.I(0, -100)
			}
			else {
				p.I(0, -100)
			}
		}
	})
	
	w.beg(function (cx) {
		var fixt
		if ((fixt = cx.with('web', 'randomRect')) && !p.hanging) {
			p.hanging = w.tightDist(fixt[1].body(), p.web)
		}
		if (cx.with('web', 'floor')) {
			p.destroyWeb();
			p.hanging = false
		}
	})
}
HANGON= CLIFF=WEBOBEARD = WBB=function () {
	W(100).randRects()
	w.floor.kill()
	p = w.addMe(4).XY(300, 300).re(0).de(.1).fr(100).nRt().K('player')
	$.key({
		l: function () {
			if (p.iCn()) {
				p.I(-2, 0)
			}
			else {
				p.I(-20, 0)
			}
		},
		r: function () {
			if (p.iCn()) {
				p.I(2, 0)
			}
			else {
				p.I(20, 0)
			}
		},
		d: function () {
			var connectedWebs
			if (p.iCn()) {
				connectedWebs = _.where(p.webs, {connected: true})
				_.last(connectedWebs).die()
			}
		},
		u: function () {
			if (!p.iCn()) {
				p.web().ball.I(0, -100)
			}
			else {
				p.I(0, -10)
			}
		}
	})
	
	p.web().ball.I(0, -100)
	
	w.b(function (cx) {
		var fixt, web
		if ((fixt = cx.with('webBall', 'randomRect'))) {
			var ball = fixt[0].body(), rect = fixt[1].body(),
					web = _.findWhere(p.webs, {ball: ball})
			if (!web.connected) {
				web.attach(rect)
			}
		}
		if (cx.with('web', 'floor')) {
		}
	})
	w.show(function () {
		return 'is p connected?... ' + p.iCn()
	})
}
WEBWALL=WEBCLIMB=WEBO = function () {W(100)
	w.roof.kill()
	w.right.kill()
	w.left.kill()
	_.t(40, function (i) {
		w.rect(
				M.r() * 1100 + 20, M.r() * 1000 - 950,
				M.r() * 30 + 15, M.r() * 30 + 15
		).stat().K('randomRect')
	})
	
	p = w.addMe(4).XY(300, 300)
	.re(0).de(.1).fr(100)
	.nRt()
	.K('player')

//	p.iCn = function () {return A(this.webs)? (!!_.fW(this.webs, {connected: true})): false}
	
	p.killWebs = function () {}
	$.kD({
		l: function () {
			if (p.iCn()) {
				p.F(-100, 0)
			} else {
				p.I(-20, 0)
			}
		},
		r: function () {
			if (p.iCn()) {
				p.F(100, 0)
			} else {
				p.I(20, 0)
			}
		},
		d: function () {
			var connectedWebs;
			if (p.webs[0]) {
				_.l(p.webs).die()
			}
		},
		u: function () {
			if (!p.iCn()) {
				p.web().ball.I(0, -100)
			} else {
				p.I(0, -10)
			}
		}
	})
	w.b(function (cx) {
		var f, web
		if ((f = cx.w('webBall', 'randomRect'))) {
			var ball = f[0].B()
			var rect = f[1].B()
			var web = _.fW(p.webs, {ball: ball})
			if (!web.connected) {web.attach(rect)}
		}
	})
	//p.web().ball.I(0, -100)
	$t(function () {w.st.Y(510 - p.Y())})
	 
}