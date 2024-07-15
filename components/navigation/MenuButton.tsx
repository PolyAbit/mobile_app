import {
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { ReactElement } from "react";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

interface IMenuButtonProps {
  title: string;
  route: string;
  icon: string;
  disabled?: boolean;
}

export function MenuButton({
  title,
  route,
  icon,
  disabled = false,
}: IMenuButtonProps) {
  const theme = useColorScheme() ?? "light";

  const handlePress = () => {};

  return (
    <TouchableOpacity disabled={disabled} onPress={handlePress}>
      <ThemedView style={style.container}>
        <Ionicons
          name={icon as any}
          size={40}
          color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
        />
        <ThemedText style={{ flex: 1 }} type="subtitle">
          {title}
        </ThemedText>
        <Ionicons
          name="chevron-forward"
          size={24}
          color={theme === "light" ? Colors.light.icon : Colors.dark.icon}
        />
      </ThemedView>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    zIndex: 1000,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    gap: 16,
    marginBottom: 16,
  },
});
