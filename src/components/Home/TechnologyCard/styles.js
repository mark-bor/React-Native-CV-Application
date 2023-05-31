import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    aboutTechnologyContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 5,
        top: 0,
        left: 0,
    
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        // backgroundColor: 'lime'
    },
    
    aboutTechnologyCard: {
        position: 'relative',
        width: '70%',
        height: 'auto',
        margin: 0,
        padding: 0,
    
        borderRadius: 12,
    },

    cardBackground: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        borderRadius: 12,
    },
    
    technologyName: {
        margin: 0,
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 15,

        color: '#16181D',
        fontSize: 20,
    },
    
    informAbautTechnology: {
        marginTop: 0,
        marginRight: 15,
        marginBottom: 30,
        marginLeft: 15,
        color: '#20232A',
    },
        
    closeInform: {
        margin: 0,
        marginRight: 15,
        marginLeft: 'auto',
        padding: '5px 10px',
    
        backgroundColor: '#D9D9D9',
        borderRadius: 5,
        opacity: 0.85,
    
        textAlign: 'center',
        color: '#16181D',
        fontSize: 14,
        fontWeight: 'bolder',
    }
})