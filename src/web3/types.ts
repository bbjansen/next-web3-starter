import { Address } from "wagmi";

enum TokenSymbols {
  Medici = "MDC",
  Usdc = "USDC",
}

interface Contract<ABI> {
  address?: Address;
  abi?: ABI;
}

export { TokenSymbols };
export type { Contract };
