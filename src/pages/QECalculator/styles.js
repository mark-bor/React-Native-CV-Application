import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    argument: {
        width: '70%',
        height: 50,
        marginVertical: 12,
        marginRight: 'auto',
        marginLeft: 'auto',

        display: 'flex',
        flexDirection: 'row',
    },
    argumentName: {
        width: '30%',
        height: '100%',

        backgroundColor: '#B2ED83',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    argumentInput: {
        width: '70%',
        height: '100%',

        backgroundColor: '#F5F5F5',
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        
        textAlign: 'center',
        fontSize: 20,
    },
    
    results: {
        width: '70%',
        marginVertical: 35,
        marginRight: 'auto',
        marginLeft: 'auto',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    result: {
        width: 100,
        margin: 0,
        padding: 0,
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    resultName: {
        width: '100%',
        height: 40,

        backgroundColor: '#A1BEEA',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    resultReques: {
        width: '100%',
        height: 40,

        backgroundColor: '#F5F5F5',
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 20,
    },
        
    button: {
        width: '70%',
        height: 40,
        marginRight: 'auto',
        marginLeft: 'auto',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#D9D9D9',
        borderRadius: 5,

        // color: '#16181D',
        // fontSize: 25,
    },
});