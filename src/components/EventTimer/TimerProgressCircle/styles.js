import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    circleContainer: {
        width: 60,
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
    },

    name: {
        marginBottom: 5,

        display: 'flex',
        flexWrap: 'nowrap',

        fontSize: 13,
    },

    circleWrap: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    quantity: {
        position: 'absolute',

        color: '#FF9900',
        fontSize: 19
    },
    
    circle: {
        transform: [
            {rotate: '-90deg'}, 
            {rotateX: '190deg'}
        ],
    },
});