import { ScrollView, View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { chooseDate } from '../../../scripts/index';
import { styles } from './styles';



export default function ChooseDate(props) {
    return (
        <ScrollView style={styles.chooseDateContainer}>
            <View style={styles.chooseDateCard}>
                <TouchableOpacity 
                    style={styles.dateWrap}
                    onPress={() => chooseDate(props, 'Custom')}>
                    <Text style={[styles.date, {color: '#FF9900'}]}>custom...</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.dateWrap}
                    onPress={() => chooseDate(props, 'My Birthday', '2023-11-12T00:00:00')}>
                    <ImageBackground source={require('../../../images/birthday_party.jpg')} style={styles.dateBackground}>
                        <Text style={styles.date}>My Birthday</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.dateWrap}
                    onPress={() => chooseDate(props, 'New Year', '2024-01-01T00:00:00')}>
                    <ImageBackground source={require('../../../images/new_year.jpg')} style={styles.dateBackground}>
                        <Text style={styles.date}>New Year</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.dateWrap}
                    onPress={() => chooseDate(props, 'Winter', '2023-12-01T00:00:00')}>
                    <ImageBackground source={require('../../../images/winter.jpg')} style={styles.dateBackground}>
                        <Text style={styles.date}>Winter</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.dateWrap}
                    onPress={() => chooseDate(props, 'Spring', '2024-03-01T00:00:00')}>
                    <ImageBackground source={require('../../../images/spring.jpg')} style={styles.dateBackground}>
                        <Text style={styles.date}>Spring</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.dateWrap}
                    onPress={() => chooseDate(props, 'Summer', '2024-06-01T00:00:00')}>
                    <ImageBackground source={require('../../../images/summer.avif')} style={styles.dateBackground}>
                        <Text style={styles.date}>Summer</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.dateWrap}
                    onPress={() => chooseDate(props, 'Autumn', '2023-09-01T00:00:00')}>
                    <ImageBackground source={require('../../../images/autumn.jpg')} style={styles.dateBackground}>
                        <Text style={styles.date}>Autumn</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
