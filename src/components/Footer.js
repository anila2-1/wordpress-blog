import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className=" flex gap-50 mt-40 text-left text-gray-700">
      <p><a href="https://theiq.pk/">TheIQ.pk</a> &copy; 2025 &middot; <Link href={'/sitemap.xml'}>SiteMap</Link></p>
                <div >
                <ul className="flex justify-end space-x-3">
                    <li  >
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li >
                        <Link href={'/posts'}>Blog</Link>
                    </li>
                    <li >
                        <Link href={'/about'}>About Us</Link>
                    </li >
                    <li >
                        <Link href={'/contact'}>Contact Us</Link>
                    </li>
                    <li>
                        <Link href={'/privacypolicy'}>Privacy Policy</Link>
                    </li>
                    <li>
                        <Link href={'/disclaimer'}>Disclaimer</Link>
                    </li>
                    
                    </ul> 

            </div>
            </div>
    
    </footer>
  )
}