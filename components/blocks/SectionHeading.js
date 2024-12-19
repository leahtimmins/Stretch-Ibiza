import Container from "../elements/Container";

const SectionHeading = ({blok}) => {
    const {
        heading,
        backgroundColor,
        contentId,
        _uid,
        anchorIdentity
    } = blok;
    
    if(!heading) { return null }
    
    return (
        <div id={contentId ? contentId : anchorIdentity ? anchorIdentity : _uid} className={`relative w-full ${backgroundColor}`}>
            <Container>
                <div className="absolute -top-8 md:-top-10 right-4 bottom-4 left-4">
                    <h2 className="text-glacialBold font-semibold text-5xl md:text-6xl z-40">{heading}</h2>
                </div>
            </Container>
        </div>
    )
            
    

    return null;
    
}

export default SectionHeading;