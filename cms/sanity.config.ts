import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'andrecasal.com',

  projectId: 'zd070vvd',
  dataset: 'articles',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
