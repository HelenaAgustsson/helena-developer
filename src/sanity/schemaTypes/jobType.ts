import {defineField, defineType} from 'sanity'

export const jobType = defineType({
  name: 'job',
  title: 'Job',
  type: 'document',
  fields: [
    defineField({
      name: 'job_title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
     defineField({
      name: 'employer',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'start_date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'end_date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [{type:'string'}],
      validation: (rule) => rule.required(),
    }),
  ],
})