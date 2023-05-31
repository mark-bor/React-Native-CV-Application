import { useState } from 'react';
import { Text, View } from 'react-native';
import { TechnologyCard, Technology } from '../../components/index';
import { TECHNOLOGIES } from '../../data/TECHNOLOGIES';
import { styles } from './styles';



export default function Home() {
    const [card, setCard] = useState(false);
	const [content, setContent] = useState({});


	return (
		<View style={{height: '100%'}}>
            {/* __________ TITLE _____________________ */}
            {/* <Title>My CV-Application</Title> */}

            {card ? <TechnologyCard content={content} set={setCard} /> : null}

            {/* __________ TECHNOLOGIES _____________________ */}
            <View style={styles.technologiesSection}>
                <Text style={styles.titlesInTechSection}>Technologies which I used in this app</Text>

                <View style={styles.listOfTech}>
                    {TECHNOLOGIES.map((data, i) => <Technology key={i} data={data} setContent={setContent} setCard={setCard} />)}
                </View>
            </View>
        </View>
	);
}
