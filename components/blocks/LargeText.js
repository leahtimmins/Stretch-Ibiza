import Container from "@/components/elements/Container"

const LargeText = ({blok, position}) => {
    const {
        text,
        background,
        _uid,
        component
    } = blok;

    return (
        <section id={_uid} data-name={component} className={`${background}`}>
            <Container>
                <div className="py-20 max-w-6xl mx-auto px-4">
                        <p className="font-bold font-glacialBold text-2xl sm:text-4xl text-center">{text}</p>
                </div>
            </Container>
        </section>
    )
}

export default LargeText;