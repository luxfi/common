export * from "./number";
export * from "./chain";
export declare const CHAINS: Omit<Record<import("./chain-data").CHAINS_ENUM, import("./chain").Chain>, never>, CHAINS_ENUM: Pick<typeof import("./chain-data").CHAINS_ENUM, import("./chain-data").CHAINS_ENUM>, CHAINS_LIST: (import("./chain-data").ChainRaw & {
    logo: string;
    whiteLogo?: string | undefined;
} & {
    enum: import("./chain-data").CHAINS_ENUM;
})[], __OMITTED_CHAINS_ENUM_FOR_TEST__: Pick<typeof import("./chain-data").CHAINS_ENUM, never>;
