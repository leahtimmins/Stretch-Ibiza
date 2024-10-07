import Container from "../elements/Container";

const SectionHeading = ({blok}) => {
    const {
        heading,
        backgroundColor
    } = blok;
    
    if(!heading) { return null }
    
    return (
        <div className={`relative w-full ${backgroundColor}`}>
            <Container>
                <div className="absolute -top-12 right-4 bottom-4 left-4">
                    <h2 className="text-glacialBold font-semibold text-5xl md:text-6xl z-40">{heading}</h2>
                </div>
            </Container>
        </div>
    )
            
    

    return null;
    
}

export default SectionHeading;