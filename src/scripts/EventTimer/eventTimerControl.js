let interval;

export function startEventTimer(date, setTime, setElements, setCircles) {
    const birthday = new Date(date).getTime();
    
    interval = setInterval(() => {
        try {
            const now = new Date().getTime();
            const distance = birthday - now;
        
            const time = {
                month: Math.floor(distance / 1000 / 60 / 60 / 24 / 31),
                day: Math.floor(distance / 1000 / 60 / 60 / 24) % 31,
                hour: Math.floor(distance / 1000 / 60 / 60) % 24,
                minute: Math.floor(distance / 1000 / 60) % 60,
                second: Math.floor(distance / 1000) % 60,
            };
            setElements({
                month: 200 - (200 - ((200/12)*time.month)),
                day: 200 - (200 - ((200/31)*time.day)),
                hour: 200 - (200 - ((200/24)*time.hour)),
                minute: 200 - (200 - ((200/60)*time.minute)),
                second: 200 - (200 - ((200/60)*time.second))
            });
            setCircles({
                month: 157 - (157/12)*time.month,
                day: 157 - (157/31)*time.day,
                hour: 157 - (157/24)*time.hour,
                minute: 157 - (157/60)*time.minute,
                second: 157 - (157/60)*time.second
            }); 
            
            setTime({...time});

        } catch (error) {
            clearInterval(interval);
        }
    }, 1000)
}

export function stopEventTimer() {
    clearInterval(interval);
}
