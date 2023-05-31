import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    customDateContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        padding: 25,

        zIndex: 5,
        top: 0,
        left: 0,

        backgroundColor: '#F5F5F5',
    
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    
    // customDateCard: {
    //     position: 'relative',
    //     width: '70%',
    //     minHeight: '42%',
    //     height: 'auto',
    //     padding: 15,
    //     paddingTop: 20,
    
    //     overflow: 'hidden',
    //     backgroundColor: '#D9D9D9',
    //     borderRadius: 12,
    // },

    inputTimerData: {
        // width: '95%',
        marginVertical: 17,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    inputWrap: {
        width: 'auto',
    },

    inputName: {
        marginRight: 32,
        paddingHorizontal: 2,
        paddingBottom: 3,

        fontSize: 15,
    },

    input: {
        width: '100%',
        height: 34,

        backgroundColor: '#FFFFFF',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#D9D9D9',

        textAlign: 'center',
        fontSize: 19,
    },

    bottomButtons: {
        width: '100%',
        paddingHorizontal: 10,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    bottomButton: {
        width: '33%',
        height: 26,
        marginTop: 30,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: 5,
    },
})