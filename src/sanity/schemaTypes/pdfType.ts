import {defineField, defineType} from 'sanity'

export const pdfType = defineType({
  name: 'pdf',
  title: 'PDF',
  type: 'document',
  fields: [
    defineField({
      name: 'pdf_title',
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
