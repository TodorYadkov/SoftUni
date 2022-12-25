function solve() {
  const textInput = document.getElementById('input').value;
  const divOutput = document.getElementById('output');
  const match = textInput.match(/(.+?)\./gm);

  if (match !== null) {
    while (match.length !== 0) {
      let p = document.createElement('p');
      p.textContent = match.splice(0, 3).join('');
      divOutput.appendChild(p);
    }
  }
  
}