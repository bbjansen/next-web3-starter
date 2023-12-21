import { createConfig } from "wagmi";

interface Props extends React.PropsWithChildren {
  config: ReturnType<typeof createConfig>;
}

export type { Props };
