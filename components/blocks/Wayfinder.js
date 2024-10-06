import Container from "@/components/elements/Container"
import LinkRef from '@/components/elements/LinkRef';
import ImageRef from "@/components/elements/ImageRef";
import RichText from "@/components/elements/RichText";
import dimensions from "@/utils/dimensions";
import Image from 'next/image';

const Wayfinder = ({blok, position}) => {

    const {
        link,
        label,
        heading,
        description,
        background,
        imageBelowText,
        setImageFirst,
        sectionPadding,
        image,
        _uid,
        component
    } = blok;

    let imageBelowTextSize = {};

    if (imageBelowText.filename) {
        imageBelowTextSize = dimensions(imageBelowText.filename);
    }

    return (
        <section className={`overflow-hidden py-24 sm:py-32 ${sectionPadding === 'none' ? "py-0" : sectionPadding === 'small' ? "py-8 sm:py-12" : "py-24 sm:py-32" } ${background}`} id={_uid} data-name={component}>
            <Container>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className={`${setImageFirst ? "order-2 lg:pl-4 lg:pt-4" : "order-1 lg:pr-4 lg:pt-4"}`}>
                        <div className="lg:max-w-lg">
                            {heading && <h2 className="text-2xl sm:text-4xl font-glacialBold font-semibold leading-7 mb-6">{heading}</h2>}
                            {description && <RichText story={description} className="mt-6 text-lg leading-8 text-gray-600" /> }
                            {/* {link && (
                                    <div className="my-6">
                                        <LinkRef link={link} className="rounded-md bg-vi px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-emerald-green">{label}</LinkRef>
                                    </div>
                            )} */}
                            {imageBelowText.filename && (
                                <Image src={`${imageBelowText.filename}`} width={imageBelowTextSize.width} height={imageBelowTextSize.height} alt={image.alt} className="h-36 w-auto mx-auto" />
                            )}
                        </div>
                    </div>
                    <div className={`flex items-start justify-end ${setImageFirst ? "order-1" : "order-2"}`}>
                        <ImageRef image={image} width={600} height={600} className="w-[48rem] max-w-none sm:w-[57rem]" />
                    </div>
                </div>
            </Container>
                
        </section>
    )

}

export default Wayfinder;