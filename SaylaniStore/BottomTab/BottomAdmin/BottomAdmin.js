import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../AdminScreens/Home/Home';
import AddProducts from '../../AdminScreens/AddProducts/AddProducts.js';
import Orders from '../../AdminScreens/Orders/Order'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();
function AdminBottomNav() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} options={{
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="ios-home" color={color} size={size} />
                ),
                tabBarActiveTintColor: '#61B846',
                tabBarLabelStyle: {
                    fontSize: 13
                }
            }} />
            <Tab.Screen name="Add Items" component={AddProducts}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-add-circle-outline" color={color} size={size} />
                    ),
                    tabBarActiveTintColor: '#61B846',
                    tabBarLabelStyle: {
                        fontSize: 13
                    }
                }} />
            <Tab.Screen name="Orders" component={Orders}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-person" color={color} size={size} />
                    ),
                    tabBarActiveTintColor: '#61B846',
                    tabBarLabelStyle: {
                        fontSize: 13
                    }
                }} />
        </Tab.Navigator>
    );
}

export default AdminBottomNav;