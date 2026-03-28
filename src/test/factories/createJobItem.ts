import { JOBS_QUERYResult } from "@/sanity/types";
import { createPortableText } from "./createPortableText";

type JobItem = NonNullable<JOBS_QUERYResult[0]>;    

export const createJobItem = (overrides?: Partial<JobItem>): JobItem => ({
    job_title: 'Frontend Developer',
    employer: 'Tech Company',
    start_date: '2020-01-01',
    end_date: '2023-01-01',
    body: createPortableText('Default job description'),
    categories: ['React', 'Typescript'],
    ...overrides,
});