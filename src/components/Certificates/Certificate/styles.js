import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    certificateWrap: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    certificate: {
        width: '65%',
        height: 170,

        borderRadius: 10,
      
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    
    course_company: {       
        width: '90%',

        textAlign: 'center',
        color: '#F5F5F5',
        fontWeight: 400,
        fontSize: 20,
    },
    course: {
        width: '90%',
        
        fontSize: 20,
        lineHeight: 20,
    },
    line: {
        width: '30%',
        height: 1,
        marginVertical: 0,
        marginHorizontal: 0,

        backgroundColor: '#F5F5F5',
    },
    company: {
        width: '100%',

        fontSize: 15,
        lineHeight: 21,
    },    
});