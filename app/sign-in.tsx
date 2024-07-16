import { Button } from "@/components/forms/Button";
import { TextField } from "@/components/forms/TextField";
import ScreenLayout from "@/components/ScreenLayout";
import { ThemedView } from "@/components/ThemedView";
import { Api } from "@/constants/Api";
import { useSession } from "@/contexts/auth";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SignIn() {
  const { signIn } = useSession();
  const { bottom } = useSafeAreaInsets();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await fetch(`${Api.Auth}/login`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if (response.status === 200) {
      const { token } = await response.json();
      signIn(token);
      router.replace("/");
    } else {
      const { message } = await response.json();
      Alert.alert("Ошибка", message);
    }
  };

  const handleRegistration = async () => {
    const response = await fetch(`${Api.Auth}/registrate`, {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    if (response.status === 200) {
      Alert.alert(
        "Успешно",
        `Аккаунт на почту ${email} был успешно зарегистрирован`
      );
    } else {
      const { message } = await response.json();
      Alert.alert("Ошибка", message);
    }
  };

  const footer = (
    <ThemedView style={[style.container, { paddingBottom: bottom }]}>
      <Button text="Войти" onPress={handleLogin} />
      <Button text="Создать аккаунт" onPress={handleRegistration} type="text" />
    </ThemedView>
  );

  return (
    <ScreenLayout
      withHeader={false}
      title="Привет!"
      description="Ты открыл PolyAbit - сервис для поступление в СПбПУ. Для твоей безопастности сессии не будут продлеваться"
      footer={footer}
    >
      <ThemedView style={style.container}>
        <TextField
          label="E-mail"
          value={email}
          onChange={(email) => setEmail(email.toLowerCase())}
        />
        <TextField label="Пароль" value={password} onChange={setPassword} />
      </ThemedView>
    </ScreenLayout>
  );
}

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 32,
    gap: 16,
  },
});
