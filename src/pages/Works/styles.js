import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    filterButton: {
        width: 40, 
        height: 50, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    statusContainer: {
        width: '100%',
        height: 50,

        margin: 0,
        zIndex: 1,
      
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',

        backgroundColor: '#8F949C',
    },
    status: {
        width: 100,
        height: 34,
        margin: 0,
        padding: 0,
      
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

        borderRadius: 20,
        backgroundColor: '#F5F5F5'
    },

    point: {
        width: 11,
        height: 11,
        marginLeft: 10,

        borderRadius: '50%',
    },

    text: {
        marginRight: 'auto', 
        marginLeft: 'auto'
    },
});