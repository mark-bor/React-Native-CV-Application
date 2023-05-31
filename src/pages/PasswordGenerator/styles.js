import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    sectionTitle: {
        width: '80%',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 20,
        marginBottom: 15,

        fontWeight: 400,
        fontSize: 26,
        lineHeight: 36,
    },

    optionName: {
        fontSize: 17,
        lineHeight: 21,
    },

    switchWrap: {
        width: '80%',
        marginRight: 'auto',
        marginBottom: 12,
        marginLeft: 'auto',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    countOptions: {
        width: '80%',
        marginTop: 18,
        marginRight: 'auto',
        marginBottom: 30,
        marginLeft: 'auto',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    countInput: {
        width: 100,
        height: 30,
        marginTop: 3,
        
        backgroundColor: '#FFFFFF',
        borderRadius: 7,
        borderWidth: 1,
        borderColor: '#D9D9D9',

        textAlign: 'center',
        fontSize: 16,
        lineHeight: 20,
    },

    button: {
        width: '50%',
        height: 35,
        marginRight: 'auto',
        marginBottom: 20,
        marginLeft: 'auto',
    
        backgroundColor: '#D9D9D9',
        borderRadius: 10,

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        textAlign: 'center',
        color: '#1E2939',
        fontWeight: 400,
        fontSize: 16,
        lineHeight: 20,
    },

    password: {
        width: '80%',
        marginRight: 'auto',
        marginBottom: 10,
        marginLeft: 'auto',

        textAlign: 'center',
        color: '#1E2939',
        fontWeight: 400,
        fontSize: 18,
    }
});