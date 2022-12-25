function echoType1(data) {
console.log(typeof(data) === "object" ? `${typeof (data)}\nParameter is not suitable for printing` 
    : `${typeof (data)}\n${data}`);
}
echoType1('Hello, JavaScript!');
echoType1(18);
echoType1(null);