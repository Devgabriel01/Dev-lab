import { StyleSheet, Text, View } from "react-native";
import { palette, spacing, typography } from "../theme";

type InsightCardProps = {
  title: string;
  description: string;
};

export function InsightCard({ title, description }: InsightCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: palette.cloud,
    borderRadius: 16,
    padding: spacing.md
  },
  title: {
    fontSize: typography.body,
    fontWeight: "600",
    color: palette.ink
  },
  description: {
    marginTop: spacing.xs,
    color: palette.slate,
    fontSize: typography.caption,
    lineHeight: 18
  }
});
