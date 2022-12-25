function extensibleObject() {
    const proto = {};
    const inst = Object.create(proto);

    inst.extend = function (templates) {
        Object.entries(templates).forEach(([key, value]) => {
            if (typeof value === 'function') {
                proto[key] = value;
            } else {
                inst[key] = value;
            }
        });
    };

    return inst;
}

const myObj = extensibleObject();
console.log(myObj);

const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
};
myObj.extend(template);
console.log(myObj);