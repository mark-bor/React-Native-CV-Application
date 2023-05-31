import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    workCard: {
        width: 100,
        height: 120,
        marginRight: 20,

        backgroundColor: '#D9D9D9',
        borderRadius: 7,
    },
    workImage: {
        width: '100%',
        height: 70,
        
        borderTopLeftRadius: 7,
        borderTopRightRadius: 7,
        backgroundColor: '#8F949C'
    },
    workTitle: {
        height: 50,
        paddingHorizontal: 5,
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        // borderTopWidth: 3,
        // borderRightWidth: 3,
        borderBottomWidth: 3,
        // borderLeftWidth: 3,
    },
    workTitleText: {
        textAlign: 'center',
        color: '#16181D',
        fontSize: 14,
        lineHeight: 14
    }
});
