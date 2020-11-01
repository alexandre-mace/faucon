const getWikipediaDefinition = (word, setter) => {
    let request = new XMLHttpRequest();
    // eslint-disable-next-line no-useless-concat
    request.open("GET", "https://eerie-alien-18238.herokuapp.com/" + "https://fr.wikipedia.org/wiki/" + word.replace(' ', '_'), true);  // last parameter must be true
    request.responseType = "document";
    request.onload = function (e) {
        if (request.readyState === 4) {
            if (request.status === 200) {
                if (typeof setter !== 'undefined') {
                    const title = getWikipediaTitle(request)
                    const descriptionParagraphs = getWikipediaDescription(request)
                    const relateds = getWikipediaRelated(request)

                    setter({
                        title: title,
                        description: descriptionParagraphs,
                        relateds: relateds
                    })
                }
            } else {
                console.error(request.status, request.statusText);
            }
        }
    };
    request.onerror = function (e) {
        console.error(request.status, request.statusText);
    };
    request.send(null);  // no
}

const getWikipediaTitle = (request) => {
    return request.responseXML.querySelectorAll("h1#firstHeading")[0].innerText;
}

const getWikipediaDescription = (request) => {
    const secondTitle = request.responseXML.querySelectorAll("h2:not(#mw-toc-heading)");
    let descriptionParagraphs = [];
    let potentialParagraph = secondTitle[1].previousSibling.previousSibling;

    if (potentialParagraph !== null) {
        if (potentialParagraph.tagName === 'DIV') {
            potentialParagraph = potentialParagraph.previousSibling.previousSibling
        }
        while (potentialParagraph !== null && potentialParagraph.tagName === 'P') {
            descriptionParagraphs.push(potentialParagraph)
            potentialParagraph = potentialParagraph.previousSibling
        }
        descriptionParagraphs = descriptionParagraphs.map(node => node.innerText).reverse()
        return descriptionParagraphs
    }

    return descriptionParagraphs
}

const getWikipediaRelated = (request) => {
    let relatedSection = request.responseXML.querySelector("#Articles_connexes");
    if (relatedSection !== null) {
        let relateds = [];
        var i;
        let loopRelated = relatedSection.parentNode;
        for (i = 0; i < 8; i++) {
            console.log(loopRelated)
            if (loopRelated && loopRelated.className && loopRelated.className.includes("colonnes")) {
                if (loopRelated.childNodes[1] && loopRelated.childNodes[1].tagName === 'UL') {
                    return Array.from(loopRelated.childNodes[1].childNodes)
                        .filter(node => node.tagName === 'LI')
                        .filter(node => !node.innerText.includes('Portail'))
                        .map(node => node.innerText)
                }
            }
            if (loopRelated && loopRelated.tagName === 'UL') {
                return Array.from(loopRelated.childNodes)
                    .filter(node => node.tagName === 'LI')
                    .filter(node => !node.innerText.includes('Portail'))
                    .map(node => node.innerText)
            }
            loopRelated = loopRelated.nextSibling
        }
        return relateds;
    }
    relatedSection = request.responseXML.querySelector("#Voir_aussi");
    if (relatedSection !== null) {
        let loopRelated = relatedSection.parentNode;
        for (i = 0; i < 5; i++) {
            if (loopRelated && loopRelated.tagName === 'UL') {
                return Array.from(loopRelated.childNodes)
                    .filter(node => node.tagName === 'LI')
                    .filter(node => !node.innerText.includes('Portail'))
                    .map(node => node.innerText)
            }
            loopRelated = loopRelated.nextSibling
        }
    }
    return [];

}
export default getWikipediaDefinition