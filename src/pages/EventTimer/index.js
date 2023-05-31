import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ChooseDate, CustomDate, EventTimerOptions, TimerProgressLine, TimerProgressCircle } from '../../components/index';
import { styles } from './styles';



export default function EventTimer() {
    const [dateName, setDateName] = useState('(event name)');
    const [timerTypes, setTimerTypes] = useState('line');
    const [chooseDate, setChooseDate] = useState(false);
    const [custom, setCustom] = useState(false);
    const [options, setOptions] = useState(false);
    const [time, setTime] = useState({month: 0, day: 0, hour: 0, minute: 0, second: 0});
    const [elements, setElements] = useState({month: 0, day: 0, hour: 0, minute: 0, second: 0});
    const [circles, setCircles] = useState({month: 0, day: 0, hour: 0, minute: 0, second: 0});


	return (
        <View style={{height: '100%', paddingTop: 15}}>
            {chooseDate ? 
                <ChooseDate 
                    setChooseDate={setChooseDate} 
                    setDateName={setDateName} 
                    setCustom={setCustom} 
                    setTime={setTime} 
                    setElements={setElements} 
                    setCircles={setCircles}
                />
            : null}
            {custom ? 
                <CustomDate 
                    setCustom={setCustom} 
                    setDateName={setDateName}
                    setTime={setTime} 
                    setElements={setElements}
                    setCircles={setCircles} 
                />
            : null}
            {options ? 
                <EventTimerOptions
                    timerTypes={timerTypes} 
                    setTimerTypes={setTimerTypes}
                    setOptions={setOptions} 
                    setDateName={setDateName}
                    setTime={setTime} 
                    setElements={setElements}
                    setCircles={setCircles} 
                />
            : null}

            <View style={styles.buttons}>
                <TouchableOpacity 
                    style={styles.openOptionsButton}
                    onPress={() => setChooseDate(true)}>
                    <Ionicons name='calendar' size={20} color={chooseDate?'#61DAFB':'#16181D'} />
                    <Text style={[styles.buttonText]}>Choose date</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.openOptionsButton}
                    onPress={() => setOptions(true)}>
                    <Ionicons name='options' size={20} color={'#16181D'} />
                </TouchableOpacity>
            </View>

            <Text style={styles.headText}>To {dateName}:</Text>

            {timerTypes==='line' ? 
                <View>
                    <TimerProgressLine name='Monthes:' progres={elements.month} quantity={time.month} />
                    <TimerProgressLine name='Days:' progres={elements.day} quantity={time.day} />
                    <TimerProgressLine name='Hours:' progres={elements.hour} quantity={time.hour} />
                    <TimerProgressLine name='Minutes:' progres={elements.minute} quantity={time.minute} />
                    <TimerProgressLine name='Seconds:' progres={elements.second} quantity={time.second} />
                </View>
            : null}
            {timerTypes==='circle' ? 
                <View style={styles.wrapOfCircles}>
                    <TimerProgressCircle name='Monthes:' progres={circles.month} quantity={time.month} />
                    <TimerProgressCircle name='Days:' progres={circles.day} quantity={time.day} />
                    <TimerProgressCircle name='Hours:' progres={circles.hour} quantity={time.hour} />
                    <TimerProgressCircle name='Minutes:' progres={circles.minute} quantity={time.minute} />
                    <TimerProgressCircle name='Seconds:' progres={circles.second} quantity={time.second} />
                </View>
            : null}
        </View>
	);
}
