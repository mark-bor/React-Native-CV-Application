import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    technologiesSection: {
        margin: 15,
        marginBottom: 73,
        padding: 10,
        
        backgroundColor: '#FFF',
        borderRadius: 10,
    },

    titlesInTechSection: {
        width: '100%',
        margin: 0,
        marginRight: 'auto',
        marginBottom: 25,
        marginLeft: 'auto',
	
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
        color: '#16181D',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: 25,
        lineHeight: 30,
    },

    listOfTech: {
        width: '100%',
        height: 'auto',
        
        margin: 0,
        marginRight: 'auto',
        marginBottom: 0,
        marginLeft: 'auto',

        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: '10%',
    },
});