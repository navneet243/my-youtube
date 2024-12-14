export function formatViewCount(viewCount) {
    const numericViewCount = parseInt(viewCount);

    if (isNaN(numericViewCount)) {
        return "N/A";
    }
    if (numericViewCount < 1000) {
        return numericViewCount.toString();
    } else if (numericViewCount < 1000000) {
        const thousands = Math.floor(numericViewCount / 1000);
        return `${thousands}K`;
    } else if (numericViewCount < 10000000) {
        const millions = (numericViewCount / 1000000).toFixed(1);
        return `${millions}M`;
    } else if (numericViewCount < 10000000000){
        const billions = (numericViewCount / 1000000000).toFixed(1);
        return `${billions}B`;
    } else {
        const trillions = (numericViewCount / 1000000000000).toFixed(1);
        return `${trillions}T`;
    }
}