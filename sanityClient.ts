import {createClient} from '@sanity/client'
import 'dotenv/config'

export const client =  createClient({
    projectId: process.env.projectId,
    dataset: process.env.dataset,
    apiVersion:"2025-01-13",
    useCdn:false,
    token: process.env.token
})