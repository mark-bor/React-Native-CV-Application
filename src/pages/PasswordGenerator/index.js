import { useState } from 'react';
import { ScrollView, View, Text, Switch, TextInput, TouchableOpacity } from 'react-native';
import { generate } from '../../scripts/index';
import { styles } from './styles';



export default function PasswordGenerator({navigation}) {
    const [parameters, setParameters] = useState({
        numerics: true, 
        smallLiters: true, 
        bigLiters: true, 
        characters: false, 
        repeating: false,
        length: 0,
        quantity: 0
    });
    const [passwords, setPasswords] = useState([]);


	return (
        <ScrollView style={{paddingBottom: 30}} alwaysBounceHorizontal={false} alwaysBounceVertical={true}>
            <Text style={styles.sectionTitle}>Parametrs of generator</Text>
            
            <View style={styles.switchWrap}>
                <Text style={styles.optionName}>Numerics 0-9</Text>
                <Switch 
                    trackColor={{false: '#D9D9D9', true: '#61DAFB'}} 
                    onValueChange={() => setParameters({...parameters, numerics: !parameters.numerics})} 
                    value={parameters.numerics} 
                />
            </View>
            <View style={styles.switchWrap}>
                <Text style={styles.optionName}>Small liters a-z</Text>
                <Switch 
                    trackColor={{false: '#D9D9D9', true: '#61DAFB'}} 
                    onValueChange={() => setParameters({...parameters, smallLiters: !parameters.smallLiters})} 
                    value={parameters.smallLiters} 
                />
            </View>
            <View style={styles.switchWrap}>
                <Text style={styles.optionName}>Big liters A-Z</Text>
                <Switch 
                    trackColor={{false: '#D9D9D9', true: '#61DAFB'}} 
                    onValueChange={() => setParameters({...parameters, bigLiters: !parameters.bigLiters})} 
                    value={parameters.bigLiters} 
                />
            </View>
            <View style={styles.switchWrap}>
                <Text style={styles.optionName}>Special characters</Text>
                <Switch 
                    trackColor={{false: '#D9D9D9', true: '#61DAFB'}} 
                    onValueChange={() => setParameters({...parameters, characters: !parameters.characters})} 
                    value={parameters.characters} 
                />
            </View>
            <View style={styles.switchWrap}>
                <Text style={styles.optionName}>Avoid repeating characters</Text>
                <Switch 
                    trackColor={{false: '#D9D9D9', true: '#61DAFB'}} 
                    onValueChange={() => setParameters({...parameters, repeating: !parameters.repeating})} 
                    value={parameters.repeating} 
                />
            </View>

            <View style={styles.countOptions}>
                <View style={styles.countWrap}>
                    <Text style={styles.optionName}>Length</Text>
                    <TextInput 
                        style={styles.countInput} 
                        onChangeText={(num) => setParameters({...parameters, length: Number(num)})}
                        keyboardType='numbers-and-punctuation' 
                    />
                </View>
                <View>
                    <Text style={styles.optionName}>Quantity</Text>
                    <TextInput 
                        style={styles.countInput} 
                        onChangeText={(num) => setParameters({...parameters, quantity: Number(num)})}
                        keyboardType='numbers-and-punctuation' 
                    />
                </View>
            </View>
            
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => generate(parameters, setPasswords)}
            >
                <Text style={styles.buttonText}>Generate</Text>
            </TouchableOpacity>
        
            <Text style={styles.sectionTitle}>Passwords</Text>

            <View style={{minHeight: 100}}>
                {passwords.map((password, i) => <Text key={i} style={styles.password} selectable={true}>{password}</Text>)}
            </View>
        </ScrollView>
	);
}
