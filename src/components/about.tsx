import { sanityFetch } from "@/sanity/lib/live";
import { PortableText } from "next-sanity";
import { ABOUT_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import profilePic from "./images/profilePic.jpg"

export default async function About() {
  const { data: post } = await sanityFetch({ query: ABOUT_QUERY });

  const about = post[0]
  
  return (
    <div className="mb-20">
        {about ? (
            <div>
                <div className="flex justify-center mb-8"><Image src={profilePic} alt="helena profile" width="200" height="200" className="rounded-full" /></div>
                <h3 className="text-xl font-bold">About me</h3>
                <div className="my-4 prose max-w-none text-mist">{about.body ? <PortableText value={about.body} /> :null}</div>
            </div>
        ):null}
    </div>
  );
}