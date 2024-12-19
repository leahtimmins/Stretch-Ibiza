import Image from "next/image";
import dimensions from "@/utils/dimensions";

const IllustrationBanner = ({blok, position}) => {
    const {
        background,
        image,
        _uid,
        component,
        anchorIdentity
    } = blok;

    const size = dimensions(image.filename);

    return (
        <section id={anchorIdentity ? anchorIdentity : _uid} data-name={component} className={`${background}`}>
            <Image src={image.filename} alt={image.alt} width={size.width} height={size.height} />
        </section>
    )
}

export default IllustrationBanner;