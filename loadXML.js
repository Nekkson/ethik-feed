function loadXml(xmlfile_path) {
    fetch (xmlfile_path)
        .then (function (response) {
            // Antwort kommt als Text-String
            return response.text();
        })
        .then (function (data) {
            console.log (data);			  // schnell mal in der Konsole checken

            // String in ein XML-DOM-Objekt umwandeln
            let parser = new DOMParser (),
                xmlDoc = parser.parseFromString (data, 'text/xml');
            console.log (xmlDoc.getElementsByTagName ('article'));
            console.log ("item "  + xmlDoc.getElementsByTagName ('article')[0].children[0].textContent);
            var articles = xmlDoc.getElementsByTagName("article")
            var i;
            for (i = 0; i < articles.length; i++) {
                addArticle(articles[i], i);
            }
        }).catch (function (error) {
        console.log ("Fehler: bei Auslesen der XML-Datei " + error);
    });
}