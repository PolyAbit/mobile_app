import { StyleSheet, TextInput, useColorScheme } from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";

interface ITextFieldProps {
  label: string;
  value: string;
  onChange: (text: string) => void;
}

export function TextField({ label, value, onChange }: ITextFieldProps) {
  const theme = useColorScheme() ?? "light";

  return (
    <ThemedView style={style.container}>
      <ThemedText>{label}:</ThemedText>
      <TextInput
        style={[style.textInput, { borderColor: Colors[theme].border }]}
        value={value}
        onChangeText={onChange}
      />
    </ThemedView>
  );
}

const style = StyleSheet.create({
  container: {
    gap: 8,
    flex: 1,
    flexGrow: 1,
  },
  textInput: {
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderWidth: 1,
    borderRadius: 10,
  },
});
