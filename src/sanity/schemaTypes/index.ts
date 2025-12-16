import { type SchemaTypeDefinition } from 'sanity'
import { jobType } from './jobType'
import { eduType } from './eduType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [jobType, eduType],
}
