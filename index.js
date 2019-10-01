console.log("Hello world")
;
const calculator = require ('./calculator');
console.log(calculator.add(5,3));
const Counter=require('./counter');
console.log(Counter.val());
Counter.inc();
console.log(Counter.val());
