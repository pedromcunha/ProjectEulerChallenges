var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function(request, response) {
    response.writeHead(200, {
        "Content-Type": "text/plain"
    });
    response.end("Hello World\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(8000);

// Put a friendly message on the terminal
console.log("Server running at http://127.0.0.1:8000/");
/*===============================================*/
/*============ Table of Contents ================*/
/*=============== THIRD PROBLEM ==21=============*/
/*=============== FOURTH PROBLEM =61=============*/
/*=============== Fifth PROBLEM ==83=============*/
/*===============================================*/


/*===============================================*/
/*=============== THIRD PROBLEM =================*/
/*===============================================*/

// function isWholeNum (num) {
// 	return num % 1 === 0;
// }


// function isPrime(num) {
// 	if(isWholeNum(num)) {
// 		return true;
// 	}
// 	if(!isWholeNum(num)) {
// 		return false;
// 	}
// 	else {
// 		return false;
// 	}
// }

// function findLargestPrimeFactor (num) {	
// 	var i = num;
// 	for(i; i < 0; i--) {
// 		if(isPrime(num/i) && i !== 1) {
// 			return num;
// 		}
// 		else {
// 			findLargestPrimeFactor(num);
// 		}
// 	}
// }

// console.log(findLargestPrimeFactor(24));

// i = 24

// num = 24

/*===============================================*/
/*=============== FOURTH PROBLEM ================*/
/*===============================================*/

// var sumOfSq = 0,
// 	sqOfSum = 0;

// for(var i = 0; i < 101; i++) {
// 	sumOfSq += Math.pow(i, 2);
// 	sqOfSum += i;
// }

// sqOfSum = Math.pow(sqOfSum, 2);

// function findDiff (a, b) {
// 	console.log(a - b);
// }


// findDiff(sqOfSum, sumOfSq);

/*===============================================*/
/*=============== FIFTH PROBLEM =================*/
/*===============================================*/
// function FIFTHPROBLEM() {
//     var divisibleEvenlyBy = [];

//     for (var i = 1; i < 100000000; i++) {
//     	divisibleEvenlyBy = [];
//         for (var ii = 1; ii < 21; ii++) {
//             if (i / ii % 2 === 0) {
//                 divisibleEvenlyBy.push(ii);
//             } 
//             if (divisibleEvenlyBy.length === 20) {
//             	console.log(divisibleEvenlyBy);
//                 return i;
//             }
//         }
//     }
// }

// console.log(FIFTHPROBLEM());