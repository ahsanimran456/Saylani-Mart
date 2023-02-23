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
                <View style={styles.headerparent }>
                    <View>
                        <AntDesign name="left" size={30} style={{ color: "#BFBCBC" }} />
                        <View>
                            <Image source={require("../../Assets/images/item6.jpg")}/>
                        </View>
                    </View>
                    <View></View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    headerparent:{
        paddingHorizontal:10,
        paddingVertical:10

    }
})

export default Home;