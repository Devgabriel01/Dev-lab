import { StyleSheet, Text, View } from "react-native";
import { habits } from "../data/mock";
import { HabitRow } from "../components/HabitRow";
import { ProgressBar } from "../components/ProgressBar";
import { Section } from "../components/Section";
import { palette, spacing, typography } from "../theme";

export function HabitsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hábitos</Text>
      <Text style={styles.subtitle}>Acompanhe sequências e progresso semanal.</Text>

      <View style={styles.streakCard}>
        <Text style={styles.streakLabel}>Sequência geral</Text>
        <Text style={styles.streakValue}>8 dias</Text>
        <ProgressBar value={72} color={palette.mint} />
      </View>

      <Section title="Ativos">
        {habits.map((habit) => (
          <HabitRow key={habit.id} {...habit} />
        ))}
      </Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.lg
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
  streakCard: {
    backgroundColor: palette.cloud,
    padding: spacing.md,
    borderRadius: 16,
    gap: spacing.sm
  },
  streakLabel: {
    fontSize: typography.caption,
    color: palette.slate
  },
  streakValue: {
    fontSize: typography.subtitle,
    fontWeight: "700",
    color: palette.ink
  }
});
