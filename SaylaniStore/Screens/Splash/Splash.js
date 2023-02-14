import {
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
function Splash() {
    return (
        <View style={styles.main_splash}>
            <View style={{ backgroundColor: "red" }}>
                <View >
                    <Image source={require("../../Assets/images/Frame.png")} />
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    main_splash: {
        flex: 1,
        backgroundColor: "yellow",
        display: "flex",
        justifyContent: "center",
    }

});
export default Splash;