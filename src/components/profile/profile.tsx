import { sanityFetch } from "@/sanity/lib/live";
import { PortableText } from "next-sanity";
import { PROFILE_QUERY } from "@/sanity/lib/queries";

export async function Profile(): Promise<React.ReactElement> {
  const { data: profile } = await sanityFetch({ query: PROFILE_QUERY });

  const isComplete = profile && profile.body;

  return (
    <section id="about" className="mt-20 lg:mt-0">
      {isComplete ? (
        <div>
          {profile.title && <h3 className="text-2xl font-semibold">{profile.title}</h3>}
          <div className="prose text-mist my-4 max-w-none"><PortableText value={profile.body} /></div>
        </div>
      ) : <div>Profile is not available</div>}
    </section>
  );
}