const baseUrl = process.env.WORDPRESS_URL;

const revalidateTime = 86400; // one day in seconds

export async function getAllPosts(pageNumber = 1, perPage = 10, searchTerm = '', categories = 0, slug = '') {
  const params = new URLSearchParams({
    per_page: perPage.toString(),
    page: pageNumber.toString(),
    search: searchTerm,
  });

  if (categories !== 0) {
    params.set('categories', categories.toString());
  }

  const response = await fetch(`${baseUrl}/wp-json/wp/v2/posts?slug=${slug}`, {
    next: {
      revalidate: revalidateTime,
    },
  });
  const posts = await response.json();
  const totalPages = parseInt(response.headers.get('X-WP-TotalPages') ?? '1');

  // Fetch media for each post
  const postsWithMedia = await Promise.all(posts.map(async (post) => {
    if (post.featured_media) {
      const mediaResponse = await fetch(`${baseUrl}/wp-json/wp/v2/media/${post.featured_media}`);
      const media = await mediaResponse.json();
      post.featured_media_url = media.source_url;
    }
    return post;
  }));

  return { posts: postsWithMedia, totalPages };
}

export async function getPostBySlug() {
  const response = await fetch(`${baseUrl}/wp-json/wp/v2/posts/`, {
    next: {
      revalidate: revalidateTime,
    },
  });
  const post = await response.json();
  if (post[0]?.featured_media) {
    const mediaResponse = await fetch(`${baseUrl}/wp-json/wp/v2/posts/${post[0].featured_media}`);
    const media = await mediaResponse.json();
    post[0].featured_media = media.source_url;
  }
  return post[0];
}

// export async function getAuthorById(id) {
//   const response = await fetch(`${baseUrl}/wp-json/wp/v2/users/${id}`);
//   const author = await response.json();
//   return author;
// }

export async function getCategoriesByIds(ids) {
  const response = await fetch(`${baseUrl}/wp-json/wp/v2/categories?include=${ids.join('')}`);
  const categories = await response.json();
  return categories;
}

export async function getCategories() {
  const response = await fetch(`${baseUrl}/wp-json/wp/v2/categories`);
  const data = await response.json();
  return data;
}