import { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { SelectCurrency } from '../../components/index';
import { calculateRate, changeAPI } from '../../scripts/index';
import { styles } from './styles';



export default function ExchangeRate() {
    const [api, setAPI] = useState('cledara');
    const [selectCard, setSelectCard] = useState({first: false, second: false});
    const [rateOne, setRateOne] = useState('USD');
    const [rateTwo, setRateTwo] = useState('UAH');
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');


	return (
		<View style={{position: 'relative', height: '100%'}}>
            {selectCard.first? <SelectCurrency setRate={setRateOne} setSelectCard={setSelectCard} />: null}
            {selectCard.second? <SelectCurrency setRate={setRateTwo} setSelectCard={setSelectCard} />: null}

            <View style={styles.rateServices}>
                <TouchableOpacity 
                    style={[styles.rateService]}
                    onPress={() => changeAPI('cledara', {setAPI, setFirst, setSecond})}>
                    <Image 
                        style={[styles.image, {borderRadius: '50%', transform: [{scale: api==='cledara' ? 1.2 : 1}]}]} 
                        source={require('../../images/Cledara-API.jpg')} />
                    <Text>Cledara API</Text>
                </TouchableOpacity>
                
                <TouchableOpacity 
                    style={styles.rateService}
                    onPress={() => changeAPI('fyhao', {setAPI, setFirst, setSecond})}>
                    <Image 
                        style={[styles.image, {transform: [{scale: api==='fyhao' ? 1.2 : 1}]}]} 
                        source={require('../../images/currency-exchange.png')} />
                    <Text>Fyhao API</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.rateService}
                    onPress={() => changeAPI('ninjas', {setAPI, setFirst, setSecond})}>
                    <Image 
                        style={[styles.image, {transform: [{scale: api==='ninjas' ? 1.2 : 1}]}]} 
                        source={require('../../images/API-Ninjas.png')} />
                    <Text>Ninjas API</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.inputWrap}>
                <TouchableOpacity 
                    style={styles.currencyWrap} 
                    onPress={() => setSelectCard({...selectCard, first: true})}>
                    <Text style={styles.currency}>{rateOne}</Text>
                </TouchableOpacity>
                <TextInput 
                    style={styles.input} 
                    inputMode='decimal'
                    value={first}
                    onChangeText={(value) => calculateRate(
                        value, 
                        {setFirst: setFirst, setSecond: setSecond}, 
                        {rateOne: rateOne, rateTwo: rateTwo}, 
                        api
                    )}
                />
            </View>
            
            <View style={styles.inputWrap}>
                <TouchableOpacity 
                    style={styles.currencyWrap}
                    onPress={() => setSelectCard({...selectCard, second: true})}>
                    <Text style={styles.currency}>{rateTwo}</Text>
                </TouchableOpacity>
                <TextInput 
                    style={styles.input} 
                    inputMode='decimal'
                    value={second}
                    onChangeText={(value) => calculateRate(
                        value, 
                        {setFirst: setSecond, setSecond: setFirst}, 
                        {rateOne: rateTwo, rateTwo: rateOne}, 
                        api
                    )}
                />
            </View>
        </View>
	);
}
