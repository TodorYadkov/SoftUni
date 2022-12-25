function parachut(inputArrMap) {
    const lastPosition = { linePosition: 0, jumperPos: 0 };
    let printLine = '';
    for (let i = 0; i < inputArrMap.length; i++) {
        let currentLine = inputArrMap[i];
        lastPosition.linePosition = i;

        if (currentLine.includes('o')) {
            lastPosition.linePosition = i;
            lastPosition.jumperPos = currentLine.indexOf('o');
        } else {
            if (currentLine.includes('<') || currentLine.includes('>')) {
                let windRight = currentLine.match(/>+/g) !== null ? currentLine.match(/>+/g).join('').length : 0;
                let windLeft = currentLine.match(/<+/g) !== null ? currentLine.match(/<+/g).join('').length : 0;
                let direction = windRight - windLeft;

                if (lastPosition.jumperPos + direction >= 0 &&
                    lastPosition.jumperPos + direction < currentLine.length) {
                    lastPosition.jumperPos += direction;
                }
            }
            
            let currentPosition = currentLine[lastPosition.jumperPos];
            if (currentPosition === '_') {
                printLine = 'Landed on the ground like a boss!';
                break;
            } else if (currentPosition === '~') {
                printLine = 'Drowned in the water like a cat!';
                break;
            } else if (currentPosition === '\/' || currentPosition === '\\' || currentPosition === '\|') {
                printLine = 'Got smacked on the rock like a dog!';
                break;
            }
        }
    }

    console.log(printLine)
    console.log(lastPosition.linePosition, lastPosition.jumperPos);
}
parachut([
    '--o----------------------',
    '>------------------------',
    '>------------------------',
    '>-----------------/\\-----',
    '-----------------/--\\----',
    '>---------/\\----/----\\---',
    '---------/--\\--/------\\--',
    '<-------/----\\/--------\\-',
    '\\------/----------------\\',
    '-\\____/------------------']);

// parachut([
//     '-------------o-<<--------',
//     '-------->>>>>------------',
//     '---------------->-<---<--',
//     '------<<<<<-------/\\--<--',
//     '--------------<--/-<\\----',
//     '>>--------/\\----/<-<-\\---',
//     '---------/<-\\--/------\\--',
//     '<-------/----\\/--------\\-',
//     '\\------/--------------<-\\',
//     '-\\___~/------<-----------']);


