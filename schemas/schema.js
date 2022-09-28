// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Document types
import category from './documents/category'
import profile from './documents/profile'
import project from './documents/project'
import settings from './documents/settings'
import experience from './documents/experience'
import education from './documents/education'

// Object types
import bioPortableText from './objects/bioPortableText'
import figure from './objects/figure'
import projectPortableText from './objects/projectPortableText'
import simplePortableText from './objects/simplePortableText'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'portfolio',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    bioPortableText,
    figure,
    projectPortableText,
    simplePortableText,
    // The following are document types which will appear
    // in the studio.
    category,
    profile,
    project,
    experience,
    education,
    settings
  ])
})