var Matrix = {
	checkSize: function(matrix) {

	},
	summation: function(matrixA, matrixB) {
		if (Common.compareArray(matrixA, matrixB)) {
			console.log('Do it');
		}
	}
};

var Common = {
	// This function is used to check given two arrays are whether equal or not.
	compareArray: function(arrayA, arrayB) {
		// If either arrayA or arrayB is undefined, return false.
		if (!arrayA || !arrayB) {
			return false;
		}
		// If arrayA and arrayB have different length, return false.
		if (arrayA.length !== arrayB.length) {
			return false;
		}
		var compareStatement = true;
		for (var i = 0; i < arrayA.length; i++) {
			if (arrayA[i] !== arrayB[i]) {
				compareStatement = false;
			}
		}
		return compareStatement;
	}
};
