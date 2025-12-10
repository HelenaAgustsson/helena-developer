import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/live";
import { JOBS_QUERY } from "@/sanity/lib/queries";

const options = { next: { revalidate: 60 } };

export default async function Page() {
  const { data: posts } = await sanityFetch({ query: JOBS_QUERY });

  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <h1 className="text-4xl font-bold">CV</h1>
      <ul className="grid grid-cols-1 divide-y divide-blue-100">
        {posts.map((post, index) => (
          <li key={index}  className="block p-4 hover:text-blue-500">
            {post?.job_title} | {post?.employer}
          </li>
        ))}
      </ul>
      <hr />
      <Link href="/">&larr; Return home</Link>
    </main>
  );
}