import { Text, View, Image } from 'react-native';
import { Link } from '../../components/index';
import { styles } from './styles';



export default function Contacts() {
	return (
		<View style={{height: '100%'}}>
            <View style={styles.wrapers}>
                <Text style={[styles.phoneemail]} selectable={true}>+38 095 762 56 69</Text>
                <Text style={[styles.phoneemail]} selectable={true}>mark12bor@gmail.com</Text>
            </View>
                
            {/* __________ CONTACTS _____________________ */}
            <View style={styles.wrapers}>
                <Text style={styles.title}>Links:</Text>

                <View style={styles.contacts}>
                    <Link style={styles.link} url="tel:+380957625669">
                        <Image style={styles.image} source={require('../../images/mobile-icon.png')} />
                    </Link>

                    <Link style={styles.link} url="mailto:mark12bord@gmail.com">
                        <Image style={styles.image} source={require('../../images/email-icon.jpg')} />
                    </Link>

                    <Link style={styles.link} url="https://www.facebook.com/mark.uvarov.1">
                        <Image style={styles.image} source={require('../../images/fb-icon.png')} />
                    </Link>

                    <Link style={styles.link} url="https://t.me/marchi003">
                        <Image style={styles.image} source={require('../../images/telegram-icon.png')} />
                    </Link>

                    <Link style={styles.link} url="https://www.linkedin.com/in/mark-bordakov-8441bb241/">
                        <Image style={styles.image} source={require('../../images/linkedin-icon.png')} />
                    </Link>

                    <Link style={styles.link} url="https://github.com/mark-bor?tab=repositories">
                        <Image style={styles.image} source={require('../../images/github-icon.png')} />
                    </Link>
                </View>
            </View>
        </View>
	);
}
