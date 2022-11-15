import { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";

import PrimaryButtons from "../Components/PrimaryButtons";
import Title from "../Components/Title";
import Colors from "../Constant/colours";
import Card from "../Components/game/Card";
import InstructionText from "../Components/game/InstructionText";

function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  const { width, height } = useWindowDimensions();

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number!", "The Number has to be between 1 to 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    onPickNumber(chosenNumber);
  }

  const marginTopDistance = height < 390 ? 40 : 100;

  return (
    <ScrollView style={styles.scren}>
      <KeyboardAvoidingView style={styles.scren} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <Title>Guess My Number</Title>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={numberInputHandler}
              value={enteredNumber}
            />
            <View style={styles.buttonStyle}>
              <View style={styles.buttonContainer}>
                <PrimaryButtons onPress={resetInputHandler}>
                  Reset
                </PrimaryButtons>
              </View>

              <View style={styles.buttonContainer}>
                <PrimaryButtons onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButtons>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

export default StartGameScreen;

// const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  scren: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    //  marginTop: deviceHeight < 390 ? 40 : 100,
    alignItems: "center",
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 35,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonStyle: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
