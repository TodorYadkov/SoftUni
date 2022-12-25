function sortNumbers(n1,n2,n3) {
    let descendingSort = [n1,n2,n3];
    descendingSort = descendingSort.sort().reverse();
    console.log(`${descendingSort[0]}\n${descendingSort[1]}\n${descendingSort[2]}`);
}
sortNumbers(1,9,5)