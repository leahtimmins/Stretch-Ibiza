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
        contentId,
        image,
        _uid,
        component,
        anchorIdentity,
        setImageFirstMobile
    } = blok;

    let imageBelowTextSize = {};

    if (imageBelowText.filename) {
        imageBelowTextSize = dimensions(imageBelowText.filename);
    }

    return (
        <section className={`overflow-hidden ${sectionPadding === 'none' ? "py-0" : sectionPadding === 'small' ? "py-4 sm:py-8 md:py-12" : "py-12 sm:py-24 md:py-32"} ${background}`} id={contentId ? contentId : anchorIdentity ? anchorIdentity : _uid} data-name={component}>
            <Container>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className={`${setImageFirstMobile ? "order-2" : "order-1"} ${setImageFirst ? "sm:order-2 lg:pl-4 lg:pt-4" : "sm:order-1 lg:pr-4 lg:pt-4"}`}>
                        <div className="lg:max-w-lg">
                            {heading && <h2 className="text-2xl sm:text-4xl font-glacialBold font-semibold leading-7 mb-6">{heading}</h2>}
                            {description && <RichText story={description} className="mt-6 text-lg leading-8 text-gray-600" /> }
                            {/* {link && (
                                    <div className="my-6">
                                        <LinkRef link={link} className="rounded-md bg-vi px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-emerald-green">{label}</LinkRef>
                                    </div>
                            )} */}
                            {imageBelowText.filename && (
                                <Image src={`${imageBelowText.filename}`} width={imageBelowTextSize.width} height={imageBelowTextSize.height} alt={image.alt} className="h-36 w-auto mx-auto my-12" />
                            )}
                        </div>
                    </div>
                    <div className={`flex items-start ${setImageFirstMobile ? "order-1" : "order-2" } ${setImageFirst ? "sm:order-1 justify-end" : "justify-start sm:order-2"}`}>
                        <ImageRef image={image} width={600} height={600} className="w-full sm:w-[48rem] max-w-none md:w-[57rem]" />
                    </div>
                </div>
            </Container>
                
        </section>
    )

}

export default Wayfinder;