
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
    <div>
        <h3 className="text-xl font-bold">Experience</h3>
        <ul className="grid grid-cols-1">
            {posts.map((post, index) => (
              <JobListing key={index} data={post} />
            ))}
        </ul>
    </div>
  );
}