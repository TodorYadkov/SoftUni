function extract(content) {
    const result = [];
    const pattern = /\((.+?)\)/g;
    const text = document.querySelector(`#${content}`).innerText;
    let match = pattern.exec(text);

    while (match != null) {
        result.push(match[1]);

        match = pattern.exec(text);
    }

    return result.join('; ');
}