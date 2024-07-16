/**
 * @description pick all enums by default
 *
 * omitEnums has higher priority than pickEnums, e.g.
 * - if chain not in pickEums, omit it
 * - if chain in pickEums, but also in omitEums, omit it
 * - if chain in pickEums, but not in omitEums, pick it
 **/
export function selectChains(input, opts) {
    let { ALL_CHAIN_LIST } = input;
    ALL_CHAIN_LIST = [...ALL_CHAIN_LIST];
    const { pickEums, omitEums = [], } = opts || {};
    const list = [];
    const enums = {};
    const __OMITTED_CHAINS_ENUM_FOR_TEST__ = {};
    const chainHash = {};
    Object.values(ALL_CHAIN_LIST).forEach((chainItem) => {
        const enumName = chainItem.enum;
        if ((!pickEums || (pickEums === null || pickEums === void 0 ? void 0 : pickEums.includes(enumName)))
            && !(omitEums === null || omitEums === void 0 ? void 0 : omitEums.includes(enumName))) {
            enums[enumName] = enumName;
            chainHash[enumName] = chainItem;
            // @ts-expect-error
            list.push(chainItem);
        }
        else {
            __OMITTED_CHAINS_ENUM_FOR_TEST__[enumName] = enumName;
        }
    });
    return {
        CHAINS: chainHash,
        CHAINS_ENUM: enums,
        CHAINS_LIST: list,
        __OMITTED_CHAINS_ENUM_FOR_TEST__,
        ALL_CHAIN_LIST,
    };
}
