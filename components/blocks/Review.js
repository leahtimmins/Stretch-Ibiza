import Image from "next/image";
import dimensions from "@/utils/dimensions";
import Container from "../elements/Container";
import RichText from "@/components/elements/RichText";

const Review = ({ blok, position }) => {
    const {
        content,
        name,
        imageFirst,
        image,
        illustration,
        showQuoteIcon,
        quoteIcon,
        reviewColor,
        _uid
    } = blok;

    let imageSize = {};
    let illustrationSize = {};
    let quoteIconSize = {};

    if (image.filename) {
        imageSize = dimensions(image.filename);
    }
    if (illustration.filename) {
        illustrationSize = dimensions(illustration.filename);
    }

    if (quoteIcon.filename) {
        quoteIconSize = dimensions(quoteIcon.filename);
    }
    

    return (
        <div id={"review_" + _uid + "_" + position} className="relative">
            {/* {reviewColor && (
                <div className="absolute top-12 w-full h-full">
                    <Container className={`${reviewColor} h-full ${imageFirst ? "ml-0 " : "mr-0 "}`}>
                    </Container>
                </div>
            )} */}
            
            <Container className={`relative`}>
                {/* Quote Icon */}
                {showQuoteIcon && quoteIcon.filename && (
                    <div className={`absolute ${imageFirst ? "-right-8 bottom-8" : "top-8 -left-8"}`}>
                        <Image src={quoteIcon.filename} alt={quoteIcon.alt} width={quoteIconSize.width} height={quoteIconSize.height} className="w-36" />
                    </div>
                )}
                <div className="relative">
                    <div className="absolute"></div>
                    <div className={`relative flex flex-col sm:flex-row py-8 sm:py-16`}>
                        {/* Content */}
                        <div className={`relative pb-20 ${imageFirst ? "pl-0 sm:pl-8 order-1 sm:order-2" : "pr-0 sm:pr-8 order-1"}`}>
                            {content && <RichText story={content} className="text-glacialBold mt-6 text-lg leading-8 text-gray-600" /> }
                            {name && <span className="font-semibold text-glacialBold">{name}</span>}
                            
                            {illustration.filename && (
                                <div className="absolute bottom-0 right-0 p-4">
                                    <Image src={illustration.filename} alt={illustration.alt} width={illustrationSize.width} height={illustrationSize.height} className="w-36 w-auto" />
                                </div>
                            )}
                        </div>
                        {/* Image */}
                        <div className={`${imageFirst ? "order-2 sm:order-1" : "order-2"}`}>
                            {image.filename && <Image src={image.filename} alt={image.alt} width={imageSize.width} height={imageSize.height} className="w-full h-auto sm:min-w-72 sm:min-h-72 sm:h-auto" />}
                        </div>
                    </div>
                </div>
                
            </Container>   
        </div>
    )
}

export default Review;