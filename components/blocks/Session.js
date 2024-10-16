import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import StoryRichText from "../elements/StoryRichText";
import Image from "next/image";
import dimensions from "@/utils/dimensions";
import Container from "../elements/Container";
import SessionTitle from "./SessionTitle";
import SessionImageRow from "./SessionImageRow";

const Session = ({ blok }) => {

    const {
        _uid,
        dates,
        images,
        heading,
        location,
        component,
        background,
        longDescription,
        body
        // shortDescription
    } = blok;


    const featureImageSize = dimensions(images[0].filename);

    const featureImage = {
        filename: images[0].filename,
        width: featureImageSize.width,
        height: featureImageSize.height,
        alt: images[0].alt
    }

    return (
        <main {...storyblokEditable(blok)}>
            <div id={component + "_" + _uid} data-name={component}>
                
                <SessionTitle background={background} heading={heading} />
                <Container>
                    <div className="py-8">
                        <Image 
                            src={featureImage.filename} 
                            alt={featureImage.alt} 
                            width={featureImage.width}
                            height={featureImage.height}
                        />
                    </div>
                    <StoryRichText story={longDescription} />
                </Container>
                {/* Pass the remaining images into the Image row component */}
                {images.slice(1).length > 0 && <SessionImageRow images={images.slice(1)} />}
                
                {body.map((nestedBlok) => (
                    <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                ))}
            </div>
            {/* {blok.body.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))} */}
        </main>
    )
};

export default Session;