import { Text, View, ScrollView } from 'react-native';
import WorkCard from '../WorkCard/index';
import { WORKS } from '../../../data/WORKS';
import { styles } from './styles';



export default function WorkSection({statuses, data, navigation}) {
    const cards = WORKS
    .filter(work => work.type===data.type)
    .filter(work => statuses.includes(work.status))
    .map(work => work);


    if (cards.length>0) {
        return (
            <View style={styles.workSection}>
                <Text style={styles.groupName}>{data.title}</Text>
                <ScrollView style={styles.workScroll} alwaysBounceHorizontal={true} alwaysBounceVertical={false}>
                    <View style={styles.workGroup}>
                        {WORKS.map((work, id) => work.type===data.type? statuses.includes(work.status)? <WorkCard key={id} work={work} navigation={navigation}/>: null: null)}
                    </View>
                </ScrollView>
            </View>
        );
    }
}
