import ScreenLayout from "@/components/ScreenLayout";
import { Emoji } from "@/constants/Emoji";
import { MenuButton } from "@/components/navigation/MenuButton";
import { Button } from "@/components/forms/Button";
import { ThemedView } from "@/components/ThemedView";
import { Redirect, router } from "expo-router";
import { useSession } from "@/contexts/auth";
import { ActivityIndicator } from "react-native";

const items = [
  {
    title: "Личные данные",
    route: "/profile/personal-data",
    icon: "person-circle-outline",
  },
  {
    title: "Направления",
    route: "/profile/directions",
    icon: "school-outline",
  },
];

export default function HomeScreen() {
  const { session, isLoading, signOut } = useSession();

  if (isLoading) {
    return <ActivityIndicator size="large" />;
  }

  if (!session) {
    return <Redirect href="/sign-in" />;
  }

  const footer = (
    <ThemedView style={{ paddingHorizontal: 32, paddingVertical: 16 }}>
      <Button
        text="Выйти из приложения"
        onPress={() => {
          signOut();
          router.replace("/sign-in");
        }}
      />
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
