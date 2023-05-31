import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    selectCurrencyContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 5,
        top: 0,
        left: 0,
    
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    selectCurrencyCard: {
        position: 'relative',
        width: '70%',
        height: '70%',
        height: 'auto',
        margin: 0,
        padding: 0,

        display: 'flex',
        gap: 1,
    
        overflow: 'hidden',
        backgroundColor: '#8F949C',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#8F949C',
    },

    currencyWrap: {
        width: '100%',
        height: 40,
        paddingLeft: 10,
        
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        
        backgroundColor: '#D9D9D9',
    },

    currency: {
        color: '#1E2939',
        fontWeight: 400,
        fontSize: 19,
        lineHeight: 22,
    },
})