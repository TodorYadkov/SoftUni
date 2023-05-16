abstract class Melon {
    weight: number;
    melonSort: string;
    _elementIndex: number;
    _element: string[] = ['Water', 'Fire', 'Earth', 'Air'];

    constructor(weight: number, melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
        this._elementIndex = this.elementIndex
        this._element = this.element;
    }

    get elementIndex() {
        return this.weight * this.melonSort.length;
    }

    get element() {
        return this._element;
    }

    toString() {
        return `Element: ${this._element[0]}\nSort: ${this.melonSort}\nElement Index: ${this._elementIndex}`;
    }
}

class Watermelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    get element(): string[] {
        return ['Water'];
    }
}

class Firemelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    get element(): string[] {
        return ['Fire'];
    }
}

class Earthmelon extends Melon {
    constructor(weigth: number, melonSort: string) {
        super(weigth, melonSort);
    }

    get element(): string[] {
        return ['Earth'];
    }
}

class Airmelon extends Melon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    get element(): string[] {
        return ['Air'];
    }
}

class Melolemonmelon extends Watermelon {
    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
    }

    get element() {
        return this._element;
    }

    set element(value: string[]) {
        this._element = value;
    }

    morph() {
        const curEl = this.element.shift();
        this.element.push(curEl!);
    }
}

// let test : Melon = new Melon(100, "Test");
//Throws error

let watermelon : Watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());

// Element: Water
// Sort: Kingsize
// Element Index: 100
