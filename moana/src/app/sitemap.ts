/* eslint @typescript-eslint/no-unused-vars: 0 */

import { MetadataRoute } from 'next'

export default function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = process.env.NEXT_PUBLIC_FRONT_BASE_URL

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${url}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${url}/trainer`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${url}/facility`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${url}/price`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ]

  return [...staticPages]
}
