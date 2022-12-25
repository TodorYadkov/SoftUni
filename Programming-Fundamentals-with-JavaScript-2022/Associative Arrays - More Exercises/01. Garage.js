function garage(info) {
  let garageList = new Map();

  while (info.length > 0) {
    let tokens = info.shift().split(" - ");
    let garageNumber = Number(tokens.shift());

    if (garageList.has(garageNumber) === false) {
      garageList.set(garageNumber, []);
    }

    tokens = tokens.join(",");
    garageList.get(garageNumber).push(tokens);
  }

  for (let el of garageList) {
    let garageName = el.shift();
    let currentCar = el[0];

    console.log(`Garage № ${garageName}`);

    if (currentCar.length > 1) {
      while (currentCar.length > 0) {
        let token = currentCar[0];
        console.log(print(token));
        currentCar.shift();
      }
    } else {
        console.log(print(currentCar[0]));
    }
  }

  function print(string) {
    let result = `--- ${string.replace(/: /g, " - ")}`;
    return result;
  }
}
garage([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);

garage(['1 - color: green, fuel type: petrol','1 - color: dark red, manufacture: WV','2 - fuel type: diesel','3 - color: dark blue, fuel type: petrol']);
