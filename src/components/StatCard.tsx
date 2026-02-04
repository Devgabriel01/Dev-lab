import { StyleSheet, Text, View } from "react-native";
import { palette, spacing, typography } from "../theme";

type StatCardProps = {
  label: string;
  value: string;
  accent?: string;
};

export function StatCard({ label, value, accent = palette.ocean }: StatCardProps) {
  return (
    <View style={[styles.card, { borderLeftColor: accent }]}> 
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: palette.cloud,
    padding: spacing.md,
    borderRadius: 16,
    borderLeftWidth: 4,
    shadowColor: palette.ink,
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2
  },
  label: {
    fontSize: typography.caption,
    color: palette.slate
  },
  value: {
    fontSize: typography.subtitle,
    fontWeight: "700",
    color: palette.ink,
    marginTop: spacing.xs
  }
});
