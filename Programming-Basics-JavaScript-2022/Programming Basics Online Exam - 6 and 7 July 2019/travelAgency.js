function travelAgency(input) {
    let city = input[0];
    let typePacket = input[1];
    let vip = input[2];
    let days = Number(input[3]);
    let price = 0;
    let percent = 0;
    let isAllOk = true;
    let isPacketOrCityNotAvailabel = false;

    if (days < 1) {
        console.log("Days must be positive number!");
        isAllOk = false;
    }
    if (days > 7) {
        days--;
    }
    if (isAllOk) {
        switch (city) {
            case "Bansko":
            case "Borovets":
                switch (typePacket) {
                    case "withEquipment":
                        price = 100.00
                        percent = 0.90;
                        break;
                    case "noEquipment":
                        price = 80.00
                        percent = 0.95;
                        break;
                    default:
                        isAllOk = false;
                        isPacketOrCityNotAvailabel = true;
                        break;
                }
                break;
            case "Varna":
            case "Burgas":
                switch (typePacket) {
                    case "withBreakfast":
                        price = 130.00
                        percent = 0.88;
                        break;
                    case "noBreakfast":
                        price = 100.00
                        percent = 0.93;
                        break;
                    default:
                        isAllOk = false;
                        isPacketOrCityNotAvailabel = true;
                        break;
                }
                break;
            default:
                isAllOk = false;
                isPacketOrCityNotAvailabel = true;
                break;
        }
    }
    if (isPacketOrCityNotAvailabel) {
        console.log("Invalid input!");
    }
    if (isAllOk && vip === "yes") {
        price *= percent;
        price *= days;
    } else {
        price *= days;
    }
    if (isAllOk) {
        console.log(`The price is ${price.toFixed(2)}lv! Have a nice time!`);
    }
}
travelAgency(["Burgas",
    "nBreakfast",
    "no",
    "4"])
