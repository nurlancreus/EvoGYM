import { useEffect, useRef } from "react";

export function useOutsideClick<T extends Node>(
  handler: () => void,
  listeningCapture = true,
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler();
      }
    };

    document.addEventListener("click", handleClick, listeningCapture);

    return () =>
      document.removeEventListener("click", handleClick, listeningCapture);
  }, [handler, listeningCapture]);

  return ref;
}
