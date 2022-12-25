function integerAndFloat(n1,n2,n3) {
    let sum = Number(n1 + n2 + n3);
    console.log(Number.isInteger(sum) ? sum + ' - Integer' 
    : sum + ' - Float');
}
integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);