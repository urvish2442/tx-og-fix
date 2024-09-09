export const CHAIN_LOGO = {
    // 943: "/images/pulsechain-icon.svg",
    943: "/images/LogoVectorPulseChain.svg",
    1: "/images/ethe-icon-blue.svg",
    11155111: "/images/ethereum-icon.svg",
    84532: "/images/base-icon.svg",
};

export const FRONT_END_DOMAIN = "https://tx-og-fix.vercel.app";

export const GET_CHAIN_NAMES = {
    943: "PulseChain",
    11155111: "Sepolia",
    84532: "Sepolia Goerli",
    1: "Ethereum",
};

export const OgCountParser = (value, fixTo = 2, length = 1) => {
    const numberValue = Number(value);

    if (isNaN(numberValue)) return "0";
    if (numberValue === 0) return "0";

    const formatNumber = (num, divisor, suffix) => {
        const formatted = (num / divisor).toFixed(length);
        return (parseFloat(formatted) >= 1000 ? "999.9" : formatted) + suffix;
    };

    if (numberValue >= 1000000000) {
        return formatNumber(numberValue, 1000000000, "B");
    } else if (numberValue >= 1000000) {
        return formatNumber(numberValue, 1000000, "M");
    } else if (numberValue >= 1000) {
        return formatNumber(numberValue, 1000, "k");
    } else {
        return Number.isInteger(numberValue)
            ? numberValue.toString()
            : numberValue.toFixed(fixTo);
    }
};