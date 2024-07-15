import { Button } from "@/components/forms/Button";
import { TextField } from "@/components/forms/TextField";
import ScreenLayout from "@/components/ScreenLayout";
import { ThemedView } from "@/components/ThemedView";
import { Emoji } from "@/constants/Emoji";
import { useState } from "react";
import { StyleSheet } from "react-native";

export default function PersonalData() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");

  return (
    <ScreenLayout
      title="Личные данные"
      description="Личные данные нужны, чтобы приложение могло идентифицировать пользователя в системах Минобрнауки"
      emoji={Emoji.Document}
    >
      <ThemedView style={style.content}>
        <TextField label="Имя" value={firstName} onChange={setFirstName} />
        <TextField
          label="Отчество, при наличии"
          value={middleName}
          onChange={setMiddleName}
        />
        <TextField label="Фамилия" value={lastName} onChange={setLastName} />

        <Button onPress={() => {}} text="Сохранить" />
      </ThemedView>
    </ScreenLayout>
  );
}

const style = StyleSheet.create({
  content: {
    paddingHorizontal: 32,
    gap: 16,
  },
});
