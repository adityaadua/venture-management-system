import { adminOnly, authenticated } from '@/access/authenticated'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  access: {
    admin: adminOnly,
    create: adminOnly,
    read: adminOnly,
    delete: adminOnly,
    update: adminOnly,
  },
  admin: {
    defaultColumns: ['email', 'name', 'role'],
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'first_name',
      label: 'First Name',
      type: 'text',
      required: true,
    },
    {
      name: 'last_name',
      label: 'Last Name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      label: 'Role',
      type: 'select',
      options: ['admin', 'founder', 'investor', 'mentor'],
      required: true,
    },
  ],
}
