var Cnt =0;
var increase = () => {Cnt++};
var decrease = () => {Cnt--};
var Counter = () =>{return Cnt};

module.exports = {
    inc: increase,
    dec: decrease,
    val: Counter
 } ;