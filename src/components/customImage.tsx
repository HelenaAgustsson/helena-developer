import { urlFor } from "@/sanity/lib/image";
import Image, { StaticImageData } from "next/image";
import { PROJECT_QUERYResult } from "@/sanity/types";

type SanityImage = NonNullable<NonNullable<PROJECT_QUERYResult[0]>['mainImage']>;

interface CustomImageProps {
    image: SanityImage | null | undefined;
    fill?: boolean
    width?: number
    height?: number
}

export function CustomImage({ image, width, height, fill = false }: CustomImageProps) {
    if (!image) return null;

    const imageUrl = urlFor(image).url();
    const altText = image.alt ?? "";

    const blurDataURL = urlFor(image)
        .width(20)
        .quality(20)
        .url();

    if (fill) {
        return (
            <div className={`relative w-full h-full`}>
                <Image
                    src={imageUrl}
                    alt={altText}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                />
            </div>
        )
    } else {
        return (
            <div>
                <Image
                    src={imageUrl}
                    alt={altText}
                    className="object-contain"
                    width={width}
                    height={height}
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                />
            </div>
        )
    }


}