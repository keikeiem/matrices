function inputData() {
	if (document.getElementById('matrix_1')) {
		var firstMatrix = document.getElementById('matrix_1').value;
		if (firstMatrix) {
			firstMatrix = parseMatrixString(firstMatrix);
		}
	}
	if (document.getElementById('matrix_2')) {
		var secondMatrix = document.getElementById('matrix_2').value;
		if (secondMatrix) {
			secondMatrix = parseMatrixString(secondMatrix);
		}
	}
	test = test.split('[')[1];
	test = test.split(']')[0];
	test = test.split(';');
	var rows = test.length;
	var rank = [];
	for (var i = 0; i < rows; i++) {
		rank[i] = test[i].split(',').length;
	}
	console.log(rank);
	console.log(test);
}

function parseMatrixString(stringValue) {
	if (typeof stringValue !== 'string') {
		return;
	}
	var particle = stringValue.split('[')[1];
	particle = particle.split(']')[0];
	particle = particle.split(';');

}
