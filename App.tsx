import { useMemo, useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AuthScreen } from "./src/screens/AuthScreen";
import { DashboardScreen } from "./src/screens/DashboardScreen";
import { FocusScreen } from "./src/screens/FocusScreen";
import { HabitsScreen } from "./src/screens/HabitsScreen";
import { OnboardingScreen } from "./src/screens/OnboardingScreen";
import { ProfileScreen } from "./src/screens/ProfileScreen";
import { ReportsScreen } from "./src/screens/ReportsScreen";
import { TasksScreen } from "./src/screens/TasksScreen";
import { palette, spacing, typography } from "./src/theme";

const tabs = [
  "Dashboard",
  "Tarefas",
  "Hábitos",
  "Foco",
  "Relatórios",
  "Conta"
] as const;

type TabKey = (typeof tabs)[number];

type ScreenKey = "Auth" | "Onboarding" | TabKey;

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenKey>("Dashboard");

  const screenContent = useMemo(() => {
    switch (currentScreen) {
      case "Auth":
        return <AuthScreen />;
      case "Onboarding":
        return <OnboardingScreen />;
      case "Tarefas":
        return <TasksScreen />;
      case "Hábitos":
        return <HabitsScreen />;
      case "Foco":
        return <FocusScreen />;
      case "Relatórios":
        return <ReportsScreen />;
      case "Conta":
        return <ProfileScreen />;
      case "Dashboard":
      default:
        return <DashboardScreen />;
    }
  }, [currentScreen]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.brand}>FocusFlow</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity
            style={[styles.headerChip, currentScreen === "Auth" && styles.headerChipActive]}
            onPress={() => setCurrentScreen("Auth")}
          >
            <Text style={styles.headerChipText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.headerChip, currentScreen === "Onboarding" && styles.headerChipActive]}
            onPress={() => setCurrentScreen("Onboarding")}
          >
            <Text style={styles.headerChipText}>Onboarding</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        {screenContent}
      </ScrollView>

      <View style={styles.tabBar}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabItem, currentScreen === tab && styles.tabItemActive]}
            onPress={() => setCurrentScreen(tab)}
          >
            <Text style={[styles.tabText, currentScreen === tab && styles.tabTextActive]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: palette.cloud
  },
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
    backgroundColor: palette.cloud
  },
  brand: {
    fontSize: typography.subtitle,
    fontWeight: "700",
    color: palette.ink
  },
  headerActions: {
    flexDirection: "row",
    gap: spacing.sm,
    marginTop: spacing.sm
  },
  headerChip: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    backgroundColor: palette.mist,
    borderRadius: 999
  },
  headerChipActive: {
    backgroundColor: palette.ocean
  },
  headerChipText: {
    fontSize: typography.caption,
    color: palette.ink,
    fontWeight: "600"
  },
  content: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
    gap: spacing.lg
  },
  tabBar: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: palette.mist,
    backgroundColor: palette.cloud
  },
  tabItem: {
    flex: 1,
    paddingVertical: spacing.sm,
    alignItems: "center"
  },
  tabItemActive: {
    borderTopWidth: 2,
    borderTopColor: palette.ocean
  },
  tabText: {
    fontSize: typography.caption,
    color: palette.slate
  },
  tabTextActive: {
    color: palette.ocean,
    fontWeight: "600"
  }
});
