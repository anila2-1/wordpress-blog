// import { SearchBar } from "../components/searchBar";
// import { SocialIcons } from "../components/social-icons";
import { Categories } from "../components/categories";
import { getCategories } from "../lib/queries";
import { getAllPosts } from "../lib/queries";
import { LatestPosts } from "../components/latest-posts";

export default async function Page() {
  const { posts } = await getAllPosts();
  const categories = await getCategories();
  return (
    <div>
      <Categories categories={categories} />
      <LatestPosts posts={posts} />  
      
    </div>
  );
}