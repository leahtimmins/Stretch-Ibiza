'use client';

import Script from 'next/script';
import Container from '../elements/Container';

const TagEmbed = ({blok}) => {
    const {
        backgroundColor,
    } = blok;

    return (
        <>
        <section id="tag-embed" className="py-16">
            <Container>
                <div className="tagembed-widget" style={{ width: '100%', height: '100%' }} data-widget-id="2131521" data-tags="false"  view-url="https://widget.tagembed.com/2131521"></div><Script id="tag-embed" src="https://widget.tagembed.com/embed.min.js" type="text/javascript" />
            </Container>
        </section>
            
        </>
    )
}

export default TagEmbed;