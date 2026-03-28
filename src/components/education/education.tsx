import { sanityFetch } from "@/sanity/lib/live";
import { EDU_QUERY } from "@/sanity/lib/queries";
import { sortPosts } from "../helpers/sortPosts";
import { EduListing } from "./eduListing";

export async function Education(): Promise<React.JSX.Element> {
  const { data: posts } = await sanityFetch({ query: EDU_QUERY });

  if (!posts || !Array.isArray(posts)) {
    return (
      <section id="education" className="mb-20">
        <h3 className="pt-10 text-2xl font-semibold">Education</h3>
        <ul className="grid grid-cols-1">
          <div>Error loading education data.</div>
        </ul>
      </section>
    );
  }

  const sortedPosts = sortPosts(posts);

  return (
    <section id="education" className="mb-20">
      <h3 className="pt-10 text-2xl font-semibold">Education</h3>
      <ul className="grid grid-cols-1">
        {sortedPosts.map((post, index) => (
          <EduListing key={index} data={post} />
        ))}
      </ul>
    </section>
  );
}