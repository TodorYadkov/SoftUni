function worldTour(input) {
    const workArr = [...input];
    let travelStops = workArr.shift();

    while (workArr[0] !== 'Travel') {
        let command = workArr.shift().split(':');
        switch (command[0]) {
            case 'Add Stop':
                if (Number(command[1]) >= 0 && Number(command[1]) <= travelStops.length - 1) {
                    let firstPart = travelStops.substring(0, Number(command[1]));
                    let secondPart = command[2] + travelStops.substring(Number(command[1]));
                    travelStops = firstPart.concat(secondPart);
                }
                break;
            case 'Remove Stop':
                let startIndex = Number(command[1]);
                let endIndex = Number(command[2]);
                if ((startIndex >= 0 && startIndex <= travelStops.length - 1) &&
                    (endIndex > 0 && endIndex <= travelStops.length - 1)) {
                    let firstPart = travelStops.substring(0, Number(command[1]));
                    let secondPart = travelStops.substring(Number(command[2]) + 1);
                    travelStops = firstPart.concat(secondPart);
                }
                break;
            case 'Switch':
                if (travelStops.includes(command[1])) {
                    let regExp = new RegExp(`${command[1]}`, 'g');
                    travelStops = travelStops.replace(regExp, command[2]);
                };
                break;
        }
        console.log(travelStops);
    }

    console.log(`Ready for world tour! Planned stops: ${travelStops}`);
}

// worldTour(["Hawai::Cyprys-Greece", "Add Stop:7:Rome", "Remove Stop:11:16", "Switch:Hawai:Bulgaria", "Travel"]);
worldTour(["Albania:Bulgaria:Cyprus:Deuchland",
    "Add Stop:3:Nigeria",
    "Remove Stop:1:1",
    "Switch:Albania: Azərbaycan",
    "Travel"]);
