import { TouchableOpacity, View } from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { ReactElement } from "react";

import { TabBarIcon } from "./TabBarIcon";

interface IMenuButtonProps {
  title: string;
  route: string;
  icon: ReactElement;
}

export function MenuButton({ title, route, icon }: IMenuButtonProps) {
  const handlePress = () => {};

  return (
    <ThemedView>
      <TouchableOpacity onPress={handlePress}>
        <ThemedText>{title}</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}
