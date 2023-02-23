import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../AdminScreens/Home/Home';
import AddProducts from '../../AdminScreens/AddProducts/AddProducts.js';
const Tab = createBottomTabNavigator();
function AdminBottomNav() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="AddProducts" component={AddProducts} />
        </Tab.Navigator>
    );
}

export default AdminBottomNav;