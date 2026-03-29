/*
import type { PROJECT_QUERYResult } from "@/sanity/types";
import { createPortableText } from "./createPortableText";

type ProjectItem = NonNullable<PROJECT_QUERYResult[0]>;

export const createProjectItem = (overrides?: Partial<ProjectItem>): ProjectItem => ({
    title: 'Test Project',
    link: 'https://example.com',
    github: 'https://github.com/example/project',
    body: createPortableText('This is a test project description.'),
    categories: ['Test', 'Example'],
    mainImage: {
        asset: {
            url: 'https://example.com/image.jpg',
        },
    },  
    ...overrides,
});
*/