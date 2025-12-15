import {defineField, defineType} from 'sanity'

export const jobType = defineType({
  name: 'job',
  title: 'Job',
  type: 'document',
  fields: [
    defineField({
      name: 'job_title',
      type: 'string',
    }),
     defineField({
      name: 'employer',
      type: 'string',
    }),
    defineField({
      name: 'start_date',
      type: 'date',
    }),
    defineField({
      name: 'end_date',
      type: 'date',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}]
    }),
  ],
})