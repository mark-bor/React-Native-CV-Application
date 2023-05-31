import { View, Text, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "./styles"



export default function TechnologyCard({content, set}) {
    return (
        <View style={styles.aboutTechnologyContainer}>
            <LinearGradient 
                style={styles.aboutTechnologyCard} colors={['#D9D9D9', '#61DAFB']}
                start={{x: 0.2, y: 0.8}} end={{x: 0.9, y: 0.1}}>
                <Text style={styles.technologyName}>{content.title}</Text>
                <Text style={styles.informAbautTechnology}>{content.informationEN()}</Text>
                <Button style={styles.closeInform} title='Close' onPress={() => set(false)}/>
            </LinearGradient>
        </View>
    );
}
