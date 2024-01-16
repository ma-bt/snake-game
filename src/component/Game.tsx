import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Colors } from "../styles/colors";
import { PanGestureHandler } from "react-native-gesture-handler";
import { GestureEventType } from "../types/type";

const SNAKE_INITIAL_POSITION = [{ x: 5, y: 5 }];
const FOOD_INITIAL_POSITION = [{ x: 5, y: 20 }];
const GAME_BOUNDS = { xMin: 0, xMax: 35, yMin: 0, yMax: 63 }; //these boundaries determine the playable area for the snake within the game, and if the snake tries to go outside this area, the game will end
const MOVE_INTERVAL = 50;
const SCORE_INCREMENT = 10;

export default function Game(): JSX.Element {
  const handleGesture = (event: GestureEventType) => {
    const { translationX, translationY } = event.nativeEvent;
    console.log(translationX, translationY);

    if (Math.abs(translationX) > Math.abs(translationY)) {
      if (translationX > 0) {
        //moving right
      } else {
        //moving left
      }
    } else {
      if (translationY > 0) {
        //moving down
      } else {
        //moving up
      }
    }
  };

  return (
    <PanGestureHandler onGestureEvent={handleGesture}>
      <SafeAreaView style={styles.container}></SafeAreaView>
    </PanGestureHandler>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});
