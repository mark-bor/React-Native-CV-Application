import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    chooseCalculatorContainer: {
        paddingTop: 10,
    },

    question: {
        marginVertical: 10,
        
        textAlign: 'center',
        fontSize: 19,
    },

    chooseCalculatorButtons: {
        marginBottom: 10,

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    chooseButton: {
        paddingVertical: 3,
        paddingHorizontal: 12,

        backgroundColor: '#D9D9D9',
        borderRadius: 5,
    },


    calculatorWrap: {
        width: '80%',
        marginRight: 'auto',
        marginLeft: 'auto',

        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        rowGap: 10,
    },

    text: {
        color: '#16181D',
        fontWeight: 400,
        fontSize: 22,
        lineHeight: 40,
    },
    
    input: {
        width: 80,
        height: 40,
        marginHorizontal: 5,
        
        backgroundColor: '#F5F5F5',
        borderWidth: 1,
        borderColor: '#D9D9D9',
        borderRadius: 10,

        textAlign: 'center',
        fontSize: 18,
    },
    
    answer: {
        color: '#FF9900',
        fontWeight: 400,
        fontSize: 20,
        lineHeight: 40,
    },

    button: {
        width: '70%',
        height: 40,
        marginTop: 30,
        marginRight: 'auto',
        marginLeft: 'auto',

        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#D9D9D9',
        borderRadius: 5,

        // color: '#16181D',
        // fontSize: 25,
    },
});