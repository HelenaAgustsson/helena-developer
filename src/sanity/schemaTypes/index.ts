import { type SchemaTypeDefinition } from 'sanity'
import { jobType } from './jobType'
import { eduType } from './eduType'
import { projectType } from './projectType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [jobType, eduType, projectType],
}
