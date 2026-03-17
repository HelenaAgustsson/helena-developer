import dayjs from "dayjs";
import { JOBS_QUERYResult, EDU_QUERYResult } from "@/sanity/types";

type Props = JOBS_QUERYResult | EDU_QUERYResult
  
export const sortPosts = (posts:Props):Props => {
    return posts.sort((a, b): number => {
        const aDate = a.start_date ? dayjs(a.start_date) : dayjs(0);
        const bDate = b.start_date ? dayjs(b.start_date) : dayjs(0);
        return bDate.diff(aDate);
    });
}