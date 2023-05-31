import { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
import { startEventTimer, stopEventTimer } from '../../../scripts/index';
import { styles } from './styles';



let date = {
    name: "Mother's Birthday",
    day: '12',
    month: '10',
    year: '2023',
    time: '00:00:00'
}

export default function CustomDate(props) {
    return (
        <View style={styles.customDateContainer}>

            {/* <DateTimePicker 
                value={'2023-11-12T00:00:00'} 
            /> */}

            <View style={[styles.inputWrap, {width: '100%'}]}>
                <Text style={styles.inputName}>Event name:</Text>
                <TextInput style={styles.input} onChangeText={(value) => date.name=value} defaultValue={date.name} />
            </View>

            <View style={styles.inputTimerData}>
                <View style={styles.inputWrap}>
                    <Text style={styles.inputName}>DD:</Text>
                    <TextInput 
                        style={styles.input} 
                        defaultValue={date.day}
                        onChangeText={(value) => date.day=value} />
                </View>
                <View style={styles.inputWrap}>
                    <Text style={styles.inputName}>MM:</Text>
                    <TextInput 
                        style={styles.input} 
                        defaultValue={date.month}
                        onChangeText={(value) => date.month=value} />
                </View>
                <View style={styles.inputWrap}>
                    <Text style={styles.inputName}>YYYY:</Text>
                    <TextInput 
                        style={styles.input} 
                        defaultValue={date.year}
                        onChangeText={(value) => date.year=value} />
                </View>
            </View>

            <View style={[styles.inputWrap, {width: 120}]}>
                <Text style={styles.inputName}>HH:MM:SS</Text>
                <TextInput 
                    style={styles.input} 
                    defaultValue={date.time}
                    onChangeText={(value) => date.time=value} />
            </View>

            <View style={styles.bottomButtons}>
                <TouchableOpacity 
                    style={[styles.bottomButton, {backgroundColor: '#FF5555'}]} 
                    onPress={() => props.setCustom(false)}>
                    <Text style={{color: '#F5F5F5'}}>Cancel</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.bottomButton, {backgroundColor: '#61DAFB'}]} 
                    onPress={() => {
                        stopEventTimer();
                        props.setCustom(false);
                        props.setDateName(date.name);
                        startEventTimer(
                            `${date.year}-${date.month}-${date.day}T${date.time}`, 
                            // `${date.year}-${date.month}-${date.day}T${date.time}`, 
                            props.setTime, props.setElements, props.setCircles
                        );
                    }}>
                    <Text style={{color: '#F5F5F5'}}>Start</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
