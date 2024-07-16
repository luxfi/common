import { CHAINS_ENUM, ChainRaw } from "./chain-data";
export declare type Chain = ChainRaw & {
    logo: string;
    whiteLogo?: string;
    needEstimateGas?: boolean;
};
export { CHAINS_ENUM } from "./chain-data";
export declare const MAINNET_CHAINS_LIST: Array<Chain>;
export declare const TESTNET_CHAINS_LIST: Array<Chain>;
export declare const CHAINS_LIST: Chain[];
export declare const CHAINS: Record<CHAINS_ENUM, Chain>;
