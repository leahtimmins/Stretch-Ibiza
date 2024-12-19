'use client';
import { useState, useEffect } from 'react';
import Script from 'next/script';
import Container from '../elements/Container';

const TagEmbed = ({blok}) => {
    const [showEmbed, setShowEmbed] = useState(false);
    const {
        backgroundColor,
        _uid,
        anchorIdentity
    } = blok;
    

    useEffect(() => {
        // Check the domain on client-side
        const domain = window.location.hostname;
        if (domain.includes('vercel') || domain.includes('stretchibiza.com')) {
            setShowEmbed(true);
        }
    }, []);

    if (!showEmbed) {
        return null; // Don't render anything if the domain check fails
    }

    return (
        <>
        <section id={anchorIdentity ? anchorIdentity : _uid} data-name="tag-embed" className="py-16">
            <Container>
                <div className="tagembed-widget" style={{ width: '100%', height: '100%' }} data-widget-id="2131521" data-tags="false"  view-url="https://widget.tagembed.com/2131521"></div><Script id="tag-embed" src="https://widget.tagembed.com/embed.min.js" type="text/javascript" />
            </Container>
        </section>
            
        </>
    )
}

export default TagEmbed;