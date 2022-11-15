import { View, StyleSheet, Dimensions } from "react-native";

import Colors from "../../Constant/colours";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    marginTop: deviceWidth < 380 ? 16 : 35,
    padding: 8,
    backgroundColor: Colors.primary800,
    borderRadius: 10,
    elevation: 5,
  },
});
