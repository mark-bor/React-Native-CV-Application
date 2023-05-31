export const borderColor = (status) => {
    switch (status) {
        case 'stopped':
            return '#EDE407';
    
        case 'now':
            return '#78A2E1';
    
        case 'complete':
            return '#8FD855';
    
        default:
            return '#8F949C';
    }
}