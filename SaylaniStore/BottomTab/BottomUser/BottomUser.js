import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Home from '../../UserScreens/Home/Home';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Products from '../../UserScreens/Products/ProductsList.js';
const Tab = createBottomTabNavigator();
function UserBottomNav() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="ios-home" color={color} size={size} />
                ),
                tabBarActiveTintColor: '#61B846',
            }} />
            <Tab.Screen name="Products" component={Products} options={{
                headerShown: false,
            }} />
        </Tab.Navigator>
    );
}

export default UserBottomNav;