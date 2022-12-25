function editElement(element, match, replacer) {
    const pattern = new RegExp(match,'g');
    const text = element.textContent;
    const result = text.replace(pattern, replacer);
    element.textContent = result;
}