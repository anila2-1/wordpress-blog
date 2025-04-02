import Link from "next/link";

export async function Categories({ categories }) {
  return (
    <div className="flex mb-8">
      <ul className="text-[0.7rem]  font-bold flex gap-8 flex-wrap">
        {categories.map((category) => (
          <li key={category.id} className="flex overflow-hidden shadow-lg flex-shrink-1">
            <Link
              href={`/posts?categories=${category.id}`}
              className=" overflow-hidden shadow-lg border p-1 "   >
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}