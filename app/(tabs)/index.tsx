import ScreenLayout from "@/components/ScreenLayout";
import { Emoji } from "@/constants/Emoji";
import { MenuButton } from "@/components/navigation/MenuButton";
import { Button } from "@/components/forms/Button";
import { ThemedView } from "@/components/ThemedView";
import { router } from "expo-router";

const items = [
  {
    title: "Личные данные",
    route: "/profile/personal-data",
    icon: "person-circle-outline",
  },
  { title: "Направления", route: "", icon: "school-outline" },
];

export default function HomeScreen() {

  const footer = (
    <ThemedView style={{ paddingHorizontal: 32, paddingVertical: 16 }}>
      <Button text="Выйти из приложения" onPress={() => router.replace('/sign-in')} />
    </ThemedView>
  );

  return (
    <ScreenLayout
      withHeader={false}
      title="Личный кабинет"
      description="В личном кабинете надо создать заявку, выбрать направления подготовки и загрузить документы"
      emoji={Emoji.House}
      footer={footer}
    >
      {items.map((direction) => (
        <MenuButton key={direction.route} {...direction} />
      ))}
    </ScreenLayout>
  );
}
