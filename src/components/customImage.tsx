import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PROJECT_QUERYResult } from "@/sanity/types";

type SanityImage = NonNullable<NonNullable<PROJECT_QUERYResult[0]>['mainImage']>;

interface CustomImageProps {
    image: SanityImage | null | undefined;
    fill?: boolean
}

export function CustomImage({ image, fill = false }: CustomImageProps) {
    if (!image) return null;

    const imageUrl = urlFor(image).url();
    const altText = image.alt ?? "";

    const blurDataURL = urlFor(image)
        .width(20)
        .quality(20)
        .url();


    if (fill) {
        return (
            <div className="relative w-full h-full">
                <Image
                    src={imageUrl}
                    alt={altText}
                    width={800}
                    height={500}
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                />
            </div>
        )
    } else {

    }


}