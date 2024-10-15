import Link from 'next/link';
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import TabItem from '../elements/TabItem';
import Container from '../elements/Container';

const TabHeadings = ({blok}) => {
    const {
        backgroundColor,
        headings,
        contentId,
        _uid
    } = blok;

    return (
        <section id={`${contentId ? contentId : _uid}`} className={`pt-24 sm:pt-16 ${backgroundColor}`}>
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {headings.map((nestedBlok, index) => (
                    <TabItem key={nestedBlok._uid} blok={nestedBlok} />
                ))}
                </div>
            </Container>
            
            
        </section>
    )
}

export default TabHeadings;