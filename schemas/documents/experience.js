export default {
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        description: 'Some frontend will require a slug to be set to be able to show the project',
        options: {
          source: 'title',
          maxLength: 96
        }
      },
      {
        name: 'position',
        title: 'Position',
        type: 'string'
      },
      {
        name: 'startedAt',
        title: 'Started at',
        type: 'datetime'
      },
      {
        name: 'endedAt',
        title: 'Ended at',
        type: 'datetime'
      },
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'figure'
      },
      {
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{type: 'reference', to: {type: 'category'}}]
      },
      {
        name: 'body',
        title: 'Body',
        type: 'projectPortableText'
      }
    ],
    preview: {
      select: {
        title: 'title',
        media: 'mainImage',
        position: 'position'
      },
      prepare({title = 'No title', media, position}) {
        return {
          title,
          media,
          subtitle: position
        }
      }
    }
  }