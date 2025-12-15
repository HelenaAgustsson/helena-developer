import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { JOBS_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

export default async function Experience() {
  const { data: posts } = await sanityFetch({ query: JOBS_QUERY });

  return (
    <div>
        <h3 className="text-xl">Experience</h3>
        <ul className="grid grid-cols-1">
            {posts.map((post, index) => (
            <li key={index}  className="block mt-4 hover:text-aqua">
                {post?.job_title} | {post?.employer}
                <br />
                {post?.start_date} - {post?.end_date}
            </li>
            ))}
        </ul>
    </div>
  );
}