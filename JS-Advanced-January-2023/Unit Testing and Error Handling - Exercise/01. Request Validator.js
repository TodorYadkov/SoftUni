function requestValidator(obj) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (!validMethods.includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }
    
    if (!(obj.hasOwnProperty('uri')) || obj.uri === '' || !(/^[a-zA-Z0-9.*]+$/g.test(obj.uri))) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!validVersion.includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (!(obj.hasOwnProperty('message')) || !(obj.message === '' || /^[^<>\\&'"]*$/g.test(obj.message))) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj;
}

console.log(requestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}));

// console.log(requestValidator({
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
// }));

// console.log(requestValidator({
//     method: 'POST',
//     uri: 'home.bash',
//     version: 'HTTP/2.0'
// }));

// console.log(requestValidator({
//     method: 'POST',
//     version: 'HTTP/2.0',
//     message: 'rm -rf /*'
// }));

// console.log(requestValidator({
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''
// }));

// console.log(requestValidator({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
// }));

// console.log(requestValidator({
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
// }));