import { createDrawerNavigator } from '@react-navigation/drawer';
import AdminBottomNav from '../../BottomTab/BottomAdmin/BottomAdmin';
const Drawer = createDrawerNavigator();
function AdminDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Adminbottom" component={AdminBottomNav} />
        </Drawer.Navigator>
    );
}

export default AdminDrawer;