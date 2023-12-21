import { ConnectKitButton } from "connectkit";

import { Props } from "./types";

function ConnectButton({ connectText = "Connect Wallet", children = null }: Props) {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, truncatedAddress }) =>
        isConnected ? (
          <button className="inline-block rounded-xl bg-gray-100 px-3 py-2 text-lg font-bold text-brey xl:flex" type="button" onClick={show}>
            {isConnected ? truncatedAddress : "Custom Connect"}
          </button>
        ) : (
          <button className="flex gap-x-1.5" onClick={show}>
            {children == null ? (
              <>
                {connectText}
              </>
            ) : (
              children
            )}
          </button>
        )
      }
    </ConnectKitButton.Custom>
  );
}

export default ConnectButton;
