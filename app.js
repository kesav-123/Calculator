const Calculator = require('./calculator');

const [a, b] = process.argv.slice(2).map(Number);

console.log(`Addition ${Calculator.add(a, b)}`);
console.log(`Subtraction ${Calculator.subtract(a, b)}`);
console.log(`Multiplication ${Calculator.multiply(a, b)}`);
