import { sanityFetch } from "@/sanity/lib/live";
import { PortableText } from "next-sanity";
import { ABOUT_QUERY } from "@/sanity/lib/queries";

export default async function About() {
  const { data: post } = await sanityFetch({ query: ABOUT_QUERY });

  const about = post[0]
  
  return (
    <div className="mb-20">
        {about ? (
            <div>
                <h3 className="text-xl font-bold">About me</h3>
                <div className="my-4 prose text-mist">{about.body ? <PortableText value={about.body} /> :null}</div>
            </div>
        ):null}
    </div>
  );
}