import { sanityFetch } from "@/sanity/lib/live";
import { PortableText } from "next-sanity";
import { INTRO_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import profilePic from "./images/profilePic.jpg"
import envelope from "./icons/envelope.svg"
import gitHubWhite from "./icons/githubWhite.svg"


const Intro = async () => {
    const { data: post } = await sanityFetch({ query: INTRO_QUERY });

    const intro = post[0];

    return (
        <div className="pt-5 lg:mb-0">
            <div className="flex justify-center mb-8">
                <Image src={profilePic} alt="helena profile" width="200" height="200" className="rounded-full" />
            </div>
            <div className="my-8 max-w-none">
                {intro && intro.body ? <PortableText value={intro.body} /> : null}
            </div>
            <div className="my-2">
                <div className="flex my-2">
                    <div className="mr-2"><Image src={gitHubWhite} alt="github logo" className="size-7" /></div>
                    <a className="text-mist underline underline-offset-2" href="https://github.com/HelenaAgustsson">github.com/HelenaAgustsson</a>
                </div>
                <div className="flex my-2">
                    <div className="mr-2"><Image src={envelope} alt="email icon" className="size-6" /></div>
                    <div>agustssonhelena@gmail.com</div>
                </div>
            </div>

        </div>

    )
}

export default Intro;