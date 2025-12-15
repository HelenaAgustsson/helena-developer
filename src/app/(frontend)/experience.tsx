
import { sanityFetch } from "@/sanity/lib/live";
import { JOBS_QUERY } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";
import dayjs from "dayjs";
import Categories from "./categories";

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
            <li key={index}  className="block my-4 text-aqua">
                {post?.job_title} | {post?.employer}
                <br />
                {dayjs(post?.start_date).format('MMMM YYYY')} - {dayjs(post?.end_date).format('MMMM YYYY')}
                <div className="prose text-mist"> {post?.body ? <PortableText value={post.body} /> :null}</div>
                {post?.categories ? <Categories categories={post.categories} />:null}
            </li>
            ))}
        </ul>
    </div>
  );
}