function solution() {
    const receips = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    };

    const storage = { protein: 0, carbohydrate: 0, fat: 0, flavour: 0 }
    const command = { restock, prepare, report };

    function manager(str) {
        let [cmd, ...tokens] = str.split(' ');
        return command[cmd](tokens);
    }

    // function
    function restock([microelement, quantity]) {
        storage[microelement] += Number(quantity);
        return 'Success';
    }

    function prepare([receip, quantity]) {
        let isReady = true;
        for (let ingredient in receips[receip]) {
            if (storage[ingredient] >= (receips[receip][ingredient] * Number(quantity))) {
                isReady = true;
            } else {
                isReady = false;
                return `Error: not enough ${ingredient} in stock`;
            }

        }

        if (isReady) {
            for (let ingredient in receips[receip]) {
                storage[ingredient] -= receips[receip][ingredient] * Number(quantity);
            }

            return 'Success';
        }
    }

    function report() {
        return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
    }

    return manager;
}


let manager = solution();
console.log(manager("restock flavour 50")); // Success 
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock 

console.log(manager('restock flavour 50 ')); // Success    
console.log(manager('prepare lemonade 4 ')); // Error: not enough carbohydrate in stock
console.log(manager('restock carbohydrate 10')); // Success
console.log(manager('restock flavour 10')); // Success
console.log(manager('prepare apple 1')); // Success
console.log(manager('restock fat 10')); // Success
console.log(manager('prepare burger 1')); // Success
console.log(manager('report')); // protein=0 carbohydrate=4 fat=3 flavour=55

console.log('New ======= New')
console.log(manager('prepare turkey 1')); // Error: not enough carbohydrate in stock
console.log(manager('restock protein 10')); // Success
console.log(manager('prepare turkey 1')); // Error: not enough carbohydrate in stock
console.log(manager('restock carbohydrate 10')); // Success
console.log(manager('prepare turkey 1')); // Error: not enough carbohydrate in stock
console.log(manager('restock fat 10')); // Success
console.log(manager('prepare turkey 1')); // Error: not enough carbohydrate in stock
console.log(manager('restock flavour 10')); // Success
console.log(manager('prepare turkey 1')); // Success
console.log(manager('report')); // protein=0 carbohydrate=0 fat=0 flavour=0
