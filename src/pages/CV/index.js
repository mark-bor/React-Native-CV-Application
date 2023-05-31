import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from '../../components/index';
import { styles } from './styles';



export default function CVs() {
	return (
		<View style={{height: '100%'}}>
            <View style={styles.cvs}>
                <Link 
                    style={[styles.cv]}
                    url={'https://takct-server.netlify.app/CV/Mark%20Bordakov%20-%20Front-end.pdf'}>
                    <Image style={styles.image} source={require('../../images/orange_cv.png')}></Image>
                    <LinearGradient 
                        style={[styles.shadow]}
                        colors={['transparent', '#FB6D3A']}
                        start={{x: 0, y: 0}} end={{x: 0, y: 0.6}}>
                        <Text style={styles.cvTitle}>CV 1</Text>
                    </LinearGradient>
                </Link>
                <Link 
                    style={[styles.cv]}
                    url={'https://takct-server.netlify.app/CV/M%20Bordakov%20-%20Front-end.pdf'}>
                    <Image style={styles.image} source={require('../../images/purple_cv.png')}></Image>
                    <LinearGradient 
                        style={[styles.shadow]}
                        colors={['transparent', '#A641B5']}
                        start={{x: 0, y: 0}} end={{x: 0, y: 0.6}}>
                        <Text style={styles.cvTitle}>CV 2</Text>
                    </LinearGradient>
                </Link>
            </View>
        </View>
	);
}
