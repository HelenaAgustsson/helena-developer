import Link from "next/link";
import Image from "next/image";
import { sanityFetch } from "@/sanity/lib/live";
import { JOBS_QUERY } from "@/sanity/lib/queries";
import { getHighlighted } from "../helpers/getHighlighted";
import { sortPosts } from "../helpers/sortPosts";
import { JobListing } from "./jobListing";
import file from "../icons/file.svg"


export async function Jobs(): Promise<React.ReactElement> {
  const { data: posts } = await sanityFetch({ query: JOBS_QUERY });

  const sortedPosts = sortPosts(posts);

  return (
    <section id="experience" className="mb-20">
      <h3 className="pt-10 text-2xl font-semibold">Experience</h3>
      <ul className="grid grid-cols-1">
        {sortedPosts && Array.isArray(sortedPosts) ? sortedPosts.map((post, index) => (
          <JobListing key={index} data={post} highlighted={getHighlighted(index)} />
        )) : <div>Error loading job data.</div>}
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