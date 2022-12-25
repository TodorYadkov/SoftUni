function deserializeString(input) {
    let arr = input.slice();
    let result = [];
    // get the maximum length of the input array
    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'end') {
            break;
        }
        let token = input[i].split(':');
        let index = token[1].split('/').map(n => Number(n));
        // insert each index into a array
        index.forEach(el => result.push(el));
    }
    // replace with character
    while (arr[0] !== 'end') {
        let token = arr.shift().split(':');
        let char = token[0];
        let index = token[1].split('/').map(n => Number(n));
       index.map(i => result.splice(i,1,char));
    }
    // print final result
    console.log(result.join(''));
}

deserializeString(['a:0/2/4/6', 'b:1/3/5', 'end']);
deserializeString(['a:0/3/5/11', 'v:1/4', 'j:2', 'm:6/9/15', 's:7/13', 'd:8/14', 'c:10', 'l:12', 'end']);