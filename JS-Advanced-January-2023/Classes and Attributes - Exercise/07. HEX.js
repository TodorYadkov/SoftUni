class Hex {
    constructor(number) {
        this.number = number;
    };

    valueOf() {
        return this.number;
    };

    toString() {
        return '0x' + this.number.toString(16).toLocaleUpperCase();
    };

    plus(data) {
        const newValue = this.number + Number(data.valueOf());
        return new Hex(newValue);
    };

    minus(data) {
        const newValue = this.number - Number(data.valueOf());
        return new Hex(newValue);
    };

    parse(hexNum) {
        return Number.parseInt(hexNum,16);
    };
}


let FF = new Hex(255);
console.log(FF.toString());
console.log(FF.valueOf() + 1 == 256);
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
console.log(a.minus(b).toString());