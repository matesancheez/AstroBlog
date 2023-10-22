// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: 'content', 
  schema:({image}) => z.object({
    author: z.string(),
    date: z.string(),
    title: z.string(),
    image: image()
  }),
});


// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'posts': blogCollection,
};