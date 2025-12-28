import { PortableText } from "next-sanity";
import { PROJECT_QUERYResult } from "@/sanity/types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import externalLink from "./icons/externalLink.svg"

interface ProjectListingProps {
    data: NonNullable<PROJECT_QUERYResult[0]>
}

const ProjectListing = ({data}: ProjectListingProps) => {
    const {title, link, github, body, mainImage } = data;

    return (
        <li className="flex flex-col my-4 bg-aqua text-violet p-2 rounded-sm">
            <div className="relative mb-5 w-full h-80">
                {mainImage ? (
                        <Image
                            src={urlFor(mainImage).url()}
                            alt={mainImage?.alt || ""}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover object-top-left"
                        />
            ):null}
            </div>
            <div className="p-5">
                <h4 className="flex gap-2 font-semibold">{title}</h4>
                <div className="prose max-w-none text-violet"> {body ? <PortableText value={body} /> :null}</div>
                <div className="flex my-2 gap-2 underline underline-offset-2">
                    <a href={github}>View GitHub repo</a>
                    <div className="flex flex-col justify-center"><Image src={externalLink} alt="github logo" className="size-5" /></div>
                </div>
                <div className="flex my-2 gap-2 underline underline-offset-2">
                    <a href={link}>View website</a>
                    <div className="flex flex-col justify-center"><Image src={externalLink} alt="external link" className="size-5" /></div>
                </div>
            </div>
        </li>
    )
}

export default ProjectListing;