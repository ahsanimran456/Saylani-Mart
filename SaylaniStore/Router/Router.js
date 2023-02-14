import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Screens/Splash/Splash';
import Login from '../Screens/Login/Login';
function Router() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Splash" component={Splash} 
                options={{
                    headerShown:false
                }}
                  />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;