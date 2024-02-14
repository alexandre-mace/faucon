const wikipediaUrlFormatter = (word) => {
    return encodeURIComponent("https://fr.wikipedia.org/wiki/" + word.replaceAll(' ', '_'))
}
export default wikipediaUrlFormatter;