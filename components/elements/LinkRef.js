import Link from 'next/link';

const LinkRef = ({link, children, className}) => {
    // Check if the url contains 'http' (indicating an external link)
    const isExternalLink = link.url.includes('http');

    if(isExternalLink) {
        return <a href={link.url} target="_blank" rel="noopener noreferrer" className={className}>
            {children}
        </a>
    }

    if(link?.story?.full_slug == 'home') {
        return <Link href={"/"} title={link?.title} className={className}>{children}</Link>
    }

    return <Link href={`/${link?.story?.full_slug}`} title={link?.title} className={className}>{children}</Link>
}
export default LinkRef;