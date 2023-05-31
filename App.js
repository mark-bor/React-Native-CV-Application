import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text } from 'react-native';

import { 
    Home, CVs, Works, Contacts, Certificates, 
    QECalculator, 
    PasswordGenerator, 
    MemoryGame, 
    ExchangeRate,
    EventTimer,
    PercentCalculator
} from "./src/pages/index"



const Tab = createBottomTabNavigator();
const screenOptions = {
  headerBackgroundContainerStyle: {paddingTop: 20, backgroundColor: '#8F949C'},
  headerStyle: {backgroundColor: '#16181D', height: 72, shadowOffset: {height: 0}},
  headerTintColor: '#61DAFB',
  headerTitleStyle: {fontWeight: 600, fontSize: 20},
};

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
            
                        switch (route.name) {
                          case 'Home':
                            iconName = 'home';
                            break;
                        
                          case 'CVs':
                            iconName = 'person';
                            break;
                        
                          case 'Works':
                            iconName = 'settings';
                            break;
                        
                          case 'Certificates':
                            iconName = 'medal';
                            break;
                        
                          case 'Contacts':
                            iconName = 'chatbox-ellipses';
                            break;
                        
                          default:
                            break;
                        }
                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarStyle: {backgroundColor: '#16181D'},
                    tabBarInactiveTintColor: '#F5F5F5',
                    tabBarActiveTintColor: '#61DAFB',
                })}
            >
                <Tab.Screen name="Home" component={Home} options={screenOptions}/>
                <Tab.Screen name="CVs" component={CVs} options={screenOptions}/>
                <Tab.Screen name="Works" component={WorksScreen} options={screenOptions}/>
                <Tab.Screen name="Certificates" component={Certificates} options={screenOptions}/>
                <Tab.Screen name="Contacts" component={Contacts} options={screenOptions}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}



const Stack = createNativeStackNavigator();
const WorksScreensHeader = {
  headerBackgroundContainerStyle: {backgroundColor: '#20232A'},
  headerStyle: {backgroundColor: '#20232A'},
  headerTintColor: '#F5F5F5',
  headerBackTitle: '',
  // headerRight: () => <Text style={{color: '#FFF'}}>O</Text>,
}

function WorksScreen({navigation}) {
    return (
        <Stack.Navigator initialRouteName="WorksScreen">
            <Stack.Screen name="WorksScreen" component={() => <Works navigation={navigation} />} options={{headerShown: false}}/>
            <Stack.Screen name="Quadratic equation calculator" component={QECalculator} options={WorksScreensHeader}/>
            <Stack.Screen name="Password Generator" component={PasswordGenerator} options={WorksScreensHeader}/>
            <Stack.Screen name="Memory Game" component={MemoryGame} options={WorksScreensHeader}/>
            <Stack.Screen name="Exchange Rate" component={ExchangeRate} options={WorksScreensHeader}/>
            <Stack.Screen name="Event Timer" component={EventTimer} options={WorksScreensHeader}/>
            <Stack.Screen name="Percent Calculator" component={PercentCalculator} options={WorksScreensHeader}/>
        </Stack.Navigator>
    );
}