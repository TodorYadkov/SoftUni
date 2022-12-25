class Stringer {
    constructor(stringInitial, lengthInitial) {
        this.innerString = stringInitial;
        this.innerLength = lengthInitial;
    };

    increase(length) {
        this.innerLength += Number(length);
    };

    decrease(length) {
        this.innerLength = this.innerLength - length <= 0 ? 0 : this.innerLength -= Number(length);
    };

    toString() {
        return this.innerLength < this.innerString.length ? this.innerString.substring(0, this.innerLength) + '...' : this.innerString;
    };
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
