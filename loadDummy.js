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



    //var author = document.createElement('div');
    //author.innerHTML = article_item.children[2].textContent;
    //author.setAttribute("id", "author");
    //article.appendChild(author);

    var synopsis = document.createElement('div');
    console.log(article_item.children[3]);
    synopsis.innerHTML = article_item.children[3].outerHTML;//"Have yourself a merry little christmas.";
    synopsis.setAttribute("id", "synopsis");
    article.appendChild(synopsis);

    var linkdiv = document.createElement("div");
    linkdiv.setAttribute("id", "link");
    linkdiv.innerHTML = "Link: ";
    var link = document.createElement('a');
    linkdiv.appendChild(link);
    link.innerHTML = article_item.children[0].textContent;
    link.setAttribute("href", article_item.children[0].textContent);
    article.appendChild(linkdiv);

    articles.appendChild(article);

}