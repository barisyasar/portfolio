"use client";
import ScrollSpy from "react-ui-scrollspy";

function ScrollSpyWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ScrollSpy updateHistoryStack scrollThrottle={0} useBoxMethod={false}>
      {children}
    </ScrollSpy>
  );
}

export default ScrollSpyWrapper;
