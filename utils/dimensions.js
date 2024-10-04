const dimensions = (src) => {
    // image properties
    let url = src
    let dimensions = {
        width: url.split('/')[5].split('x')[0],
        height: url.split('/')[5].split('x')[1]
    }
    return dimensions;
}
export default dimensions;