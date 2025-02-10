import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(
    function () {
      function keypress(e) {
        if (e.code.toLowerCase() === key.toLowerCase()) {
          action?.();
        }
      }

      document.addEventListener("keydown", keypress);

      return function () {
        document.removeEventListener("keydown", keypress);
      };
    },
    [key, action]
  );
}
