import ScreenLayout from "@/components/ScreenLayout";
import { Emoji } from "@/constants/Emoji";
import { MenuButton } from "@/components/navigation/MenuButton";

const items = [
  {
    title: "Личные данные",
    route: "/profile/personal-data",
    icon: "person-circle-outline",
  },
  { title: "Направления", route: "", icon: "school-outline" },
];

export default function HomeScreen() {
  return (
    <ScreenLayout
      withHeader={false}
      title="Личный кабинет"
      description="В личном кабинете надо создать заявку, выбрать направления подготовки и загрузить документы"
      emoji={Emoji.House}
    >
      {items.map((direction) => (
        <MenuButton key={direction.route} {...direction} />
      ))}
    </ScreenLayout>
  );
}
