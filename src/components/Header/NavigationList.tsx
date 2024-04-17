import NAVBAR_LINKS from "@/data/navbarLinks";
import Indicator from "./Indicator";

function NavigationList() {
  return (
    <ul className="flex justify-center items-center h-full relative">
      {NAVBAR_LINKS.map((nl) => (
        <li
          className="w-[6.5rem] text-center"
          key={nl.href}
          data-to-scrollspy-id={nl.href}
        >
          <a className="text-stale-950" href={`/#${nl.href}`}>
            {nl.title}
          </a>
        </li>
      ))}
      <Indicator />
    </ul>
  );
}

export default NavigationList;
