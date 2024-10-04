import Container from "@/components/elements/Container"

export default async function Blank({block, position}) {
    return (
        <section data-name="blank-component">
            <div className="py-16 sm:py-24">
                <Container>
                    Blank Component
                </Container>
            </div>
        </section>
    )
}