class List {
    constructor() {
        this.arr = [];
        this.size = this.arr.length;
    }

    add(element) {
        this.arr.push(element);
        this.arr.sort((a, b) => a - b);
        this.size++;
    };

    remove(index) {
        if (index < 0 || index > this.arr.length - 1) {
            throw new Error('This index is out of range');
        };

        this.arr.splice(index, 1);
        this.arr.sort((a, b) => a - b);
        this.size--;
    };

    get(index) {
        if (index < 0 || index > this.arr.length - 1) {
            throw new Error('This index is out of range');
        };

        return this.arr[index];
    };
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
