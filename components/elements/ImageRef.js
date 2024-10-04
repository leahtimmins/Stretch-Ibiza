import dimensions from '@/utils/dimensions';
import Image from 'next/image';

const ImageRef = ({image, className, width, height}) => {
    let size = dimensions(image.filename);
    return <Image 
            src={image.filename}
            width={width || size.width}
            height={height || size.height}
            alt={image.alt || "No image alt available"}
            className={className}
            />;
}

export default ImageRef;