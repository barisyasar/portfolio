"use client";
import ScrollSpy from "react-ui-scrollspy";

function ScrollSpyWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ScrollSpy updateHistoryStack scrollThrottle={1}>
      {children}
    </ScrollSpy>
  );
}

export default ScrollSpyWrapper;
