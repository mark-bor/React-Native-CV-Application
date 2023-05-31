import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { calculatePercentNumeric } from '../../scripts/index';



export default function PercentNumeric({styles}) {
    const [numeric, setNumeric] = useState('');
    const [commonNumeric, setCommonNumeric] = useState('');
    const [answer, setAnswer] = useState('X');


	return (
		<View style={{height: '100%', paddingTop: 30}}>
            <View style={styles.calculatorWrap}>
                <Text style={styles.text}>The </Text>
                <TextInput style={styles.input} keyboardType='numeric' onChangeText={setNumeric} placeholder='numeric' />
                <Text style={styles.text}> of common</Text>
                <TextInput style={styles.input} keyboardType='numeric' onChangeText={setCommonNumeric} placeholder='numeric' />
                <Text style={styles.text}> is the </Text>
                <Text style={styles.answer} selectable={true}> {answer}% </Text>
                <Text style={styles.text}> .</Text>
            </View>
                                
            <TouchableOpacity style={styles.button} onPress={() => calculatePercentNumeric({numeric, commonNumeric}, setAnswer)}>
                <Text>Calculate</Text>
            </TouchableOpacity>
        </View>
	);
}
