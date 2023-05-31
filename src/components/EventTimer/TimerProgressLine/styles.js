import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    timeItem: {
        width: '70%',
        marginRight: 'auto',
        marginBottom: 10,
        marginLeft: 'auto',
    },

    itemName: {
        fontSize: 18,
    },

    itemWrap: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    
    progresBar: {
        width: 200,
        height: 10,

        backgroundColor: '#D9D9D9',
        borderRadius: 5,
        overflow: 'hidden',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    progres: {
        width: '50%',
        height: '100%',

        backgroundColor: '#8FD855',
        // backgroundColor: '#61DAFB',
        borderRadius: 5,
    },

    timmeNumber: {
        color: '#FF9900',
        // color: '#61DAFB',
        fontSize: 19,
    },
});