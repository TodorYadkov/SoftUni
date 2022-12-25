function softUniReception(arr) {
    let efficiency = Number(arr.shift()) + Number(arr.shift()) + Number(arr.shift());
    let students = Number(arr.pop());
    let countHours = 0;
    
    while (students > 0) {
        students -= efficiency;
        countHours++;
        if (countHours % 4 === 0) {
            countHours++;
        }
    }

    console.log(`Time needed: ${countHours}h.`);
}
// softUniReception(['5','6','4','20']);
// softUniReception(['1','2','3','45']);
// softUniReception(['3', '2', '5', '40']);
// softUniReception(['1','1','1','9']);
softUniReception(['1','1','1','10']);