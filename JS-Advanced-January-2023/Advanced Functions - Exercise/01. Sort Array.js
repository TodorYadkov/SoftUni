function sortArray(sequence, type) {
    let typeSort = {
        asc: (seq) => { seq.sort((a, b) => a - b) },
        desc: (seq) => { seq.sort((a, b) => b - a) },
    }
    function sort(type) {
        this[type](sequence);
        return sequence;
    }

    return sort.call(typeSort,type);
}

sortArray([14, 7, 17, 6, 8], 'asc');
sortArray([14, 7, 17, 6, 8], 'desc');