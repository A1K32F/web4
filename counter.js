class Counter {
    cnt = 0;

    constructor(cnt_init) {
        if(cnt_init == null)
        {this.cnt=0;}
        else {

        this.cnt = cnt_init;}
    }

    increase() {
        this.cnt++;
    }

    decrease() {
        this.cnt--;
    }

    counter() {
        let cnt = this.cnt;
        return cnt;
    }



}
module.exports = Counter;