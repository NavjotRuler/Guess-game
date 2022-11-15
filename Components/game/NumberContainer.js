import { Text, View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../Constant/colours";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

export default NumberContainer;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: deviceWidth < 360 ? 8 : 16,
    margin: deviceWidth < 360 ? 8 : 16,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    fontFamily: "open-sans-bold",
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 20 : 40,
    // fontWeight: "bold",
  },
});
