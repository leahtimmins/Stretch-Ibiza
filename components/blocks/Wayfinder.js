import Container from "@/components/elements/Container"
import LinkRef from '@/components/elements/LinkRef';
import ImageRef from "@/components/elements/ImageRef";
import RichText from "@/components/elements/RichText";

const Wayfinder = ({blok, position}) => {

    const {
        link,
        label,
        heading,
        description,
        background,
        image,
        _uid,
        component
    } = blok;

    return (
        <section className={`overflow-hidden py-24 sm:py-32 ${background}`} id={_uid} data-name={component}>
            <Container>
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                        <div className="lg:max-w-lg">
                            {heading && <h2 className="text-2xl sm:text-4xl font-glacialBold font-semibold leading-7 mb-2">{heading}</h2>}
                            {description && <RichText story={description} className="mt-6 text-lg leading-8 text-gray-600" /> }
                            {link && (
                                    <div className="my-6">
                                        <LinkRef link={link} className="rounded-md bg-vi px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-emerald-green">{label}</LinkRef>
                                    </div>
                            )}
                        </div>
                    </div>
                    <div className="flex items-start justify-end lg:order-first">
                        <ImageRef image={image} width={600} height={600} className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" />
                    </div>
                </div>
            </Container>
                
        </section>
    )

    return (
        <section id={_uid} data-name={component} className={`${background}`}>
            <div className="py-16">
                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-2 block">
                        <div className="flex items-center">
                            <div>
                                {heading && <h2 className="text-2xl sm:text-4xl font-glacialBold font-semibold mb-2">{heading}</h2>}
                                {description && <RichText story={description} /> }
                                {link && (
                                    <div className="my-6">
                                        <LinkRef link={link} className="font-glacialRegular border-2 py-2 px-4 uppercase bg-white">{label}</LinkRef>
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
            </div>
        </section>
    )
}

export default Wayfinder;