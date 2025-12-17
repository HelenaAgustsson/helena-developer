import { PortableText } from "next-sanity";
import { PROJECT_QUERYResult } from "@/sanity/types";
import Categories from "./categories";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";

interface ProjectListingProps {
    data: NonNullable<PROJECT_QUERYResult[0]>
}

const ProjectListing = ({data}: ProjectListingProps) => {
    const {project, github, body, categories, mainImage } = data;
    return (
        <li className="flex flex-col md:flex-row block my-4 text-aqua">
            <div className="mb-5">
                {mainImage ? (
                <img
                    className="aspect-320/180"
                    src={urlFor(mainImage)
                        .width(320)
                        .height(180)
                        .quality(80)
                        .auto("format")
                        .url()}
                    alt={mainImage?.alt || ""}
                    width="320"
                    height="180"
                />
            ):null}
            </div>
            <div className="md:ml-5">
                {project}
                <br />
                <div className="prose text-mist"> {body ? <PortableText value={body} /> :null}</div>
                    <Link href={github}>Github repo</Link>
                    {categories ? <Categories categories={categories} />:null}
            </div>
        </li>
    )
}

export default ProjectListing;