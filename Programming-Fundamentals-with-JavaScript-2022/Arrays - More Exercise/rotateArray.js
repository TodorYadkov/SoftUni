function rotateArray(arr) {
    let rotation = Number(arr.pop());
    for (let i = 0; i < rotation; i++) {
        let tempNum = arr.pop();
        arr.splice(0,0,tempNum);
    }
    console.log(arr.join(' '));
}
rotateArray(['1', '2', '3', '4', '2']);
rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);