'use client'

import Container from "@/components/elements/Container";
import clsx from 'clsx';
import RichText from "../elements/RichText";
import dimensions from "@/utils/dimensions";
import Image from 'next/image';

const TextImageGrid = ({blok, position}) => {
    const {
        backgroundColor,
        textColor,
        imageFirst,
        alignText,
        image,
        richText,
        _uid
    } = blok;

    let size = dimensions(image.filename);

    return(
        <div id={_uid} data-name="text-image-grid" className={clsx("relative py-8", backgroundColor, textColor)}>
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className={`${imageFirst == true ? "order-1 lg:order-2" : "order-1"}`}>
                        {richText && <RichText story={richText} className={`mt-6 text-lg leading-8 text-gray-600 ${alignText}`} />}
                    </div>
                    <div className={`${imageFirst == true ? "order-2 lg:order-1" : "order-2"}`}>

                        <Image src={image.filename} alt={image.alt} width={size.width} height={size.height} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default TextImageGrid;