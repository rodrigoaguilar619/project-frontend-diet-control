// count number of decimals
export function decimalsCount(number: any) {
    let numberString = number.toString().trim();
    if (!numberString.includes("."))
        return 0;
    else
        return numberString.split(".")[1].length;
}

// count number of digits
export function digitsCount(number: any) {
    let numberString = number.toString().trim();

    return numberString.split(".")[0].length;
}

//Adjust decimals with zeros right of number to amount specify on currency ex; currency = 4, (12.14 -> 12.1400) 
export function decimalsZeroPad(number: any, currency: number) {
    let numberString = number.toString().trim();
    let numberDecimals = decimalsCount(numberString);
    if (numberDecimals >= currency)
        return numberString;
    else if (numberDecimals == 0)
        return numberString + "." + ("0".repeat(currency));
    else
        return numberString + ("0".repeat(currency - numberDecimals));
}

export function digitsZeroPad(number: any, digits: number) {
    
    let numberString = number.toString().trim();
    let numberDigits = digitsCount(numberString);
    let isNegative = numberString.includes("-");

    numberString = numberString.replace(/-/gi, "");
    let splitNumberString = numberString.split(".");

    if (numberDigits >= digits)
        return numberString;
    else
        return (isNegative ? "-" : "") + splitNumberString[0].padStart(digits, "0") + "." + (splitNumberString.length == 1 ? "0" : splitNumberString[1]);
}