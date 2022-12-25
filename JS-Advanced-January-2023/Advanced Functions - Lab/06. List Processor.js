function listProcessor(arrInput) {
    const collection = [];
    const fnObj = {
        add,
        remove,
        print,
    }

    for (let el of arrInput) {
        let [fn, str] = el.split(' ');
        fnObj[fn](str);
    }

    function add(str) {
        collection.push(str);
    }

    function remove(str) {
        while (collection.includes(str)) {
            let indexStr = collection.indexOf(str);
            collection.splice(indexStr, 1);
        }
    }

    function print() {
        console.log(collection.join(','));
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);