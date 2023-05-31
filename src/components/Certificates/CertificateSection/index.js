import { Text, View } from 'react-native';
import PagerView from 'react-native-pager-view';
import Certificate from '../Certificate/index';
import { styles } from './styles';



export default function CertificateSection({object, certififcates}) {
	return (
		<View style={styles.certificateSection}>
            <Text style={styles.sectionTitle}>{object.en}:</Text>

            <PagerView style={styles.certificateGroup} initialPage={0}>
                {certififcates.map((certififcate, i) => <Certificate key={i} certificate={certififcate}/>)}
            </PagerView>
        </View>
	);
}
