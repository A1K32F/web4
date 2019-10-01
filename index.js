console.log("Hello world")
;
const calculator = require ('./calculator');
console.log(calculator.add(5,3));
const counter=require('./counter');
console.log(counter.val());
counter.inc();
console.log(counter.val());
