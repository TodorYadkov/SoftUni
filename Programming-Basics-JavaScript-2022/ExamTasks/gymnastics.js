function gymnastics(input) {
    let country = input[0];
    let equipmentGymnastics = input[1];
    let assement = 0;
    let neededPointPercent = 0;
   if (country == "Russia" && equipmentGymnastics == "ribbon") {
        assement = 9.1 + 9.40;
        neededPointPercent = 20 - assement;
        neededPointPercent = (neededPointPercent / 20) * 100;
   } else if (country == "Russia" && equipmentGymnastics == "hoop") {
       assement = 9.3 + 9.8;
       neededPointPercent = 20 - assement;
       neededPointPercent = (neededPointPercent / 20) * 100;
   } else if (country == "Russia" && equipmentGymnastics == "rope") {
       assement = 9.6 + 9;
       neededPointPercent = 20 - assement;
       neededPointPercent = (neededPointPercent / 20) * 100;
   } else if  (country == "Bulgaria" && equipmentGymnastics == "ribbon") {
       assement = 9.6 + 9.4;
       neededPointPercent = 20 - assement;
       neededPointPercent = (neededPointPercent / 20) * 100;
   } else if  (country == "Bulgaria" && equipmentGymnastics == "hoop") {
       assement = 9.55 + 9.75;
       neededPointPercent = 20 - assement;
       neededPointPercent = (neededPointPercent / 20) * 100;
   } else if  (country == "Bulgaria" && equipmentGymnastics == "rope") {
       assement = 9.5 + 9.4;
       neededPointPercent = 20 - assement;
       neededPointPercent = (neededPointPercent / 20) * 100;
   } else if  (country == "Italy" && equipmentGymnastics == "ribbon") {
        assement = 9.2 + 9.5;
        neededPointPercent = 20 - assement;
        neededPointPercent = (neededPointPercent / 20) * 100;
   } else if  (country == "Italy" && equipmentGymnastics == "hoop") {
        assement = 9.45 + 9.35;
        neededPointPercent = 20 - assement;
        neededPointPercent = (neededPointPercent / 20) * 100;
   } else if  (country == "Italy" && equipmentGymnastics == "rope") {
        assement = 9.7 + 9.15;
        neededPointPercent = 20 - assement;
        neededPointPercent = (neededPointPercent / 20) * 100;
   } else {

   }

   console.log(`The team of ${country} get ${assement.toFixed(3)} on ${equipmentGymnastics}.`);
   console.log(`${neededPointPercent.toFixed(2)}%`)
}
gymnastics(["Bulgaria","ribbon"])