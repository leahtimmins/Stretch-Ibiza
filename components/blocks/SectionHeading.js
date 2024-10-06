import Container from "../elements/Container";

const SectionHeading = ({blok}) => {
    const {
        heading
    } = blok;
    
    if(!heading) { return null }
    
    return (
        <div className="-mt-10">
            <Container>
                <h2 className="text-glacialBold font-semibold text-6xl">{heading}</h2>
            </Container>
        </div>
    )
            
    

    return null;
    
}

export default SectionHeading;