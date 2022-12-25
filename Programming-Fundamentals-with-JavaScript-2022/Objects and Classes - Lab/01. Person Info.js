function personInfo(arr) {
    let person = {
    firstName : arr[0],
    lastName : arr[1],
    age : arr[2]
    };

    console.log(person)
}
personInfo(["Peter","Pan","20"]);
personInfo("George","Smith","18")