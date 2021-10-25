import { useLayoutEffect } from "react";

export function useTitleEffect(title: string) {
  let setPageTitle = () => {
    document.title = title;
  };

  useLayoutEffect(setPageTitle, [title]);
}
