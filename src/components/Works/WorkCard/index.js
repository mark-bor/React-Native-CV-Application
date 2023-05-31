import { TouchableOpacity, View, Image,  Text } from 'react-native';
import { borderColor } from '../../scripts/index';
import { styles } from './styles';



export default function WorkCard({work, navigation}) {
    return (
        <TouchableOpacity 
            style={styles.workCard} 
            onPress={() => navigation.navigate('Works', {screen: work.link})}
        >
            <Image style={styles.workImage} source={work.image} />
            <View style={{...styles.workTitle, borderColor: borderColor(work.status)}}>
                <Text style={styles.workTitleText}>{work.nameEN}</Text>
            </View>
        </TouchableOpacity>
    );
}