function addArticle(article_item, index) {

    // Get articles element
    var articles = document.getElementById("articles");

    // Create element + set contents
    var article = document.createElement('div');//document.createElement("div id=\"article\"");
    article.setAttribute("id", "article");

    // Create article elements
    var title = document.createElement('div');
    title.innerHTML = article_item.children[1].textContent;
    title.setAttribute("id", "title");
    article.appendChild(title);

    var link = document.createElement('div');
    link.innerHTML = article_item.children[0].textContent;
    link.setAttribute("id", "link");
    article.appendChild(link);

    var author = document.createElement('div');
    author.innerHTML = article_item.children[2].textContent;
    author.setAttribute("id", "author");
    article.appendChild(author);

    var synopsis = document.createElement('div');
    synopsis.innerHTML = article_item.children[3].textContent;//"Have yourself a merry little christmas.";
    synopsis.setAttribute("id", "synopsis");
    article.appendChild(synopsis);

    articles.appendChild(article);

}