
import { sanityFetch } from "@/sanity/lib/live";
import { JOBS_QUERY } from "@/sanity/lib/queries";
import dayjs from "dayjs";
import { PortableText } from "next-sanity";

const options = { next: { revalidate: 60 } };

export default async function Experience() {
  const { data: posts } = await sanityFetch({ query: JOBS_QUERY });

  const getStartDate = (post:any) => {
    return post.start_date;
  }

  posts.sort((a,b):number => {
    const date1 = getStartDate(a);
    const date2=getStartDate(b);
    return dayjs(date2).diff(date1);
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
            </li>
            ))}
        </ul>
    </div>
  );
}