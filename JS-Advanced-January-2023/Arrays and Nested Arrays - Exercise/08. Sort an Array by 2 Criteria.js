function sortArrayByTwoCriteria(input) {
    input.sort((a,b) => a.length - b.length || a.localeCompare(b)).forEach(el => console.log(el));
}
sortArrayByTwoCriteria(['alpha', 'beta', 'gamma']);
sortArrayByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
sortArrayByTwoCriteria(['test', 'Deny', 'omen', 'Default']);