import dayjs from "dayjs";
import { sanityFetch } from "@/sanity/lib/live";
import { EDU_QUERY } from "@/sanity/lib/queries";
import { EduListing } from "./edu-listing";

export async function Education(): Promise<React.JSX.Element> {
  const { data: posts } = await sanityFetch({ query: EDU_QUERY });

  posts.sort((a, b): number => {
    const aDate = a.start_date ? dayjs(a.start_date) : dayjs(0);
    const bDate = b.start_date ? dayjs(b.start_date) : dayjs(0);
    return bDate.diff(aDate);
  });

  return (
    <section id="education" className="mb-20">
      <h3 className="pt-10 text-2xl font-semibold">Education</h3>
      <ul className="grid grid-cols-1">
        {posts && Array.isArray(posts) ? posts.map((post, index) => (
          <EduListing key={index} data={post} />
        )) : <div>Error loading education data.</div>}
      </ul>
    </section>
  );
}