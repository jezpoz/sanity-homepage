export default {
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [{
    name: 'text',
    type: 'string',
    title: 'Text',
  },
  {
    name: 'externalLink',
    type: 'boolean',
    title: 'External',
    initialValue: false,
  },
  {
    type: 'reference',
    name: 'reference',
    title: 'Internal reference',
    hidden: ({parent}) => parent.externalLink,
    to: [
      {
        type: 'page',
      },
      {
        type: 'education',
      },
      {
        type: 'experience',
      },
      {
        type: 'project',
      },
    ]
  },
  {
    name: 'url',
    type: 'url',
    title: 'Url',
    hidden: ({parent}) => !parent.externalLink,
    validation: Rule => Rule.uri({
      scheme: ['http', 'https', 'mailto', 'tel']
    }),
  },
  ]
}