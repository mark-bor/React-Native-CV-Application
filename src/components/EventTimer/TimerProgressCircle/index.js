import { View, Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { styles } from './styles';



export default function TimerProgressCircle({name, progres, quantity}) {
	return (
        <View style={styles.circleContainer}>
            <Text style={styles.name}>{name}</Text>

            <View style={styles.circleWrap}>
                <Text style={styles.quantity}>{quantity<10 ? '0'+quantity : quantity}</Text>
                <Svg height="60" width="60" viewBox="0 0 60 60" style={styles.circle}>
                    <Circle cx="30" cy="30" r="25" stroke="#D9D9D9" strokeWidth="5" />
                    <Circle 
                        cx="30" cy="30" r="25" stroke="#8FD855" strokeWidth="5" 
                        strokeLinecap='round' strokeDasharray={157} strokeDashoffset={progres} />
                </Svg>
            </View>
        </View>
	);
}
