function salaryFunction(input) {
   let openTabs = Number(input[0]);
   let salaray = Number(input[1]);

   for (let i = 1; i <= openTabs; i++) {
        i ++;
        if (input[i] == "Facebook") {
            salaray -= 150;
        } else if (input[i] == "Instagram") {
            salaray -= 100;
        } else if (input[i] == "Reddit") {
            salaray -= 50;
        }
        i--;
        if (salaray <= 0) {
            console.log("You have lost your salary.");
            break;
        }
   }
   if (salaray > 0) {
        console.log(salaray);
   }
}
salaryFunction(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])
