import { createDrawerNavigator } from '@react-navigation/drawer';
import UserBottomNav from '../../BottomTab/BottomUser/BottomUser';
const Drawer = createDrawerNavigator();
function UserDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Saylani Store" component={UserBottomNav}  />
        </Drawer.Navigator>
    );
}

export default UserDrawer;

