import { NextSeo } from "next-seo";

import { Layout } from "../../components/general";
import { NextPageWithLayout } from "../_app.page";
import { APP_HOST_NAME } from "../../shared/constants";
import Routes from "../../shared/routes";
import { useEffect, useState } from "react";
import { useAccount } from "web3/hooks";
import { useContractRead } from "wagmi";
import { ERC20_EXTENDED } from "web3/contracts/usdc";

const Wallet: NextPageWithLayout = function Wallet() {

  const { isConnected, address: connectedAddress } = useAccount();
  const [ walletState, setWalletState] = useState<boolean>(false);
  
  useEffect(() => {
      setWalletState(true)
  }, [isConnected, connectedAddress]);
  
  const { data: decimals } = useContractRead({
    address: ERC20_EXTENDED.address,
    abi: ERC20_EXTENDED.abi,
    functionName: "decimals",
    enabled: isConnected,
  });

  return (
    <>
      <NextSeo title="Wallet" openGraph={{ url: `${APP_HOST_NAME}${Routes.Wallet}` }} />

      {isConnected ? (
        <>
        <b> address:</b> {connectedAddress}
        <br />
        USDC has {decimals} decimals.
        </>
      ) : (
        <b>not connected</b>
      )}
    </>
  );
};

Wallet.getLayout = function getLayout(page) {
  return <Layout mainClassName="pt-10.5 xl:pt-18 xl:pb-24">{page}</Layout>;
};

export default Wallet;
