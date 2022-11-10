export default {
  name: 'page',
  type: 'document',
  title: 'Pages',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      }
    },
    {
      name: 'body',
      type: 'array',
      title: 'Body',
      of: [{type: 'section'}]
    }
  ]
}