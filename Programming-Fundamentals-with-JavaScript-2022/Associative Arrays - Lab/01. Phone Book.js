function phoneBook(input) {
    let phoneBook = {};
    input = input
        .map(el => el.split(' '))
        .forEach(el => {
            let [name, phone] = el;
            phoneBook[name] = phone;
        });

    for (let name of Object.keys(phoneBook)) {
        console.log(name, '->', phoneBook[name])
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);

phoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']);