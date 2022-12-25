function solve() {
  const typeToText = document.getElementById('naming-convention').value;
  const textToModify = document.getElementById('text').value.split(' ');
  let result = '';

  switch (typeToText) {
    case 'Camel Case':
      result = camelCase(textToModify);
      break;
    case 'Pascal Case':
      result = pascalCase(textToModify);
      break;
    default:
      result = 'Error!';
      break;
  }

  // final result 
  document.getElementById('result').textContent = result;

  // function
  function camelCase(arrText) {
    let word = '';
    for (let i = 0; i < arrText.length; i++) {
      let tempWord = '';

      for (let char of arrText[i]) {
        tempWord += char.toLocaleLowerCase();
      }

      if (i === 0) {
        word += tempWord;
      } else {
        tempWord = tempWord.replace(tempWord[0], tempWord[0].toLocaleUpperCase());
        word += tempWord;
      }
    }

    return word;
  }

  function pascalCase(arrText) {
    let word = '';
    for (let i = 0; i < arrText.length; i++) {
      let tempWord = '';

      for (let char of arrText[i]) {
        tempWord += char.toLocaleLowerCase();
      }

      tempWord = tempWord.replace(tempWord[0], tempWord[0].toLocaleUpperCase());
      word += tempWord;
    }

    return word;
  }
}
