import { 
    render, 
    MARK_BOLD,
    MARK_ITALIC,
    MARK_STRIKE,
    MARK_UNDERLINE,
    MARK_CODE,
    MARK_STYLED,
    MARK_LINK,
    MARK_SUBSCRIPT,
    MARK_SUPERSCRIPT,
    MARK_HIGHLIGHT,
    MARK_TEXT_STYLE,
    MARK_ANCHOR,
    NODE_IMAGE,
    NODE_UL,
    NODE_OL,
    NODE_PARAGRAPH,
    NODE_QUOTE
} from 'storyblok-rich-text-react-renderer';
import Link from 'next/link';
import Image from 'next/image';
import dimensions from '@/utils/dimensions';

const StoryRichText = ({story}) => {
    const paragraphs = story?.content?.filter(node => node.type === "paragraph") || [];
    const paragraphCount = paragraphs.length;
    const middleIndex = Math.floor(paragraphCount / 2);
    
    // Split the paragraphs into two columns
    const firstColumnParagraphs = paragraphs.slice(0, middleIndex);
    const secondColumnParagraphs = paragraphs.slice(middleIndex);
    
    return (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6 py-8">
            <div>
                {/* First Column */}
                {render(
                    { type: "doc", content: firstColumnParagraphs },
                    {
                        markResolvers: {
                            [MARK_BOLD]: (children) => <b className={`mb-4 font-semibold text-lg`}>{children}</b>,
                            [MARK_ITALIC]: (children) => <i className="italic">{children}</i>,
                            // Add other MARKS if needed
                        },
                        nodeResolvers: {
                            [NODE_PARAGRAPH]: (children, node, index) => {
                                return <p className="mb-4 text-lg">{children}</p>;
                            },
                            [NODE_IMAGE]: (children, { src, alt, title, source, copyright }) => {
                                let size = dimensions(src);
                                return (
                                    <figure className="mb-8">
                                        <Image src={src} alt={alt} title={title} width={size.width} height={size.height} />
                                        <figcaption className="text-sm">{source ? "Copyright: " + source : ""}{copyright ? " - " + copyright : ""}</figcaption>
                                    </figure>
                                )
                            }
                        }
                    }
                )}
            </div>
            <div>
                {/* Second Column */}
                {render(
                    { type: "doc", content: secondColumnParagraphs },
                    {
                        markResolvers: {
                            [MARK_BOLD]: (children) => <b className={`mb-4 font-semibold text-lg`}>{children}</b>,
                            [MARK_ITALIC]: (children) => <i className="italic">{children}</i>,
                            // Add other MARKS if needed
                        },
                        nodeResolvers: {
                            [NODE_PARAGRAPH]: (children, node, index) => {
                                return <p className="mb-4 text-lg">{children}</p>;
                            },
                            [NODE_IMAGE]: (children, { src, alt, title, source, copyright }) => {
                                let size = dimensions(src);
                                return (
                                    <figure className="mb-8">
                                        <Image src={src} alt={alt} title={title} width={size.width} height={size.height} />
                                        <figcaption className="text-sm">{source ? "Copyright: " + source : ""}{copyright ? " - " + copyright : ""}</figcaption>
                                    </figure>
                                )
                            }
                        }
                    }
                )}
            </div>
        </div>
        </>
    );
}

export default StoryRichText;
