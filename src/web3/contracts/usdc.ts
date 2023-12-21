import { ERC20_EXTENDED_ABI } from "../abis";
import { Contract } from "../types";

const ERC20_EXTENDED = {
  address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
  abi: ERC20_EXTENDED_ABI,
} satisfies Contract<typeof ERC20_EXTENDED_ABI>;

const USDC_DECIMALS = 6;

export { ERC20_EXTENDED, USDC_DECIMALS };
