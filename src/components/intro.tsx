import { sanityFetch } from "@/sanity/lib/live";
import { PortableText } from "next-sanity";
import { INTRO_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import profilePic from "./images/profilePic.jpg"

const Intro = async () => {
    const { data: post } = await sanityFetch({ query: INTRO_QUERY });

    const intro = post[0];

    return (
        <div className="pt-5">
            <div className="flex justify-center mb-8"><Image src={profilePic} alt="helena profile" width="200" height="200" className="rounded-full" /></div>
            <div className="my-4 prose max-w-none text-mist">
                {intro.body ? <PortableText value={intro.body} /> :null}
            </div>
        </div>
        
    )
}

export default Intro;