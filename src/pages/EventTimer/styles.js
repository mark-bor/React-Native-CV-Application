import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    buttons: {
        width: '70%',
        marginRight: 'auto',
        marginLeft: 'auto',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    openOptionsButton: {
        padding: 5,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 7,
    },

    buttonText: {
        fontSize: 15
    },

    headText: {
        marginTop: 20,
        marginBottom: 20,

        textAlign: 'center',
        // color: '#FF9900',
        color: '#61DAFB',
        fontWeight: 400,
        fontSize: 34,
        lineHeight: 48,
    },

    wrapOfCircles: {
        width: '85%',
        marginRight: 'auto',
        marginLeft: 'auto',
        
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});