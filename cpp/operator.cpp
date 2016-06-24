#include "operator.h"
#include <iostream>
using namespace std;

void BasicOperator::test()
{
	cout << "Operator 테스트" << endl;
}

int BasicOperator::summation(int a, int b)
{
	testValue = 5;
	cout << "웡" << testValue << endl;
	return a + b;
}

int BasicOperator::subtraction(int a, int b)
{
	return a - b;
}
