import { sanityFetch } from "@/sanity/lib/live";
import { PortableText } from "next-sanity";
import { INTRO_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import profilePic from "./images/profilePic.jpg"
import envelope from "./icons/envelope.svg"
import gitHubWhite from "./icons/githubWhite.svg"


export async function Intro(): Promise<React.ReactElement> {
    const { data: posts } = await sanityFetch({ query: INTRO_QUERY });

    const intro = Array.isArray(posts) && posts.length > 0 ? posts[0] : null;

    return (
        <div className="pt-5">
            <div className="flex justify-center mb-8">
                <Image src={profilePic} alt="Helena Agustsson profile picture" priority width="200" height="200" className="rounded-full" />
            </div>
            <div className="my-8 max-w-none">
                {intro && intro.body ? <PortableText value={intro.body} /> : null}
            </div>
            <div className="my-2">
                <div className="flex my-2">
                    <div className="mr-2"><Image src={gitHubWhite} alt="github logo" className="size-7" /></div>
                    <a className="underline underline-offset-2" rel="noopener noreferrer" href="https://github.com/HelenaAgustsson">github.com/HelenaAgustsson</a>
                </div>
                <div className="flex my-2">
                    <div className="mr-2"><Image src={envelope} alt="email icon" className="size-6" /></div>
                    <a className="underline underline-offset-2" href="mailto:agustssonhelena@gmail.com">agustssonhelena@gmail.com</a>
                </div>
            </div>
        </div>

    )
}