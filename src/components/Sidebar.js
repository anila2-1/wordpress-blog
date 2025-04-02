// components/Sidebar.js
import Link from 'next/link';

export default function Sidebar({ menuItems }) {
  return (
    <aside className="sidebar">
      <h3>Navigation</h3>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link href={item.url} legacyBehavior>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

// Fetch menu data on the server side
export async function getSidebarProps() {
  const menuItems = await getMenu();
  return { menuItems };
}