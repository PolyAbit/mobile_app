import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

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

  const handlePress = () => {
    router.push(route);
  };

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
