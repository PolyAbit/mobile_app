import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import { DirectionType } from "@/types/direction";

export function DirectionCard({ direction }: { direction: DirectionType }) {
  const { code, name, exams, description } = direction;

  return (
    <ThemedView style={{ gap: 12 }}>
      <ThemedText type="subtitle">{name}</ThemedText>
      <ThemedView>
        <ThemedText>Код: {code}</ThemedText>
        <ThemedText>Экзамены: {exams}</ThemedText>
        {description && <ThemedText>Описание: {description}</ThemedText>}
      </ThemedView>
    </ThemedView>
  );
}
