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
    TouchableOpacity,
    Image
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
function Home() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.headerparent}>
                    <View style={styles.headerinner}>
                        <AntDesign name="left" size={30} style={{ color: "#BFBCBC" }} />
                        <View style={{ width: 50, height: 50, borderColor: "red", borderWidth: 2, borderRadius: 100, marginRight: 5 }}>
                            <Image source={require("../../Assets/images/item6.jpg")} style={{ borderRadius: 100, height: "100%", width: "100%", objectFit: "contain" }} />
                        </View>
                        <View>
                            <Text style={styles.headertext1}>
                                Mr. Ahsan
                            </Text>
                            <Text style={styles.headertext2}>
                                Admin
                            </Text>
                        </View>
                    </View>
                    {/* <View></View> */}
                </View>
                <View style={styles.AllProducts}>
                    <View>
                        <Text style={styles.headertext1}>
                            All Products....
                        </Text>
                    </View>
                    <View style={styles.Eachproducts}>
                        <View style={{ width: 100, height: 50 }}>
                            <Image source={require("../../Assets/images/apple.png")} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                        </View>
                        <View>
                            <Text style={styles.headertext2}>
                                    Apple
                            </Text>
                            <Text style={styles.headertext2}>
                                    1 kg
                            </Text>
                        </View>
                        <View>

                        </View>
                    </View>
                    <View style={styles.Eachproducts}>
                        <View style={{ width: 100, height: 50 }}>
                            <Image source={require("../../Assets/images/apple.png")} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                        </View>
                        <View>
                            <Text style={styles.headertext2}>
                                    Apple
                            </Text>
                            <Text style={styles.headertext2}>
                                    1 kg
                            </Text>
                        </View>
                        <View>

                        </View>
                    </View>
                    <View style={styles.Eachproducts}>
                        <View style={{ width: 100, height: 50 }}>
                            <Image source={require("../../Assets/images/apple.png")} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                        </View>
                        <View>
                            <Text style={styles.headertext2}>
                                    Apple
                            </Text>
                            <Text style={styles.headertext2}>
                                    1 kg
                            </Text>
                        </View>
                        <View>

                        </View>
                    </View>
                    <View style={styles.Eachproducts}>
                        <View style={{ width: 100, height: 50 }}>
                            <Image source={require("../../Assets/images/apple.png")} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                        </View>
                        <View>
                            <Text style={styles.headertext2}>
                                    Apple
                            </Text>
                            <Text style={styles.headertext2}>
                                    1 kg
                            </Text>
                        </View>
                        <View>

                        </View>
                    </View>
                    <View style={styles.Eachproducts}>
                        <View style={{ width: 100, height: 50 }}>
                            <Image source={require("../../Assets/images/apple.png")} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                        </View>
                        <View>
                            <Text style={styles.headertext2}>
                                    Apple
                            </Text>
                            <Text style={styles.headertext2}>
                                    1 kg
                            </Text>
                        </View>
                        <View>

                        </View>
                    </View>
                    <View style={styles.Eachproducts}>
                        <View style={{ width: 100, height: 50 }}>
                            <Image source={require("../../Assets/images/apple.png")} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                        </View>
                        <View>
                            <Text style={styles.headertext2}>
                                    Apple
                            </Text>
                            <Text style={styles.headertext2}>
                                    1 kg
                            </Text>
                        </View>
                        <View>

                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    headerparent: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderWidth: 2,
        borderBottomColor: "#D9D9D9"

    },
    headerinner: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    headertext1: {
        color: "#024F9D",
        fontSize: 20
    },
    headertext2: {
        color: "#61B846",
        fontSize: 17
    },
    AllProducts: {
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    Eachproducts: {
        display: "flex",
        flexDirection: "row",
        marginVertical: 20,
        alignItems:"center",
        borderRadius:7,
        borderWidth:1,
        borderColor:"#65BD50",
        paddingVertical:20
    }


})

export default Home;