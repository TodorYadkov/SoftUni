function armie(input) {
  let listOfArmies = {};
  let temp = input.shift();

  // Main loop
  while (input.length >= 0) {
    if (temp.includes("arrives")) {
      let leader = temp.split(" ").slice(0, -1).join(" ");
      listOfArmies[leader] = {};
    } else if (temp.includes(": ")) {
      let tempArray = temp.split(": ");
      let leader = tempArray.shift();
      let [armyName, armyCount] = tempArray.join(", ").split(", ");
      if (
        listOfArmies.hasOwnProperty(leader) &&
        listOfArmies[leader].hasOwnProperty(armyName) === false
      ) {
        listOfArmies[leader][armyName] = Number(armyCount);
      }
    } else if (temp.includes(" + ")) {
      let [armyName, armyCount] = temp.split(" + ");
      for (let prop in listOfArmies) {
        if (listOfArmies[prop].hasOwnProperty(armyName)) {
          listOfArmies[prop][armyName] += Number(armyCount);
        }
      }
    } else if (temp.includes("defeated")) {
      let leader = temp.split(" ").slice(0, -1).join(" ");
      if (listOfArmies.hasOwnProperty(leader)) {
        delete listOfArmies[leader];
      }
    }
    if (input.length === 0) {
      break;
    }
    temp = input.shift();
  }

  // Sort and print result
  sort(listOfArmies);

  // Function sort and print
  function sort(obj) {
    // Sorting by total count of armies DSC
    let objCountOrderDSC = {};
    for (let prop in obj) {
      let totalCount = 0;
      for (let el in obj[prop]) {
        totalCount += obj[prop][el];
      }
      objCountOrderDSC[prop] = totalCount;
    }
    let sortedTotalCountDSC = Object.entries(objCountOrderDSC).sort((a, b) => b[1] - a[1]);

    // Sorting each army by count in DSC and print final result
    for (let [name, count] of sortedTotalCountDSC) {
      let sortArmyCountDSC = [];
      // Print leader name and total count
      console.log(`${name}: ${count}`);
      // Sorting each armie count DSC
      for (let el in obj) {
        sortArmyCountDSC = Object.entries(obj[name]).sort((a, b) => b[1] - a[1]);
      }
      // Print each aremie
      for (let el of sortArmyCountDSC) {
        console.log(`>>> ${el[0]} - ${el[1]}`);
      }
    }
  }
}

armie([
  "Porter arrives",
  "Porter: Legion, 55000",
  "Legion + 302",
  "Porter: Retix, 3205",
]);

armie([
  "Rick Burr arrives",
  "Fergus: Wexamp, 30245",
  "Rick Burr: Juard, 50000",
  "Findlay arrives",
  "Findlay: Britox, 34540",
  "Wexamp + 6000",
  "Juard + 1350",
  "Britox + 4500",
  "Porter arrives",
  "Porter: Legion, 55000",
  "Legion + 302",
  "Rick Burr defeated",
  "Porter: Retix, 3205",
]);

armie([
  "Rick Burr arrives",
  "Findlay arrives",
  "Rick Burr: Juard, 1500",
  "Wexamp arrives",
  "Findlay: Wexamp, 34540",
  "Wexamp + 340",
  "Wexamp: Britox, 1155",
  "Wexamp: Juard, 43423",
]);
