#include "matrix.h"
#include "operator.h"
#include <iostream>

using namespace std;

int main() {
	Matrix matrix;
	matrix.testValue = 5;
	matrix.test();

	BasicOperator basicOperator;
	int testValue = basicOperator.summation(1, 2);
	int testValue2 = basicOperator.subtraction(2, 1);

	cout << testValue << endl;
	cout << testValue2 << endl;
}
