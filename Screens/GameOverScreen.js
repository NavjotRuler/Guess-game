import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";

import PrimaryButtons from "../Components/PrimaryButtons";
import Title from "../Components/Title";
import Colors from "../Constant/colours";

function GameOverScreen({ roundNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width > 360) {
    imageSize = 100;
  }

  if (height > 800) {
    imageSize = 60;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>Game Over!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/image/success.png")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your Phone needed <Text style={styles.highlight}>{roundNumber}</Text>{" "}
          rounds to guess the number {""}
          <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
        <PrimaryButtons onPress={onStartNewGame}>Start New Game</PrimaryButtons>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: deviceWidth < 360 ? 150 : 300,
    // height: deviceWidth < 360 ? 150 : 300,
    // borderRadius: deviceWidth < 360 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 25,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
  screen: {
    flex: 1,
  },
});
