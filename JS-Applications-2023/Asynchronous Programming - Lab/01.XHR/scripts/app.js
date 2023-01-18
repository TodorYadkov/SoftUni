async function loadRepos() {
   const output = document.getElementById('res');
   try {
      const response = await fetch('https://api.github.com/users/testnakov/repos');
      if (response.ok === false) {
         throw new Error(`Houston, we have a problem: ${response.statusText}`);
      }

      output.textContent = JSON.stringify(await response.json());
   } catch (err) {
     output.alert(err);
   }
}


/* // Solution using fetch with then -> catch construct
function loadRepos() {
   const output = document.getElementById('res');
   fetch('https://api.github.com/users/testnakov/repos')
      .then(response => response.json())
      .then(response => output.textContent = JSON.stringify(response))
      .catch(reject => output.alert(`Houston, we have a problem: ${reject.message}`));
} */
