import Container from "@/components/elements/Container"
import ImageRef from "../elements/ImageRef";
import dimensions from "@/utils/dimensions";
import Image from 'next/image';

const FullWidthImage = ({blok, position}) => {

    const {
        image,
        background,
        _uid,
        component
    } = blok;

    let size = dimensions(image.filename);

    return (
        <section id={_uid} data-name={component} className={`${background} py-20`}>
            <Container>
                <Image src={image.filename} width={size.width} height={size.height} alt={image.alt} className="w-full rounded-xl" />
            </Container>
           
        </section>
    )
}

export default FullWidthImage;