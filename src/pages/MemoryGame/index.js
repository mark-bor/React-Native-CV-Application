import { ScrollView, View } from 'react-native';
import { MemoryGameCard } from '../../components/index';
import { MEMORYGAMECARDS } from '../../data/MEMORYGAMECARDS';
import { classMemoryGame } from '../../scripts/index';
import { styles } from './styles';



export default function MemoryGame() {
	return (
		<ScrollView alwaysBounceHorizontal={false} alwaysBounceVertical={true}>
            <View style={styles.cards}>
                {MEMORYGAMECARDS.map((card, i) => <MemoryGameCard key={i} data={card} game={classMemoryGame} />)}
            </View>
        </ScrollView>
	);
}
