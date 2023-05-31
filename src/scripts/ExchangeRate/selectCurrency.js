export function selectCurrency(setRate, currency, setSelectCard) {
    setRate(currency);
    setSelectCard({first: false, second: false});
}