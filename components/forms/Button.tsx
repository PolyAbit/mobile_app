import { StyleSheet, TouchableOpacity, useColorScheme } from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";

interface IButtonProps {
  text: string;
  onPress: () => void;
}

export function Button({ text, onPress }: IButtonProps) {
  const theme = useColorScheme() ?? "light";

  return (
    <TouchableOpacity onPress={onPress}>
      <ThemedView
        style={[style.container, { backgroundColor: Colors[theme].tint }]}
      >
        <ThemedText type="bold" style={style.text}> {text}</ThemedText>
      </ThemedView>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    borderRadius: 14,
    paddingHorizontal: 20,
    paddingVertical: 14,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: "#fff",
  },
});
