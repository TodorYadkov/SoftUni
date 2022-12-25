function getArticleGenerator(articles) {
    let numberEl = articles.length - 1;
    let count = 0;
    function nextArticle() {
        if (count > numberEl) {
            return;
        } else {
            let parent = document.getElementById('content');
            let article = document.createElement('article');
            article.textContent = articles[count++];

            parent.appendChild(article);
        }
    }

    return nextArticle;
}
