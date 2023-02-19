import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Splash from '../Screens/Splash/Splash';
import Login from '../Screens/Login/Login';
import Drawernavigation from '../Drawer/DrawerScreens';
import Admin from '../Screens/Admin/Admin';

function Router() {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name="Drawernavigation" component={Drawernavigation} options={{ headerShown: false }} />
                    <Stack.Screen name="adminHome" component={Admin} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>

            {/* <NavigationContainer>
                <Tab.Navigator screenOptions={{ headerShown: false }}>
                    <Tab.Screen name="adminHome" component={User} />
                    <Tab.Screen name="Settings" component={SettingsStackScreen} />
                </Tab.Navigator>
            </NavigationContainer> */}
        </>
    );
}




export default Router;