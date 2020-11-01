const wikipediaParagraphFormatter = (string) => {
    return string.replace(/\[\d+]/g, '').replace(/,{2,}/g, '');
}
export default wikipediaParagraphFormatter