import dimensions from "@/utils/dimensions";
import Image from 'next/image';
import Container from "../elements/Container";

const BannerText = ({blok}) => {
    const {
        description,
        logo,
        bannerColor,
        textColor
    } = blok;

    let imageBelowTextSize = dimensions(logo.filename);

    return (
        <section className={`${bannerColor} w-full`}>
            <div className="sm:flex">
                <div className="w-full py-24 sm:py-0">
                    <div className="flex justify-center items-center h-full max-w-lg text-center mx-auto">
                        {description && <p className={`text-glacialBold font-semibold text-3xl ${textColor}`}>{description}</p>}
                    </div>                
                </div>
                <div className="bg-white relative px-12">
                    {logo && <Image src={logo.filename} width={imageBelowTextSize.width} height={imageBelowTextSize.height} alt="Stretch Ibiza logo" className="h-auto w-96 mx-auto sm:mx-0" />}
                </div>
            </div>
        </section>
    )
}

export default BannerText;