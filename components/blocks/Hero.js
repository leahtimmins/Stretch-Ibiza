import Container from "@/components/elements/Container"
import LinkRef from '@/components/elements/LinkRef';
import ImageRef from "../elements/ImageRef";
import dimensions from "@/utils/dimensions";
import Image from 'next/image';

const Hero = ({blok, position}) => {
    const {
        // link,
        // label,
        heading,
        description,
        background,
        image,
        _uid,
        component,
        logo,
        showLogo
    } = blok;

    let logoSize = dimensions(logo.filename);

    return  (
        <section id={_uid} data-name={component} className={`relative py-12 ${background}`}>
            <Container>
                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="flex justify-center items-center">
                        <div className="py-12 sm:py-0">
                            {/* Show the logo */}
                            {showLogo && logo.filename && (
                                <Image
                                    alt={logo.alt || "Stretch Ibiza logo"}
                                    src={`${logo.filename}`}
                                    width={logoSize.width}
                                    height={logoSize.height}
                                    className="h-56 w-56 mx-auto"
                                />
                            )}

                            {/* Heading */}
                            {heading && (
                                <h1 className="font-glacialBold mt-10 text-2xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-5xl max-w-sm mx-auto text-center">
                                    {heading}
                                </h1>
                            )}

                            {/* Description */}
                            {description && (
                                <p className="font-glacialRegular mt-6 text-lg max-w-lg mx-auto leading-8 text-gray-600 text-center">
                                    {description}
                                </p>
                            )}
                        </div>

                    </div>

                    <div className="relative">
                        {/* Image component with full control of height */}
                        <ImageRef
                            image={image}
                            className="w-full lg:h-auto"
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Hero;