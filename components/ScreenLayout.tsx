import { ReactElement, useEffect, type PropsWithChildren } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { ThemedView } from "@/components/ThemedView";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedText } from "./ThemedText";
import { AnimatedEmoji } from "./AnimatedEmoji";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import { useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

type Props = PropsWithChildren<{
  title: string;
  emoji?: string;
  description?: string;
  withHeader?: boolean;
  footer?: ReactElement | null;
}>;

const HEADER_HEIGHT = 175;

export default function ScreenLayout({
  children,
  title,
  description = "",
  emoji = undefined,
  withHeader = true,
  footer = null,
}: Props) {
  const { top } = useSafeAreaInsets();
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const navigation = useNavigation();

  useEffect(() => {
    if (withHeader) {
      navigation.setOptions({
        title,
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back" size={22} />
          </TouchableOpacity>
        ),
      });
    }
  }, []);

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  return (
    <ThemedView
      style={[styles.container, withHeader ? {} : { paddingTop: top }]}
    >
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
        <Animated.View style={[styles.header, headerAnimatedStyle]}>
          <ThemedView style={styles.titleContainer}>
            <ThemedText type="title">{title}</ThemedText>
            <AnimatedEmoji emoji={emoji} />
          </ThemedView>
          {description && <ThemedText>{description}</ThemedText>}
        </Animated.View>
        <ThemedView>{children}</ThemedView>
      </Animated.ScrollView>
      {footer && (
        <ThemedView>
          {footer}
        </ThemedView>
      )}
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 32,
    paddingBottom: 8,
    gap: 16,
    overflow: "hidden",
    height: HEADER_HEIGHT,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
  },
});
