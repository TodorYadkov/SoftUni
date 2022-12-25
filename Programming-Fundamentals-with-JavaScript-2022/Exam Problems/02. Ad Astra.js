function adAstra(input) {
    const pattern = /(([\|\#])(?<food>[A-Z ]+)\2)(?<expDate>\d{2}\/\d{2}\/\d{2})\2(?<calories>\d+)\2/gi;
    const str = input[0];
    let regExp = pattern.exec(str);
    let totalCalories = 0;
    let dayNumberWithFood = 0;
    while (regExp !== null) {
        totalCalories += Number(regExp.groups.calories);
        regExp = pattern.exec(str);
    }
    dayNumberWithFood = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${dayNumberWithFood} days!`);

    regExp = pattern.exec(str);
    while (regExp !== null) {
        console.log(`Item: ${regExp.groups.food}, Best before: ${regExp.groups.expDate}, Nutrition: ${regExp.groups.calories}`);
        regExp = pattern.exec(str);
    }
}

adAstra(['#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|']);
adAstra([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ]);
adAstra(['Hello|#Invalid food#19/03/20#450|$5*(@' ]);