var start = new Date; // засекли время

// что-то сделать
result = 0;
function sum(n) {
	while (n > 0) {
	  n -= 1;
		result += function(n-1);
    }
	return result;
}

console.log("sum is: " + sum(10));

var end = new Date; // конец измерения

console.log( "Цикл занял " + (end - start) + " ms" );