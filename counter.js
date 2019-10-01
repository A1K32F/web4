var Counter =0;
var increase = () => {Counter++};
var decrease = () => {Counter--};
var Counter = () =>{return Counter};

module.exports = {
    inc: increase,
    dec: decrease,
    val: Counter
};