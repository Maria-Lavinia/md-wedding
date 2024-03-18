// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const languagesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    iso: z.string(),
    fullName: z.string(),
    phoneNumber: z.string(),
    email: z.string(),
    diet: z.string(),
    guests: z.string(),
    additionalInfo: z.string(),
    guestName: z.string(),
    guestDiet: z.string(),
    closeBtn: z.string(),
    submitBtn: z.string(),
    saveTheDate: z.string(),
    newlyWeds: z.string(),
    date: z.string(),
    invitation: z.string(),
    contactInfo:  z.string(),
    contactHealine:  z.string(),
    location:  z.string(),
    address:  z.string()
  })
});


export const collections = {
  'languages': languagesCollection,
};