import Image from "next/image";
import dimensions from "@/utils/dimensions";
import Container from "../elements/Container";
import RichText from "@/components/elements/RichText";

const Review = ({ blok, position }) => {
    const {
        content,
        name,
        image,
        _uid
    } = blok;

    let size = {};

    if (image.filename) {
        size = dimensions(image.filename);
    }
    

    console.log('review', blok, position);

    return (
        <div id={"review_" + _uid + "_" + position}>
            <Container>
                {content && <RichText story={content} className="text-glacialBold mt-6 text-lg leading-8 text-gray-600" /> }
                {name && <span className="font-semibold text-glacialBold">{name}</span>}
                
                {image.filename && <Image src={image.filename} alt={image.alt} width={size.width} height={size.height} />}
            </Container>   
        </div>
    )
}

export default Review;