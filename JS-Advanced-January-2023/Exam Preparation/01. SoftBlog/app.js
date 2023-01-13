function solve() {
   document.querySelector('.btn.create').addEventListener('click', createNewPost);

   function createNewPost(event) {
      event.preventDefault();
      // Get needed sections
      const sections = {
         post: document.querySelector('.site-content section'),
         archive: document.querySelector('.archive-section ol'),
      };
      // Get user input
      const author = document.getElementById('creator').value;
      const title = document.getElementById('title').value;
      const category = document.getElementById('category').value;
      const content = document.getElementById('content').value;

      // Create HTML structure
      const article = generateEl('article', '', sections.post);
      const h1Title = generateEl('h1', title, article);
      // Make a strong element and add it to the pCategory parent
      const pCategory = generateEl('p', 'Category: ', article);
      generateEl('strong', category, pCategory);

      // Make a strong element and add it to the pAuthor parent
      const pAuthor = generateEl('p', 'Creator: ', article);
      generateEl('strong', author, pAuthor);

      // Make a p element, but it doesn't need to return a reference - we just create it
      generateEl('p', content, article);

      const divBtns = generateEl('div', '', article, { class: 'buttons' });
      const deleteBtn = generateEl('button', 'Delete', divBtns, { class: 'btn delete' });
      const archiveBtn = generateEl('button', 'Archive', divBtns, { class: 'btn archive' });
      deleteBtn.addEventListener('click', deleteFn);
      archiveBtn.addEventListener('click', archiveFn);

      function archiveFn() {
         sections.post.removeChild(article);
         generateEl('li', title, sections.archive);
         Array.from(sections.archive.children)
            .sort((a, b) => a.textContent.localeCompare(b.textContent))
            .forEach(child => sections.archive.appendChild(child));
      }

      function deleteFn() {
         article.remove();
      }
   }

   function generateEl(typeEl, content, parent, attributes) {
      const el = document.createElement(typeEl);
      el.textContent = content;

      if (attributes) {
         for (const attribute in attributes) {
            el.setAttribute(attribute, attributes[attribute]);
         }
      }

      parent.appendChild(el);
      return el;
   }
}