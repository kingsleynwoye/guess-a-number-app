import { View, Text, StyleSheet, Alert} from "react-native";
import Title from "../components/ui/Title";
import {useState} from "react";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameScreen({userNumber}) {
    let minBoundry = 1;
    let maxBoundry = 100;

    const initialGuess = generateRandomBetween(minBoundry, maxBoundry, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
  // Computer guess
    function generateRandomBetween(min, max, exclude) {
        const rndNum = Math.floor(Math.random() * (max - min)) + min;

        if (rndNum === exclude) {
            return generateRandomBetween(min, max, exclude);
        } else {
            return rndNum;
        }
    }

    function nextGuessHandler(direction) {
         // direction => "lower" or "greater"
         if((direction === "lower" && currentGuess < userNumber) ||
          (direction === "greater" && currentGuess >userNumber) ) {
              Alert.alert("Don't lie!", "You know that this is wrong...", [{text: "Sorry!", style: "cancel"}])
              return;
          }
         if(direction === "lower") {
             maxBoundry = currentGuess;
         } else {
             minBoundry = currentGuess + 1;
        }
        const newRandomNumber = generateRandomBetween(minBoundry, maxBoundry, currentGuess);
        setCurrentGuess(newRandomNumber);
    };

 return (
    <View style={styles.screen}>
        <Title>Opponent's Guess</Title>
          <NumberContainer>{currentGuess}</NumberContainer>
         <View>
           <Text>Higher or Lower?</Text>
             <View>
                 <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>-</PrimaryButton>
                 <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>+</PrimaryButton>
                 </View>
         </View>
         <View>
             {/* LOG ROUNDS */}
         </View>
    </View>
 );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
            flex: 1,
            padding: 24
    },
   
})