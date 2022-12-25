function movingTarget(input) {
    const workArr = input.slice();
    let target = workArr.shift().split(' ').map(x => Number(x));

    while (workArr[0] !== 'End') {
        let [command, index, value] = workArr.shift().split(' ');

        switch (command) {
            case 'Shoot':
                target = shoot(index, value);
                break;
            case 'Add':
                target = add(index, value);
                break;
            case 'Strike':
                target = strike(index, value);
                break;
        }
    }

    console.log(target.join('|'));

    function shoot(index, power) {
        index = Number(index);
        power = Number(power);
        if (index >= 0 && index < target.length) {
            if (target[index] - power <= 0) {
                target.splice(index, 1);
            } else {
                target[index] -= power;
            }
        }
        return target;
    }

    function add(index, value) {
        index = Number(index);
        value = Number(value);
        if (index >= 0 && index < target.length) {
            target.splice(index, 0, value);
            return target;
        } else {
            console.log('Invalid placement!');
            return target;
        }
    }

    function strike(index, radius) {
        index = Number(index);
        radius = Number(radius);

        if (index - radius >= 0 && index + radius < target.length) {
            target.splice(index - radius, (radius + radius) + 1);
            return target;
        } else {
            console.log(`Strike missed!`);
            return target;
        }
    }
}

movingTarget(["52 74 23 44 96 110",
    "Shoot 5 10",
    "Shoot 1 80",
    "Strike 2 1",
    "Add 22 3",
    "End"]);

movingTarget(["1 2 3 4 5",
    "Strike 0 1",
    "End"]);

movingTarget(['1 2 3 4 5 6 7 8 9','Strike 1 1','End']);