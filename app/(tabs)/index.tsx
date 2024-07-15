import { StyleSheet } from "react-native";

import ScreenLayout from "@/components/ScreenLayout";
import { Emoji } from "@/constants/Emoji";
import { MenuButton } from "@/components/navigation/MenuButton";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <ScreenLayout
      title="Личный кабинет"
      description="В личном кабинете надо создать заявку, выбрать направления подготовки и загрузить документы"
      emoji={Emoji.House}
    >
      <MenuButton
        title="Личные данные"
        route=""
        icon={<Ionicons id="person" />}
      />
      <MenuButton
        title="Личные данные"
        route=""
        icon={<Ionicons id="person" />}
      />
      <MenuButton
        title="Личные данные"
        route=""
        icon={<Ionicons id="person" />}
      />
      <MenuButton
        title="Личные данные"
        route=""
        icon={<Ionicons id="person" />}
      />
      <MenuButton
        title="Личные данные"
        route=""
        icon={<Ionicons id="person" />}
      />
      <MenuButton
        title="Личные данные"
        route=""
        icon={<Ionicons id="person" />}
      />
      <MenuButton
        title="Личные данные"
        route=""
        icon={<Ionicons id="person" />}
      />
      <MenuButton
        title="Личные данные"
        route=""
        icon={<Ionicons id="person" />}
      />
      <MenuButton
        title="Личные данные"
        route=""
        icon={<Ionicons id="person" />}
      />
      <MenuButton
        title="Личные данные"
        route=""
        icon={<Ionicons id="person" />}
      />
      <MenuButton
        title="Личные данные"
        route=""
        icon={<Ionicons id="person" />}
      />
      <MenuButton
        title="Личные данные"
        route=""
        icon={<Ionicons id="person" />}
      />
      <MenuButton
        title="Личные данные"
        route=""
        icon={<Ionicons id="person" />}
      />
      <MenuButton
        title="Личные данные"
        route=""
        icon={<Ionicons id="person" />}
      />
      <MenuButton
        title="Личные данные"
        route=""
        icon={<Ionicons id="person" />}
      />
      <MenuButton
        title="Личные данные"
        route=""
        icon={<Ionicons id="person" />}
      />
      <MenuButton
        title="Личные данные"
        route=""
        icon={<Ionicons id="person" />}
      />
      <MenuButton
        title="Личные данные"
        route=""
        icon={<Ionicons id="person" />}
      />
      <MenuButton
        title="Личные данные"
        route=""
        icon={<Ionicons id="person" />}
      />
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
