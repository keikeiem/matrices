function inputData() {
	if (document.getElementById('matrix_1')) {
		var firstMatrix = document.getElementById('matrix_1').value;
		if (firstMatrix) {
			firstMatrix = parseMatrixString(firstMatrix);
		}
	}
	// if (document.getElementById('matrix_2')) {
	// 	var secondMatrix = document.getElementById('matrix_2').value;
	// 	if (secondMatrix) {
	// 		secondMatrix = parseMatrixString(secondMatrix);
	// 	}
	// }

	if (firstMatrix && firstMatrix.length) {
		console.log(firstMatrix);
		var matrix = makeStructure(firstMatrix);
		console.log(matrix);
	}
}

function parseMatrixString(stringValue) {
	if (typeof stringValue !== 'string') {
		return;
	}
	// stringValue.replace(' ', '');
	stringValue = stringValue.replace(/ /gi, '');
	var particle = stringValue.split('[')[1];
	particle = particle.split(']')[0];
	particle = particle.split(';');

	var matrixArray = [];
	for (var i = 0; i < particle.length; i++) {
		matrixArray.push(particle[i].split(','));
	}

	if (compareColumnSize(matrixArray)) {
		for (var r = 0; r < matrixArray.length; r++) {
			for (var c = 0; c < matrixArray[r].length; c++) {
				matrixArray[r][c] = Number(matrixArray[r][c]);
			}
		}
	}
	return matrixArray;
}

function compareColumnSize(vectorArray) {
	var result = true;
	for (var i = 0; i < vectorArray.length; i++) {
		for (var j = 0; j < vectorArray.length; j++) {
			if (vectorArray[i].length !== vectorArray[j].length) {
				result = false;
			}
		}
	}
	console.log(result);
	return result;
}

function makeStructure(matrixArray) {
	return {
		rows: matrixArray.length,
		columns: matrixArray[0].length,
		matrix: matrixArray
	};
}
