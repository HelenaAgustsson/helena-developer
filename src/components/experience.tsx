import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { JOBS_QUERY } from "@/sanity/lib/queries";
import dayjs from "dayjs";
import JobListing from "./job-listing";

const options = { next: { revalidate: 60 } };

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
        <Link href='/cv' className="text-bold underline underline-offset-3 hover:text-aqua">View full CV</Link>
    </section>
  );
}