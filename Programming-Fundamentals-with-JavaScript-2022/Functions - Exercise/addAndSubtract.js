function addAndSubtract(n1, n2, n3) { 

    let result = sum(n1,n2);
    console.log(subtract(n3)); 

    function sum(a,b) {
        return a + b;
    }

    function subtract(c) {
        return result - c;
    }
    
}
addAndSubtract(23, 6, 10);
addAndSubtract(1, 17, 30);
addAndSubtract(42, 58, 100);