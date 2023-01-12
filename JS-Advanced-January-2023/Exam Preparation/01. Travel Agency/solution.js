window.addEventListener('load', solution);

function solution() {
  const submitBtn = document.getElementById('submitBTN');
  submitBtn.addEventListener('click', submitFn);
  const editBtn = document.getElementById('editBTN');
  const continueBtn = document.getElementById('continueBTN');

  function submitFn() {
    editBtn.addEventListener('click', editFn);
    continueBtn.addEventListener('click', continueFn);
    const sections = {
      infoPreview: document.getElementById('infoPreview'),
      divIdBlock: document.getElementById('block'),
    };
    const inputs = {
      fullName: document.getElementById('fname'),
      email: document.getElementById('email'),
      phone: document.getElementById('phone'),
      address: document.getElementById('address'),
      postalCode: document.getElementById('code'),
    };
    const fullName = inputs.fullName.value;
    const email = inputs.email.value;
    const phone = inputs.phone.value;
    const address = inputs.address.value;
    const postalCode = inputs.postalCode.value;

    if (fullName === '' || email === '') {
      return;
    }

    submitBtn.disabled = true;
    editBtn.disabled = false;
    continueBtn.disabled = false;

    generateEl('li', `Full Name: ${fullName}`, sections.infoPreview);
    generateEl('li', `Email: ${email}`, sections.infoPreview);
    generateEl('li', `Phone Number: ${phone}`, sections.infoPreview);
    generateEl('li', `Address: ${address}`, sections.infoPreview);
    generateEl('li', `Postal Code: ${postalCode}`, sections.infoPreview);

    //clear all input fields
    for (const field in inputs) {
      inputs[field].value = '';
    }

    function editFn() {
      submitBtn.disabled = false;
      editBtn.disabled = true;
      continueBtn.disabled = true;
      sections.infoPreview.innerHTML = '';

      inputs.fullName.value = fullName;
      inputs.email.value = email;
      inputs.phone.value = phone;
      inputs.address.value = address;
      inputs.postalCode.value = postalCode;
    }

    function continueFn() {
      sections.divIdBlock.innerHTML = '';
      generateEl('h3', 'Thank you for your reservation!', sections.divIdBlock);
    }
  }

  function generateEl(typeEl, content, parent) {
    const el = document.createElement(typeEl);
    el.textContent = content;
    parent.appendChild(el);
    return el;
  }
}