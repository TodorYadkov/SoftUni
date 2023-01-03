window.addEventListener('load', solve);

function solve() {
  const submitBtn = document.getElementById('form-btn');
  const clearBtn = document.getElementById('clear-btn');
  submitBtn.addEventListener('click', submitFn);
  clearBtn.addEventListener('click', clearFinishedFn);

  const sections = {
    inProgress: document.getElementById('in-progress'),
    finished: document.getElementById('finished'),
    counter: document.getElementById('progress-count'),
  };

  function submitFn(event) {
    event.preventDefault();
    const inputs = {
      firstName: document.getElementById('first-name'),
      lastName: document.getElementById('last-name'),
      age: document.getElementById('age'),
      gender: document.getElementById('genderSelect'),
      description: document.getElementById('task'),
      fullName() {
        return this.firstName.value + ' ' + this.lastName.value;
      },
    };
    const firstName = inputs.firstName.value;
    const lastName = inputs.lastName.value;
    const age = inputs.age.value;
    const gender = inputs.gender.value;
    const description = inputs.description.value;

    if (firstName === '' ||
      lastName === '' ||
      age === '' ||
      description === '') {
      return;
    }

    const li = generateEl('li', '', sections.inProgress, 'each-line');
    const article = generateEl('article', '', li);
    const h4 = generateEl('h4', inputs.fullName(), article);
    const pGender = generateEl('p', gender + ', ' + age, article);
    const pDescription = generateEl('p', 'Dish description: ' + description, article);
    const editBtn = generateEl('button', 'Edit', li, 'edit-btn');
    const completeBtn = generateEl('button', 'Mark as complete', li, 'complete-btn');
    editBtn.addEventListener('click', editFn);
    completeBtn.addEventListener('click', completeFn);

    sections.counter.textContent = Number(sections.counter.textContent) + 1;
    // clear input fields
    for (let field in inputs) {
      if (field === 'gender') {
        inputs[field].value = 'Male';
      } else {
        inputs[field].value = '';
      }
    }

    function editFn() {
      sections.inProgress.removeChild(li);
      inputs.firstName.value = firstName;
      inputs.lastName.value = lastName;
      inputs.age.value = age;
      inputs.gender.value = gender;
      inputs.description.value = description;
      sections.counter.textContent = Number(sections.counter.textContent) - 1;
    }

    function completeFn() {
      editBtn.remove();
      completeBtn.remove();
      sections.finished.appendChild(li);
      sections.counter.textContent = Number(sections.counter.textContent) - 1;
    }
  }

  function clearFinishedFn() {
    sections.finished.innerHTML = '';
  }

  function generateEl(typeEl, content, parent, nameClass) {
    const el = document.createElement(typeEl);
    el.textContent = content;
    if (nameClass) {
      el.className = nameClass;
    }

    parent.appendChild(el);
    return el;
  }
}