import getWikipediaDefinition from "../../infrastructure/repository/getWikipediaDefinition";

const getDefinition = (word, setter) => {
    return getWikipediaDefinition(word, setter)
}
export default getDefinition;