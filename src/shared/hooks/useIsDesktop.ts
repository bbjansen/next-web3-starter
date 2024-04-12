import { useMedia } from "react-use";

function useIsDesktop() {
  return useMedia("(min-width: 1440px)", true);
}

export default useIsDesktop;
