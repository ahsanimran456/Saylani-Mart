import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Splash from '../Screens/Splash/Splash';
import Login from '../Screens/Login/Login';
import User from '../Screens/User/User';
import Admin from '../Screens/Admin/Admin';

function Tabnavigation() {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="adminHome" component={User} />
                <Tab.Screen name="userhome" component={Admin} />
                {/* <Tab.Screen name="Settings" component={SettingsStackScreen} /> */}
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default Tabnavigation

