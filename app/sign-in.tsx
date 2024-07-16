import { Button } from "@/components/forms/Button";
import { TextField } from "@/components/forms/TextField";
import ScreenLayout from "@/components/ScreenLayout";
import { ThemedView } from "@/components/ThemedView";
import { useSession } from "@/contexts/auth";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SignIn() {
  const { signIn } = useSession();
  const { bottom } = useSafeAreaInsets();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    signIn();
    router.replace("/");
  };

  const footer = (
    <ThemedView style={[style.container, { paddingBottom: bottom }]}>
      <Button text="Войти" onPress={handleLogin} />
      <Button text="Создать аккаунт" onPress={() => {}} type="text" />
    </ThemedView>
  );
  return (
    <ScreenLayout
      withHeader={false}
      title="Привет!"
      description="Ты открыл PolyAbit - сервис для поступление в СПбПУ"
      footer={footer}
    >
      <ThemedView style={style.container}>
        <TextField label="E-mail" value={email} onChange={setEmail} />
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
