import { PortableText } from "next-sanity";
import { PROJECT_QUERYResult } from "@/sanity/types";
import Categories from "./categories";
import Link from "next/link";

interface ProjectListingProps {
    data: NonNullable<PROJECT_QUERYResult[0]>
}

const ProjectListing = ({data}: ProjectListingProps) => {
    const {project, github, body, categories } = data;
    return (
        <li className="block my-4 text-aqua">
            {project}
            <br />
            <div className="prose text-mist"> {body ? <PortableText value={body} /> :null}</div>
            <Link href={github}>Github repo</Link>
            {categories ? <Categories categories={categories} />:null}
        </li>
    )
}

export default ProjectListing;