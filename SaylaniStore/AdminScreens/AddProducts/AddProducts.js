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
import { Dropdown } from 'react-native-element-dropdown';
function AddProducts() {
    const data = [
        { label: 'Item 1', value: '1' },
        { label: 'Item 2', value: '2' },
        { label: 'Item 3', value: '3' },
        { label: 'Item 4', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
    ];
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

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
                        {/* <DropDownPicker
                            items={options}
                            defaultValue={selectedValue}
                            containerStyle={{ height: 50, width: 200, marginTop: 20 }}
                            style={{ backgroundColor: '#fafafa' }}
                            dropDownStyle={{ backgroundColor: '#fafafa' }}
                            onChangeItem={(item) => setSelectedValue(item.value)}
                        /> */}
                        <Dropdown
                            placeholderStyle={styles.dropdownplaceholder}
                            selectedTextStyle={styles.selectedTextStyle}
                            iconStyle={styles.iconStyle}
                            data={data}
                            maxHeight={150}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Select item' : '...'}
                            searchPlaceholder="Search..."
                            value={value}
                            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            itemContainerStyle={styles.dropinner}
                            itemTextStyle={styles.dropinnertext}
                            onChange={item => {
                                setValue(item.value);
                                setIsFocus(false);
                            }}
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
        // height: 200

    },
    dropdownplaceholder: {
        color: "#BDBABA"
    },
    iconStyle: {
        width: 30,
        height: 40,
    },
    dropdown: {

    },
    dropinner: {
        backgroundColor: "#BDBABA"
    },
    selectedTextStyle: {
        color: "black"
    },
    dropinnertext: {
        color: "black"
    }

})

export default AddProducts;