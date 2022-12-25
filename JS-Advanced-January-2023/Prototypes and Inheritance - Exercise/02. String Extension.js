(function () {
    String.prototype.ensureStart = function (str) {
        if (this.startsWith(str)) {
            return this.toString();
        }

        return str + this;
    };

    String.prototype.ensureEnd = function (str) {
        if (this.endsWith(str)) {
            return this.toString();
        }

        return this + str;
    };

    String.prototype.isEmpty = function () {
        return this.length === 0;
    };

    String.prototype.truncate = function (n) {
        if (this.length <= n) {
            return this.toString();
        }

        if (n < 4) {
            return '.'.repeat(n);
        } else {
            let lastIndex = this.substring(0, n - 2).lastIndexOf(' ');
            if (lastIndex !== -1) {
                return this.substring(0, lastIndex) + '...';
            } else {
                return this.substring(0, n - 3) + '...';
            }
        }
    };

    String.format = function (str, ...params) {
        for (let i = 0; i < params.length; i++) {
            str = str.replace(`{${i}}`, params[i]);
        }

        return str;
    };

})();

let str = 'my string';
str = str.ensureStart('my');
console.log(str);  // 'my string'
str = str.ensureStart('hello ');
console.log(str);  // 'hello my string'
str = str.ensureEnd('string');
console.log(str); // 'hello my string'
str = str.ensureEnd(' end');
console.log(str); // 'hello my string end'
console.log(str.isEmpty()); // false
str = '';
console.log(str.isEmpty()); // true
str = 'hello my string';
str = str.truncate(16);
console.log(str); // 'hello my string' // length is 15
str = str.truncate(14);
console.log(str); //'hello my...'     // length is 11
str = str.truncate(8);
console.log(str); // 'hello...'
str = str.truncate(4);
console.log(str); // 'h...'
str = str.truncate(2);
console.log(str); // '..'

str = String.format('The {0} {1} fox', 'quick', 'brown');
console.log(str); // 'The quick brown fox'
str = String.format('jumps {0} {1}', 'dog');
console.log(str); // 'jumps dog {1}'   // no parameter at 1
