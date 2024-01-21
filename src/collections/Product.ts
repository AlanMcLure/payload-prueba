import { CollectionConfig } from 'payload/types'

const Products: CollectionConfig = {
    slug: 'products',
    auth: true,
    admin: {
        useAsTitle: 'nombre',
    },
    fields: [
        // Email added by default
        // Add more fields as needed
    ],
}

export default Products
