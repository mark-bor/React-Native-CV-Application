import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Svg, { Circle } from 'react-native-svg';
import { stopEventTimer } from '../../../scripts/index';
import { styles } from './styles';



export default function EventTimerOptions(props) {
    return (
        <View style={styles.optionsContainer}>
            <TouchableOpacity style={{marginBottom: 20}} onPress={() => props.setOptions(false)}>
                <Ionicons  name='arrow-back' size={30} color={'#16181D'} />
            </TouchableOpacity>

            <Text style={{fontSize: 20}}>Type of timer:</Text>
            
            <View style={styles.timerTypes}>
                <TouchableOpacity 
                    style={[styles.timerType, props.timerTypes==='line'?styles.timerTypeBorder:null]} 
                    onPress={() => props.setTimerTypes('line')}>
                    <View style={styles.progressLine}>
                        <View style={styles.progress}></View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.timerType, props.timerTypes==='circle'?styles.timerTypeBorder:null]} 
                    onPress={() => props.setTimerTypes('circle')}>
                    <Svg height="60" width="60" viewBox="0 0 60 60" style={styles.circle}>
                        <Circle cx="30" cy="30" r="25" stroke="#D9D9D9" strokeWidth="5" />
                        <Circle 
                            cx="30" cy="30" r="25" stroke="#8FD855" strokeWidth="5" 
                            strokeLinecap='round' strokeDasharray={157} strokeDashoffset={100} />
                    </Svg>
                </TouchableOpacity>
            </View>

            <View style={styles.buttonsClearStopWrap}>
                <TouchableOpacity
                    style={[styles.buttonsClearStop, {backgroundColor: '#FF9900'}]}
                    onPress={() => {
                        stopEventTimer();
                        props.setDateName('(event name)');
                        props.setTime({month: 0, day: 0, hour: 0, minute: 0, second: 0});
                        props.setElements({month: 0, day: 0, hour: 0, minute: 0, second: 0});
                        props.setCircles({month: 0, day: 0, hour: 0, minute: 0, second: 0});
                        props.setOptions(false);
                    }}>
                    <Text style={[styles.buttonsClearStopText, {color: '#F5F5F5'}]}>Stop and clear</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.buttonsClearStop, {backgroundColor: '#FF5555'}]}
                    onPress={stopEventTimer}>
                    <Text style={[styles.buttonsClearStopText, {color: '#F5F5F5'}]}>Stop</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
