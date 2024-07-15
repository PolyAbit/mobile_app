import ScreenLayout from "@/components/ScreenLayout";
import { ThemedView } from "@/components/ThemedView";
import { Emoji } from "@/constants/Emoji";

export default function PersonalData() {
  
  return (
    <ScreenLayout
      title="Личные данные"
      description="Личные данные нужны, чтобы приложение могло идентифицировать пользователя в системах Минобрнауки"
      emoji={Emoji.Document}
    >
      <ThemedView></ThemedView>
    </ScreenLayout>
  );
}
