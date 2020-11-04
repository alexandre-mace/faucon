const wikipediaUrlFormatter = (word) => {
    return "https://fr.wikipedia.org/wiki/" + word.replaceAll(' ', '_')
}
export default wikipediaUrlFormatter;