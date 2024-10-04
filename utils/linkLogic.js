const linkLogic = (slug) => {
    if (slug == "home") {
        return "/"
    }
    return "/" + slug;
}

export default linkLogic;