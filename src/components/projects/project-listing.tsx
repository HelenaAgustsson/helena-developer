import { PortableText } from "next-sanity";
import { PROJECT_QUERYResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Categories from "../categories";
import externalLink from "../icons/externalLink.svg"
import externalLinkWhite from "../icons/externalLinkWhite.svg"


interface ProjectListingProps {
    data: NonNullable<PROJECT_QUERYResult[0]>,
    highlighted: boolean
}

const ProjectListing = ({ data, highlighted }: ProjectListingProps) => {
    const { title, link, github, body, categories, mainImage, tabletImage, mobileImage } = data;

    return (
        <li className={`${highlighted ? 'bg-thistle text-violet border-thistle' : 'border-thistle'} flex flex-col w-full md:w-4/5 lg:w-full xl:w-4/5 my-4 border-2 rounded-sm`}>
            <div className="bg-white relative mb-5 w-full h-80">
                {mainImage ? (
                    <Image
                        src={urlFor(mainImage).url()}
                        alt={mainImage?.alt || ""}
                        fill
                        className="hidden lg:block object-contain object-top"
                    />
                ) : null}
                {tabletImage ? (
                    <Image
                        src={urlFor(tabletImage).url()}
                        alt={tabletImage?.alt || ""}
                        fill
                        className="hidden md:block lg:hidden object-cover object-top"
                    />
                ) : null}
                {mobileImage ? (
                    <Image
                        src={urlFor(mobileImage).url()}
                        alt={mobileImage?.alt || ""}
                        fill
                        className="block md:hidden object-contain"
                    />
                ) : null}
            </div>
            <div className="p-5">
                <h4 className="text-xl font-semibold mb-2">{title}</h4>
                <div className={`prose max-w-none ${highlighted ? 'text-violet' : 'text-mist'}`}> {body ? <PortableText value={body} /> : null}</div>
                {categories ? <Categories highlighted={highlighted} color="lavender" categories={categories} /> : null}
                <div className="mt-5">
                    <div className="flex my-2 gap-2 underline underline-offset-2">
                        <a href={github}>View GitHub repo</a>
                        <div className="flex flex-col justify-center"><Image src={highlighted ? externalLink : externalLinkWhite} alt="external link" className="size-5" /></div>
                    </div>
                    <div className="flex my-2 gap-2 underline underline-offset-2">
                        <a href={link}>View website</a>
                        <div className="flex flex-col justify-center"><Image src={highlighted ? externalLink : externalLinkWhite} alt="external link" className="size-5" /></div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default ProjectListing;