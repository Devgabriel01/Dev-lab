import { StyleSheet, Text, View } from "react-native";
import { focusSessions } from "../data/mock";
import { Section } from "../components/Section";
import { StatCard } from "../components/StatCard";
import { palette, spacing, typography } from "../theme";

export function FocusScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Foco & Pomodoro</Text>
      <Text style={styles.subtitle}>Sessões configuráveis com pausas inteligentes.</Text>

      <View style={styles.timerCard}>
        <Text style={styles.timerLabel}>Sessão em andamento</Text>
        <Text style={styles.timerValue}>18:32</Text>
        <View style={styles.timerControls}>
          <View style={styles.timerButton} />
          <View style={[styles.timerButton, styles.timerButtonPrimary]} />
          <View style={styles.timerButton} />
        </View>
      </View>

      <Section title="Histórico do dia">
        {focusSessions.map((session) => (
          <StatCard
            key={session.id}
            label={session.label}
            value={`${session.minutes} min`}
            accent={palette.lavender}
          />
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
  timerCard: {
    backgroundColor: palette.cloud,
    borderRadius: 20,
    padding: spacing.lg,
    alignItems: "center",
    gap: spacing.sm
  },
  timerLabel: {
    fontSize: typography.caption,
    color: palette.slate
  },
  timerValue: {
    fontSize: 40,
    fontWeight: "700",
    color: palette.ink
  },
  timerControls: {
    flexDirection: "row",
    gap: spacing.sm
  },
  timerButton: {
    width: 48,
    height: 48,
    borderRadius: 16,
    backgroundColor: palette.mist
  },
  timerButtonPrimary: {
    backgroundColor: palette.ocean
  }
});
