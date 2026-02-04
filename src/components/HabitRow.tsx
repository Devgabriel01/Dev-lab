import { StyleSheet, Text, View } from "react-native";
import { palette, spacing, typography } from "../theme";

type HabitRowProps = {
  title: string;
  frequency: string;
  streak: number;
};

export function HabitRow({ title, frequency, streak }: HabitRowProps) {
  return (
    <View style={styles.row}>
      <View style={styles.streakBadge}>
        <Text style={styles.streakText}>{streak} dias</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.meta}>{frequency}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    backgroundColor: palette.cloud,
    borderRadius: 14,
    padding: spacing.md,
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md
  },
  streakBadge: {
    backgroundColor: palette.mint,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 999
  },
  streakText: {
    fontSize: typography.caption,
    color: "white",
    fontWeight: "700"
  },
  content: {
    flex: 1
  },
  title: {
    fontSize: typography.body,
    fontWeight: "600",
    color: palette.ink
  },
  meta: {
    fontSize: typography.caption,
    color: palette.slate,
    marginTop: spacing.xs
  }
});
