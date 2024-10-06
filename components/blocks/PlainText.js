import Container from "../elements/Container";
import { render, NODE_PARAGRAPH, MARK_LINK } from 'storyblok-rich-text-react-renderer';

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
                
            </Container></div>
    )
}

export default PlainText;