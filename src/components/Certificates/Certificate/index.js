import { View, Text, Dimensions } from 'react-native';
import Link from '../../Link/index';
import { styles } from './styles';



export default function Certificate({key, certificate}) {
	return (
        <View style={[styles.certificateWrap, {width: Dimensions.get('screen').width}]} key={key}>
            <Link url={certificate.file} style={[styles.certificate, certificate.background]}>
                <Text style={[styles.course, styles.course_company]}>
                    {certificate.courseEN}
                </Text>
                <View style={styles.line}></View>
                <Text style={[styles.company, styles.course_company]}>
                    {certificate.company}
                </Text>
            </Link>
        </View>
	);
}
