import { useAccount as useWagmiAccount } from "wagmi";

function useAccount(): ReturnType<typeof useWagmiAccount> {
    const data = useWagmiAccount();

    const isFalse = false;

    return isFalse
    ? {
        address: undefined,
        connector: undefined,
        isConnected: false,
        isReconnecting: false,
        isConnecting: false,
        isDisconnected: true,
        status: "disconnected",
      }
    : data;
}

export default useAccount;