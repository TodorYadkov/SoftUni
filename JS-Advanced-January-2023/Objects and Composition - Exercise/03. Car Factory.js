function carFactory(orderObj) {

    return {
        model: orderObj.model,
        engine: engineFn(orderObj.power),
        carriage: carriageFn(orderObj.carriage, orderObj.color),
        wheels: wheelsFn(orderObj.wheelsize),
    };

    function engineFn(hp) {
        const engine = {};
        if (hp <= 90) {
            engine.power = 90;
            engine.volume = 1800;
        } else if (hp <= 120) {
            engine.power = 120;
            engine.volume = 2400;
        } else if (hp <= 200) {
            engine.power = 200;
            engine.volume = 3500;
        }

        return engine;
    }

    function carriageFn(type, color) {
        const carriageObj = {type, color};
        return carriageObj;
    }

    function wheelsFn(size) {
        const arrFourTyresSize = [0,0,0,0];
        size = size % 2 !== 0 ? Math.floor(size) : Math.floor(size - 1);
        
        return arrFourTyresSize.fill(size);
    }
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));

console.log(carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
));