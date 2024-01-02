import { CollectionConfig } from 'payload/types'

const Products: CollectionConfig = {
    slug: 'users',
    auth: true,
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        // Email added by default
        // Add more fields as needed
    ],
}

export default Products
