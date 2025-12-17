import { sanityFetch } from "@/sanity/lib/live";
import { EDU_QUERY } from "@/sanity/lib/queries";
import dayjs from "dayjs";
import EduListing from "./edu-listing";

const options = { next: { revalidate: 60 } };

export default async function Eduction() {
  const { data: posts } = await sanityFetch({ query: EDU_QUERY });

  posts.sort((a,b):number => {
    return dayjs(b.start_date).diff(a.start_date);
  })
  
  return (
    <div className="mb-20">
       <h3 className="text-xl font-bold">Education</h3>
        <ul className="grid grid-cols-1">
          {posts.map((post, index) => (
              <EduListing key={index} data={post} />
            ))}
        </ul>
    </div>
  );
}