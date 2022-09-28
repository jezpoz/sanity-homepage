export default {
    name: 'settings',
    type: 'document',
    title: 'Settings',
    __experimental_actions: [
      'create',
      'update',
      // 'delete',
      'publish'
    ],
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'description',
        type: 'text',
        title: 'Description',
        description: 'Describe your portfolio for search engines and social media.'
      },
      {
        name: 'keywords',
        type: 'array',
        title: 'Keywords',
        description: 'Add keywords that describes your portfolio.',
        of: [{type: 'string'}],
        options: {
          layout: 'tags'
        }
      },
      {
        name: 'author',
        type: 'reference',
        description: 'Publish an author and set a reference to them here.',
        title: 'Author',
        to: [{type: 'profile'}]
      }
    ]
  }