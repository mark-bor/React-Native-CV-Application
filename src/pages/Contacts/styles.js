import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    wrapers: {
        margin: 15,
        marginBottom: 0,
        padding: 10,

        backgroundColor: '#FFF',
        borderRadius: 10,
    },

    phoneemail: {
        marginLeft: 10,
        // textAlign: 'center',
        color: '#16181D',
        fontWeight: 400,
        fontSize: 22,
        lineHeight: 32,
    },

    title: {
        marginLeft: 10,
        
        fontSize: 22,
        lineHeight: 32,
    },

    contacts: {
        width: '85%',
        marginVertical: 20,
        marginRight: 'auto',
        marginLeft: 'auto',

        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 35,
    },

    link: {
        width: 60,
        height: 60,
    },
    image: {
        width: '100%',
        height: '100%',
    },

})