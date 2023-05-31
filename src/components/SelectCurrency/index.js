import { View, TouchableOpacity, Text } from 'react-native';
import { selectCurrency } from "../../scripts/index"
import { styles } from "./styles"



export default function SelectCurrency({setRate, setSelectCard}) {
    return (
        <View style={styles.selectCurrencyContainer}>
            <View style={styles.selectCurrencyCard}>
                <TouchableOpacity 
                    style={styles.currencyWrap}
                    onPress={() => selectCurrency(setRate, 'USD', setSelectCard)}>
                    <Text style={styles.currency}>USD</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.currencyWrap}
                    onPress={() => selectCurrency(setRate, 'EUR', setSelectCard)}>
                    <Text style={styles.currency}>EUR</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.currencyWrap}
                    onPress={() => selectCurrency(setRate, 'GBP', setSelectCard)}>
                    <Text style={styles.currency}>GBP</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.currencyWrap}
                    onPress={() => selectCurrency(setRate, 'CNY', setSelectCard)}>
                    <Text style={styles.currency}>CNY</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.currencyWrap}
                    onPress={() => selectCurrency(setRate, 'PLN', setSelectCard)}>
                    <Text style={styles.currency}>PLN</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.currencyWrap}
                    onPress={() => selectCurrency(setRate, 'UAH', setSelectCard)}>
                    <Text style={styles.currency}>UAH</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
