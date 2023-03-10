import React from 'react';
import { Link, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../Screens/Login/Login';
// import Splash from '../Screens/Splash/Splash';
// import Drawernavigation from '../Drawer/DrawerScreens';
// import Admin from '../Screens/Admin/Admin';
import UserDrawer from '../Sidescreens/SideUser/SiderUser.js';
import AdminDrawer from '../Sidescreens/SideAdmin/SiderAdmin';

function Router() {
    const Stack = createNativeStackNavigator();
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name="UserHome" component={UserDrawer} options={{ headerShown: false }} />
                    <Stack.Screen name="AdminHome" component={AdminDrawer} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}




export default Router;