import Container from "@/components/elements/Container"
import LinkRef from '@/components/elements/LinkRef';
import ImageRef from "../elements/ImageRef";
import dimensions from "@/utils/dimensions";
import Image from 'next/image';

const Hero = ({blok, position}) => {
    const {
        // link,
        // label,
        heading,
        description,
        background,
        image,
        _uid,
        component,
        logo,
        showLogo
    } = blok;

    let logoSize = dimensions(logo.filename);

    return (
        <section id={_uid} data-name={component} className={`${background} relative overflow-hidden`}>

            <div className="relative bg-white">
                <div className="mx-auto lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:max-h-screen">
                    <div className="px-6 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-24 xl:col-span-6">
                    <div className="mx-auto max-w-2xl  mt-24 lg:mt-0 lg:mx-0 text-center">
                        {showLogo && logo.filename && (
                            <Image
                                alt={logo.alt | "Stretch Ibiza logo"}
                                src={`${logo.filename}`}
                                width={logoSize.width}
                                height={logoSize.height}
                                className="h-56 w-56 mx-auto"
                            />
                        )}
                        {heading && <h1 className="font-glacialBold mt-10 text-2xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-5xl max-w-sm mx-auto">{heading}</h1>}
                        {description && <p className="font-glacialRegular mt-6 text-lg max-w-lg mx-auto leading-8 text-gray-600">{description}</p>}
                        
                        {/* {link && (
                                    <div className="mt-10 flex items-center gap-x-6">
                                        <LinkRef link={link} className="rounded-md px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-violet focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-emerald-green">{label}</LinkRef>
                                    </div>
                                )} */}
                    </div>
                    </div>
                    <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
                        <ImageRef image={image} className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full" />
                    {/* <img
                        alt=""
                        src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
                        className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                    /> */}
                    </div>
                </div>
                </div>
            {/* <div className="">
                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-2 block">
                        <div className="flex items-center">
                            <div>
                                {heading && <h1 className="font-glacialBold text-2xl sm:text-4xl font-semibold mb-2">{heading}</h1>}
                                {description && <p className="font-glacialRegular text-lg">{description}</p>}
                                {link && (
                                    <div className="my-6">
                                        <LinkRef link={link} className="border-2 py-2 px-4 uppercase bg-white">{label}</LinkRef>
                                    </div>
                                )}
                            </div>
                            
                        </div>
                        {image.filename && (
                            <div className="block sm:flex sm:justify-end">
                                <ImageRef image={image} width={400} height={400} className="max-h-full object-contain" />
                            </div>
                        )}
                        
                        
                    </div>
                    
                </Container>
            </div> */}
        </section>
    )
}

export default Hero;