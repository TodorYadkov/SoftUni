function arenaTier(inputData) {
  let gladiatorList = {};
  let index = 0;
  let command = inputData[index++].split(" -> ");

  while (command[0] !== "Ave Cesar") {
    if (command.length >= 3) {
      // add gladiator
      gladiatorList = addGladiator(command[0], command[1], command[2]);
    } else {
      //fight
      gladiatorList = fight(command[0], command[1]);
    }

    command = inputData[index++].split(" -> ");
    if (command[0] !== "Ave Cesar" && command.length < 3) {
      command = command.join(" vs ").split(" vs ");
    }
  }

  //print the sorted items
  order(gladiatorList);

  // add gladiator
  function addGladiator(name, techinque, skill) {
    skill = Number(skill);
    if (!gladiatorList.hasOwnProperty(name)) {
      gladiatorList[name] = {};
    }
    if (!gladiatorList[name].hasOwnProperty(techinque)) {
      gladiatorList[name][techinque] = skill;
    }
    if (gladiatorList[name][techinque] < skill) {
      gladiatorList[name][techinque] = skill;
    }
    return gladiatorList;
  }

  //fight
  function fight(playerOne, playerTwo) {
    if (
      gladiatorList.hasOwnProperty(playerOne) &&
      gladiatorList.hasOwnProperty(playerTwo)
    ) {
      let skillPointP1 = 0;
      let skillPointP2 = 0;
      let techinqueP1 = Object.keys(gladiatorList[playerOne]);
      let techinqueP2 = Object.keys(gladiatorList[playerTwo]);
      let isHaveFight = false;
      for (let name of Object.keys(gladiatorList[playerOne])) {
        skillPointP1 += gladiatorList[playerOne][name];
      }

      for (let name of Object.keys(gladiatorList[playerTwo])) {
        skillPointP2 += gladiatorList[playerTwo][name];
      }

      for (let player1 of techinqueP1) {
        for (let player2 of techinqueP2) {
          if (player1 === player2) isHaveFight = true;
        }
      }

      if (isHaveFight) {
        if (skillPointP1 > skillPointP2) {
          delete gladiatorList[playerTwo];
        } else if (skillPointP2 > skillPointP1) {
          delete gladiatorList[playerOne];
        }
      }
    }
    return gladiatorList;
  }

  //sort the elements
  function order(obj) {
    let sortNameASC = Object.keys(obj).sort((a, b) => a.localeCompare(b));

    let sklilPointTotalNoSortObj = {};
    for (let name of sortNameASC) {
      let currentTechnique = Object.entries(obj[name]);
      let tempTotalPoint = 0;
      for (let i = 0; i < currentTechnique.length; i++) {
        tempTotalPoint += currentTechnique[i][1];
      }
      sklilPointTotalNoSortObj[name] = tempTotalPoint;
    }

    let sortSkillsPointDSC = Object.entries(sklilPointTotalNoSortObj).sort(
      (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
    );
    for (let i = 0; i < sortSkillsPointDSC.length; i++) {
      console.log(
        `${sortSkillsPointDSC[i][0]}: ${sortSkillsPointDSC[i][1]} skill`
      );

      let sortedTechnique = Object.entries(
        gladiatorList[sortSkillsPointDSC[i][0]]
      ).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

      for (let i = 0; i < sortedTechnique.length; i++) {
        console.log(`- ${sortedTechnique[i][0]} <!> ${sortedTechnique[i][1]}`);
      }
    }
  }
}
arenaTier([
  "Peter -> BattleCry -> 400",
  "Alex -> PowerPunch -> 300",
  "Stefan -> Duck -> 200",
  "Stefan -> Buck -> 201",
  "Stefan -> Tiger -> 250",
  "Ave Cesar",
]);

arenaTier([
  "Peter -> Duck -> 400",
  "Julius -> Shield -> 150",
  "Gladius -> Heal -> 200",
  "Gladius -> Support -> 250",
  "Gladius -> Shield -> 250",
  "Peter vs Gladius",
  "Gladius vs Julius",
  "Gladius vs Maximilian",
  "Ave Cesar",
]);