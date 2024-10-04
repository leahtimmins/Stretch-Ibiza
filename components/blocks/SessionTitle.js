'use client'

import Container from "@/components/elements/Container";
import clsx from 'clsx';
import Link from 'next/link'
const SessionTitle = ({background, description, heading}) => {
    
    return(
        <section id={"session-title"} data-name="session-title" className={clsx("h-72 pt-16 pb-6", background)}>
            <div className="h-full flex items-center">
                <Container>
                    <div className="mx-auto text-center max-w-3xl">
                        <nav>
                            <ul className="breadcrumbs flex justify-center mb-3">
                                <li>
                                    <Link href="/" title="Stretch Ibiza homepage">Home</Link>
                                </li>
                                <li>
                                    <Link href="/sessions" title="Stretch Ibiza Sessions">Sessions</Link>
                                </li>
                            </ul>
                        </nav>
                        {heading && <h1 className="text-4xl font-bold">{heading}</h1>}
                    </div>
                    
                </Container>
            </div>
           
            
        </section>
    )
}

export default SessionTitle;