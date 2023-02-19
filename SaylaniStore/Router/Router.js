import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screens/Splash/Splash';
import Login from '../Screens/Login/Login';
import User from '../Screens/User/User';
import Admin from '../Screens/Admin/Admin';

function Router() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="userhome" component={User} options={{ headerShown: false }} />
                <Stack.Screen name="adminHome" component={Admin} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}




export default Router;