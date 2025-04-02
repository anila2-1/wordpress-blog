import Link from "next/link";
import { SearchBar } from "../components/searchBar";

export async function LatestPosts({ 
      title, posts, 
      currentPage = 1, 
      totalPages = 1, 
      searchTerm,
      categories }) {
  if (posts?.length === 0) {
    return <div>No posts available.</div>;
  }

  return (
    <div className="mb-8">
      <div className="flex justify-between">
        {title ? (
          <h2 className="text-xl mb-4">{title}</h2>
        ) : searchTerm ? (
          <h2 className="text-xl mb-4">Search Results</h2>
        ) : (
          <h2 className="text-xl mb-4"></h2>
        )}

        <div>
          <SearchBar />
        </div>
      </div>
      
      <div className="relative group flex flex-col mb-2">
        {posts?.map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.slug}`}
            className="lg:border-t lg:border-gray-400  mt-10 pb-10 p-10 flex flex-col justify-between leading-4"
            scroll={true}
          >
            <div className="text-gray-900 font-bold text-xl mb-2" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></div>
            <br></br>
            <br></br>
            <div className="max-w-sm w-full lg:max-w-full lg:flex"> 
              <img src={post.featured_media_url} loading="lazy" className="object-contain w-200 h-100 transition-all duration-200 transform group-hover:scale-110" width={200}
                height={200} alt="Featured Media" />
            </div>
            <br></br>
            <br></br>
            <div className="text-gray-700 text-base" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
          </Link>
        ))}
      </div>

      {totalPages > 1 ? (
        <div className="flex justify-between">
          <div>
            {currentPage > 1 && (
              <Link href={`/posts?page=${currentPage - 1}${searchTerm ? `&search=${searchTerm}` : ''}${categories ? `&categories=${categories}` : ''}`} className="underline">Previous</Link>
            )}
          </div>

          <div className="text-left">
            Page {currentPage} of {totalPages}
          </div>

          <div>
            {currentPage < totalPages && (
              <Link href={`/posts?page=${currentPage + 1}${searchTerm ? `&search=${searchTerm}` : ''}${categories ? `&categories=${categories}` : ''}`} className="underline">Next</Link>
            )}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <Link href={`/posts`} className="text-gray-900 py-5 block rounded-md"> More Posts</Link>
        </div>
      )}

    </div>
  );
}