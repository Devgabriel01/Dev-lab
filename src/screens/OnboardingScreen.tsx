import { StyleSheet, Text, View } from "react-native";
import { palette, spacing, typography } from "../theme";

export function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao FocusFlow</Text>
      <Text style={styles.subtitle}>
        Defina seus objetivos para personalizar o app: foco, estudos e bem-estar.
      </Text>
      <View style={styles.card}>
        <View style={styles.optionRow}>
          <View style={[styles.icon, { backgroundColor: palette.lavender }]} />
          <Text style={styles.optionText}>Aumentar foco diário</Text>
        </View>
        <View style={styles.optionRow}>
          <View style={[styles.icon, { backgroundColor: palette.seafoam }]} />
          <Text style={styles.optionText}>Organizar estudos</Text>
        </View>
        <View style={styles.optionRow}>
          <View style={[styles.icon, { backgroundColor: palette.sun }]} />
          <Text style={styles.optionText}>Reduzir ansiedade</Text>
        </View>
      </View>
      <View style={styles.primaryButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.md
  },
  title: {
    fontSize: typography.title,
    fontWeight: "700",
    color: palette.ink
  },
  subtitle: {
    color: palette.slate,
    fontSize: typography.body
  },
  card: {
    backgroundColor: palette.cloud,
    borderRadius: 16,
    padding: spacing.md,
    gap: spacing.md
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm
  },
  icon: {
    width: 28,
    height: 28,
    borderRadius: 8
  },
  optionText: {
    fontSize: typography.body,
    color: palette.ink
  },
  primaryButton: {
    height: 48,
    borderRadius: 14,
    backgroundColor: palette.ocean
  }
});
