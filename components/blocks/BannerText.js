import dimensions from "@/utils/dimensions";
import Image from 'next/image';
import Container from "../elements/Container";

const BannerText = ({blok}) => {
    const {
        description,
        logo,
        bannerColor,
        textColor,
        showLogo
    } = blok;

    let imageBelowTextSize = dimensions(logo.filename);

    return (
        <section className={`w-full`}>
            <div className="flex">
                <div className={`w-full ${bannerColor} min-h-72`}>
                    <div className="flex justify-center items-center h-full max-w-lg text-center mx-auto py-24 sm:py-0">
                        {description && <p className={`text-glacialBold font-semibold text-3xl ${textColor}`}>{description}</p>}
                    </div>                
                </div>
                {showLogo && (
                    <div className="bg-white relative px-12 hidden sm:block">
                        {logo && <Image src={logo.filename} width={imageBelowTextSize.width} height={imageBelowTextSize.height} alt="Stretch Ibiza logo" className="h-auto w-96 mx-auto sm:mx-0" />}
                    </div>
                )}
                
            </div>
        </section>
    )
}

export default BannerText;