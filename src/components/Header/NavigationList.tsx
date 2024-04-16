import Link from "next/link";
import NAVBAR_LINKS from "@/data/navbarLinks";

function NavigationList() {
  return (
    <ul className="flex justify-center items-center h-full">
      {NAVBAR_LINKS.map((nl) => (
        <li className="w-[6.5rem] text-center" key={nl.href}>
          <Link className="text-stale-950" href={`/${nl.href}`} prefetch>
            {nl.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavigationList;
