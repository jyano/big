$L('webShootBul', 'makeWeb', 'throwWeb', 'queryWebs', 'webKlas')
w.block = function (x, y) {
	var w = this
	return w.BOX(x, y, 50, 50, 't').stat().K('randomRect')
}
b.__W = function () {
	var b = this
	b._W = b._W || []
	return b
}
w.webMe = function (x, y) {
	var w = this
	var p = w.addMe(4).XY(x, y).nRt()
	p.__W()
	p._sw = cjs.stopWatch()
	p.canWeb = true
	return p.K('player')
}
b.webKey = function () {
	var b = this
	$.key({
		r: function () {
			if (K.d) {
				b.didShoot = true
				if (!F(b.shotClock)) {
					b.shotClock = cjs.stopWatch()
				}
			}
			else {
				if (b.hasAttachedWeb()) {
					b.F(100, 0)
				}
				else {
					b.I(8, 0)
				}
			}
		},
		l: function () {
			if (K.down) {
				b.didShoot = true
				if (!F(b.shotClock)) {
					b.shotClock = cjs.stopWatch()
				}
			}
			if (b.hasAttachedWeb()) {
				b.F(-250, -50)
			} else {
				b.I(-8, 0)
			}
		},
		u: function () {
			if (b.webable()) {
				if (b.noWebs()) {
					$l('toss first')
					b.tossFirst()
				}
				else {
					$l('toss second')
					b.tossSecond()
				}
			}
		},
		R: function () {
			if (A(b._W) && b._W[1]) {
				b._W[1].die()
			}
			if (K.d) {
				b.shootRight()
			}
		},
		L: function () {
			if (A(b._W) && b._W[1]) {
				b._W[1].die()
			}
			if (K.d) {
				b.shootLeft()
			}
		},
		U: function () {
			var aWebs = b.attachedWebs() || []
			if (_.z(aWebs) > 1 && _.f(aWebs)) {
				_.f(aWebs).die()
			}
			b.shotForce = 0
		},
		D: function () {
			if (!b.noWebs()) {
				b.killFirstWeb()
			}
			b.didShoot = false
		}
	})
	return b
}
b.webOfBall = function (ball) {
	return _.findWhere(this._W, {ball: ball})
}
b.numWebs = function () {
	return _.z(this._W)
}
b.looseWebs = function () {
	return _.rj(this.__W()._W, function (web) {
		return web.iCn
	})
}
b.numLooseWebs = function () {
	return _.z(this.looseWebs())
}
b.attachedWebs = function () {
	var b = this.__W()
	return _.rj(b._W, function (web) {
		return !web.iCn
	})
	////	return _.filter(b.p._W, function (web) {return web.isAttached()})
	//return _.filter(this._W, function (web) {return web.iCn})
}
b.numAttachedWebs = function () {
	return _.z(this.attachedWebs())
}
b.hasAttachedWeb = function () {
	return Boolean(this.firstAttachedWeb())
}
b.noWebs = function () {
	return !this.__W()._W[0]
}//return !this.hasWeb()
b.firstWeb = b.hasWeb = function () {
	return A(this._W) && this._W[0]
}
b.hadOnlyOneWebAndItsConnected = function () {
	return this.hasAttachedWeb() && !this._W[1]
}
b.lessThanTwoWebs = b.hasOneOrLessWebs = function () {
	var b = this
	return !b._W || !b._W[1]
}
b.firstAttachedWeb = function () {
	var b = this.__W()
	return _.findWhere(this._W, {iCn: 1})
}
b.webable = function () {
	var b = this
	var numW = b.numWebs()
	var numAW = b.numAttachedWebs()
	var numLW = b.numLooseWebs()
	return b.numWebs() < 4
}
b.killFirstWeb = function () {
	var b = this
	var web = _.f(b._W)
	if (web) {
		web.die()
	}
	return b
}
b.tossFirst = function () {//w.C('B')
	return this.makeWebTossBall(K.l ? [-30, -40] : K.r ? [30, -40] : [0, -70])
}

b.tossSecond = function () {
	$l('second')
	w.C('s')
	var b = this
	var n = M.abs(b.lV().x) * 2
	b.makeWebTossBall(K.r ? n : K.l ? -n : 0, -30)
}
$Web = function (b) {
	p._W.push(this)
	this.p = b
	this.iCn = 0
	this.webPiecesArr = []
}
wb = $Web.prototype
wb.attach = function (b1) {
	var wb = this
	wb.iCn = true
	wb.attached = true
	w.dist(b1, wb.ball, 1, 1000, 1000)
	return wb
}
wb.delPieces = function () {
	var wb = this
	_.e(wb.webPiecesArr, function (b) {
		b.kill()
	});
	wb.webPiecesArr = []
	return wb
}
wb.die = function () {
	var wb = this
	wb.delPieces()
	wb.p._W = _.rj(wb.p._W,
			function (web) {
				return wb === web
			})
}
wb.cn = function () {
	return this.iCn
}
wb.dieIfNotAttachedWithin = function (time) {
	var web = this
	if (!time) {
		return web
	}
	time = N(time) ? time : 1000
	time /= 1000
	_.in(time, function () {
		if (!web.cn()) {web.die()
		}
	})
	return web
}
wb.allMyPlayersWebs = function () {
	return this.p._W
}
wb.sibWebs = function () {var meWeb = this
	return _.rj(meWeb.allMyPlayersWebs(),
			function (web) {return meWeb === web})}
b.Web = function (shouldKill) {
	var b = this
	return (new $Web(b.__W()))
			.dieIfNotAttachedWithin(shouldKill)
}
w.webBall = function (x, y) {
	return this.BALL(x, y - 100, 10, 'w')
			.K('webBall').fr(100)
}
w.webPiece = w.ropePiece = w.distLink = function (x, y) {
	return this.BOX(x, y, 3, 5, 'y')
			.aD(10).K('webPiece')
}
b.up100 = b.up100From = function (p) {
	var b = this
	b.XY(p.X(), p.Y() - 100)
	return b
}

b.makeWebTossBall = function (iX, iY) {
	var b = this
	
 	var web = b.generateWeb(3000)
	
	if (A(iX)) {
		iY = iX[1];
		iX = iX[0]
	}
	
	web.ball.up100(b).I(iX, iY)
	return web
}

b.generateWeb = function (shouldKill) {
	var b = this, w = b.W()
	var web = b.Web(shouldKill)
	var y = b.Y() - 100
	var x = b.X()
	
	
	web.nextPiece = w.BOX(x, y, 3, 5, 'y').aD(10).K('webPiece')
	
	
	web.webPiecesArr.push(web.nextPiece)
	w.dist(b, web.nextPiece, 1, 1000, 1000)
	web.lastPiece = web.nextPiece
	_.t(9, function (i) {
		web.nextPiece = w.webRect(x, y - i)
		w.dist(web.lastPiece, web.nextPiece, 1, 1000, 1000)
		web.lastPiece = web.nextPiece
		web.webPiecesArr.push(web.lastPiece)
	})
	
	web.ball = w.webBall(x, y)
	 
	web.webPiecesArr.push(web.ball);
	w.dist(web.lastPiece, web.ball, 1, 1000, 1000)
	return web
}
w.webRect = function (x, y) {
	return this.BOX(x, y, 3, 5, 'y').aD(10).K('webPiece')
}
WEBMAN = WEB = function () {
	W().G(80)
	 
	w.roof.kill();
	w.right.kill();
	w.left.kill()
	 
	w.block(400, 100)
	w.block(800, 0)
	w.block(1100, -50)
	w.block(1300, -200)
	w.goal(1800, 0) 
	p = w.webMe(300, 300).de(.14).fr(1)
	p.webKey()

 	
	w.cl('webBall', 'randomRect', function (rec, cx) {
		var ballF = this, ball = ballF.B()
		var web = p.webOfBall(ball)
		if (!web.attached) {
			web.attach(rec.B())
		}
	})
 
	w.st.tickX(function () {
		return 600 - p.X()
	})
	w.st.tickY(function () {
		return 510 - p.Y()
	})
	
 	_.ev(3, function () {$l('nun webs: ' + p.numWebs() + ',   num p attached webs: ' + p.numAttachedWebs())})
	
 
}
POPTART = WEBO1 = WB1 = function () {
	W(100)//.randRects()
	
	p = w.BOX(400, 500, 40, 40, 'o')
			.re(0).de(.1).fr(100)
			.nRt().K('player')
			
	p.hanging = false
	p.makeWeb = function () {
		var piece
		var p = this, y = this.Y() - 1, x = this.X()
		w = this.W()
		p.ropePieces = []
		piece = w.ropePiece(x, y)
		w.tightDist(p, piece)
		p.ropePieces.push(piece)
		T(9, function (i) {
			var newPiece
			newPiece = w.ropePiece(x, y - i)
			w.tightDist(piece, newPiece)
			p.ropePieces.push(newPiece)
			piece = newPiece
		})
		p.web = w.BALL(x, y - 10, 10, 'd').K('web').de(1).re(0).fr(100)
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
		l: function () {
			p.I(-100, 0)
		},
		r: function () {
			p.I(100, 0)
		},
		d: function () {
			if (p.hanging) {
				p.destroyWeb()
				p.hanging = false
			}
		},
		u: function () {
			if (!p.hanging) {
				p.makeWeb()
				p.web.I(0, -100)
			}
			else {
				p.I(0, -100)
			}
		}
	
	})
	
	
	w.b(function (cx) {
		if(!p.hanging){cx.w('web', 'randomRect', function(rR){
			p.hanging = w.tightDist( rR.B(), p.web)})}
		cx.w('web', 'floor', function() {p.destroyWeb();p.hanging = false})
	})

}
HANGON = CLIFF = WEBOBEARD = WBB = function () {
	W(100).randRects()
	w.floor.kill()
	p = w.addMe(4).XY(300, 300).re(0).de(.1).fr(100).nRt().K('player')
	$.key({
		l: function () {
			if (p.hasAttachedWeb()) {
				p.I(-2, 0)
			}
			else {
				p.I(-20, 0)
			}
		},
		r: function () {
			if (p.hasAttachedWeb()) {
				p.I(2, 0)
			}
			else {
				p.I(20, 0)
			}
		},
		d: function () {
			
			var aW = p.attachedWebs()
			
			if(aW[0]){aW[0].die()}
			
			
		},
		
		
		u: function () {
			if (!p.hasAttachedWeb()) {
				p.generateWeb().ball.I(0, -100)
			}
			else {
				p.I(0, -10)
			}
		}
	})
	p.generateWeb().ball.I(0, -100)
	
	w.cl('webBall', 'randomRect', function(rec) {
		var ball = this.B()
		var  rect = rec.B()
		var web = _.findWhere(p._W, {ball: ball})
		if (!web.iCn) {web.attach(rect)}
	})
	
	w.show(function () {
		return 'is p iCn?... ' + p.hasAttachedWeb()
	})
}
WEBO = function () {
	W(100)
 
	  w.roof.Y(-600)
	w.right.kill()
	w.left.kill()
	_.t(40, function (i) {
		w.BOX(
				M.r() * 1100 + 20, M.r() * 1000 - 950,
				M.r() * 30 + 15, M.r() * 30 + 15
		).stat().K('randomRect')
	})
	p = w.addMe(4).XY(300, 300)
			.re(0).de(.1).fr(100)
			.nRt()
			.K('player')
 	 
	$.kD({
		l: function () {
			if (p.hasAttachedWeb()) {
				p.F(-100, 0)
			} else {
				p.I(-20, 0)
			}
		},
		r: function () {
			if (p.hasAttachedWeb()) {
				p.F(100, 0)
			} else {
				p.I(20, 0)
			}
		},
		d: function () {
			var connectedWebs;
			if (p._W[0]) {
				_.l(p._W).die()
			}
		},
		u: function () {
			if (!p.hasAttachedWeb()) {
				p.generateWeb().ball.I(0, -100)
			} else {
				p.I(0, -10)
			}
		}
	})
	
	w.cl('webBall', 'randomRect', function(rR) {
	
			var ball = this.B()
			var rect = rR.B()
			var web = _.fW(p._W, {ball: ball})
			if (! p.attachedWebs()[0] ) {
				web.attach(rect)
			}
		
	})
	
	
 $t(function () {
		w.st.Y(510 - p.Y())
	})
} 