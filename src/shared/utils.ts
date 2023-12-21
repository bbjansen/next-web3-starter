import { formatUnits, isAddress, parseUnits } from "viem";
import { Address } from "wagmi";

function calculateNumberPercentageOfAnotherNumber(num1: number, num2: number) {
  return Math.round((num1 / num2) * 100);
}

function shortenAddress(address: Address): Address {
  return `${address.slice(0, 3)}...${address.slice(-3)}` as Address;
}

function shortenNumber(num: number) {
  const formatter = new Intl.NumberFormat(undefined, {
    notation: "compact",
    compactDisplay: "short",
  });

  return formatter.format(num);
}

function limitValueToBounds(value: number, min = 0, max = 100) {
  if (value < min) return min;
  if (value <= max) return value;
  return max;
}

function pluralizeWord(word: string, num: number) {
  return `${word}${num === 1 ? "" : "s"}`;
}

function convertNumberToLocaleString(num: number, minimumFractionDigits = 2, maximumFractionDigits = 2) {
  return num.toLocaleString(undefined, {
    minimumFractionDigits,
    maximumFractionDigits,
  });
}

function convertLocaleStringToNumber(str: string) {
  const localeDecimalSign = (0).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })[1];

  return Number(str.replace(localeDecimalSign, ".").replaceAll(/[,\s]/g, ""));
}

function convertBigNumberToNumber(bn?: bigint, decimals = 18) {
  return Number(formatUnits(bn ?? BigInt(0), decimals));
}

function convertBigNumberToLocaleString(bn?: bigint, decimals?: number, minimumFractionDigits?: number, maximumFractionDigits?: number) {
  return convertNumberToLocaleString(convertBigNumberToNumber(bn, decimals), minimumFractionDigits, maximumFractionDigits);
}

function convertLocaleStringToBigNumber(str: string, decimals = 18) {
  return parseUnits(String(convertLocaleStringToNumber(str)), decimals);
}

function checkIfValueIsNumber(value: unknown): value is number {
  return typeof value === "number";
}

function checkIfStringIsNumeric(str: string) {
  return !Number.isNaN(Number(str));
}

function checkIfValueIsValidAddress(value: unknown): value is Address {
  return typeof value === "string" && isAddress(value);
}

export {
  calculateNumberPercentageOfAnotherNumber,
  shortenAddress,
  shortenNumber,
  limitValueToBounds,
  pluralizeWord,
  convertNumberToLocaleString,
  convertLocaleStringToNumber,
  convertBigNumberToNumber,
  convertBigNumberToLocaleString,
  convertLocaleStringToBigNumber,
  checkIfValueIsNumber,
  checkIfStringIsNumeric,
  checkIfValueIsValidAddress,
};
