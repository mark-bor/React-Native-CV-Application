import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    chooseDateContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',

        zIndex: 5,
        top: 0,
        left: 0,
    
        backgroundColor: '#F5F5F5',
    },
    
    chooseDateCard: {
        padding: 15,
        
        display: 'flex',
        gap: 10,
    },

    dateWrap: {
        width: '100%',
        height: 50,

        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
                
        backgroundColor: '#FFF',
        borderRadius: 10,
        overflow: 'hidden',
    },
    dateBackground: {
        width: '100%',
        height: '100%',
        
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    date: {
        marginLeft: '20%',

        color: '#1E2939',
        // color: '#FFF',
        fontWeight: 600,
        fontSize: 20,
        lineHeight: 22,
    },
});