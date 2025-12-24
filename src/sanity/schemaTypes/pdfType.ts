import {defineField, defineType} from 'sanity'

export const pdfType = defineType({
  name: 'pdf',
  title: 'PDF',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'pdfFile',
      type: 'file',  
      options: {
        accept: 'application/pdf'
      }
    })
  ],
})
