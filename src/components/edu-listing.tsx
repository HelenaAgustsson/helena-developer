import dayjs from "dayjs";
import { PortableText } from "next-sanity";
import { EDU_QUERYResult } from "@/sanity/types";
import Categories from "./categories";

interface EduListingProps {
    data: NonNullable<EDU_QUERYResult[0]>
}

const EduListing = ({data}: EduListingProps) => {
    const {degree, result, institution, start_date, end_date, body, } = data;
    return (
        <li className="block my-4 text-aqua">
            {degree}, {result} | {institution}
            <br />
            {dayjs(start_date).format('MMMM YYYY')} - {dayjs(end_date).format('MMMM YYYY')}
            <div className="prose text-mist"> {body ? <PortableText value={body} /> :null}</div>
        </li>
    )
}

export default EduListing;