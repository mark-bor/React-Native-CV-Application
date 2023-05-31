const buttonOpacity = (btn, num, opacity,setOpacity) => {
    switch (btn) {
        case 'stopped':
            setOpacity({...opacity, stopped: num});
            break;
    
        case 'now':
            setOpacity({...opacity, now: num});
            break;
    
        case 'complete':
            setOpacity({...opacity, complete: num});
            break;
    
        default:
            setOpacity({...opacity});
            break;
    }
}

export const sortByStatus = (status, statuses, setStatuses, opacity,setOpacity) => {
    if (statuses.includes(status)) {
        setStatuses([...statuses.filter(elem => elem!=status)]);
        buttonOpacity(status, 0.5, opacity,setOpacity);
    } else {
        setStatuses([...statuses, status]);
        buttonOpacity(status, 1, opacity,setOpacity);
    }
}