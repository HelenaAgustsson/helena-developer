import { PortableText } from "next-sanity";
import { PROJECT_QUERYResult } from "@/sanity/types";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import githubLogo from "./images/githubLogo.png"
import Image from "next/image";

interface ProjectListingProps {
    data: NonNullable<PROJECT_QUERYResult[0]>
}

const ProjectListing = ({data}: ProjectListingProps) => {
    const {title, link, github, body, mainImage } = data;

    const formattedLink = link.split("https://")[1];

    return (
        <li className="flex flex-col my-4">
            <div className="relative mb-5 w-full 2xl:w-2/3 h-80">
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
            <div>
                <div className="text-aqua">{title}</div>
                <Link href={link} className="text-aqua">{formattedLink}</Link>
                <div className="prose max-w-none text-mist"> {body ? <PortableText value={body} /> :null}</div>
                <div className="mt-2"><Link href={github}><Image src={githubLogo} alt="github logo" height="25" /></Link></div>
            </div>
        </li>
    )
}

export default ProjectListing;

/*
<img
                            className="aspect-450/350"
                            src={urlFor(mainImage)
                                .width(450)
                                .height(350)
                                .quality(80)
                                .auto("format")
                                .url()}
                            alt={mainImage?.alt || ""}
                            width="450"
                            height="350"
                        />
                        */