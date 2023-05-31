import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    cvs: {
        margin: 15,
        padding: 20,

        backgroundColor: '#FFF',
        borderRadius: 10,
    
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 25,
    },
    
    cv: {
        position: 'relative',
        height: 120,

        borderRadius: 10,
        overflow: 'hidden',        
    },
    image: {
        width: 120,
        height: 120,
    },
    shadow: {
        position: 'absolute',
        width: '100%',
        height: 80,
        bottom: 0,
        zIndex: 1,
    },  
    cvTitle: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        zIndex: 2,

        textAlign: 'center',
        color: '#F5F5F5',
        fontWeight: 400,
        fontSize: 27,
    },
});