import dimensions from "@/utils/dimensions";
import Container from "../elements/Container";
import Image from 'next/image';

const SessionImageRow = ({images}) => {

    const count = images.length;
    return (
        <section className="py-8">
            <Container>
                <div className="block sm:flex sm:h-56 md:h-64 lg:h-80 sm:gap-4">
                    {images.map((image, index) => {
                        const size = dimensions(image.filename);
                        return (
                            <div key={index} className="relative">
                                <Image 
                                    src={image.filename}
                                    width={size.width}
                                    height={size.height}
                                    alt={image.alt} 
                                    className="max-h-full w-auto max py-4 sm:py-0" // Ensure the image covers the entire grid item while maintaining aspect ratio
                                />
                            </div>
                        )
                        
                    })}
                </div>
            </Container>
        </section>
    )
}

export default SessionImageRow;