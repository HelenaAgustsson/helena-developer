import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { JOBS_QUERY } from "@/sanity/lib/queries";
import dayjs from "dayjs";
import JobListing from "./job-listing";
import Image from "next/image";
import externalLink from "./images/externalLink.png"
import file from "./icons/file.svg"

export default async function Experience() {
  const { data: posts } = await sanityFetch({ query: JOBS_QUERY });

  posts.sort((a,b):number => {
    return dayjs(b.start_date).diff(a.start_date);
  })

  const getHighlighted = (index:number): boolean => {
    if(index === 0) {
      return true
    } else {
      return false;
    }
  }
  
  return (
    <section id="experience" className="mb-20">
        <h3 className="pt-10 text-xl font-bold">Experience</h3>
        <ul className="grid grid-cols-1">
            {posts.map((post, index) => (
              <JobListing key={index} data={post} highlighted={getHighlighted(index)} />
            ))}
        </ul>
        <div className="flex flex-col gap-2">
          <div>
            <Link href='/cv-english' target="_blank" className="inline-flex gap-1 underline underline-offset-2">
              <div className="flex flex-col justify-center"><Image src={file} alt="external link" className="size-5" /></div>
              <span>View full CV in English</span>
            </Link>
          </div>
          <div>
            <Link href='/cv-norwegian' target="_blank" className="inline-flex gap-1 underline underline-offset-2">
              <div className="flex flex-col justify-center"><Image src={file} alt="external link" className="size-5" /></div>
              <span>View full CV in Norwegian</span>
            </Link>
          </div>
        </div>
    </section>
  );
}