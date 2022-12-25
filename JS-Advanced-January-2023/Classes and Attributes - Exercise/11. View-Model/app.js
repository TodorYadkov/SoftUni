class Textbox {
    constructor(selector, regex) {
        this._value = '';
        this._elements = document.querySelectorAll(selector);
        this._invalidSymbols = regex;
    };

    get value() {
        return this._value;
    };

    set value(newValue) {
        this._value = newValue;

        for (let el of this.elements) {
            el.value = newValue;
        };
    };

    get elements() {
        return this._elements;
    };

    isValid() {
        return !this._invalidSymbols.test(this.value);
    };
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click', function () { console.log(textbox.value); });
