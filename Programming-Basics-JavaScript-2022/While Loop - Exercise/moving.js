function moving(input) {
    let widthFreeSpace = Number(input[0]);
    let lengthFreeSpace = Number(input[1]);
    let highFreeSpace = Number(input[2]);
    let allFreeSpaceCubic = widthFreeSpace * lengthFreeSpace * highFreeSpace;
    let indexBox = 3;
    let boxSpaceInput = Number(input[indexBox]);
    let indexDone = 3;
    let done = input[indexDone];
    let boxSpace = 0;

    while (done !== "Done") {
        boxSpace += boxSpaceInput;
        if (boxSpace > allFreeSpaceCubic) {
            console.log(`No more free space! You need ${Math.abs(allFreeSpaceCubic - boxSpace)} Cubic meters more.`);
            break;
        }
        indexBox ++;
        indexDone ++;
        boxSpaceInput = Number(input[indexBox]);
        done = input[indexDone];
    }
    if (done === "Done") {
        console.log(`${allFreeSpaceCubic - boxSpace} Cubic meters left.`);
    }
}
moving(["10", 
"1",
"2",
"4", 
"6",
"Done"])
