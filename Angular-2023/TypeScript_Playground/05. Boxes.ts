class Box<T> {
    private _boxes: T[] = [];

    add(element: T) {
        this._boxes.push(element);
    }

    remove(): T {
        if (this._boxes.length === 0) {
            throw new Error('Boxes is empty!');
        }

        return this._boxes.pop()!;
    }

    get count() {
        return this._boxes.length;
    }
}

// let box = new Box<Number>();
// box.add(1);
// box.add(2);
// box.add(3);
// console.log(box.count);

let box = new Box<String>();
box.add("Pesho");
box.add("Gosho");
console.log(box.count);
box.remove();
console.log(box.count);
