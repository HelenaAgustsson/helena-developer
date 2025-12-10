import {defineQuery} from 'next-sanity'

export const POSTS_QUERY = defineQuery(`*[_type == "job"]{
    job_title,
    employer,
    start_date,
    end_date
}`)