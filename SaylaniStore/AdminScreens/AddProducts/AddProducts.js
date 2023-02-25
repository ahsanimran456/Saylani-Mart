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
import { useState } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign'
import DropDownPicker from 'react-native-dropdown-picker';
function AddProducts() {
    const [selectedValue, setSelectedValue] = useState(null);
    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' }
    ];
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
                <View style={styles.allproducts}>
                    <View>
                        <Text style={styles.headertext1}>
                            Add New Items...
                        </Text>
                    </View>
                    <View style={styles.addimg}>
                        <AntDesign name="camerao" size={80} style={{ color: "#828282" }} />
                    </View>
                    <View style={styles.inputs}>
                        <TextInput placeholder='Item Name' placeholderTextColor={"#BDBABA"} pla />
                    </View>
                    <View style={styles.inputs}>
                        <DropDownPicker
                            items={options}
                            defaultValue={selectedValue}
                            placeholder="Select an option"
                            containerStyle={{ height: 40 }}
                            onChangeItem={item => setSelectedValue(item.value)}
                        />
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
    allproducts: {
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    addimg: {
        maxWidth: "100%",
        borderRadius: 7,
        backgroundColor: "#D9D9D9",
        height: 120,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 15,

    },
    inputs: {
        backgroundColor: "#D9D9D9",
        paddingHorizontal: 10,
        color: "#BDBABA",
        borderRadius: 5,
        marginVertical: 5,

    }

})

export default AddProducts;