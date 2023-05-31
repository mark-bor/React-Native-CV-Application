import { TouchableOpacity, Image } from 'react-native';
import { showInformation } from '../../../scripts/index';
import { styles } from "./styles"



export default function Technology({data, setContent, setCard}) {
    const logoHeight = data.title==='React Native'? '90%': '100%';


    return (
        <TouchableOpacity 
            style={styles.techButton} 
            onPress={() => showInformation(setContent, setCard, data.title)}>
            <Image source={data.image} style={{...styles.logoOfTech, height: logoHeight}} />
        </TouchableOpacity>
    );
}
