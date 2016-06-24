/**
* @method Matrix
* @param {string} type 타입
*/
function Matrix(type) {
	this.type = type;
	this.common = new Common('Matrix');
	console.log(this);
}
/**
* @method parseMatrixString
* @param {string} stringValue 행렬을 나타내는 문자열
* @return {array} matrixArray 행렬 배열
*/
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

	if (this.compareColumnSize(matrixArray)) {
		for (var r = 0; r < matrixArray.length; r++) {
			for (var c = 0; c < matrixArray[r].length; c++) {
				matrixArray[r][c] = Number(matrixArray[r][c]);
			}
		}
	}
	return matrixArray;
}
/** 각 열의 사이즈 체크
* @method compareColumnSize
* @param {array} matrixArray 행렬 성분
* @return {boolean} result
*/
function compareColumnSize(matrixArray) {
	var result = true;
	for (var i = 0; i < matrixArray.length; i++) {
		for (var j = 0; j < matrixArray.length; j++) {
			if (matrixArray[i].length !== matrixArray[j].length) {
				result = false;
			}
		}
	}
	return result;
}
/**
* @method inputData
*/
function inputData() {
	if (document.getElementById('matrix_1')) {
		var firstMatrix = document.getElementById('matrix_1').value;
		if (firstMatrix) {
			firstMatrix = this.parseMatrixString(firstMatrix);
		}
		console.log(firstMatrix);
	}
}

Matrix.prototype.parseMatrixString = parseMatrixString;
Matrix.prototype.compareColumnSize = compareColumnSize;
Matrix.prototype.inputData = inputData;
