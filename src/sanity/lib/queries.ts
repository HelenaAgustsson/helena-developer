import {defineQuery} from 'next-sanity'

export const JOBS_QUERY = defineQuery(`*[_type == "job"]{
    job_title,
    employer,
    start_date,
    end_date,
    body,
    categories
}`)