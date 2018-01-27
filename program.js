// Hello World #1
// console.log("HELLO WORLD");

// Baby Steps
let sum = 0;
const argsArr = process.argv;
for (let i = 2; i < process.argv.length; i++) {
  sum += process.argv[i] * 1;
}

console.log(sum);
