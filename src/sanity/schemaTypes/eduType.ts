import {defineField, defineType} from 'sanity'

export const eduType = defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({
      name: 'degree',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
     defineField({
      name: 'institution',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'result',
      type: 'string',
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
  ],
})