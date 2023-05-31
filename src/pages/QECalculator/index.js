import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import { calculateQECalculator } from '../../scripts/index';
import { styles } from './styles';



export default function QECalculator({navigation}) {
    const [a, setA] = useState(1);
    const [b, setB] = useState(1);
    const [c, setC] = useState(1);
    const [result, setResult] = useState({x1: '', x2: ''});


	return (
		<View style={{height: '100%', paddingTop: 30}}>
            {/* __________ TITLE _____________________ */}
            {/* <Text>Quadratic equation calculator</Text> */}

            <View style={styles.argument}>
                <View style={styles.argumentName}><Text style={styles.text}>a</Text></View>
                <TextInput 
                    style={styles.argumentInput} 
                    onChangeText={(num) => setA(Number(num))}
                    keyboardType='numbers-and-punctuation'
                />
            </View>
            <View style={styles.argument}>
                <View style={styles.argumentName}><Text style={styles.text}>b</Text></View>					
                <TextInput 
                    style={styles.argumentInput} 
                    onChangeText={(num) => setB(Number(num))}
                    keyboardType='numbers-and-punctuation' 
                />
            </View>
            <View style={styles.argument}>
                <View style={styles.argumentName}><Text style={styles.text}>c</Text></View>
                <TextInput 
                    style={styles.argumentInput} 
                    onChangeText={(num) => setC(Number(num))} 
                    keyboardType='numbers-and-punctuation'
                />
            </View>

            <View style={styles.results}>
                <View style={styles.result}>
                    <View style={styles.resultName}><Text style={styles.text}>x1</Text></View>
                    <View style={styles.resultReques}><Text style={styles.text}>{result.x1}</Text></View>
                </View>
                <View style={styles.result}>
                    <View style={styles.resultName}><Text style={styles.text}>x2</Text></View>
                    <View style={styles.resultReques}><Text style={styles.text}>{result.x2}</Text></View>
                </View>
            </View>
                                
            <TouchableOpacity style={styles.button} onPress={() => calculateQECalculator({a, b, c}, setResult)}>
                <Text>Calculate</Text>
            </TouchableOpacity>
        </View>
	);
}
