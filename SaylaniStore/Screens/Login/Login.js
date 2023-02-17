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
import { useEffect, useRef, useState } from 'react';
import Splash from '../Splash/Splash';
const { width, height } = Dimensions.get('window')
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ToastContainer, toast } from 'react-toastify';

let nametest = /^[A-Za-z .]{3,20}$/
let emailtest = /^([\w]*[\w\.]*(?!\.)@gmail.com)/
let passwordtest = /^[a-zA-Z0-9]{6,16}$/;
let phonetest = /^[0-9]{11}$/;


function Login() {
    const myRef = useRef();
    const loginset = useRef();
    const [loginHandler, setloginHandler] = useState(true);
    const [UserName, setUserName] = useState();
    const [Contact, setContact] = useState();
    const [Email, setEmail] = useState();
    const [Password, setPassword] = useState();
    const [ConfirmPassword, setConfirmPassword] = useState();

    // toggle screens  
    useEffect(() => {
        setTimeout(() => {
            myRef.current.setNativeProps({
                style: {
                    display: "none"
                }
            })
            loginset.current.setNativeProps({
                style: {
                    display: "flex"
                }
            })
        }, 2000)

    }, []);

    // toggle signup to login  

    const Loginhander = () => {
        setloginHandler(!loginHandler)
    }

    // create user 

    // const Createuser = () => {

    //     console.log(UserName, Contact, Email, Password, ConfirmPassword)
    //     if ((nametest.test(UserName)) && (emailtest.test(Email)) && (passwordtest.test(Password)) && (phonetest.test(Contact))) {
    //         // setloaders(true)
    //         createUserWithEmailAndPassword(auth, Email, Password)
    //             .then(async (userCredential) => {
    //                 // Signed up  
    //                 const user = userCredential.user;
    //                 await setDoc(doc(db, "users", user.uid), {
    //                     name: UserName,
    //                     email: Email,
    //                     password: Password,
    //                     contact: Contact,
    //                     userUid: user.uid
    //                 })
    //                 setloaders(false)
    //                 toast.success("Sign Up Successfully !")
    //                 console.log("signup===>", user)
    //                 if (user.email == "admin@gmail.com") {
    //                     navigate('/admin')
    //                 } else {
    //                     navigate('/user')
    //                 }
    //             })
    //             .catch((error) => {
    //                 setloaders(true)
    //                 const errorCode = error.code;
    //                 const errorMessage = error.message;
    //                 toast.error(`${errorMessage}`)
    //                 console.log("signup error===>", errorMessage)
    //                 setloaders(false)
    //             });
    //     } else {
    //         toast.error("please fill required input fileds")
    //     }
    // }


    const loader = () => {
        toast.success("hello");

    }

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <View ref={myRef} style={{ height: height, }}>
                <Splash />
            </View>
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>

                    <View style={styles.main_login} ref={loginset}>
                        {loginHandler ?
                            <>
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
                                        <View style={styles.eachinput}>
                                            <View>
                                                <Ionicons name="person-circle-outline" size={25} color="#D4D3D3" />
                                            </View>
                                            <TextInput
                                                style={styles.inputfields}
                                                placeholder="Full Name"
                                                placeholderTextColor="#999"
                                                maxLength={40}

                                            />
                                        </View>
                                        <View style={styles.eachinput}>
                                            <View>
                                                <Ionicons name="call-outline" size={25} color="#D4D3D3" />
                                            </View>
                                            <TextInput
                                                style={styles.inputfields}
                                                placeholder="Contact"
                                                placeholderTextColor="#999"
                                                maxLength={11}
                                            />
                                        </View>
                                        <View style={styles.eachinput}>
                                            <View>
                                                <Ionicons name="mail" size={25} color="#D4D3D3" />
                                            </View>
                                            <TextInput
                                                style={styles.inputfields}
                                                placeholder="Email address"
                                                placeholderTextColor="#999"
                                                keyboardType='email-address'

                                            />
                                        </View>
                                        <View style={styles.eachinput}>
                                            <View>
                                                <Ionicons name="md-lock-closed" size={25} color="#D4D3D3" />
                                            </View>
                                            <TextInput
                                                style={styles.inputfields}
                                                placeholder="Password"
                                                placeholderTextColor="#999"
                                                secureTextEntry={true}
                                                maxLength={15}

                                            />
                                        </View>
                                        <View style={styles.eachinput}>
                                            <View>
                                                <Ionicons name="md-lock-closed" size={25} color="#D4D3D3" />
                                            </View>
                                            <TextInput
                                                style={styles.inputfields}
                                                placeholder="Confirm Password"
                                                placeholderTextColor="#999"
                                                secureTextEntry={true}

                                            />
                                        </View>
                                        <TouchableOpacity style={styles.sub_btn} onPress={loader} >
                                            <Text style={{ fontWeight: 700, fontSize: 18 }}>Sign Up</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.alreadyaccount} onPress={Loginhander}>
                                            <Text style={{ color: "#024F9D", fontWeight: 700, fontSize: 15, letterSpacing: 1 }}>Already have an account? Login</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </>
                            :
                            <>
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
                                        <View style={styles.eachinput}>
                                            <View>
                                                <Ionicons name="mail" size={25} color="#D4D3D3" />
                                            </View>
                                            <TextInput
                                                style={styles.inputfields}
                                                placeholder="Email address"
                                                placeholderTextColor="#999"

                                            />
                                        </View>
                                        <View style={styles.eachinput}>
                                            <View>
                                                <Ionicons name="md-lock-closed" size={25} color="#D4D3D3" />
                                            </View>
                                            <TextInput
                                                style={styles.inputfields}
                                                placeholder="Password"
                                                placeholderTextColor="#999"
                                                secureTextEntry={true}

                                            />
                                        </View>
                                        <TouchableOpacity style={styles.sub_btn}>
                                            <Text style={{ fontWeight: 700, fontSize: 18 }}>Login</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.alreadyaccount} onPress={Loginhander}>
                                            <Text style={{ color: "#024F9D", fontWeight: 700, fontSize: 15, letterSpacing: 1 }}>Dont't have an account? Register</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </>
                        }
                    </View>


                </ScrollView>
            </SafeAreaView>
        </>

    );
}

const styles = StyleSheet.create({
    main_login: {
        flex: 1,
        display: "none",

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
    eachinput: {
        width: width,
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        flexDirection: "row",
        marginVertical: 20,
    },
    inputfields: {
        borderBottomWidth: 1,
        borderBottomColor: "#D4D3D3",
        width: "70%",
        paddingVertical: 0,
        color: "#000",
        // textDecoration: 'none',
        fontSize: 18,
        paddingHorizontal: 3

    },
    sub_btn: {
        width: "50%",
        marginTop: 15,
        textAlign: "center",
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        paddingVertical: 20,
        borderRadius: 7,
        backgroundColor: "#61B846",
        color: "#FFF",
    },
    alreadyaccount: {
        // width: "100%",
        textAlign: "center",
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        paddingVertical: 20,
        borderRadius: 7,
        backgroundColor: "transparent"
    }

});

export default Login;