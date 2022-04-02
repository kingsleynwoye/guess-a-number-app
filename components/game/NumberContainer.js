import {View, Text, StyleSheet, Dimensions} from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({children}) {
    return (
     <View style={styles.container}>
         <Text style={styles.numberText}>{children}</Text>
     </View>
    )
}

export default NumberContainer;

const deviveWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: { 
     borderWidth: 4,
     borderColor: Colors.accent500,
     padding: deviveWidth < 380 ? 12 : 23,
        margin: deviveWidth < 380 ? 12 : 23,
     borderRadius: 8,
     alignItems: "center",
     justifyContent: "center"
  },
  numberText: {
      color: Colors.accent500,
      fontSize: deviveWidth < 380 ? 28 : 36,
      fontFamily: "open-sans-bold"
  }
}); 