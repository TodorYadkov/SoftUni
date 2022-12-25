function sortByTwoCriteria(input) {
    input.sort().sort((a,b) => a.length - b.length);
    
    console.log(input.join('\n'));
}
sortByTwoCriteria(['alpha', 'beta', 'gamma']);
sortByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortByTwoCriteria(['test','Deny','omen','Default']);