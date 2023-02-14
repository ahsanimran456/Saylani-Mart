import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    setNativeProps,
} from 'react-native';
import { useEffect, useRef } from 'react';
import Splash from '../Splash/Splash';
function Login() {
    const splashscreen = useRef();
    useEffect(() => {
        setTimeout(() => {
            console.log(splashscreen.current.setNativeProps({
                style: {
                    display:"none"
                }
            }))

        }, 2000);
    }, []);
    return (
        <SafeAreaView style={{ backgroundColor: "red", flex: 1 }}>
            <Splash ref={splashscreen} />
        </SafeAreaView>

    );
}

export default Login;