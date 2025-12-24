import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { JOBS_QUERY } from "@/sanity/lib/queries";
import dayjs from "dayjs";
import JobListing from "./job-listing";
import Image from "next/image";
import externalLink from "./images/externalLink.png"

export default async function Experience() {
  const { data: posts } = await sanityFetch({ query: JOBS_QUERY });

  posts.sort((a,b):number => {
    return dayjs(b.start_date).diff(a.start_date);
  })
  
  return (
    <section id="experience" className="mb-20">
        <h3 className="pt-10 text-xl font-bold">Experience</h3>
        <ul className="grid grid-cols-1">
            {posts.map((post, index) => (
              <JobListing key={index} data={post} />
            ))}
        </ul>
        <div className="flex flex-col gap-2">
          <div>
            <Link href='/CV2025.pdf' target="_blank" className="inline-flex gap-2">
              <div className="flex flex-col justify-center"><Image src={externalLink} alt="external link" className="size-4" /></div>
              <span>View full CV (EN)</span>
            </Link>
          </div>
          <div>
            <Link href='/CV2025NO.pdf' target="_blank" className="inline-flex gap-2">
              <div className="flex flex-col justify-center"><Image src={externalLink} alt="external link" className="size-4" /></div>
              <span>View full CV (NO)</span>
            </Link>
          </div>
        </div>
    </section>
  );
}