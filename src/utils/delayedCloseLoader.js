const delayedCloseLoader = (setLoading) => {
    setTimeout(() => {
        setLoading(false)
    }, 0);
}
export default delayedCloseLoader;