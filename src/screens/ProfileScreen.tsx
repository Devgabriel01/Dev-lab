import { StyleSheet, Text, View } from "react-native";
import { Section } from "../components/Section";
import { palette, spacing, typography } from "../theme";

export function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conta & Plano</Text>
      <Text style={styles.subtitle}>Gerencie assinatura, segurança e preferências.</Text>

      <View style={styles.planCard}>
        <Text style={styles.planLabel}>Plano atual</Text>
        <Text style={styles.planValue}>FocusFlow Premium</Text>
        <View style={styles.planButton} />
      </View>

      <Section title="Segurança">
        <View style={styles.listItem}>
          <Text style={styles.listText}>Autenticação com Google/Apple</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listText}>2FA (em breve)</Text>
        </View>
      </Section>

      <Section title="Preferências">
        <View style={styles.listItem}>
          <Text style={styles.listText}>Modo escuro automático</Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listText}>Backup em nuvem ativo</Text>
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
  planCard: {
    backgroundColor: palette.cloud,
    borderRadius: 16,
    padding: spacing.md,
    gap: spacing.sm
  },
  planLabel: {
    fontSize: typography.caption,
    color: palette.slate
  },
  planValue: {
    fontSize: typography.subtitle,
    fontWeight: "700",
    color: palette.ink
  },
  planButton: {
    height: 40,
    borderRadius: 12,
    backgroundColor: palette.ocean
  },
  listItem: {
    backgroundColor: palette.cloud,
    padding: spacing.md,
    borderRadius: 12
  },
  listText: {
    fontSize: typography.body,
    color: palette.ink
  }
});
