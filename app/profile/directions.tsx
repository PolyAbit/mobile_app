import { DirectionCard } from "@/components/cards/DirectionCard";
import ScreenLayout from "@/components/ScreenLayout";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Emoji } from "@/constants/Emoji";
import { FetchError, http } from "@/services/http";
import { DirectionsType, DirectionType } from "@/types/direction";
import { useEffect, useState } from "react";
import { ActivityIndicator, Alert, StyleSheet } from "react-native";

export default function Directions() {
  const [loading, setLoading] = useState(false);
  const [directions, setDirections] = useState<DirectionType[]>([]);

  useEffect(() => {
    const fetchDirections = async () => {
      setLoading(true);
      const response = await http<any>("/direction", {
        method: "GET",
      });

      if ("error" in response) {
        const error: FetchError = response;
        Alert.alert("Ошибка", error.error);
      } else {
        const value: DirectionsType = response;
        setDirections(value.directions);
      }
      setLoading(false);
    };

    fetchDirections();
  }, []);

  return (
    <ScreenLayout
      title="Направления подготовки"
      description="Найдите по описанию интересное направление подготовки"
      emoji={Emoji.Education}
    >
      {loading && <ActivityIndicator size="large" />}
      <ThemedView style={style.content}>
        {directions.map((direction) => (
          <DirectionCard direction={direction} key={direction.id} />
        ))}
      </ThemedView>
    </ScreenLayout>
  );
}

const style = StyleSheet.create({
  content: {
    paddingHorizontal: 32,
    gap: 24,
  },
});
