import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TextInput, Dimensions

} from 'react-native';

import { useEffect, useRef } from 'react';
import Splash from '../Splash/Splash';
const { width, height } = Dimensions.get('window')

function Login() {
    const myRef = useRef();
    useEffect(() => {
        setTimeout(() => {
            myRef.current.setNativeProps({
                style: {
                    display: "none"
                }
            })
        }, 2000)

    }, []);
    return (
        <SafeAreaView style={{ backgroundColor: "red", flex: 1 }}>
            <View ref={myRef} style={{ flex: 1 }}>
                <Splash />
            </View>
            <View style={styles.main_login}>

                <View style={styles.Header}>
                    <View>
                        <Text style={{ textAlign: "center", fontSize: 35, fontWeight: 800, color: "#61B846" }}>
                            SAYLANI WELFARE
                        </Text>
                    </View>
                    <View>
                        <Text style={{ textAlign: "center", fontSize: 20, fontWeight: 600, color: "#024F9D" }}>
                            ONLINE DISCOUNT STORE
                        </Text>
                    </View>
                </View>

                <View style={styles.login_body}>

                    <View style={styles.parentinputs}>
                        <View style={styles.parentinputs}>
                            <TextInput
                                style={styles.inputfields}
                                placeholder="Full Name"

                            />
                        </View>
                        <View>

                        </View>
                    </View>
                    <View style={styles.parentinputs}>
                        <View style={styles.parentinputs}>
                            <TextInput
                                style={styles.inputfields}
                                placeholder="Contact"

                            />
                        </View>
                        <View>

                        </View>
                    </View>
                    <View style={styles.parentinputs}>
                        <View style={styles.parentinputs}>
                            <TextInput
                                style={styles.inputfields}
                                placeholder="Email"

                            />
                        </View>
                        <View>

                        </View>
                    </View>
                    <View style={styles.parentinputs}>
                        <View style={styles.parentinputs}>
                            <TextInput
                                style={styles.inputfields}
                                placeholder="Password"
                                secureTextEntry={true}
                            />
                        </View>
                        <View>

                        </View>
                    </View>

                </View>
            </View>


        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    main_login: {
        flex: 1,
        display: "flex",

        // justifyContent: "center",
        // alignContent: "center",
    },
    Header: {
        marginTop: 30,
        // flex: 2
    },
    login_body: {
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        paddingVertical: 50
    },
    parentinputs: {
        width: width,
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        marginTop: 10,

    },
    inputfields: {
        borderBottomWidth: 1,
        borderBottomColor: "#D4D3D3",
        width: "70%",
        paddingVertical: 2
    }

});

export default Login;