import { sanityFetch } from "@/sanity/lib/live";
import { PortableText } from "next-sanity";
import { INTRO_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import profilePic from "./images/profilePic.jpg"
import Link from "next/link";
import githubLogo from "./images/githubLogo.png"
import mail from "./images/mail.png"

const Intro = async () => {
    const { data: post } = await sanityFetch({ query: INTRO_QUERY });

    const intro = post[0];

    return (
        <div className="pt-5 lg:mb-0">
            <div className="flex justify-center mb-8"><Image src={profilePic} alt="helena profile" width="200" height="200" className="rounded-full" /></div>
            <div className="my-4 prose max-w-none text-mist">
                {intro.body ? <PortableText value={intro.body} /> :null}
            </div>
            <div className="my-2">
                <div className="flex my-2">
                    <div className="mr-2"><Image src={githubLogo} alt="github logo" height="25" /></div>
                    <Link href="https://github.com/HelenaAgustsson">github.com/HelenaAgustsson</Link>
                </div>
                 <div className="flex my-2">
                    <div className="mr-2"><Image src={mail} alt="github logo" height="25" /></div>
                    <div>agustssonhelena@gmail.com</div>
                </div>
            </div>

        </div>
        
    )
}

export default Intro;