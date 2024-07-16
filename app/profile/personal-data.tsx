import { Button } from "@/components/forms/Button";
import { TextField } from "@/components/forms/TextField";
import ScreenLayout from "@/components/ScreenLayout";
import { ThemedView } from "@/components/ThemedView";
import { Emoji } from "@/constants/Emoji";
import { FetchError, http } from "@/services/http";
import { ProfileType } from "@/types/profile";
import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, StyleSheet } from "react-native";

export default function PersonalData() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [middleName, setMiddleName] = useState("");

  const [loading, setLoading] = useState(false);

  const fetchProfile = async () => {
    setLoading(true);
    const response = await http<ProfileType>("/profile", { method: "GET" });

    if ("userId" in response) {
      const profile: ProfileType = response;

      setFirstName(profile.firstName);
      setMiddleName(profile.middleName);
      setLastName(profile.lastName);
    } else {
      const error: FetchError = response;
      Alert.alert("Ошибка", error.error);
    }
    setLoading(false);
  };

  const handleSave = async () => {
    setLoading(true);
    const response = await http<ProfileType>("/profile", {
      method: "PUT",
      body: JSON.stringify({ firstName, lastName, middleName }),
    });

    if ("userId" in response) {
      Alert.alert("Успешно", "Профиль успешно обновлен");
    } else {
      const error: FetchError = response;
      Alert.alert("Ошибка", error.error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <ScreenLayout
      title="Личные данные"
      description="Личные данные нужны, чтобы приложение могло идентифицировать пользователя в системах Минобрнауки"
      emoji={Emoji.Document}
    >
      {loading && <ActivityIndicator size="large" />}
      <ThemedView style={style.content}>
        <TextField label="Имя" value={firstName} onChange={setFirstName} />
        <TextField
          label="Отчество, при наличии"
          value={middleName}
          onChange={setMiddleName}
        />
        <TextField label="Фамилия" value={lastName} onChange={setLastName} />

        <Button onPress={handleSave} text="Сохранить" />
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
