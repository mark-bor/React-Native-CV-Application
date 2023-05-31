import { TECHNOLOGIES } from "../../data/TECHNOLOGIES";

export function showInformation(setContent, setCard, title) {
    TECHNOLOGIES.forEach(elem => {
        if (elem.title===title) {
            setContent({...elem});
        }
    });
    setCard(true);
}