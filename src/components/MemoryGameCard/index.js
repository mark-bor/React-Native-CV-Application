import { useState } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { turnOverCard } from '../../scripts/index';
import { styles } from './styles';



export default function MemoryGameCard({data, game}) {
    const [rotate, setRotate] = useState({front: 0, back: 180});

    const imageSize = () => {
        switch (data.subject) {
            case 'logo':
                return 42;
        
            case 'react':
                return 45;
                
            default:
                return 50;
        }
    }


	return (
		<TouchableOpacity style={[styles.card, styles.card]} onPress={() => game.flip(data.subject, setRotate)}>
            <View style={{...styles.frontCard, transform: `rotateY(${rotate.front}deg)`}}>
                <Text style={styles.question}>?</Text>
            </View>
            
            <View style={{...styles.backCard, transform: `rotateY(${rotate.back}deg)`}}>
                <Image source={data.image} style={[styles.image, {height: imageSize()}]} />
            </View>
        </TouchableOpacity>
	);
}
