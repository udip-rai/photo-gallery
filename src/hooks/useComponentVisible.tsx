import { useEffect, useRef, useState } from "react";

export const useComponentVisible = (initialIsVisible: boolean) => {
  const [isComponentVisible, setIsComponentVisible] =
    useState<boolean>(initialIsVisible);
  const sgRef = useRef<any>(null);

  const handleClickOutside = (e: any) => {
    if (sgRef.current && !sgRef.current.contains(e.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { sgRef, isComponentVisible, setIsComponentVisible };
};
