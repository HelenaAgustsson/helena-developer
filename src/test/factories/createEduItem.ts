import type { EDU_QUERYResult } from '@/sanity/types';
import { createPortableText } from './createPortableText';

// Define the type for an education item based on the query result
type EduItem = NonNullable<EDU_QUERYResult[0]>;

export const createEduItem = (overrides?: Partial<EduItem>): EduItem => ({
  degree: 'BSc Computer Science',
  result: 'First Class',
  institution: 'University of Test',
  start_date: '2020-01-01',
  end_date: '2023-01-01',
  body: createPortableText('Default content'),
  ...overrides,
});