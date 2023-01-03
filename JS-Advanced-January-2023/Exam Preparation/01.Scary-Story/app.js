window.addEventListener('load', solve);

function solve() {
  const publishList = document.getElementById('preview-list');
  const publishBtn = document.getElementById('form-btn');
  publishBtn.addEventListener('click', publishFn);

  function publishFn(event) {
    event.preventDefault();

    const inputs = {
      firstName: document.getElementById('first-name'),
      lastName: document.getElementById('last-name'),
      age: document.getElementById('age'),
      storyTitle: document.getElementById('story-title'),
      genre: document.getElementById('genre'),
      story: document.getElementById('story'),
      fullName() {
        return this.firstName.value + ' ' + this.lastName.value;
      }
    };
    const firstName = inputs.firstName.value;
    const lastName = inputs.lastName.value;
    const age = inputs.age.value;
    const storyTitle = inputs.storyTitle.value;
    const genre = inputs.genre.value;
    const story = inputs.story.value;

    if (firstName === '' ||
      lastName === '' ||
      age === '' ||
      storyTitle === '' ||
      story === '') {
      return;
    }

    const li = generateEl('li', '', publishList, 'story-info');
    const article = generateEl('article', '', li);
    const h4 = generateEl('h4', `Name: ${inputs.fullName()}`, article);
    const pAge = generateEl('p', `Age: ${age}`, article);
    const pTitle = generateEl('p', `Title: ${storyTitle}`, article);
    const pGenre = generateEl('p', `Genre: ${genre}`, article);
    const pStory = generateEl('p', story, article);
    const saveBtn = generateEl('button', 'Save Story', li, 'save-btn');
    const editBtn = generateEl('button', 'Edit Story', li, 'edit-btn');
    const deleteBtn = generateEl('button', 'Delete Story', li, 'delete-btn');
    saveBtn.addEventListener('click', saveFn);
    editBtn.addEventListener('click', editFn);
    deleteBtn.addEventListener('click', deleteFn);

    // clear input fields
    for (let filed in inputs) {
      if (filed === 'genre') {
        inputs[filed].value = 'Disturbing';
      } else {
        inputs[filed].value = '';
      }
    };

    publishBtn.disabled = true;

    function editFn() {
      publishList.removeChild(li);
      publishBtn.disabled = false;
      inputs.firstName.value = firstName;
      inputs.lastName.value = lastName;
      inputs.age.value = age;
      inputs.storyTitle.value = storyTitle;
      inputs.genre.value = genre;
      inputs.story.value = story;
    }

    function saveFn() {
      const divIdMain = document.getElementById('main');
      Array.from(divIdMain.children).forEach(el => divIdMain.removeChild(el));
      generateEl('h1', 'Your scary story is saved!', divIdMain);
    }

    function deleteFn() {
      publishList.removeChild(li);
      publishBtn.disabled = false;
    }
  }

  function generateEl(typeEl, content, parentEl, nameClass) {
    const el = document.createElement(typeEl);
    el.textContent = content;

    if (nameClass) {
      el.className = nameClass;
    }

    parentEl.appendChild(el);
    return el;
  }
}