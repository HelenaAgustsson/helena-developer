import {defineQuery} from 'next-sanity'

export const JOBS_QUERY = defineQuery(`*[_type == "job"]{
    job_title,
    employer,
    start_date,
    end_date,
    body,
    categories
}`)


export const EDU_QUERY = defineQuery(`*[_type == "education"]{
    degree,
    institution,
    result,
    start_date,
    end_date,
    body,
}`)

export const PROJECT_QUERY = defineQuery(`*[_type == "project"]{
    title,
    link,
    github,
    body,
    categories,
    mainImage,
    tabletImage,
    mobileImage
}`)

export const ABOUT_QUERY = defineQuery(`*[_type == "profile" && title=="About me"]{
    title,
    body,
}`)

export const INTRO_QUERY = defineQuery(`*[_type == "profile" && title=="Intro"]{
    body,
}`)

export const CV_NO_QUERY = defineQuery(`*[_type == "pdf" && title=="CV_Norwegian"][0]{
    title,
    pdfFile {
      asset->{
        _id,
        url
      }
    }
}`)

export const CV_EN_QUERY = defineQuery(`*[_type == "pdf" && title=="CV_English"][0]{
    title,
    pdfFile {
      asset->{
        _id,
        url
      }
    }
}`)