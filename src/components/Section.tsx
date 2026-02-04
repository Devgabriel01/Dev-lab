import { PropsWithChildren } from "react";
import { StyleSheet, Text, View } from "react-native";
import { palette, spacing, typography } from "../theme";

type SectionProps = PropsWithChildren<{
  title: string;
  subtitle?: string;
}>;

export function Section({ title, subtitle, children }: SectionProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>{title}</Text>
          {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        </View>
      </View>
      <View style={styles.body}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.lg
  },
  header: {
    marginBottom: spacing.sm
  },
  title: {
    fontSize: typography.subtitle,
    color: palette.ink,
    fontWeight: "600"
  },
  subtitle: {
    fontSize: typography.caption,
    color: palette.slate,
    marginTop: spacing.xs
  },
  body: {
    gap: spacing.sm
  }
});
