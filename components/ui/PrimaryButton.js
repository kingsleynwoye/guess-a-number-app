import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constants/colors";


function PrimaryButton({ children, onPress }) {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={styles.buttonContainer} onPress={onPress} android_ripple={{ color: Colors.primary600 }}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: "hidden"
    },
    buttonContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2
    },
    buttonText: {
        color: "white",
        textAlign: "center"
    },
    // Ripple-effect for IOS
    pressed: {
        opacity: 0.75
    }
})