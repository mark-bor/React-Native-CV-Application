import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Percent, PercentNumeric, CommonNumeric } from '../../components/index';
import { styles } from './styles';



export default function PercentCalculator({navigation}) {
    const [count, setCount] = useState('%');


	return (
		<View style={{height: '100%'}}>
            <View style={styles.chooseCalculatorContainer}>
                <Text style={styles.question}>What count?</Text>
                <View style={styles.chooseCalculatorButtons}>
                    <TouchableOpacity 
                        style={[styles.chooseButton, {backgroundColor: count==='%'? '#8F949C': '#D9D9D9'}]}
                        onPress={() => setCount('%')}>
                        <Text>%</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.chooseButton, {backgroundColor: count==='% numeric'? '#8F949C': '#D9D9D9'}]}
                        onPress={() => setCount('% numeric')}>
                        <Text>% numeric</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.chooseButton, {backgroundColor: count==='Common numeric'? '#8F949C': '#D9D9D9'}]}
                        onPress={() => setCount('Common numeric')}>
                        <Text>Common numeric</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {count==='%' ? <Percent styles={styles} /> : null}
            {count==='% numeric' ? <PercentNumeric styles={styles} /> : null}
            {count==='Common numeric' ? <CommonNumeric styles={styles} /> : null}
        </View>
	);
}
