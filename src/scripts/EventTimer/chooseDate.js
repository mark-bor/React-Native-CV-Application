import { startEventTimer, stopEventTimer } from './eventTimerControl';



export const chooseDate = (props, dateName, date) => {
    stopEventTimer();
    props.setTime({month: 0, day: 0, hour: 0, minute: 0, second: 0});
    props.setElements({month: 0, day: 0, hour: 0, minute: 0, second: 0});
    props.setCircles({month: 0, day: 0, hour: 0, minute: 0, second: 0});

    if (dateName==='Custom') {
        props.setCustom(true);
    } else {
        props.setDateName(dateName);
        startEventTimer(date, props.setTime, props.setElements, props.setCircles);
    }
    
    props.setChooseDate(false);
}