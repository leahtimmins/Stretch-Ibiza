import Container from "@/components/elements/Container"
import Image from 'next/image';
import Link from 'next/link';
import { render, NODE_PARAGRAPH, MARK_LINK } from 'storyblok-rich-text-react-renderer';
import dimensions from "@/utils/dimensions";

const IllustrationContent = ({ blok, position }) => {
    const {
        heading,
        description,
        image,
        illustrations,
        floatingImage,
        background,
        _uid,
        component
    } = blok;

    let imageSize = dimensions(image.filename);
    let floatingImageSize = dimensions(floatingImage.filename);

    return (
        <section id={_uid} data-name={component} className={`${background} py-24`}>
            <Container>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="grid grid-cols-[auto,1fr]">
                        <div>
                            {illustrations && (
                                <div className="flex flex-col space-y-2">
                                    {illustrations.map((illustrationImg, index) => {
                                        const illustationSize = dimensions(illustrationImg.filename);
                                        return <Image key={index} src={illustrationImg.filename.split('?')[0]} alt={illustrationImg.alt || "illustration"} width={illustationSize.width} height={illustationSize.height} className="w-44 h-auto max-w-full" />
                                    })}
                                </div>
                            )}
                        </div>
                        
                        <div className="relative">
                            <Image src={image.filename} alt={image.alt || "no alt content available"} width={imageSize.width} height={imageSize.height} className="w-auto" />
                            {floatingImage && (
                                <div className="-mt-12 -mr-12 flex justify-end">
                                    <Image src={floatingImage.filename} alt={floatingImage.alt || "Stretch Ibiza Icon"} width={floatingImageSize.width} height={floatingImageSize.height} className="h-28 w-auto" />
                                </div>
                                
                            )}
                        </div>
                    </div>
                    <div className="lg:pl-4 lg:pt-4">
                        <div className="lg:max-w-lg">
                            {heading && <h2 className="text-2xl sm:text-4xl font-glacialBold font-semibold leading-7 mb-6">{heading}</h2>}
                            {render(description, {
                                nodeResolvers: {
                                    [NODE_PARAGRAPH]: (children, props) => <p className="mb-4 text-lg">{children}</p>
                                },
                                markResolvers: {
                                    [MARK_LINK]: (children, props) => {
                                        const { linktype, href, target } = props;
                                        if (linktype === 'email') {
                                            // Email links: add `mailto:` scheme and map to <a>
                                            return <a href={`mailto:${href}`}>{children}</a>;
                                        }
                                        if (href.match(/^(https?:)?\/\//)) {
                                            // External links: map to <a>
                                            return <a href={href} target={target}>{children}</a>;
                                        }
                                        // Internal links: map to <Link>
                                        return <Link href={href}>{children}</Link>;
                                    }
                                }
                            })}
                        </div>
                    </div>
                    
                </div>
        </Container>

        </section >
    )
}

export default IllustrationContent;