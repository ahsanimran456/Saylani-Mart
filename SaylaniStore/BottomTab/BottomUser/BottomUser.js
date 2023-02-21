import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../UserScreens/Home/Home';

import Products from '../../UserScreens/Products/ProductsList.js';
const Tab = createBottomTabNavigator();
function UserBottomNav() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Products" component={Products} />
        </Tab.Navigator>
    );
}

export default UserBottomNav;