import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap:
      'https://opentech-web-git-feat-seo-optimization-daviddubliakov.vercel.app/sitemap.xml',
  };
}
