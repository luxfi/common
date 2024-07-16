import { MAINNET_CHAINS_LIST as CHAINS_LIST_FULL } from "./chain";
import { selectChains } from "./utils";
export * from "./number";
export * from "./chain";
// mainsite
export const { CHAINS, CHAINS_ENUM, CHAINS_LIST, __OMITTED_CHAINS_ENUM_FOR_TEST__, } = selectChains({
    ALL_CHAIN_LIST: CHAINS_LIST_FULL,
});
