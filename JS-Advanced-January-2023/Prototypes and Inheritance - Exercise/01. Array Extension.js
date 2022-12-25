(function () {

    Array.prototype.last = function () {
        return this[this.length - 1];
    };

    Array.prototype.skip = function (n) {
        const newArr = [];
        for (let i = n; i < this.length; i++) {
            newArr.push(this[i]);
        }

        return newArr;
    };

    Array.prototype.take = function (n) {
        const newArr = [];
        for (let i = 0; i < n; i++) {
            newArr.push(this[i]);
        }

        return newArr;
    };

    Array.prototype.sum = function () {
        return this.reduce((acc, total) => acc + total, 0);
    };

    Array.prototype.average = function () {
        return this.reduce((acc, total) => acc + total, 0) / this.length;
    };

})();

const testArray = [1, 2, 3, 4, 5];
console.log(testArray.last());    // 5
console.log(testArray.skip(2));   // [ 3, 4, 5 ]
console.log(testArray.take(2));   // [ 1, 2 ]
console.log(testArray.sum());     // 15
console.log(testArray.average()); // 3