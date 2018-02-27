module.exports = function solveSudoku(matrix) {
	// colour solution
	var sudoku = matrix;

	function getp(sudoku, row, col) {
	var hash = {};

	for (var i = 0; i < 9; i++) {
		hash[ sudoku[col][i] ] = 1;
	}
	for (var i = 0; i < 9; i++) {
		hash[ sudoku[i][row] ] = 1;
	}
	for (var i = 0; i < 9; i++) {

		row = Math.floor(row / 3)*3 + ( i % 3);
		col = Math.floor(col / 3)*3 + Math.floor( i / 3 );

		hash[ sudoku[col][row] ] = 1;
	}
		
		var poss = [];
		for (var i = 1; i <= 9; i++) {
			if (!(i in hash)) {
				poss.push(i);
			}
			
		}
		// console.log(poss);
		return poss;
	};

		var indicies = [], n = 0;

		for (n = 0; n < 9*9; n++) {
			if (sudoku[ Math.floor(n / 9) ][ n % 9 ] === 0) {
				indicies.push({ position: n, p: undefined, i: 0 });
			}

		}
		// console.log(indicies)
		n = 0;

		while (n < indicies.length) {

			var currency = indicies[n];
			var col =Math.floor(currency.position / 9);
			var row = currency.position % 9;


			currency.p = currency.p || getp(sudoku, row, col);    
			if (currency.i >= currency.p.length) {
				sudoku[col][row] = 0;
				currency.i = 0;
				currency.p = undefined; 
				n--;
			} else {
				sudoku[col][row] = currency.p[currency.i++];
				n++;
			}
			
		}
		
		return sudoku;

}
