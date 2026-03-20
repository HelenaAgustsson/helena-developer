export const createPortableText = (text: string) => [
  {
    _type: 'block' as const,
    _key: crypto.randomUUID(),
    children: [
      {
        _type: 'span' as const,
        _key: crypto.randomUUID(),
        text,
        marks: [],
      },
    ],
  },
];