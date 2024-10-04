'use client'

import Container from "@/components/elements/Container";
import clsx from 'clsx';

const PageTitle = ({blok, position}) => {
    const {
        background,
        textColor,
        description,
        heading,
        _uid
    } = blok;

    const backgroundColor = background;

    return(
        <section id={_uid} data-name="page-title" className={clsx("h-72 pt-20", background, textColor)}>
            <div className="h-full flex items-center">
                <Container>
                    <div className="mx-auto text-center max-w-3xl">
                        {heading && <h1 className="text-4xl font-bold">{heading}</h1>}
                        {description && <p className="text-lg">{description}</p>}
                    </div>
                    
                </Container>
            </div>
           
            
        </section>
    )
}

export default PageTitle;