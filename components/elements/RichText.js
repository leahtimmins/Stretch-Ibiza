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
    NODE_HEADING,
    NODE_PARAGRAPH,
    NODE_QUOTE
} from 'storyblok-rich-text-react-renderer';
import Link from 'next/link';
import Image from 'next/image';
import dimensions from '@/utils/dimensions';
import React from 'react';

// Helper function to handle heading nodes with recommended Tailwind classes
const renderHeading = (level, children) => {
    // Default Tailwind classes for each heading level
    const headingClasses = {
        2: 'text-3xl font-semibold mb-4',
        3: 'text-2xl font-semibold mb-4',
        4: 'text-xl font-semibold mb-4',
        5: 'text-lg font-semibold mb-4',
        6: 'text-base font-semibold mb-4',
    };

    // Combine the default classes with any custom class
    const combinedClasses = `${headingClasses[level]}`;

    // Dynamically render the correct heading tag
    const HeadingTag = `h${level}`;

    // Render the heading without extra span tags
    return (
        <HeadingTag className={`${combinedClasses}`}>
            {children.map((child, index) => {
                // If the child is a React element (like a span)
                if (React.isValidElement(child)) {
                    // Return its children directly (avoid wrapping)
                    return child.props.children; // Only return the inner content
                }
                // If it's just a string or number, return it directly
                return child; // Render string or number as is
            })}
        </HeadingTag>
    );
};

const RichText = ({ story, className }) => {
    // document is the rich text object you receive from Storyblok,
    // in the form { type: "doc", content: [ ... ] }
    return (
        <div className={className}>
            {render(story, {
                markResolvers: {
                    [MARK_BOLD]: (children) => <b className={`mb-4 font-semibold text-lg`}>{children}</b>,
                    [MARK_ITALIC]: (children) => <i className="italic">{children}</i>,
                    [MARK_STRIKE]: (children) => <s className="line-through">{children}</s>,
                    [MARK_UNDERLINE]: (children) => <u className="underline">{children}</u>,
                    [MARK_SUBSCRIPT]: (children) => <sub>{children}</sub>,
                    [MARK_SUPERSCRIPT]: (children) => <sup>{children}</sup>,
                    [MARK_HIGHLIGHT]: (children, { color }) => <span style={{ "background-color": color }}>{children}</span>,
                    [MARK_TEXT_STYLE]: (children, { color }) => <span style={{ "color": color }}>{children}</span>,
                    [MARK_LINK]: (children, props) => {
                        const { linktype, href, target } = props;
                        if (linktype === 'email') {
                            // Email links: add `mailto:` scheme and map to <a>
                            return <a href={`mailto:${href}`} className="underline">{children}</a>;
                        }
                        if (href.match(/^(https?:)?\/\//)) {
                            // External links: map to <a>
                            return <a href={href} target={target} rel="noindex noreferrer" className="underline">{children}</a>;
                        }
                        // Internal links: map to <Link>
                        return <Link href={href} target={target} className="underline">{children}</Link>;
                    },
                    [MARK_ANCHOR]: (children, { id }) => <span id={id} className="underline">{children}</span>
                },
                nodeResolvers: {
                    [NODE_HEADING]: (children, props) => {
                        const { level } = props;

                        return renderHeading(level, children);
                    },
                    [NODE_PARAGRAPH]: (children) => {
                        // remove P tag from around image output
                        if (children !== null) {
                            let child = null;
                            for (const obj of children) {
                                if (obj?.type == 'figure' || obj?.type == 'image') {
                                    child = obj;
                                }
                            }
                            if (child) {
                                return children;
                            }
                        }
                        return <p className={`mb-4 text-lg`}>{children}</p>;
                    },
                    [NODE_IMAGE]: (children, { src, alt, title, source, copyright }) => {
                        let size = dimensions(src);
                        // return <Image src={src} alt={alt} title={title} width={size.width} height={size.height} />
                        return (
                            <figure className="mb-8">
                                <Image src={src} alt={alt} title={title} width={size.width} height={size.height} />
                                <figcaption className="text-sm">{source ? "Copyright: " + source : ""}{copyright ? " - " + copyright : ""}</figcaption>
                            </figure>
                        )
                    },
                    [NODE_UL]: (children) => {
                        return (
                            <ul className="list-disc list-inside mb-4">
                                {children.map((item, ulIndex) => {
                                    return (
                                        <li key={ulIndex}>
                                            {React.Children.map(item.props.children, (child) => {
                                                if (child.type === "p") {
                                                    // Clone the <p> and add className
                                                    return React.cloneElement(child, {
                                                        className: `inline-block ${child.props.className || ""}`,
                                                    })
                                                }
                                                return child
                                            })}
                                        </li>
                                    )
                                })}
                            </ul>
                        )
                    },
                    [NODE_OL]: (children, props) => {
                        return (
                            <ol className="list-decimal list-inside mb-4">
                                {children.map((item, olIndex) => {
                                    return <li key={olIndex}>{item.props.children}</li>
                                })}
                            </ol>
                        )
                    },
                    [NODE_QUOTE]: (children) => {
                        return <blockquote className="text-xl italic font-semibold text-gray-900 border-s-4 border-gray-300 pl-4 py-3 mb-4">{children}</blockquote>
                    }
                }

            })}</div>);
}

export default RichText;