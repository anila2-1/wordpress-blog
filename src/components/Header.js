import Link from "next/link";
import { SocialIcons } from "../components/social-icons";

export function Header() {
    return (
        <header className="py-6 mb-10 " x-data="{expanded: false}">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

          <div className="flex items-center justify-start">
            <div className="flex-shrink-0">
              <Link href="/" title="" className="flex font-bold text-4xl">
                TheIQ
              </Link>

            </div>
                <ul className="flex justify-end w-220 gap-8">
                    <li className=" p-1" >
                        <Link href={'/'}>Home</Link>
                    </li>
                    <SocialIcons />
                </ul> 
            </div>
        </div>

      </header>
    );
}