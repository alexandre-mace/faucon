import getWikipediaDefinition from "../infrastructure/repository/getWikipediaDefinition.js";

const getDefinition = (word, setter) => {
    return getWikipediaDefinition(word, setter)
}
export default getDefinition;