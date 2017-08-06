/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

numFirst = 1;
numSecond = 2;
max = 4000000;
sum = 2;
fibonacciArry = [1, 2];

while (numSecond < max) {
    nunTree = numFirst;
    numFirst = numSecond;
    numSecond = numFirst + nunTree;
    fibonacciArry.push(numSecond);
    if (numSecond % 2 == 0) {
      sum = numSecond + sum;
    }
}   

console.log('------------------------------------');
console.log(fibonacciArry);
console.log('------------------------------------');
console.log('Resposta da soma: ',sum);