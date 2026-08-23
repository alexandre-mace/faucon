// Récupération via l'API officielle de Wikipédia (CORS natif avec origin=*),
// qui remplace l'ancien scraping du HTML passé par corsproxy.io : le proxy a
// changé d'API et la structure des pages bougeait sans cesse.
const API = "https://fr.wikipedia.org/w/api.php";

const getExtract = async (word) => {
    const params = new URLSearchParams({
        action: "query",
        prop: "extracts",
        exintro: "1",
        explaintext: "1",
        redirects: "1",
        format: "json",
        origin: "*",
        titles: word,
    });
    const response = await fetch(`${API}?${params}`);
    if (!response.ok) throw new Error(`extracts ${response.status}`);
    const data = await response.json();
    const page = Object.values(data.query.pages)[0];
    if (!page || page.missing !== undefined || !page.extract) {
        throw new Error("page manquante");
    }
    return page;
};

const getRelateds = async (word) => {
    const params = new URLSearchParams({
        action: "query",
        list: "search",
        srsearch: `morelike:${word}`,
        srlimit: "10",
        format: "json",
        origin: "*",
    });
    const response = await fetch(`${API}?${params}`);
    if (!response.ok) return [];
    const data = await response.json();
    return (data.query?.search ?? []).map((result) => result.title);
};

const getWikipediaDefinition = (word, setter) => {
    Promise.all([getExtract(word), getRelateds(word)])
        .then(([page, relateds]) => {
            setter({
                title: page.title,
                description: page.extract
                    .split("\n")
                    .map((paragraph) => paragraph.trim())
                    .filter(Boolean),
                relateds,
                hasSevereWarning: false,
            });
        })
        .catch((error) => {
            console.error(error);
            setter({
                title: "Page non atteignable",
                description: ["Désolé, Faucon n'a pas pu trouver la page."],
                relateds: [],
                hasSevereWarning: false,
            });
        });
};

export default getWikipediaDefinition;
