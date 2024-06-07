import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'expereince',
  title: '  Expereince',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'J',
      type: 'string',
    },

    {
      name: 'companyImage',
      title: 'Company Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    {
      name: 'company',
      title: 'Company',
      type: 'text',
    },
    {
      name: 'dateStarted',
      title: 'Date Started',
      type: 'date',
    },
    {
      name: 'dateEnded',
      title: 'Date Ended',
      type: 'date',
    },
    {
      name: 'isCurrentlyWorking',
      title: 'Is Currently Working',
      type: 'boolean',
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skills'}}],
    },
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
  ],
})
