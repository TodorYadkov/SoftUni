async function loadRepos() {
	// read input field
	const username = document.getElementById('username').value;
	const list = document.getElementById('repos');

	try {
	// send request
	const response = await fetch(`https://api.github.com/users/${username}/repos`);

	if (response.ok === false) {
		throw new Error(`${response.status} ${response.statusText}`);
	}

	const data = await response.json();
	list.innerHTML = '';
	for (let repo of data) {
		list.innerHTML += `<li>
			<a href="${repo.html_url}">
				${repo.full_name}
			</a>
		</li>`;
	}
	} catch (error) {
		list.innerHTML = `${error.message}`;
	}
}




// Solution using fetch with then -> catch construct
/* function loadRepos() {
	read input field
	const username = document.getElementById('username').value;
	const list = document.getElementById('repos');
	send request
	fetch(`https://api.github.com/users/${username}/repos`)
		.then(handleResponse)
		.then(displayRepos)
		.catch(handleError);

	function handleResponse(response) {
		if (response.ok === false) {
			throw new Error(`${response.status} ${response.statusText}`);
		}

		return response.json();
	}

	display response data
	function displayRepos(data) {
		list.innerHTML = '';
		for (let repo of data) {
			list.innerHTML += `<li>
			<a href="${repo.html_url}">
				${repo.full_name}
			</a>
		</li>`;
		}
	}

	function handleError(error) {
		list.innerHTML = `${error.message}`;
	}
} */