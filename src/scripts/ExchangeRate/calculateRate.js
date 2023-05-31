import { checkRadioButtons } from './doRequest';



export function calculateRate(value, {setFirst, setSecond}, rates, api) {
    setFirst(value);

    if (!value) {
        setSecond('');

    } else if (value===0) {
        setSecond(value);
        
    } else {
        try {
            value.split('');
            value[value.indexOf(',')] = '.';
            value.join('');
        } catch (err) {}

        checkRadioButtons(rates.rateOne, rates.rateTwo, value, setSecond, api);
    }
}
