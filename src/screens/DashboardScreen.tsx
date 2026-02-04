import { StyleSheet, Text, View } from "react-native";
import { habits, insights, tasks } from "../data/mock";
import { HabitRow } from "../components/HabitRow";
import { InsightCard } from "../components/InsightCard";
import { Section } from "../components/Section";
import { StatCard } from "../components/StatCard";
import { TaskRow } from "../components/TaskRow";
import { palette, spacing, typography } from "../theme";

export function DashboardScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, Mariana</Text>
      <Text style={styles.subtitle}>Seu foco hoje está ótimo. Vamos manter o ritmo?</Text>

      <View style={styles.statsGrid}>
        <StatCard label="Tarefas de hoje" value="5" accent={palette.ocean} />
        <StatCard label="Hábitos ativos" value="3" accent={palette.mint} />
        <StatCard label="Pomodoro" value="02:15" accent={palette.lavender} />
      </View>

      <Section title="Check-in emocional" subtitle="Como você se sente agora?">
        <View style={styles.moodRow}>
          {['😌', '🙂', '😐', '😔', '😣'].map((emoji) => (
            <View key={emoji} style={styles.moodChip}>
              <Text style={styles.moodText}>{emoji}</Text>
            </View>
          ))}
        </View>
      </Section>

      <Section title="Tarefas do dia" subtitle="Prioridades com prazo">
        {tasks.map((task) => (
          <TaskRow key={task.id} {...task} />
        ))}
      </Section>

      <Section title="Hábitos em andamento" subtitle="Sequências ativas">
        {habits.map((habit) => (
          <HabitRow key={habit.id} {...habit} />
        ))}
      </Section>

      <Section title="Insights rápidos" subtitle="Baseado na última semana">
        {insights.map((insight) => (
          <InsightCard key={insight.id} {...insight} />
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
  statsGrid: {
    gap: spacing.sm
  },
  moodRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: spacing.sm
  },
  moodChip: {
    backgroundColor: palette.cloud,
    padding: spacing.sm,
    borderRadius: 14,
    flex: 1,
    alignItems: "center"
  },
  moodText: {
    fontSize: 18
  }
});
