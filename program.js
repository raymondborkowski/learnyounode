// Hello World #1
// console.log("HELLO WORLD");

// Baby Steps
/* let sum = 0;
const argsArr = process.argv;
for (let i = 2; i < process.argv.length; i++) {
  sum += process.argv[i] * 1;
}

console.log(sum);
*/

// My First I/O
/* const fs = require('fs');
const contentArr = fs.readFileSync(process.argv[2]).toString().split(/\n/);
console.log(contentArr.length - 1);
*/

// My First Async I/O
const readDir = require('./readDir.js');
const httpClient = require('./httpClient');
/* fs.readFile(process.argv[2], 'utf8', (err, dataStr) => {
  if (err) console.log(err);
  const arr = dataStr.split(/\n/);
  console.log(arr.length - 1);
});
*/

// Filtered LS

// fs.readdir(process.argv[2], (err, list) => {
//   list.forEach((file) => {
//     if (path.extname(file) === '.' + process.argv[3]) {
//       console.log(file);
//     }
//   });
// });

// Make it Modular

// readDir(process.argv[2], process.argv[3], (err, data) => {
// 	if (err) { throw err; }
// 	else { 
// 		data.forEach((file) => {
// 			console.log(file);
// 		});
// 	}
// });

// HTTP Stuff

httpClient(process.argv[2], (data) => {
	console.log(data);
});

