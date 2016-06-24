/**
* @method Common
* @param {string} type 타입
*/
function Common(type) {
	this.type = type;
	this.author = 'keikeiem';
	this.contact = 'keikeiem@aimtog.co.kr';
}

/**
* @method compareArray
* @param {array} arrayA 첫 번째 배열
* @param {array} arrayB 두 번째 배열
* @return {boolean} 배열 length 비교
*/
function compareArray(arrayA, arrayB) {
	// If either arrayA or arrayB is undefined, return false.
	if (!arrayA || !arrayB) {
		return false;
	}
	// If arrayA and arrayB have different length, return false.
	if (arrayA.length !== arrayB.length) {
		return false;
	}
	for (var i = 0; i < arrayA.length; i++) {
		if (arrayA[i] !== arrayB[i]) {
			return false;
		}
	}
	return true;
}

Common.prototype.compareArray = compareArray;
