import dayjs from "dayjs";
import { PortableText } from "next-sanity";
import { EDU_QUERYResult } from "@/sanity/types";

interface EduListingProps {
    data: NonNullable<EDU_QUERYResult[0]>
}

const EduListing = ({data}: EduListingProps) => {
    const {degree, result, institution, start_date, end_date, body, } = data;
    return (
        <li className="block my-4">
            <h4 className="font-semibold">{degree}, {result} | {institution}</h4>
            {dayjs(start_date).format('MMMM YYYY')} - {dayjs(end_date).format('MMMM YYYY')}
            <div className="prose max-w-none text-mist"> {body ? <PortableText value={body} /> :null}</div>
        </li>
    )
}

export default EduListing;