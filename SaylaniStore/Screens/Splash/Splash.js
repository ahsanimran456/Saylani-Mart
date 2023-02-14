import {
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
                <Text>
                    splash screen sadsads
                </Text>
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