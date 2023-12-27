export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SEO_BASE_URL;
  const pages = ['/portfolio', '/about-us', '/contact'];

  const pagesUrls = pages.map(page => {
    return {
      url: baseUrl + page,
      lastModified: new Date(),
    };
  });

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...pagesUrls,
  ];
}
