import { View, Text } from 'react-native';
import { styles } from './styles';



export default function TimerProgressLine({name, progres, quantity}) {
	return (
        <View style={styles.timeItem}>
            <Text style={styles.itemName}>{name}</Text>
            <View style={styles.itemWrap}>
                <View style={styles.progresBar}>
                    <View style={{...styles.progres, width: progres}}></View>
                </View>
                <Text style={styles.timmeNumber}>{quantity<10 ? '0'+quantity : quantity}</Text>
            </View>
        </View>
	);
}
