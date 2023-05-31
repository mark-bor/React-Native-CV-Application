import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    optionsContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        padding: 20,
        
        zIndex: 5,
        top: 0,
        left: 0,

        backgroundColor: '#F5F5F5',
    },
    
    timerTypes: {
        marginTop: 5,
        padding: 15,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',

        backgroundColor: '#FFF',
        borderRadius: 10,
    },
    timerType: {
        width: 100,
        height: 100,
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
    },
    timerType: {
        width: 100,
        height: 100,
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
    },
    timerTypeBorder: {
        borderWidth: 2,
        borderColor: '#61DAFB'
    },

    progressLine: {
        width: 50,
        height: 7,

        backgroundColor: '#D9D9D9',
        borderRadius: 5,
        overflow: 'hidden',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    progress: {
        width: '50%',
        height: '100%',

        backgroundColor: '#8FD855',
        // backgroundColor: '#61DAFB',
        borderRadius: 5,
    },
    circle: {
        transform: [
            {rotate: '-90deg'}, 
            {rotateX: '190deg'}
        ],
    },

    buttonsClearStopWrap: {
        marginVertical: 20,
        padding: 20,
        
        display: 'flex',
        gap: 20,

        backgroundColor: '#FFF',
        borderRadius: 10,
    },
    buttonsClearStop: {
        width: 150,
        
        paddingVertical: 5,
        paddingHorizontal: 10,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#6D6D6D',
        borderRadius: 5,
    },
})