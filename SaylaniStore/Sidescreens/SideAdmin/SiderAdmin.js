import { createDrawerNavigator } from '@react-navigation/drawer';
import AdminBottomNav from '../../BottomTab/BottomAdmin/BottomAdmin';
const Drawer = createDrawerNavigator();
function AdminDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Saylani Store" component={AdminBottomNav} options={{
                    headerShown: false,}} />
        </Drawer.Navigator>
    );
}

export default AdminDrawer;