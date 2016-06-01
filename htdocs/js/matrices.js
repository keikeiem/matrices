function inputData() {
	var test = document.getElementById('console').value;
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
