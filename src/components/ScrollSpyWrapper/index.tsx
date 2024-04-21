"use client";
import ScrollSpy from "react-ui-scrollspy";

function ScrollSpyWrapper({ children }: { children: React.ReactNode }) {
  return <ScrollSpy>{children}</ScrollSpy>;
}

export default ScrollSpyWrapper;
