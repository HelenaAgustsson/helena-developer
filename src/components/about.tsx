import { sanityFetch } from "@/sanity/lib/live";
import { PortableText } from "next-sanity";
import { ABOUT_QUERY } from "@/sanity/lib/queries";

export async function About(): Promise<React.ReactElement> {
  const { data: posts } = await sanityFetch({ query: ABOUT_QUERY });

  const about = Array.isArray(posts) && posts.length > 0 ? posts[0] : null;

  return (
    <section id="about" className="mt-20 lg:mt-0">
      {about && (
        <div>
          <h3 className="text-2xl font-semibold">About me</h3>
          <div className="prose text-mist my-4 max-w-none">{about.body && <PortableText value={about.body} />}</div>
        </div>
      )}
    </section>
  );
}