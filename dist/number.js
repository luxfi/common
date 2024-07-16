export const formatAmount = (num, step = 3, symbol = ",", forceFloat = false) => {
    // eslint-disable-next-line prefer-const
    let [int, float] = (num + '').split('.');
    const reg = new RegExp(`(\\d)(?=(\\d{${step}})+(?!\\d))`, 'g');
    int = int.replace(reg, `$1${symbol}`);
    if (Number(num) > 1000000 && !forceFloat) {
        // hide the after-point part if number is more than 1000000
        float = '';
    }
    if (float) {
        return `${int}.${float}`;
    }
    return int;
};
export const formatAmountWithDecimals = (amount, decimals) => {
    if (!amount)
        return '0';
    const str = String(amount);
    const split = str.split('.');
    if (!split[1] || split[1].length < decimals) {
        return formatAmount(str);
    }
    return formatAmount(`${split[0]}.${split[1].substring(0, decimals)}`);
};
export const formatTokenAmount = (amount, decimals = 4) => {
    return formatAmountWithDecimals(amount, decimals);
};
export const formatUSDAmount = (amount, decimals = 2) => {
    return formatAmountWithDecimals(amount, decimals);
};
