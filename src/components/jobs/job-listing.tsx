import dayjs from "dayjs";
import { PortableText } from "next-sanity";
import { JOBS_QUERYResult } from "@/sanity/types";
import Categories from "../categories";

interface JobListingProps {
    data: NonNullable<JOBS_QUERYResult[0]>
    highlighted: boolean;
}

const JobListing = ({ data, highlighted }: JobListingProps) => {
    const { job_title, employer, start_date, end_date, body, categories } = data;
    return (
        <li className={`block my-4 ${highlighted ? 'bg-aqua text-violet p-3' : null} rounded-sm`}>
            <h4 className="font-semibold">{job_title} | {employer}</h4>
            <div>{dayjs(start_date).format('MMMM YYYY')} - {dayjs(end_date).format('MMMM YYYY')}</div>
            <div className={`prose max-w-none ${highlighted ? 'text-violet' : 'text-mist'}`}> {body ? <PortableText value={body} /> : null}</div>
            {categories ? <Categories highlighted={highlighted} categories={categories} /> : null}
        </li>
    )
}

export default JobListing;