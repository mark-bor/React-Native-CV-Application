import { StyleSheet } from 'react-native';



const backAndFront = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 10,
    backfaceVisibility: 'hidden',
    transition: 'transform 400ms',
}

export const styles = StyleSheet.create({
    card: {
        width: 70,
        height: 70,
        perspective: 700,
    },
    
    frontCard: {
        margin: 0,
        zIndex: 1,
        
        backgroundColor: '#FF9900',

        ...backAndFront
    },
    question: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#FFF',
        fontSize: 50,
    },
    
    backCard: {
        // backgroundColor: '#D9D9D9',

        ...backAndFront
    },   
    image: {
        width: 50,
        height: 50,
    }, 
});