function matchFullName(string) {
    let pattern = /\b[A-Z]([a-z])+ [A-Z][a-z]+\b/g;
    let validName = string.match(pattern);
    console.log(validName.join(' '));
}

matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov");