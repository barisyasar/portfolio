"use client";

import { usePathname } from "next/navigation";

function Indicator() {
  const params = usePathname();
  const position =
    params === "/"
      ? "-translate-x-[6.6875rem]"
      : params === "/contact"
      ? "translate-x-[6.5rem]"
      : "-translate-x-1/2";
  return (
    <div
      className={`size-1.5 rounded-full bg-gradient-to-r from-purple-500 to-orange-500 absolute bottom-0.5 transition duration-300 transform  ${position} left-1/2`}
    />
  );
}

export default Indicator;
