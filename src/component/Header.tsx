import { Touchable, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "../styles/colors";

interface HeaderProps {
  reloadGame: () => void;
  pauseGame: () => void;
  children: JSX.Element;
  isPause: boolean;
}

export default function Header ({
    reloadGame,
    pauseGame,
    children,
    isPause
}: HeaderProps) : JSX.Element {
    return (
        <View>
<TouchableOpacity onPress={reloadGame}>
    {/* <Ionicons name='reload-circle' size={35} color={Colors.primary} /> */}
</TouchableOpacity>
        </View>
    )
}