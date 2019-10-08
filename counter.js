class Counter{
    cnt = 0;

    constructor(cnt_init) {
        if(cnt_init == null)
        {this.cnt=0;}
        else {

        this.cnt = cnt_init;}
    }

    increase(a) {
        this.cnt=this.cnt+a;
    }

    decrease(b) {
        this.cnt= this.cnt-b;
    }

    counter() {
        let cnt = this.cnt;
        return cnt;
    }
    reset()
    {
        this.cnt=0;
    }




}
module.exports = Counter;