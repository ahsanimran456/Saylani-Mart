import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Dimensions
} from 'react-native';
const { width, height } = Dimensions.get('window')

function Splash() {
    return (
        <View style={styles.main_splash}>
            <View style={{width:width}} >
                <Image style={{marginLeft:10}} source={require("../../Assets/images/Frame.png")} />
            </View>
            <View >
                <Text style={{ textAlign: "center",fontSize:35,fontWeight:800 ,color:"#61B846"}}>
                    SAYLANI WELFARE
                </Text>
            </View>
            <View>
                <Text style={{ textAlign: "center",fontSize:20,fontWeight:600,color:"#024F9D" }}>
                    ONLINE DISCOUNT STORE
                </Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    main_splash: {
        flex: 1,
        // backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        textAlign: "center"
    }

});
export default Splash;