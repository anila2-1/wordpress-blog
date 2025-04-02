import { getAllPosts } from '../lib/queries';

export const revalidate = 3600;

export default async function sitemap() {
  const mainUrls = [
    {
      url: `${process.env.WORDPRESS_URL}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${process.env.WORDPRESS_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.WORDPRESS_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.WORDPRESS_URL}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.WORDPRESS_URL}/privacypolicy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${process.env.WORDPRESS_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];

  const postUrls = [];
  const perPage = 100;
  let pageNumber = 1;

  while (true) {
    const posts = await getAllPosts(pageNumber, perPage);
    const batchPostUrls = (posts?.posts || []).map((post) => ({
      url: `${process.env.WORDPRESS_URL}/blog/${post.slug}`,
      lastModified: new Date(post.modified),
      changeFrequency: "weekly",
    }));

    postUrls.push(...batchPostUrls);

    if (posts.totalPages <= pageNumber) {
      break;
    }

    pageNumber++;
  }

  return [...mainUrls, ...postUrls];
}