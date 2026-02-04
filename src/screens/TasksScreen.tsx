import { StyleSheet, Text, View } from "react-native";
import { tasks } from "../data/mock";
import { TaskRow } from "../components/TaskRow";
import { Section } from "../components/Section";
import { palette, spacing, typography } from "../theme";

export function TasksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>
      <Text style={styles.subtitle}>Organize suas prioridades com prazos claros.</Text>
      <View style={styles.toolbar}>
        <View style={styles.toolbarItem} />
        <View style={styles.toolbarItem} />
        <View style={styles.toolbarItem} />
      </View>

      <Section title="Hoje">
        {tasks.map((task) => (
          <TaskRow key={task.id} {...task} />
        ))}
      </Section>

      <Section title="Sugestões"> 
        <View style={styles.tipCard}>
          <Text style={styles.tipTitle}>Planeje o dia em 5 minutos</Text>
          <Text style={styles.tipText}>
            Escolha 3 tarefas principais para manter o foco sem sobrecarga.
          </Text>
        </View>
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
  toolbar: {
    flexDirection: "row",
    gap: spacing.sm
  },
  toolbarItem: {
    flex: 1,
    height: 40,
    borderRadius: 12,
    backgroundColor: palette.mist
  },
  tipCard: {
    backgroundColor: palette.cloud,
    borderRadius: 16,
    padding: spacing.md
  },
  tipTitle: {
    fontSize: typography.body,
    fontWeight: "600",
    color: palette.ink
  },
  tipText: {
    marginTop: spacing.xs,
    color: palette.slate,
    fontSize: typography.caption
  }
});
