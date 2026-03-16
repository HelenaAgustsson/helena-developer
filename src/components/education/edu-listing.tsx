import dayjs from "dayjs";
import { PortableText } from "next-sanity";
import { EDU_QUERYResult } from "@/sanity/types";

interface Props {
    data: NonNullable<EDU_QUERYResult[0]>
}

export function EduListing({ data }: Props) {
    const { degree, result, institution, start_date, end_date, body } = data;

    const start = start_date ? dayjs(start_date).format('MMMM YYYY') : '…';
    const end = end_date ? dayjs(end_date).format('MMMM YYYY') : 'Present';

    return (
        <li className="block my-4">
            <h4 className="font-semibold">{degree}, {result} | {institution}</h4>
            <time>{start} - {end}</time>
            <div className="prose max-w-none text-mist"> {body && <PortableText value={body} />}</div>
        </li>
    )
}