function solve([text]) {

    let punctuationReg = new RegExp(/[ ]*([.,!?:;])[ ]*/g);
    let dateReg = new RegExp(/\. (?=[0-9])/g);
    let trimReg = new RegExp(/" *(.+?) *"/g);
    let noSpaceReg = new RegExp(/([.,!?:;]) (?=[.,!?:;])/g);

    text = text.replace(punctuationReg, (match, firstGroup) => `${firstGroup} `);
    text = text.replace(dateReg,(match) => '.');
    text = text.replace(trimReg, (match, firstGroup) => `"${firstGroup}"`);
    text = text.replace(noSpaceReg, (match, firstGroup) => firstGroup);

    console.log(text);
}