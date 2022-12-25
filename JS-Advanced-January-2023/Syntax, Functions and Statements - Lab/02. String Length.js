function stringLength(str1, str2, str3) {
    let sumAllStr = 0;
    let avgLength = 0;
    for (let i = 0; i < arguments.length; i++) {
        sumAllStr += arguments[i].length;
    }
    
    avgLength = Math.floor(sumAllStr / arguments.length);
    console.log(`${sumAllStr}\n${avgLength}`);
}

stringLength('chocolate', 'ice cream', 'cake');
stringLength('pasta', '5', '22.3');
