MEMORY = MEM = function () {
	st = s = cjs.S().A(ct = cjs.ct())
	grid = [
		['guy', 'me', 0, 0],
		[0, 'me', 0, 0],
		[0, 0, 0, 0],
		[0, 'me', 'chicks', 'me']
	]
	wGuy = function () {
		var x = 0, y = 0
		_.e(grid, function (row, i) {
			_.e(row, function (cell, j) {
				if (cell == 'guy') {
					x = j, y = i
				}
			})
		})
		return {x: x, y: y}
	}
	dGuy = function () {
		var p = wGuy()
		grid[p.y][p.x] = 0
		if (grid[p.y + 1][p.x] == 'chicks') {
			alert('win')
		}
		else if (grid[p.y + 1][p.x] == 0) {
			grid[p.y + 1][p.x] = 'guy'
			playerGrid()
		} else {
			alert('lose!')
		}
	}
	rGuy = function () {
		var p = wGuy()
		grid[p.y][p.x] = 0
		if (grid[p.y][p.x + 1] == 'chicks') {
			alert('win')
		}
		else if (grid[p.y][p.x + 1] == 0) {
			grid[p.y][p.x + 1] = 'guy'
			playerGrid()
		} else {
			alert('lose!')
		}
	}
	_.e(grid, function (row, i) {
		_.e(row, function (cell, j) {
			ct.A(
					cjs.rect(30, 40).XY(j * 100 + 100, i * 100 + 100))
			if (cell == 'me') {
				ct.bm('me',
						function (b) {
							b.XY(j * 100 + 100, i * 100 + 100
							).sXY(.1)
						})
			}
		})
	})
	playerGrid = function () {
		_.e(grid, function (row, i) {
			_.e(row, function (cell, j) {
				ct.A(cjs.rect(30, 40).XY(j * 100 + 100, i * 100 + 100))
				if (cell == 'guy' || cell == 'chicks') {
					ct.b(cell, function (b) {
						b.xy(j * 100 + 100, i * 100 + 100).sXY(.1)
					})
				}
			})
		})
	}
	_.in(3, function () {
		ct.remove()
		st.A(ct = cjs.ct())
		playerGrid()
	})
	$.kD('d', dGuy)
	$.kD('r', rGuy)
}