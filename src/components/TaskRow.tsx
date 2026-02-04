import { StyleSheet, Text, View } from "react-native";
import { palette, spacing, typography } from "../theme";

type TaskRowProps = {
  title: string;
  category: string;
  priority: string;
  due: string;
};

export function TaskRow({ title, category, priority, due }: TaskRowProps) {
  return (
    <View style={styles.row}>
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{category}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.meta}>{`${priority} · ${due}`}</Text>
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
  badge: {
    backgroundColor: palette.mist,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 999
  },
  badgeText: {
    fontSize: typography.caption,
    color: palette.slate,
    fontWeight: "600"
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
