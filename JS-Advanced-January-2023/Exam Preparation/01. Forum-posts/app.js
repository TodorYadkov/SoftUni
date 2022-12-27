window.addEventListener("load", solve);

function solve() {
  document.getElementById("publish-btn").addEventListener('click', addPost);
  document.getElementById("clear-btn").addEventListener('click', clearPosts);
  const titleInput = document.getElementById("post-title");
  const categoryInput = document.getElementById("post-category");
  const contentInput = document.getElementById("post-content");
  
  function addPost(event) {
    event.preventDefault();
    
    const title = titleInput.value;
    const category = categoryInput.value;
    const content = contentInput.value;

    if (titleInput.value !== '' && categoryInput.value !== '' && contentInput.value !== '') {
      const li = createEl("li", false, "rpost", document.getElementById("review-list"));
      const article = createEl("article", false, false, li);
      const h4 = createEl("h4", title, false, article);
      const pCategory = createEl("p", `Category: ${category}`, false, article);
      const pContent = createEl("p", `Content: ${content}`, false, article);
      const btnApprove = createEl("button", "Approve", "action-btn approve", li);
      btnApprove.addEventListener("click", aprroveFn);
      const btnEdit = createEl("button", "Edit", "action-btn edit", li);
      btnEdit.addEventListener("click", editFn);
      titleInput.value = '';
      categoryInput.value = '';
      contentInput.value = '';
    }

    function editFn(event) {
      const parentLi = event.target.parentElement;
  
      console.log(title, category, content);
      titleInput.value = title;
      categoryInput.value = category;
      contentInput.value = content;
      parentLi.remove();
    }
  
    function aprroveFn(event) {
      const changeParent = document.getElementById("published-list");
      const parentLi = event.target.parentElement;
      const childrensLi = parentLi.children;
      changeParent.appendChild(parentLi);
      childrensLi[1].remove();
      childrensLi[1].remove();
    }
  }

  function createEl(el, content, attributeClassName, parent) {
    const element = document.createElement(el);

    if (content) {
      element.textContent = content;
    }

    if (attributeClassName) {
      element.className = attributeClassName;
    }

    parent.appendChild(element);
    return element;
  }

  

  function clearPosts() {
    document.getElementById("published-list").innerHTML = '';
  }
}