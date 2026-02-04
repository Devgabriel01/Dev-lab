import { StyleSheet, Text, View } from "react-native";
import { palette, spacing, typography } from "../theme";

export function AuthScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar no FocusFlow</Text>
      <Text style={styles.subtitle}>Autenticação segura com e-mail, Google ou Apple.</Text>
      <View style={styles.card}>
        <Text style={styles.label}>E-mail</Text>
        <View style={styles.inputPlaceholder} />
        <Text style={styles.label}>Senha</Text>
        <View style={styles.inputPlaceholder} />
        <View style={styles.primaryButton} />
        <Text style={styles.helper}>Esqueceu a senha? Recuperar acesso</Text>
      </View>
      <View style={styles.socialRow}>
        <View style={styles.socialButton} />
        <View style={styles.socialButton} />
      </View>
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
    gap: spacing.sm
  },
  label: {
    fontSize: typography.caption,
    color: palette.slate
  },
  inputPlaceholder: {
    height: 44,
    borderRadius: 12,
    backgroundColor: palette.mist
  },
  primaryButton: {
    height: 46,
    borderRadius: 14,
    backgroundColor: palette.ocean,
    marginTop: spacing.sm
  },
  helper: {
    fontSize: typography.caption,
    color: palette.slate
  },
  socialRow: {
    flexDirection: "row",
    gap: spacing.sm
  },
  socialButton: {
    flex: 1,
    height: 44,
    borderRadius: 12,
    backgroundColor: palette.mist
  }
});
