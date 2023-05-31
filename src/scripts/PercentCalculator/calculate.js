export function calculatePercent(argument, setAnswer) {
    const percent = Number(argument.percent);
    const numeric = Number(argument.numeric);
    setAnswer((percent*numeric)/100);
}

export function calculatePercentNumeric(argument, setAnswer) {
    const numeric = Number(argument.numeric);
    const commonNumeric = Number(argument.commonNumeric);
    setAnswer((numeric*100)/commonNumeric);
}

export function calculateCommonNumeric(argument, setAnswer) {
    const numeric = Number(argument.numeric);
    const percent = Number(argument.percent);
    setAnswer((numeric*100)/percent);
}