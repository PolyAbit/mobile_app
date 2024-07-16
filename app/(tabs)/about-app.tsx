import { StyleSheet, Image } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Agreements } from "@/constants/Agreements";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image
          source={require("@/assets/images/polytech.jpg")}
          style={styles.backgroundImage}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">О приложении</ThemedText>
      </ThemedView>
      <ThemedText>
        <ThemedText type="bold">"PolyAbit"</ThemedText> - это сервис для
        поступления в Политех.
      </ThemedText>
      <ThemedText>
        Разработан студентами в качестве научно-исследовательской работы.{" "}
        <ThemedText type="bold">
          Не имеет отношений к реальной приемной комиссии не имеет
        </ThemedText>
      </ThemedText>
      <Collapsible title="Разработчики">
        <ThemedText>
          Cтуденты группы <ThemedText type="bold">5130203/30002</ThemedText>{" "}
          СПбПУ, Александр Кудрявцев и Александр Мураев. Руководитель - Ненад
          Йовановски
        </ThemedText>
      </Collapsible>
      <Collapsible title="Исходный код">
        <ThemedText>
          "PolyAbit" - это open-source проект. Каждый может поучаствовать в его
          развитии
        </ThemedText>
        <ExternalLink href="https://github.com/PolyAbit">
          <ThemedText type="link">GitHub</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Соглашения">
        <ExternalLink href={Agreements.termsOfUse.url}>
          <ThemedText type="link">{Agreements.termsOfUse.text}</ThemedText>
        </ExternalLink>
        <ExternalLink href={Agreements.personalData.url}>
          <ThemedText type="link">{Agreements.personalData.text}</ThemedText>
        </ExternalLink>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  backgroundImage: {
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
