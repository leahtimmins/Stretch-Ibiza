'use client'

import Container from "@/components/elements/Container";
import clsx from 'clsx';

const PageTitle = ({blok, position}) => {
    const {
        background,
        bannerColor,
        textColor,
        heading,
        _uid,
        anchorIdentity
    } = blok;

    return(
        <section id={anchorIdentity ? anchorIdentity : _uid} data-name="page-title" className={clsx("relative h-32", background, textColor)}>
            <div className={`absolute top-0 left-0 bottom-0 w-full h-full max-w-5xl ${bannerColor}`}></div>
            <div className="relative h-full flex items-center">
                <Container>
                    <div>
                        {heading && <h1 className="text-5xl font-bold text-glacialBold">{heading}</h1>}
                    </div>
                </Container>
            </div>
           
            
        </section>
    )
}

export default PageTitle;