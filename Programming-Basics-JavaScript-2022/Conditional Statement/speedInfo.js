function speedInfo(input) {
    let num = Number(input[0]);
  
    switch (true) {
        case (num <= 10):
            console.log("slow");
            break;
        case (num > 10 && num <= 50):
            console.log("average");
            break;
        case (num > 50 && num <= 150):
            console.log("fast");
            break;
        case (num > 150 && num <= 1000):
            console.log("ultra fast");
            break;
        case  (num > 1000):
            console.log("extremely fast");
            break;
    }
}
speedInfo([11])