import wikipediaUrlFormatter from "../formatter/wikipediaUrlFormatter";

const getWikipediaDefinition = (word, setter) => {
    let request = new XMLHttpRequest();
    // eslint-disable-next-line no-useless-concat
    request.open("GET", "https://eerie-alien-18238.herokuapp.com/" + wikipediaUrlFormatter(word), true);  // last parameter must be true
    request.responseType = "document";
    request.onload = function (e) {
        if (request.readyState === 4) {
            if (request.status === 200) {
                if (typeof setter !== 'undefined') {
                    const title = getWikipediaTitle(request)
                    const descriptionParagraphs = getWikipediaDescription(request)
                    const relateds = getWikipediaRelated(request)
                    const hasSevereWarning = getHasSevereWarning(request)

                    setter({
                        title: title,
                        description: descriptionParagraphs,
                        relateds: relateds,
                        hasSevereWarning: hasSevereWarning
                    })
                    return;
                }
            } else {
                console.error(request.status, request.statusText);

                setter({
                    title: 'Page non atteignable',
                    description: ["Désolé, Faucon n'a pas pu trouver la page."],
                    relateds: [],
                    hasSevereWarning: false
                })
                return;
            }
        }
    };
    request.onerror = function (e) {
        console.error(request.status, request.statusText);
    };
    request.send(null);  // no
}

const getWikipediaTitle = (request) => {
    return request.responseXML.querySelectorAll("h1")[0].innerText;
}

const getHasSevereWarning = (request) => {
    return request.responseXML.querySelectorAll(".bandeau-niveau-grave").length > 0;
}

const getWikipediaDescription = (request) => {
    const secondTitle = request.responseXML.querySelectorAll("h2:not(#mw-toc-heading)");
    let descriptionParagraphs = [];
    let potentialParagraph = secondTitle[0];
    if (potentialParagraph.innerText.includes('de navigation')) {
        potentialParagraph = secondTitle[1]
    }
    let i;
    for (i = 0; i < 8; i++) {
        if (potentialParagraph && potentialParagraph.tagName === 'P') {
            while (potentialParagraph !== null && potentialParagraph.tagName === 'P') {
                descriptionParagraphs.push(potentialParagraph)
                potentialParagraph = potentialParagraph.previousElementSibling
            }
            descriptionParagraphs = descriptionParagraphs.map(node => node.innerText).reverse()
            return descriptionParagraphs
        }
        if (potentialParagraph.previousElementSibling && potentialParagraph.previousElementSibling.tagName === 'SECTION') {
            let mobilePotentialParagraph = potentialParagraph.previousElementSibling.lastChild
            for (i = 0; i < 5; i++) {
                if (mobilePotentialParagraph && mobilePotentialParagraph.tagName === 'P') {
                    return Array.from(mobilePotentialParagraph.parentNode.childNodes)
                        .filter(node => node.tagName === 'P')
                        .map(node => node.innerText)
                }
                mobilePotentialParagraph = mobilePotentialParagraph.previousElementSibling;
            }
        }
        if (potentialParagraph.previousElementSibling === null) {
            potentialParagraph = potentialParagraph.parentNode
        } else {
            potentialParagraph = potentialParagraph.previousElementSibling
        }
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
            if (loopRelated.tagName === "SECTION" && Array.from(loopRelated.childNodes).length > 0) {
                if (Array.from(loopRelated.childNodes).filter(node => node.tagName === 'UL').length > 0) {
                    return Array.from(Array.from(loopRelated.childNodes).filter(node => node.tagName === 'UL')[0].childNodes)
                        .filter(node => node.tagName === 'LI')
                        .filter(node => !node.innerText.includes('Portail'))
                        .map(node => node.innerText)
                }

                if (Array.from(loopRelated.childNodes).filter(node => (node.className && node.className.includes("colonnes"))).length > 0) {
                    return Array.from(Array.from(loopRelated.childNodes).filter(node => (node.className && node.className.includes("colonnes")))[0].firstChild.nextSibling.childNodes)
                        .filter(node => node.tagName === 'LI')
                        .filter(node => !node.innerText.includes('Portail'))
                        .map(node => node.innerText)
                }
            }
            if (loopRelated.nextSibling === null) {
                loopRelated = loopRelated.parentNode
            } else {
                loopRelated = loopRelated.nextSibling
            }
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
            if (loopRelated.tagName === "SECTION" && Array.from(loopRelated.childNodes).length > 0) {
                if (Array.from(loopRelated.childNodes).filter(node => node.tagName === 'UL').length > 0) {
                    return Array.from(Array.from(loopRelated.childNodes).filter(node => node.tagName === 'UL')[0].childNodes)
                        .filter(node => node.tagName === 'LI')
                        .filter(node => !node.innerText.includes('Portail'))
                        .map(node => node.innerText)
                }
                if (Array.from(loopRelated.childNodes).filter(node => (node.className && node.className.includes("colonnes"))).length > 0) {
                    return Array.from(Array.from(loopRelated.childNodes).filter(node => (node.className && node.className.includes("colonnes")))[0].firstChild.childNodes)
                        .filter(node => node.tagName === 'LI')
                        .filter(node => !node.innerText.includes('Portail'))
                        .map(node => node.innerText)
                }
            }
            if (loopRelated.nextSibling === null) {
                loopRelated = loopRelated.parentNode
            } else {
                loopRelated = loopRelated.nextSibling
            }
        }
    }
    return [];

}
export default getWikipediaDefinition