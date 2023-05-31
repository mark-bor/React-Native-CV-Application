import { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Animated } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { WorkSection } from '../../components/index';
import { WORKSECTIONS } from '../../data/WORK_SECTIONS';
import { sortByStatus } from '../../scripts/index';
import { styles } from './styles';



export default function Works({navigation}) {
    const [statusesBar, setStatusesBar] = useState(false);
    const [statuses, setStatuses] = useState(['stopped', 'now', 'complete']);
    const [opacity, setOpacity] = useState({stopped: 1, now: 1, complete: 1});
    // const fadeAnim = useRef(new Animated.Value(-56)).current;

    // const fadeIn = () => Animated.timing(fadeAnim, {toValue: 0, duration: 1000, useNativeDriver: true}).start();
    // const fadeOut = () => Animated.timing(fadeAnim, {toValue: 56, duration: 1000, useNativeDriver: true}).start();

    useEffect(() => {
        navigation.setOptions({
            headerLeftContainerStyle: {paddingLeft: 20},
            headerRightContainerStyle: {paddingRight: 20},
            headerRight: () => {
                return (
                    <TouchableOpacity 
                        style={styles.filterButton} 
                        onPress={() => setStatusesBar(!statusesBar)}>
                        <Ionicons name='funnel' size={22} color={statusesBar ? '#61DAFB' : '#F5F5F5'} />
                    </TouchableOpacity>
                );
            }
        });
        // statusesBar ? fadeIn() : fadeOut();
    });


	return (
        <View style={{height: '100%', paddingBottom: 19}}>
            {statusesBar ? 
                <View style={[styles.statusContainer]}>
                    <TouchableOpacity 
                        style={[styles.status, {opacity: opacity.stopped}]}
                        onPress={() => sortByStatus('stopped', statuses, setStatuses, opacity,setOpacity)}>
                        <View style={[styles.point, {backgroundColor: '#EDE407'}]}></View>
                        <Text style={styles.text}>Stopped</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.status, {opacity: opacity.now}]}
                        onPress={() => sortByStatus('now', statuses, setStatuses, opacity,setOpacity)}>
                        <View style={[styles.point, {backgroundColor: '#78A2E1'}]}></View>
                        <Text style={styles.text}>Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={[styles.status, {opacity: opacity.complete}]}
                    onPress={() => sortByStatus('complete', statuses, setStatuses, opacity,setOpacity)}>
                        <View style={[styles.point, {backgroundColor: '#8FD855'}]}></View>
                        <Text style={styles.text}>Complete</Text>
                    </TouchableOpacity>
                </View> 
            : null}

            <ScrollView style={{paddingTop: 19, overflow: 'visible'}} alwaysBounceHorizontal={false} alwaysBounceVertical={true}>
                {WORKSECTIONS.map((section, id) => <WorkSection key={id} statuses={statuses} data={section} navigation={navigation}/>)}
            </ScrollView>
        </View>
	);
}
