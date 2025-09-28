import Container from "@/components/elements/Container";
import { render, NODE_PARAGRAPH, MARK_LINK } from 'storyblok-rich-text-react-renderer';
import Link from 'next/link';

const BodyText = ({blok, position}) => {

    const {
        _uid,
        component,
        background,
        richText,
        anchorIdentity,
        padding
    } = blok;


    return (
        <section id={anchorIdentity ? anchorIdentity : _uid} data-name={component} className={`${background}`}>
            <div className={`${padding == 'small' ? 'py-8' : 'py-16'}`}>
                <Container>
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
                </Container>
            </div>
        </section>
    )
}

export default BodyText;