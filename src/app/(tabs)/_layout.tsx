import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Platform, StyleSheet } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
        tabBarActiveTintColor: "#2563EB",
        tabBarInactiveTintColor: "#94A3B8",
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabBarItem,
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }: any) => (
            <Ionicons
              name={(focused ? "person" : "person-outline") as any}
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="portfolio"
        options={{
          title: "Portfolio",
          tabBarIcon: ({ color, focused }: any) => (
            <Ionicons
              name={(focused ? "briefcase" : "briefcase-outline") as any}
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="score"
        options={{
          title: "My Score",
          tabBarIcon: ({ color, focused }: any) => (
            <Ionicons
              name={(focused ? "stats-chart" : "stats-chart-outline") as any}
              size={22}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarIcon: ({ color, focused }: any) => (
            <Ionicons
              name={(focused ? "mail" : "mail-outline") as any}
              size={22}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#0F172A",
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitle: {
    color: "#F8FAFC",
    fontWeight: "700",
    fontSize: 18,
  },
  tabBar: {
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
    height: Platform.OS === "ios" ? 88 : Platform.OS === "web" ? 68 : 70,
    paddingBottom: Platform.OS === "ios" ? 28 : Platform.OS === "web" ? 4 : 6,
    paddingTop: Platform.OS === "web" ? 6 : 8,
    elevation: 8,
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
  },
  tabBarItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarLabel: {
    fontSize: 11,
    fontWeight: "600",
    marginTop: 1,
    marginBottom: Platform.OS === "web" ? 2 : 0,
  },
});
