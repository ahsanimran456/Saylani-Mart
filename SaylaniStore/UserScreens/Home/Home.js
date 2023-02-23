import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { useEffect, useRef, useState } from 'react';

function Home() {
    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            if (user) {
                console.log("userhome", user);
            } else {
                console.log("nhi mila")
            }
        })
    }, []);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View>
                    <Text>
                        Helo user home
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}

export default Home;