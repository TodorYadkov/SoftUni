function wordTacker(input) {
    let result = {};
    let targetWords = input.shift().split(' ').map(el => result[el] = 0);
    
    for (let el of input) {
        if (result.hasOwnProperty(el)) {
            result[el] += 1;
        }
    }
   let sorted = Array.from(Object.entries(result))
   .sort((a,b) => b[1] - a[1])
   .forEach(el => console.log(el[0],'-',el[1]));
}
wordTacker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);

wordTacker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);