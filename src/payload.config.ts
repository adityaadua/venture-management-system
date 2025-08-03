// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/users'
import { Media } from './collections/media'
import { getServerSideURL } from './lib/get-url'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media],
  cors: [getServerSideURL()].filter(Boolean),
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
  onInit: async (payload) => {
    // This function runs when the server first initializes
    // Check if there are any users, if not, create a default admin user
    const users = await payload.find({
      collection: 'users',
      limit: 0,
    })

    if (users.totalDocs === 0) {
      const res = await payload.create({
        collection: 'users',
        data: {
          email: 'admin@example.com',
          password: 'changeme123',
          first_name: 'Super',
          last_name: 'Admin',
          role: 'admin',
        },
      })
      console.log('Default admin user created:', res)
    }
  },
})
