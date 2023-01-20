async function loadCommits() {
    const output = document.getElementById('commits');
    const username = document.getElementById('username').value;
    const repository = document.getElementById('repo').value;
    output.innerHTML = '';

    try {
        const respond = await fetch(`https://api.github.com/repos/${username}/${repository}/commits`);
        if (respond.ok === false) {
            throw new Error(`Error: ${respond.status} (Not Found)`);
        }

        const data = await respond.json();
        data.map(c => {
            const li = document.createElement('li');
            li.textContent = `${c.commit.author.name}: ${c.commit.message}`;
            output.appendChild(li);
        });

    } catch (err) {
        const li = document.createElement('li');
        li.textContent = `${err.message}`;
        output.appendChild(li);
    }
}

/* // Solution using fetch with then -> catch construct
function loadCommits() {
    const output = document.getElementById('commits');
    const username = document.getElementById('username').value;
    const repository = document.getElementById('repo').value;
    output.innerHTML = '';

    fetch(`https://api.github.com/repos/${username}/${repository}/commits`)
        .then(response => {
            if (response.ok === false) {
                throw new Error(`Error: ${response.status} (Not Found)`);
            }

            return response.json();
        })
        .then(data => {
            data.map(c => {
                const li = document.createElement('li');
                li.textContent = `${c.commit.author.name}: ${c.commit.message}`;
                output.appendChild(li);
            });
        })
        .catch(reject => {
            const li = document.createElement('li');
            li.textContent = `${reject.message}`;
            output.appendChild(li);
        });
} */