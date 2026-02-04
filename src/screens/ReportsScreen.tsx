import { StyleSheet, Text, View } from "react-native";
import { ProgressBar } from "../components/ProgressBar";
import { Section } from "../components/Section";
import { StatCard } from "../components/StatCard";
import { palette, spacing, typography } from "../theme";

export function ReportsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Relatórios</Text>
      <Text style={styles.subtitle}>Visão semanal e mensal para manter a constância.</Text>

      <View style={styles.summaryGrid}>
        <StatCard label="Produtividade" value="82%" accent={palette.ocean} />
        <StatCard label="Constância" value="74%" accent={palette.mint} />
      </View>

      <Section title="Foco semanal">
        <View style={styles.chartCard}>
          <View style={styles.chartRow}>
            <Text style={styles.chartLabel}>Seg</Text>
            <ProgressBar value={70} color={palette.lavender} />
          </View>
          <View style={styles.chartRow}>
            <Text style={styles.chartLabel}>Qua</Text>
            <ProgressBar value={55} color={palette.lavender} />
          </View>
          <View style={styles.chartRow}>
            <Text style={styles.chartLabel}>Sex</Text>
            <ProgressBar value={85} color={palette.lavender} />
          </View>
        </View>
      </Section>

      <Section title="Insights"> 
        <View style={styles.insightCard}>
          <Text style={styles.insightTitle}>Picos de foco entre 14h e 17h</Text>
          <Text style={styles.insightText}>
            Programe tarefas mais exigentes nesse período para melhores resultados.
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
  summaryGrid: {
    gap: spacing.sm
  },
  chartCard: {
    backgroundColor: palette.cloud,
    padding: spacing.md,
    borderRadius: 16,
    gap: spacing.sm
  },
  chartRow: {
    gap: spacing.xs
  },
  chartLabel: {
    fontSize: typography.caption,
    color: palette.slate
  },
  insightCard: {
    backgroundColor: palette.cloud,
    padding: spacing.md,
    borderRadius: 16
  },
  insightTitle: {
    fontSize: typography.body,
    fontWeight: "600",
    color: palette.ink
  },
  insightText: {
    fontSize: typography.caption,
    color: palette.slate,
    marginTop: spacing.xs
  }
});
