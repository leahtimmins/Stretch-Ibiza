import Container from "@/components/elements/Container";
import linkLogic from "@/utils/linkLogic";
import Link from 'next/link';

const BookCallToAction = ({blok, position}) => {

    const {
        _uid,
        component,
        background,
        cardBackground,
        textColor,
        borderColor,
        heading,
        description,
        link,
        label
    } = blok;


    return (
        <section id={_uid} data-name={component} className={`${background}`}>
            <div className="py-16">
                <Container>
                    <div className={`max-w-2xl mx-auto p-16 text-center border ${borderColor} ${cardBackground}`}>
                        {heading && <h4 className={`text-2xl text-glacialBold font-bold mb-4 ${textColor}`}>{heading}</h4>}
                        {description && <p className={`mb-4 ${textColor}`}>{description}</p>}
                        <div className="relative block pt-6">
                            <Link href={linkLogic(link.story.full_slug)} className="inline-block rounded-md bg-indigo-600 px-3 py-2 text-md font-glacialBold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">{label}</Link>
                        </div>
                    </div>
                  
                </Container>
            </div>
        </section>
    )
}

export default BookCallToAction;    