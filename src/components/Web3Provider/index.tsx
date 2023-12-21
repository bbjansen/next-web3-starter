import { arbitrumGoerli, arbitrum } from "@wagmi/core/chains";
import { ConnectKitProvider } from "connectkit";
import { WagmiConfig } from "wagmi";

import { Props } from "./types";

type EnvTypes = "arb_prod" | "production" | "staging" | "development";

let network: number;

switch(process.env.NEXT_PUBLIC_NODE_ENV as EnvTypes) {
    case "production":
        network = arbitrum.id;
        break;
    case "staging":
        network = arbitrumGoerli.id;
        break;
    default:
        network = arbitrumGoerli.id;
}
function Web3Provider({ children, config }: Props) {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider
        mode="light"
        options={{
          initialChainId: network,
        }}
      >
        {children}
      </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default Web3Provider;