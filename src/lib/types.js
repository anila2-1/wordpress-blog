// Define the Post object
// const Post = {
//   id: 0,
//   title: {
//     rendered: '',
//   },
//   slug: '',
//   date: '',
//   modified: '',
//   content: {
//     rendered: '',
//   },
//   type: '',
//   status: '',
//   excerpt: {
//     rendered: '',
//   },
//   author: 0,
//   categories: [],
//   featured_media: 0,
// };

// Define the ExtendedPost object
const ExtendedPost = {
  ...Post,
  yoast_head_json: {
    title: '',
    robots: {
      index: '',
      follow: '',
      "max-snippet": '',
      "max-image-preview": '',
      "max-video-preview": '',
    },
    canonical: '',
    og_locale: '',
    og_type: '',
    og_title: '',
    og_description: '',
    og_url: '',
    og_site_name: '',
    article_author: '',
    article_published_time: '',
    article_modified_time: '',
    og_image: [
      {
        width: 0,
        height: 0,
        url: '',
        type: '',
      },
    ],
    author: '',
    twitter_card: '',
    twitter_creator: '',
    twitter_misc: {
      "Written by": '',
      "Est. reading time": '',
    },
    thumbnail_url: '',
  },
};

// Define the PostsResponse object
const PostsResponse = {
  posts: [Post],
  totalPages: 0,
};

// Define the Category object
const Category = {
  id: 0,
  count: 0,
  description: '',
  link: '',
  name: '',
  slug: '',
  taxonomy: 'category',
  parent: 0,
};

// Define the Author object
const Author = {
  id: 0,
  name: '',
  slug: '',
  link: '',
};

// Export the objects
export { ExtendedPost, PostsResponse, Category, Author };