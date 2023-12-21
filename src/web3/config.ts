import { arbitrumGoerli, arbitrum } from "@wagmi/core/chains";
import { getDefaultConfig } from "connectkit";
import { configureChains, createConfig, Chain } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from 'wagmi/providers/public'

type EnvTypes = "production" | "staging";

let network: Chain;

switch(process.env.NEXT_PUBLIC_NODE_ENV as EnvTypes) {
    case "production":
        network = arbitrum;
        break;
    case "staging":
        network = arbitrumGoerli;
        break;
    default:
        network = arbitrumGoerli;
}

const { publicClient, webSocketPublicClient } = configureChains(
    [network],
    [
        publicProvider(),
        alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_KEY as string })
    ],
    {
        pollingInterval: 5000,
        stallTimeout: 3000
    },
);

const config = createConfig(
    getDefaultConfig({
        appName: "dApp",
        autoConnect: false,
        chains: [network],
        publicClient,
        webSocketPublicClient,
        walletConnectProjectId: process.env.NEXT_PUBLIC_WC_PROJECT_KEY as string,
    })
);

export default config;