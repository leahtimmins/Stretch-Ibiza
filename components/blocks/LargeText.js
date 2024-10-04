import Container from "@/components/elements/Container"
import LinkRef from '@/components/elements/LinkRef';
import ImageRef from "../elements/ImageRef";

const LargeText = ({blok, position}) => {
    const {
        text,
        background,
        _uid,
        component
    } = blok;

    return (
        <section id={_uid} data-name={component} className={`${background}`}>
            <div className="py-20 max-w-3xl mx-auto px-4">
                    <p className="font-bold font-glacialBold text-2xl sm:text-4xl text-center">{text}</p>
            </div>
        </section>
    )
}

export default LargeText;