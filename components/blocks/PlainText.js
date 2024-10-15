import Container from "../elements/Container";
import { render, NODE_PARAGRAPH, MARK_LINK, NODE_IMAGE } from 'storyblok-rich-text-react-renderer';
import Link from 'next/link';
import dimensions from "@/utils/dimensions";

const PlainText = ({blok}) => {
    const {
        heading,
        richText,
        backgroundColor,
        textAlignment
    } = blok;

    return (
        <div className={`py-12 ${backgroundColor} ${textAlignment}`}>
            <Container>
                {heading && <h2 className="text-2xl sm:text-4xl font-glacialBold font-semibold leading-7 mb-2">{heading}</h2>}
                <div className="max-w-5xl mx-auto">
                    {render(richText, {
                        nodeResolvers: {
                            [NODE_PARAGRAPH]: (children, props) => { return (<p className="mb-4 text-lg">{children}</p>)},
                            [NODE_IMAGE]: (children, { src, alt }) => { 
                                
                                const imageSize = dimensions(src);
                                return (<img src={src} alt={alt} width={imageSize.width} height={imageSize.height} className="max-h-36 w-auto mx-auto mt-8" />)
                            }
                        },
                        markResolvers: {
                            [MARK_LINK]: (children, props) => {
                                const { linktype, href, target } = props;
                                if (linktype === 'email') {
                                    // Email links: add `mailto:` scheme and map to <a>
                                    return <a href={`mailto:${href}`} className="underline">{children}</a>;
                                }
                                if (href.match(/^(https?:)?\/\//)) {
                                    // External links: map to <a>
                                    return <a href={href} target={target} className="underline">{children}</a>;
                                }
                                // Internal links: map to <Link>
                                return <Link href={href} className="underline">{children}</Link>;
                            }
                        }
                    })}
                </div>
                
            </Container></div>
    )
}

export default PlainText;