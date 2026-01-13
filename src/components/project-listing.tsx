import { PortableText } from "next-sanity";
import { PROJECT_QUERYResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import externalLink from "./icons/externalLink.svg"
import externalLinkWhite from "./icons/externalLinkWhite.svg"


interface ProjectListingProps {
    data: NonNullable<PROJECT_QUERYResult[0]>,
    highlighted: boolean
}

const ProjectListing = ({ data, highlighted }: ProjectListingProps) => {
    const { title, link, github, body, mainImage } = data;

    return (
        <li className={`${highlighted ? 'bg-thistle text-violet border-thistle' : 'border-thistle'} flex flex-col w-full md:w-4/5 my-4 border-2 rounded-sm`}>
            <div className="relative mb-5 w-full h-80">
                {mainImage ? (
                    <Image
                        src={urlFor(mainImage).url()}
                        alt={mainImage?.alt || ""}
                        fill
                        className="object-cover objecy-center md:object-top-left"
                    />
                ) : null}
            </div>
            <div className="p-5">
                <h4 className="flex gap-2 font-semibold">{title}</h4>
                <div className={`prose max-w-none ${highlighted ? 'text-violet' : 'text-mist'}`}> {body ? <PortableText value={body} /> : null}</div>
                <div className="flex my-2 gap-2 underline underline-offset-2">
                    <a href={github}>View GitHub repo</a>
                    <div className="flex flex-col justify-center"><Image src={highlighted ? externalLink : externalLinkWhite} alt="external link" className="size-5" /></div>
                </div>
                <div className="flex my-2 gap-2 underline underline-offset-2">
                    <a href={link}>View website</a>
                    <div className="flex flex-col justify-center"><Image src={highlighted ? externalLink : externalLinkWhite} alt="external link" className="size-5" /></div>
                </div>
            </div>
        </li>
    )
}

export default ProjectListing;