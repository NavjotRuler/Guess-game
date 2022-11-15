import { Text, StyleSheet, Platform } from "react-native";

import Colors from "../Constant/colours";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 25,
    // fontWeight: "bold",
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: "white",
    padding: 10,
    maxWidth: "80%",
    width: 300,
    marginTop: 20,
    marginBottom: 10,
  },
});
