import "react-native-gesture-handler";
import Game from "./src/component/Game";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const App = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <Game />
  </GestureHandlerRootView>
);

export default App;
