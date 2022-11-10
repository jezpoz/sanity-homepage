export default {
    name: 'education',
    title: 'Education',
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
        name: 'degree',
        title: 'Degree',
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
        name: 'body',
        title: 'Body',
        type: 'portableText'
      }
    ],
    preview: {
      select: {
        title: 'title',
        media: 'mainImage'
      },
      prepare({title = 'No title', media}) {
        return {
          title,
          media,
        }
      }
    }
  }