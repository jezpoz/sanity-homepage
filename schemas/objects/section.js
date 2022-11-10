export default {
  name: 'section',
  title: 'Section',
  type: 'object',
  fields: [
    {
      name: 'heading',
      type: 'string',
      title: 'Heading',
    },
    {
      name: 'description',
      type: 'projectPortableText',
      title: 'Description'
    },
    {
      name: 'backgroundImage',
      type: 'figure',
      title: 'Background image'
    },
    {
      name: 'ctas',
      type: 'array',
      title: 'CTAs',
      of: [
        {
          type: 'link',
        }
      ]
    }
  ],
  preview: {
    select: {
      imageUrl: 'backgroundImage.asset.url',
      title: 'heading'
    }
  }
}