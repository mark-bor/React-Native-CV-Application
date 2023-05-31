import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    rateServices: {
        width: '80%',
        marginTop: 35,
        marginRight: 'auto',
        marginBottom: 45,
        marginLeft: 'auto',
    
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    rateService: {    
        display: 'flex',
        alignItems: 'center',    
    },

    image: {
        width: 60,
        height: 60,
        marginBottom: 7,
    },
    
    inputWrap: {
        width: '80%',
        height: 50,
        marginRight: 'auto',
        marginBottom: 30,
        marginLeft: 'auto',

        borderWidth: 1,
        borderColor: '#D9D9D9',
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },

    currencyWrap: {
        width: '30%',
        height: '100%',
        paddingHorizontal: 10,

        overflow: 'hidden',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    currency: {
        color: '#1E2939',
        fontWeight: 400,
        fontSize: 19,
        lineHeight: 22,
    },

    input: {
        width: '70%',
        height: '100%',
        marginRight: 'auto',
        marginLeft: 'auto',
        zIndex: 1,

        backgroundColor: '#FFFFFF',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    
        textAlign: 'center',
        color: '#457FD6',
        fontSize: 21,
        lineHeight: 24,
    },
});