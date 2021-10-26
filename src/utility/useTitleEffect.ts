import { useLayoutEffect } from "react";

// Single page app -  Change title of pages for react router links

export function useTitleEffect(title: string) {
  let setPageTitle = () => {
    document.title = title;
  };

  useLayoutEffect(setPageTitle, [title]);
}
