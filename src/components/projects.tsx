import { sanityFetch } from "@/sanity/lib/live";
import { PROJECT_QUERY } from "@/sanity/lib/queries";
import ProjectListing from "./project-listing";
import { getHighlighted } from "./helpers";

const options = { next: { revalidate: 60 } };

export default async function Projects() {
  const { data: posts } = await sanityFetch({ query: PROJECT_QUERY });

  return (
    <section id="projects" className="mb-20">
      <h3 className="pt-10 text-xl font-bold">Projects</h3>
      <ul className="grid grid-cols-1">
        {posts.map((post, index) => (
          <ProjectListing key={index} data={post} highlighted={getHighlighted(index)} />
        ))}
      </ul>
    </section>
  );
}