import ScreenLayout from "@/components/ScreenLayout";
import { Emoji } from "@/constants/Emoji";
import { MenuButton } from "@/components/navigation/MenuButton";

const items = [
  { title: "Личные данные", route: "", icon: "person-circle-outline" },
  { title: "Направления", route: "", icon: "school-outline" },
];

export default function HomeScreen() {
  return (
    <ScreenLayout
      title="Личный кабинет"
      description="В личном кабинете надо создать заявку, выбрать направления подготовки и загрузить документы"
      emoji={Emoji.House}
    >
      {items.map((direction) => (
        <MenuButton {...direction} />
      ))}
    </ScreenLayout>
  );
}
